import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { MatDialogRef, MatDialog, MatTableDataSource } from "@angular/material";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'crontasks',
    templateUrl: './CronTasks.html',
    styleUrls: ['../../Styles/Customers.scss']
})
export class CronTasks implements OnInit {
    constructor(private http: HttpClient, public dialog: MatDialog) { }

    displayedColumns: string[] = ['n', 'dc', 'es', 'cs', 's'];
    dataSource = new MatTableDataSource();

    ngOnInit() {
        this.http.get(`${environment.url}portal/jobs_list/`).subscribe(res => {
            this.dataSource.data = res['message']
        });
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    ChangeStatus(obj) {
        let status: boolean;
        if (obj.enabled == true) { status = false }
        else { status = true }
        let para = {
            id: obj.id,
            enabled: status
        }
        this.http.put(`${environment.url}portal/jobs_status_update/`, para).subscribe(res => {
            if (res['status'] == true) {
                this.ngOnInit()
            }
        });
    }

    openChangeScheduleDialog(obj) {
        let dialogRef = this.dialog.open(ChangeScheduleDialog, {
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != undefined && result != null && result != "") {
                if (result.crontab.hour == undefined) { result.crontab.hour = "*" }
                let para = {
                    id: result.id,
                    day_of_month: result.crontab.day_of_month,
                    day_of_week: result.crontab.day_of_week,
                    hour: result.crontab.hour,
                    minute: result.crontab.minute,
                    month_of_year: result.crontab.month_of_year
                }
                this.http.put(`${environment.url}portal/jobs_time_update/`, para).subscribe(res => {
                    this.ngOnInit();
                });
            } else
                this.ngOnInit();
        });
    }
}

@Component({
    selector: 'change-schedule-dialog',
    templateUrl: './ChangeScheduleDialog.component.html',
    styleUrls: ['../../Styles/AdminHeader.scss']
})
export class ChangeScheduleDialog implements OnInit {
    day = [
        { value: "0", viewValue: "Sunday" },
        { value: "1", viewValue: "Monday" },
        { value: "2", viewValue: "Tuesday" },
        { value: "3", viewValue: "Wednesday" },
        { value: "4", viewValue: "Thursday" },
        { value: "5", viewValue: "Friday" },
        { value: "6", viewValue: "Saturday" }
    ];
    month = [
        { value: "1", viewValue: "January" },
        { value: "2", viewValue: "Febuary" },
        { value: "3", viewValue: "March" },
        { value: "4", viewValue: "April" },
        { value: "5", viewValue: "May" },
        { value: "6", viewValue: "June" },
        { value: "7", viewValue: "July" },
        { value: "8", viewValue: "August" },
        { value: "9", viewValue: "September" },
        { value: "10", viewValue: "October" },
        { value: "11", viewValue: "November" },
        { value: "12", viewValue: "December" }
    ];
    constructor(public thisDialogRef: MatDialogRef<CronTasks>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    minute = [];
    hour = [];
    date = [];

    ngOnInit() {
        for (let i = 1; i <= 30; i++) { this.date[i - 1] = i; }
        for (let i = 1; i <= 24; i++) { this.hour[i - 1] = i; }
        for (let i = 1; i <= 60; i++) { this.minute[i - 1] = i; }
    }

    onNoClick() {
        this.thisDialogRef.close();
    }
}