import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http'
import Swal from 'sweetalert2'
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrls: ['./verification-email.component.scss']
})
export class VerificationEmailComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('')]),
  })

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
  }
  submit() {
    let obj = {
    }
    if (this.form.valid) {

      obj = this.form.value
    }
    this.http.post(environment.url + 'config/resendverification/', obj, {
      'headers': {
        'Content-Type': 'application/json',
      }
    }).subscribe(res => {
      if (res['status'] == true) {
        Swal(res['message'], '', 'success')
        this.dialog.closeAll();
      } else {
        if (res['status'] == false) {
          Swal(res['message'], '', 'error')
        }
      }
    })
  }
}
