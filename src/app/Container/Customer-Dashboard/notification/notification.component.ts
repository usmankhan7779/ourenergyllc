import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../Store/Services';
import {Router} from '@angular/router';
// let id;
// let type; 
// let length;
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  
  // constructor(private notifyService: NotificationService,private router:Router) { }
  //  read=[];
  // notifications
  // showSpinner: boolean = true;
  // length;
  // ngOnInit() {
  //   this.notifyService.getNotifcation().subscribe(res => {
  //     id=res["message"][0].id
  //     type=res["message"][0].type
  //     this.notifications = [res["message"][0]]
  //     this.length = this.notifications.length;
  //     if (this.length >= 100) {
  //       this.length == '99+'
  //    }
  //     else {
  //       localStorage.setItem('notification', this.length);
  //     }
  //   })
  // }
  // readNotification() {
  //   let post = {
  //     notification_id:id
  //   }
  //   this.notifyService.ReadNotifcation(post).subscribe(res => {
  //     this.showSpinner = false
  //   })
  //   if(type=="CBA")
  //   {
  //    this.router.navigate(['/dashboard/customerInfo'])
    
  //   }
  // }
  // readNotification () {
  //   let post = {
  //     notification_id: id
  //   }
  //   this.notifyService.ReadNotifcation(post).subscribe(res => {
  //     this.showSpinner = false
  //   })
  // }
}
