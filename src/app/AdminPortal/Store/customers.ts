import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable()
export class CustomersService {
    constructor(private http: HttpClient) { }
    token = localStorage.getItem('token')
    completeChecker(value) {
        return value != null && value != undefined && value != "" ? true : false
    }

    // Customer
    getallCustomers(q, l, u, s) {
        return this.http.get(`${environment.url}portal/customerslist${this.completeChecker(q) ? `-quicksearch/${q}` : ``}/${l}/${u}/${this.completeChecker(s) ? `${s}` : ``}`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    getallUnenrolledCustomers(q, l, u) {
        return this.http.get(`${environment.url}portal/unenroll-customerslist${this.completeChecker(q) ? `/${q}` : ``}/${l}/${u}/`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    getSignInLogs(q, l, u) {
        return this.http.get(`${environment.url}portal/login_log_check${this.completeChecker(q) ? `/${q}` : ``}/${l}/${u}/`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }

    //Products
    getAllProducts() {
        return this.http.get(`${environment.url}portal/get-products/`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }

    // Holidays
    getAllHolidays() {
        return this.http.get(`${environment.url}enroll/holidays/`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    createHoliday(data) {
        return this.http.post(`${environment.url}enroll/holidays/`, data, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    editHoliday(data) {
        return this.http.put(`${environment.url}enroll/holidays/`, data, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }

    // TOS
    getAllTos() {
        return this.http.get(`${environment.url}portal/tos-file/`)
    }
    addTos(data) {
        return this.http.post(`${environment.url}portal/tos-file/`, data)
    }
    editTos(data) {
        return this.http.put(`${environment.url}portal/tos-file/`, data)
    }

    // Promo Codes
    getAllPromo() {
        return this.http.get(`${environment.url}portal/get-promos/`)
    }
    addPromo(data) {
        return this.http.post(`${environment.url}portal/get-promos/`, data)
    }
    editPromo(data) {
        return this.http.put(`${environment.url}portal/get-promos/`, data)
    }

    // Sessions
    getAllSessions() {
        return this.http.get(`${environment.webenrollurl}main/get-pr-sessions/`)
    }

    // Link Account
    linkAccount(data) {
        return this.http.post(`${environment.url}config/add_account/`, data, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }

    // Customer Dialog
    getCustomersPortfolioPayment(cust_id) {
        return this.http.get(`${environment.url}portal/getpaymentsummary/${cust_id}/`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    getCustomersPortfolioBill(cust_id) {
        return this.http.get(`${environment.url}portal/getbillsummary/${cust_id}/`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
    getCustomersPortfolioProduct(cust_id) {
        return this.http.get(`${environment.url}portal/getproduct/${cust_id}/`, {
            'headers': { 'Authorization': `JWT ${this.token}` }
        })
    }
}