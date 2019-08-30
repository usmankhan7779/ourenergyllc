import { Component, OnInit, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditAddressComponent implements OnInit {
  constructor(public thisDialogRef: MatDialogRef<EditAddressComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  streetAddress1 = this.data["message"]["cust_address1"];
  streetAddress2 = this.data["message"]["cust_address2"];
  city = this.data["message"]["cust_city"];
  state = this.data["message"]["cust_state"];
  zip = this.data["message"]["cust_zip"].replace(/(\d{5})(\d{4})/, "$1-$2");
  cust_id

  ZipCodePattern() {
    this.zip = this.zip.replace(/(\d{5})(\d{4})/, "$1-$2");
  }

  ngOnInit() { }

  submit() { }

  onCloseConfirm() {
    this.thisDialogRef.close();
  }
}
