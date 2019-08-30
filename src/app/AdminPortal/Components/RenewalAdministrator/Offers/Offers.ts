import { Component, OnInit, Inject, ViewChild, QueryList, ViewChildren } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment'
import { MatDialogRef, MatDialog, MatTableDataSource, MatPaginator } from "@angular/material"
import { MAT_DIALOG_DATA } from "@angular/material"
import { FormGroup, Validators, FormControl } from '@angular/forms'
import Swal from 'sweetalert2'
import { EnrollmentService } from '../../../../Container/Store/Services/enroll.service'
import { SelectionModel } from '@angular/cdk/collections'
import { distinctUntilChanged, debounceTime } from 'rxjs/operators'

@Component({
    selector: 'allOffers',
    templateUrl: './Offers.html',
    styleUrls: ['./offer-main.scss', '../../../Styles/Table2.scss']
})
export class AllOffers implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog) { }
    offerStatus
    customerStatus
    @ViewChildren(MatPaginator) offerPaginator = new QueryList<MatPaginator>()
    @ViewChildren(MatPaginator) customerPaginator = new QueryList<MatPaginator>()
    displayedColumns: string[] = ['a', 's', 'n', 'cs', 'dc', 'es', 'ed']
    displayedColumns1: string[] = ['a', 'n', 'cs', 'id', 's', 'dc', 'es']
    offerDataSource = new MatTableDataSource()
    customerDataSource = new MatTableDataSource()
    AllCustomerOfferAssign
    flowStatus = [
        { value: '0', viewValue: 'Reset Contract Renewals' },
        { value: '1', viewValue: 'Staged Eligible Renewals' },
        { value: '10', viewValue: 'Assigned Offerings' },
        { value: '20', viewValue: 'Approved for Distributing the notifications' },
        { value: '30', viewValue: 'Generated Notices' },
        { value: '40', viewValue: 'Sent Renewal notices' },
        { value: '50', viewValue: 'Renewal confirmation Received' },
        { value: '77', viewValue: 'Renewal Exception Caught' },
        { value: '98', viewValue: 'Reviewed and approved the renewals' },
        { value: '100', viewValue: 'Contract Renewed' },
        { value: '103', viewValue: 'Reverted' },
        { value: '105', viewValue: 'Expired' },
        { value: '999', viewValue: 'Info' },
    ]
    ngOnInit() {
        this.getOffers()
        this.getCustomers()
    }
    getCustomers() {
        this.http.get(`${environment.url}renewals/get-all-customer-offer/`).subscribe(res => {
            this.customerStatus = null
            if (res['status'] == true) {
                this.customerDataSource.data = res['message']
            }
            else { this.customerStatus = "No Customers Found :(" }
        }, err => { this.customerStatus = "Could not connect to server, please try again." })
    }
    getOffers() {
        this.http.get(`${environment.url}renewals/get-offers`).subscribe(res => {
            this.offerStatus = null
            if (res['status'] == true) {
                this.offerDataSource.data = res['message']
            }
            else { this.offerStatus = "No Offers Found :(" }
        }, err => { this.offerStatus = "Could not connect to server, please try again." })
    }
    filterByFlowStatus(value) {
        if (value != '' && value != null && value != undefined) {
            let data = {
                flow_status: value
            }
            this.http.post(`${environment.url}renewals/get-all-customer-offer/`, data).subscribe(res => {
                this.customerDataSource.data = res['message']
            })
        }
        else {
            this.getCustomers()
        }
    }
    applyFilterToOffers(filterValue: string) {
        filterValue = filterValue.trim()
        filterValue = filterValue.toLowerCase()
        this.offerDataSource.filter = filterValue
    }
    applyFilterToCustomers(filterValue: string) {
        filterValue = filterValue.trim()
        filterValue = filterValue.toLowerCase()
        this.customerDataSource.filter = filterValue
    }
    openCreateOfferDialog() {
        let dialogRef = this.dialog.open(CreateOffer, {
            autoFocus: false,
        })
        dialogRef.afterClosed().subscribe(res => {
            this.getOffers()
        })
    }
    openDetailsDialog(data) {
        let dialogRef
        let para = { id: data.id }
        this.http.post(`${environment.url}renewals/send-product-info/`, para).subscribe(res => {
            dialogRef = this.dialog.open(ViewDetails, {
                autoFocus: false,
                data: res,
                width: "70%"
            })
            dialogRef.afterClosed().subscribe(res => {
                this.getOffers()
                this.getCustomers()
            })
        })
    }
    openChangeExpiryDialog(data) {
        let dialogRef = this.dialog.open(ChangeExpiryDialog, {
            autoFocus: false,
            data: data
        })
        dialogRef.afterClosed().subscribe(res => {
            this.getOffers()
        })
    }
    openAttachOfferDialog(index) {
        let dialogRef = this.dialog.open(AttachOfferDialog, {
            width: '90%',
            autoFocus: false,
            data: index
        })
        dialogRef.afterClosed().subscribe(res => {
            this.getOffers()
            this.getCustomers()
        })
    }
    openSendOfferDialog(index) {
        let dialogRef = this.dialog.open(SendOfferDialog, {
            autoFocus: false,
            width: '90%',
            data: index
        })
        dialogRef.afterClosed().subscribe(res => {
            this.getOffers()
            this.getCustomers()
        })
    }
    openViewOfferDialog(data) {
        let dialogRef = this.dialog.open(ViewOfferDialog, {
            autoFocus: false,
            data: data,
            width: "80%",
            height: "600px"
        })
        dialogRef.afterClosed().subscribe()
    }
    ngAfterViewInit() {
        this.offerDataSource.paginator = this.offerPaginator.toArray()[0]
        this.customerDataSource.paginator = this.customerPaginator.toArray()[1]
    }
}

@Component({
    selector: 'view-details',
    templateUrl: './view-details.html',
    styleUrls: ['./view-details.scss']
})
export class ViewDetails implements OnInit {
    constructor(public dialogRef: MatDialogRef<AllOffers>, @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) { }
    products
    isBtnDisabled

    ngOnInit() {
        this.products = this.data.products
    }

    attachOffer(prid) {
        this.isBtnDisabled = true
        let data = {
            id: this.data.extra_info.id,
            cus_id: this.data.extra_info.cust_id,
            product_id: prid
        }
        this.http.post(`${environment.url}renewals/accept-customer-offer/`, data).subscribe(res => {
            if (res['status'] == true) {
                Swal(res['message'], '', 'success').then(th => {
                    this.dialogRef.close()
                    this.isBtnDisabled = false
                })
            }
            else {
                Swal(res['message'], '', 'error').then(th => {
                    this.isBtnDisabled = false
                })
            }
        }, err => {
            Swal('Could not connect to server, please try again', '', 'error').then(th => {
                this.isBtnDisabled = false
            })
        })
    }
}

@Component({
    selector: 'createoffer',
    templateUrl: './CreateOffer.html',
    styleUrls: ['./CreateOffer.scss']
})
export class CreateOffer implements OnInit {
    constructor(private http: HttpClient, private date: EnrollmentService, public dialogRef: MatDialogRef<AllOffers>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    currentDate = new Date()
    promoCodes = []
    disabledBtn

    ngOnInit() {
        this.http.get(environment.url + 'portal/get-promos-with-products/').subscribe(res => { this.promoCodes = res['message'] })
    }
    offerForm = new FormGroup({
        expiry_date: new FormControl('', [Validators.required]),
        offer_name: new FormControl('', [Validators.required]),
        promo_id: new FormControl('', [Validators.required]),
        status: new FormControl(true)
    })

    onCloseConfirm() {
        this.dialogRef.close()
    }
    onSubmit() {
        if (this.offerForm.valid == true) {
            this.disabledBtn = true
            let obj = this.offerForm.value
            obj.expiry_date = this.date.Date1(this.offerForm.controls.expiry_date.value)
            this.http.post(environment.url + 'renewals/create-offer/', obj).subscribe(res => {
                if (res['status'] == true) {
                    Swal(res['message'], '', 'success').then(res => {
                        this.disabledBtn = false
                        this.dialogRef.close()
                    })
                } else {
                    Swal(res['message'], '', 'error').then(res => {
                        this.disabledBtn = false
                    })
                }
            }, err => {
                Swal('Could not connect to server, please try again', '', 'error').then(res => {
                    this.disabledBtn = false
                })
            })
        }
    }
}

@Component({
    selector: 'change-expiry-dialog',
    templateUrl: './change-expiry-dialog.html',
    styleUrls: ['./change-expiry-dialog.scss']
})
export class ChangeExpiryDialog implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, private service: EnrollmentService, public dialogRef: MatDialogRef<AllOffers>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    expDate
    isBtnDisabled
    expiryForm = new FormGroup({
        expiry_date: new FormControl(this.data.expiry_date, [Validators.required]),
        id: new FormControl(this.data.id)
    })

    ngOnInit() {
        this.expDate = this.data.expiry_date
    }

    submit() {
        if (this.expiryForm.valid == true) {
            this.isBtnDisabled = true
            let obj = this.expiryForm.value
            obj.expiry_date = this.service.Date1(this.expiryForm.controls.expiry_date.value)
            this.http.put(`${environment.url}renewals/get-offers/`, obj).subscribe(res => {
                if (res['status'] == true) {
                    Swal('Expiry date successfully updated', '', 'success').then((value) => {
                        this.isBtnDisabled = false
                        this.dialogRef.close()
                    })
                }
                else {
                    Swal(res['message'], '', 'error').then((value) => {
                        this.isBtnDisabled = false
                    })
                }
            }, err => {
                Swal('Could not connect to server, please try again', '', 'error').then((value) => {
                    this.isBtnDisabled = false
                })
            })
        }
    }
}

@Component({
    selector: 'attach-offer-dialog',
    templateUrl: './attach-offer-dialog.html',
    styleUrls: ['./attach-offer-dialog.scss']
})
export class AttachOfferDialog implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<AllOffers>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    dataSource = new MatTableDataSource()
    selection = new SelectionModel<any>(true, [])
    @ViewChild(MatPaginator) paginator: MatPaginator

    searchControl = new FormControl('')
    displayedColumns = ['select', 'customerID', 'contractID', 'start_date', 'end_date']
    dialogResult = ""
    cDetails = []
    Customers = []
    enddate = this.datePatternYMD(Date())
    startdate = "12-Feb-1990"
    search: string = ''
    lower: string = '0'
    upper: string = '25'
    Message = "Select Start & End Date"
    showHideMessage = true
    isBtnDisabled
    errorMessage

    completeChecker(value) {
        return value != null && value != undefined && value != "" ? true : false
    }
    datePatternYMD(datee) { // YYYY-MM-DD
        if (this.completeChecker(datee)) {
            let date = new Date(datee)
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        } else return null
    }

    ngOnInit() {
        this.onChanges()
        this.paginator.page.subscribe(() => {
            this.lower = String(this.paginator.pageIndex * this.paginator.pageSize)
            this.upper = String((this.paginator.pageIndex + 1) * this.paginator.pageSize)
            this.onDateChange()
        })
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length
        const numRows = this.dataSource.data.length
        return numSelected === numRows
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row))
    }
    AttachOfferwithCustomer() {
        this.isBtnDisabled = true
        const customers = []
        if (this.selection.selected.length > 0) {
            this.selection.selected.map(res => {
                customers.push({ cust_id: res['cus_id'], offer_id: this.data['id'] })
            })
            this.http.post(`${environment.url}renewals/create-customer-offer/`, customers).subscribe(res => {
                if (res['status'] == true) {
                    Swal('Offer successfully attached.', '', 'success').then((value) => {
                        this.isBtnDisabled = false
                        this.dialogRef.close()
                    })
                }
                else {
                    Swal(res['message'], '', 'error').then((value) => {
                        this.isBtnDisabled = false
                    })
                }
            }, err => {
                Swal('Could not connect to server, please try again', '', 'error').then((value) => {
                    this.isBtnDisabled = false
                })
            })
        }
        else {
            Swal('Warning', 'No customer selected.', 'warning').then((value) => {
                this.isBtnDisabled = false
            })
        }
    }

    setPaginator() {
        this.lower = '0'
        this.upper = '25'
        this.paginator.pageIndex = 0
        this.paginator.pageSize = 25
    }

    onChanges(): void {
        this.searchControl.valueChanges.pipe(debounceTime(1000)).pipe(distinctUntilChanged()).subscribe(val => {
            this.setPaginator()
            this.search = val
            this.onDateChange()
        })
    }

    onDateChange() {
        this.errorMessage = null
        this.showHideMessage = false
        let obj = {
            quick_search: this.search,
            S: this.lower,
            E: this.upper,
            start_date: this.datePatternYMD(this.startdate),
            end_date: this.datePatternYMD(this.enddate),
            offer_id: this.data['id']
        }
        this.http.post(`${environment.url}portal/get-cust-prod-exp-soon/`, obj).subscribe(res => {
            if (res['status']) {
                this.paginator.length = res['total_count']
                this.Customers = res['message']
                this.dataSource.data = this.Customers
            }
            else {
                this.dataSource.data = []
                this.errorMessage = res['message']
            }
        }, err => {
            this.dataSource.data = []
            this.errorMessage = "Could not connect to server, please try again"
        })
    }
}

@Component({
    selector: 'send-offer-dialog',
    templateUrl: './send-offer-dialog.html',
    styleUrls: ['./send-offer-dialog.scss']
})
export class SendOfferDialog implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<AllOffers>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    dataSource = new MatTableDataSource()
    selection = new SelectionModel<any>(true, [])
    @ViewChild(MatPaginator) paginator: MatPaginator

    displayedColumns = ['select', 'customerID', 'contractID', 'start_date', 'end_date']
    dialogResult = ""
    Customers = []
    isBtnDisabled
    ngOnInit() {
        let data = {
            flow_status: "10",
            offer_id: this.data.id
        }
        this.http.post(`${environment.url}renewals/filter-customer-offer/`, data).subscribe(res => {
            if (res['status'] == true) {
                if (res['message'].length >= 1) {
                    this.dataSource.data = res['message']
                }
                else {
                    Swal('Could not find any attached customer', '', 'warning').then((value) => {
                        this.dialogRef.close()
                    })
                }
            }
            else {
                Swal('Could not process the request, please try again', '', 'error').then((value) => {
                    this.dialogRef.close()
                })
            }
        }, err => {
            Swal('Could not connect to server, please try again', '', 'error').then((value) => {
                this.dialogRef.close()
            })
        })
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length
        const numRows = this.dataSource.data.length
        return numSelected === numRows
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row))
    }
    sendOfferwithCustomer() {
        this.isBtnDisabled = true
        const customers = []
        if (this.selection.selected.length > 0) {
            this.selection.selected.map(res => {
                customers.push(res['id'])
            })
            let data = { id: customers }
            this.http.put(`${environment.url}renewals/filter-customer-offer/`, data).subscribe(res => {
                if (res['status'] == true) {
                    Swal('Offer successfully sent', '', 'success').then((value) => {
                        this.isBtnDisabled = false
                        this.dialogRef.close()
                    })
                }
                else {
                    Swal(res['message'], '', 'error').then((value) => {
                        this.isBtnDisabled = false
                    })
                }
            }, err => {
                Swal('Could not connect to server, please try again', '', 'error').then((value) => {
                    this.isBtnDisabled = false
                })
            })
        }
        else {
            Swal('No customer selected', '', 'warning').then((value) => {
                this.isBtnDisabled = false
            })
        }
    }
    applyFilter(event) {
        event = event.trim()
        event = event.toLowerCase()
        this.dataSource.filter = event
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator
    }
}

@Component({
    selector: 'view-offer-dialog',
    templateUrl: './view-offer-dialog.html',
    styleUrls: ['./view-offer-dialog.scss']
})
export class ViewOfferDialog implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<AllOffers>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    ngOnInit() {
        this.getCustomers()
    }

    @ViewChild(MatPaginator) paginator: MatPaginator
    displayedColumns: string[] = ['id', 'n', 'cd', 'fs']
    dataSource = new MatTableDataSource()
    flowStatus = [
        { value: '0', viewValue: 'Reset Contract Renewals' },
        { value: '1', viewValue: 'Staged Eligible Renewals' },
        { value: '10', viewValue: 'Assigned Offerings' },
        { value: '20', viewValue: 'Approved for Distributing the notifications' },
        { value: '30', viewValue: 'Generated Notices' },
        { value: '40', viewValue: 'Sent Renewal notices' },
        { value: '50', viewValue: 'Renewal confirmation Received' },
        { value: '77', viewValue: 'Renewal Exception Caught' },
        { value: '98', viewValue: 'Reviewed and approved the renewals' },
        { value: '100', viewValue: 'Contract Renewed' },
        { value: '103', viewValue: 'Reverted' },
        { value: '105', viewValue: 'Expired' },
        { value: '999', viewValue: 'Info' },
    ]

    getCustomers() {
        let data = {
            id: this.data.id
        }
        this.http.post(`${environment.url}renewals/get-offerd-cust/`, data).subscribe(res => {
            if (res['status'] == true) {
                this.dataSource.data = res['message']
            }
            else {
                Swal('Could not find any customer affiliated to this offer', '', 'warning').then((value) => {
                    this.dialogRef.close()
                })
            }
        }, err => {
            Swal('Could not connect to server, please try again.', '', 'error').then((value) => {
                this.dialogRef.close()
            })
        })
    }

    applyFilter(event) {
        event = event.trim()
        event = event.toLowerCase()
        this.dataSource.filter = event
    }
    filterByFlowStatus(value) {
        if (value != '' && value != null && value != undefined) {
            let data = {
                flow_status: value,
                offer_id: this.data.id
            }
            this.http.post(`${environment.url}renewals/filter-customer-offer/`, data).subscribe(res => {
                this.dataSource.data = res['message']
            })
        }
        else {
            this.getCustomers()
        }
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator
    }
}