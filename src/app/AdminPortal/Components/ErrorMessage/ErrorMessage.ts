import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { MatPaginator, MatTableDataSource } from '@angular/material'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { PaymentDetailsModal } from '../Modals/PaymentModal/PaymentModal'
import { Observable } from 'rxjs'
import Swal from 'sweetalert2'
import "rxjs/Rx"
import "rxjs/add/operator/debounceTime"
import "rxjs/add/operator/distinctUntilChanged"
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'errormessages',
    templateUrl: './ErrorMessage.html',
    styleUrls: ['../../Styles/ErrorMessage.scss', '../../Styles/Table.scss']
})
export class ErrorMessages implements OnInit {
    message
    searchParameter
    dataSource = new MatTableDataSource()
    constructor(public dialog: MatDialog, private http: HttpClient) { }
    displayedColumns = ['a', 'name', 'customerID', 'contact']
    dialogResult = ""
    ErrorMessage

    @ViewChild(MatPaginator) paginator: MatPaginator
    @ViewChild("searchBar") searchBar: ElementRef

    ngOnInit() {
        this.resetPaginator()
        Observable.fromEvent(this.searchBar.nativeElement, "keyup")
            .map((evt: any) => evt.target.value)
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe((text: string) => {
                sessionStorage.setItem("customerQuickSearchParameter", text)
                this.getErrorMessages(text, "" + this.paginator.pageIndex, "" + this.paginator.pageSize)
            })
        this.getErrorMessages("", "" + this.paginator.pageIndex, "" + this.paginator.pageSize)
    }

    getErrorMessages(qs: string, l, u) {
        let url = `${environment.url}config/get-error-messages/`
        if (qs != "" && qs != null && qs != undefined) { url = `${url}quick-search${qs}/` }
        url = `${url}${l}/${u}/`
        this.http.get(url, { 'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` } }).subscribe(res => {
            if (res['status'] == true) {
                this.paginator.length = res['total_count']
                this.ErrorMessage = res['message']
                this.dataSource.data = res['message']
            }
        })
    }

    resetPaginator() {
        this.paginator.pageIndex = 0
        this.paginator.pageSize = 25
    }

    ngAfterViewInit() {
        this.paginator.page.subscribe(() => {
            this.getErrorMessages(this.searchParameter, (this.paginator.pageIndex * this.paginator.pageSize), ((this.paginator.pageIndex + 1) * this.paginator.pageSize))
        })
    }

    editErrorMessage(record) {
        const dialogRef = this.dialog.open(PaymentDetailsModal, {
            width: '500px',
            data: record
        })
        dialogRef.afterClosed().subscribe(result => {
            this.dialogResult = result
            this.ngOnInit()
        })
    }

    addErrorMessageDialog() {
        const dialogRef = this.dialog.open(AddErrorMessageDialog, {
            width: '500px',
        })
        dialogRef.afterClosed().subscribe(result => {
            this.dialogResult = result
            this.ngOnInit()
        })
    }
    refresh() {
        this.ngOnInit();
    }
}

@Component({
    selector: 'add-error-message',
    templateUrl: './add-error-message.html',
    styleUrls: ['./add-error-message.scss']
})
export class AddErrorMessageDialog implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<ErrorMessages>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    isBtnDisabled
    errorMessageForm = new FormGroup({
        functionality: new FormControl('', [Validators.required]),
        msg: new FormControl('', [Validators.required])
    })

    ngOnInit() { }

    submit() {
        this.isBtnDisabled = true
        this.http.post(environment.url + 'config/edit-error-messages/', this.errorMessageForm.value, {
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