import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material'
import { CustomersService } from '../../Store/customers'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'view-tos',
  templateUrl: './view-tos.html',
  styleUrls: ['./view-tos.scss', '../../Styles/Table.scss']
})
export class ViewTos implements OnInit, AfterViewInit {
  constructor(private customer: CustomersService, private http: HttpClient, public dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator: MatPaginator
  displayedColumns = ['a', 's', 'v', 'fn', 'd', 'dc', 'dm']
  dataSource = new MatTableDataSource()
  isStatusDisabled = []

  ngOnInit() {
    this.getTos()
  }

  openDocument(path) {
    window.open(path, '_blank')
  }

  getTos() {
    this.customer.getAllTos().subscribe(res => {
      this.dataSource.data = res['message']
    })
  }

  openAddTosDialog() {
    let dialogRef = this.dialog.open(AddTosDialog)
    dialogRef.afterClosed().subscribe(result => this.getTos())
  }

  openEditTosDialog(element) {
    let dialogRef = this.dialog.open(EditTosDialog, {
      data: element
    })
    dialogRef.afterClosed().subscribe(result => this.getTos())
  }

  changeStatus(value) {
    this.isStatusDisabled[value.id] = true
    let data = { id: value.id }
    this.http.put(`${environment.url}portal/get-tos-file-list/`, data).subscribe(res => {
      this.isStatusDisabled[value.id] = false
      this.getTos()
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
  selector: 'add-tos-dialog',
  templateUrl: './add-tos-dialog.html',
  styleUrls: ['./add-tos-dialog.scss']
})
export class AddTosDialog implements OnInit {
  constructor(private customer: CustomersService, public thisDialogRef: MatDialogRef<ViewTos>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }
  isBtnDisabled

  tosForm = new FormGroup({
    version: new FormControl(''),
    file_name: new FormControl(''),
    descriptions: new FormControl('')
  })

  fd = new FormData()

  tos_file: File = null
  tos

  onTosFileSelected(event) {
    this.tos_file = <File>event.target.files[0]
    if (this.tos_file != null) {
      this.tos = this.tos_file.name
      this.fd.append('tos_file', this.tos_file)
    }
  }

  ngOnInit() { }

  submit() {
    this.fd.append('version', this.tosForm.controls.version.value)
    this.fd.append('file_name', this.tosForm.controls.file_name.value)
    this.fd.append('descriptions', this.tosForm.controls.descriptions.value)
    this.fd.append('status', 'True')
    this.isBtnDisabled = true
    this.customer.addTos(this.fd).subscribe(res => {
      this.isBtnDisabled = false
      this.thisDialogRef.close()
    })
  }

  onNoClick() {
    this.thisDialogRef.close()
  }
}

@Component({
  selector: 'edit-tos-dialog',
  templateUrl: './edit-tos-dialog.html',
  styleUrls: ['./edit-tos-dialog.scss']
})
export class EditTosDialog implements OnInit {
  constructor(private customer: CustomersService, public thisDialogRef: MatDialogRef<ViewTos>, private http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }
  isBtnDisabled

  tosForm = new FormGroup({
    version: new FormControl(''),
    file_name: new FormControl(''),
    descriptions: new FormControl(''),
    status: new FormControl('')
  })

  fd = new FormData()

  tos_file: File = null
  tos

  onTosFileSelected(event) {
    this.tos_file = <File>event.target.files[0]
    if (this.tos_file != null) {
      this.tos = this.tos_file.name
      this.fd.append('tos_file', this.tos_file)
    }
  }

  ngOnInit() { 
    this.tosForm.controls.version.setValue(this.data.version)
    this.tosForm.controls.file_name.setValue(this.data.file_name)
    this.tosForm.controls.descriptions.setValue(this.data.descriptions)
    this.tosForm.controls.status.setValue(this.data.status)
  }

  submit() {
    this.fd.append('id',this.data.id)
    this.fd.append('version', this.tosForm.controls.version.value)
    this.fd.append('file_name', this.tosForm.controls.file_name.value)
    this.fd.append('descriptions', this.tosForm.controls.descriptions.value)
    this.fd.append('status', this.tosForm.controls.status.value)
    this.isBtnDisabled = true
    this.customer.editTos(this.fd).subscribe(res => {
      this.isBtnDisabled = false
      this.thisDialogRef.close()
    })
  }

  onNoClick() {
    this.thisDialogRef.close()
  }
}