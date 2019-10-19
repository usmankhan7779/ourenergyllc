import { Component, OnInit, ViewChild } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import Swal from 'sweetalert2';
import { MatPaginator, MatTableDataSource } from '@angular/material'
import { Subscription } from 'rxjs/Subscription';
import { ServerSocketService } from '../header/server-socket.service';
// import { EnrollmentService } from '../Store/Services/enroll.service';
import { Router } from '@angular/router';
// import { MainService, PromoCodeService } from '../../Container/Store/Services';
import { EnrollmentService } from '../../Store/Services/enroll.service';
import { PromoCodeService, CustomerService } from '../../Store/Services';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  showSpinner
  showSpinner1
  value
  x
  y
  promoCode = '';
  newOffer
  OfferProduct
  products;
  error
  ZipCode = localStorage.getItem('zip')
  // selectProductBtnDisabled
  showMessageResponse: boolean
  public socketSubscription: Subscription
  @ViewChild(MatPaginator) paginator: MatPaginator
  dataSource = new MatTableDataSource()
  paymentColumns = ['pn', 'ad', 't1', 't2', 't3', 'tf']
  myHeaders: any = new HttpHeaders().set('content-type', 'application/json')
  router: Router
  constructor(private socket: ServerSocketService, _router: Router, private customerService: CustomerService, private promos: PromoCodeService, private http: HttpClient, private enrollment: EnrollmentService) { }

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
    this.getuserhist();

  }
  res
  request = true;
  BillAddress = [];
  ServiceAddress = [];
  zip;
  getuserhist() {
    this.customerService.getBillAddress().subscribe(response => {
      this.res = response
      if (response["status"] == true) {
        this.request = true
        clearTimeout(this.x)
        this.showSpinner = false
        this.BillAddress = [response["message"]]
        console.log(this.BillAddress)
        // let bills  = this.BillAddress
        //           company_name: ""
        // cust_address1: ""
        // cust_address2: "3500 S ECHO TRL"
        // cust_city: "PLANO"
        // cust_firstname: "AMBREEN"
        // cust_id: "1302280001"
        // cust_lastname: "JAFRI"
        // cust_state: "TX"
        // cust_zip: "75023"
        // premise_id: "10443720004171858"

        this.zip = response["message"]["cust_zip"].replace(/(\d{5})(\d{4})/, "$1-$2")
      }
    }, err => {
      this.request = false;
      clearTimeout(this.x)
      if (err["status"] == 404) {
        this.error = "Not Found"
      }
      if (err["status"] == 400) {
        this.error = "Bad Request"
      }
      if (err["status"] == 0) {
        this.error = "cannot connect to server"
      }
    });
  }
  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }
  date;

  GetOffer() {
    this.newOffer = null
    this.http.get(environment.url + 'customers/get-cust-offer/', {
      'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
    }).subscribe(res => {
      if (res['status'] == true) {
        this.newOffer = res['message']
        this.date = res
        // alert(this.date)
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

  // RenewNow(data) {
  //     let obj = {
  //         offer_id: data['offer_id'],
  //         offer_pk: data['offer_pk'],
  //         id: data['id'],
  //     }
  //     Swal({
  //         title: 'Are you sure?',
  //         text: "You want to Accept this Offer!",
  //         type: 'warning',
  //         showCancelButton: true,
  //         confirmButtonColor: '#3085d6',
  //         cancelButtonColor: '#d33',
  //         confirmButtonText: 'Yes!'
  //     }).then((result) => {
  //         if (result.value) {
  //             this.http.put(environment.url + 'customers/get-cust-offer/', obj, { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') } }).subscribe(res => {
  //                 if (res['status'] == true) {
  //                     Swal('Offer accepted.', '', 'success').then(result => {
  //                         this.GetOffer()
  //                         this.getOfferHistory()
  //                     })
  //                 } else {
  //                     Swal('Some error occurred, please try again', '', 'error')
  //                 }
  //             })
  //         }
  //     })
  // }






  product_tos_url; ourenergy; product_efl_url; offer_id; offer_pk; id;
  //   offer_id: data['offer_id'],
  //   offer_pk: data['offer_pk'],
  //   id: data['id'],
  product_name; tariff_500; tariff_1000; tariff_2000; display_term; display_termination_fee; vendor_company
  getvalue(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13) {
    //value.product_name,value.tariff_500,value.tariff_1000,value.tariff_2000,
    // value.display_term,value.display_termination_fee,value.vendor_company,value.product_tos_url,https://www.ourenergyllc.com/prodox/yrac.pdf,value.product_efl_url
    this.product_name = val1;
    this.tariff_500 = val2;
    this.tariff_1000 = val3;
    this.tariff_2000 = val4;
    this.display_term = val5;
    this.display_termination_fee = val6;
    this.vendor_company = val7;
    this.product_tos_url = val8;
    this.ourenergy = val9;
    this.product_efl_url = val10;
    this.offer_id = val11;
    this.offer_pk = val12;
    this.id = val13;
    console.log(val1, val2, val3, val4, val5, val6, val7, val8, val9, val10)


  }
  RenewNow(data) {
    let obj = {
      // offer_id: data['offer_id'],
      // offer_pk: data['offer_pk'],
      // id: data['id'],
      offer_id: this.offer_id,
      offer_pk: this.offer_pk,
      id: this.id,
    }
    // Swal({
    //     title: 'Are you sure?',
    //     text: "You want to Accept this Offer!",
    //     type: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes!'
    // }).then((result) => {
    // if (result.value) {
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
    // }
    // })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }
  view_result() {
    this.promos.uaCheck().subscribe(res => {
      if (res['message']['bypass'] == true && res['message']['ua'] == false) {
        localStorage.setItem('ua', "False")
      }
      else localStorage.setItem('ua', "True")
    })
    // if (this.promoCode == null) { this.promoCode = "" }
    let data = {
      zip_code: this.ZipCode,
      promo_code: "" + this.promoCode,
      client: "WattGenie-Web"
    }
    this.promos.searchPlan(data).subscribe(res => {
      console.log(res)
      // localStorage.removeItem('duns')
      // if (res["status"] == false) {
      //   this.showError = true
      //   this.error = res["Error"]
      //   this.submitBtnDisabled = false
      // }
      // if (res["status"] == true) {
      //   // this.showSpinner = false
      //   // this.showError = false
      //   // this.submitBtnDisabled = false
      //   if (res["tdsp_status"] == false) {
      //     localStorage.setItem('duns', res['message'][0]['provider_id'])
      //     this.showFilteredProducts = true
      //     this.showPlans = true
      this.products = res["message"]
      //     localStorage.setItem('promotionCode', JSON.stringify(res['promo_code']))
      //     localStorage.removeItem('zip')
      //     this.submitBtnDisabled = false
      //   }
      //   else {
      //     this.showTdsp = true
      //     this.tdsps = res['message']['row']
      //     this.submitBtnDisabled = false
      //   }
      // }
      // else if (res["status"] == false) {
      //   this.showFilteredProducts = false
      //   this.showSpinner = false
      //   this.showError = true
      //   this.showPlans = false
      //   this.error = res["message"]
      //   localStorage.removeItem('zip')
      //   this.submitBtnDisabled = false
      // }
    })

  }
//   checked1(i){
// alert('usman 1')
//   }
check1;
check2;
check3;
check4;
checks =[]
buttonVisible
  checked1(event, i) {
        if(this.check1==true){
          this.checks.push(this.check1)
        }
        else if(this.check1==false){
        }
   
       if(this.checks.length==4) 
     {
       this.buttonVisible=true
     }
}
checked2(event, i) {
      if(this.check2==true){
     this.checks.push(this.check2)
      }
      else if(this.check2==false){
      }
 
     if(this.checks.length==4) 
     {
       this.buttonVisible=true
     } 
}

checked3(event, i) {
      if(this.check3==true){
     this.checks.push(this.check3)
      }
      else if(this.check3==false){
      }
 
     if(this.checks.length==4) 
     {
       this.buttonVisible=true
     }  
}

checked4(event, i) {
      if(this.check4==true){
     this.checks.push(this.check4)
      }
      else if(this.check4==false){
      }
 
     if(this.checks.length==4) 
     {
       this.buttonVisible=true
     }
}



  selectProductBtnDisabled: boolean[] = []
  enroll(i) {
    this.selectProductBtnDisabled[i] = true
    let data = {
      product_pk: this.newOffer[i].id,
      enroll_product: this.newOffer[i].product_id,
      rate: this.newOffer[i].rate,
      batch_rate: this.newOffer[i].batch_rate,
      contract_term: this.newOffer[i].term,
    }
    this.enrollment.sendProductDataForSession(data).subscribe(res => {
      if (res['status'] == true) {
        this.selectProductBtnDisabled[i] = false
        localStorage.setItem('zip', this.ZipCode)
        this.router.navigate(['/enroll'])

        localStorage.setItem('productSummary', JSON.stringify(this.newOffer[i]))
      }
      if (res["status"] == false && res["redirect_url"] != null && res["redirect_url"] != undefined && res["redirect_url"] != '') {
        Swal('Your session has expired. Please refresh the page and try again', '', 'error').then(() => {
          this.selectProductBtnDisabled[i] = false
          this.ngOnInit()
        })
      }
      else {
        this.selectProductBtnDisabled[i] = false
      }
    }, () => {
      this.selectProductBtnDisabled[i] = false
    })
  }
}
