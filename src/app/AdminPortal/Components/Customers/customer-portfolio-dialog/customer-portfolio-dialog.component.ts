import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { CustomersService } from '../../../Store';
import { MatTableDataSource, MAT_DIALOG_DATA, MatPaginator, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-customer-portfolio-dialog',
  templateUrl: './customer-portfolio-dialog.component.html',
  styleUrls: ['./customer-portfolio-dialog.component.scss', '../../../Styles/Table.scss']
})
export class CustomerPortfolioDialogComponent implements OnInit {
  @ViewChild(MatPaginator) paginatorBill: MatPaginator
  billDisplayedColumns: string[] = ['9', '2', '3', '4', '5', '6', '7', '8', '10', '12', '13', '14', '15', '17', '18', '19', '20'];
  billDataSource = new MatTableDataSource();
  // payment
  bill
  product
  constructor(public dialogRef: MatDialogRef<CustomerPortfolioDialogComponent>, private customer: CustomersService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.customer.getCustomersPortfolioBill(this.data.cust_id).subscribe(res => {
      this.bill = res['message']
      this.billDataSource.data = this.bill
    })
    this.customer.getCustomersPortfolioProduct(this.data.cust_id).subscribe(res => {
      this.product = res['message']
    })
    this.billDataSource.paginator = this.paginatorBill
  }
  billFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.billDataSource.filter = filterValue;
  }
  exitDialog() {
    this.dialogRef.close()
  }
}