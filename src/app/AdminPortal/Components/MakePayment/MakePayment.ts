import { Component, OnInit } from '@angular/core';
import { DahsboardService } from '../../Store/dashboard';

@Component({
    selector: 'makepayment',
    templateUrl: './MakePayment.html',
    styleUrls: ['../../Styles/MakePayment.scss']
})
export class MakePaymentSetting implements OnInit {
    bypass; ua; uaNbypassid; id;
    bypasssarrayvalue
    bypasssarray = [
        { name: 'True', value: true },
        { name: 'False', value: false },
    ]
    uaArrayvalue
    uaArray = [
        { name: 'True', value: true },
        { name: 'False', value: false },
    ]
    SenttoSigma = [
        { name: 'True', value: true },
        { name: 'False', value: false },
    ]
    PayStatusChoice = [
        { name: 'Applied', value: 'A' },
        { name: 'Pending', value: 'P' },
        { name: 'Rejected', value: 'E' },
        { name: 'Cancelled', value: 'C' },
        { name: 'Ready for Payment', value: 'R' }
    ]
    uaProductionValue = false
    SenttoSigmaValue = true
    PayStatusChoiceValue = "A"
    CreatedBY
    DateCreated
    DateModified
    displayedColumns: string[] = ['ua', 'bypass', 'id'];
    dataSource;

    disabledBypass = [];
    disabledUA = [];

    constructor(private info: DahsboardService) { }
    ngOnInit() {
        this.info.GetPaymentSetting().subscribe(res => {
            this.dataSource = res['message']
            res['message'].map(res => (
                this.SenttoSigmaValue = res['send_to_sigma'],
                this.uaProductionValue = res['ua'],
                this.id = res['id'],
                this.CreatedBY = res['created_by'],
                this.DateCreated = res['date_created'],
                this.DateModified = res['date_modified'],
                this.PayStatusChoiceValue = res['pay_status']
            ));
        })
    }
    bypassValue(data, ind) {
        this.disabledBypass[data.id] = true;
        let obj = {
            id: data['id'].toString(),
            ua: data['ua'],
            send_to_sigma: null,
            pay_status: this.PayStatusChoiceValue
        };
        obj.send_to_sigma = data.send_to_sigma == true ? false : true
        this.info.PaymentSetting(obj).subscribe(res => {
            if (res['status'] == true) {
                this.disabledBypass[data.id] = false;
                this.dataSource[ind].send_to_sigma = obj.send_to_sigma
            }
            else {
                this.disabledUA[data.id] = false
                this.dataSource[ind].send_to_sigma = data.send_to_sigma == true ? false : true
            }
        }, () => {
            this.disabledUA[data.id] = false
            this.dataSource[ind].send_to_sigma = data.send_to_sigma == true ? false : true
        })
    }
    uaValue(data, ind) {
        this.disabledUA[data.id] = true;
        let obj = {
            id: data['id'].toString(),
            ua: null,
            send_to_sigma: data['send_to_sigma'],
            pay_status: this.PayStatusChoiceValue
        };
        obj.ua = data.ua == true ? false : true
        this.info.PaymentSetting(obj).subscribe(res => {
            if (res['status'] == true) {
                this.disabledUA[data.id] = false
                this.dataSource[ind].ua = obj.ua
            }
            else {
                this.disabledUA[data.id] = false
                this.dataSource[ind].ua = data.ua == true ? false : true
            }
        }, () => {
            this.disabledUA[data.id] = false
            this.dataSource[ind].ua = data.ua == true ? false : true
        })
    }
    SentToSigma() {
        let obj = {
            id: this.id.toString(),
            ua: this.uaProductionValue,
            send_to_sigma: this.SenttoSigmaValue,
            pay_status: this.PayStatusChoiceValue,
        }
        this.info.PaymentSetting(obj).subscribe(res => {
        })
    }
    abc() {
        this.info.getService().subscribe(res => {
        })
    }
}
