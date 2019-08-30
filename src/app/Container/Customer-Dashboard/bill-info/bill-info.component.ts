import { Component, OnInit, Inject, ViewChild } from '@angular/core'
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material'
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material'
import { BillsService } from '../../Store/Services/bills.service'
import { ServerSocketService } from '../header/server-socket.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bill-info',
  templateUrl: './bill-info.component.html',
  styleUrls: ['./bill-info.component.scss']
})
export class BillInfoComponent implements OnInit {
  dataSource = new MatTableDataSource(Bill_data)
  noRecords
  showSpinner: boolean = false
  @ViewChild(MatPaginator) paymentPaginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  displayedColumns = ['pdf', 'bill_no', 'curr_amount', 'due_amount', 'kh_qty', 'bill_date', 'due_date', 'service_start', 'service_end']
  public socketSubscription: Subscription
  res
  x
  error
  disable = false

  constructor(private socket: ServerSocketService, private billService: BillsService, public dialog: MatDialog) { }
  public async downloadBill(element): Promise<void> {
    this.disable = true
    let para = {
      no: element.bill_no,
      date: element.bill_date,
      cust_id: element.cust_id
    }
    this.billService.downloadBill(para).then(res => {
      // console.log(res)
      let blob = new Blob([res], { type: 'application/pdf' })
      let url = window.URL.createObjectURL(blob)
      let dialogRef = this.dialog.open(PDFComponent, {
        width: '780px',
        data: url
      })
      dialogRef.afterClosed()
      this.disable = false

    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paymentPaginator
    this.dataSource.sort = this.sort
  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.getBills()
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.bill_date.toLowerCase().includes(filter) ||
        data.due_date.toLowerCase().includes(filter) ||
        data.kh_qty.toLowerCase().includes(filter) ||
        data.bill_no.toLowerCase().includes(filter) ||
        data.curr_amount.toLowerCase().includes(filter) ||
        data.due_amount.toLowerCase().includes(filter) ||
        data.service_end.toLowerCase().includes(filter) ||
        data.service_start.toLowerCase().includes(filter)
    }

    const stream = this.socket.connect()
    this.socketSubscription = stream.subscribe(response => {
      if (response.Type == 'Bill') { this.getBills() }
    })
  }

  getBills() {
    this.x = setTimeout(() => {
      this.showSpinner = true
    }, 1000)
    this.billService.getbill().subscribe(resp => {
      clearTimeout(this.x)
      this.showSpinner = false
      if (resp["status"] == true) {
        this.dataSource.data = resp["message"]
      } else {
        this.error = `${resp['message']}`
        this.dataSource.data = []
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

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }

  search = null

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase()
    this.search = filterValue
    this.dataSource.filter = filterValue
    if (filterValue == "") {
      this.search = null
    }
    if (this.dataSource.filteredData.length == 0) {
      this.noRecords = "No Records found"
      this.search = null
    }
    else {
      this.noRecords = ""
    }
  }
}

@Component({
  selector: 'pdfcomponent',
  templateUrl: './PDF.html',
  styleUrls: ['./bill-info.component.scss']
})
export class PDFComponent {
  constructor(public dialogRef: MatDialogRef<BillInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    // console.log(this.data)
  }

  PDFDownload() {
    window.open(this.data, '_blank')
  }
}

export class Element {
  bill_no: string
  curr_amount: string
  due_amount: string
  kh_qty: string
  bill_date: string
  due_date: string
  service_start: string
  service_end: string
}
const Bill_data: Element[] = this.dataSource