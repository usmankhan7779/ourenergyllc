import { Component, OnInit } from '@angular/core'
import { UserService } from '../always-auth.service'
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-enrollment-success-page',
  templateUrl: './enrollment-success-page.component.html',
  styleUrls: ['./enrollment-success-page.component.scss']
})
export class EnrollmentSuccessPageComponent implements OnInit {
  response = null;
  isBtnDisabled = true
  constructor(private service: UserService, private router: Router, private http: HttpClient) { }

  ngOnInit() {

    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
    this.service.data.subscribe(res => {
      this.response = res;
    })
    // if(this.response==null){
    //   this.router.navigate(['plan'])
    // }
  }
  verificationEmail() {
    this.isBtnDisabled = false
    let obj = {
      cust_id: this.response['message']['use_cust_id']
    }
    this.http.post(environment.webenrollurl + 'pr/resend-enrollment-email/', obj, {
      'headers': { 'Content-Type': 'application/json' }
    }).subscribe(res => {
      if (res['status'] == true) {
        Swal(res['message'], '', 'success')
        this.isBtnDisabled = true
      } else {
        if (res['status'] == false) {
          Swal(res['message'], '', 'error')
        }
        this.isBtnDisabled = true
      }
    })


  }
}