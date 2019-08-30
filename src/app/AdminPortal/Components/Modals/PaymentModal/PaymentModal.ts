import { Component, OnInit, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment'
import Swal from 'sweetalert2'
import { ErrorMessages } from '../../ErrorMessage/ErrorMessage';

@Component({
    selector: 'paymentmodal',
    templateUrl: './PaymentModal.html',
    styleUrls: ['../../../Styles/PaymentModal.scss']
})
export class PaymentDetailsModal implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<ErrorMessages>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    ErrorMessage
    isBtnDisabled
    message
    ngOnInit() {
        this.ErrorMessage = this.data
    }
    // token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNiwidXNlcm5hbWUiOiJhbmFzQGdtYWlsLmNvbSIsImV4cCI6MTUzODU1NDE0OSwiZW1haWwiOiJhbmFzQGdtYWlsLmNvbSIsIm9yaWdfaWF0IjoxNTM3OTQ5MzQ5fQ.hEyf64YyPhre7cM5xsqYGrGZqNlsX3-mYwAfC_XShO0'
    SetMessage() {
        this.isBtnDisabled = true
        let obj = {
            id: this.ErrorMessage['id'],
            msg: this.message
        }
        this.http.put(environment.url + 'config/edit-error-messages/', obj, {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        }).subscribe(res => {
            if (res['status'] == true) {
                Swal(res['message'], '', 'success').then(t => {
                    this.isBtnDisabled = false
                    this.dialogRef.close()
                })
            }
            else {
                Swal(res['message'], '', 'error').then(t => this.isBtnDisabled = false)
            }
        }, err => Swal('Could not connect to server, please try again', '', 'error').then(res => this.isBtnDisabled = false))
    }
}