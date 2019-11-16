import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material'
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { EnrollmentService } from '../../../Container/Store/Services'
import { CustomersService } from '../../Store/customers'
import { environment } from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'

@Component({
  selector: 'view-products',
  templateUrl: './view-products.html',
  styleUrls: ['./view-products.scss', '../../Styles/Table.scss']
})
export class ViewProducts implements OnInit, AfterViewInit {
  constructor(private customer: CustomersService, private http: HttpClient, public dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator: MatPaginator
  displayedColumns = ['e', 'prid', 'chid', 'n', 'is', 's', 'tdsp', 'promo', 'r', 'br', 't', 'pg', 'sd', 'ed', 'pt', 'st', 'v', 'i']
  dataSource = new MatTableDataSource()
  isMainDisabled = []
  isStatusDisabled = []

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.customer.getAllProducts().subscribe(res => {
      if (res['status'] == true) {
        this.dataSource.data = res['message']
      }
    })
  }

  openEditProductDialog(obj) {
    let dialogRef = this.dialog.open(EditProductDialog, {
      data: obj,
      autoFocus: false,
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getProducts()
    })
  }

  openAddRemoveTdspDialog(obj) {
    let para = { product_id: obj.id }
    this.http.post(`${environment.url}portal/products-edit-info/`, para).subscribe(res => {
      let dialogRef = this.dialog.open(AddRemoveTdspDialog, {
        data: res
      })
      dialogRef.afterClosed().subscribe(result => {
        this.getProducts()
      })
    })
  }

  openAddRemovePromoCodeDialog(obj) {
    let para = { id: obj.id }
    this.http.post(`${environment.url}portal/set-promos-on-product/`, para).subscribe(res => {
      let dialogRef = this.dialog.open(AddRemovePromoCodeDialog, {
        data: res
      })
      dialogRef.afterClosed().subscribe(result => {
        this.getProducts()
      })
    })
  }

  openEditAdditionalInfoDialog(obj) {
    this.http.get(`${environment.url}portal/get-extra-info-products/` + obj.product_id + "/").subscribe(res => {
      let dialogRef = this.dialog.open(ViewProductDialog, {
        autoFocus: false,
        data: res
      })
      dialogRef.afterClosed().subscribe(result => {
        this.getProducts()
      })
    })
  }

  openAddProductDialog() {
    let dialogRef = this.dialog.open(AddNewProductDialog)
    dialogRef.afterClosed().subscribe(result => {
      this.getProducts()
    })
  }

  openAddAdditionalProductDialog() {
    let dialogRef = this.dialog.open(AddAdditionalProduct, {
      autoFocus: false,
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getProducts()
    })
  }

  changeMainStatus(value) {
    this.isMainDisabled[value.id] = true
    let data = { product_id: value.product_id }
    this.http.post(`${environment.url}portal/products-status-onclick/`, data).subscribe(res => {
      this.isMainDisabled[value.id] = false
      this.getProducts()
    })
  }

  changeStatus(value) {
    this.isStatusDisabled[value.id] = true
    let data = { id: value.id }
    this.http.put(`${environment.url}portal/products-status-onclick/`, data).subscribe(res => {
      this.isStatusDisabled[value.id] = false
      this.getProducts()
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
  refresh() {
    this.ngOnInit();
  }
}

@Component({
  selector: 'edit-product-dialog',
  templateUrl: './edit-product.html',
  styleUrls: ['./edit-product.scss']
})
export class EditProductDialog implements OnInit {
  constructor(private service: EnrollmentService, public thisDialogRef: MatDialogRef<ViewProducts>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }
  isDisabled = []
  isBtnDisabled
  status: boolean
  eflDisable
  tosList
  productDetails
  editMode: boolean = false
  Products = ['OPEN PRODUCT', 'PROMO PRODUCT']
  groupplans = [{ value: 'Small Non-Residential', viewValue: 'Small Non-Residential' }, { value: 'Commercial > 10 KVa', viewValue: 'Commercial > 10 KVa' }, { value: 'Residential', viewValue: 'Residential' }, { value: 'Residential > 10 KVa', viewValue: 'Residential > 10 KVa' }, { value: 'AMS Residential Prepay', viewValue: 'AMS Residential Prepay' }]
  // ProductSubTypes = ['Both Enrollment and Renewal', 'Enrollment Only', 'Renewal Only']
  productsubtypes = [{ value: 'Both Enrollment and Renewal', viewValue: 'Both Enrollment and Renewal' }, { value: 'Enrollment Only', viewValue: 'Enrollment Only' }, { value: 'Renewal Only', viewValue: 'Renewal Only' }]
  // ProductsVisibility = ['Internal & Web', 'Deal Capture', 'Internal Only']
  productsvisibility = [{ value: 'Internal & Web', viewValue: 'Internal & Web' }, { value: 'Deal Capture', viewValue: 'Deal Capture' }, { value: 'Internal Only', viewValue: 'Internal Only' }]
  Indexs = ['DNPNOTICEFEE']

  productForm = new FormGroup({

    other_key_term_and_ques_text: new FormControl(''),
    average_renewals_content: new FormControl(''),
    fees_may_be_charged_text: new FormControl(''),
    display_termination_fee: new FormControl(''),
    electricity_price_text: new FormControl(''),
    product_visibility: new FormControl(''),
    renewals_content: new FormControl(''),
    product_subtype: new FormControl(''),
    PassthruStatus: new FormControl(''),
    energy_charge: new FormControl(''),
    product_type: new FormControl(''),
    product_name: new FormControl(''),
    display_info: new FormControl(''),
    product_info: new FormControl(''),
    base_charge: new FormControl(''),
    plan_group: new FormControl(''),
    start_date: new FormControl(''),
    product_id: new FormControl(''),
    batch_rate: new FormControl(''),
    index_name: new FormControl(''),
    end_date: new FormControl(''),
    market: new FormControl('TX'),
    rate: new FormControl(''),
    term: new FormControl(''),
    tos: new FormControl('', [Validators.required]),
  })

  setForm() {
    this.productForm.controls.renewals_content.setValue(this.productDetails.renewals_content)
    this.productForm.controls.average_renewals_content.setValue(this.productDetails.average_renewals_content)
    this.productForm.controls.product_id.setValue(this.productDetails.product_id)
    this.productForm.controls.product_type.setValue(this.productDetails.product_type)
    this.productForm.controls.product_name.setValue(this.productDetails.product_name)
    this.productForm.controls.PassthruStatus.setValue(this.productDetails.PassthruStatus)
    this.productForm.controls.plan_group.setValue(this.productDetails.plan_group)
    this.productForm.controls.product_subtype.setValue(this.productDetails.product_subtype)
    this.productForm.controls.start_date.setValue(this.productDetails.start_date)
    this.productForm.controls.end_date.setValue(this.productDetails.end_date)

    this.productForm.controls.product_visibility.setValue(this.productDetails.product_visibility)
    this.productForm.controls.product_info.setValue(this.productDetails.product_info)
    this.productForm.controls.display_info.setValue(this.productDetails.display_info)
    this.productForm.controls.index_name.setValue(this.productDetails.index_name)
    this.productForm.controls.display_termination_fee.setValue(this.productDetails.display_termination_fee)
    this.productForm.controls.rate.setValue(this.productDetails.rate)
    this.productForm.controls.batch_rate.setValue(this.productDetails.batch_rate)
    this.productForm.controls.term.setValue(this.productDetails.term)
    this.productForm.controls.base_charge.setValue(this.productDetails.base_charge)
    this.productForm.controls.energy_charge.setValue(this.productDetails.energy_charge)
    this.productForm.controls.tos.setValue(this.productDetails.tos)
    this.productForm.controls.electricity_price_text.setValue(this.productDetails.electricity_price_text)
    this.productForm.controls.other_key_term_and_ques_text.setValue(this.productDetails.other_key_term_and_ques_text)
    this.productForm.controls.fees_may_be_charged_text.setValue(this.productDetails.fees_may_be_charged_text)
  }

  ngOnInit() {
    this.http.get(`${environment.url}portal/get-tos-file-list/`).subscribe(res => {
      this.tosList = res['message']
      this.productForm.disable()
      this.productDetails = this.data
      this.status = this.data.status
      this.setForm()
    })
  }

  enterEditMode() {
    this.editMode = true
    this.productForm.enable()
    this.eflDisable = false
  }

  exitEditMode() {
    this.editMode = false
    this.setForm()
    this.productForm.disable()
    this.eflDisable = true
  }

  fd = new FormData()

  submit() {
    this.isBtnDisabled = true
    if (this.productForm.valid == true) {
      this.fd.append('product_id', this.productForm.controls.product_id.value)
      this.fd.append('product_type', this.productForm.controls.product_type.value)
      this.fd.append('product_name', this.productForm.controls.product_name.value)
      this.fd.append('plan_group', this.productForm.controls.plan_group.value)
      this.fd.append('start_date', this.service.Date1(this.productForm.controls.start_date.value))
      this.fd.append('end_date', this.service.Date1(this.productForm.controls.end_date.value))
      this.fd.append('product_subtype', this.productForm.controls.product_subtype.value)
      this.fd.append('product_visibility', this.productForm.controls.product_visibility.value)
      this.fd.append('product_info', this.productForm.controls.product_info.value)
      this.fd.append('display_info', this.productForm.controls.display_info.value)
      this.fd.append('index_name', this.productForm.controls.index_name.value)
      this.fd.append('market', "TX")
      this.fd.append('display_termination_fee', this.productForm.controls.display_termination_fee.value)
      this.fd.append('rate', this.productForm.controls.rate.value)
      this.fd.append('product_status', '1')
      this.fd.append('batch_rate', this.productForm.controls.batch_rate.value)
      this.fd.append('term', this.productForm.controls.term.value)
      this.fd.append('renewals_content', this.productForm.controls.renewals_content.value)
      this.fd.append('average_renewals_content', this.productForm.controls.average_renewals_content.value)
      this.fd.append('base_charge', this.productForm.controls.base_charge.value)
      this.fd.append('energy_charge', this.productForm.controls.energy_charge.value)
      this.fd.append('tos', this.productForm.controls.tos.value)
      if (this.productForm.controls.electricity_price_text.value != null && this.productForm.controls.electricity_price_text.value != undefined && this.productForm.controls.electricity_price_text.value != '') {
        this.fd.append('electricity_price_text', this.productForm.controls.electricity_price_text.value)
      } else {
        this.fd.append('electricity_price_text', 'Energy Charges is bundled and include all recurring delivery fees imposed by your local regulated TDU. This fixed price disclosure does not include applicable federal, state and local taxes or any fees (including gross receipt tax reimbursement), and all other non-recurring fees. Energy charge or Minimum Usage Fee is not prorated for short or nonstandard billing cycles.')
      }
      if (this.productForm.controls.other_key_term_and_ques_text.value != null && this.productForm.controls.other_key_term_and_ques_text.value != undefined && this.productForm.controls.other_key_term_and_ques_text.value != '') {
        this.fd.append('other_key_term_and_ques_text', this.productForm.controls.other_key_term_and_ques_text.value)
      } else {
        this.fd.append('other_key_term_and_ques_text', 'See Terms of Service for full listing of fees, deposit policy, and other terms.')
      }
      if (this.productForm.controls.fees_may_be_charged_text.value != null && this.productForm.controls.fees_may_be_charged_text.value != undefined && this.productForm.controls.fees_may_be_charged_text.value != '') {
        this.fd.append('fees_may_be_charged_text', this.productForm.controls.fees_may_be_charged_text.value)
      } else {
        this.fd.append('fees_may_be_charged_text', 'Fees not included in the price above: Insufficient funds:$30 Late Fee: 5% of past due balances. Disconnect/Reconnect for Non-Pay: $50. Information on other non-recurring fees is available on your “Terms of Service” document.')
      }
      this.http.put(environment.url + "portal/set-products-rate-term/" + this.productDetails.id + "/", this.fd).subscribe(res => {
        if (res['status'] == true) {
          this.isBtnDisabled = false
          Swal('Product edited successfully!', '', 'success').then(th => {
            this.productDetails = res['message']
            this.isBtnDisabled = false
            this.exitEditMode()
          })
        }
        else {
          Swal(res['message'], '', 'error').then(th => {
            this.isBtnDisabled = false
          })
        }
      }, error => {
        Swal('Could not connect to server, please try again', '', 'error').then(th => {
          this.isBtnDisabled = false
        })
      })
    }
    else
      this.isBtnDisabled = false
  }

  onNoClick() {
    this.thisDialogRef.close()
  }
}

@Component({
  selector: 'view-details-dialog',
  templateUrl: './view-details.html',
  styleUrls: ['./view-details.scss']
})
export class ViewProductDialog implements OnInit {
  constructor(public thisDialogRef: MatDialogRef<ViewProducts>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }
  isDisabled = []
  isBtnDisabled
  status: boolean
  productDetails
  editMode: boolean = false
  DepositIndicators = [{ value: '0', viewValue: ' Yes ' }, { value: '1', viewValue: ' No ' }]
  EdiBillPresenters = [{ value: '0', viewValue: 'DUAL' }, { value: '1', viewValue: 'ESP' }, { value: '2', viewValue: ' LDC' }]
  EdiBillCalculators = ['DUAL']

  productForm = new FormGroup({
    challenge_a: new FormControl(''),
    challenge_q: new FormControl(''),
    comment1: new FormControl(''),
    comment2: new FormControl(''),
    deposit_indicator: new FormControl(''),
    display_index_name: new FormControl(''),
    display_misc1: new FormControl(''),
    display_misc2: new FormControl(''),
    display_misc3: new FormControl(''),
    display_rate_per: new FormControl(''),
    display_sub_type: new FormControl(''),
    display_termination_fee: new FormControl(''),
    display_type: new FormControl(''),
    display_uom: new FormControl(''),
    edi_bill_calculator: new FormControl(''),
    edi_bill_presenter: new FormControl(''),
    product_mode: new FormControl(''),
    ref1: new FormControl(''),
    ref2: new FormControl(''),
    ref3: new FormControl(''),
    ref4: new FormControl('')
  })

  ngOnInit() {
    this.productForm.disable()
    this.productDetails = this.data.message
    this.status = this.data.status
    this.productForm.controls.challenge_a.setValue(this.productDetails.challenge_a)
    this.productForm.controls.challenge_q.setValue(this.productDetails.challenge_q)
    this.productForm.controls.comment1.setValue(this.productDetails.comment1)
    this.productForm.controls.comment2.setValue(this.productDetails.comment2)
    this.productForm.controls.deposit_indicator.setValue(this.productDetails.deposit_indicator)
    this.productForm.controls.display_index_name.setValue(this.productDetails.display_index_name)
    this.productForm.controls.display_misc1.setValue(this.productDetails.display_misc1)
    this.productForm.controls.display_misc2.setValue(this.productDetails.display_misc2)
    this.productForm.controls.display_misc3.setValue(this.productDetails.display_misc3)
    this.productForm.controls.display_rate_per.setValue(this.productDetails.display_rate_per)
    this.productForm.controls.display_sub_type.setValue(this.productDetails.display_sub_type)
    this.productForm.controls.display_termination_fee.setValue(this.productDetails.display_termination_fee)
    this.productForm.controls.display_type.setValue(this.productDetails.display_type)
    this.productForm.controls.display_uom.setValue(this.productDetails.display_uom)
    this.productForm.controls.edi_bill_calculator.setValue(this.productDetails.edi_bill_calculator)
    this.productForm.controls.edi_bill_presenter.setValue(this.productDetails.edi_bill_presenter)
    this.productForm.controls.product_mode.setValue(this.productDetails.product_mode)
    this.productForm.controls.ref1.setValue(this.productDetails.ref1)
    this.productForm.controls.ref2.setValue(this.productDetails.ref2)
    this.productForm.controls.ref3.setValue(this.productDetails.ref3)
    this.productForm.controls.ref4.setValue(this.productDetails.ref4)
  }

  enterEditMode() {
    this.editMode = true
    this.productForm.enable()
  }

  exitEditMode() {
    this.editMode = false
    this.productForm.controls.challenge_a.setValue(this.productDetails.challenge_a)
    this.productForm.controls.challenge_q.setValue(this.productDetails.challenge_q)
    this.productForm.controls.comment1.setValue(this.productDetails.comment1)
    this.productForm.controls.comment2.setValue(this.productDetails.comment2)
    this.productForm.controls.deposit_indicator.setValue(this.productDetails.deposit_indicator)
    this.productForm.controls.display_index_name.setValue(this.productDetails.display_index_name)
    this.productForm.controls.display_misc1.setValue(this.productDetails.display_misc1)
    this.productForm.controls.display_misc2.setValue(this.productDetails.display_misc2)
    this.productForm.controls.display_misc3.setValue(this.productDetails.display_misc3)
    this.productForm.controls.display_rate_per.setValue(this.productDetails.display_rate_per)
    this.productForm.controls.display_sub_type.setValue(this.productDetails.display_sub_type)
    this.productForm.controls.display_termination_fee.setValue(this.productDetails.display_termination_fee)
    this.productForm.controls.display_type.setValue(this.productDetails.display_type)
    this.productForm.controls.display_uom.setValue(this.productDetails.display_uom)
    this.productForm.controls.edi_bill_calculator.setValue(this.productDetails.edi_bill_calculator)
    this.productForm.controls.edi_bill_presenter.setValue(this.productDetails.edi_bill_presenter)
    this.productForm.controls.product_mode.setValue(this.productDetails.product_mode)
    this.productForm.controls.ref1.setValue(this.productDetails.ref1)
    this.productForm.controls.ref2.setValue(this.productDetails.ref2)
    this.productForm.controls.ref3.setValue(this.productDetails.ref3)
    this.productForm.controls.ref4.setValue(this.productDetails.ref4)
    this.productForm.disable()
  }

  submit() {
    this.isBtnDisabled = true
    let formDate = this.productForm.value
    this.http.put(environment.url + "portal/get-extra-info-products/" + this.productDetails.product_id + "/", formDate).subscribe(res => {
      if (res['status'] = true) {
        this.http.get(`${environment.url}portal/get-extra-info-products/` + this.productDetails.product_id + "/").subscribe(res => {
          this.productDetails = res['message']
          this.isBtnDisabled = false
          this.exitEditMode()
        })
      }
    })
  }

  onNoClick() {
    this.thisDialogRef.close()
  }
}

@Component({
  selector: 'add-additional-product',
  templateUrl: './add-additional-product.html',
  styleUrls: ['./add-additional-product.scss']
})
export class AddAdditionalProduct implements OnInit {
  Products = ['OPEN PRODUCT', 'PROMO PRODUCT']
  ProductsStatus = [{ value: '1', viewValue: 'Active' }, { value: '0', viewValue: 'Inactive' }]
  // ProductsVisibility = ['Internal & Web', 'Deal Capture', 'Internal Only']
  productsvisibility = [{ value: 'Internal & Web', viewValue: 'Internal & Web' }, { value: 'Deal Capture', viewValue: 'Deal Capture' }, { view: 'Internal Only', viewValue: 'Internal Only' }]
  Indexs = ['DNPNOTICEFEE']
  Taxindicaters = ['DNPNOTICEFEE']
  DepositIndicators = [{ value: '0', viewValue: ' Yes ' }, { value: '1', viewValue: ' No ' }]
  Productmodes = [{ value: '1', viewValue: 'Auto-Pay' }, { value: '2', viewValue: 'E-bill' }, { value: '3', viewValue: ' Auto-Pay & E-bill' }]
  // ProductSubTypes = ['Both Enrollment and Renewal', 'Enrollment Only', 'Renewal Only']
  productsubtypes = [{ value: 'Both Enrollment and Renewal', viewValue: 'Both Enrollment and Renewal' }, { value: 'Enrollment Only', viewValue: 'Enrollment Only' }, { value: 'Renewal Only', viewValue: 'Renewal Only' }]
  groupplans = [{ value: 'Small Non-Residential', viewValue: 'Small Non-Residential' }, { value: 'Commercial > 10 KVa', viewValue: 'Commercial > 10 KVa' }, { value: 'Residential', viewValue: 'Residential' }, { value: 'Residential > 10 KVa', viewValue: 'Residential > 10 KVa' }, { value: 'AMS Residential Prepay', viewValue: 'AMS Residential Prepay' }]
  EdiBillPresenters = [{ value: '0', viewValue: 'DUAL' }, { value: '1', viewValue: 'ESP' }, { value: '2', viewValue: ' LDC' }]
  EdiBillCalculators = ['DUAL']
  @ViewChild('product') product: ElementRef

  isDisabled: boolean = false
  tosList
  products
  constructor(public thisDialogRef: MatDialogRef<ViewProducts>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private service: EnrollmentService) { }

  productForm = new FormGroup({
    product_id: new FormControl('', [Validators.required]),
    product_type: new FormControl('', [Validators.required]),
    product_name: new FormControl('', [Validators.required]),
    PassthruStatus: new FormControl({ value: false, disabled: true }),
    plan_group: new FormControl('', [Validators.required]),
    start_date: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
    product_subtype: new FormControl('', [Validators.required]),
    product_visibility: new FormControl('', [Validators.required]),
    product_info: new FormControl(''),
    display_info: new FormControl(''),
    index_name: new FormControl(''),
    market: new FormControl('TX'),
    renewals_content: new FormControl('', [Validators.required]),
    average_renewals_content: new FormControl('', [Validators.required]),
    base_charge: new FormControl('', [Validators.required]),
    energy_charge: new FormControl('', [Validators.required]),
    display_termination_fee: new FormControl('', [Validators.required]),
    rate: new FormControl('', [Validators.required]),
    batch_rate: new FormControl('', [Validators.required]),
    term: new FormControl('', [Validators.required]),
    tos: new FormControl('', [Validators.required]),
    electricity_price_text: new FormControl('Energy Charges is bundled and include all recurring delivery fees imposed by your local regulated TDU. This fixed price disclosure does not include applicable federal, state and local taxes or any fees (including gross receipt tax reimbursement), and all other non-recurring fees. Energy charge or Minimum Usage Fee is not prorated for short or nonstandard billing cycles.'),
    other_key_term_and_ques_text: new FormControl('See Terms of Service for full listing of fees, deposit policy, and other terms.'),
    fees_may_be_charged_text: new FormControl('Fees not included in the price above: Insufficient funds:$30 Late Fee: 5% of past due balances. Disconnect/Reconnect for Non-Pay: $50. Information on other non-recurring fees is available on your “Terms of Service” document.'),
  })

  ngOnInit() {
    this.http.get(`${environment.url}portal/get-products-info-from-sig/`).subscribe(res => { this.products = res['message'] })
    this.http.get(`${environment.url}portal/get-tos-file-list/`).subscribe(res => { this.tosList = res['message'] })
  }

  fd = new FormData()

  changeId() {
    if (this.productForm.controls.product_id.value != undefined) {
      this.products.forEach(element => {
        if (element.ProductId == this.productForm.controls.product_id.value) {
          console.log(element)
          this.productForm.controls.product_name.setValue(element.ProductName)
          this.productForm.controls.PassthruStatus.setValue(element.PassthruStatus)
          this.setElectricityText()
        }
      })
    }
  }
  electricity_price_text_status
  setElectricityText() {
    console.log('danial')
    console.log(this.productForm.controls.PassthruStatus.value)
    let ON = "Your Average Price Per kWh each month reflects the Base Charge, Energy Charge and all existing recurring charges (including Transmission and Distribution Utility (“TDU”) delivery charges that are passed through to you as billed from TDU). Your average price for electricity will vary according to your actual usage. Energy Charges or Base Charge is not prorated for short or nonstandard billing cycles."
    let OFF = "Energy Charges is bundled and include all recurring delivery fees imposed by your local regulated TDU. This fixed price disclosure does not include applicable federal, state and local taxes or any fees (including gross receipt tax reimbursement), and all other non-recurring fees. Energy charge, Base Fee, or Minimum Usage Fee is not prorated for short or nonstandard billing cycles."
    this.electricity_price_text_status = this.productForm.controls.PassthruStatus.value == true ? ON : OFF
    this.productForm.controls.electricity_price_text.setValue(this.electricity_price_text_status)
  }
  onSubmit() {
    this.isDisabled = true
    if (this.productForm.valid == true) {
      this.fd.append('product_id', this.productForm.controls.product_id.value)
      this.fd.append('product_type', this.productForm.controls.product_type.value)
      this.fd.append('product_name', this.productForm.controls.product_name.value)
      this.fd.append('PassthruStatus', this.productForm.controls.PassthruStatus.value)
      this.fd.append('plan_group', this.productForm.controls.plan_group.value)
      this.fd.append('start_date', this.service.Date1(this.productForm.controls.start_date.value))
      this.fd.append('end_date', this.service.Date1(this.productForm.controls.end_date.value))
      this.fd.append('product_subtype', this.productForm.controls.product_subtype.value)
      this.fd.append('product_visibility', this.productForm.controls.product_visibility.value)
      this.fd.append('product_info', this.productForm.controls.product_info.value)
      this.fd.append('display_info', this.productForm.controls.display_info.value)
      this.fd.append('index_name', this.productForm.controls.index_name.value)
      this.fd.append('market', this.productForm.controls.market.value)
      this.fd.append('display_termination_fee', this.productForm.controls.display_termination_fee.value)
      this.fd.append('rate', this.productForm.controls.rate.value)
      this.fd.append('renewals_content', this.productForm.controls.renewals_content.value)
      this.fd.append('average_renewals_content', this.productForm.controls.average_renewals_content.value)
      this.fd.append('product_status', '1')
      this.fd.append('batch_rate', this.productForm.controls.batch_rate.value)
      this.fd.append('term', this.productForm.controls.term.value)
      this.fd.append('base_charge', this.productForm.controls.base_charge.value)
      this.fd.append('energy_charge', this.productForm.controls.energy_charge.value)
      this.fd.append('tos', this.productForm.controls.tos.value)
      if (this.productForm.controls.electricity_price_text.value != null && this.productForm.controls.electricity_price_text.value != undefined && this.productForm.controls.electricity_price_text.value != '') {
        this.fd.append('electricity_price_text', this.productForm.controls.electricity_price_text.value)
      } else {
        this.fd.append('electricity_price_text', this.electricity_price_text_status)
      }
      if (this.productForm.controls.other_key_term_and_ques_text.value != null && this.productForm.controls.other_key_term_and_ques_text.value != undefined && this.productForm.controls.other_key_term_and_ques_text.value != '') {
        this.fd.append('other_key_term_and_ques_text', this.productForm.controls.other_key_term_and_ques_text.value)
      } else {
        this.fd.append('other_key_term_and_ques_text', 'See Terms of Service for full listing of fees, deposit policy, and other terms.')
      }
      if (this.productForm.controls.fees_may_be_charged_text.value != null && this.productForm.controls.fees_may_be_charged_text.value != undefined && this.productForm.controls.fees_may_be_charged_text.value != '') {
        this.fd.append('fees_may_be_charged_text', this.productForm.controls.fees_may_be_charged_text.value)
      } else {
        this.fd.append('fees_may_be_charged_text', 'Fees not included in the price above: Insufficient funds:$30 Late Fee: 5% of past due balances. Disconnect/Reconnect for Non-Pay: $50. Information on other non-recurring fees is available on your “Terms of Service” document.')
      }
      this.http.post(`${environment.url}portal/get-products/`, this.fd).subscribe(res => {
        if (res['status'] == true) {
          this.isDisabled = false
          Swal('Product created successfully!', '', 'success').then(res => {
            this.thisDialogRef.close()
          })
        }
        else {
          Swal(res['message'], '', 'error').then(res => {
            this.isDisabled = false
          })
        }
      }, error => {
        Swal('Could not connect to server, please try again', '', 'error').then(res => {
          this.isDisabled = false
        })
      })
    }
    else
      this.isDisabled = false
  }

  get controls() {
    return this.productForm.controls
  }
}

@Component({
  selector: 'add-remove-tdsp-dialog',
  templateUrl: './add-remove-tdsp.html',
  styleUrls: ['./add-remove-tdsp.scss']
})
export class AddRemoveTdspDialog implements OnInit {
  constructor(public thisDialogRef: MatDialogRef<ViewProducts>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }
  tdsp = []
  isDisabled = []
  ngOnInit() { }

  changeTdsp(para) {
    this.isDisabled[para.duns_number] = true
    let data = {
      product_id: para.product_id,
      duns_number: para.duns_number
    }
    this.http.put(`${environment.url}portal/products-edit-info/`, data).subscribe(res => {
      this.isDisabled[para.duns_number] = false
    })
  }

  onNoClick() {
    this.thisDialogRef.close()
  }
}

@Component({
  selector: 'add-remove-promo-code-dialog',
  templateUrl: './add-remove-promo-code.html',
  styleUrls: ['./add-remove-promo-code.scss']
})
export class AddRemovePromoCodeDialog implements OnInit {
  constructor(public thisDialogRef: MatDialogRef<ViewProducts>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  tdsp = []
  isDisabled = []
  ngOnInit() {
  }

  changeTdsp(para) {
    this.isDisabled[para.promo_code] = true
    let data = {
      promo_code: para.promo_code,
      product_id: para.product_id
    }
    this.http.put(`${environment.url}portal/set-promos-on-product/`, data).subscribe(res => {
      this.isDisabled[para.promo_code] = false
    })
  }

  onNoClick() {
    this.thisDialogRef.close()
  }
}

@Component({
  selector: 'add-new-dialog',
  templateUrl: './add-new.html',
  styleUrls: ['./add-new.scss']
})
export class AddNewProductDialog implements OnInit {
  constructor(public thisDialogRef: MatDialogRef<ViewProducts>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }
  productTypes

  ngOnInit() {
    this.http.get(`${environment.url}portal/get-product-type-list/`).subscribe(res => {
      this.productTypes = res['message']
    })
  }

  disabledBtn: boolean
  productForm = new FormGroup({
    ProductId: new FormControl(''),
    ProductName: new FormControl(''),
    ProductStatus: new FormControl(true),
    PassthruStatus: new FormControl(false),
  })

  changeProductType(event) {
    this.productForm.controls.PassthruStatus.setValue(event.value)
  }

  onSubmit() {
    if (this.productForm.valid == true) {
      this.disabledBtn = true
      this.http.post(`${environment.url}portal/post-products-info-from-sig/`, this.productForm.value).subscribe(res => {
        if (res['status'] == true) {
          this.disabledBtn = false
          this.thisDialogRef.close()
        }
        else {
          Swal(res['message'], '', 'error')
          this.disabledBtn = false
        }
      }, err => { this.disabledBtn = false })
    }
  }
}