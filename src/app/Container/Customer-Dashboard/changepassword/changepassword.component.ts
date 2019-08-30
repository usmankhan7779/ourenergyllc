import { FormControl, Validators, FormGroup } from '@angular/forms'
import { ChangePersonelInfoServices } from '../../../Container/Store/Services'
import { Component, OnInit, Inject } from '@angular/core'
import { CustomerInfoComponent } from '../customer-info/customer-info.component'
import { ViewEncapsulation } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { CustomerService } from '../../Store/Services'
import { MatDialogRef } from '@angular/material'
import { MatSnackBar } from '@angular/material'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChangepasswordComponent implements OnInit {
  constructor(public info: ChangePersonelInfoServices, public snackBar: MatSnackBar, public thisDialogRef: MatDialogRef<CustomerInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  message
  hide = true
  hide2 = true
  hide1 = true
  isBtnDisabled = false

  get f() {
    return this.resetPasswordGroup.controls
  }

  resetPasswordGroup = new FormGroup({
    old_password: new FormControl('', [Validators.required]),
    new_password: new FormControl('', [Validators.required,Validators.minLength(8),  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    confirm_password: new FormControl('',[Validators.required,Validators.minLength(8),  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$')])
  })

  ngOnInit() {
    this.resetPasswordGroup.valueChanges.subscribe(val => {
      if (val.new_password === val.confirm_password) {
        this.resetPasswordGroup.controls.confirm_password.setErrors(null)
      } else {
        this.resetPasswordGroup.controls.confirm_password.setErrors({ 'match': true })
      }
    })
  }

  submit() {
    if (this.resetPasswordGroup.valid) {
      let obj = this.resetPasswordGroup.value
      this.isBtnDisabled = true
      this.info.changePassword(obj).subscribe(response => {
        if (response['status'] == true) {
          Swal(response['message'], '', 'success').then(() => {
            this.thisDialogRef.close()
          })
        } else {
          Swal(response['message'], '', 'warning')
        }
      }, err => {
        Swal(err, '', 'error')
      }, () => {
        this.isBtnDisabled = false
      })
    }
  }
}

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ContactInfoComponent implements OnInit {
  constructor(public contact: CustomerService, public info: ChangePersonelInfoServices, public snackBar: MatSnackBar, public dialog: MatDialogRef<CustomerInfoComponent>, private router: Router) { }
  custInfoForm = new FormGroup({
    rec_type: new FormControl('CHG'),
    cust_id: new FormControl(''),
    cust_emailid: new FormControl('', [Validators.email, Validators.required]),
    cust_phone1: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')]),
    cust_phone2: new FormControl('', [Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')]),
    cust_sms_provider: new FormControl(''),
    cust_address2: new FormControl('', [Validators.required]),
    cust_city: new FormControl('', [Validators.required]),
    cust_zip: new FormControl('', [Validators.required]),
    cust_state: new FormControl('', [Validators.required]),
  })

  completeChecker(value) {
    return value != null && value != undefined && value != "" ? true : false
  }

  sbmtBtnStatus: boolean = false
  bill = JSON.parse(localStorage.getItem('dashboard_response'))
  lastName
  username
  company_name

  ngOnInit() {
    let p1 = ''
    let p2 = ''
    if (this.bill[0]['cust_phone']) { p1 = `${(this.bill[0]['cust_phone'].replace(')', '').replace(' ', '').replace('(', '').replace(/-/g, '')).slice(0, 3)}-${(this.bill[0]['cust_phone'].replace(')', '').replace(' ', '').replace('(', '').replace(/-/g, '')).slice(3, 6)}-${(this.bill[0]['cust_phone'].replace(')', '').replace(' ', '').replace('(', '').replace(/-/g, '')).slice(6, 10)}` }
    if (this.bill[0]['cust_phone2']) { p2 = `${(this.bill[0]['cust_phone2'].replace(')', '').replace(' ', '').replace('(', '').replace(/-/g, '')).slice(0, 3)}-${(this.bill[0]['cust_phone2'].replace(')', '').replace(' ', '').replace('(', '').replace(/-/g, '')).slice(3, 6)}-${(this.bill[0]['cust_phone2'].replace(')', '').replace(' ', '').replace('(', '').replace(/-/g, '')).slice(6, 10)}` }
    this.custInfoForm.controls.cust_emailid.setValue(this.bill[0]['cust_emailid'])
    this.custInfoForm.controls.cust_id.setValue(this.bill[0]['cust_id'])
    this.custInfoForm.controls.cust_phone1.setValue(p1)
    this.custInfoForm.controls.cust_phone2.setValue(p2)
    if (this.completeChecker(this.bill[0]['cust_sms_provider'])) { this.custInfoForm.controls.cust_sms_provider.setValue(this.bill[0]['cust_sms_provider']) }
    this.custInfoForm.controls.cust_address2.setValue(this.bill[0]['cust_address2'])
    this.custInfoForm.controls.cust_city.setValue(this.bill[0]['cust_city'])
    this.custInfoForm.controls.cust_state.setValue(this.bill[0]['cust_state'])
    this.custInfoForm.controls.cust_zip.setValue(this.bill[0]['cust_zip'])
    this.username = this.bill[0]['cust_firstname']
    this.lastName = this.bill[0]['cust_lastname']
    this.company_name = this.bill[0]['def_custa_company_name']
  }

  mobileProvider = ['Altel', 'Ameritech', 'ATT Wireless', 'Bell Canada', 'Bellsouth', 'Boost', 'Cellular South', 'CellularOne', 'CellularOne MMS', 'Centennial WireLess', 'Cincinnati Bell', 'Cingular', 'Cricket', 'Edge Wireless', 'Metro PCS', 'Nextel', 'O2', 'Orange', 'Qwest', 'Rogers WireLess', 'Spint PCS', 'Suncom', 'T-Mobile', 'Teleflip', 'Tellus Mobility', 'U.S. Cellular', 'Verizon', 'Virgin Mobile',]
  states = [{ viewValue: 'Alabama', value: 'AL' }, { viewValue: 'Alaska', value: 'AK' }, { viewValue: 'Arizona', value: 'AZ' }, { viewValue: 'Arkansas', value: 'AR' }, { viewValue: 'California', value: 'CA' }, { viewValue: 'Colorado', value: 'CO' }, { viewValue: 'Connecticut', value: 'CT' }, { viewValue: 'Delaware', value: 'DE' }, { viewValue: 'Florida', value: 'FL' }, { viewValue: 'Georgia', value: 'GA' }, { viewValue: 'Hawaii', value: 'HI' }, { viewValue: 'Idaho', value: 'ID' }, { viewValue: 'Illinois', value: 'IL' }, { viewValue: 'Indiana', value: 'IN' }, { viewValue: 'Iowa', value: 'IA' }, { viewValue: 'Kansas', value: 'KS' }, { viewValue: 'Kentucky', value: 'KY' }, { viewValue: 'Louisiana', value: 'LA' }, { viewValue: 'Maine', value: 'ME' }, { viewValue: 'Maryland', value: 'MD' }, { viewValue: 'Massachusetts', value: 'MA' }, { viewValue: 'Michigan', value: 'MI' }, { viewValue: 'Minnesota', value: 'MN' }, { viewValue: 'Mississippi', value: 'MS' }, { viewValue: 'Missouri', value: 'MO' }, { viewValue: 'Montana', value: 'MT' }, { viewValue: 'Nebraska', value: 'NE' }, { viewValue: 'Nevada', value: 'NV' }, { viewValue: 'New Hampshire', value: 'NH' }, { viewValue: 'New Jersey', value: 'NJ' }, { viewValue: 'New Mexico', value: 'NM' }, { viewValue: 'New York', value: 'NY' }, { viewValue: 'North Carolina', value: 'NC' }, { viewValue: 'North Dakota', value: 'ND' }, { viewValue: 'Ohio', value: 'OH' }, { viewValue: 'Oklahoma', value: 'OK' }, { viewValue: 'Oregon', value: 'OR' }, { viewValue: 'Pennsylvania', value: 'PA' }, { viewValue: 'Rhode Island', value: 'RI' }, { viewValue: 'South Carolina', value: 'SC' }, { viewValue: 'South Dakota', value: 'SD' }, { viewValue: 'Tennessee', value: 'TN' }, { viewValue: 'Texas', value: 'TX' }, { viewValue: 'Utah', value: 'UT' }, { viewValue: 'Vermont', value: 'VT' }, { viewValue: 'Virginia', value: 'VA' }, { viewValue: 'Washington', value: 'WA' }, { viewValue: 'West Virginia', value: 'WV' }, { viewValue: 'Wisconsin', value: 'WI' }, { viewValue: 'Wyoming', value: 'WY' }]

  submit() {
    if (this.custInfoForm.valid == true) {
      this.sbmtBtnStatus = true
      this.info.changeCutInfo(this.custInfoForm.value).subscribe(res => {
        if (res['status'] == true) {
          Swal(res['message'], '', 'success').then(() => {
            this.sbmtBtnStatus = false
            this.dialog.close()
            this.router.navigate(['/dashboard'])
          })
        } else {
          this.sbmtBtnStatus = false
        }
      }, err => {
        this.sbmtBtnStatus = false
      })
    }
  }
}

@Component({
  selector: 'loginId',
  templateUrl: './loginId.html',
  styleUrls: ['./changepassword.component.scss']
})
export class LoginIDComponent {
  username
  constructor(public canceled: MatDialogRef<CustomerInfoComponent>, public info: ChangePersonelInfoServices, public snackBar: MatSnackBar) { }
  ngOnInit() { }
  submit() {
    if (this.username != null) {
      let post = {
        username: this.username,
      }
      this.info.changeLoginId(post).subscribe(() => {
      })
    }
  }
  cancel() {
    this.canceled.close()
  }
}

@Component({
  selector: 'delivery-option',
  templateUrl: './delivery-option.html',
  styleUrls: ['./changepassword.component.scss']
})
export class DeliveryOptionComponent {
  constructor(public info: ChangePersonelInfoServices, public dialog: MatDialogRef<CustomerInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  sbmtBtnStatus: boolean = false

  modes = [
    { viewValue: 'Email', value: 'Email' },
    { viewValue: 'Paper Bill', value: 'Paper' },
    { viewValue: 'Print and Email', value: 'PrintEMail' },
    { viewValue: 'Email and Excel', value: 'EmailXls' },
  ]

  submit() {
    this.sbmtBtnStatus = true
    let obj = {
      rec_type: "CHG",
      cust_id: this.data.cust_id,
      cust_bill_mode: this.data.deliveryOption,
    }
    this.info.changeCutInfo(obj).subscribe(res => {
      if (res['status'] == true) {
        Swal(res['message'], '', 'success').then(() => {
          this.sbmtBtnStatus = false
          this.dialog.close()
          this.router.navigate(['/dashboard'])
        })
      } else {
        this.sbmtBtnStatus = false
      }
    }, err => {
      this.sbmtBtnStatus = false
    })
  }
}