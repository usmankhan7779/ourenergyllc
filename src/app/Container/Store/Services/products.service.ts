import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment'

@Injectable()

export class ProductsService {
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get(environment.url + 'customers/getproduct/', {
      'headers': {
        'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
      }
    });
  }
}
