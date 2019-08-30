import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

@Injectable()
export class UsageService {
  constructor(private http: HttpClient) { }
  getGraph() {
    return this.http.get(environment.url + 'customers/graphall/', {
      'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
    }).map(result => result)
  }
  getUsageGraph() {
    return this.http.get(environment.url + 'customers/usage/', {
      'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
    }).map(result => result)
  }
}