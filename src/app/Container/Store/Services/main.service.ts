import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable()
export class MainService {
  constructor(private http: HttpClient) { }

  BrokerApp(data) {
    return this.http.post(environment.agenturl + 'config/register/', data);
  }
  GetYourQoute(data) {
    return this.http.post(environment.url + 'customers/getyourquote/', data);
  }
  helpContact(data) {
    return this.http.post(environment.url + 'customers/askourenergy/', data);
  }
  establishContact(data) {
    return this.http.post(environment.url + 'customers/get/', data);
  }
  community(data) {
    return this.http.post(environment.url + 'enroll/communtiy/', data);
  }
}
