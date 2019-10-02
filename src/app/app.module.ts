import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './material.module'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HomeComponent } from './home/home.component'
import { LoginComponent, RegisterComponent, QuickPayComponent, QuickPayComponentFinal } from './login/login.component'
import { FlexLayoutModule } from "@angular/flex-layout"
import { HttpClientModule } from '@angular/common/http'
import { AlwaysAuthService, UserService, AdminService, OnlyLoggedInUsersGuard, OnlyLoggedOutUsersGuard, OnlyLoggedInUsersGuardAdmin } from './always-auth.service'
import { WebSocketService } from 'angular2-websocket-service'
import { ForgetPasswordComponent, ResetPasswordComponent } from './forget-password/forget-password.component'
import { MainFooterComponent } from './main-footer/main-footer.component'
import { MainHeaderComponent } from './main-header/main-header.component'
import { EnrollmentComponent, DespositPopup, EnrollmentConsentDialog } from './enrollment/enrollment.component'
import { MainComponent, AboutUsComponent, PrivacyPolicyComponent, ResidentialsComponent, CommercialComponent, PlansComponent, SpecialsComponent, TermConditionComponent, BrokersComponent, EnergySavingComponent, PlanSearchComponent, EnrollProcessComponent, OurCommunityComponent, HelpComponent, EstablishContractsComponent } from './Container/main/main.component'
import { BusinessRateComponent } from './Container/business-rate-electricity/business-rate.component'
import { BrokerLoginComponent } from './broker-login/broker-login.component'
import { DahsboardService } from './AdminPortal/Store'

// import * as Sentry from "@sentry/browser"
import { RecapchaComponent } from './recapcha/recapcha.component'
import { RecapchaService } from './recapcha/recapcha.service'
import { EnrollmentSuccessPageComponent } from './enrollment-success-page/enrollment-success-page.component'
import { MainService, PromoCodeService, EnrollmentService, QuickBillService, NotificationService, ChangePersonelInfoServices } from './Container/Store/Services'
import { SharedModule } from './shared.module';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { PayEnrollDepositComponent } from './pay-enroll-deposit/pay-enroll-deposit';
import { VerificationEmailComponent } from './login/verification-email/verification-email.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { SingleBlogViewComponent } from './single-blog-view/single-blog-view.component';
// Sentry.init({
//   dsn: "https://e06be21554224e8a8e46fa0743ed7d76@sentry.io/1329724"
// }) 

// @Injectable()
// export class SentryErrorHandler implements ErrorHandler {
//   constructor() { }
//   handleError(error) {
//     Sentry.captureException(error.originalError || error) 
//     throw error 
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForgetPasswordComponent,
    MainFooterComponent,
    MainHeaderComponent,
    TermConditionComponent,
    PrivacyPolicyComponent,
    MainComponent,
    ResidentialsComponent,
    CommercialComponent,
    AboutUsComponent,
    BrokersComponent,
    SpecialsComponent,
    EnergySavingComponent,
    EstablishContractsComponent,
    PlansComponent,
    HelpComponent,
    EnrollmentComponent,
    EnrollmentSuccessPageComponent,
    PayEnrollDepositComponent,
    DespositPopup,
    PlanSearchComponent,
    EnrollProcessComponent,
    OurCommunityComponent,
    RegisterComponent,
    ResetPasswordComponent,
    QuickPayComponent,
    QuickPayComponentFinal,
    BrokerLoginComponent,
    BusinessRateComponent,
    RecapchaComponent,
    EnrollmentConsentDialog,
    VerificationEmailComponent,
    ViewBlogComponent,
    SingleBlogViewComponent,
    
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    HttpModule,
  ],
  exports: [
    SharedModule
  ],
  entryComponents: [
    ForgetPasswordComponent,
    QuickPayComponent,
    QuickPayComponentFinal,
    DespositPopup,
    EnrollmentConsentDialog,
    VerificationEmailComponent
  ],
  providers: [
    // { provide: ErrorHandler, useClass: SentryErrorHandler },
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
    DahsboardService,
    AlwaysAuthService,
    UserService,
    OnlyLoggedInUsersGuard,
    OnlyLoggedOutUsersGuard,
    OnlyLoggedInUsersGuardAdmin,
    WebSocketService,
    MainService,
    PromoCodeService,
    EnrollmentService,
    QuickBillService,
    NotificationService,
    ChangePersonelInfoServices,
    AdminService,
    RecapchaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }