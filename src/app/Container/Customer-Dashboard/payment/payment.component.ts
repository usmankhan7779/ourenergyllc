import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core'
import { MatSnackBar } from '@angular/material'
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms'
import Swal from 'sweetalert2'
import { PaymentService } from '../../Store/Services'
import { UserService } from '../../../always-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private pay: PaymentService, public change: ChangeDetectorRef, private fb: FormBuilder, private router: Router, private service: UserService) { }
  custPayInfo
  authorize: boolean = false
  submitButtonStatus: boolean = false
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
  years = []
  paymentForm: FormGroup
  viewOrNot: boolean = true
  viewpoint :boolean =false

  ngOnInit() {
    window.scrollTo(0, 0)
    this.paymentForm = this.fb.group({
      sched_pay_amount: ['', [Validators.required, Validators.pattern('^[0-9]{1,9}([.][0-9]{1,9})?$'), Validators.min(1), Validators.max(24999.99)]],
      curr_email: [''],
      address_1: [''],
      address_2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      cust_name: ['', [Validators.required]],
      auto_pay: ['N'],
      cust_pii_2: [''],
      company_name: [''],
      card_no: ['', [Validators.required, Validators.pattern('^[0-9-]+$')]],
      exp_mm: ['', [Validators.required]],
      exp_yyyy: ['', [Validators.required]],
      acct_no_code: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      card_type: ['', [Validators.required]],
      sched_type: ['6'],
      country: ['US'],
      useActInFile: ['N'],
      ABA_NBR: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      cnfrm_ABA_NBR: [''],
      ACCT_NO: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      cnfrm_ACCT_NO: [''],
      ACCT_TYPE: ['', [Validators.required]],

      useCurrentAdd: [false],
    })

    let myYear = new Date().getFullYear()
    for (let index = 0; index < 25; index++) {
      this.years[index] = "" + myYear
      myYear = myYear + 1
    }

    this.pay.payUsing().subscribe(res => {
      this.custPayInfo = res['message']
      this.custPayInfo.due_amount_unposted > 0 ? this.paymentForm.controls.sched_pay_amount.setValue(this.custPayInfo.due_amount_unposted) : this.paymentForm.controls.sched_pay_amount.setValue('')
      this.paymentForm.controls.curr_email.setValue(this.custPayInfo.cust_emailid)
      this.paymentForm.controls.cust_pii_2.setValue(this.custPayInfo.cust_state)
      this.paymentForm.controls.company_name.setValue(this.custPayInfo.company_name)
      this.resetCreditCardValue()
      this.disableCreditCardValue()
      this.paymentForm.controls.acct_no_code.setValue('')
      this.paymentForm.controls.acct_no_code.disable()
    })

    this.paymentForm.valueChanges.subscribe(value => {
      if (this.paymentForm.controls.cnfrm_ABA_NBR.value !== this.paymentForm.controls.ABA_NBR.value) {
        this.paymentForm.controls.cnfrm_ABA_NBR.setErrors({ mismatch: true })
      } else {
        this.paymentForm.controls.cnfrm_ABA_NBR.setErrors(null);
      }
      if (this.paymentForm.controls.cnfrm_ACCT_NO.value !== this.paymentForm.controls.ACCT_NO.value) {
        this.paymentForm.controls.cnfrm_ACCT_NO.setErrors({ mismatch: true })
      } else {
        this.paymentForm.controls.cnfrm_ACCT_NO.setErrors(null);
      }
    })
  }
getcondition(){
  this.viewpoint= true;
  // alert(this.viewpoint)
}

getconditionss(){
  this.viewpoint= false;
  // alert(this.viewpoint)
}
  setBillingAddressValue() {
    this.paymentForm.controls.cust_name.setValue(`${this.custPayInfo.cust_firstname} ${this.custPayInfo.cust_lastname}`)
    this.paymentForm.controls.address_2.setValue(this.custPayInfo.cust_address2)
    this.paymentForm.controls.city.setValue(this.custPayInfo.cust_city)
    this.paymentForm.controls.state.setValue(this.custPayInfo.cust_state)
    this.paymentForm.controls.zip.setValue(this.custPayInfo.cust_zip)
  }
  resetBillingAddressValue() {
    this.paymentForm.controls.cust_name.setValue('')
    this.paymentForm.controls.address_2.setValue('')
    this.paymentForm.controls.city.setValue('')
    this.paymentForm.controls.state.setValue('')
    this.paymentForm.controls.zip.setValue('')
    this.paymentForm.controls.useCurrentAdd.setValue(false)
  }
  disableBillingAddressValue() {
    this.paymentForm.controls.cust_name.disable()
    this.paymentForm.controls.address_2.disable()
    this.paymentForm.controls.city.disable()
    this.paymentForm.controls.state.disable()
    this.paymentForm.controls.zip.disable()
    this.paymentForm.controls.useCurrentAdd.disable()
  }
  enableBillingAddressValue() {
    this.paymentForm.controls.cust_name.enable()
    this.paymentForm.controls.address_2.enable()
    this.paymentForm.controls.city.enable()
    this.paymentForm.controls.state.enable()
    this.paymentForm.controls.zip.enable()
    this.paymentForm.controls.useCurrentAdd.enable()
  }

  setCreditCardValue() {
    this.paymentForm.controls.card_no.setValue(this.custPayInfo.def_acct_num)
    this.paymentForm.controls.exp_mm.setValue(this.custPayInfo.def_custa_exp_month)
    this.paymentForm.controls.exp_yyyy.setValue(this.custPayInfo.def_custa_exp_year)
    this.paymentForm.controls.card_type.setValue(this.custPayInfo.def_card_type)
  }
  resetCreditCardValue() {
    this.paymentForm.controls.card_no.setValue('')
    this.paymentForm.controls.exp_mm.setValue('')
    this.paymentForm.controls.exp_yyyy.setValue('')
    this.paymentForm.controls.card_type.setValue('')
    this.paymentForm.controls.acct_no_code.setValue('')
  }
  disableCreditCardValue() {
    this.paymentForm.controls.card_no.disable()
    this.paymentForm.controls.exp_mm.disable()
    this.paymentForm.controls.exp_yyyy.disable()
    this.paymentForm.controls.card_type.disable()
  }
  enableCreditCardValue() {
    this.paymentForm.controls.card_no.enable()
    this.paymentForm.controls.exp_mm.enable()
    this.paymentForm.controls.exp_yyyy.enable()
    this.paymentForm.controls.card_type.enable()
    this.paymentForm.controls.acct_no_code.enable()
  }

  setAchValue() {
    this.paymentForm.controls.ABA_NBR.setValue(this.custPayInfo.def_aba_num)
    this.paymentForm.controls.cnfrm_ABA_NBR.setValue(this.custPayInfo.def_aba_num)
    this.paymentForm.controls.ACCT_NO.setValue(this.custPayInfo.def_acct_num)
    this.paymentForm.controls.cnfrm_ACCT_NO.setValue(this.custPayInfo.def_acct_num)
    this.paymentForm.controls.ACCT_TYPE.setValue(this.custPayInfo.def_cust_acct_type)
  }
  resetAchValue() {
    this.paymentForm.controls.ABA_NBR.setValue('')
    this.paymentForm.controls.cnfrm_ABA_NBR.setValue('')
    this.paymentForm.controls.ACCT_NO.setValue('')
    this.paymentForm.controls.cnfrm_ACCT_NO.setValue('')
    this.paymentForm.controls.ACCT_TYPE.setValue('')
  }
  disableAchValue() {
    this.paymentForm.controls.ABA_NBR.disable()
    this.paymentForm.controls.cnfrm_ABA_NBR.disable()
    this.paymentForm.controls.ACCT_NO.disable()
    this.paymentForm.controls.cnfrm_ACCT_NO.disable()
    this.paymentForm.controls.ACCT_TYPE.disable()
  }
  enableAchValue() {
    this.paymentForm.controls.ABA_NBR.enable()
    this.paymentForm.controls.cnfrm_ABA_NBR.enable()
    this.paymentForm.controls.ACCT_NO.enable()
    this.paymentForm.controls.cnfrm_ACCT_NO.enable()
    this.paymentForm.controls.ACCT_TYPE.enable()
  }

  payUsing(method, event) {
    if (event.checked == true) {
      window.scroll(0, 130)
      this.viewOrNot = false
      this.paymentForm.controls.auto_pay.setValue('N')
      this.paymentForm.controls.sched_type.disable()
      this.paymentForm.controls.useActInFile.setValue('Y')
      this.setBillingAddressValue()
      this.disableBillingAddressValue()
      this.disableCreditCardValue()
      this.disableAchValue()
      if (method == 'ccard') {
        this.paymentForm.controls.sched_type.setValue('C')
        this.paymentForm.controls.useCurrentAdd.setValue(false)
        this.setCreditCardValue()
        this.resetAchValue()
        this.paymentForm.controls.acct_no_code.setValue('')
        this.paymentForm.controls.acct_no_code.enable()
      } else {
        this.paymentForm.controls.sched_type.setValue('6')
        this.paymentForm.controls.useCurrentAdd.setValue(false)
        this.setAchValue()
        this.resetCreditCardValue()
        this.paymentForm.controls.acct_no_code.setValue('')
        this.paymentForm.controls.acct_no_code.disable()
      }
    } else {
      this.viewOrNot = true
      this.paymentForm.controls.sched_type.enable()
      this.paymentForm.controls.useActInFile.setValue('N')
      if (this.paymentForm.controls.sched_type.value == '6') {
        this.enableAchValue()
        this.disableCreditCardValue()
        this.paymentForm.controls.acct_no_code.setValue('')
        this.paymentForm.controls.acct_no_code.disable()
      } else {
        this.disableAchValue()
        this.enableCreditCardValue()
      }
      this.resetAchValue()
      this.resetCreditCardValue()
      this.enableBillingAddressValue()
      this.resetBillingAddressValue()
    }
  }

  changePayMode(event) {
    this.paymentForm.controls.useActInFile.setValue('N')
    this.resetCreditCardValue()
    this.resetAchValue()
    this.resetBillingAddressValue()
    this.enableBillingAddressValue()
    if (event.value == 'C') {
      this.enableCreditCardValue()
      this.disableAchValue()
    } else {
      this.enableAchValue()
      this.disableCreditCardValue()
      this.paymentForm.controls.acct_no_code.setValue('')
      this.paymentForm.controls.acct_no_code.disable()
    }
  }

  changeAuth(event) {
    this.authorize = event.checked
  }

  changeUseCurrentAddress() {
    if (this.paymentForm.controls.useCurrentAdd.value) {
      this.setBillingAddressValue()
    } else {
      this.resetBillingAddressValue()
    }
  }

  submitPayment() {
    if (this.paymentForm.valid && this.authorize) {
      this.submitButtonStatus = true
      let obj = this.paymentForm.getRawValue()
      delete obj.useCurrentAdd
      delete obj.cnfrm_ABA_NBR
      delete obj.cnfrm_ACCT_NO
      this.pay.makePayment(obj).subscribe(res => {
        if (res["status"] == true) {
          if (res['message']['ProcStatus'] == "") {
            Swal('Your payment has been processed', '', 'success').then(() => {
              this.service.changeData(res)
              this.router.navigate(['/dashboard/paymentsuccess'])
            })
          }
          else {
            Swal(res['message']['ProcStatus'], '', 'error').then(result => { this.submitButtonStatus = false })
          }
        }
        else {
          Swal('Your payment could not be processed, please try again later', '', 'error').then(result => { this.submitButtonStatus = false })
        }
      }, err => {
        Swal(err, '', 'error').then(result => { this.submitButtonStatus = false })
      })
    }
  }
}

@Component({
  selector: 'app-payment-success-page',
  templateUrl: './payment-success-page.html',
  styleUrls: ['./payment-success-page.scss']
})
export class PaymentSuccessPageComponent implements OnInit {
  response = null

  constructor(private service: UserService, private router: Router) { }

  date = new Date()

  ngOnInit() {
    window.scrollTo(0, 0)
    this.service.data.subscribe(res => {
      if (res != undefined) {
        this.response = res
      } else {
        this.router.navigate(['/dashboard/'])
      }
    })
  }
}