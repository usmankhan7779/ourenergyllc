import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material'
import { BillDetailsService } from '../../Store/Services/bill-details.service';
import { ServerSocketService } from '../header/server-socket.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.scss']
})
export class BillDetailsComponent implements OnInit {
  constructor(private socket: ServerSocketService, private details: BillDetailsService, public dialog: MatDialog) { }
  bills
  showSpinner = true
  billdetails: boolean = false
  public socketSubscription: Subscription

  ngOnInit() {
    window.scrollTo(0, 0)
    this.getdetails()

    const stream = this.socket.connect()
    this.socketSubscription = stream.subscribe(response => {
      if (response.Type == 'Bill' || response.Type == 'Payment') { this.getdetails() }
    })
  }

  ngOnDestroy(): void {
    this.socketSubscription.unsubscribe();
  }

  getdetails() {
    this.details.getService().subscribe(res => {
      this.showSpinner = false
      this.billdetails = true
      this.bills = [res["message"]]
      localStorage.setItem("bill-details", JSON.stringify(res["message"]))
    })
  }
}