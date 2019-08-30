import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DashboardLayout } from './DashboardLayout';
import { DashboardAdminPortal } from '../Dashboard/DahsboardAdminPortal';
import { CustomersOnAdminPotal } from '../Customers/Customers';
import { Promotions } from '../Promotions/Promotions';
import { AllOffers } from '../RenewalAdministrator/Offers/Offers';
import { CronTasks } from '../CronTasks/CronTasks';
import { ContactUSComponent } from '../ContactUS/ContactUS';
import { MakePaymentSetting } from '../MakePayment/MakePayment';
import { Authorization } from '../Authorization/Authorization';
import { ErrorMessages } from '../ErrorMessage/ErrorMessage';
import { ViewProducts } from '../Products/products.component';
import { ViewTos } from '../Tos/tos';
import { ViewHolidays } from '../HolidayManagement/holiday';
import { ViewPromo } from '../Promo/promo';
import { ViewSessions } from '../Session/session';

const routes: Routes = [
    {
        path: '', component: DashboardLayout,
        children: [
            { path: '', component: DashboardAdminPortal },
            { path: 'customers', component: CustomersOnAdminPotal },
            { path: 'promotions', component: Promotions },
            { path: 'renewaladministrtion/offers', component: AllOffers },
            { path: 'crontasks', component: CronTasks },
            { path: 'contactus', component: ContactUSComponent },
            { path: 'makepayment', component: MakePaymentSetting },
            { path: 'authorize', component: Authorization },
            { path: 'errormessages', component: ErrorMessages },
            { path: 'viewproducts', component: ViewProducts },
            { path: 'tos', component: ViewTos },
            { path: 'holidays', component: ViewHolidays },
            { path: 'promo', component: ViewPromo },
            { path: 'sessions', component: ViewSessions },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
