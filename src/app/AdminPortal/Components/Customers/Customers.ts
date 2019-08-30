import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Component, OnInit, ViewChild, Inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { distinctUntilChanged, debounceTime } from 'rxjs/operators'
import { MatPaginator, MatTableDataSource } from '@angular/material'
import { CustomerPortfolioDialogComponent } from './customer-portfolio-dialog/customer-portfolio-dialog.component'
import { ViewCustomerDetails } from '../Modals/ViewCustomerDetails/ViewCustomerDetails'
import { DeleteAccountModal } from '../Modals/DeleteAccount/DeleteAccount'
import { CustomersService } from '../../Store/customers'
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import Swal from 'sweetalert2'
import { ChangePasswordFromAdminComponent } from './change-password-from-admin/change-password-from-admin.component';

@Component({
    selector: 'customersOnAdminPotal',
    templateUrl: './Customers.html',
    styleUrls: ['../../Styles/Customers.scss', '../../Styles/Table2.scss']
})
export class CustomersOnAdminPotal implements OnInit {
    dataSource = new MatTableDataSource()
    constructor(public dialog: MatDialog, private http: HttpClient, private customer: CustomersService) { }

    bankName: Array<string>
    id: string
    ios: number
    and: number
    web: number

    @ViewChild(MatPaginator) paginator: MatPaginator

    displayedColumns = ['actions', 'name', 'u_name', 'customerID', 'contact', 'active', 'signup', 'login', 'date', 'accounts']
    dialogResult = ""
    cDetails = []
    Customers = []
    customersorting = ''
    customersortarray = [{ name: 'CUSTOMERS LIST', value: '' }, { name: 'LAST LOGIN', value: 'lastlogin' }, { name: 'LATEST ENROLL', value: 'latest' }, { name: 'UN-VERIFIED', value: 'unverified' }, { name: 'VERIFIED', value: 'verified' }]
    customersortarray2 = [{ name: 'UN-VERIFIED', value: 'unverified' }, { name: 'VERIFIED', value: 'verified' }]
    customersorting2 = ''

    searchControl = new FormControl('')

    completeChecker(value) {
        return value != null && value != undefined && value != "" ? true : false
    }
    ngOnInit() {
        this.custCount()
        this.customersorting = 'latest'
        this.customersorting2 = ''
        this.onChanges()
        this.setPaginator()
        this.getEnrolledCust(``, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize, `${this.customersorting}${this.completeChecker(this.customersorting2) ? `/${this.customersorting2}` : ``}`)
        this.paginator.page.subscribe(() => {
            this.getEnrolledCust(``, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize, `${this.customersorting}${this.completeChecker(this.customersorting2) ? `/${this.customersorting2}` : ``}`)
        })
    }
    custCount() {
        this.http.get(environment.url + "portal/count-for-device-signup/").subscribe(res => {
            console.log(res)
            this.ios = res['message']['Ios']
            this.and = res['message']['Andriod']
            this.web = res['message']['Web']
        })
    }
    setPaginator() {
        this.paginator.pageIndex = 0
        this.paginator.pageSize = 25
    }
    searchValue
    onChanges(): void {
        this.searchControl.valueChanges.pipe(debounceTime(1000)).pipe(distinctUntilChanged()).subscribe(val => {
            this.searchValue = val
            this.setPaginator()
            this.getEnrolledCust(val, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize, `${this.customersorting}${this.completeChecker(this.customersorting2) ? `/${this.customersorting2}` : ``}`)
        })
    }
    getEnrolledCust(search, lower, upper, sort) {
        // console.log(this.searchValue)
        if (this.searchValue != '') {
            search = this.searchValue
        }
        this.customer.getallCustomers(search, lower, upper, sort).subscribe(res => {
            this.paginator.length = res['total_count']
            if (res['status'] == true) {
                this.dataSource.data = res['message']
            }
        })
    }
    sortCust() {
        this.searchControl.setValue('')
        if (this.customersorting != 'latest') {
            this.customersorting2 = ''
        }
        this.setPaginator()
        this.getEnrolledCust(``, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize, `${this.customersorting}${this.completeChecker(this.customersorting2) ? `/${this.customersorting2}` : ``}`)
    }
    ChangeStatus(element) {
        const dialogRef = this.dialog.open(ViewCustomerDetails, {
            width: '450px',
            data: [element, 'is_verified']
        })
        dialogRef.afterClosed().subscribe(result => {
            this.dialogResult = result
            this.ngOnInit()
        })
    }
    UnlinkAccount(subId, masterId, status) {
        const dialogRef = this.dialog.open(ViewCustomerDetails, {
            width: '450px',
            data: [subId, "linked", masterId, status]
        })
        dialogRef.afterClosed().subscribe(result => {
            this.dialogResult = result
            this.ngOnInit()
        })
    }
    ChangeActiveStatus(element) {
        const dialogRef = this.dialog.open(ViewCustomerDetails, {
            width: '450px',
            data: [element, 'is_active']
        })
        dialogRef.afterClosed().subscribe(result => {
            this.dialogResult = result
            this.ngOnInit()
        })
    }
    DeleteAccount(customer) {
        const dialogRef = this.dialog.open(DeleteAccountModal, {
            width: '450px',
            data: customer
        })
        dialogRef.afterClosed().subscribe(result => {
            this.dialogResult = result
            this.ngOnInit()
        })
    }
    RefreshAccount(element) {
        let obj = { cust_id: "" + element.cust_id }
        this.http.post(environment.url + "portal/refresh-customer/", obj, { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') } }).subscribe(res => {
            if (res['status'] == true) {
                Swal(res['message'], '', 'success')
            }
            else {
                Swal('Could not refresh User, Please try Again', '', 'error')
            }
        }, err => {
            Swal('Could not connect to server, please try Again', '', 'error')
        })
    }
    ResnedEmail(element) {
        let obj = { email: `${element.username}` }
        this.http.post(environment.url + "config/resendverification/", obj, { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') } }).subscribe(res => {
            if (res['status'] == true) {
                Swal(res['message'], '', 'success')
            }
            else {
                Swal(res['message'], '', 'warning')
            }
        }, err => {
            Swal('Could not connect to server, please try again', '', 'error')
        })
    }
    LinkAccount(element) {
        const dialogRef = this.dialog.open(LinkAccountDialog, {
            width: '450px',
            data: element.cust_id
        })
        dialogRef.afterClosed().subscribe(result => {
            this.dialogResult = result
            this.ngOnInit()
        })
    }
    openPortfolio(element) {
        let dialogRef = this.dialog.open(CustomerPortfolioDialogComponent, {
            width: '70%',
            height: '600px',
            data: element
        })
        dialogRef.afterClosed()
    }

    changePassword(element) {
        let dialogRef = this.dialog.open(ChangePasswordFromAdminComponent, {
            // width: '70%',
            // height: '600px',
            data: element
        })
        dialogRef.afterClosed()
    }
    refresh() {
        this.ngOnInit();
    }
}

@Component({
    templateUrl: './link-account.html',
    styleUrls: ['./link-account.scss']
})
export class LinkAccountDialog implements OnInit {
    constructor(public thisDialogRef: MatDialogRef<LinkAccountDialog>, private apiService: CustomersService, @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() { }

    disabledBtn: boolean
    linkAccountForm = new FormGroup({
        master_id: new FormControl(this.data),
        cust_id: new FormControl('', [Validators.required]),
        bill_zip: new FormControl('', [Validators.required]),
    })

    onSubmit() {
        if (this.linkAccountForm.valid == true) {
            this.disabledBtn = true
            this.apiService.linkAccount(this.linkAccountForm.value).subscribe(res => {
                if (res['status'] == true) {
                    Swal(res['message'], '', 'success').then(() => {
                        this.disabledBtn = false
                        this.thisDialogRef.close()
                    })
                }
                else {
                    Swal('Could not link account, Please try again', '', 'error')
                    this.disabledBtn = false
                }
            }, err => { this.disabledBtn = false })
        }
    }
}

@Component({
    selector: 'unenrolled-customers',
    templateUrl: './UnenrolledCustomers.html',
    styleUrls: ['../../Styles/Customers.scss', '../../Styles/Table2.scss']
})
export class UnenrolledCustomer implements OnInit {
    constructor(public dialog: MatDialog, private http: HttpClient, private customer: CustomersService) { }
    @ViewChild(MatPaginator) paginator: MatPaginator
    displayedColumns: string[] = ['actions', 'cust_id', 'name', 'cust_emailid', 'premise_id', 'cust_status_desc', 'cust_phone', 'cust_zip', 'due_amount_unposted', 'last_paid_amount', 'last_bill_no', 'utility_name', 'cust_address2', 'cust_city', 'cust_state'];
    dataSource = new MatTableDataSource();
    searchControl = new FormControl('')
    searchValue
    ngOnInit() {
        this.onChanges()
        this.setPaginator()
        this.getUnenrolledCust(``, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize)
        this.paginator.page.subscribe(() => {
            this.getUnenrolledCust(``, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize)
        })
    }
    setPaginator() {
        this.paginator.pageIndex = 0
        this.paginator.pageSize = 20
    }
    onChanges(): void {
        this.searchControl.valueChanges.pipe(debounceTime(1000)).pipe(distinctUntilChanged()).subscribe(val => {
            this.searchValue = val
            this.setPaginator()
            this.getUnenrolledCust(val, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize)
        })
    }
    getUnenrolledCust(search, lower, upper) {
        if (this.searchValue != '') {
            search = this.searchValue
        }
        this.customer.getallUnenrolledCustomers(search, lower, upper).subscribe(res => {
            this.paginator.length = res['total_count']
            if (res['status'] == true) {
                this.dataSource.data = res['message']
            }
        })
    }
    openPortfolio(element) {
        let dialogRef = this.dialog.open(CustomerPortfolioDialogComponent, {
            width: '70%',
            height: '600px',
            data: element
        })
        dialogRef.afterClosed()
    }
    RefreshAccount(element) {
        let obj = { cust_id: "" + element.cust_id }
        this.http.post(environment.url + "portal/refresh-customer/", obj, { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') } }).subscribe(res => {
            if (res['status'] == true) {
                Swal(res['message'], '', 'success')
            }
            else {
                Swal('Could not refresh User, Please try Again', '', 'error')
            }
        }, err => {
            Swal('Could not connect to server, please try Again', '', 'error')
        })
    }
    refresh() {
        this.ngOnInit();
    }
}

@Component({
    selector: 'sign-in-logs',
    templateUrl: './signinlogs.html',
    styleUrls: ['../../Styles/Customers.scss', '../../Styles/Table2.scss']
})
export class SignInLogsCustomer implements OnInit {
    constructor(public dialog: MatDialog, private http: HttpClient, private customer: CustomersService) { }
    @ViewChild(MatPaginator) paginator: MatPaginator
    displayedColumns: string[] = ['bn', 'e', 'r']
    dataSource = new MatTableDataSource();
    searchControl = new FormControl('')
    searchValue
    ngOnInit() {
        this.onChanges()
        this.setPaginator()
        this.getSignInLogs(``, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize)
        this.paginator.page.subscribe(() => {
            this.getSignInLogs(``, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize)
        })
    }
    setPaginator() {
        this.paginator.pageIndex = 0
        this.paginator.pageSize = 20
    }
    onChanges(): void {
        this.searchControl.valueChanges.pipe(debounceTime(1000)).pipe(distinctUntilChanged()).subscribe(val => {
            this.searchValue = val
            this.setPaginator()
            this.getSignInLogs(val, this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize)
        })
    }
    getSignInLogs(search, lower, upper) {
        if (this.searchValue != '') {
            search = this.searchValue
        }
        this.customer.getSignInLogs(search, lower, upper).subscribe(res => {
            this.paginator.length = res['total_count']
            if (res['status'] == true) {
                this.dataSource.data = res['message']
            }
        })

    }
    refresh() {
        this.ngOnInit();
    }
}