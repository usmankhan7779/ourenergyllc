import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

@Injectable()
export class BillDetailsService {

  constructor(private http: HttpClient) { }

  getService() {
    return this.http.get(environment.url + 'customers/getc/', {
      'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
    })
  }
}