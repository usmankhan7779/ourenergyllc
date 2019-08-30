import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable()
export class QuickBillService {
    constructor(private http: HttpClient) { }

    quickbill(data) {
        return this.http.post(`${environment.url}customers/quick-pay-my-bill/`, data);
    }
    quickBillFinal(data) {
        return this.http.post(`${environment.url}customers/quick-pay-makepayment/`, data);
    }
}