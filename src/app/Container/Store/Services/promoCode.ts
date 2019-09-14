import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

@Injectable()
export class PromoCodeService {
    constructor(private http: HttpClient) { }
    myHeaders: any = new HttpHeaders().set('content-type', 'application/json')
    searchPlan(para) {
        return this.http.post(environment.webenrollurl + 'enroll/products-with-zipcode/', para, { headers: this.myHeaders, withCredentials: true })
    }

    searchPlanhome_page(para) {
        return this.http.post(environment.webenrollurl + 'enroll/products-with-zipcode-for-home/', para, { headers: this.myHeaders, withCredentials: true })
    }
    searchPlanByTdsp(tdsp) {
        return this.http.post(environment.webenrollurl + 'enroll/multiple-duns-on-zip/', tdsp, { headers: this.myHeaders, withCredentials: true })
    }
    filterPlan(para) {
        return this.http.post(environment.webenrollurl + 'enroll/products-with-zipcode/', para, { headers: this.myHeaders, withCredentials: true })
    }
    uaCheck() {
        return this.http.get(environment.webenrollurl + 'enroll/product-enrollment-check/', { headers: this.myHeaders })
    }
}