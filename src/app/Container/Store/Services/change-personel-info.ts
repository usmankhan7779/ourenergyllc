import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable()
export class ChangePersonelInfoServices {

  constructor(private http: HttpClient) { }

  changePassword(data) {
    return this.http.post(environment.url + 'config/changepassword/', data, {
      'headers': {
        'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
        "Content-Type": "application/json"
      }
    })
  }
  changeContact(data) {
    return this.http.put(environment.url + 'db/editCustinfo/', data, {
      'headers': {
        'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
        "Content-Type": "application/json"
      }
    })
  }
  changeLoginId(data) {
    return this.http.post(environment.url + 'config/editloginid/', data, {
      'headers': {
        'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
        "Content-Type": "application/json"
      }
    })
  }
  changeCutInfo(para) {
    return this.http.put(`${environment.url}customers/edit-Customer-Query/`, para, {
      'headers': {
        'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
        "Content-Type": "application/json"
      }
    })
  }
}
