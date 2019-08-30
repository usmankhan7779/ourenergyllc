import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MaterialModule } from '../../../material.module'
import { SharedModule } from '../../../shared.module';
import { AdminDashboardRoutingModule } from './Admin-Dashboard-routing.module';
import { DashboardLayout } from './DashboardLayout';
import { DashboardAdminPortal, ViewImageDialog, ChangeImageDialog, TestEmailDialog, SessionExpiryDialog, AddAdvDialog, AddM2mDialog, EditM2mDialog, EditAdvDialog, EditTdspRatesDialog } from '../Dashboard/DahsboardAdminPortal';
import { CustomersOnAdminPotal, UnenrolledCustomer, LinkAccountDialog, SignInLogsCustomer } from '../Customers/Customers';
import { Promotions } from '../Promotions/Promotions';
import { AllOffers, CreateOffer, ChangeExpiryDialog, AttachOfferDialog, SendOfferDialog, ViewOfferDialog, ViewDetails } from '../RenewalAdministrator/Offers/Offers';
import { CronTasks, ChangeScheduleDialog } from '../CronTasks/CronTasks';
import { ContactUSComponent, ContactUssComponent } from '../ContactUS/ContactUS';
import { MakePaymentSetting } from '../MakePayment/MakePayment';
import { Authorization, EditCustomerDialog, AddCustomerDialog } from '../Authorization/Authorization';
import { ErrorMessages, AddErrorMessageDialog } from '../ErrorMessage/ErrorMessage';
import { ViewProducts, EditProductDialog, ViewProductDialog, AddAdditionalProduct, AddRemoveTdspDialog, AddRemovePromoCodeDialog, AddNewProductDialog } from '../Products/products.component';
import { ViewTos, AddTosDialog, EditTosDialog } from '../Tos/tos';
import { ViewHolidays, AddHolidayDialog, EditHolidayDialog } from '../HolidayManagement/holiday';
import { ViewPromo, AddPromoDialog, EditPromoDialog } from '../Promo/promo';
import { ViewSessions } from '../Session/session';
import { AdminHeader } from '../AdminHeader/AdminHeader';
import { Drawer } from '../Drawer/Drawer';
import { AccountpaymentComponent } from '../Promotions/accountpayment/accountpayment.component';
import { QuickpaymentComponent } from '../Promotions/quickpayment/quickpayment.component';
import { PaymentDetailsModal } from '../Modals/PaymentModal/PaymentModal';
import { DeleteAccountModal } from '../Modals/DeleteAccount/DeleteAccount';
import { ViewCustomerDetails } from '../Modals/ViewCustomerDetails/ViewCustomerDetails';
import { CustomerPortfolioDialogComponent } from '../Customers/customer-portfolio-dialog/customer-portfolio-dialog.component';
import { CustomerPortfolioPaymentComponent } from '../Customers/customer-portfolio-payment/customer-portfolio-payment.component';
import { CustomersService } from '../../Store/customers';
import { ChangePasswordFromAdminComponent } from '../Customers/change-password-from-admin/change-password-from-admin.component';

@NgModule({
    imports: [
        CommonModule,
        AdminDashboardRoutingModule,
        MaterialModule,
        SharedModule
    ],
    exports: [SharedModule],
    declarations: [
        DashboardLayout,
        DashboardAdminPortal,
        CustomersOnAdminPotal,
        Promotions,
        AllOffers,
        CronTasks,
        ContactUSComponent,
        MakePaymentSetting,
        Authorization,
        ErrorMessages,
        ViewTos,
        ViewHolidays,
        ViewPromo,
        ViewSessions,
        ViewProducts,
        AdminHeader,
        Drawer,
        UnenrolledCustomer,
        AccountpaymentComponent,
        QuickpaymentComponent,
        ContactUssComponent,
        EditCustomerDialog,
        AddCustomerDialog,
        PaymentDetailsModal,
        DeleteAccountModal,
        EditProductDialog,
        ViewProductDialog,
        AddAdditionalProduct,
        AddRemoveTdspDialog,
        AddTosDialog,
        EditTosDialog,
        AddPromoDialog,
        EditPromoDialog,
        AddRemovePromoCodeDialog,
        AddNewProductDialog,
        ViewImageDialog,
        ChangeImageDialog,
        TestEmailDialog,
        AddHolidayDialog,
        EditHolidayDialog,
        AddErrorMessageDialog,
        SessionExpiryDialog,
        LinkAccountDialog,
        AddAdvDialog,
        AddM2mDialog,
        EditM2mDialog,
        EditAdvDialog,
        ViewCustomerDetails,
        ChangeScheduleDialog,
        CreateOffer,
        ChangeExpiryDialog,
        AttachOfferDialog,
        SendOfferDialog,
        ViewOfferDialog,
        ViewDetails,
        CustomerPortfolioDialogComponent,
        CustomerPortfolioPaymentComponent,
        SignInLogsCustomer,
        EditTdspRatesDialog,
        ChangePasswordFromAdminComponent
    ],
    providers: [
        CustomersService,
    ],
    entryComponents: [
        EditCustomerDialog,
        AddCustomerDialog,
        PaymentDetailsModal,
        DeleteAccountModal,
        EditProductDialog,
        ViewProductDialog,
        AddAdditionalProduct,
        AddRemoveTdspDialog,
        AddTosDialog,
        EditTosDialog,
        AddPromoDialog,
        EditPromoDialog,
        AddRemovePromoCodeDialog,
        AddNewProductDialog,
        ViewImageDialog,
        ChangeImageDialog,
        TestEmailDialog,
        AddHolidayDialog,
        EditHolidayDialog,
        AddErrorMessageDialog,
        SessionExpiryDialog,
        LinkAccountDialog,
        AddAdvDialog,
        AddM2mDialog,
        EditM2mDialog,
        EditAdvDialog,
        ViewCustomerDetails,
        ChangeScheduleDialog,
        CreateOffer,
        ChangeExpiryDialog,
        AttachOfferDialog,
        SendOfferDialog,
        ViewOfferDialog,
        ViewDetails,
        CustomerPortfolioDialogComponent,
        EditTdspRatesDialog,
        ChangePasswordFromAdminComponent
    ]
})
export class AdminDashboardModule { }