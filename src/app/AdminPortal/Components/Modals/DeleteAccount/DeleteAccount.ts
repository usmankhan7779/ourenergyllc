import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import Swal from 'sweetalert2'
import { FormControl, Validators } from '@angular/forms';
import { CustomersOnAdminPotal } from '../../Customers/Customers';

@Component({
    selector: 'deleteaccountmodal',
    templateUrl: './DeleteAccount.html',
    styleUrls: ['../../../Styles/DeleteAccount.scss']
})
export class DeleteAccountModal implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<CustomersOnAdminPotal>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
    DeleteAccount;
    password = new FormControl('', [Validators.required]);
    hide = true
    submitBtnStatus: boolean = false
    ngOnInit() {
        this.DeleteAccount = this.data;
    }
    DeletethisAccount() {
        if (this.password.valid == true) {
            this.submitBtnStatus = true
            let index = 0
            let obj = {
                id: this.DeleteAccount['id'].toString(),
                password: this.password.value
            }
            this.http.post(environment.url + 'config/customer-delete/', obj, {
                'headers': {
                    'Authorization': 'JWT' + ' ' + localStorage.getItem('token')
                }
            }).subscribe(res => {
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
