import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Store/Services';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  response = [];
  utility;
  showSpinner;
  x;
  request = true;
  error;
  ErrorResponse;
  newOffer;
  OfferProduct;
  offerLength;
  myHeaders: any = new HttpHeaders().set('content-type', 'application/json')
  constructor(private http: HttpClient, private productService: ProductsService) { }
  ngOnInit() {
    window.scrollTo(0, 0);
    this.x = setTimeout(() => {
      this.showSpinner = true
    }, 2000)
    this.utility = localStorage.getItem('utility')
    this.productService.getProducts()
      .subscribe(response => {
        this.request = true;
        clearTimeout(this.x)
        this.showSpinner = false
        if (response["status"] == true) {
          this.response = [response["message"]];
        }
        else if (response["status"] == false) {
          this.ErrorResponse = response["message"]
        }
      }, err => {
        this.request = false;
        clearTimeout(this.x)
        this.showSpinner = false;
        if (err["status"] == 404) {
          this.error = "Not Found"
        }
        if (err["status"] == 400) {
          this.error = "Bad Request"          
        }
        if (err["status"] == 0) {
          this.error = "cannot connect to server"          
        }
      });
  }
  RenewNow() {
    let obj = {
      offer_id: this.newOffer[0]['offer_id'],
      id: this.newOffer[0]['id'],
    }
    this.http.put(environment.url + 'customers/get-cust-offer/', obj, {
      'headers': {
        'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
      }
    }).subscribe(res => {

    })
  }
}
