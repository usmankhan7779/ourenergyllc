import { Component, OnInit, ViewChild } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import Swal from 'sweetalert2';
import { MatPaginator, MatTableDataSource } from '@angular/material'
import { Subscription } from 'rxjs/Subscription';
import { ServerSocketService } from '../header/server-socket.service';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
    showSpinner
    showSpinner1
    x
    y
    newOffer
    OfferProduct
    error
    selectProductBtnDisabled
    showMessageResponse: boolean
    public socketSubscription: Subscription
    @ViewChild(MatPaginator) paginator: MatPaginator
    dataSource = new MatTableDataSource()
    paymentColumns = ['pn', 'ad', 't1', 't2', 't3', 'tf']
    myHeaders: any = new HttpHeaders().set('content-type', 'application/json')
    constructor(private socket: ServerSocketService, private http: HttpClient) { }

    ngOnInit() {
        window.scrollTo(0, 0)
        this.x = setTimeout(() => { this.showSpinner = true }, 2000)
        this.y = setTimeout(() => { this.showSpinner1 = true }, 2000)
        this.GetOffer()
        this.getOfferHistory()
        const stream = this.socket.connect()
        this.socketSubscription = stream.subscribe(response => {
            if (response.Type != 'image') {
                this.GetOffer()
                this.getOfferHistory()
            }
        })
    }

    ngOnDestroy(): void {
        this.socketSubscription.unsubscribe();
    }

    GetOffer() {
        this.newOffer = null
        this.http.get(environment.url + 'customers/get-cust-offer/', {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        }).subscribe(res => {
            if (res['status'] == true) {
                this.newOffer = res['message']
                this.showMessageResponse = true
                clearTimeout(this.y)
                this.showSpinner1 = false
            }
            else {
                this.showMessageResponse = false
                clearTimeout(this.y)
                this.showSpinner1 = false
            }
        })
    }

    offerHistoryarrayLength

    getOfferHistory() {
        this.error = null
        this.http.get(environment.url + 'customers/accepted-offer/', { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') } }).subscribe(res => {
            if (res['status'] == true) {
                this.dataSource.data = res['message']
                clearTimeout(this.x)
                this.offerHistoryarrayLength = res['message'].length
                this.showSpinner = false
            } else {
                this.error = "No Records Found."
                clearTimeout(this.x)
                this.showSpinner = false
            }
        }, err => {
            this.error = "Could not connect to server, please try again."
            clearTimeout(this.x)
            this.showSpinner = false
        })
    }

    RenewNow(data) {
        let obj = {
            offer_id: data['offer_id'],
            offer_pk: data['offer_pk'],
            id: data['id'],
        }
        Swal({
            title: 'Are you sure?',
            text: "You want to Accept this Offer!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.value) {
                this.http.put(environment.url + 'customers/get-cust-offer/', obj, { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') } }).subscribe(res => {
                    if (res['status'] == true) {
                        Swal('Offer accepted.', '', 'success').then(result => {
                            this.GetOffer()
                            this.getOfferHistory()
                        })
                    } else {
                        Swal('Some error occurred, please try again', '', 'error')
                    }
                })
            }
        })
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim().toLowerCase();
        this.dataSource.filter = filterValue;
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator
    }
}