import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UsageComponent } from '../usage/usage.component'
import { ProductsComponent } from '../products/products.component'
import { DashboardHomeComponent } from '../dashboard-home/dashboard-home.component'
import { PayComponent } from '../pay/pay.component';
import { PaymentComponent, PaymentSuccessPageComponent } from '../payment/payment.component';
import { CustomerInfoComponent, ContactUsComponent } from '../customer-info/customer-info.component';
import { BillInfoComponent } from '../bill-info/bill-info.component';
import { OffersComponent } from '../offers/offers.component';
import { NoticesComponent } from '../notices/notices.component';
import { NotificationComponent } from '../notification/notification.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            { path: '', component: DashboardHomeComponent },
            { path: 'usage', component: UsageComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'pay', component: PayComponent },
            { path: 'paynow', component: PaymentComponent },
            { path: 'paymentsuccess', component: PaymentSuccessPageComponent },            
            { path: 'payments', component: PaymentComponent },
            { path: 'customerInfo', component: CustomerInfoComponent },
            { path: 'billInfo', component: BillInfoComponent },
            { path: 'contact', component: ContactUsComponent },
            { path: 'offers', component: OffersComponent },
            { path: 'notices', component: NoticesComponent },
            { path: 'notification', component: NotificationComponent },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
