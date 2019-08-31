import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, Inject } from '@angular/core'
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { ForgetPasswordComponent } from '../forget-password/forget-password.component'
import { MatSnackBar } from '@angular/material'
import { environment } from '../../environments/environment'
import { QuickBillService } from '../Container/Store/Services'
import Swal from 'sweetalert2'
import { RecapchaService } from '../recapcha/recapcha.service'
import { VerificationEmailComponent } from './verification-email/verification-email.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('login') loginForms: ElementRef
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('')]),
    password: new FormControl('', [Validators.required])
  })
  RememberMe = new FormGroup({
    checked: new FormControl('', [Validators.required, Validators.pattern('')]),
  })
  verificationEmail() {
    let dialogRef = this.dialog.open(VerificationEmailComponent, {
      width: '520px',
      // data: url
    })
    dialogRef.afterClosed()
  }
  x; SignInButton = true;
  error
  cap_result
  hide = true
  hideLogin = true
  remember = localStorage.getItem('remember')
  Email
  Password
  checked: boolean = true
  showSpinner: boolean = false
  showSpinnerForMultiAccount: boolean = false
  multipleID: boolean = false
  multiple_Accounts = []
  selectBtnStatus = []

  constructor(public recapcha: RecapchaService, public change: ChangeDetectorRef, private http: HttpClient, private router: Router, public dialog: MatDialog, public snackBar: MatSnackBar) { }
  ngOnInit() {
    window.scrollTo(0, 0)
    if (localStorage.getItem('remember') == 'true') {
      this.Email = localStorage.getItem('email')
      this.checked = true
    } else {
      this.Email
      this.Password
      this.checked
    }
  }

  SelectAccount(index) {
    this.showSpinnerForMultiAccount = true
    let obj = this.multiple_Accounts[index]
    let AccLogin = this.loginForm.value
    AccLogin['cust_id'] = obj.cust_id
    this.selectBtnStatus[obj.cust_id] = true
    // this.multiple_Accounts = []

    this.http.post(environment.url + 'config/login/', AccLogin, {
      'headers': { 'Content-Type': 'application/json' }
    }).subscribe(res => {
      if (Array.isArray(res)) {
        // this.showSpinnerForMultiAccount = false
        // this.selectBtnStatus[obj.cust_id] = false
        this.multipleID = true
        res.map(resp => {
          this.multiple_Accounts.push(resp['sub_id'])
        })
        clearTimeout(this.x)
      }
      else {
        let token = res['data'].token
        let decode = JSON.parse(atob(token.split('.')[1]))
        if (res['status'] == false) {
          // this.showSpinnerForMultiAccount = false
          // this.selectBtnStatus[obj.cust_id] = false
          clearTimeout(this.x)
          this.snackBar.open(res['message']['non_field_errors'], 'close', {
            duration: 2000,
          })
        }
        else if (res['status'] == true && decode['is_admin'] == false) {
          // else if (res['status'] == true) {
          if ([res].length > 1) {
            // this.showSpinnerForMultiAccount = false
            // this.selectBtnStatus[obj.cust_id] = false
            this.multipleID = true
          }
          else {
            // this.showSpinnerForMultiAccount = false
            // this.selectBtnStatus[obj.cust_id] = false
            clearTimeout(this.x)
            localStorage.setItem('login_res', JSON.stringify(res))
            localStorage.setItem('token', res['data']['token'])
            localStorage.setItem('is_admin', decode['is_admin'])
            this.router.navigate(['/dashboard'])
            // this.showSpinnerForMultiAccount = false
            // this.selectBtnStatus[obj.cust_id] = false
            localStorage.setItem('custid', decode['cust_id'])
            localStorage.setItem('username', decode['username'])
            if (localStorage.getItem('remember') == 'true') {
              localStorage.setItem('email', this.loginForm.value.email)
              localStorage.setItem('cust_password', this.loginForm.value.password)
            }
            else if (localStorage.getItem('remember') == 'false') {
              localStorage.removeItem('email')
              localStorage.removeItem('cust_password')
              localStorage.removeItem('remember')
            }
            // this.snackBar.open('You have Successfully Logged In', 'close', {
            //   duration: 2000,
            // })
          }
        }
        else if (res['status'] == true && decode['is_admin'] == true) {
          clearTimeout(this.x)
          localStorage.setItem('login_res', JSON.stringify(res))
          localStorage.setItem('token', res['data']['token'])
          localStorage.setItem('is_admin', decode['is_admin'])
          this.router.navigate(['/adminportal'])
          localStorage.setItem('custid', decode['cust_id'])
          localStorage.setItem('username', decode['username'])
          if (localStorage.getItem('remember') == 'true') {
            localStorage.setItem('email', this.loginForm.value.email)
            localStorage.setItem('cust_password', this.loginForm.value.password)
          }
          else if (localStorage.getItem('remember') == 'false') {
            localStorage.removeItem('email')
            localStorage.removeItem('cust_password')
            localStorage.removeItem('remember')
          }
          // this.snackBar.open('You have Successfully Logged In', 'close', {
          //   duration: 2000,
          // })
        }
      }
    }, err => {
      clearTimeout(this.x)
      this.snackBar.open('Something went wrong', 'close', {
        duration: 2000,
      })
      this.showSpinnerForMultiAccount = false
      this.selectBtnStatus[obj.cust_id] = false
    })
  }

  check
  onSubmit() {
    let status = this.recapcha.check()

    if (status == false) {
      this.cap_result = "Please re-enter text"
    }
    else {
      this.cap_result = ""
    }
    if (this.loginForm.valid && status == true) {
      this.multiple_Accounts = null
      this.check = false
      this.SignInButton = false
      let obj = this.loginForm.value
      this.x = setTimeout(() => {
        this.showSpinner = true
      }, 1000)
      this.http.post(environment.url + 'config/login/', obj, {
        'headers': {
          'Content-Type': 'application/json',
        }
      }).
        subscribe(res => {
          this.SignInButton = true

          if (Array.isArray(res['message'])) {
            this.showSpinner = false
            this.multipleID = true
            this.multiple_Accounts = []
            res['message'].map(resp => {
              this.multiple_Accounts.push(resp['sub_id'])
            })
            if (this.multiple_Accounts != null) {
              this.check = true
            }
            this.showSpinner = false
            this.hideLogin = false
            clearTimeout(this.x)
            window.scrollTo(0, 0)
          }
          else {
            if (res['status'] == false) {
              this.hideLogin = true
              Swal(res['message']['non_field_errors'].toString(), '', 'warning')
              clearTimeout(this.x)
              // this.snackBar.open(res['message']['non_field_errors'], 'close', {
              //   duration: 2000,
              // }) 
              this.showSpinner = false
            }
            else {
              let token = res['data'].token
              let decode = JSON.parse(atob(token.split('.')[1]))
              if (res['status'] == true && decode['is_admin'] == false) {
                // else if (res['status'] == true) {
                if ([res].length > 1) {
                  this.showSpinner = false
                  this.multipleID = true
                }
                else {
                  clearTimeout(this.x)
                  localStorage.setItem('login_res', JSON.stringify(res))
                  localStorage.setItem('token', res['data']['token'])
                  localStorage.setItem('is_admin', decode['is_admin'])
                  this.router.navigate(['/dashboard'])
                  // this.showSpinner = false
                  localStorage.setItem('custid', decode['cust_id'])
                  localStorage.setItem('username', decode['username'])
                  if (localStorage.getItem('remember') == 'true') {
                    localStorage.setItem('email', this.loginForm.value.email)
                    localStorage.setItem('cust_password', this.loginForm.value.password)
                  }
                  else if (localStorage.getItem('remember') == 'false') {
                    localStorage.removeItem('email')
                    localStorage.removeItem('cust_password')
                    localStorage.removeItem('remember')
                  }
                  // localStorage.setItem('Photo', res['user']['pic']) 
                  // this.snackBar.open('You have Successfully Logged In', 'close', {
                  //   duration: 2000,
                  // })
                }
              }
              else if (res['status'] == true && decode['is_admin'] == true) {
                clearTimeout(this.x)
                // this.showSpinner = false
                localStorage.setItem('login_res', JSON.stringify(res))
                localStorage.setItem('token', res['data']['token'])
                localStorage.setItem('is_admin', decode['is_admin'])
                this.router.navigate(['/adminportal'])
                localStorage.setItem('custid', decode['cust_id'])
                if (localStorage.getItem('remember') == 'true') {
                  localStorage.setItem('email', this.loginForm.value.email)
                  localStorage.setItem('cust_password', this.loginForm.value.password)
                }
                else if (localStorage.getItem('remember') == 'false') {
                  localStorage.removeItem('email')
                  localStorage.removeItem('cust_password')
                  localStorage.removeItem('remember')
                }
                // localStorage.setItem('Photo', res['user']['pic']) 
                // this.snackBar.open('You have Successfully Logged In', 'close', {
                //   duration: 2000,
                // })
              }
            }
          }
        },
          err => {
            clearTimeout(this.x)
            this.snackBar.open('Something went wrong', 'close', {
              duration: 2000,
            })
            this.SignInButton = true
            this.showSpinner = false
          })
    }
  }

  get f() {
    return this.loginForm.controls
  }

  ShowLoginForm() {
    this.check = false
    this.hideLogin = true
  }

  remeberMe() {
    if (localStorage.getItem('remember') == 'false' || localStorage.getItem('remember') == undefined) {
      localStorage.setItem('remember', 'true')
    }
    else if (localStorage.getItem('remember') == 'true') {
      localStorage.setItem('remember', 'false')
      localStorage.removeItem('email')
      localStorage.removeItem('cust_password')
    }
  }
  dialogResult = ""
  openDialog() {
    let dialogRef = this.dialog.open(ForgetPasswordComponent, {
      width: '550px',

    })
    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result
    })
  }
  quickResult = ""
  quickPayDialog() {
    let dialogRef = this.dialog.open(QuickPayComponent, {
      width: '550px',

    })
    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result
    })
  }
}
@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./login.component.scss']
})
export class RegisterComponent {
  constructor(public recapcha: RecapchaService, public snackBar: MatSnackBar, private http: HttpClient, public changedetector: ChangeDetectorRef, private router: Router) { }
  @ViewChild('form') forms: ElementRef
  passwordError
  registerSbmtBtn: boolean = false
  agree: boolean
  passError
  showSpinner: boolean = false
  emailStatus: boolean = false
  showEmailSpinnerstatus = false
  myForm = new FormGroup({
    // firstname: new FormControl('', [Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
    // lastname: new FormControl('', [Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')]),
    zip: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(5)]),
    login_id: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cust_id: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    password_confirm: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    secret_question: new FormControl('', Validators.required),
    secret_answer: new FormControl('', Validators.required),
  })

  ComparePassword(event: any) {
    if (event.target.value != this.myForm.value.password) {
      this.passError = true
      this.passwordError = "Your password and confirmation password do not match"

    }
    else {
      this.passError = false
      this.passwordError = ""
    }
  }
  checkEmail(val) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(String(val).toLowerCase()) == true) {
      let obj = {
        email: val
      }
      this.http.post(environment.url + "config/validateemail/", obj).subscribe(res => {
        if (res['status'] == true) {
          this.emailStatus = res['status']
          this.showEmailSpinnerstatus = false
        }
        else {
          this.emailStatus = res['status']
          this.showEmailSpinnerstatus = true
          this.snackBar.open(res["message"][0], 'close', {
            duration: 1000
          })
        }
      })
    }
  }
  submit() {
    let status = this.recapcha.check()
    if (status == false) {
      this.cap_result = "The reCAPTCHA code you entered was incorrect"
    }
    else {
      this.cap_result = ""
    }
    // if(this.emailStatus==false){

    // }
    if (this.myForm.valid && status && this.emailStatus == true) {
      this.registerSbmtBtn = true
      this.showSpinner = true
      let data = this.myForm.value
      data.register_client = 'W'
      data.signup_from = 'W'
      this.http.post(environment.url + "config/sig-register/", data).subscribe(res => {
        let errMsg = ""
        if (res['status'] == true) {
          this.showSpinner = false
          Swal(res['message'].toString(), '', 'success').then(res => {
            this.registerSbmtBtn = false
            this.router.navigate(['/login'])
          })
          this.snackBar.open(res["message"], 'close', {
            duration: 1000
          })
        }
        else {
          for (let a in res['message']) {
            errMsg = errMsg + res['message'][a] + "<br>"
          }
          Swal(errMsg, '', 'warning')
          this.registerSbmtBtn = false
          this.showSpinner = false
        }
      }, err => {
        Swal('Something went wrong', '', 'error')
        this.registerSbmtBtn = false
        this.showSpinner = false
      })
    }
  }

  get controls() {
    return this.myForm.controls
  }
  hide = true
  hides = true
  cap_result
  ngOnInit() {
    window.scroll(0, 0)
  }
}

@Component({
  selector: 'quick-pay',
  templateUrl: './quickPay.html',
  styleUrls: ['./login.component.scss']
})
export class QuickPayComponent {

  @ViewChild('quick') quickpay: ElementRef
  quickForm: FormGroup
  sbmtBtn = false
  constructor(public dialog: MatDialog, public changedetect: ChangeDetectorRef, public quick: QuickBillService, public snackBar: MatSnackBar, public thisDialogRef: MatDialogRef<LoginComponent>, private fb: FormBuilder) {
    this.thisDialogRef.disableClose = true
    this.quickForm = this.fb.group({
      cust_id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9-]*$'), Validators.minLength(12)]),
      zip_code: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(5)])
    })
    this.changePhone()
  }

  submit() {
    if (this.quickForm.valid) {
      this.sbmtBtn = true
      let obj = this.quickForm.value
      this.quick.quickbill(obj).subscribe(res => {
        if (res['status'] == true) {
          this.sbmtBtn = false
          this.thisDialogRef.close()
          this.dialog.open(QuickPayComponentFinal, {
            data: res['message']
          })
        } else {
          Swal(res['message'], '', 'error').then(res => {
            this.sbmtBtn = false
          })
        }
      }, err => {
        Swal(`Could not connect to server, please try again.`, '', 'error').then(res => {
          this.sbmtBtn = false
        })
      })
    }
  }

  changePhone() {
    this.quickForm.valueChanges.subscribe(val => {
    })
  }

  get quickPay() {
    return this.quickForm.controls
  }

  cancel() {
    this.thisDialogRef.close()
  }
}

@Component({
  templateUrl: './quickPayFinal.html',
  styleUrls: ['./quickPayFinal.scss']
})
export class QuickPayComponentFinal implements OnInit {
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
  @ViewChild('quick') quickpay: ElementRef

  quickForm = new FormGroup({
    curr_email: new FormControl(''),
    address_1: new FormControl(''),
    address_2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(5)]),
    cust_name: new FormControl('', [Validators.required]),
    card_no: new FormControl('', [Validators.pattern('^[0-9-]+$'), Validators.required]),
    exp_mm: new FormControl('', [Validators.required]),
    exp_yyyy: new FormControl('', [Validators.required]),
    acct_no_code: new FormControl('', [Validators.pattern('^[0-9]+$'), Validators.required]),
    card_type: new FormControl('VISA', [Validators.required]),
    sched_pay_amount: new FormControl(``, [Validators.pattern('^([0-9]{1,4})(\.[0-9]{1,2})?$'), Validators.required, Validators.min(1)]),
    cust_pii_2: new FormControl('TX'),
    auto_pay: new FormControl('F'),
    cust_firstname: new FormControl(`${this.data.cust_firstname}`),
    cust_lastname: new FormControl(`${this.data.cust_lastname}`),
    company_name: new FormControl(`${this.data.company_name}`),
    cust_id: new FormControl(`${this.data.cust_id}`),
    sched_type: new FormControl('C'),
    country: new FormControl('US'),
    useActInFile: new FormControl('N'),
  })
  sbmtBtn = false

  constructor(public changedetect: ChangeDetectorRef, public quick: QuickBillService, public snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any, public thisDialogRef: MatDialogRef<QuickPayComponentFinal>) {
    this.thisDialogRef.disableClose = true
    let myYear
    myYear = new Date().getFullYear()
    for (let index = 0; index < 25; index++) {
      this.years[index] = "" + myYear
      myYear = myYear + 1
    }
  }

  ngOnInit() {
    if (this.data.due_amount_unposted > 0) { this.quickForm.controls.sched_pay_amount.setValue(`${this.data.due_amount_unposted}`) }
  }

  changeAddress(event) {
    if (event.checked == true) {
      this.quickPay.cust_name.setValue(`${this.data.cust_firstname} ${this.data.cust_lastname}`)
      this.quickPay.zip.setValue(`${this.data.premise_zip}`.slice(0, 5))
      this.quickPay.state.setValue(`${this.data.premise_state}`)
      this.quickPay.city.setValue(`${this.data.premise_city}`)
      this.quickPay.address_2.setValue(`${this.data.premise_address2}`)
    } else {
      this.quickPay.cust_name.setValue('')
      this.quickPay.zip.setValue('')
      this.quickPay.state.setValue('')
      this.quickPay.city.setValue('')
      this.quickPay.address_2.setValue('')
    }
  }

  submit() {
    if (this.quickForm.valid) {
      this.sbmtBtn = true
      let obj = this.quickForm.value
      this.quick.quickBillFinal(obj).subscribe(res => {
        if (res['status'] == true) {
          Swal(`Payment submitted successfully`, '', 'success').then(res => {
            this.sbmtBtn = false
            this.thisDialogRef.close()
          })
        } else {
          Swal(res['message'], '', 'error').then(res => {
            this.sbmtBtn = false
          })
        }
      }, err => {
        Swal(`Could not connect to server, please try again.`, '', 'error').then(res => {
          this.sbmtBtn = false
        })
      })
    }
  }

  get quickPay() {
    return this.quickForm.controls
  }

  cancel() {
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel!'
    }).then((result) => {
      if (result.value) {
        this.thisDialogRef.close()
      }
    })
  }
}