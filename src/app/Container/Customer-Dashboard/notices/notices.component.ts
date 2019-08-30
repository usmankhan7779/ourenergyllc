import { Component, OnInit, ViewChild } from '@angular/core'
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material'
import { HttpClient } from '@angular/common/http'
import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { environment } from '../../../../environments/environment'

@Component({
    selector: 'app-notices',
    templateUrl: './notices.component.html',
    styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

    dataSource = new MatTableDataSource()
    noRecords
    showSpinner: boolean = false
    @ViewChild(MatPaginator) noticePaginator: MatPaginator
    @ViewChild(MatSort) sort: MatSort
    displayedColumns = ['pdf', 'a', 'bn', 'bd', 'ed', 'nd', 'nn', 'nt']

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getNotices()
    }

    getNotices() {
        this.http.get(`${environment.url}notice/get-notices/`, {
            'headers': {
                'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
            }
        }).subscribe(res => {
            if (res['status'] == true) {
                this.dataSource.data = res['message']
            }
        })
    }

    completeChecker(value) {
        return value != null && value != undefined && value != "" ? true : false
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim().toLowerCase();
        this.dataSource.filter = filterValue;
        if (this.dataSource.filteredData.length == 0) {
            this.noRecords = "No Records found"
        }
        else {
            this.noRecords = ""
        }
    }

    datePatternDMY(date) { // DD-MM-YYYY
        if (this.completeChecker(date)) {
            let d = new Date(date)
            let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            return `${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}-${months[d.getMonth()]}-${d.getFullYear()}`
        } else return ''
    }

    datePatternMDY(date) { // MM-DD-YYYY
        if (this.completeChecker(date)) {
            let d = new Date(date)
            return `${(d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1}/${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}/${d.getFullYear()}`
        } else return ''
    }

    datePatternMDYY(date) { // MM-DD-YY
        if (this.completeChecker(date)) {
            let d = new Date(date)
            return `${(d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1}/${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}/${String(d.getFullYear()).slice(2, 4)}`
        } else return ''
    }

    downloadNotice(element) {
        pdfMake.vfs = pdfFonts.pdfMake.vfs
        let dd = {
            content: [
                {
                    columns: [
                        {
                            width: 130,
                            text: [
                                { text: `${this.datePatternMDY(element.disconnect_notice.date_sent)}`, fontSize: 9 },
                                {
                                    text: `
            
            
            
            
            
            
            
            
            
            
            
            
            Our Energy LLC
            17154 Butte Creek Rd, #
            250
            Houston, TX 77090
            PUCT LIC# 10170
            ____________________________
            Customer Service
            Se Habla Español
            281-552-8390`, fontSize: 10, bold: true
                                },
                                {
                                    text: `
                                    Mon-Fri: 8:30AM – 6:30PM
            CST`, fontSize: 10
                                },
                                {
                                    text: `
                                ____________________________
                                `, fontSize: 10, bold: true
                                },
                                { text: `For information about your bill or service, call us or visit our website at `, fontSize: 10 },
                                { text: `www.OurEnergyLLC.com`, link: `https://www.ourenergyllc.net/`, color: `blue`, decoration: "underline", fontSize: 10 },
                                { text: ` or Email us at `, fontSize: 10 },
                                {
                                    text: `CustomerService@OUREnergyLLC.com`, fontSize: 10, decoration: "underline", color: `blue`
                                },
                                {
                                    text: `
                                ____________________________`, fontSize: 10, bold: true
                                },
                            ]
                        },
                        {
                            text: [
                                { text: `NOTICE OF DISCONNECTION FOR NON PAYMENT`, fontSize: 10, bold: true, alignment: `center` },
                                { text: `\nAccount# ${element.cust_id}`, fontSize: 10, alignment: `center` },
                                { text: `\n\n${element.cust_firstname} ${element.cust_lastname}`, fontSize: 10 },
                                {
                                    text: [
                                        {
                                            text: `\n${element.premise_address2}
                          ${element.cust_city}, ${element.cust_state} ${element.premise_zip}
                          
                          
                          Dear ${element.cust_firstname} ${element.cust_lastname}
                          
                          `, fontSize: 8.5
                                        },
                                        { text: `To avoid disconnection of your service please remit the past due balance of `, fontSize: 8.5 },
                                        { text: `$${element.disconnect_notice.amount}`, fontSize: 8.5, bold: true },
                                        { text: ` by `, fontSize: 8.5 },
                                        { text: `${this.datePatternMDYY(element.disconnect_notice.extension_date)}`, fontSize: 8.5, bold: true },
                                        { text: `. You may make payment via Internet 24 hours a day 7 days a week by visiting `, fontSize: 8.5 },
                                        { text: "www.OurEnergyLLC.com", link: "https://www.ourenergyllc.net/", color: `blue`, decoration: "underline", fontSize: 8.5 },
                                        {
                                            text: `
                          
                          If payment of your past-due balance is NOT received by ${this.datePatternMDYY(element.disconnect_notice.extension_date)} an electric service disconnection transaction will be processed by OUR Energy the next business day. If an electric service disconnection transaction is processed by OUR Energy your account will be charged a $25.00 fee. If OUR Energy processes a reconnect transaction your account will be charged a $25.00 reconnection fee. These transaction fees will be assessed even if your electric service is not actually disconnected by your TDSP. These fees are in addition to those disconnection and reconnection fees that may be assessed by your TDSP and in addition to the total charges due.
                          
                          Our Energy LLC may require a deposit of two (2) months average electric service OR if a deposit is currently being held by Our Energy LLC on your behalf we may require an additional deposit prior to reconnection. If a deposit is currently being held by Our Energy LLC on your behalf and you fail to restore service that deposit will be applied against the final bill and the remaining deposit (if any) will be returned to you. 
                          
                          Disconnection of your electric service from Our Energy LLC WILL NOT excuse you from paying any outstanding amounts owed to Our Energy LLC. Our Energy LLC may refer any unpaid balance to a professional debt collection agency, attorney, consumer credit reporting agencies, small claims court, file a lawsuit, or collect your outstanding balance through probate, bankruptcy or other judicial proceedings and pursue any other remedies allowed by law. You agree to pay reasonable fees and expenses (including attorney's fees) that OUR Energy may incur in the collection process. 
                          
                          Should you be unable to remit payment in full, please contact Our Energy LLC immediately at our toll free number 281-552-8390. You may be able to make alternate payment arrangements, establish a deferred payment plan, or possibly secure payment assistance.
                          
                          If you are not satisfied with our response to your inquiry or complaint, you may file a complaint by calling or writing the
                          
            Public Utility Commission of Texas
            P.O. Box 13326
            Austin, Texas, 78711-3326
            Telephone: (512) 936-7120 or toll-free in Texas at (888) 782-8477.
            Hearing and speech impaired individuals with text telephones (TTY) may contact the commission at:
            (512) 936-7136
            
            Complaints may also be filed electronically at
            `
                                            , fontSize: 8.5, alignment: 'justify'
                                        },
                                        { text: "www.puc.state.tx.us/ocp/complaints/complain.cfm", link: "http://www.puc.texas.gov/consumer/complaint/Complaint.aspx", color: `blue`, decoration: "underline", fontSize: 8.5 },
                                    ]
                                }
                            ],
                        }
                    ],
                },
                { text: `\n\n.....................................................................................................................................................................`, fontSize: 13 },
                {
                    table: {
                        heights: [17, 17, 10],
                        widths: [100, 100],
                        body: [
                            [{ text: `Account Number: `, border: [false, false, false, false] }, { text: `${element.cust_id}`, border: [false, false, false, false] }],
                            [{ text: `Amount Due: `, border: [false, false, false, false] }, { text: `$${element.disconnect_notice.amount}`, border: [false, false, false, false] }],
                            [{ text: `Amount Remitted: `, border: [false, false, false, false] }, { text: `$`, border: [true, true, true, true] }],
                        ]
                    }, margin: [330, 20, 0, 0], fontSize: 10, bold: true
                },
                {
                    table: {
                        widths: [9, 500],
                        body: [
                            [{ text: ` `, border: [true, true, true, true] }, { text: `I wish to donate to the bill payment assistance program`, border: [false, false, false, false] }]
                        ]
                    }, margin: [0, -15, 0, 0], fontSize: 12
                },
                {
                    table: {
                        widths: [9, 20, 9, 20, 9, 25],
                        body: [
                            [{ text: ` `, border: [true, true, true, true] }, { text: `$1`, border: [false, false, false, false] }, { text: ` `, border: [true, true, true, true] }, { text: `$5`, border: [false, false, false, false] }, { text: ` `, border: [true, true, true, true] }, { text: `$10`, border: [false, false, false, false] }]
                        ]
                    }, margin: [0, 5, 0, 0], fontSize: 12
                },
                `
                
                
                
                `,
                {
                    columns: [
                        {
                            width: 130,
                            text: [
                                { text: `${this.datePatternMDY(element.disconnect_notice.date_sent)}`, fontSize: 9 },
                                {
                                    text: `
              
              
              
              
              
              
              
              
              
              
              
              
              Our Energy LLC
              17154 Butte Creek Rd, #
              250
              Houston, TX 77090
              PUCT LIC# 10170
              ____________________________
              Servicio al Cliente
              Hablamos Español
              281-552-8390`, fontSize: 10, bold: true
                                },
                                {
                                    text: `
                                      Lunes-Viernes: 8:30AM –
              6:30PM CST`, fontSize: 10
                                },
                                {
                                    text: `
                                  ____________________________
                                  `, fontSize: 10, bold: true
                                },
                                {
                                    text: `Para información sobre su
              factura o servicio, llámenos o visite nuestra página `, fontSize: 10
                                },
                                { text: `www.OurEnergyLLC.com`, link: `https://www.ourenergyllc.net/`, color: `blue`, decoration: "underline", fontSize: 10 },
                                { text: ` o mande su correo electrónico a `, fontSize: 10 },
                                {
                                    text: `CustomerService@OUREnergyLLC.com`, fontSize: 10, decoration: "underline", color: `blue`
                                },
                                {
                                    text: `
                                  ____________________________`, fontSize: 10, bold: true
                                },
                            ]
                        },
                        {
                            text: [
                                { text: `AVISO DE DESCONEXIÓN POR FALTA DE PAGO`, fontSize: 10, bold: true, alignment: `center` },
                                { text: `\nAccount# ${element.cust_id}`, fontSize: 10, alignment: `center` },
                                { text: `\n\n${element.cust_firstname} ${element.cust_lastname}`, fontSize: 10 },
                                {
                                    text: [
                                        {
                                            text: `\n${element.premise_address2}
                            ${element.cust_city}, ${element.cust_state} ${element.premise_zip}
              
                            Estimado ${element.cust_firstname} ${element.cust_lastname}
                            
                            `, fontSize: 8.5
                                        },
                                        { text: `Para evitar la desconexión de su servicio, le pedimos que envíe el saldo vencido de `, fontSize: 8.5 },
                                        { text: `$${element.disconnect_notice.amount}`, fontSize: 8.5, bold: true },
                                        { text: ` a más tardar el `, fontSize: 8.5 },
                                        { text: `${this.datePatternMDYY(element.disconnect_notice.extension_date)}`, fontSize: 8.5, bold: true },
                                        { text: `. Puede hacer el pago por Internet las 24 horas del día, los 7 días de la semana visitando `, fontSize: 8.5 },
                                        { text: "www.OurEnergyLLC.com", link: "https://www.ourenergyllc.net/", color: `blue`, decoration: "underline", fontSize: 8.5 },
                                        {
                                            text: `
                            
                            Si NO recibimos el pago del saldo vencido a más tardar el ${this.datePatternMDYY(element.disconnect_notice.extension_date)}, OUR Energy procesará una transacción de desconexión de servicio eléctrico el siguiente día hábil. Si OUR Energy procesa una transacción de desconexión de servicio eléctrico, se cargará a su cuenta un honorario de $25.00. Si OUR Energy procesa una transacción de reconexión, se cargará a su cuenta un honorario de reconexión de $25.00. Dichos honorarios de transacción serán evaluados aún si su TDSP (proveedor de servicio de transmisión y distribución) no desconecta su servicio eléctrico. Dichos honorarios son adicionales a los honorarios de desconexión y reconexión que puedan ser evaluados por su TDSP y adicionales a los cargos totales debidos.
                            
                            Our Energy LLC podrá exigirle un depósito de dos (2) meses de servicio eléctrico promedio O, si Our Energy LLC ya cuenta con un depósito de su parte, podremos exigirle un depósito adicional antes de la reconexión. Si Our Energy LLC actualmente cuenta con un depósito de su parte y usted no restablece el servicio, dicho depósito será aplicado a la factura final y el depósito restante (si existe) le será devuelto.
                            
                            La desconexión de su servicio eléctrico de Our Energy LLC NO lo exime del pago de ningún monto pendiente debido a Our Energy LLC. Our Energy LLC podrá enviar todo saldo no pagado a una agencia profesional de cobro de deudas, abogado, agencia de información crediticia, tribunales de menor cuantía, presentar una demanda judicial o cobrar el saldo pendiente a través de sucesiones, quiebra u otros procedimientos judiciales, y utilizar todo otro recurso permitido por la ley. Usted acepta pagar los honorarios y gastos razonables (incluyendo honorarios de abogados) en los que OUR Energy pueda incurrir durante el proceso de cobro.
                            
                            Si no está en condiciones de enviar el pago completo, le pedimos que se comunique con Our Energy LLC inmediatamente a través de nuestro número gratis 281-552-8390. Es posible que pueda acordar pagos alternativos, establecer un plan de pagos diferidos u obtener asistencia para los pagos.
                            
                            Si usted no está satisfecho con nuestra respuesta a su consulta o queja, puede presentar una queja llamando o escribiendo a la:
                            
              Public Utility Commission of Texas
              P.O. Box 13326
              Austin, Texas, 78711-3326
              
              teléfono: (512) 936-7120 o Línea gratuita en Texas at (888) 782-8477.
              Individuos auditivos o del habla con el teléfono de texto (TTY) pueden comunicarse con la Comisión en:
              (512) 936-7136`
                                            , fontSize: 8.5, alignment: 'justify'
                                        },
                                    ]
                                }
                            ],
                        }
                    ],
                },
                { text: `\n.....................................................................................................................................................................`, fontSize: 13 },
                {
                    table: {
                        heights: [17, 17, 10],
                        widths: [100, 100],
                        body: [
                            [{ text: `Número de Cuenta: `, border: [false, false, false, false] }, { text: `${element.cust_id}`, border: [false, false, false, false] }],
                            [{ text: `Cantidad Debida: `, border: [false, false, false, false] }, { text: `$${element.disconnect_notice.amount}`, border: [false, false, false, false] }],
                            [{ text: `Cantidad Pagada: `, border: [false, false, false, false] }, { text: `$`, border: [true, true, true, true] }],
                        ]
                    }, margin: [330, 20, 0, 0], fontSize: 10, bold: true
                },
                {
                    table: {
                        widths: [9, 500],
                        body: [
                            [{ text: ` `, border: [true, true, true, true] }, { text: `Deseo donar al programa de asistencia para pagos de factura`, border: [false, false, false, false] }]
                        ]
                    }, margin: [0, 10, 0, 0], fontSize: 12
                },
                {
                    table: {
                        widths: [9, 20, 9, 20, 9, 25],
                        body: [
                            [{ text: ` `, border: [true, true, true, true] }, { text: `$1`, border: [false, false, false, false] }, { text: ` `, border: [true, true, true, true] }, { text: `$5`, border: [false, false, false, false] }, { text: ` `, border: [true, true, true, true] }, { text: `$10`, border: [false, false, false, false] }]
                        ]
                    }, margin: [0, 5, 0, 0], fontSize: 12
                },
            ],
            footer: {
                columns: [
                    { text: '' },
                    {
                        text: `${element.cust_firstname} ${element.cust_lastname}
                        ${element.premise_address2}
                        ${element.cust_city}, ${element.cust_state} ${element.premise_zip}`, fontSize: 8, margin: [0, -25, 0, 0]
                    },
                    { text: '' },
                    {
                        text: `Our Energy LLC
            17154 Butte Creek Rd, # 250
            Houston, TX 77090`, fontSize: 8, margin: [0, -25, 0, 0]
                    },
                    { text: '' }
                ]
            },
            pageSize: { width: 595.28, height: 793.7 },
            pageMargins: [15, 35, 15, 30],
            defaultStyle: {
                columnGap: 10
            }
        }

        pdfMake.createPdf(dd).download(`Notice (${element.notice_no}).pdf`)
    }


    ngAfterViewInit() {
        this.dataSource.paginator = this.noticePaginator
        this.dataSource.sort = this.sort
    }
}

// @Component({
//     selector: 'notice-pdf-component',
//     templateUrl: './pdf.html',
//     styleUrls: ['./notices.component.scss']
// })
// export class NoticePDFComponent implements OnInit {
//     constructor(
//         public dialogRef: MatDialogRef<NoticePDFComponent>,
//         @Inject(MAT_DIALOG_DATA) public data: any, public http: Http) {
//     }

//     ngOnInit() {
//     }

//     PDFDownload() {
//         // window.open(this.data)
//         this.http.get(this.data.url, {
//             responseType: ResponseContentType.Blob
//         }).map(res => {
//             return {
//                 filename: `OurEnergy (${this.data.billDate}).pdf`,
//                 data: res.blob()
//             }
//         }).subscribe(res => {
//             var url = window.URL.createObjectURL(res.data)
//             var a = document.createElement('a')
//             document.body.appendChild(a)
//             a.setAttribute('style', 'display: none')
//             a.href = url
//             a.download = res.filename
//             a.click()
//             window.URL.revokeObjectURL(url)
//             a.remove()
//         }, error => {
//         }, () => {
//             this.dialogRef.close()
//         })
//     }
// }