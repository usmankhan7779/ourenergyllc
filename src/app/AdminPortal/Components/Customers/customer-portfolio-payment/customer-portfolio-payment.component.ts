import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { CustomersService } from '../../../Store';

@Component({
  selector: 'app-customer-portfolio-payment',
  templateUrl: './customer-portfolio-payment.component.html',
  styleUrls: ['./customer-portfolio-payment.component.scss','../../../Styles/Table.scss']
})
export class CustomerPortfolioPaymentComponent implements OnInit {

  @ViewChild(MatPaginator) paginatorPayment: MatPaginator

  paymentDisplayedColumns: string[] = ['4', '5','7', '8', '9', '10', '11', '12'];
  paymentDataSource = new MatTableDataSource();
  payment

  constructor(private customer: CustomersService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.customer.getCustomersPortfolioPayment(this.data.cust_id).subscribe(res => {
     this.payment = res['message']
      this.paymentDataSource.data = this.payment
    this.paymentDataSource.paginator = this.paginatorPayment
    })
  }
  paymentFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.paymentDataSource.filter = filterValue;
  }
}
