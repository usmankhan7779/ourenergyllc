import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuickPayComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';
declare var $: any;
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

  constructor(public dialog: MatDialog,private http: HttpClient) { }
  show :boolean= false 
  username 
  ngOnInit() { 
    // 
    // this.username = localStorage.getItem('username')
    if (localStorage.getItem('username') !=null)
    {
      this.show = true
      this.username= localStorage.getItem('username')
    }
    else{
      this.show=false
      this.username= "My Account"
    }
    this.setheader()
    window.scroll(0, 0);
    window.onscroll = function () { myFunction() };
    
    var header = document.getElementById("MYHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("box_shadow");
      } else {
        header.classList.remove("box_shadow");
      }
    }
    // 
  }

  dialogResult = "";
  quickPayDialog() {
    let dialogRef = this.dialog.open(QuickPayComponent, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    })
  }
  data :any =[]
  setheader() {
    // if (!localStorage.getItem('zip')) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      //33.0604
      //-96.7333
      this.http.get('https://devbackend.wattcrm.com/portal/public-news-from-ourenergy/' ).subscribe(Res => {
        console.log(Res['message']);
this.data = Res['message'];
      });
      }
  show_sidebar() {
        $('#myTopnav').toggle('slow');
  }
  close_sidebar() {
      $('#myTopnav').hide('slow');
  }
}