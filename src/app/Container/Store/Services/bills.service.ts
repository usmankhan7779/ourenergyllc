import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

@Injectable()
export class BillsService {

  constructor(private http: HttpClient) { }

  getbill() {
    let params = new HttpParams().set('cust_id', localStorage.getItem('custid'))
    return this.http.get(environment.url + 'customers/getbillsummary/', {
      params, 'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
    })
  }
  async downloadBill(post): Promise<Blob> {
    const file = await this.http.post<Blob>(environment.webenrollurl + 'main/sigBill/', post,
      { responseType: 'blob' as 'json' }).toPromise()
    return file
  }
  getpayments() {
    let params = new HttpParams().set('cust_id', localStorage.getItem('custid'))
    return this.http.get(environment.url + 'customers/getpaymentsummary/', {
      params, 'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
    })
  }
  
  getadjustments(para) {
    let params = new HttpParams().set('cust_id', localStorage.getItem('custid'))
    return this.http.get(`${environment.url}customers/get-filter-payadj/${para}/`, {
      params, 'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
    })
  }
  // getadjustments() {
  //   let params = new HttpParams().set('cust_id', localStorage.getItem('custid'))
  //   return this.http.get(environment.url + 'customers/getadjpaymentsummary/', {
  //     params, 'headers': { 'Authorization': `JWT ${localStorage.getItem('token')}` }
  //   })
  // }
}
