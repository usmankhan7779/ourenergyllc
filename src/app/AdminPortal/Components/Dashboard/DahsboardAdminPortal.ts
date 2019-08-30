import { Component, OnInit, Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { DahsboardService } from '../../Store/dashboard'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material'
import { environment } from '../../../../environments/environment'
import Swal from 'sweetalert2'
import { FormControl, Validators, FormGroup } from '@angular/forms'

@Component({
    selector: 'custportal',
    templateUrl: './DahsboardAdminPortal.html',
    styleUrls: ['../../Styles/DahsboardAdminPortal.scss']
})
export class DashboardAdminPortal implements OnInit {
    byPass = []
    disabledBypass = []
    disabledUA = []
    disabledTab = []
    disabledMobTab = []
    bypass
    ua
    uaNbypassid
    id
    bypasssarrayvalue
    bypasssarray = [
        { name: 'True', value: true },
        { name: 'False', value: false },
    ]
    uaArrayvalue
    uaArray = [
        { name: 'True', value: true },
        { name: 'False', value: false },
    ]
    SenttoSigma = [
        { name: 'True', value: true },
        { name: 'False', value: false },
    ]
    PayStatusChoice = [
        { name: 'Applied', value: 'A' },
        { name: 'Pending', value: 'P' },
        { name: 'Rejected', value: 'E' },
        { name: 'Cancelled', value: 'C' },
        { name: 'Ready for Payment', value: 'R' }
    ]
    uaProductionValue = false
    SenttoSigmaValue = true
    PayStatusChoiceValue = "A"
    CreatedBY
    DateCreated
    DateModified
    sessionExpiry
    hh
    mm
    idd
    analytics

    displayedColumns: string[] = ['id', 'date', 'us', 'bypass']
    dataSource
    displayedColumns1: string[] = ['position', 'name', 'edit']
    dataSource1
    tabDisplayedColumns: string[] = ['name', 'status']
    tabDataSource = new MatTableDataSource()
    mobTabDisplayedColumns: string[] = ['name', 'status']
    mobTabDataSource = new MatTableDataSource()

    tdspRatesDataSource = new MatTableDataSource()
    m2mDataSource = new MatTableDataSource()
    advPriceDataSource = new MatTableDataSource()
    advPriceColumns = ['year', 'centerpoint', 'oncor', 'aep_central', 'aep_north', 'tnmp', 'actions']
    m2mColumns = ['month', 'price', 'actions']
    tdspColumns = ['tdsp-name', 'pm', 'pk', 'actions']
    moveBtnStatus = []
    move2BtnStatus = []

    constructor(private info: DahsboardService, public dialog: MatDialog) { }
    ngOnInit() {
        this.getSessionExpiryDetail()
        this.info.getService().subscribe(res => {
            this.dataSource = res['message']
            res['message'].map(res => (
                this.bypasssarrayvalue = res['bypass'],
                this.uaArrayvalue = res['ua'],
                this.uaNbypassid = res['id']
            ))
        })
        this.info.GetPaymentSetting().subscribe(res => {
            res['message'].map(res => (
                this.SenttoSigmaValue = res['send_to_sigma'],
                this.uaProductionValue = res['ua'],
                this.id = res['id'],
                this.CreatedBY = res['created_by'],
                this.DateCreated = res['date_created'],
                this.DateModified = res['date_modified']
            ))
        })
        this.info.tabSetting().subscribe(res => {
            this.tabDataSource.data = res['message']
        })
        this.info.mobTabSetting().subscribe(res => {
            this.mobTabDataSource.data = res['message']
        })
        this.getAdvPricee()
        this.getM2mPlans()
        this.getAnalytics()
        this.getTdspRates()
    }
    getAnalytics() {
        this.info.getAnalytics().subscribe(res => {
            this.analytics = res['message']
        })
    }
    getTdspRates() {
        this.info.getTdspRates().subscribe(res => {
            // console.log(res)
            this.tdspRatesDataSource.data = res['message']
        })
    }
    getM2mPlans() {
        this.info.getM2m().subscribe(res => {
            this.m2mDataSource.data = res['message']
        })
    }
    getAdvPricee() {
        this.info.getAdvPrice().subscribe(res => {
            this.advPriceDataSource.data = res['message']
        })
    }
    getSessionExpiryDetail() {
        this.info.getSessionExpiry().subscribe(res => {
            this.idd = res['message'].id
            this.sessionExpiry = res['message'].session_duration
            this.hh = Math.round(parseInt(this.sessionExpiry) % (3600 * 24) / 3600)
            this.hh = parseInt(this.hh) < 10 ? `0${this.hh}` : this.hh
            this.mm = Math.round(parseInt(this.sessionExpiry) % 3600 / 60)
            this.mm = parseInt(this.mm) < 10 ? `0${this.mm}` : this.mm
        })
    }
    bypassValue(data, ind) {
        this.disabledBypass[data.id] = true
        let obj = { id: data['id'].toString(), bypass: null }
        obj.bypass = data.bypass == true ? false : true
        this.info.saveByPassValue(obj).subscribe(res => {
            if (res['status'] == true) {
                this.disabledBypass[data.id] = false
                this.dataSource[ind].bypass = obj.bypass
            } else {
                this.disabledUA[data.id] = false
                this.dataSource[ind].bypass = data.bypass == true ? false : true
            }
        }, () => {
            this.disabledUA[data.id] = false
            this.dataSource[ind].bypass = data.bypass == true ? false : true
        })
    }
    uaValue(data, ind) {
        this.disabledUA[data.id] = true
        let obj = { id: data['id'].toString(), ua: null }
        obj.ua = data.ua == true ? false : true
        this.info.saveUAValue(obj).subscribe(res => {
            if (res['status'] == true) {
                this.disabledUA[data.id] = false
                this.dataSource[ind].ua = obj.ua
            } else {
                this.disabledUA[data.id] = false
                this.dataSource[ind].ua = data.ua == true ? false : true
            }
        }, () => {
            this.disabledUA[data.id] = false
            this.dataSource[ind].ua = data.ua == true ? false : true
        })
    }
    ByPassFunction(index) {
        let element = this.dataSource[index]
        let obj = {
            id: element['id'].toString(),
            bypass: this.bypasssarrayvalue
        }
    }
    UAFunction(index) {
        let obj = {
            id: this.uaNbypassid.toString(),
            ua: this.uaArrayvalue,
        }
    }
    SentToSigma() {
        let obj = {
            id: this.id.toString(),
            ua: this.uaProductionValue,
            send_to_sigma: this.SenttoSigmaValue,
            pay_status: this.PayStatusChoiceValue,
        }
        this.info.PaymentSetting(obj).subscribe()
    }
    viewImage() {
        const dialogRef = this.dialog.open(ViewImageDialog, {
            autoFocus: false
        })
        dialogRef.afterClosed().subscribe()
    }
    changeImage() {
        const dialogRef = this.dialog.open(ChangeImageDialog, {
            autoFocus: false
        })
        dialogRef.afterClosed().subscribe()
    }
    testEmail() {
        const dialogRef = this.dialog.open(TestEmailDialog, {
            autoFocus: false
        })
        dialogRef.afterClosed().subscribe()
    }
    abc() {
        this.info.getService().subscribe()
    }
    changeSessionExpiry() {
        const dialogRef = this.dialog.open(SessionExpiryDialog, {
            autoFocus: false,
            data: { id: this.idd, hrs: this.hh, mins: this.mm }
        })
        dialogRef.afterClosed().subscribe(res => {
            this.getSessionExpiryDetail()
        })
    }
    changeTabStatus(data, ind) {
        this.disabledTab[data.id] = true
        let obj = { id: data['id'].toString(), status: null }
        obj.status = data.status == true ? false : true
        this.info.changeTab(obj).subscribe(res => {
            if (res['status'] == true) {
                this.disabledTab[data.id] = false
                this.tabDataSource.data[ind]['status'] = obj.status
            } else {
                this.disabledTab[data.id] = false
                this.tabDataSource.data[ind]['status'] = data.status == true ? false : true
            }
        }, () => {
            this.disabledTab[data.id] = false
            this.tabDataSource.data[ind]['status'] = data.status == true ? false : true
        })
    }
    changeMobTabStatus(data, ind) {
        this.disabledMobTab[data.id] = true
        let obj = { id: data['id'].toString(), status: null }
        obj.status = data.status == true ? false : true
        this.info.changeMobTab(obj).subscribe(res => {
            if (res['status'] == true) {
                this.disabledMobTab[data.id] = false
                this.mobTabDataSource.data[ind]['status'] = obj.status
            } else {
                this.disabledMobTab[data.id] = false
                this.mobTabDataSource.data[ind]['status'] = data.status == true ? false : true
            }
        }, () => {
            this.disabledMobTab[data.id] = false
            this.mobTabDataSource.data[ind]['status'] = data.status == true ? false : true
        })
    }
    addM2mPlan() {
        const dialogRef = this.dialog.open(AddM2mDialog, {
            autoFocus: false,
        })
        dialogRef.afterClosed().subscribe(res => {
            this.getM2mPlans()
        })

    }
    editM2mPlan(ele) {
        const dialogRef = this.dialog.open(EditM2mDialog, {
            autoFocus: false,
            data: ele
        })
        dialogRef.afterClosed().subscribe(res => {
            this.getM2mPlans()
        })
    }
    removeM2mPlan(ele) {
        Swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                let obj = {
                    id: ele.id,
                    status: false
                }
                this.info.editM2m(obj).subscribe(res => {
                    if (res['status'] == true) {
                        Swal('Record has been deleted', '', 'success').then(res => {
                            this.getM2mPlans()
                        })
                    }
                    else {
                        Swal(res['message'], '', 'error')
                    }
                }, err => {
                    Swal(err, '', 'error')
                })
            }
        })
    }
    moveM2m(ele, ind, ind2) {
        let obj = {
            id1: this.m2mDataSource.data[ind2]['id'],
            id2: this.m2mDataSource.data[ind]['id'],
            position1: this.m2mDataSource.data[ind2]['position'],
            position2: this.m2mDataSource.data[ind]['position']
        }
        this.moveBtnStatus[ele.id] = true
        this.info.moveM2m(obj).subscribe(res => {
            if (res['status'] == true) {
                this.moveBtnStatus[ele.id] = false
                this.getM2mPlans()
            } else {
                this.moveBtnStatus[ele.id] = false
            }
        }, err => { this.moveBtnStatus[ele.id] = false })
    }

    addAdv() {
        const dialogRef = this.dialog.open(AddAdvDialog, {
            autoFocus: false,
        })
        dialogRef.afterClosed().subscribe(res => {
            this.getAdvPricee()
        })
    }
    editAdv(ele) {
        const dialogRef = this.dialog.open(EditAdvDialog, {
            autoFocus: false,
            data: ele
        })
        dialogRef.afterClosed().subscribe(res => {
            this.getAdvPricee()
        })
    }
    removeAdv(ele) {
        Swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                let obj = {
                    id: ele.id,
                    status: false
                }
                this.info.editAdvPrice(obj).subscribe(res => {
                    if (res['status'] == true) {
                        Swal('Record has been deleted.', '', 'success').then(res => {
                            this.getAdvPricee()
                        })
                    }
                    else {
                        Swal(res['message'], '', 'error')
                    }
                }, err => {
                    Swal(err, '', 'error')
                })
            }
        })
    }
    moveAdv(ele, ind, ind2) {
        let obj = {
            id1: this.advPriceDataSource.data[ind2]['id'],
            id2: this.advPriceDataSource.data[ind]['id'],
            position1: this.advPriceDataSource.data[ind2]['position'],
            position2: this.advPriceDataSource.data[ind]['position']
        }
        this.move2BtnStatus[ele.id] = true
        this.info.moveAdv(obj).subscribe(res => {
            if (res['status'] == true) {
                this.move2BtnStatus[ele.id] = false
                this.getAdvPricee()
            } else {
                this.move2BtnStatus[ele.id] = false
            }
        }, err => { this.move2BtnStatus[ele.id] = false })
    }
    editTdspRate(ele) {
        const dialogRef = this.dialog.open(EditTdspRatesDialog, {
            autoFocus: false,
            data: ele
        })
        dialogRef.afterClosed().subscribe(res => {
            this.getTdspRates()
        })
    }
}

@Component({
    selector: 'view-image-dialog',
    templateUrl: './view-image-dialog.html',
    styleUrls: ['./view-image-dialog.scss']
})
export class ViewImageDialog implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<DashboardAdminPortal>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    response
    ngOnInit() {
        this.http.get(`${environment.url}enroll/enroll-confirm-email/`).subscribe(res => {
            this.response = res['message'][0]
        })
    }
}

@Component({
    selector: 'change-image-dialog',
    templateUrl: './change-image-dialog.html',
    styleUrls: ['./change-image-dialog.scss']
})
export class ChangeImageDialog implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<DashboardAdminPortal>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    emailForm = new FormGroup({
        url: new FormControl('', [Validators.required]),
        // image: new FormControl('')
    })
    ngOnInit() { }

    isBtnDisabled
    fd = new FormData()
    image
    imageFile: File = null
    error

    onImageSelected(event) {
        this.imageFile = <File>event.target.files[0]
        if (this.imageFile != null) {
            this.image = this.imageFile.name
            this.fd.append('path', this.imageFile)
        }
    }

    submit() {
        if (this.emailForm.valid == true) {
            this.isBtnDisabled = true
            this.error = null
            this.fd.append('hyper_link', this.emailForm.controls.url.value)
            this.http.post(`${environment.url}enroll/enroll-confirm-email/`, this.fd).subscribe(res => {
                if (res['status'] == true) {
                    Swal('Successfully updated image & link', '', 'success').then((value) => {
                        this.isBtnDisabled = false
                        this.dialogRef.close()
                    })
                }
                else {
                    this.isBtnDisabled = false
                    this.error = res['message']
                }
            }, err => {
                this.isBtnDisabled = false
                this.error = "Could not connect to server, please try again."
            })
        }
    }
}

@Component({
    selector: 'test-email-dialog',
    templateUrl: './test-email-dialog.html',
    styleUrls: ['./test-email-dialog.scss']
})
export class TestEmailDialog implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<DashboardAdminPortal>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    isBtnDisabled
    error
    emailForm = new FormGroup({
        email_address: new FormControl('', [Validators.required, Validators.email]),
    })

    ngOnInit() { }

    submit() {
        if (this.emailForm.valid == true) {
            this.isBtnDisabled = true
            this.error = null
            this.http.post(`${environment.webenrollurl}enroll/test-welcome-email/`, this.emailForm.value).subscribe(res => {
                if (res['status'] == true) {
                    Swal('Email sent', '', 'success').then((value) => {
                        this.isBtnDisabled = false
                        this.dialogRef.close()
                    })
                }
                else {
                    this.isBtnDisabled = false
                    this.error = res['message']
                }
            }, err => {
                this.isBtnDisabled = false
                this.error = "Could not connect to server, please try again."
            })
        }
    }
}

@Component({
    selector: 'session-expiry-dialog',
    templateUrl: './session-expiry-dialog.html',
    styleUrls: ['./session-expiry-dialog.scss']
})
export class SessionExpiryDialog implements OnInit {
    constructor(private info: DahsboardService, public dialog: MatDialog, public dialogRef: MatDialogRef<DashboardAdminPortal>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    error
    isBtnDisabled
    session = new FormGroup({
        hh: new FormControl('', [Validators.pattern("[0-9]+")]),
        mm: new FormControl('', [Validators.pattern("[0-9]+")])
    })

    ngOnInit() {
        this.session.controls.hh.setValue(this.data.hrs)
        this.session.controls.mm.setValue(this.data.mins)
    }

    submit() {
        if (this.session.valid == true) {
            this.isBtnDisabled = true
            this.error = null
            if (this.session.controls.hh.value == "" || this.session.controls.hh.value == null || this.session.controls.hh.value == undefined) { this.session.controls.hh.setValue("00") }
            if (this.session.controls.mm.value == "" || this.session.controls.mm.value == null || this.session.controls.mm.value == undefined) { this.session.controls.mm.setValue("00") }
            let obj = {
                session_duration: `${(parseInt(this.session.controls.hh.value) * 3600) + (parseInt(this.session.controls.mm.value) * 60)}`,
                id: this.data.id
            }
            this.info.changeSessionExpiry(obj).subscribe(res => {
                if (res['status'] == true) {
                    Swal('New session expiry set', '', 'success').then(() => {
                        this.isBtnDisabled = false
                        this.dialogRef.close()
                    })
                }
                else {
                    this.isBtnDisabled = false
                    this.error = res['message']
                }
            }, err => {
                this.isBtnDisabled = false
                this.error = "Could not connect to server, please try again."
            })
        }
    }
}

@Component({
    templateUrl: './add-adv-prime-dialog.html',
    styleUrls: ['./add-adv-prime-dialog.scss']
})
export class AddAdvDialog {
    constructor(private info: DahsboardService, public dialog: MatDialog, public dialogRef: MatDialogRef<DashboardAdminPortal>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    isBtnDisabled
    advFormGroup = new FormGroup({
        month: new FormControl(''),
        centerpoint: new FormControl(''),
        oncor: new FormControl(''),
        aep_central: new FormControl(''),
        aep_north: new FormControl(''),
        tnmp: new FormControl(''),
    })

    submit() {
        if (this.advFormGroup.valid == true) {
            this.isBtnDisabled = true
            this.info.addAdvPrice(this.advFormGroup.value).subscribe(res => {
                if (res['status'] == true) {
                    Swal('Advantage Prime Record Added', '', 'success').then(() => {
                        this.isBtnDisabled = false
                        this.dialogRef.close()
                    })
                }
                else {
                    Swal(res['message'], '', 'error').then(() => {
                        this.isBtnDisabled = false
                    })
                }
            }, err => {
                Swal(err, '', 'error').then(() => {
                    this.isBtnDisabled = false
                })
            })
        }
    }
}

@Component({
    templateUrl: './add-m2m-prime-dialog.html',
    styleUrls: ['./add-m2m-prime-dialog.scss']
})
export class AddM2mDialog {
    constructor(private info: DahsboardService, public dialog: MatDialog, public dialogRef: MatDialogRef<DashboardAdminPortal>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    isBtnDisabled
    m2mFormGroup = new FormGroup({
        month: new FormControl(''),
        price: new FormControl(''),
    })

    submit() {
        if (this.m2mFormGroup.valid == true) {
            this.isBtnDisabled = true
            this.info.addM2m(this.m2mFormGroup.value).subscribe(res => {
                if (res['status'] == true) {
                    Swal('M2M Record Added', '', 'success').then(() => {
                        this.isBtnDisabled = false
                        this.dialogRef.close()
                    })
                }
                else {
                    Swal(res['message'], '', 'error').then(() => {
                        this.isBtnDisabled = false
                    })
                }
            }, err => {
                Swal(err, '', 'error').then(() => {
                    this.isBtnDisabled = false
                })
            })
        }
    }
}

@Component({
    templateUrl: './edit-adv-prime-dialog.html',
    styleUrls: ['./edit-adv-prime-dialog.scss']
})
export class EditAdvDialog {
    constructor(private info: DahsboardService, public dialog: MatDialog, public dialogRef: MatDialogRef<DashboardAdminPortal>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    isBtnDisabled
    advFormGroup = new FormGroup({
        id: new FormControl(this.data.id),
        month: new FormControl(this.data.month),
        centerpoint: new FormControl(this.data.centerpoint),
        oncor: new FormControl(this.data.oncor),
        aep_central: new FormControl(this.data.aep_central),
        aep_north: new FormControl(this.data.aep_north),
        tnmp: new FormControl(this.data.tnmp),
    })

    submit() {
        if (this.advFormGroup.valid == true) {
            this.isBtnDisabled = true
            this.info.editAdvPrice(this.advFormGroup.value).subscribe(res => {
                if (res['status'] == true) {
                    Swal('Record Edited Successfully', '', 'success').then(() => {
                        this.isBtnDisabled = false
                        this.dialogRef.close()
                    })
                }
                else {
                    Swal(res['message'], '', 'error').then(() => {
                        this.isBtnDisabled = false
                    })
                }
            }, err => {
                Swal(err, '', 'error').then(() => {
                    this.isBtnDisabled = false
                })
            })
        }
    }
}

@Component({
    templateUrl: './edit-m2m-prime-dialog.html',
    styleUrls: ['./edit-m2m-prime-dialog.scss']
})
export class EditM2mDialog {
    constructor(private info: DahsboardService, public dialog: MatDialog, public dialogRef: MatDialogRef<DashboardAdminPortal>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    isBtnDisabled
    m2mFormGroup = new FormGroup({
        id: new FormControl(this.data.id),
        month: new FormControl(this.data.month),
        price: new FormControl(this.data.price)
    })

    submit() {
        if (this.m2mFormGroup.valid == true) {
            this.isBtnDisabled = true
            this.info.editM2m(this.m2mFormGroup.value).subscribe(res => {
                if (res['status'] == true) {
                    Swal('Record Edited Successfully', '', 'success').then(() => {
                        this.isBtnDisabled = false
                        this.dialogRef.close()
                    })
                }
                else {
                    Swal(res['message'], '', 'error').then(() => {
                        this.isBtnDisabled = false
                    })
                }
            }, err => {
                Swal(err, '', 'error').then(() => {
                    this.isBtnDisabled = false
                })
            })
        }
    }
}

@Component({
    templateUrl: './edit-tdsp-rates-dialog.html',
    styleUrls: ['./edit-tdsp-rates-dialog.scss']
})
export class EditTdspRatesDialog {
    constructor(private info: DahsboardService, public dialog: MatDialog, public dialogRef: MatDialogRef<DashboardAdminPortal>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    isBtnDisabled
    tdspRatesFormGroup = new FormGroup({
        id: new FormControl(this.data.id),
        per_month: new FormControl(this.data.per_month),
        per_kwh: new FormControl(this.data.per_kwh)
    })

    submit() {
        if (this.tdspRatesFormGroup.valid == true) {
            this.isBtnDisabled = true
            this.info.editTdspRates(this.tdspRatesFormGroup.value).subscribe(res => {
                if (res['status'] == true) {
                    Swal('Record Edited Successfully', '', 'success').then(() => {
                        this.dialogRef.close()
                    })
                } else {
                    Swal(res['message'], '', 'error')
                }
            }, err => {
                Swal(err, '', 'error')
            }, () => {
                this.isBtnDisabled = false
            })
        }
    }
}