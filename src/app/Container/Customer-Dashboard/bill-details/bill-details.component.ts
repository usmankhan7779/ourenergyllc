import { Component, OnInit } from '@angular/core';
import { UsageService, CustomerService } from '../../Store/Services';
import { MatDialog } from '@angular/material';
import { environment } from '../../../../environments/environment';
import { BillDetailsService } from '../../Store/Services/bill-details.service';
import { ServerSocketService } from '../header/server-socket.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.scss']
})
export class BillDetailsComponent implements OnInit {
  constructor(private socket: ServerSocketService,   private http: HttpClient ,private customerService: CustomerService, private details: BillDetailsService, public dialog: MatDialog) { }
  bills
  showSpinner = true
  ShowPromoCode: boolean = false
  billdetails: boolean = false
  homeInfo: boolean = false;
  custInfo = []
  products;
  error;
  request = true
  x
  username;

  public socketSubscription: Subscription

  ngOnInit() {
    window.scrollTo(0, 0)
    this.getdetails()
    this.getCustomerData()
this.username = localStorage.getItem('username')
    const stream = this.socket.connect()
    this.socketSubscription = stream.subscribe(response => {
      if (response.Type == 'Bill' || response.Type == 'Payment') { this.getdetails() }
    })
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }

  getdetails() {
    this.details.getService().subscribe(res => {
      this.showSpinner = false
      this.billdetails = true
      this.bills = [res["message"]]
      localStorage.setItem("bill-details", JSON.stringify(res["message"]))
    })
  }
  getCustomerData() {
    this.customerService.getdata().subscribe(response => {
      let product = []
      if (response['message']['contract_renewal_eligibility'] == 1) {
        this.ShowPromoCode = false
        this.http.post(environment.url + 'enroll/products-from-promo/', { promo_id: response['message']['eligible_offers'].toString() }, {
          'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
        }).subscribe(res => {
          product = res['message']
          if (res['status'] == true) {
            this.ShowPromoCode = true
            this.products = product
          }
          else if (res['status'] == false) {
            this.ShowPromoCode = false
            this.products = [{ dani: 'danial' }]
          }
        })
      }
      this.request = true
      clearTimeout(this.x)
      this.showSpinner = false
      if (response["status"] == true) {
      }
      this.homeInfo = true
      this.custInfo = [response['message']]
      localStorage.setItem('dashboard_response', JSON.stringify([response['message']]))
      localStorage.setItem('custid', response['message']['cust_id'])
      localStorage.setItem('utility', response['message']['utility_name'])
    }, err => {
      this.request = false
      clearTimeout(this.x)
      this.showSpinner = false
      if (err["status"] == 404) {
        this.error = "Not Found"
      }
      if (err["status"] == 400) {
        this.error = "Bad Request"
      }
      if (err["status"] == 0) {
        this.error = "cannot connect to server"
      }
    })
  }
  toggle_name(){
    $('.s_fix_cont').slideToggle('slow');
    $('i.toggle_icon').toggleClass('fa-angle-down fa-angle-up');
  }
}