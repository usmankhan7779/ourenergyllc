import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core'
import { UsageService, CustomerService } from '../../Store/Services'
import * as Chart from 'chart.js'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { MatDialogRef, MatDialog } from '@angular/material'
import { MAT_DIALOG_DATA } from '@angular/material'
import { ProductsService } from '../../Store/Services/products.service'
import { Subscription } from 'rxjs/Subscription';
import { ServerSocketService } from '../header/server-socket.service';
import { BillDetailsService } from '../../Store/Services/bill-details.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  @ViewChild('chartAmount') charts: ElementRef
  @ViewChild('chartUsage') chars: ElementRef
  @ViewChild('Save') downloads: ElementRef

  constructor(private socket: ServerSocketService, public dialog: MatDialog, 
private details: BillDetailsService,
    private http: HttpClient, private usage: UsageService, private customerService: CustomerService, private productService: ProductsService) { }
  public socketSubscription: Subscription
  bills
  showSpinner1
  showSpinner = true
  billdetails: boolean = false
  // public socketSubscription: Subscription
  UsageChart
  PayChart
  usages = []
  month = []
  amount = []
  months = []
  custInfo = []
  meter
  past_due
  homeInfo: boolean = false
  ShowPromoCode: boolean = false
  // showSpinner
  showMessageResponse: boolean
  request = true
  x
  smartMeter
  error
  products
  PlanInformation
  offerLength
  showOfferMessage

  getOffers() {
    this.http.get(environment.url + 'customers/get-cust-offer', { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') } }).subscribe(res => {
      if (res['status'] == true) {
        let newOffer
        newOffer = res['message']
        this.offerLength = newOffer.length
        this.showOfferMessage = true
      } else {
        this.showOfferMessage = false
      }
    })
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.x = setTimeout(() => {
      this.showSpinner = true
    }, 2000)
    window.scrollTo(0, 0)
    this.GetOffer();
    this.getdetails()
    // this.x = setTimeout(() => { this.showSpinner = true }, 2000)
    // this.y = setTimeout(() => { this.showSpinner1 = true }, 2000)

    // const stream = this.socket.connect()
    // this.socketSubscription = stream.subscribe(response => {
      // if (response.Type == 'Bill' || response.Type == 'Payment') { this.getdetails() }
    // })
    this.getOffers()
    this.getCustomerData()
    this.getMeterInfo()
    this.getProducts()
    const stream = this.socket.connect()
    this.socketSubscription = stream.subscribe(response => {

      ////this is code 
      if (response.Type == 'Bill' || response.Type == 'Payment') { this.getdetails() }
      ////
      if (response.Type != 'image') {
        this.getOffers()
        this.getCustomerData()
        this.getMeterInfo()
        this.getProducts()
      }
    })
  }
  // ngOnDestroy(): void {
  //   this.socketSubscription.unsubscribe();
  // }

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

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.PlanInformation = [response['message']]
    })
  }

  getMeterInfo() {
    this.customerService.getMeterInfo().subscribe(res => {
      if (res['status'] == true) {
        this.meter = [res["message"]]
        if (this.meter[0].smart_meter_flag == "S") {
          this.smartMeter = "Smart Meter"
        } else {
          this.smartMeter
        }
      } else {
        this.meter = []
      }
    })
  }

  errMsg1
  errMsg2
  ngAfterViewInit() {
    setTimeout(() => {
      this.usage.getGraph().subscribe(res => {
        if (res['status'] == true) {
          this.errMsg1 == null
          this.amount = res['payments']['usage']
          this.months = res['payments']['month']
          var acb = this.charts.nativeElement
          var PayChart = new Chart(acb, {
            type: 'line',
            data: {
              labels: this.months,
              datasets: [{
                label: 'Amount',
                data: this.amount,
                lineTension: 0.3,
                pointBorderWidth: 5,
                pointBorderColor: '#0BB5FF',
                backgroundColor: '#ff4270',
                // backgroundColor: "#ff4270 ",
                // pointBorderColor: '#0BB5FF',
                // backgroundColor: '#67C8FF',
                borderColor: '#0BB5FF',
                borderWidth: 3
              }]
            },
            options: {
              scales: {
                // yAxes: false,
                yAxes: [{
                  ticks: {
                    fontSize: 14
                  }
                }],
                xAxes: [{
                  ticks: {
                    fontSize: 14
                  }
                }]
              },
              legend: {
                display: false,
              },
              tooltips: {
                displayColors: false,
                titleFontSize: 13,
                bodyFontSize: 18,
                bodyFontStyle: 'bold',
                callbacks: {
                  label: function (tooltipItem, data) {
                    let label = `$${data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]}`
                    return label;
                  },
                  title: function (tooltipItem, data) {
                    let title = `${data['labels'][tooltipItem[0]['index']]}`
                    return title;
                  }
                }
              }
            }
          })
          this.errMsg2 == null
          this.usages = res['bills']['usage']
          this.month = res['bills']['month']
          var acc = this.chars.nativeElement
          var UsageChart = new Chart(acc, {
            type: 'doughnut',
            data: {
              labels: this.month,
              datasets: [{
                label: 'Usage',
                data: this.usages,
                lineTension: 0.3,
                   backgroundColor: "#ff4270 ",
                // backgroundColor: [
                //   '#82CFFD',
                  
                //   '#67C8FF',
                //   '#82CFFD',
                //   '#67C8FF',
                //   '#82CFFD',
                //   '#67C8FF',
                //   '#82CFFD',
                //   '#67C8FF',
                //   '#82CFFD',
                //   '#67C8FF',
                //   '#82CFFD',
                //   '#67C8FF',
                // ],
                borderColor: '#eeeeee',
                // borderColor: '#eeeeee',
                borderWidth: 2
              }]
            },
            options: {
              scales: {
                yAxes: false
              },
              // legend: {
              //   display: false,
              // },
              tooltips: {
                displayColors: false,
                titleFontSize: 13,
                bodyFontSize: 18,
                bodyFontStyle: 'bold',
                callbacks: {
                  label: function (tooltipItem, data) {
                    let label = `${data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']]} kWh`
                    return label;
                  },
                  title: function (tooltipItem, data) {
                    let title = `${data['labels'][tooltipItem[0]['index']]}`
                    return title;
                  }
                }
              }
            }
          })
        }
        else {
          this.errMsg1 = res['message']
          this.errMsg2 = res['message']
        }
      })
    }, 500)
  }
  date
  
    y
  newOffer;
  GetOffer() {
    // this.newOffer = null
    this.http.get(environment.url + 'customers/get-cust-offer/', {
        'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
    }).subscribe(res => {
        if (res['status'] == true) {
            this.newOffer = res['message']
            this.date = res
            // alert(this.date)
            this.showMessageResponse = true
            clearTimeout(this.y)
            // this.showSpinner1 = false
        }
        else {
            this.showMessageResponse = false
            clearTimeout(this.y)
            // this.showSpinner1 = false
        }
    })
}
  PromoDialogOpen() {
    this.dialog.open(PromoCodeModal, {
      width: "600px",
      data: this.products
    })
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }
}

@Component({
  selector: 'PromoCodeModal',
  templateUrl: './PromoCodeModal.html',
  styleUrls: ['./PromoCodeModal.scss'],
})
export class PromoCodeModal implements OnInit {
  constructor(public dialogRef: MatDialogRef<DashboardHomeComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  products = []
  ngOnInit() {
    this.products = this.data
  }
  onCloseConfirm() {
    this.dialogRef.close()
  }
}