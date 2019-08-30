import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { CustomersOnAdminPotal } from '../Customers';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-change-password-from-admin',
  templateUrl: './change-password-from-admin.component.html',
  styleUrls: ['./change-password-from-admin.component.scss']
})
export class ChangePasswordFromAdminComponent implements OnInit {

  constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<CustomersOnAdminPotal>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    Account;
  password = new FormControl('', [Validators.required]);
  new_password = new FormControl('', [Validators.required]);
  hide = true
  submitBtnStatus: boolean = false
  ngOnInit() {
    this.Account = this.data;
  }
  changePass() {
    if (this.password.valid == true) {
      this.submitBtnStatus = true
      // let index = 0
      let obj = {
        // id: this.DeleteAccount['id'].toString(),
        id: this.Account['id'].toString(),
        username:this.Account['username'],
        password: this.password.value,
        new_password:this.new_password.value
      }
      // console.log(obj)
      // console.log(localStorage.getItem('token'))
      this.http.post(environment.url + 'config/customer-reset-password/', obj, {
        'headers': {
          'Authorization': 'JWT' + ' ' + localStorage.getItem('token')
        }
      }).subscribe(res => {
        console.log(res)
        if (res['status'] == true) {
          this.submitBtnStatus = false
          Swal(res['message'], '', 'success')
          this.dialog.closeAll();
        } else if (res['status'] == false) {
          this.submitBtnStatus = false
          Swal(res['message'], '', 'error')
        }
      }, err => {
        this.submitBtnStatus = false
        Swal('Some error occured, please try again', '', 'error')
      })
    }
  }
}
