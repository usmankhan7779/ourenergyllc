import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { CustomerService } from '../../Store/Services';
import { Subscription } from 'rxjs/Subscription'
import { ServerSocketService } from '../header/server-socket.service'
import { environment } from '../../../../environments/environment'
import { EditAddressComponent } from '../edit-address/edit-address.component'
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ChangepasswordComponent, ContactInfoComponent, LoginIDComponent, DeliveryOptionComponent } from '../../Customer-Dashboard/changepassword/changepassword.component';
import { EnterPasswordPopup } from '../EnterPassword/EnterPassword'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
  edit = false;
  email;
  BillAddress = [];
  ServiceAddress = [];
  photo;
  pic;
  res;
  request = true;
  showSpinner;
  showSpinnerAddAccount;
  showDisplayAccount;
  error;
  cust_phone;
  cust_phone2;
  displayedColumns = ['name', 'customerID', 'contact', 'unlink'];
  public socketSubscription: Subscription
  constructor(private socket: ServerSocketService, private customerService: CustomerService, private http: HttpClient, public dialog: MatDialog) { }
  deliveryOption
  ContactsInfo() {
    if (this.edit == false) {
      this.edit = true;
    }
    else {
      this.edit = false;
    }
  }
  customers;
  username;
  bills
  custom;
  name;
  zip;
  dataSource
  x;
  unLinkedAccounts
  accountnumber; billingzipcode;
  noLinkedAccounts;
  showAccount
  addaccount
  thumbnailImage
  ngOnInit() {
    window.scrollTo(0, 0)
    this.showAccount = setTimeout(() => {
      this.showDisplayAccount = true;
    }, 2000)
    this.showSpinner = true
    const stream = this.socket.connect()
    this.socketSubscription = stream.subscribe(response => {
      if (response.Type == 'image') {
        this.thumbnailImage = response['link_orig']
        this.photo = response['link']
      }
    })

    this.http.get(environment.url + 'config/getprofilepic/', { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token'), } }).subscribe(data => {
      this.thumbnailImage = data['message']['orig']
      this.photo = data['message']['thumbnail']
    }, err => { })
    this.http.get(environment.url + 'config/displaylinkedaccount', { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token'), } }).subscribe(res => {
      if (res['status'] == true) {
        this.unLinkedAccounts = res['message']
        this.dataSource = res['message']
        this.showDisplayAccount = false
        window.clearTimeout(this.showAccount)
      } else if (res['status'] == false) {
        this.showDisplayAccount = false
        window.clearTimeout(this.showAccount)
        this.noLinkedAccounts = res['message']
        this.dataSource = []
      }
    })
    this.pic = localStorage.getItem("Photo");
    if (this.pic != "") {
      this.photo = localStorage.getItem("Photo");
    }
    else {
      this.photo = "../assets/img/no-img.png";
    }
    this.customerService.getBillAddress().subscribe(response => {
      this.res = response
      if (response["status"] == true) {
        this.request = true
        clearTimeout(this.x)
        this.showSpinner = false
        this.BillAddress = [response["message"]]
        this.zip = response["message"]["cust_zip"].replace(/(\d{5})(\d{4})/, "$1-$2")
      }
    }, err => {
      this.request = false;
      clearTimeout(this.x)
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
    this.customerService.getService().subscribe(response => {
      if (response["status"] == true) {
        this.request = true
        clearTimeout(this.x)
        this.showSpinner = false
        this.ServiceAddress = [response["message"]];
      }
    }, err => {
      this.request = false
      clearTimeout(this.x)
      this.showSpinner = false
      if (err["status"] == 404) {
        this.error = "Not Found"
      }
      if (err["status"] == 400) {
        this.error = "Bad Request"
      }
      if (err["status"] == 0) {
        this.error = "cannot connect to server"
      }
    })
    this.custom = localStorage.getItem('dashboard_response')
    this.bills = JSON.parse(this.custom)
    this.name = this.bills[0]["cust_firstname"] + " " + this.bills[0]["cust_lastname"]
    this.cust_phone2 = this.bills[0]['cust_phone2']
    this.cust_phone = this.bills[0]['cust_phone']
    this.deliveryOption = { value: this.bills[0]['cust_bill_mode'], viewValue: this.bills[0]['cust_bill_mode_desc'] }
    this.customers = JSON.parse(localStorage.getItem('login_res'))
    this.email = this.bills[0]['cust_emailid']

  }
  selectedFile: File = null

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0]
    if (this.selectedFile != null) {
      const fd = new FormData()
      fd.append('file', this.selectedFile, this.selectedFile.name)
      this.http.post(environment.url + 'config/profile/', fd, {
        'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
      }).subscribe(data => {
        localStorage.setItem("Photo", data['link'])
        this.photo = data['link']
      })
    } else { }
  }

  switchAccounts

  UnlinkAccount(index) {
    let token = localStorage.getItem('token')
    this.switchAccounts = this.unLinkedAccounts[index]
    // let su
    let obj = {
      cust_id: this.switchAccounts['cust_id'],
      password: 'Hello123@'
    }
    this.http.put(environment.url + 'config/unlinkedaccount/', obj, {
      'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
    })
  }
  Thumbnail() {
    this.dialog.open(ThumbnailImageComponent, {
      height: '90%',
      data: this.thumbnailImage
    })
  }
  AddNewAccount() {
    this.addaccount = setTimeout(() => {
      this.showDisplayAccount = true;
    }, 2000)
    if (this.accountnumber == null || this.billingzipcode == null) {
      Swal('Please Fill Form Properly', '', 'warning')
      this.showSpinnerAddAccount = false;
      window.clearTimeout(this.addaccount)
    }
    else {
      let obj = {
        cust_id: this.accountnumber.toString(),
        bill_zip: this.billingzipcode.toString()
      }
      this.http.post(environment.url + 'config/add_account/', obj, { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token'), } }).subscribe(res => {
        this.showSpinnerAddAccount = false;
        window.clearTimeout(this.addaccount)
        if (res['status'] == true) {
          Swal(res['message'].toString(), '', 'success')
          this.showAccount = setTimeout(() => {
            this.showDisplayAccount = true
          }, 2000)
          this.http.get(environment.url + 'config/displaylinkedaccount', {
            'headers': {
              'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
            }
          }).subscribe(res => {
            this.unLinkedAccounts = res['message']
            this.dataSource = res['message']
            window.clearTimeout(this.showAccount)
            this.showDisplayAccount = false
          })
        }
        else if (res['status'] == false) {
          this.showSpinnerAddAccount = false
          this.showDisplayAccount = false
          window.clearTimeout(this.addaccount)
          Swal(res['message'].toString(), '', 'warning')
        }
      })
    }
  }
  openDialog() {
    this.dialog.open(EditAddressComponent, {
      width: '500px',
      data: this.res
    });
  }
  changePassDialog() {
    this.dialog.open(ChangepasswordComponent, {
    });
  }
  ContactInfoDialog() {
    this.dialog.open(ContactInfoComponent, {
    });
  }
  LoginIdDialog() {
    this.dialog.open(LoginIDComponent)
  }
  deliveryOptionDialog() {
    this.dialog.open(DeliveryOptionComponent, {
      width: '420px',
      data: { deliveryOption: this.deliveryOption.value, cust_id: this.bills[0]['cust_id'] }
    });
  }

  EnterPasswordPopup(index) {
    let EnterPassword = this.dialog.open(EnterPasswordPopup, {
      data: { password: "" },
    });
    EnterPassword.afterClosed().subscribe(result => {
      let switchAccounts = this.unLinkedAccounts[index];
      let obj = {
        cust_id: switchAccounts['cust_id'],
        password: result['password']
      }
      this.http.put(environment.url + 'config/unlinkedaccount/', obj, {
        'headers': {
          'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
        }
      }).subscribe(res => {
        if (res['status'] == true) {
          Swal('Sub Account has been unlinked sucessfully', '', 'success')
          this.showDisplayAccount = true;
          this.http.get(environment.url + 'config/displaylinkedaccount', { 'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') } }).subscribe(res => {
            this.unLinkedAccounts = res['message']
            this.dataSource = res['message']
            this.showDisplayAccount = false
          })
        }
        else if (res['status'] == false) {
          Swal(res['message'].toString(), '', 'error')
        }
      })
    })
  }

  checkInput(ob) {
    var invalidChars = /[^0-9]/gi
    if (invalidChars.test(ob.value)) {
      ob.value = ob.value.replace(invalidChars, "");
    }
  }
}

@Component({
  selector: 'contact-us',
  templateUrl: './contact.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor(private customerService: CustomerService, private snackbar: MatSnackBar, public dialog: MatDialog) { }
  ngOnInit() {
    window.scrollTo(0, 0)
  }
  subjects = [
    { value: 'Billing Questions', viewValue: 'Billing Questions' },
    { value: 'Contact Customer Service', viewValue: 'Contact Customer Service' },
    { value: 'Services Problems', viewValue: 'Services Problems' }
  ];
  select_a_topic = ""
  question = ""
  submit() {
    let post = {
      select_a_topic: this.select_a_topic,
      question: this.question
    }
    if (this.select_a_topic == "" && this.question == "") {
      Swal('Please Fill the Fields', '', 'warning')
    } else if (this.select_a_topic == "") {
      Swal("You did'nt select topic", '', 'warning')
    } else if (this.question == "") {
      Swal("You did'nt fill question field properly", '', 'warning')
    }
    else {
      this.customerService.contact(post).subscribe(res => {
        if (res['status'] == true) {
          this.select_a_topic = ""
          this.question = ""
          Swal(res['message'], '', 'success')
        } else if (res['status'] == false) {
          this.select_a_topic = ""
          this.question = ""
          Swal(res['message'], '', 'error')
        }
      }, err => {
        this.snackbar.open('Server not responding', 'close', {
          duration: 2000
        })
      })
    }
  }
  billDialogOpen() {
    this.dialog.open(UnderstandBillComponent, {
      data: { bill: true },
      autoFocus: false
    });
  }
  FQADialogOpen() {
    this.dialog.open(UnderstandBillComponent, {
      width: "600px",
      data: { FAQ: true },
      autoFocus: false
    });
  }
}

@Component({
  selector: 'understand-bill',
  templateUrl: './understand-bill.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class UnderstandBillComponent {
  constructor(public canceled: MatDialogRef<CustomerInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, ) { }
  close() {
    this.canceled.close();
  }
  faq = this.data.FAQ;
  bills = this.data.bill
}

@Component({
  selector: 'thumbnailimage',
  templateUrl: './Thumbnail.html',
  styleUrls: ['./customer-info.component.scss']
})
export class ThumbnailImageComponent implements OnInit {
  constructor(public canceled: MatDialogRef<CustomerInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, ) { }
  photo;
  ngOnInit() {
    this.photo = this.data
  }
}