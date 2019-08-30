import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

@Injectable()
export class EnrollmentService {
    private date = new BehaviorSubject<object>(null)
    currentDate = this.date.asObservable()
    constructor(private http: HttpClient) { }
    myHeaders: any = new HttpHeaders().set('content-type', 'application/json')
    // Enrollment API - Enrollment Form
    enrollUser(data) {
        return this.http.post(environment.webenrollurl + 'main/enrollProduct/', data, { headers: this.myHeaders, withCredentials: true })
    }
    dccSubmit(data) {
        return this.http.post(`${environment.webenrollurl}pr/enrollment-with-sys-batch-no/sys-batch-no${data.sys_batch_no}/`, data, { headers: this.myHeaders, withCredentials: true })
    }
    dccFinalSubmit(data) {
        return this.http.post(environment.webenrollurl + 'pr/product-enrollment-submission/', data, { headers: this.myHeaders, withCredentials: true })
    }
    initialSubmit(data) {
        return this.http.post(environment.webenrollurl + 'pr/initial-pr-submission/', data, { headers: this.myHeaders, withCredentials: true })
    }
    changeEnrollmentStatus(para) {
        return this.http.post(environment.webenrollurl + 'pr/sigEditEnroll/', para, { headers: this.myHeaders, withCredentials: true })
    }
    creditCheck(data) {
        return this.http.post(environment.webenrollurl + 'pr/pr-credit-check/', data, { headers: this.myHeaders, withCredentials: true })
    }
    nextSessionStep(data) {
        return this.http.post(environment.webenrollurl + 'enroll/set-step-session/', data, { headers: this.myHeaders, withCredentials: true })
    }
    findBillingAddress(data) {
        return this.http.post(environment.webenrollurl + 'pr/mail_address/', data, { headers: this.myHeaders })
    }
    // enrollProcess(data) {
    //     return this.http.get('http://192.168.29.183:8000/products/get-premise-by-zip-address-city/zip-code' + data)
    // }
    enrollProcess(data) {
        return this.http.post(environment.webenrollurl + 'enroll/get-premise-By-zip-service-city/', data, { headers: this.myHeaders, withCredentials: true })
    }
    requestDate(data) {
        return this.http.post(environment.backendurl + 'products/get-next-enroll-date-from-isigma/', data)
    }
    requestforDate(obj) {
        return this.http.post(environment.webenrollurl + 'main/next-enroll-date/', obj)
    }
    sendPremiseDataForSession(obj) {
        return this.http.post(environment.webenrollurl + 'enroll/set-premise-session-api/', obj, { headers: this.myHeaders, withCredentials: true })
    }
    sendProductDataForSession(obj) {
        return this.http.post(environment.webenrollurl + 'enroll/set-product-session-api/', obj, { headers: this.myHeaders, withCredentials: true })
    }
    savedateDetail(obj) {
        this.date.next(obj)
    }
    Date(datee) {
        if (datee != null && datee != undefined && datee != "") {
            let date = new Date(datee)
            return (String((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()))
        } else return null
    }
    DateDrl(datee) {
        if (datee != null && datee != undefined && datee != "") {
            let date = new Date(datee)
            return (String((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()))
        } else return null
    }
    Date1(datee) {
        if (datee != null && datee != undefined && datee != "") {
            let date = new Date(datee)
            return (String(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()))
        } else return null
    }
}