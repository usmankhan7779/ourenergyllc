import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable()

export class PaymentService {
    constructor(private http: HttpClient) { }

    makePayment(data) {
        return this.http.post(environment.url + 'customers/makepayment/', data, {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        })
    }
    payUsing() {
        return this.http.get(environment.url + 'customers/pay-using/', {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        })
    }
}
