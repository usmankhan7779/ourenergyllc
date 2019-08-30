import { Component, OnInit, ViewChildren, QueryList } from '@angular/core'
import { MatTableDataSource, MatPaginator } from '@angular/material'
import { BillsService } from '../../Store/Services/bills.service'
import { ServerSocketService } from '../header/server-socket.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  showSpinner
  x
  error
  noRecords

  showSpinner2
  x2
  error2
  noRecords2

  public socketSubscription: Subscription
  @ViewChildren(MatPaginator) paymentPaginator = new QueryList<MatPaginator>()
  @ViewChildren(MatPaginator) adjustmentPaginator = new QueryList<MatPaginator>()
  paymentSource = new MatTableDataSource(Pay_data)
  adjustmentSource = new MatTableDataSource()
  paymentColumns = ['pay_date', 'pay_amount', 'pay_mode_desc', 'cp_bill_proc_date']
  adjustmentColumns = ['cp_pay_date', 'cp_pay_amount', 'cp_bill_proc_date', 'cp_pay_type_desc', 'pay_mode_desc', 'chg_or_tax_desc']
  constructor(private socket: ServerSocketService, private billService: BillsService) { }

  ngAfterViewInit() {
    this.paymentSource.paginator = this.paymentPaginator.toArray()[0]
    this.adjustmentSource.paginator = this.adjustmentPaginator.toArray()[1]
  }

  ngOnInit() {
    this.getPayments()
    this.getAdjustments('adj')
    this.paymentSource.filterPredicate = function (data, filter: string): boolean {
      return data.cp_bill_proc_date.toLowerCase().includes(filter) ||
        data.pay_mode_desc.toLowerCase().includes(filter) ||
        data.pay_date.toLowerCase().includes(filter) ||
        data.pay_status.toLowerCase().includes(filter) ||
        data.pay_amount.toString().includes(filter)
    }
    const stream = this.socket.connect()
    this.socketSubscription = stream.subscribe(response => {      
      if (response.Type == 'Payment') { this.getPayments(); this.getAdjustments('adj') }
    })
  }
  
  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }

  changeOpt(event) {    
    this.getAdjustments(event.value)
  }

  getAdjustments(para) {
    window.scrollTo(0, 0)
    this.x2 = setTimeout(() => {
      this.showSpinner2 = true
    }, 2000)
    this.billService.getadjustments(para).subscribe(resp => {      
      clearTimeout(this.x2)
      this.showSpinner2 = false
      if (resp["status"] == true) {
        this.adjustmentSource.data = resp["message"]
      } else {
        this.error2 = `${resp['message']}`
        this.adjustmentSource.data = []
      }
    }, err => {
      clearTimeout(this.x2)
      this.showSpinner2 = false
      if (err["status"] == 404) {
        this.error2 = "Not Found"
      }
      if (err["status"] == 400) {
        this.error2 = "Bad Request"
      }
      if (err["status"] == 0) {
        this.error2 = "cannot connect to server"
      }
    })
  }

  getPayments() {
    window.scrollTo(0, 0)
    this.x = setTimeout(() => {
      this.showSpinner = true
    }, 2000)
    this.billService.getpayments().subscribe(resp => {
      clearTimeout(this.x)
      this.showSpinner = false
      if (resp["status"] == true) {
        this.paymentSource.data = resp["message"]
      } else {
        this.error = `${resp['message']}`
        this.paymentSource.data = []
      }
    }, err => {
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
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase()
    this.paymentSource.filter = filterValue
    if (this.paymentSource.filteredData.length == 0) {
      this.noRecords = "No Records found"
    }
    else {
      this.noRecords = ""
    }
  }

  applyFilter2(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase()
    this.adjustmentSource.filter = filterValue
    if (this.adjustmentSource.filteredData.length == 0) {
      this.noRecords2 = "No Records found"
    }
    else {
      this.noRecords2 = ""
    }
  }
}
export interface Element {
  pay_date: string,
  pay_amount: number,
  pay_mode_desc: string,
  cp_bill_proc_date: string,
  pay_status: string
}
const Pay_data: Element[] = this.paymentSource
