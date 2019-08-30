import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuickPayComponent } from '../login/login.component'

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  myFunction = function () {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  dialogResult = "";
  quickPayDialog() {
    let dialogRef = this.dialog.open(QuickPayComponent, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    })
  }
}