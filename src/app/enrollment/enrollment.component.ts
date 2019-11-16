import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Component, OnInit, Inject } from '@angular/core'
import { EnrollmentService } from '../Container/Store/Services'
import { MatRadioChange } from '@angular/material'
import { UserService } from '../always-auth.service'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private enrollment: EnrollmentService, private router: Router, private service: UserService) { }
  summary = true
  check1 = false
  check2 = false
  check3 = false
  check4 = false
  status = true
  serviceAddresscheck = false
  showSpinner: boolean = false
  currentdate = new Date()
  birthDate = new Date()
  date = this.currentdate.getDate() + "/" + (this.currentdate.getMonth() + 1) + "/" + this.currentdate.getFullYear()
  productDetails
  flow_status
  submitBtn
  premiseInfo
  ReqDateResponse
  first_standard_date
  first_available_date
  end_date
  holidays
  credit_verification
  waiveDeposite: string
  CreditVerification: string = "Check My Credit"
  products = []
  khw;
  price_kwh1: boolean;
  price_kwh2: boolean;
  price_kwh3: boolean;
  // this.price_traffic = this.products['tariff_500']
  services = ["Move-in (New Service)", "Switching from another Service Provider on Next Available Schedule Date", "Switching from another Service Provider on a Specific Date"]
  creditCards = [{ val: { status: true, value: "Check My Credit" } }, { val: { status: false, value: "Dont Check Credit" } }, { val: { status: false, value: "Waive Deposit" } }]
  waivedeposit = ["I will submit a letter from my current provider showing timely payments for the last 12 months with no more than 1 late payment", "I am 65+ and can provide proof of timely payments to my current electric provider.", "I am a victim of family violence and will complete and return the required forms."]
  states = [{ viewValue: "Alabama", value: "AL" }, { viewValue: "Alaska", value: "AK" }, { viewValue: "Arizona", value: "AZ" }, { viewValue: "Arkansas", value: "AR" }, { viewValue: "California", value: "CA" }, { viewValue: "Colorado", value: "CO" }, { viewValue: "Connecticut", value: "CT" }, { viewValue: "Delaware", value: "DE" }, { viewValue: "District of Columbia", value: "DC" }, { viewValue: "Florida", value: "FL" }, { viewValue: "Georgia", value: "GA" }, { viewValue: "Hawaii", value: "HI" }, { viewValue: "Idaho", value: "ID" }, { viewValue: "Illinois", value: "IL" }, { viewValue: "Indiana", value: "IN" }, { viewValue: "Iowa", value: "IA" }, { viewValue: "Kansas", value: "KS" }, { viewValue: "Kentucky", value: "KY" }, { viewValue: "Louisiana", value: "LA" }, { viewValue: "Maine", value: "ME" }, { viewValue: "Maryland", value: "MD" }, { viewValue: "Massachusetts", value: "MA" }, { viewValue: "Michigan", value: "MI" }, { viewValue: "Minnesota", value: "MN" }, { viewValue: "Mississippi", value: "MS" }, { viewValue: "Missouri", value: "MO" }, { viewValue: "Montana", value: "MT" }, { viewValue: "Nebraska", value: "NE" }, { viewValue: "Nevada", value: "NV" }, { viewValue: "New Hampshire", value: "NH" }, { viewValue: "New Jersey", value: "NJ" }, { viewValue: "New Mexico", value: "NM" }, { viewValue: "New York", value: "NY" }, { viewValue: "North Carolina", value: "NC" }, { viewValue: "North Dakota", value: "ND" }, { viewValue: "Ohio", value: "OH" }, { viewValue: "Oklahoma", value: "OK" }, { viewValue: "Oregon", value: "OR" }, { viewValue: "Pennsylvania", value: "PA" }, { viewValue: "Rhode Island", value: "RI" }, { viewValue: "South Carolina", value: "SC" }, { viewValue: "South Dakota", value: "SD" }, { viewValue: "Tennessee", value: "TN" }, { viewValue: "Texas", value: "TX" }, { viewValue: "Utah", value: "UT" }, { viewValue: "Vermont", value: "VT" }, { viewValue: "Virginia", value: "VA" }, { viewValue: "Washington", value: "WA" }, { viewValue: "West Virginia", value: "WV" }, { viewValue: "Wisconsin", value: "WI" }, { viewValue: "Wyoming", value: "WY" }, { viewValue: "American Samoa", value: "AS" }, { viewValue: "Guam", value: "GU" }, { viewValue: "Northern Mariana Islands", value: "MP" }, { viewValue: "Puerto Rico", value: "PR" }, { viewValue: "U.S. Virgin Islands", value: "VI" }, { viewValue: "Micronesia", value: "FM" }, { viewValue: "Marshall Islands", value: "MH" }, { viewValue: "Palau", value: "PW" }, { viewValue: "U.S. Armed Forces – Americas[d]", value: "AA" }, { viewValue: "U.S. Armed Forces – Europe[e]", value: "AE" }, { viewValue: "U.S. Armed Forces – Pacific[f]", value: "AP" }, { viewValue: "Northern Mariana Islands", value: "CM" }, { viewValue: "Panama Canal Zone", value: "CZ" }, { viewValue: "Nebraska", value: "NB" }, { viewValue: "Philippine Islands", value: "PI" }, { viewValue: "Trust Territory of the Pacific Islands", value: "TT" }]
  questions = ["PIN", "What school did you attend sixth grade", "In what city or town was your first job", "What was the name of your favorite teacher", "What was your first car"]
  languages = [{ value: "Default", viewValue: "English" }, { value: "es.Default", viewValue: "Spanish" }]
  aboutUs = [{ name: "Web", value: "01" }, { name: "OutBound Call TeleMarketer", value: "02" }, { name: "Inbound Call Internal", value: "03" }, { name: "Mail", value: "04" }, { name: "Social Media", value: "05" }, { name: "Other", value: "06" }]
  cards = ["Master", "Discover", "Visa"]
  providers = ["Altel", "Ameritech", "ATT Wireless", "Bell Canada", "Bellsouth", "Boost", "Cellular South", "CellularOne", "CellularOne MMS", "Centennial WireLess", "Cincinnati Bell", "Cingular", "Cricket", "Edge Wireless", "Metro PCS", "Nextel", "O2", "Orange", "Qwest", "Rogers WireLess", "Spint PCS", "Suncom", "T-Mobile", "Teleflip", "Tellus Mobility", "U.S. Cellular", "Verizon", "Virgin Mobile"]
  years = []
  months = [{ value: "01", viewValue: "January" }, { value: "02", viewValue: "February" }, { value: "03", viewValue: "March" }, { value: "04", viewValue: "April" }, { value: "05", viewValue: "May" }, { value: "06", viewValue: "June" }, { value: "07", viewValue: "July" }, { value: "08", viewValue: "August" }, { value: "09", viewValue: "September" }, { value: "10", viewValue: "October" }, { value: "11", viewValue: "November" }, { value: "12", viewValue: "December" }]
  firstFormGroup: FormGroup
  secondFormGroup: FormGroup
  thirdFormGroup: FormGroup
  fourFormGroup: FormGroup
  fourFormGroup2: FormGroup
  startFormGroup: FormGroup
  billingGroup: FormGroup

  myFilter = (d: Date): boolean => {
    const day = d.getDay()
    const date = d.getDate()
    const month = d.getMonth()
    let weekend = day !== 0 && day !== 6
    if (this.holidays.length > 0) {
      let middle = []
      for (let index = 0; index < this.holidays.length; index++) {
        let d = new Date(this.holidays[index])
        middle[index] = month !== d.getMonth() || date !== d.getDate()
      }
      return weekend && middle.reduce(this.getAnd)
    }
    else return weekend
  }

  getAnd(total, num) {
    return total && num;
  }

  goToTop() {
    window.scrollTo(0, 0)
  }
  reset() {
    this.showCheckbox = false
    console.log("check")
  }

  price_traffic;
  ngOnInit() {
    this.price_traffic = localStorage.getItem('tariff')
    console.log(this.price_traffic)
    let currentYear = new Date().getFullYear()
    this.years[0] = currentYear
    for (let index = 1; index < 20; index++) {
      `${this.years[index] = this.years[index - 1] + 1}`
    }
    this.birthDate.setFullYear(this.currentdate.getFullYear() - 18)
    this.startFormGroup = this.formBuilder.group({
      goNext: ['', Validators.required]
    })
    this.firstFormGroup = this.formBuilder.group({
      enrol_type: ['Move-in (New Service)'],
      request_date: [this.enrollment.Date(''), Validators.required],
    })
    this.secondFormGroup = this.formBuilder.group({
      cust_firstname: [''],
      cust_mi: [''],
      cust_lastname: [''],
      cust_dob: [''],
      contact1: [''],
      ssn: ['', [Validators.pattern('^[0-9]{3}-[0-9]{2}-[0-9]{4}$'), Validators.required]],
      cust_drl_nbr: ['', Validators.pattern("[0-9]+")],
      personal_pin: [''],
      cust_drl_state: [''],
      personal_ref_code: [''],
      cust_drl_expire: [null],
      phone1: ['', Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')],
      phone2: ['', Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')],
      cust_sms_provider: [''],
      cust_bill_type: ['Default'],
      email_address: ['', Validators.email],
      referred_by: [''],
    })
    this.thirdFormGroup = this.formBuilder.group({
      cm_address1: [''],
      cm_address2: [''],
      cm_city: [''],
      cm_state: ['TX'],
      cm_zip: ['', Validators.pattern("[0-9]+")],
      complete: ['', Validators.required]
    })
    this.fourFormGroup = this.formBuilder.group({
      // select:[''],
      life_support: [''],
      // deposit_card_type: [{ value: ''}],
      // deposit_cc_no: [{ value: '' }, [  Validators.pattern("[0-9-]+")]],
      // deposit_security_code: [{ value: ''   }, [  Validators.pattern("[0-9]+")]],
      // deposit_expiry_MM: [{ value: ''  } ],
      // deposit_expiry_YYYY: [{ value: '' } ],
      save_acct_ref_on_file: ['0'],

      deposit_acct_type: [''],
      deposit_account_no: [''],
      deposit_aba_nbr: [''],
      confirm_routing: [''],
      confirm_account: [''],

    })
    this.fourFormGroup2 = this.formBuilder.group({
      deposit_card_type: [{ value: '' }],
      deposit_cc_no: [{ value: '' }, [Validators.pattern("[0-9-]+")]],
      deposit_security_code: [{ value: '' }, [Validators.pattern("[0-9]+")]],
      deposit_expiry_MM: [{ value: '' }],
      deposit_expiry_YYYY: [{ value: '' }],

    })
    window.scrollTo(0, 0)
    this.products.push(JSON.parse(localStorage.getItem('productSummary')))

    // console.log(this.price_traffic)
    if (localStorage.getItem('tariff') == 'tariff_500') {
      this.price_traffic = localStorage.getItem('val1')
      // this.price_kwh1 = true
      // this.price_kwh2 = false
      // this.price_kwh3 = false;
      this.khw = "500"

    }
    else if (localStorage.getItem('tariff') == 'tariff_1000') {
      this.price_traffic = localStorage.getItem('val1')
      this.price_kwh1 = false
      this.price_kwh2 = true
      this.price_kwh3 = false;
      this.khw = "1000"
    }
    else if (localStorage.getItem('tariff') == 'tariff_2000') {
      this.price_traffic = localStorage.getItem('val1')
      // this.price_kwh1 = false
      // this.price_kwh2 = false
      // this.price_kwh3 = true;
      this.khw = "2000"
    }


    setTimeout(() => {
      if (this.showSpinner == null) { this.showSpinner = true }
    }, 500)
    this.changeAutoBillPay()
  }

  creditCardString = '';
  CraditCardNo
  findBtn = false
  billingAddresses = []
  alert
  alertcondition: boolean = false
  findBillingAddress() {
    this.billingAddresses = []
    if (this.thirdFormGroup.controls.cm_address1.valid && this.thirdFormGroup.controls.cm_city.valid && this.thirdFormGroup.controls.cm_state.valid && this.thirdFormGroup.controls.cm_zip.valid) {
      this.findBtn = true
      let obj = {
        name: this.thirdFormGroup.controls.cm_address1.value,
        address_1: this.thirdFormGroup.controls.cm_address2.value,
        zipcode: this.thirdFormGroup.controls.cm_zip.value,
        city: this.thirdFormGroup.controls.cm_city.value,
        state: this.thirdFormGroup.controls.cm_state.value,
        bypass: true
      }
      this.enrollment.findBillingAddress(obj).subscribe(res => {
        this.findBtn = false
        if (res['status'] == true) {
          this.billingAddresses.push(res['message']['AddressValidateResponse']['Address'])
          window.scrollTo(0, 600)
        }
        else {
          this.alertcondition = true
          this.alert = res['message']

        }
      }, err => { this.findBtn = false })
    }
  }

  SelectBillingPrem(value) {
    this.thirdFormGroup.controls.complete.setValue('Done')
    if (value != 'same') {
      this.thirdFormGroup.controls.cm_address1.setValue(value.Address1)
      this.thirdFormGroup.controls.cm_address2.setValue(value.Address2)
      this.thirdFormGroup.controls.cm_zip.setValue(`${value.Zip5}${value.Zip4}`)
      this.thirdFormGroup.controls.cm_city.setValue(value.City)
      this.thirdFormGroup.controls.cm_state.setValue(value.State)
    }
    document.getElementById('next1').click()
  }

  mychange(event) {
    if (event == 51 || event == 52 || event == 53 || event == 54 || event == 55 || event == 56) {
      this.creditCardString = 'MasterCard';
    } else if (event == 6) {
      this.creditCardString = 'Discover/Diners Club';
    } else if (event == 3) {
      this.creditCardString = 'American Express/Diners Club';
    } else if (event == '') {
      this.creditCardString = ''
    }
  }

  requestDateValidation() {
    this.service.dataa.subscribe(res => {
      this.holidays = res['DATES']['holidays']
      this.ReqDateResponse = res['DATES']['row']
      this.ReqDateResponse.map(value => {
        this.first_standard_date = value.first_standard_date
        this.first_available_date = value.first_available_date
        this.end_date = value.end_date
      })
      this.startFormGroup.controls.goNext.setValue('asdasd')
      this.first_standard_date = this.first_standard_date.slice(0, 10)
      this.first_available_date = this.first_available_date.slice(0, 10)
      this.end_date = this.end_date.slice(0, 10)
      this.firstFormGroup.controls.request_date.setValue(this.first_standard_date)
    })
    this.service.dataa1.subscribe(res => {
      if (res != null && res != undefined) {
        this.premiseInfo = res
      }
    })
  }

  stepSession() {
    if (this.thirdFormGroup.valid == true) {
      let data = {
        phone1: this.secondFormGroup.controls.phone1.value,
        phone2: this.secondFormGroup.controls.phone2.value,
        email_address: this.secondFormGroup.controls.email_address.value,
        pm_address2: this.premiseInfo['address1'],
        cust_firstname: this.secondFormGroup.controls.cust_firstname.value,
        premise_id: this.premiseInfo['premise_id'],
        cust_lastname: this.secondFormGroup.controls.cust_lastname.value,
        cust_mi: this.secondFormGroup.controls.cust_mi.value,
        offcycle_switch_date: this.enrollment.Date(this.firstFormGroup.controls.request_date.value),
        request_date: this.enrollment.Date(this.firstFormGroup.controls.request_date.value),
        enrol_type: this.firstFormGroup.controls.enrol_type.value

      }
      if (data.enrol_type == 'Move-in (New Service)') {
        data.enrol_type = 'M'
      }
      else if (data.enrol_type == 'Switching from another Service Provider on Next Available Schedule Date' || data.enrol_type == 'Switching from another Service Provider on a Specific Date') {
        data.enrol_type = 'S'
      }
      // data.enrol_type = data.enrol_type == 'Move-in (New Service)' ? "M" : "S"
      this.enrollment.nextSessionStep(data).subscribe(res => { })
    }
  }

  showSummary() {
    this.summary = this.summary == false ? true : false
  }
  viewpaybutton: boolean = false;
  viewpay(event) {
    if (event == true) {
      this.viewpaybutton = true
    }
    else if (event == false) {
      this.viewpaybutton = false

    }
  }
  setAutoPay: boolean = false;
  model: any
  autopay
  selection = 'C'
  changeAutoBillPay() {

    // this.setAutoPay = event.checked

    // alert(this.autopay)

    this.fourFormGroup2.controls.deposit_card_type.setValue('')
    this.fourFormGroup2.controls.deposit_cc_no.setValue('')
    this.fourFormGroup2.controls.deposit_security_code.setValue('')
    this.fourFormGroup2.controls.deposit_expiry_MM.setValue('')
    this.fourFormGroup2.controls.deposit_expiry_YYYY.setValue('')
    if (this.autopay == true) {
      this.fourFormGroup.controls.save_acct_ref_on_file.setValue('1')
      this.fourFormGroup.controls.deposit_card_type.enable()
      this.fourFormGroup.controls.deposit_cc_no.enable()
      this.fourFormGroup.controls.deposit_security_code.enable()
      this.fourFormGroup.controls.deposit_expiry_MM.enable()
      this.fourFormGroup.controls.deposit_expiry_YYYY.enable()
    } else if (this.autopay == false) {

      this.fourFormGroup.controls.save_acct_ref_on_file.setValue('0')
      this.fourFormGroup.controls.deposit_card_type.disable()
      this.fourFormGroup.controls.deposit_cc_no.disable()
      this.fourFormGroup.controls.deposit_security_code.disable()
      this.fourFormGroup.controls.deposit_expiry_MM.disable()
      this.fourFormGroup.controls.deposit_expiry_YYYY.disable()
    }



    this.setAutoPay = true;
    console.log(this.setAutoPay)
    this.setAutoPayACH = false
    console.log(this.setAutoPayACH)
  }



  setAutoPayACH: boolean;
  changeAutoBillPayACH(event) {

    // alert(event)
    // this.setAutoPayACH = event.checked
    this.fourFormGroup.controls.deposit_acct_type.setValue('')
    this.fourFormGroup.controls.deposit_account_no.setValue('')
    this.fourFormGroup.controls.deposit_aba_nbr.setValue('')
    this.fourFormGroup.controls.confirm_routing.setValue('')
    this.fourFormGroup.controls.confirm_account.setValue('')
    if (event.checked == true) {
      this.fourFormGroup.controls.save_acct_ref_on_file.setValue('1')
      this.fourFormGroup.controls.deposit_acct_type.enable()
      this.fourFormGroup.controls.deposit_account_no.enable()
      this.fourFormGroup.controls.deposit_aba_nbr.enable()
      // this.fourFormGroup.controls.confirm_routing.enable()
      // this.fourFormGroup.controls.confirm_account.enable()
    } else if (event.checked == false) {
      this.fourFormGroup.controls.save_acct_ref_on_file.setValue('0')
      this.fourFormGroup.controls.deposit_acct_type.disable()
      this.fourFormGroup.controls.deposit_account_no.disable()
      this.fourFormGroup.controls.deposit_aba_nbr.disable()
      // this.fourFormGroup.controls.confirm_routing.disable()
      // this.fourFormGroup.controls.confirm_account.disable()
    }
    this.setAutoPayACH = true
    console.log(this.setAutoPayACH)
    this.setAutoPay = false
    console.log(this.setAutoPay)
  }


  SameAsServiceAddress() {
    if (this.premiseInfo != null || this.premiseInfo != undefined) {
      if (this.serviceAddresscheck) {
        this.thirdFormGroup.controls.cm_address2.setValue(this.premiseInfo.address1)
        this.thirdFormGroup.controls.cm_city.setValue(this.premiseInfo.city)
        this.thirdFormGroup.controls.cm_state.setValue(this.premiseInfo.state)
        this.thirdFormGroup.controls.cm_zip.setValue(this.premiseInfo.zip)
      } else {
        this.thirdFormGroup.controls.cm_address1.reset()
        this.thirdFormGroup.controls.cm_address2.reset()
        this.thirdFormGroup.controls.cm_city.reset()
        this.thirdFormGroup.controls.cm_state.reset()
        this.thirdFormGroup.controls.cm_zip.reset()
      }
    }
  }
  showCheckbox = false
  radioChangeCreditVerification(event: MatRadioChange) {
    this.creditvalue = event.value
    switch (event.value) {
      case "Check My Credit": this.flow_status = '-102'; this.showCheckbox = true; break;
      case "Dont Check Credit": this.flow_status = '-104'; break;
      case "Waive Deposit": this.flow_status = '-229'; break;
      default: break;
    }
  }
  show_Waiver: boolean = false;
  radioChangeCreditVerificationsub(event) {
    if (this.creditvalue == 'Waive Deposit' && event.value == 'I will submit a letter from my current provider showing timely payments for the last 12 months with no more than 1 late payment') {
      this.flow_status = '-229'
      this.show_Waiver = false;

    } else if (this.creditvalue == 'Waive Deposit' && event.value == 'I am 65+ and can provide proof of timely payments to my current electric provider.') {
      this.flow_status = '-228'
      this.show_Waiver = false;
    } else if (this.creditvalue == 'Waive Deposit' && event.value == 'I am a victim of family violence and will complete and return the required forms.') {
      this.flow_status = '-227'
      this.show_Waiver = true;
    }
  }
  loader = false

  enroll() {
    console.log(this.firstFormGroup, this.secondFormGroup, this.thirdFormGroup, this.fourFormGroup)
    this.submitBtn = true
    if ((this.check1 == true && this.check2 == true && this.check3 == true && this.check4) || (this.check1 == true && this.check2 == true && this.check3 == true)) {
      let second = this.secondFormGroup.value
      second.personal_pin = `[{\"id\":\"1\",\"q\":\"30\",\"a\":\"${this.secondFormGroup.controls.personal_ref_code.value}\",\"q_d\":\"${this.secondFormGroup.controls.personal_pin.value}\"}]`
      let obj = { ...this.firstFormGroup.value, ...second, ...this.thirdFormGroup.value, ...this.fourFormGroup.getRawValue() }
      this.productDetails = JSON.parse(localStorage.getItem('productSummary'))
      obj['enroll_product'] = this.productDetails.product_id
      obj['product_pk'] = this.productDetails.id
      obj['rate'] = this.productDetails.rate
      obj['batch_rate'] = this.productDetails.batch_rate
      obj['contract_term'] = this.productDetails.display_term
      obj['efl_link'] = this.productDetails.product_efl_url
      obj['deposit_amount'] = "300.00"
      obj['deposit_plan'] = "PNSYSDEPOSIT"
      obj['deposit_pay_amount'] = "0.00"
      obj['deposit_charge'] = "N"
      obj['life_support'] = this.fourFormGroup.controls.life_support.value == true ? "Y" : "N"
      localStorage.setItem('enrol_type', JSON.stringify(obj.enrol_type))
      obj['enrol_type'] = obj.enrol_type == 'Move-in (New Service)' ? "M" : "S"
      obj['cust_dob'] = this.enrollment.Date(this.secondFormGroup.controls.cust_dob.value)
      obj['request_date'] = this.enrollment.Date(this.firstFormGroup.controls.request_date.value)
      obj['cust_drl_expire'] = this.enrollment.DateDrl(this.secondFormGroup.controls.cust_drl_expire.value)
      obj['source'] = "WebLite"
      obj['ua'] = `${localStorage.getItem('ua')}`
      obj['plan_group'] = `${localStorage.getItem('plan')}`
      obj['promo_code'] = (localStorage.getItem('promotionCode') != "\"\"" && localStorage.getItem('promotionCode') != null && localStorage.getItem('promotionCode') != undefined) ? localStorage.getItem('promotionCode') : ''
      obj['priority_code'] = `${localStorage.getItem('priorityCode')}`
      obj['offcycle_switch_date'] = obj.request_date
      obj['premise_id'] = this.premiseInfo['premise_id']
      obj['flow_status'] = this.flow_status
      obj['pm_address2'] = this.premiseInfo['address1']
      obj['pm_city'] = this.premiseInfo['city']
      obj['pm_country'] = ''
      obj['pm_duns'] = this.premiseInfo['provider_id']
      obj['pm_state'] = this.premiseInfo['state']
      obj['pm_zip'] = this.premiseInfo['zip']
      obj['pm_county'] = this.premiseInfo['countyname']
      obj['waiver_notice'] = 'Y'
      if (this.setAutoPay == true) {
        obj['deposit_pay_type'] = "C"
        obj['deposit_acct_type'] = "ccard"
      }
      else if (this.setAutoPayACH == true) {
        obj['save_acct_ref_on_file'] = this.fourFormGroup.controls.save_acct_ref_on_file.setValue('1');
        obj['deposit_pay_type'] = "6"
        obj['deposit_acct_type'] = this.fourFormGroup.controls.deposit_acct_type.value
      }
      const dialogRef = this.dialog.open(EnrollmentConsentDialog, {
        width: '750px',
        data: obj,
        autoFocus: false
      })

      let consent: boolean
      dialogRef.afterClosed().subscribe(result => {
        consent = result
        if (consent == true) {
          this.loader = true
          switch (this.flow_status) {
            // Dont Check Credit
            case '-104':
              this.enrollment.initialSubmit(obj).subscribe(response => {
                if (response['status'] == true) {
                  obj.sys_batch_no = response['message']['SYSBATCHNO']
                  obj.use_cust_id = response['message']['use_cust_id']
                  obj.enroll_status = 'Pending for Deposit'
                  this.loader = false
                  this.dialog.open(DespositPopup, {
                    autoFocus: false,
                    data: obj
                  })
                } else { Swal(`Could not connect to server, please try again.`, '', 'error').then(t => this.submitBtn = false) }
              })
              break;
            // Check Credit
            case '-102':
              obj.enroll_status = 'Pending for Deposit'
              this.enrollment.initialSubmit(obj).subscribe(initialRes => {
                if (initialRes['status'] == true) {
                  obj.sys_batch_no = initialRes['message']['SYSBATCHNO']
                  obj.use_cust_id = initialRes['message']['use_cust_id']
                  this.submitBtn = false
                  this.enrollment.creditCheck(obj).subscribe(res => {
                    if (res['status'] == true) {
                      if (res['message']['CC']['CreditCheckStatus'] == "true") {
                        if (res['message']['CC']['CreditCheckDeposit'] == "" || res['message']['CC']['CreditCheckDeposit'] == "0.00" || res['message']['CC']['CreditCheckDeposit'] == "0") {
                          obj.flow_status = "100"
                          obj.enroll_status = 'Pending for Switch'
                          this.submitBtn = false
                          res['show_message'] = `Credit check successful.`
                          res['message_color'] = `black`
                          res['message'] = {}
                          res['message']['use_cust_id'] = obj.use_cust_id
                          this.service.changeData(res)
                          this.router.navigate(['enrollsuccess'])
                        }
                        else {
                          // pending payment and credit check success
                          obj.flow_status = "-120"
                          let para = {
                            rec_type: "CHG",
                            sys_batch_no: obj.sys_batch_no,
                            flow_status: "-120",
                          }
                          this.enrollment.changeEnrollmentStatus(para).subscribe(resp => {
                            this.loader = false
                            this.dialog.open(DespositPopup, {
                              autoFocus: false,
                              data: obj
                            })
                          })
                        }
                      }
                      else {
                        // No score return
                        obj.flow_status = "-121"
                        obj.custom_msg = 'We were unable to check your credit. Please pay deposit of $300.00 to proceed or call our customer service at 1-888-545-4687.'
                        let para = {
                          rec_type: "CHG",
                          sys_batch_no: obj.sys_batch_no,
                          flow_status: "-121",
                        }
                        this.enrollment.changeEnrollmentStatus(para).subscribe(resp => {
                          this.loader = false
                          this.dialog.open(DespositPopup, {
                            autoFocus: false,
                            data: obj
                          })
                        })
                      }
                    }
                    else {
                      Swal(res['message'], '', 'error').then(t => this.submitBtn = false)
                    }
                  }, err => { this.submitBtn = false })
                } else { Swal(`Could not connect to server, please try again.`, '', 'error').then(t => this.submitBtn = false) }
              })
              break;
            // Waiver Deposit
            case '-229':
            case '-228':
            case '-227':
              obj.enroll_status = 'Pending for Waiver Documents'
              this.enrollment.initialSubmit(obj).subscribe(initialResponse => {
                if (initialResponse['status'] == true) {
                  obj.sys_batch_no = initialResponse['message']['SYSBATCHNO']
                  obj.use_cust_id = initialResponse['message']['use_cust_id']
                  this.enrollment.dccFinalSubmit(obj).subscribe(res => {
                    if (res['status'] == true) {
                      this.submitBtn = false
                      res['show_message'] = `Please note that your enrollment will be pending until we recieve your waiver documents, fax your waiver documents to us at 281.715.5767 or email us at CustomerService@OUREnergyLLC.com.`
                      res['message_color'] = `red`
                      res['message'] = {}
                      res['message']['use_cust_id'] = obj.use_cust_id
                      this.service.changeData(res)
                      this.router.navigate(['enrollsuccess'])
                    }
                    else {
                      Swal(res['message'], '', 'error').then(t => this.submitBtn = false)
                    }
                  }, err => { this.submitBtn = false })
                } else { Swal(`Could not connect to server, please try again.`, '', 'error').then(t => this.submitBtn = false) }
              })
              break;
            default:
              break;
          }
        }
        else {
          this.submitBtn = false
        }
      })
    }
  }

  disable_requestDate() {
    this.firstFormGroup.controls.request_date.disable()
  }

  enable_requestDate() {
    this.firstFormGroup.controls.request_date.enable()
  }

  creditverification = {}
  creditvalue = ''

  radioChange(event: MatRadioChange) {
    if (event.value == 'Switching from another Energy Provider on Next Available Schedule Date') {
      this.firstFormGroup.controls.request_date.disable()
      this.ReqDateResponse.map(value => {
        this.first_standard_date = value.first_standard_date
        this.first_available_date = value.first_available_date
      })
      this.first_standard_date = this.first_standard_date.slice(0, 10)
      this.first_available_date = this.first_available_date.slice(0, 10)
      this.firstFormGroup.controls.request_date.setValue(this.first_standard_date)
      // alert(this.first_available_date)
    }
    else if (event.value == 'Switching from another Energy Provider on a Specific Date') {
      this.ReqDateResponse.map(value => {
        this.firstFormGroup.controls.request_date.enable()
        this.first_standard_date = value.first_standard_date
        this.first_available_date = value.first_available_date
      })
      this.first_standard_date = this.first_standard_date.slice(0, 10)
      this.first_available_date = this.first_standard_date
      this.firstFormGroup.controls.request_date.setValue(this.first_standard_date)
      alert(this.first_available_date)
    }
    else {
      this.firstFormGroup.controls.request_date.enable()
      this.ReqDateResponse.map(value => {
        this.first_standard_date = value.first_standard_date
        this.first_available_date = value.first_available_date
      })
      this.first_standard_date = this.first_standard_date.slice(0, 10)
      this.first_available_date = this.first_available_date.slice(0, 10)
      this.firstFormGroup.controls.request_date.setValue(this.first_standard_date)
      alert(this.first_available_date)
    }
  }
}

@Component({
  selector: 'confirmationpopup',
  templateUrl: './depositpopup.component.html',
  styleUrls: ['./depositpopup.component.scss']
})
export class DespositPopup {
  constructor(private router: Router, private service: UserService, private enrollment: EnrollmentService, public dialog: MatDialog, public dialogRef: MatDialogRef<EnrollmentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true
  }
  years = []
  username
  months = [
    { value: "01", viewValue: "January" },
    { value: "02", viewValue: "February" },
    { value: "03", viewValue: "March" },
    { value: "04", viewValue: "April" },
    { value: "05", viewValue: "May" },
    { value: "06", viewValue: "June" },
    { value: "07", viewValue: "July" },
    { value: "08", viewValue: "August" },
    { value: "09", viewValue: "September" },
    { value: "10", viewValue: "October" },
    { value: "11", viewValue: "November" },
    { value: "12", viewValue: "December" },
  ]
  cards = ['Master', 'Discover', 'Visa']
  message
  btnDisabled: boolean = false

  sendingData = new FormGroup({
    de_card_type: new FormControl('', [Validators.required]),
    de_cc_no: new FormControl('', [Validators.required, Validators.pattern("[0-9-]+")]),
    de_security_code: new FormControl('', [Validators.required, Validators.pattern("[0-9]+")]),
    de_expiry_MM: new FormControl('', [Validators.required]),
    de_expiry_YYYY: new FormControl('', [Validators.required]),
    de_autopay: new FormControl(true, [Validators.required]),
  })

  ngOnInit() {
    let currentYear = new Date().getFullYear()
    this.years[0] = currentYear
    for (let index = 1; index < 20; index++) {
      `${this.years[index] = this.years[index - 1] + 1}`
    }
  }

  submit() {
    if (this.sendingData.valid == true) {
      this.btnDisabled = true
      let obj = this.data
      obj['de_expiry_MM'] = this.sendingData.controls.de_expiry_MM.value
      obj['de_expiry_YYYY'] = String(this.sendingData.controls.de_expiry_YYYY.value)
      obj['de_security_code'] = this.sendingData.controls.de_security_code.value
      obj['de_card_type'] = this.sendingData.controls.de_card_type.value
      obj['de_cc_no'] = this.sendingData.controls.de_cc_no.value
      obj['de_autopay'] = this.sendingData.controls.de_autopay.value == true ? obj.de_autopay = "Y" : obj.deposit_autopay = "N"
      obj.pay_later = false
      delete obj.custom_msg
      this.enrollment.dccSubmit(obj).subscribe(res => {
        if (res['status'] == true) {
          if (res['message'] == "") {
            this.btnDisabled = false
            res['show_message'] = `Your deposit is submitted sucessfully.`
            res['message_color'] = `black`
            res['message'] = {}
            res['message']['use_cust_id'] = obj.use_cust_id
            this.dialogRef.close()
            this.service.changeData(res)
            this.router.navigate(['enrollsuccess'])
          }
          else {
            this.btnDisabled = false
            Swal(res['message'], '', 'error')
          }
        }
        else {
          this.btnDisabled = false
          Swal(res['message'], '', 'error')
        }
      }, err => { this.btnDisabled = false })
    }
  }

  cancel() {
    this.btnDisabled = true
    let obj = this.data
    obj.de_expiry_MM = ""
    obj.de_expiry_YYYY = ""
    obj.de_security_code = ""
    obj.de_card_type = ""
    obj.de_cc_no = ""
    obj.pay_later = true
    delete obj.custom_msg
    this.enrollment.dccFinalSubmit(obj).subscribe(res => {
      if (res['status'] == true) {
        this.btnDisabled = false
        res['show_message'] = `Please call us at 1-888-545-4687 to submit your deposit or check your email`
        res['message_color'] = `red`
        res['message'] = {}
        res['message']['use_cust_id'] = obj.use_cust_id
        this.dialogRef.close()
        this.service.changeData(res)
        this.router.navigate(['enrollsuccess'])
      }
      else {
        Swal(res['message'], '', 'error').then(t => this.btnDisabled = false)
      }
    }, err => { this.btnDisabled = false })
  }
}

@Component({
  templateUrl: './consent-dialog.html',
  styleUrls: ['./consent-dialog.scss']
})
export class EnrollmentConsentDialog implements OnInit {
  constructor(public thisDialogRef: MatDialogRef<EnrollmentConsentDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
    thisDialogRef.disableClose = true
    this.data = { ...this.data, ...JSON.parse(localStorage.getItem('productSummary')), ...{ enrol_type: JSON.parse(localStorage.getItem('enrol_type')) } }
  }
  ngOnInit() { }
  submit() {
    this.thisDialogRef.close(true)
  }
  close() {
    this.thisDialogRef.close(false)
  }
}