import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
    selector: 'promotions',
    templateUrl: './Promotions.html',
    styleUrls: ['../../Styles/Promotions.scss', '../../Styles/Table2.scss']
})
export class Promotions implements OnInit {

    ios: number
    and: number
    web: number

    constructor(private http: HttpClient) { }
    @ViewChild(MatPaginator) paginator: MatPaginator
    displayedColumns: string[] = ['sb', 'id', 'acc_id', 'bypass', 'us', 'date', 'paydate', 'datetime'];
    dataSource = new MatTableDataSource();
    searchValue = ''
    searchControl = new FormControl('')
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }
    ngOnInit() {
        this.payCount()
        this.onChanges()
        this.setPaginator()
        this.getPayment(``, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize)
        this.paginator.page.subscribe(() => {
            this.getPayment(``, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize)
        })
    }
    payCount() {
        this.http.get(environment.url + "portal/successful-payment-counts/").subscribe(res => {
            console.log(res)
            this.ios = res['message']['Ios']
            this.and = res['message']['Andriod']
            this.web = res['message']['Web']
        })
    }
    setPaginator() {
        this.paginator.pageIndex = 0
        this.paginator.pageSize = 20
    }
    onChanges(): void {
        this.searchControl.valueChanges.pipe(debounceTime(1000)).pipe(distinctUntilChanged()).subscribe(val => {
            this.searchValue = val
            this.setPaginator()
            this.getPayment(val, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize)
        })
    }
    getPayment(search, lower, upper) {
        if (this.searchValue != '') {
            search = this.searchValue
        }
        search = this.completeChecker(search) ? `/${search}` : ``
        this.http.get(`${environment.url}integration/payment-with-range${search}/${lower}/${upper}/`, {
            'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
        }).subscribe(res => {
            if (search != '') {
                this.paginator.length = res['totalcount']
            }
            else {
                this.paginator.length = res['total_count']
            } if (res['status'] == true) {
                this.dataSource.data = res['message']
            }
        })
    }
    completeChecker(value) {
        return value != null && value != undefined && value != "" ? true : false
    }
    refresh() {
        this.ngOnInit();
    }
}
