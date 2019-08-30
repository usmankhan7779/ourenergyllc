import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable()
export class NotificationService {
  constructor(private http: HttpClient) { }

  getNotifcation() {
    return this.http.get(environment.url + 'customers/notification/', {
      'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
    })
  }

  // ReadNotifcation(id) {
  //   return this.http.patch(environment.url + 'customers/readnotification/', id, {
  //     'headers': {
  //       'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
  //     },
  //   })
  // }

  ReadNotifcation(i) {
    return this.http.put(environment.url + 'customers/r-notification/', { id: i.id }, {
      'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
    })
  }

  DeleteNotifcation(i) {
    return this.http.put(environment.url + 'customers/deletenotification/', { id: i.id }, {
      'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
    })
  }
}