import { Component, OnInit, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment'
import Swal from 'sweetalert2'
import { FormControl } from '@angular/forms'

@Component({
    selector: 'editingtree',
    templateUrl: './ViewCustomerDetails.html',
    styleUrls: ['../../../Styles/ViewCustomerDetails.scss']
})
export class ViewCustomerDetails implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<ViewCustomerDetails>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    CustData
    dialogHeading
    dialogbtn
    submitBtnStatus: boolean = false
    hide = true
    password = new FormControl
    ngOnInit() {
        this.CustData = this.data
        if (this.CustData[1] == 'is_verified') {
            if (this.CustData[0].is_verified == true) {
                this.dialogHeading = "Unverify Account " + this.CustData[0].cust_id
                this.dialogbtn = "Unverify"
            } else if (this.CustData[0].is_verified == false) {
                this.dialogHeading = "Verify Account " + this.CustData[0].cust_id
                this.dialogbtn = "Verify"
            }
        }
        else if (this.CustData[1] == 'is_active') {
            if (this.CustData[0].is_active == true) {
                this.dialogHeading = "Deactivate Account " + this.CustData[0].cust_id
                this.dialogbtn = "Deactivate"
            } else if (this.CustData[0].is_active == false) {
                this.dialogHeading = "Activate Account " + this.CustData[0].cust_id
                this.dialogbtn = "Activate"
            }
        }
        else if (this.CustData[1] == 'linked') {
            if (this.CustData[3] == true) {
                this.dialogHeading = "Unlink Account " + this.CustData[0]
                this.dialogbtn = "Unlink"
            } else if (this.CustData[3] == false) {
                this.dialogHeading = "Link Account " + this.CustData[0]
                this.dialogbtn = "Link"
            }
        }
    }
    token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNiwidXNlcm5hbWUiOiJhbmFzQGdtYWlsLmNvbSIsImV4cCI6MTUzODU1NDE0OSwiZW1haWwiOiJhbmFzQGdtYWlsLmNvbSIsIm9yaWdfaWF0IjoxNTM3OTQ5MzQ5fQ.hEyf64YyPhre7cM5xsqYGrGZqNlsX3-mYwAfC_XShO0'
    StatusChange() {
        if (this.password.valid == true) {
            this.submitBtnStatus = true
            if (this.CustData[1] == 'is_verified') {
                if (this.CustData[0].is_verified == true) {
                    let obj = { password: this.password.value, id: this.CustData[0].id.toString(), is_verified: false }
                    this.http.put(environment.url + 'portal/customer-verfication/', obj, {
                        'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
                    }).subscribe(res => {
                        if (res['status'] == true) {
                            this.submitBtnStatus = false
                            Swal(res['message'], '', 'success')
                            this.dialog.closeAll()
                        } else if (res['status'] == false) {
                            this.submitBtnStatus = false
                            Swal(res['message'], '', 'error')
                        }
                    }, err => {
                        this.submitBtnStatus = false
                        Swal('Some error occured, please try again', '', 'error')
                    })
                } else {
                    let obj = { password: this.password.value, id: this.CustData[0].id.toString(), is_verified: true }
                    this.http.put(environment.url + 'portal/customer-verfication/', obj, {
                        'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
                    }).subscribe(res => {
                        if (res['status'] == true) {
                            this.submitBtnStatus = false
                            Swal(res['message'], '', 'success')
                            this.dialog.closeAll()
                        } else if (res['status'] == false) {
                            this.submitBtnStatus = false
                            Swal(res['message'], '', 'error')
                        }
                    }, err => {
                        this.submitBtnStatus = false
                        Swal('Some error occured, please try again', '', 'error')
                    })
                }
            } else if (this.CustData[1] == 'is_active') {
                if (this.CustData[0].is_active == true) {
                    let obj = { password: this.password.value, id: this.CustData[0]['id'], is_active: false }
                    this.http.put(environment.url + 'portal/customer-isactive/', obj, {
                        'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
                    }).subscribe(res => {
                        if (res['status'] == true) {
                            this.submitBtnStatus = false
                            Swal(res['message'], '', 'success')
                            this.dialog.closeAll()
                        } else if (res['status'] == false) {
                            this.submitBtnStatus = false
                            Swal(res['message'], '', 'error')
                        }
                    }, err => {
                        this.submitBtnStatus = false
                        Swal('Some error occured, please try again', '', 'error')
                    })
                } else if (this.CustData[0].is_active == false) {
                    let obj = { password: this.password.value, id: this.CustData[0]['id'], is_active: true }
                    this.http.put(environment.url + 'portal/customer-isactive/', obj, {
                        'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
                    }).subscribe(res => {
                        if (res['status'] == true) {
                            this.submitBtnStatus = false
                            Swal(res['message'], '', 'success')
                            this.dialog.closeAll()
                        } else if (res['status'] == false) {
                            this.submitBtnStatus = false
                            Swal(res['message'], '', 'error')
                        }
                    }, err => {
                        this.submitBtnStatus = false
                        Swal('Some error occured, please try again', '', 'error')
                    })
                }
            } else if (this.CustData[1] == 'linked') {
                let obj = { password: this.password.value, sub_id: this.CustData[0], master_id: this.CustData[2] }
                this.http.post(environment.url + "portal/unlinked-account/", obj, { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') } }).subscribe(res => {
                    if (res['status'] == true) {
                        this.submitBtnStatus = false
                        Swal(res['message'], '', 'success')
                        this.dialog.closeAll()
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
}