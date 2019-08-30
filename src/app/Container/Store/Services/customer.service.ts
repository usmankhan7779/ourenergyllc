import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) { }

  getdata() {
    return this.http.get(environment.url + 'customers/dbcustdata/', {
      'headers': {
        'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
      }
    });
  }
  //meter info seperate service on dashboard page
  getMeterInfo() {
    return this.http.get(environment.url + 'customers/meterinfo/', {
      'headers': {
        'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
      }
    });
  }
  getBillAddress() {
    return this.http.get(environment.url + 'customers/getbilladd/', {
      'headers': {
        'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
      }
    });
  }
  getService() {
    return this.http.get(environment.url + 'customers/getserviceadd/', {
      'headers': {
        'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
      }
    });
  }
  contact(data) {
    return this.http.post(environment.url + 'enroll/contactus/', data, {
      'headers': { 
        'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
      }
    })
  }
}