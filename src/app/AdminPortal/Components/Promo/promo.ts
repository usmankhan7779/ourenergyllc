import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material'
import { CustomersService } from '../../Store/customers'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { EnrollmentService } from '../../../Container/Store/Services'

@Component({
  selector: 'view-promo',
  templateUrl: './view-promo.html',
  styleUrls: ['./view-promo.scss', '../../Styles/Table.scss']
})
export class ViewPromo implements OnInit, AfterViewInit {
  constructor(private customer: CustomersService, public dialog: MatDialog, private http: HttpClient) { }
  @ViewChild(MatPaginator) paginator: MatPaginator
  displayedColumns = ['a', 'ps', 'pc', 'pn', 'pi', 'st', 'cm', 'sd', 'ed']
  dataSource = new MatTableDataSource()
  isStatusDisabled = []

  ngOnInit() {
    this.getPromo()
  }

  openDocument(path) {
    window.open(path, '_blank')
  }

  getPromo() {
    this.customer.getAllPromo().subscribe(res => {
      this.dataSource.data = res['message']
    })
  }

  openAddPromoDialog() {
    let dialogRef = this.dialog.open(AddPromoDialog)
    dialogRef.afterClosed().subscribe(result => this.getPromo())
  }

  openEditPromoDialog(element) {
    let dialogRef = this.dialog.open(EditPromoDialog, {
      data: element
    })
    dialogRef.afterClosed().subscribe(result => this.getPromo())
  }

  changeStatus(value) {
    this.isStatusDisabled[value.promo_code] = true
    let data = { promo_code: value.promo_code }
    this.http.put(`${environment.url}portal/get-promos-in-list/`, data).subscribe(res => {
      this.isStatusDisabled[value.promo_code] = false
      this.getPromo()
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

@Component({
  selector: 'add-promo-dialog',
  templateUrl: './add-promo-dialog.html',
  styleUrls: ['./add-promo-dialog.scss']
})
export class AddPromoDialog implements OnInit {
  constructor(private customer: CustomersService, private service: EnrollmentService, public thisDialogRef: MatDialogRef<ViewPromo>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }
  isBtnDisabled

  serviceType = [
    { value: "POS", viewValue: "Postpaid" },
    { value: "PRE", viewValue: "Prepaid" },
  ]

  promoForm = new FormGroup({
    promo_code: new FormControl(''),
    market: new FormControl('TX'),
    promo_name: new FormControl(''),
    promo_info: new FormControl(''),
    service_type: new FormControl(''),
    promo_status: new FormControl('A'),
    campaign_name: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl(''),
  })

  ngOnInit() { }

  submit() {
    this.isBtnDisabled = true
    let obj = this.promoForm.value
    obj.start_date = this.service.Date1(this.promoForm.controls.start_date.value)
    obj.end_date = this.service.Date1(this.promoForm.controls.end_date.value)
    if (this.promoForm.controls.promo_status.value == true) { obj.promo_status = "A" } else { obj.promo_status = "I" }
    this.customer.addPromo(obj).subscribe(res => {
      this.isBtnDisabled = false
      this.thisDialogRef.close()
    })
  }

  onNoClick() {
    this.thisDialogRef.close()
  }
}

@Component({
  selector: 'edit-promo-dialog',
  templateUrl: './edit-promo-dialog.html',
  styleUrls: ['./edit-promo-dialog.scss']
})
export class EditPromoDialog implements OnInit {
  constructor(private customer: CustomersService, private service: EnrollmentService, public thisDialogRef: MatDialogRef<ViewPromo>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }
  isBtnDisabled

  serviceType = [
    { value: "POS", viewValue: "Postpaid" },
    { value: "PRE", viewValue: "Prepaid" },
  ]

  promoForm = new FormGroup({
    promo_code: new FormControl(''),
    market: new FormControl('TX'),
    promo_name: new FormControl(''),
    promo_info: new FormControl(''),
    service_type: new FormControl(''),
    promo_status: new FormControl(''),
    campaign_name: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl(''),
  })

  ngOnInit() {
    this.promoForm.controls.promo_code.setValue(this.data.promo_code)
    this.promoForm.controls.promo_name.setValue(this.data.promo_name)
    this.promoForm.controls.promo_info.setValue(this.data.promo_info)
    this.promoForm.controls.service_type.setValue(this.data.service_type)
    if (this.data.promo_status == "A") { this.promoForm.controls.promo_status.setValue(true) } else { this.promoForm.controls.promo_status.setValue(false) }
    this.promoForm.controls.campaign_name.setValue(this.data.campaign_name)
    this.promoForm.controls.start_date.setValue(this.data.start_date)
    this.promoForm.controls.end_date.setValue(this.data.end_date)
  }

  submit() {
    this.isBtnDisabled = true
    let obj = this.promoForm.value
    obj.start_date = this.service.Date1(this.promoForm.controls.start_date.value)
    obj.end_date = this.service.Date1(this.promoForm.controls.end_date.value)
    if (this.promoForm.controls.promo_status.value == true) { obj.promo_status = "A" } else { obj.promo_status = "I" }
    this.customer.editPromo(obj).subscribe(res => {
      this.isBtnDisabled = false
      this.thisDialogRef.close()
    })
  }

  onNoClick() {
    this.thisDialogRef.close()
  }
}