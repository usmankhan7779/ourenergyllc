import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable()
export class DahsboardService {
    constructor(private http: HttpClient) { }
    token = localStorage.getItem('token')
    getService() {
        return this.http.get(`${environment.url}portal/get-setting`)
    }
    saveByPassValue(obj) {
        return this.http.put(`${environment.url}portal/update-bypass-by-id/`, obj)
    }
    saveUAValue(obj) {
        return this.http.put(`${environment.url}portal/update-ua-by-id/`, obj)
    }
    GetPaymentSetting() {
        return this.http.get(`${environment.url}portal/get-payment-setting`)
    }
    PaymentSetting(obj) {
        return this.http.put(`${environment.url}portal/update-payment-setting-by-id/`, obj, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    getSessionExpiry() {
        return this.http.get(`${environment.url}config/session-expiry-time/`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    changeSessionExpiry(obj) {
        return this.http.put(`${environment.url}config/session-expiry-time/`, obj, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    tabSetting() {
        return this.http.get(`${environment.url}portal/get-tabs-setting/`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    changeTab(para) {
        return this.http.put(`${environment.url}portal/update-tabs-setting/`, para, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    mobTabSetting() {
        return this.http.get(`${environment.url}portal/get-mob-tabs-setting/`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    changeMobTab(para) {
        return this.http.put(`${environment.url}portal/update-mob-tabs-setting/`, para, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    getTdspRates() {
        return this.http.get(`${environment.url}portal/tdsp-rates/`)
    }
    editTdspRates(para) {
        return this.http.post(`${environment.url}portal/tdsp-rates/`, para, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    getM2m() {
        return this.http.get(`${environment.url}portal/our-m2m-plan/`)
    }
    addM2m(para) {
        return this.http.post(`${environment.url}portal/our-m2m-plan/`, para, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    editM2m(para) {
        return this.http.put(`${environment.url}portal/our-m2m-plan/`, para, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    moveM2m(para) {
        return this.http.put(`${environment.url}portal/position-our-m2m-plan/`, para, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    getAdvPrice() {
        return this.http.get(`${environment.url}portal/advantage-prime/`)
    }
    addAdvPrice(para) {
        return this.http.post(`${environment.url}portal/advantage-prime/`, para, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    editAdvPrice(para) {
        return this.http.put(`${environment.url}portal/advantage-prime/`, para, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    getAnalytics() {
        return this.http.get(`${environment.url}portal/count-for-signup/`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    moveAdv(para) {
        return this.http.put(`${environment.url}portal/position-advantage-prime/`, para, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
}