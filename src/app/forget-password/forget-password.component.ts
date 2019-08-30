import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MatFormFieldModule } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, Validators, FormBuilder, FormGroup, MinLengthValidator, } from '@angular/forms';
import { environment } from '../../environments/environment'
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { MatStepper } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { RecapchaService } from '../recapcha/recapcha.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForgetPasswordComponent implements OnInit {

  constructor(public recapcha: RecapchaService, public routes: Router, private http: HttpClient, public thisDialogRef: MatDialogRef<LoginComponent>, public snackBar: MatSnackBar) { }
  ngOnInit() {
  }
  x;
  showSpinner: boolean = false;
  email;
  validate_email = new FormControl('', [Validators.required, Validators.email]);
  custid;
  cust_id = new FormControl('', [Validators.required]);
  cap_result
  username
  getErrorMessageEmail() {
    return this.validate_email.hasError('required') ? 'You must enter a value' :
      this.validate_email.hasError('email') ? 'Not a valid email' :
        '';
  }
  getErrorMessageAcc() {
    return this.validate_email.hasError('required') ? 'You must enter a value' :
      this.validate_email.hasError('custid') ? 'Not a valid Account no.' :
        '';
  }

  close() {
    this.thisDialogRef.close();
  }
  sumbit() {

    let status = this.recapcha.check()
    if (status == false) {
      this.cap_result = "The reCAPTCHA code you entered was incorrect"
    }
    else {
      this.cap_result = ""
    }

    if (this.email != null && this.email != null) {
      let post = {
        email: this.email,
        account_no: this.custid,
      }
      this.x = setTimeout(() => {
        this.showSpinner = true
      }, 2000)
      this.http.post(environment.url + 'config/forgetpasswordcode/', post, {
        'headers': {
          'Content-Type': 'application/json',
        }
      }).
        subscribe(res => {
          if (res["status"] == true) {
            this.username = res['username']
            clearTimeout(this.x)
            this.snackBar.open(res["message"], 'close', {
              duration: 2000
            })
            this.showSpinner = true;
            this.thisDialogRef.close();
            this.routes.navigate(['/reset-password', this.username, this.email], { skipLocationChange: true });
          }
          else if (res["status"] == false) {
            this.snackBar.open(res["message"], 'close', {
              duration: 2000
            })
            this.thisDialogRef.close();
          }
        }, err => {
          this.snackBar.open('Server not responding', 'close', {
            duration: 2000
          })
        });
    }
  }
}
@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ResetPasswordComponent {
  isLinear = true;
  firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  secondFormGroup = new FormGroup({
    code:new FormControl(['', Validators.required]),
    new_password:new FormControl('', [Validators.required,Validators.minLength(8),  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    confirm_password:new FormControl('', [Validators.required,Validators.minLength(8), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$')])
})
  constructor(public route: ActivatedRoute, public snackBar: MatSnackBar, private _formBuilder: FormBuilder, private http: HttpClient) { }
  code;
  // new_password;
  // confirm_password;
  showSpinner: boolean = false;
  x;
  showResendButton: boolean = false;
  showTimerr: boolean = true;
  showExpString = "Your code will expire in "
  email
  timerrrr;
  hour
  _second
  username

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.username = res.username
      this.email = res.email
      // console.log(this.username)
      // if (res.PromoCode != null && res.PromoCode != "" && res.PromoCode != undefined) {
      //   // this.promoCode = res.PromoCode
      // }
    })
    this.firstFormGroup = this._formBuilder.group({
      code: ['', Validators.required],
      email: new FormControl({ value: this.email, disabled: true }, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
    });
    // this.secondFormGroup = this._formBuilder.group({
    //   code: ['', Validators.required],
    //   new_password: ['', Validators.required,  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')],
    //   confirm_password: ['', Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]
    // });
    this.showResendButton = false;
    this.Timerr(4, 59)
  }
  Timerr(hour, _second) {
    this.hour = hour;
    this._second = _second
    var clear = setInterval(() => {
      this._second = _second--;
      if (_second == 0) {
        if (hour == 0) {
          this.showExpString = "Your is Code Expired"
          clearInterval(clear)
          this.showTimerr = false;
          this.showResendButton = true;
        }
        else {
          this._second = _second = 59;
          this.hour = hour--;
        }
      }
    }, 1000);
  }
  Resend() {
    this.showResendButton = false;
    let post = {
      email: this.email,
    }
    this.x = setTimeout(() => {
      this.showSpinner = true
    }, 2000)
    this.http.post(environment.url + 'config/forgetpasswordcode/', post, {
      'headers': {
        'Content-Type': 'application/json',
      }
    }).subscribe(res => {
      if (res["status"] == true) {
        this.showTimerr = true;
        this.showExpString = "Your code will expire in "
        this.Timerr(4, 59);
      }
      else if (res["status"] == false) {
        this.snackBar.open(res["message"], 'close', {
          duration: 2000
        })
      }
    })

  }
  verifyCode(stepper: MatStepper) {
    let post = {
      code: this.code,
      email: this.username
    }
    this.http.post(environment.url + 'config/verifysentpasswordCode/', post).subscribe(res => {
      if (res["status"] == true) {
        stepper.next();
        this.snackBar.open(res["message"], 'close', {
          duration: 2000
        })
      }
      else {
        this.snackBar.open(res["message"], 'close', {
          duration: 2000
        })
      }
    })
  }
  resetPassword(stepper: MatStepper) {
    if (this.secondFormGroup.valid) {
      let post = {
        code: this.code,
        // new_password: this.new_password,
        // confirm_password: this.confirm_password
        new_password:this.secondFormGroup.controls.new_password.value,
        confirm_password:this.secondFormGroup.controls.confirm_password.value
      }
      this.http.post(environment.url + 'config/verifyForgetPasswordCode/', post).subscribe(res => {
        if (res["status"] == true) {
          stepper.next();
          Swal(res['message'], '', 'success')
          this.snackBar.open(res["message"], 'close', {
            duration: 2000
          })
        }
        else {
          this.snackBar.open(res["message"], 'close', {
            duration: 2000
          })
        }
      })
    }
  }
}