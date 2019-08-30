import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../../../material.module'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { UsageComponent } from '../usage/usage.component';
import { ProductsComponent } from '../products/products.component';
import { DashboardHomeComponent, PromoCodeModal } from '../dashboard-home/dashboard-home.component';
import { PayComponent } from '../pay/pay.component';
import { PaymentComponent, PaymentSuccessPageComponent } from '../payment/payment.component';
import { CustomerInfoComponent, ContactUsComponent, UnderstandBillComponent, ThumbnailImageComponent } from '../customer-info/customer-info.component';
import { BillInfoComponent, PDFComponent } from '../bill-info/bill-info.component';
import { OffersComponent } from '../offers/offers.component';
import { NoticesComponent } from '../notices/notices.component';
import { NotificationComponent } from '../notification/notification.component';
import { UsageService } from '../../Store/Services/graph.service';
import { CustomerService } from '../../Store/Services/customer.service';
import { ProductsService } from '../../Store/Services/products.service';
import { SharedModule } from '../../../shared.module';
import { EditAddressComponent } from '../edit-address/edit-address.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ServerSocketService } from '../header/server-socket.service';
import { DashboardComponent } from './dashboard.component';
import { BillDetailsComponent } from '../bill-details/bill-details.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ChangepasswordComponent, ContactInfoComponent, LoginIDComponent, DeliveryOptionComponent } from '../changepassword/changepassword.component';
import { EnterPasswordPopup } from '../EnterPassword/EnterPassword';
import { BillDetailsService } from '../../Store/Services/bill-details.service';
import { PaymentService } from '../../Store/Services/payment.service';
import { BillsService } from '../../Store/Services/bills.service';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MaterialModule,
        SharedModule
    ],
    exports: [SharedModule],
    declarations: [
        UsageComponent,
        ProductsComponent,
        DashboardComponent,
        DashboardHomeComponent,
        PayComponent,
        PaymentComponent,
        CustomerInfoComponent,
        BillInfoComponent,
        ContactUsComponent,
        OffersComponent,
        NoticesComponent,
        NotificationComponent,
        UnderstandBillComponent,
        ThumbnailImageComponent,
        EditAddressComponent,
        FooterComponent,
        HeaderComponent,
        BillDetailsComponent,
        SidebarComponent,
        PDFComponent,
        PromoCodeModal,
        ChangepasswordComponent,
        ContactInfoComponent,
        LoginIDComponent,
        DeliveryOptionComponent,
        EnterPasswordPopup,
        PaymentSuccessPageComponent
    ],
    providers: [
        UsageService,
        CustomerService,
        ProductsService,
        ServerSocketService,
        BillDetailsService,
        BillsService,
        PaymentService
    ],
    entryComponents: [
        UnderstandBillComponent,
        ThumbnailImageComponent,
        EditAddressComponent,
        PDFComponent,
        PromoCodeModal,
        ChangepasswordComponent,
        ContactInfoComponent,
        LoginIDComponent,
        DeliveryOptionComponent,
        EnterPasswordPopup
    ]
})
export class DashboardModule { }