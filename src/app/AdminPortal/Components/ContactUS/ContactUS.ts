import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { MatPaginator, MatTableDataSource } from '@angular/material'
import { environment } from '../../../../environments/environment'
import { Observable } from 'rxjs'
import "rxjs/Rx"
import "rxjs/add/operator/debounceTime"
import "rxjs/add/operator/distinctUntilChanged"
import Swal from 'sweetalert2'

@Component({
    selector: 'contactus',
    templateUrl: './ContactUS.html',
    styleUrls: ['../../Styles/ContactUS.scss', '../../Styles/Table2.scss']
})
export class ContactUSComponent implements OnInit {
    constructor(private http: HttpClient) { }
    portalDataSource = new MatTableDataSource()
    portalDisplayedColumns = ['cid', 'r', 'sts', 'n', 'topic', 'message', 'date_created']
    ErrorMessage
    portalSearchParameter
    siteSearchParameter
    isSubmittedDisabled = []
    isStatusDisabled = []

    @ViewChild(MatPaginator) portalPaginator: MatPaginator
    @ViewChild("portalSearchBar") portalSearchBar: ElementRef

    ngOnInit() {
        this.resetPaginator()
        Observable.fromEvent(this.portalSearchBar.nativeElement, "keyup")
            .map((evt: any) => evt.target.value)
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe((text: string) => {
                this.getPortalCustomerQueries(text, "" + this.portalPaginator.pageIndex, "" + this.portalPaginator.pageSize)
            })
        this.getPortalCustomerQueries("", "" + this.portalPaginator.pageIndex, "" + this.portalPaginator.pageSize)
    }

    getPortalCustomerQueries(qs: string, l, u) {
        let url = `${environment.url}portal/get-contactus/`
        if (qs != "" && qs != null && qs != undefined) { url = `${url}quick-search${qs}/` }
        url = `${url}${l}/${u}/`
        this.http.get(url, { 'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` } }).subscribe(res => {
            if (res['status'] == true) {
                this.portalPaginator.length = res['total_count']
                this.portalDataSource.data = res['message']
            }
        })
    }

    resolve(value) {
        this.isStatusDisabled[value.id] = true
        let data = { id: value.id }
        this.http.put(`${environment.url}portal/put-contactus/`, data).subscribe(res => {
            if (res['status'] == true) {
                this.isStatusDisabled[value.id] = false
                this.ngOnInit()
            }
            else {
                Swal(res['message'], '', 'error').then(res => this.isSubmittedDisabled[value.id] = false)
            }
        }, err => Swal(err, '', 'error').then(res => this.isSubmittedDisabled[value.id] = false))
    }

    sendToSigma(value) {
        this.isSubmittedDisabled[value.id] = true
        let data = { id: value.id }
        this.http.post(`${environment.url}portal/put-contactus/`, data).subscribe(res => {
            if (res['status'] == true) {
                this.isSubmittedDisabled[value.id] = false
                this.ngOnInit()
            }
            else {
                Swal(res['message'], '', 'error').then(res => this.isSubmittedDisabled[value.id] = false)
            }
        }, err => Swal(err, '', 'error').then(res => this.isSubmittedDisabled[value.id] = false))
    }

    resetPaginator() {
        this.portalPaginator.pageIndex = 0
        this.portalPaginator.pageSize = 25
    }

    ngAfterViewInit() {
        this.portalPaginator.page.subscribe(() => {
            this.getPortalCustomerQueries(this.portalSearchParameter, (this.portalPaginator.pageIndex * this.portalPaginator.pageSize), ((this.portalPaginator.pageIndex + 1) * this.portalPaginator.pageSize))
        })
    }
    refresh() {
        this.ngOnInit();
    }
}

@Component({
    selector: 'contactuss',
    templateUrl: './contact-us.html',
    styleUrls: ['../../Styles/ContactUS.scss', '../../Styles/Table2.scss']
})
export class ContactUssComponent implements OnInit {
    constructor(private http: HttpClient) { }
    siteDataSource = new MatTableDataSource()
    siteDisplayedColumns = ['n', 'r', 'e', 'm', 'msg', 'date_created']
    ErrorMessage
    portalSearchParameter
    siteSearchParameter
    isStatusDisabled = []

    @ViewChild(MatPaginator) sitePaginator: MatPaginator
    @ViewChild("siteSearchBar") siteSearchBar: ElementRef

    ngOnInit() {
        this.resetPaginator()
        Observable.fromEvent(this.siteSearchBar.nativeElement, "keyup")
            .map((evt: any) => evt.target.value)
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe((text: string) => {
                this.getSiteCustomerQueries(text, "" + this.sitePaginator.pageIndex, "" + this.sitePaginator.pageSize)
            })
        this.getSiteCustomerQueries("", "" + this.sitePaginator.pageIndex, "" + this.sitePaginator.pageSize)
    }

    getSiteCustomerQueries(qs: string, l, u) {
        let url = `${environment.url}customers/contactus-in-range/`
        if (qs != "" && qs != null && qs != undefined) { url = `${url}quick-search${qs}/` }
        url = `${url}${l}/${u}/`
        this.http.get(url, { 'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` } }).subscribe(res => {
            if (res['status'] == true) {
                this.sitePaginator.length = res['total_count']
                this.siteDataSource.data = res['message']
            }
        })
    }

    resolve(value) {
        this.isStatusDisabled[value.id] = true
        let data = { id: value.id }
        this.http.put(`${environment.url}customers/put-contactus/`, data).subscribe(res => {
            if (res['status'] == true) {
                this.isStatusDisabled[value.id] = false
                this.ngOnInit()
            }
            else {
                this.isStatusDisabled[value.id] = false
            }
        }, err => { this.isStatusDisabled[value.id] = false })
    }

    resetPaginator() {
        this.sitePaginator.pageIndex = 0
        this.sitePaginator.pageSize = 25
    }

    ngAfterViewInit() {
        this.sitePaginator.page.subscribe(() => {
            this.getSiteCustomerQueries(this.siteSearchParameter, (this.sitePaginator.pageIndex * this.sitePaginator.pageSize), ((this.sitePaginator.pageIndex + 1) * this.sitePaginator.pageSize))
        })
    }

    refresh() {
        this.ngOnInit();
    }
}