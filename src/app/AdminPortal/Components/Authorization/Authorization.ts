import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CustomersService } from '../../Store/customers';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import Swal from 'sweetalert2'

@Component({
    selector: 'authorization',
    templateUrl: './Authorization.html',
    styleUrls: ['../../Styles/Authorization.scss', '../../Styles/Table.scss']
})
export class Authorization implements OnInit {
    dataSource = new MatTableDataSource();
    disabledLinked = [];
    disabledStatus = [];
    disabledRegister = [];
    constructor(public dialog: MatDialog, private http: HttpClient, private customer: CustomersService) { }
    @ViewChild(MatPaginator) paginator: MatPaginator
    displayedColumns = ['name', 'customerID', 'contact', 'active', 'date', 'edit'];
    dialogResult = "";
    ngOnInit() {
        this.http.get(environment.url + 'config/get-un-authorized-customer-ids/0/10/', {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        }).subscribe(res => {
            if (res['status'] == true) {
                this.dataSource.data = res['message']
            }
        })
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }
    openEditCustomerDialog(custData) {
        let editDialog = this.dialog.open(EditCustomerDialog, {
            data: custData
        });
        editDialog.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    openAddCustomerDialog() {
        let addDialog = this.dialog.open(AddCustomerDialog, {});
        addDialog.afterClosed().subscribe(result => {
            this.ngOnInit();
        });
    }
    changeLinked(obj) {
        this.disabledLinked[obj.id] = true;
        let para = { id: obj.id }
        this.http.put(`${environment.url}config/edit-un-authorized-customer-id-linked/`, para, {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        }).subscribe(res => {
            if (res['status'] == true) {
                this.disabledLinked[obj.id] = false;
                this.ngOnInit();
            } else {
                this.disabledLinked[obj.id] = false;
            }
        });
    }
    changeStatus(obj) {
        this.disabledStatus[obj.id] = true;
        let para = { id: obj.id }
        this.http.put(`${environment.url}config/edit-un-authorized-customer-id-status/`, para, {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        }).subscribe(res => {
            if (res['status'] == true) {
                this.disabledLinked[obj.id] = false;
                this.ngOnInit()
            } else {
                this.disabledLinked[obj.id] = false;
            }
        });
    }
    changeRegister(obj) {
        this.disabledRegister[obj.id] = true;
        let para = { id: obj.id }
        this.http.put(`${environment.url}config/edit-un-authorized-customer-id-register/`, para, {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        }).subscribe(res => {
            if (res['status'] == true) {
                this.disabledLinked[obj.id] = false;
                this.ngOnInit()
            } else {
                this.disabledLinked[obj.id] = false;
            }
        });
    }
}

@Component({
    selector: 'edit-customer-dialog',
    templateUrl: './EditCustomerDialog.html',
    styleUrls: ['./EditCustomerDialog.scss']
})
export class EditCustomerDialog implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<Authorization>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    ngOnInit() { }
    btnStatus: boolean = false;
    myEditForm = new FormGroup({
        id: new FormControl(''),
        reason: new FormControl(''),
        linked: new FormControl(''),
        register: new FormControl(''),
        status: new FormControl(''),
    })
    editUser() {
        this.btnStatus = true
        this.myEditForm.controls.linked.setValue(this.data.linked);
        this.myEditForm.controls.reason.setValue(this.data.reason);
        this.myEditForm.controls.register.setValue(this.data.register);
        this.myEditForm.controls.status.setValue(this.data.status);
        this.myEditForm.controls.id.setValue(this.data.id);
        this.http.put(environment.url + 'config/submit-un-authorized-customer-id/', this.myEditForm.value, {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        }).subscribe(res => {
            if (res['status'] == true) {
                Swal(res['message'], '', 'success')
                this.btnStatus = false;
                this.dialog.closeAll();
            } else if (res['status'] == false) {
                Swal(res['message'], '', 'error')
                this.btnStatus = false;
            }
        });
    }
}

@Component({
    selector: 'add-customer-dialog',
    templateUrl: './AddCustomerDialog.html',
    styleUrls: ['./EditCustomerDialog.scss']
})
export class AddCustomerDialog implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<Authorization>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    ngOnInit() { }
    btnStatus: boolean = false;
    myAddForm = new FormGroup({
        cust_id: new FormControl(''),
        reason: new FormControl(''),
        linked: new FormControl(''),
        register: new FormControl(''),
        status: new FormControl(''),
    });
    addCustomer() {
        this.btnStatus = true
        this.http.post(environment.url + 'config/submit-un-authorized-customer-id/', this.myAddForm.value, {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        }).subscribe(res => {
            if (res['status'] == true) {
                Swal(res['message'], '', 'success')
                this.btnStatus = false;
                this.dialog.closeAll();
            } else if (res['status'] == false) {
                Swal(res['message'], '', 'error')
                this.btnStatus = false;
            }
        });
    }
}