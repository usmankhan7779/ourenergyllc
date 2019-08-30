import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material'
import { CustomersService } from '../../Store/customers'
import { HttpClient } from '@angular/common/http'
import { EnrollmentService } from '../../../Container/Store/Services'
import Swal from 'sweetalert2'

@Component({
    selector: 'view-holidays',
    templateUrl: './view-holiday.html',
    styleUrls: ['./view-holiday.scss', '../../Styles/Table.scss']
})
export class ViewHolidays implements OnInit, AfterViewInit {
    constructor(private customer: CustomersService, public dialog: MatDialog) { }
    @ViewChild(MatPaginator) paginator: MatPaginator
    displayedColumns = ['e', 'hd', 'hdesc', 'hy', 'cd']
    dataSource = new MatTableDataSource()

    ngOnInit() {
        this.getHolidays()
    }

    getHolidays() {
        this.customer.getAllHolidays().subscribe(res => {
            this.dataSource.data = res['message']
        })
    }

    openAddHolidayDialog() {
        let dialogRef = this.dialog.open(AddHolidayDialog)
        dialogRef.afterClosed().subscribe(result => {
            this.getHolidays()
        })
    }

    openEditHolidayDialog(element) {
        let dialogRef = this.dialog.open(EditHolidayDialog, {
            data: element
        })
        dialogRef.afterClosed().subscribe(result => {
            this.getHolidays()
        })
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim()
        filterValue = filterValue.toLowerCase()
        this.dataSource.filter = filterValue
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator
    }
}

@Component({
    selector: 'add-holiday-dialog',
    templateUrl: './add-holiday.html',
    styleUrls: ['./add-holiday.scss']
})
export class AddHolidayDialog implements OnInit {
    constructor(private http: HttpClient, private customer: CustomersService, private date: EnrollmentService, public dialogRef: MatDialogRef<ViewHolidays>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    disabledBtn

    ngOnInit() { }

    holidayForm = new FormGroup({
        holiday_date: new FormControl('', [Validators.required]),
        holiday_year: new FormControl(''),
        holiday_desc: new FormControl('', [Validators.required]),
    })

    onSubmit() {
        if (this.holidayForm.valid == true) {
            this.disabledBtn = true
            let year = new Date(this.holidayForm.controls.holiday_date.value)
            let obj = this.holidayForm.value
            obj.holiday_date = this.date.Date1(this.holidayForm.controls.holiday_date.value)
            obj.holiday_year = year.getFullYear()
            this.customer.createHoliday(obj).subscribe(res => {
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
                Swal('Could not connect to server, please try again.', '', 'error').then(res => {
                    this.disabledBtn = false
                })
            })
        }
    }
}

@Component({
    selector: 'edit-holiday-dialog',
    templateUrl: './edit-holiday.html',
    styleUrls: ['./edit-holiday.scss']
})
export class EditHolidayDialog implements OnInit {
    constructor(private customer: CustomersService, private date: EnrollmentService, public dialogRef: MatDialogRef<ViewHolidays>, @Inject(MAT_DIALOG_DATA) public data: any) { }
    disabledBtn

    holidayForm = new FormGroup({
        id: new FormControl(''),
        holiday_date: new FormControl(''),
        holiday_year: new FormControl(''),
        holiday_desc: new FormControl(''),
    })

    ngOnInit() {
        this.holidayForm.controls.id.setValue(this.data.id)
        this.holidayForm.controls.holiday_date.setValue(this.data.holiday_date)
        this.holidayForm.controls.holiday_year.setValue(this.data.holiday_year)
        this.holidayForm.controls.holiday_desc.setValue(this.data.holiday_desc)
    }

    onSubmit() {
        if (this.holidayForm.valid == true) {
            this.disabledBtn = true
            let year = new Date(this.holidayForm.controls.holiday_date.value)
            let obj = this.holidayForm.value
            obj.holiday_date = this.date.Date1(this.holidayForm.controls.holiday_date.value)
            obj.holiday_year = year.getFullYear()
            this.customer.editHoliday(obj).subscribe(res => {
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