import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { environment } from '../../environments/environment'
import { UserService } from '../always-auth.service'
import { HttpClient } from '@angular/common/http'
import Swal from 'sweetalert2'

@Component({
    selector: 'app-pay-enroll-deposit',
    templateUrl: './pay-enroll-deposit.html',
    styleUrls: ['./pay-enroll-deposit.scss']
})
export class PayEnrollDepositComponent implements OnInit {
    btnDisabled: boolean = false
    response
    years = []
    months = [
        { value: "01", viewValue: "January" },
        { value: "02", viewValue: "February" },
        { value: "03", viewValue: "March" },
        { value: "04", viewValue: "April" },
        { value: "05", viewValue: "May" },
        { value: "06", viewValue: "June" },
        { value: "07", viewValue: "July" },
        { value: "08", viewValue: "August" },
        { value: "09", viewValue: "September" },
        { value: "10", viewValue: "October" },
        { value: "11", viewValue: "November" },
        { value: "12", viewValue: "December" },
    ]
    cards = ['Master', 'Discover', 'Visa']
    constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private service: UserService) { }

    sendingData = new FormGroup({
        sched_type: new FormControl('C'),
        sched_pay_amount: new FormControl('300.00'),
        de_card_type: new FormControl('', [Validators.required]),
        de_cc_no: new FormControl('', [Validators.required, Validators.pattern("[0-9-]+")]),
        de_security_code: new FormControl('', [Validators.required, Validators.pattern("[0-9]+")]),
        de_expiry_MM: new FormControl('', [Validators.required]),
        de_expiry_YYYY: new FormControl('', [Validators.required]),
        cust_name: new FormControl(''),
        cust_firstname: new FormControl(''),
        cust_lastname: new FormControl(''),
        use_cust_id: new FormControl(''),
        sys_batch_no: new FormControl(''),
        ua: new FormControl('True'),
        created_by: new FormControl('Internet One Time'),
        created_process: new FormControl('Enroll'),
        cust_pii_2: new FormControl('TX'),
        de_autopay: new FormControl(true),
    })

    ngOnInit() {
        let currentYear = new Date().getFullYear()
        this.years[0] = currentYear
        for (let index = 1; index < 20; index++) {
            this.years[index] = this.years[index - 1] + 1
        }
        window.scrollTo(0, 0)
        this.route.params.subscribe(res => {
            this.http.get(`${environment.webenrollurl}pr/enrollment-with-sys-batch-no/sys-batch-no${res.custid}/`).subscribe(resp => {
                if (resp['status'] == true) {
                    this.response = resp['message']
                    this.sendingData.controls.cust_firstname.setValue(`${resp['message']['cust_firstname']}`)
                    this.sendingData.controls.cust_lastname.setValue(`${resp['message']['cust_lastname']}`)
                    this.sendingData.controls.use_cust_id.setValue(`${resp['message']['use_cust_id']}`)
                    this.sendingData.controls.sys_batch_no.setValue(`${res.custid}`)
                } else { Swal(resp['message'], '', 'warning').then(() => this.router.navigate(['/'])) }
            })
        }, err => { Swal(err, '', 'error').then(() => this.router.navigate(['/'])) })
    }

    cancel() { this.router.navigate(['/']) }

    submit() {
        if (this.sendingData.valid == true) {
            this.btnDisabled = true
            let obj = this.sendingData.value
            obj['de_autopay'] = this.sendingData.controls.de_autopay.value == true ? obj.de_autopay = "Y" : obj.deposit_autopay = "N"
            this.http.post(`${environment.webenrollurl}pr/enrollment-with-sys-batch-no/sys-batch-no${this.sendingData.controls.sys_batch_no.value}/`, obj).subscribe(res => {
                if (res['status'] == true) {
                    Swal(`Deposit submitted successfully`, ``, 'success').then(() => {
                        res['show_message'] = `Your deposit is submitted sucessfully.`
                        res['message_color'] = `black`
                        res['message'] = {}
                        res['message']['use_cust_id'] = this.sendingData.controls.use_cust_id.value
                        this.service.changeData(res)
                        this.router.navigate(['enrollsuccess'])
                    })
                } else {
                    Swal(res['message'], ``, 'warning')
                }
                this.btnDisabled = false
            }, err => {
                Swal(err, '', 'error').then(() => this.btnDisabled = false)
            })
        }
    }
}