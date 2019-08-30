import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { ServerSocketService } from '../header/server-socket.service'
import { Router } from "@angular/router";
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { DahsboardService } from '../../../AdminPortal/Store/dashboard';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public socketSubscription: Subscription
  constructor(private socket: ServerSocketService, private http: HttpClient, private router: Router, private apiService: DahsboardService) { }
  photo;
  customers;
  username;
  get custId(): any {
    return localStorage.getItem('custid');
  }
  pic;
  tabs: any = {};
  customerProfilePic;
  showOfferNotification = false;
  newOffer; offerLength;

  ngOnInit() {
    const stream = this.socket.connect()
    this.socketSubscription = stream.subscribe(response => {
      if (response.Type == 'image') {
        this.photo = response['link']
      } else if (response.Type == 'Offer') {
        this.getOffers()
      }
    })
    this.apiService.tabSetting().subscribe(res => {
      for (const key of res['message']) {
        this.tabs[key.name] = key.status
      }
    })
    this.getOffers()
    this.customers = JSON.parse(localStorage.getItem('login_res'));
    this.username = localStorage.getItem('username');

    this.http.get(environment.url + 'config/getprofilepic/', { 'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` } }).subscribe(data => {
      this.photo = data['message']['thumbnail']
    })
  }

  getOffers() {
    this.http.get(environment.url + 'customers/get-cust-offer', { 'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` } }).subscribe(res => {
      if (res['status'] == true) {
        this.newOffer = res['message']
        this.offerLength = this.newOffer.length;
        this.showOfferNotification = true;
      } else {
        this.showOfferNotification = false;
      }
    })
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  nestedlist = false;

  nestedList() {
    if (this.nestedlist == false) {
      this.nestedlist = true;
    }
    else if (this.nestedlist == true) {
      this.nestedlist = false;
    }
  }

  // EmailNUsername(obj, abc) {
  //   let username = abc
  //   let maxLength = 13;
  //   if (username.length > maxLength) {
  //     return `${username.slice(0, maxLength - 4)} ..`;
  //   }
  //   return username;
  // }
}