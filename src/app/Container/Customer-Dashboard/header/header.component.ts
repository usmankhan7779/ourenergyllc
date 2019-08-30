import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { ServerSocketService } from './server-socket.service'
import { Router } from "@angular/router";
import { NotificationService } from '../../Store/Services';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { DahsboardService } from '../../../AdminPortal/Store/dashboard';

let id;
let type;
let length;
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notify;
  notifi = [];
  count;
  public socketSubscription: Subscription
  constructor(private http: HttpClient, private socket: ServerSocketService, private router: Router, private notifyService: NotificationService, private snackbar: MatSnackBar, private apiService: DahsboardService) { }
  customers;
  username;
  tabs: any = {}
  get custId(): any {
    return localStorage.getItem('custid');
  }
  notifications;
  created_date
  noti_array = [];
  showSpinner: boolean = true;
  SwitchAccountSpinner: boolean = true;
  LinkedAccounts = [];
  showNoLinkAcc = false;
  showOfferNotification = false;
  newOffer; offerLength;

  ngOnInit() {
    this.getNoti()
    this.apiService.tabSetting().subscribe(res => {
      for (const key of res['message']) {
        this.tabs[key.name] = key.status
      }
    })
    this.http.get(environment.url + 'customers/get-cust-offer', {
      'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
    }).subscribe(res => {
      if (res['status'] == true) {
        this.newOffer = res['message']
        this.offerLength = this.newOffer.length;
        this.showOfferNotification = true;
      } else {
        this.showOfferNotification = false;
      }
    })
    const stream = this.socket.connect()
    this.socketSubscription = stream.subscribe(response => {
      this.notifi.push(response)
      if (this.notifi.length != 0) {
        this.notify = true;
        this.count = this.notifi.length
      }
      if (response.Type != 'image') {
        this.getNoti()
      }
    })
  }

  unread_count

  getNoti() {
    this.customers = JSON.parse(localStorage.getItem('login_res'))
    this.username = localStorage.getItem('username')
    this.notifyService.getNotifcation().subscribe(res => {
      this.created_date = res["message"][0].created_date
      this.notifications = res["message"]
      this.noti_array.push(this.notifications)
      this.unread_count = parseInt(res['unread_count'])
    })
    this.http.get(environment.url + 'config/displaylinkedaccount', {
      'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
    }).subscribe(res => {
      if (res['status'] == true) {
        this.LinkedAccounts = res['message']
        this.SwitchAccountSpinner = false;
        this.showNoLinkAcc = false;
      }
      else {
        this.SwitchAccountSpinner = false;
        this.showNoLinkAcc = true;
      }
    })
  }

  SwitchAccount(index) {
    let switchAccounts = this.LinkedAccounts[index];
    let obj = {
      cust_id: switchAccounts['cust_id']
    }
    this.http.post(environment.url + 'config/switch-account/', obj, {
      'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
    }).subscribe(res => {
      if (res['status'] == true) {
        localStorage.setItem('token', res['token'])
        this.router.navigate(['/dashboard'])
        location.reload()
      } else { }
    })
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }

  disableOnClick() {
    this.notify = false;
    localStorage.removeItem('notification')
  }

  myFunction = function () {
    window.scrollTo(0, 0)
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  DeleteNoti(i) {
    this.notifyService.DeleteNotifcation(i).subscribe(res => {
      this.getNoti()
    })
  }

  ReadNoti(i) {
    this.notifyService.ReadNotifcation(i).subscribe(res => {
      this.getNoti()
      if (i.type == "Bill") {
        this.router.navigate(['/dashboard/billInfo']);
      } else if (i.type == "Payment") {
        this.router.navigate(['/dashboard/pay']);
      }
    })
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('custid');
    localStorage.removeItem('Photo');
    localStorage.removeItem('dashboard_response');
    localStorage.removeItem('bill-details');
    localStorage.removeItem('login_res');
    this.router.navigate(['/login']);
  }
}