import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef , Output , EventEmitter } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MainService, PromoCodeService } from '../../Container/Store/Services';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { EnrollmentService } from '../Store/Services/enroll.service';
import { UserService } from '../../always-auth.service';
import { EnrollmentComponent } from '../../enrollment/enrollment.component';
import Swal from 'sweetalert2';
import { RecapchaService } from '../../recapcha/recapcha.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
// import { google } from '@agm/core/services/google-maps-types';
declare var $: any;
export class errorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  hide = true;
  hide1 = true;
  hide2 = true;
  router: Router
  constructor(_router: Router, private http: HttpClient,private promos: PromoCodeService,private enrollment: EnrollmentService) {
    this.router = _router
  }
  promoCode = '';
  zipCode;
  ZipCode = localStorage.getItem('zip');
  matcher = new errorMatcher();
  setPosition(position) {
    // if (!localStorage.getItem('zip')) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      //33.0604
      //-96.7333
      this.http.get('https://apis.wattcrm.com/portal/zipcode-by-lat-lng/lat-->' + position.coords['latitude']  + '/lng-->' + position.coords['longitude']  +'/').subscribe(Res => {
        console.log(Res);
        if(Res['status'] == true){
        this.zipCode = Res['message']
       
        this.view_result(this.zipCode);
      }
        else if (Res['status'] == false)
        {
          this.zipCode = '75023'
          this.view_result(this.zipCode);
        }
      });
      }
    // }
  ngOnInit() {

    window.scrollTo(0, 0); 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      // navigator.geolocation.getCurrentPosition(this.getzipcode.bind(this));
    }
    var myIndex = 0;
    carousel();
    function carousel() {
      var i
      var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
      }
      myIndex++
      if (myIndex > x.length) {
        myIndex = 1
      }
   
      // x[myIndex - 1].style.display = "block"
      setTimeout(carousel, 1000)
    }

  }

  products;
  view_result(zip_codes){
    this.promos.uaCheck().subscribe(res => {
      if (res['message']['bypass'] == true && res['message']['ua'] == false) {
        localStorage.setItem('ua', "False")
      }
      else localStorage.setItem('ua', "True")
    })
    // if (this.promoCode == null) { this.promoCode = "" }
    let data = {
      zip_code: zip_codes,
      promo_code: "" + this.promoCode,
      client: "WattGenie-Web"
    }
    this.promos.searchPlanhome_page(data).subscribe(res => {
      console.log(res)
       
          this.products = res["message"]
          // let pro = res['message']
          for (let pro of this.products)
          {
            console.log(pro.id)
          }
          console.log(this.products.id)
     
    })
  
  }
  selectProductBtnDisabled: boolean[] = []
  enroll(i) {
    this.selectProductBtnDisabled[i] = true
    let data = {
      product_pk: this.products[i].id,
      enroll_product: this.products[i].product_id,
      rate: this.products[i].rate,
      batch_rate: this.products[i].batch_rate,
      contract_term: this.products[i].term,
    }
    this.enrollment.sendProductDataForSession(data).subscribe(res => {
      if (res['status'] == true) {
        this.selectProductBtnDisabled[i] = false
        localStorage.setItem('zip', this.ZipCode)
        this.router.navigate(['/enroll'])

        localStorage.setItem('productSummary', JSON.stringify(this.products[i]))
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
  onSubmit() {
    if (this.zipCode != "" && this.zip_code.errors == null) {
      localStorage.setItem('promoCode', this.promoCode)
      localStorage.setItem('zip', this.zipCode)
      this.router.navigate([`search-plan/${this.zipCode}`])
    }
  }

  digitsOnly = '^[0-9]+$'
  public results: any
  public zip
  promo = new FormControl('', [
    Validators.required
  ])
  zip_code = new FormControl('', [
    Validators.pattern(this.digitsOnly), Validators.required
  ])
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./main.component.scss']
})
export class AboutUsComponent implements OnInit {
  @ViewChild('form') froms: ElementRef
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')]),
    message: new FormControl('', [Validators.required])
  })
  cap_result
  btnDisabled
  constructor(public recapcha: RecapchaService, private changeDetectorRef: ChangeDetectorRef, public contact: MainService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    window.scrollTo(0, 0)
    var myIndex = 0
    carousel()

    function carousel() {
      var i
      var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
      }
      myIndex++
      if (myIndex > x.length) {
        myIndex = 1
      }
      x[myIndex - 1].style.display = "block"
      setTimeout(carousel, 1000)
    }
  }
  submit() {
    let status = this.recapcha.check()
    if (status == false) {
      this.cap_result = "Please re-enter text"
    }
    else {
      this.cap_result = ""
    }
    if (this.myForm.valid && status == true) {
      this.btnDisabled = true
      this.contact.establishContact(this.myForm.value).subscribe(res => {
        if (res['status']) {
          Swal("" + res['message'], '', "success").then(() => {
            this.btnDisabled = false
            this.froms.nativeElement.reset()
            this.changeDetectorRef.detectChanges()
          })
        } else {
          this.btnDisabled = false
          this.snackBar.open(" Something went wrong, please try again later.", 'close', {
            duration: 1000
          })
        }
      }, () => {
        this.btnDisabled = false
        this.snackBar.open(" Something went wrong, please try again later.", 'close', {
          duration: 1000
        })
      })
    }
  }
  get f() { return this.myForm.controls }
}


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./main.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  ngOnInit() { window.scrollTo(0, 0) }
}

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./main.component.scss']
})
export class CommercialComponent implements OnInit {
  @ViewChild('form') froms: ElementRef
  ngOnInit() {
    window.scrollTo(0, 0)
   
  }
  
  

  btnDisabled
  constructor(public recapcha: RecapchaService, private getQoute: MainService, public snackBar: MatSnackBar, private changeDetectorRef: ChangeDetectorRef) { }
  cap_result
  commercialForm = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
    BusinessName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
    BusinessType: new FormControl(''),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Telephone: new FormControl('', [Validators.pattern('^[0-9-]+$')]),
    Mobile: new FormControl('', [Validators.pattern('^[0-9-]+$')]),
    ElectricityUsage: new FormControl('', [Validators.pattern('^(0|[1-9][0-9]*)$')]),
    Notes: new FormControl('')
  })
  get f() { return this.commercialForm.controls }
  businessType = [
    { value: 'B', businesstype: 'Building' },
    { value: 'R', businesstype: 'Restaurant' },
    { value: 'S', businesstype: 'Store' },
    { value: 'M', businesstype: 'Manufacturing Plant' },
    { value: 'Of', businesstype: 'Office' },
    { value: 'O', businesstype: 'Other' },
  ]
  submit() {
    let status = this.recapcha.check()
    if (status == false) {
      this.cap_result = "Please re-enter text"
    }
    else {
      this.cap_result = ""
    }
    if (this.commercialForm.valid && status == true) {
      this.btnDisabled = true
      let obj = this.commercialForm.value
      this.getQoute.GetYourQoute(obj).subscribe(res => {
        if (res['status'] == true) {
          Swal('' + res['message'], '', 'success').then(() => {
            this.btnDisabled = false
            this.froms.nativeElement.reset()
            this.changeDetectorRef.detectChanges()
          })
        }
        else {
          Swal("" + res['message'], '', "error").then(() => {
            this.btnDisabled = false
          })
        }
      }, () => {
        Swal("Could not connect to server, please try again", '', "error").then(() => {
          this.btnDisabled = false
        })
      })
    }
  }
}

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./main.component.scss']
})
export class PlansComponent implements OnInit {
  ngOnInit() { window.scrollTo(0, 0) }
}

@Component({
  selector: 'app-residentials',
  templateUrl: './residentials.component.html',
  styleUrls: ['./main.component.scss']
})
export class ResidentialsComponent implements OnInit {
  tabOne = true
  tabTwo
  tabThree
  constructor() { }
  ngOnInit() {
    window.scrollTo(0, 0)
  }

  tab1() {
    this.tabOne = true
    this.tabTwo = false
    this.tabThree = false

  }
  tab2() {
    this.tabOne = false
    this.tabThree = false
    this.tabTwo = true
  }
  tab3() {
    this.tabOne = false
    this.tabThree = true
    this.tabTwo = false
  }
}

@Component({
  selector: 'app-term-condition',
  templateUrl: './term-condition.component.html',
  styleUrls: ['./main.component.scss']
})
export class TermConditionComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    window.scrollTo(0, 0)
  }
}

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./main.component.scss']
})
export class BrokersComponent implements OnInit {
  @ViewChild('form') brokers: ElementRef
  panelOpenState: boolean = false
  cap_result
  btnDisabled
  abc
  constructor(public recapcha: RecapchaService, private broker: MainService, public snackBar: MatSnackBar, public changedetector: ChangeDetectorRef, private fb: FormBuilder) { }

  myForm = this.fb.group({
    AgentID: new FormControl(''),
    firstname: new FormControl('', [Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneno: new FormControl('', [Validators.required, Validators.pattern('^[0-9-]*$')]),
    lastname: new FormControl('', [Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(128)]),
    confirm_password: new FormControl(''),
    companyname: new FormControl('', [Validators.required])
  }, { validator: this.checkIfMatchingPasswords('password', 'confirm_password') })

  private checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

  errorEmail = null
  errorUsername = null
  errorCompanyName = null

  submit() {
    let status = this.recapcha.check()
    if (status == false) {
      this.cap_result = "Please re-enter text"
    }
    else {
      this.cap_result = ""
      if (this.myForm.valid) {
        this.btnDisabled = true
        this.errorEmail = null
        this.errorUsername = null
        this.errorCompanyName = null
        let obj = this.myForm.value
        this.broker.BrokerApp(obj).subscribe(res => {
          if (res['status'] == true) {
            Swal("" + res['message'], '', "success").then(() => {
              this.btnDisabled = false
              this.brokers.nativeElement.reset()
              this.changedetector.detectChanges()
            })
          }
          else {
            if (res['message'].hasOwnProperty('username')) {
              let msg
              msg = res['message']['username'][0].slice(18).toLowerCase()
              this.errorUsername = msg.charAt(0).toUpperCase() + msg.slice(1)
            }
            if (res['message'].hasOwnProperty('email')) {
              let msg
              msg = res['message']['email'][0].slice(18).toLowerCase()
              this.errorEmail = msg.charAt(0).toUpperCase() + msg.slice(1)
            }
            if (res['message'].hasOwnProperty('companyname')) {
              let msg
              msg = res['message']['companyname'][0].slice(18).toLowerCase()
              this.errorCompanyName = msg.charAt(0).toUpperCase() + msg.slice(1)
            }
            this.btnDisabled = false
          }
        }, () => {
          Swal("Could not connect to server, please try again", '', "error").then(() => {
            this.btnDisabled = false
          })
        })
      }
    }
  }

  get f() {
    return this.myForm.controls
  }

  ngOnInit() {
    window.scrollTo(0, 0)
  }
}

@Component({
  selector: 'app-energy-saving',
  templateUrl: './energy-saving.component.html',
  styleUrls: ['./main.component.scss']
})
export class EnergySavingComponent implements OnInit {
  ngOnInit() { window.scrollTo(0, 0) }
  loadmorebtn = "Load More"
  loadMore() {
    if (this.loadmorebtn == "Load More") {
      this.loadmorebtn = 'Show Less'
    }
    else if (this.loadmorebtn == "Show Less") {
      this.loadmorebtn = "Load More"
    }
  }
  loadMoretab() {
    if (this.loadmorebtn == "Load More") {
      this.loadmorebtn = "Load More"
    }
    else if (this.loadmorebtn = "Show Less") {
      this.loadmorebtn = "Load More"
    }
  }
}

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./main.component.scss']
})
export class SpecialsComponent implements OnInit {
  ngOnInit() { window.scrollTo(0, 0) }
}

@Component({
  selector: 'search-plan',
  templateUrl: './search-plan.html',
  styleUrls: ['./main.component.scss']
})
export class PlanSearchComponent {
  constructor(public promo: PromoCodeService, public router: Router, private route: ActivatedRoute, private enrollment: EnrollmentService) { }
  matcher = new errorMatcher()

  contractTerm = new FormControl();
  contractTermList = ['36 Months', '24 Months', '18 Months', '14 Months', '12 Months', '6 Months'];
  @ViewChild('findProducts') findProducts: ElementRef;
  showSpinner: boolean = false
  showPlans: boolean = false
  showTdsp: boolean = false
  showError: boolean = false
  submitBtnDisabled: boolean = false
  promoC
  para
  image
  ZipCode = localStorage.getItem('zip')
  promoCode = localStorage.getItem('promoCode')
  zip_code = new FormControl('', [Validators.pattern('^[0-9]+$'), Validators.required])
  abc = [
    { "market_id": "" },
    { "promo_code": `${this.promoCode}` },
    { "vendor_id": "" },
    { "vendor_group": "" },
    { "pm_duns": "" },
    { "plan_group": "" },
    { "plan_id": "" },
    { "plan_group_type": "POS" }
  ]

  Array1 = []
  Array2 = []
  promoCodeArray = []
  products
  tdsps
  error
  x
  average1 : boolean = true;
  average2 : boolean = false;
  average3: boolean = false;
  ngOnInit() {
    this.products = []
    this.tdsps = []
    window.scrollTo(0, 0)
    this.route.params.subscribe(res => {
      if (res.PromoCode != null && res.PromoCode != "" && res.PromoCode != undefined) {
        this.promoCode = res.PromoCode
      }
      if (res.ZipCode != null && res.ZipCode != "" && res.ZipCode != undefined) {
        this.ZipCode = res.ZipCode
        setTimeout(() => {
          this.submit()
        }, 1)
      }
    })
  }
averge_500(){
  this.average1 = true
  this.average2 = false
  this.average3 = false
}
averge_1000(){
  this.average1 = false
  this.average2 = true
  this.average3 = false
}
averge_2000(){
  this.average1 = false
  this.average2 = false
  this.average3 = true
}


  searchPlansByTdsps(value) {
    this.showTdsp = false
    this.showSpinner = null
    this.x = setTimeout(() => {
      if (this.showSpinner == null) { this.showSpinner = true }
    }, 1500)
    localStorage.setItem('duns', value)
    let data = {
      provider_id: value,
      promo_code: this.promoCode
    }
    this.promo.searchPlanByTdsp(data).subscribe(res => {
      if (res["status"] == true) {
        this.showSpinner = false
        this.showError = false
        this.showFilteredProducts = true
        this.showPlans = true
        this.products = res["message"]
        localStorage.removeItem('zip')
      }
      else {
        this.showFilteredProducts = false
        this.showSpinner = false
        this.showError = true
        this.showPlans = false
        this.error = res["message"]
        localStorage.removeItem('zip')
      }
    }, () => {
      this.showSpinner = false
      this.showError = true
      this.error = "Could not connect to server, please try again"
    })
  }

  estimatedUsage
  priceTo
  priceFrom
  term1
  term2
  term3
  term4
  term5
  term6
  term7
  showFilteredProducts: boolean = false
  showSpinner2: boolean = false
  showError2: boolean = false
  submitBtnDisabled2
priceetc = 'tariff_500';
  price_from = new FormControl('', [Validators.pattern('^[0-9]*[\.]?[0-9]+$'), Validators.min(1)])
  price_to = new FormControl('', [Validators.pattern('^[0-9]*[\.]?[0-9]+$'), Validators.max(99)])
viewprice(val1 , val2 ,val3 ){
  if ( this.estimatedUsage == "500"){
  
this.priceetc ='tariff_500'
// localStorage.removeItem(val2)
// localStorage.removeItem(val3)
localStorage.setItem('tariff',this.priceetc)
localStorage.setItem('val1',val1)

 
    
  }
  else if ( this.estimatedUsage == "1000"){
    
    this.priceetc ='tariff_1000'
    localStorage.setItem('tariff',this.priceetc)
    // localStorage.removeItem(val1)
    // localStorage.removeItem(val3)
    localStorage.setItem('val1',val2)


  }
  else if (this.estimatedUsage == "2000")
  {
  
    this.priceetc ='tariff_2000'
    localStorage.setItem('tariff',this.priceetc)
    // localStorage.removeItem(val1)
    // localStorage.removeItem(val2)
    localStorage.setItem('val1',val3)

  }
  else if (this.estimatedUsage == undefined){
    // this.estimatedUsage = this.priceetc
    // alert(this.priceetc)
    this.priceetc ='tariff_500'
    localStorage.setItem('tariff',this.priceetc)
    localStorage.removeItem(val3)
    localStorage.removeItem(val2)
    localStorage.setItem('val1',val1)
  }
}
  filterProduct() {
    // alert(this.estimatedUsage)
    if (this.price_from.valid == true && this.price_to.valid == true) {
      this.showSpinner2 = null
      this.showFilteredProducts = false
      this.showError2 = false

      let data = {
        zip_code: this.ZipCode,
        client: "WattGenie-Web",
        promo_code: "" + this.promoCode,
        tariff_rate: [1, 99],
        tariff_usage: ""
      }
      if (this.term1 == true || this.term2 == true || this.term3 == true || this.term4 == true || this.term5 == true || this.term6 == true || this.term7 == true) {
        data['term'] = []
        if (this.term1 == true) { data['term'].push(36) }
        if (this.term2 == true) { data['term'].push(24) }
        if (this.term3 == true) { data['term'].push(18) }
        if (this.term4 == true) { data['term'].push(14) }
        if (this.term5 == true) { data['term'].push(12) }
        if (this.term6 == true) { data['term'].push(6) }
        if (this.term7 == true) { data['term'].push(5) }
      }
      else { data['term'] = "" }
      if (this.estimatedUsage != "" && this.estimatedUsage != null && this.estimatedUsage != undefined) {
        data['tariff_usage'] = this.estimatedUsage
      }
      if (this.priceFrom != "" && this.priceFrom != null && this.priceFrom != undefined) {
        data['tariff_rate'][0] = this.priceFrom
      }
      if (this.priceTo != "" && this.priceTo != null && this.priceTo != undefined) {
        data['tariff_rate'][1] = this.priceTo
      }
      let duns = localStorage.getItem('duns')
      if (duns != '' && duns != null && duns != undefined) {
        data['provider_id'] = duns
        this.showSpinner2 = null
        this.x = setTimeout(() => {
          if (this.showSpinner2 == null) { this.showSpinner2 = true }
        }, 1500)
        this.promo.searchPlanByTdsp(data).subscribe(res => {
          if (res["status"] == true) {
            this.showSpinner2 = false
            this.showError2 = false
            this.showFilteredProducts = true
            window.scrollTo(0, 0)
            this.products = res["message"]
            localStorage.removeItem('zip')
          }
          else {
            this.showFilteredProducts = false
            this.showSpinner2 = false
            this.showError2 = true
            this.error = res["message"]
            localStorage.removeItem('zip')
          }
        }, () => {
          this.showSpinner2 = false
          this.showError2 = true
          this.error = "Could not connect to server, please try again"
        })
      }
    }
  }

  showZip() {
    this.showPlans = false
    this.showTdsp = false
  }

  submit() {
    this.promo.uaCheck().subscribe(res => {
      if (res['message']['bypass'] == true && res['message']['ua'] == false) {
        localStorage.setItem('ua', "False")
      }
      else localStorage.setItem('ua', "True")
    })
    this.showSpinner = null
    this.showPlans = false
    this.showTdsp = false
    this.showError = false
    if (((this.ZipCode != null || this.promoCode != null) && this.zip_code.errors == null) && ((this.ZipCode != "" || this.promoCode != "") && this.zip_code.errors == null)) {
      this.submitBtnDisabled = true
      this.x = setTimeout(() => {
        if (this.showSpinner == null) { this.showSpinner = true }
      }, 1500)
      if (this.promoCode == null) { this.promoCode = "" }
      let data = {
        zip_code: this.ZipCode,
        promo_code: "" + this.promoCode,
        client: "WattGenie-Web"
      }
      this.promo.searchPlan(data).subscribe(res => {
        localStorage.removeItem('duns')
        if (res["status"] == false) {
          this.showError = true
          this.error = res["Error"]
          this.submitBtnDisabled = false
        }
        if (res["status"] == true) {
          this.showSpinner = false
          this.showError = false
          this.submitBtnDisabled = false
          if (res["tdsp_status"] == false) {
            localStorage.setItem('duns', res['message'][0]['provider_id'])
            this.showFilteredProducts = true
            this.showPlans = true
            this.products = res["message"]
            // alert(this.products.id)
            localStorage.setItem('promotionCode', JSON.stringify(res['promo_code']))
            localStorage.removeItem('zip')
            this.submitBtnDisabled = false
          }
          else {
            this.showTdsp = true
            this.tdsps = res['message']['row']
            this.submitBtnDisabled = false
          }
        }
        else if (res["status"] == false) {
          this.showFilteredProducts = false
          this.showSpinner = false
          this.showError = true
          this.showPlans = false
          this.error = res["message"]
          localStorage.removeItem('zip')
          this.submitBtnDisabled = false
        }
      }, () => {
        this.showSpinner = false
        this.showError = true
        this.submitBtnDisabled = false
        this.error = "Could not connect to server, please try again"
      })
    }
  }

  selectProductBtnDisabled: boolean[] = []
  enroll(i) {
    this.selectProductBtnDisabled[i] = true
    let data = {
      product_pk: this.products[i].id,
      enroll_product: this.products[i].product_id,
      rate: this.products[i].rate,
      batch_rate: this.products[i].batch_rate,
      contract_term: this.products[i].term,
    }
    this.enrollment.sendProductDataForSession(data).subscribe(res => {
      if (res['status'] == true) {
        this.selectProductBtnDisabled[i] = false
        localStorage.setItem('zip', this.ZipCode)
        this.router.navigate(['/enroll'])

        localStorage.setItem('productSummary', JSON.stringify(this.products[i]))
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

@Component({
  selector: 'enroll-process',
  templateUrl: './enroll-process.html',
  styleUrls: ['./main.component.scss']
})
export class EnrollProcessComponent {
  @ViewChild('premises') target: any
  products = []
  errorMessagee
  len
  multiplePremise
  searchPremiseBtn: boolean
  showSpinner: boolean = false
  enrollProcessForm = new FormGroup({
    service_address: new FormControl("", [Validators.required]),
    city: new FormControl(""),
    zip_code: new FormControl({ value: localStorage.getItem('zip'), disabled: true }),
    premise_id: new FormControl("", [Validators.required])
  })
  constructor(public obj: EnrollmentService, public router: Router, private service: UserService, private enrollment: EnrollmentService, private enrollmentComponent: EnrollmentComponent) { }
  ngOnInit() {
    if (localStorage.getItem('zip') == "" || localStorage.getItem('zip') == null || localStorage.getItem('zip') == undefined) {
      this.router.navigate(['/search-plan'])
    }
    window.scrollTo(0, 0)
    this.products.push(JSON.parse(localStorage.getItem('productSummary')))
  }
  ESID
  summary = false
  showSummary() {
    if (this.summary == false) {
      this.summary = true
    }
    else {
      this.summary = false
    }
  }
  saveData() {
    this.errorMessagee = null
    this.multiplePremise = []
    if (this.enrollProcessForm.valid == true) {
      this.searchPremiseBtn = true
      this.showSpinner = null
      setTimeout(() => {
        if (this.showSpinner == null) { this.showSpinner = true }
      }, 1500)
      let date = new Date()
      let req_date = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
      let obj = this.enrollProcessForm.value
      let zip = localStorage.getItem('zip')
      obj['zip_code'] = zip
      this.obj.enrollProcess(this.enrollProcessForm.value).subscribe(res => {
        if (res["status"] == true) {
          this.showSpinner = false
          this.searchPremiseBtn = false
          if (res['message'].length > 1) {
            this.multiplePremise = res['message']
            this.len = res['message'].length
            window.scrollTo(0, 600)
          }
          else {
            this.multiplePremise = res['message']
            this.len = res['message'].length
            this.SelectPremise(this.len - 1)
          }
          let value = res['message']
          let tdsp = value['provider_id']
          let dateDetails = { req_date: req_date, tdsp_duns: tdsp, expedited: "false" }
          this.obj.savedateDetail(dateDetails)
          this.router.navigate(['/enroll'])
        }
        else if (res["status"] == false && res["redirect_url"] != null && res["redirect_url"] != undefined && res["redirect_url"] != '') {
          this.showSpinner = false
          this.searchPremiseBtn = false
          Swal('Your session has expired.', '', 'error').then(() => {
            this.router.navigate(['' + res["redirect_url"]])
          })
        }
        else {
          this.showSpinner = false
          this.searchPremiseBtn = false
          this.errorMessagee = res["message"]
        }
      }, () => {
        this.showSpinner = false
        this.searchPremiseBtn = false
        Swal('Could not connect to server, please try again.', '', 'error')
      })
    }
  }

  submit() {
    this.multiplePremise == []
    if (this.enrollProcessForm.controls.premise_id.value == "" || this.enrollProcessForm.controls.premise_id.value == null || this.enrollProcessForm.controls.premise_id.value == undefined) {
      this.enrollProcessForm.controls.premise_id.clearValidators()
      this.enrollProcessForm.controls.premise_id.setValue("")
      this.multiplePremise == []
      this.len = null
      this.saveData()
    }
    else {
      this.enrollProcessForm.controls.service_address.clearValidators()
      this.enrollProcessForm.controls.city.clearValidators()
      this.enrollProcessForm.controls.service_address.setValue("")
      this.enrollProcessForm.controls.city.setValue("")
      this.multiplePremise == []
      this.len = null
      this.saveData()
    }
  }

  get controls() {
    return this.enrollProcessForm.controls
  }
  status = false
  selectPremiseBtnDisabled: boolean[] = []
  SelectPremise(index) {
    this.status = true
    this.selectPremiseBtnDisabled[index] = true
    this.enrollmentComponent.startFormGroup.controls.goNext.setValue("asdasd")
    let premise = this.multiplePremise[index]
    switch (premise.pm_type) {
      case 'Small Non-Residential': localStorage.setItem('plan', 'C1'); break;
      case 'Commercial > 10 KVa': localStorage.setItem('plan', 'C3'); break;
      case 'Residential': localStorage.setItem('plan', 'R1'); break;
      case 'Residential > 10 KVa': localStorage.setItem('plan', 'R3'); break;
      case 'AMS Residential Prepay': localStorage.setItem('plan', 'RAMS'); break;
      default: break;
    }
    this.service.changeDataa1(premise)
    let data = {
      provider_id: premise.provider_id,
      premise_id: premise.premise_id,
      city: premise.city,
      address1: premise.address1,
      countyname: premise.countyname
    }
    this.enrollment.sendPremiseDataForSession(data).subscribe(res => {
      if (res['status'] == true) {
        let date = new Date()
        let currentreq_date = {
          req_date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
          tdsp_duns: premise.provider_id,
          expedited: "false",
        }
        this.enrollment.requestforDate(currentreq_date).subscribe(res => {
          localStorage.setItem('priorityCode', res['DATES'].row[0].priority_code)
          this.service.changeDataa(res)
          this.enrollmentComponent.requestDateValidation()
        }, err => console.log(err), () => {
          this.selectPremiseBtnDisabled[index] = false
          document.getElementById('nextBtn').click()
          window.scrollTo(0, 0)
          this.status = false
        })
      }
      else this.selectPremiseBtnDisabled[index] = false
    }, () => { this.selectPremiseBtnDisabled[index] = false })
  }
}

@Component({
  selector: 'our-community',
  templateUrl: './community.html',
  styleUrls: ['./main.component.scss']
})
export class OurCommunityComponent {
  constructor(public recapcha: RecapchaService, public snackBar: MatSnackBar, private community: MainService, private changeDetectorRef: ChangeDetectorRef) { }
  @ViewChild('form') froms: ElementRef
  ngOnInit() {
    window.scrollTo(0, 0)
  }
  cap_result
  showSpinner: boolean = false
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
    email: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')]),
    phone: new FormControl("", [Validators.required, Validators.min(0), Validators.pattern('^[0-9]*$')]),
    message: new FormControl("", Validators.required)
  })
  submit() {
    let status = this.recapcha.check()
    if (status == false) {
      this.cap_result = "Please re-enter text"
    }
    else {
      this.cap_result = ""
    }
    if (this.myForm.valid && status == true) {
      let obj = this.myForm.value
      this.community.community(obj).subscribe(() => {
      }
        , () => {
          this.snackBar.open("Server not responding", 'close', {
            duration: 1000
          })
        })
      this.froms.nativeElement.reset()
      this.changeDetectorRef.detectChanges()
    }
  }
  get f() { return this.myForm.controls }
}

@Component({
  selector: 'app-establish-contracts',
  templateUrl: './establish-contracts.component.html',
  styleUrls: ['./main.component.scss']
})
export class EstablishContractsComponent implements OnInit {
  @ViewChild('form') froms: ElementRef
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')]),
    message: new FormControl('', [Validators.required])
  })
  cap_result
  btnDisabled
  constructor(public recapcha: RecapchaService, private changeDetectorRef: ChangeDetectorRef, public contact: MainService, public snackBar: MatSnackBar) { }
  ngOnInit() {
    window.scrollTo(0, 0)
  }
  submit() {
    let status = this.recapcha.check()
    if (status == false) {
      this.cap_result = "Please re-enter text"
    }
    else {
      this.cap_result = ""
    }
    if (this.myForm.valid && status == true) {
      this.btnDisabled = true
      this.contact.establishContact(this.myForm.value).subscribe(res => {
        if (res['status']) {
          Swal("" + res['message'], '', "success").then(() => {
            this.btnDisabled = false
            this.froms.nativeElement.reset()
            this.changeDetectorRef.detectChanges()
          })
        } else {
          this.btnDisabled = false
          this.snackBar.open(" Something went wrong, please try again later.", 'close', {
            duration: 1000
          })
        }
      }, () => {
        this.btnDisabled = false
        this.snackBar.open(" Something went wrong, please try again later.", 'close', {
          duration: 1000
        })
      })
    }
  }
  get f() { return this.myForm.controls }
}

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./main.component.scss']
})
export class HelpComponent implements OnInit {
  @ViewChild('help') froms: ElementRef
  featureSelected = 'firstDiv';
  tabIndex = 0
  tdsps = []
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')]),
    question: new FormControl('', Validators.required),
    message: new FormControl('')
  })

  constructor(private route: ActivatedRoute, public recapcha: RecapchaService, private changeDetectorRef: ChangeDetectorRef, private contact: MainService, public snackBar: MatSnackBar, public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      if (parseInt(res.tabNo) >= 0 && parseInt(res.tabNo) < 7) {
        this.tabIndex = parseInt(res.tabNo)
      }
    })
    window.scrollTo(0, 0)
    this.http.get<any>(`${environment.url}portal/our-m2m-plan/`).subscribe(res => {
      this.priceSources.data = res['message']
    })
    this.http.get(`${environment.url}portal/tdsp-rates/`).subscribe(res => this.tdsps = res['message'])
    this.http.get<any>(`${environment.url}portal/advantage-prime/`).subscribe(res => {
      this.priceSource.data = res['message']
    })
  }

  Submit() {
    let status = this.recapcha.check()
    if (status == false) {
      this.cap_result = "Please re-enter text"
    }
    else {
      this.cap_result = ""
    }
    if (this.myForm.valid && status == true) {
      let obj = this.myForm.value
      this.contact.helpContact(obj).subscribe(() => {
      }, () => {
        this.snackBar.open("Server not responding", 'close', {
          duration: 1000
        })
      })
      this.froms.nativeElement.reset()
      this.changeDetectorRef.detectChanges()
    }
  }

  get f() {
    return this.myForm.controls
  }

  cap_result
  OurPlans: boolean = false
  OurPlan: boolean = false
  password = false
  correct = false
  err = false
  success
  error
  row
  obj
  pass
  priceSource = <any>new MatTableDataSource()
  priceSources = <any>new MatTableDataSource()
  priceColumns = ['year', 'centerpoint', 'oncor', 'aep_central', 'aep_north', 'tnmp']
  priceColumn = ['month', 'price']

  plansTable() {
    if (this.OurPlans == true) {
      this.OurPlans = false
    }
    else {
      this.OurPlans = true
      this.OurPlan = false
    }
  }

  planTable() {
    if (this.OurPlan == true) {
      this.OurPlan = false
    }
    else {
      this.OurPlan = true
      this.OurPlans = false
    }
  }

  toggle(selectedSection : string) {
    this.featureSelected = selectedSection;
  }
}