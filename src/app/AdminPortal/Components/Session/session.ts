import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material'
import { CustomersService } from '../../Store/customers'

@Component({
  selector: 'view-sessions',
  templateUrl: './view-sessions.html',
  styleUrls: ['./view-sessions.scss', '../../Styles/Table.scss']
})
export class ViewSessions implements OnInit, AfterViewInit {
  constructor(private customer: CustomersService, public dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator: MatPaginator
  displayedColumns = ['p', 'zc', 'cln', 'cdate', 'pc', 'ep', 'r', 'br', 'ct', 'pid', 'pmd', 'pmc', 'pma', 'pco', 'fs', 'ccd', 'ph1', 'ph2', 'eadd', 'addr', 'custn', 'reqd', 'ety']
  dataSource = new MatTableDataSource()

  ngOnInit() {
    this.getSessions()
  }

  openDocument(path) {
    window.open(path, '_blank')
  }

  getSessions() {
    this.customer.getAllSessions().subscribe(res => {
      this.dataSource.data = res['message']
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim()
    filterValue = filterValue.toLowerCase()
    this.dataSource.filter = filterValue
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }
}