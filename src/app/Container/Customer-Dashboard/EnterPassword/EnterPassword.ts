import { Component, OnInit, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog, MatFormFieldModule } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CustomerInfoComponent } from '../customer-info/customer-info.component'

@Component({
    selector: 'EnterPassword',
    templateUrl: './EnterPassword.html',
    styleUrls: ['./EnterPassword.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EnterPasswordPopup implements OnInit {
    constructor(public dialogRef: MatDialogRef<CustomerInfoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
    ngOnInit() {
    }
    password;

    onCloseConfirm() {
        this.dialogRef.close();
    }
}
