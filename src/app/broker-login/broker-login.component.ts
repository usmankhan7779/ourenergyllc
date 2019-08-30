import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-broker-login',
  templateUrl: './broker-login.component.html',
  styleUrls: ['./broker-login.component.scss']
})
export class BrokerLoginComponent implements OnInit {

  validate_email = new FormControl('', [Validators.required, Validators.email])
  validate_password = new FormControl('', [Validators.required, Validators.minLength(8)])
  email
  password

  constructor() { }

  getErrorMessageEmail() {
    return this.validate_email.hasError('required') ? 'You must enter a value' :
      this.validate_email.hasError('email') ? 'Not a valid email' :
        ''
  }

  getErrorMessagePassword() {
    return this.validate_password.hasError('required') ? 'You must enter a value' :
      this.validate_password.hasError('minlength') ? 'Password should contain 8 characters' :
        ''
  }

  hide = true

  ngOnInit() { }

}
