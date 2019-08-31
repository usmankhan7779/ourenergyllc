import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent, RegisterComponent } from './login/login.component';
import { OnlyLoggedInUsersGuard, OnlyLoggedOutUsersGuard, OnlyLoggedInUsersGuardAdmin } from './always-auth.service';
import { ResetPasswordComponent } from './forget-password/forget-password.component';
import { BrokerLoginComponent } from './broker-login/broker-login.component';
import { MainComponent, AboutUsComponent, PrivacyPolicyComponent, ResidentialsComponent, CommercialComponent, PlansComponent, SpecialsComponent, TermConditionComponent, BrokersComponent, EnergySavingComponent, PlanSearchComponent, EnrollProcessComponent, OurCommunityComponent, HelpComponent, EstablishContractsComponent } from './Container/main/main.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { BusinessRateComponent } from './Container/business-rate-electricity/business-rate.component';
import { EnrollmentSuccessPageComponent } from './enrollment-success-page/enrollment-success-page.component';
import { PayEnrollDepositComponent } from './pay-enroll-deposit/pay-enroll-deposit';

const routes: Routes = [
  {
    path: 'adminportal',
    loadChildren: './AdminPortal/Components/DashboardLayout/Admin-Dashboard.module#AdminDashboardModule',
    canActivate: [OnlyLoggedInUsersGuardAdmin],
  },
  {
    path: 'dashboard',
    loadChildren: './Container/Customer-Dashboard/dashboard/dashboard.module#DashboardModule',
    canActivate: [OnlyLoggedInUsersGuard],
  },
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'payenrolldeposit/:custid', component: PayEnrollDepositComponent },
      { path: 'login', component: LoginComponent, canActivate: [OnlyLoggedOutUsersGuard] },
      { path: 'register', component: RegisterComponent, canActivate: [OnlyLoggedOutUsersGuard] },
      { path: 'broker', component: BrokersComponent },
      { path: 'commercial', component: CommercialComponent },
      { path: 'residential', component: ResidentialsComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: EstablishContractsComponent },
      { path: 'term-and-conditions', component: TermConditionComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'special', component: SpecialsComponent },
      { path: 'energy-saving', component: EnergySavingComponent },
      { path: 'plan', component: PlansComponent },
      { path: 'help', component: HelpComponent },
      { path: 'help/:tabNo', component: HelpComponent },
      { path: 'community', component: OurCommunityComponent },
      { path: 'reset-password/:username/:email', component: ResetPasswordComponent },
      { path: 'business-rates-electricity', component: BusinessRateComponent },
      { path: 'ourlife', loadChildren: 'app/Container/ourlife/ourlife.module#OurlifeModule' },
      { path: 'free-mothers-day-spa-treatment-raffle-valued-at-300', loadChildren: 'app/Container/ourlife/ourlife.module#OurlifeModule' },
      { path: 'texas-new-years-sound-advice-for-2017', loadChildren: 'app/Container/ourlife/ourlife.module#OurlifeModule' },
      { path: 'best-thanksgiving-cranberry-chutney-recipe', loadChildren: 'app/Container/ourlife/ourlife.module#OurlifeModule' },
      { path: 'home-weatherproofing-tips', loadChildren: 'app/Container/ourlife/ourlife.module#OurlifeModule' },
      { path: 'ourlif', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
      { path: 'energy-saving-recipe-national-hot-dog-day', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
      { path: 'best-texas-caviar-recipe', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
      { path: 'ode-texas-fathers', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
      { path: 'texas-thunderstorm-safety-tips', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
      { path: 'nfl-sweepstakes', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
      { path: 'blog', loadChildren: 'app/energy/energy.module#EnergyModule' },
      { path: 'find-low-energy-rates-in-2016', loadChildren: 'app/energy/energy.module#EnergyModule' },
      { path: 'putting-texas-energy-into-social-media', loadChildren: 'app/energy/energy.module#EnergyModule' },
      { path: 'our-energy-launches-new-website', loadChildren: 'app/energy/energy.module#EnergyModule' },
      { path: 'texas-no-bake-maple-pecan-pie-bourbon-spiked-cream', loadChildren: 'app/energy/energy.module#EnergyModule' },
      { path: 'green-electricity-for-a-brighter-future', loadChildren: 'app/energy/energy.module#EnergyModule' },
      { path: 'top-five-creative-uses-of-led', loadChildren: 'app/energy/energy.module#EnergyModule' },
      { path: 'summer-energy-saving-tips', loadChildren: 'app/energy/energy.module#EnergyModule' },
      { path: 'first-texas-electricity-outreach-project', loadChildren: 'app/energy/energy.module#EnergyModule' },
      { path: 'seasonal-selfie-of-the-week-freebie-giveaway', loadChildren: 'app/energy/energy.module#EnergyModule' },
      { path: 'no-limit-refer-a-friend', loadChildren: 'app/energy/energy.module#EnergyModule' },
      { path: 'more-than-just-energy-companies-in-fort-worth', loadChildren: 'app/texas/texas.module#TexasModule' },
      { path: 'Our-blogs', loadChildren: 'app/texas/texas.module#TexasModule' },
      { path: 'cheap-texas-energy-round-up', loadChildren: 'app/texas/texas.module#TexasModule' },
      { path: 'more-than-just-energy-companies-in-houston', loadChildren: 'app/texas/texas.module#TexasModule' },
      { path: 'december-nfl-ticket-raffle-winners', loadChildren: 'app/texas/texas.module#TexasModule' },
      { path: 'march-madness-part', loadChildren: 'app/texas/texas.module#TexasModule' },
      { path: 'february-share-the-love-raffle', loadChildren: 'app/texas/texas.module#TexasModule' },
      { path: 'nfl-tickets-raffle', loadChildren: 'app/texas/texas.module#TexasModule' },
      { path: 'first-nfl-sweepstakes-winners', loadChildren: 'app/texas/texas.module#TexasModule' },
      { path: 'green-energy', loadChildren: 'app/texas/texas.module#TexasModule' },
      { path: 'green-energy-news', loadChildren: 'app/texas/texas.module#TexasModule' },
      { path: 'blogs', loadChildren: 'app/business/business.module#BusinessModule' },
      { path: 'our-energy-buzz', loadChildren: 'app/business/business.module#BusinessModule' },
      { path: 'specials-contests', loadChildren: 'app/business/business.module#BusinessModule' },
      { path: 'residential-promotions', loadChildren: 'app/business/business.module#BusinessModule' },
      { path: 'texas', loadChildren: 'app/business/business.module#BusinessModule' },
      { path: 'energy-tips', loadChildren: 'app/business/business.module#BusinessModule' },
      { path: 'business-promotions', loadChildren: 'app/business/business.module#BusinessModule' },
      { path: 'energy-news', loadChildren: 'app/business/business.module#BusinessModule' },
      { path: 'our-community', loadChildren: 'app/business/business.module#BusinessModule' },
      { path: 'posts', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
      { path: '2017/05', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
      { path: '2016/01', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
      { path: '2016/02', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
      { path: '2016/03', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
      { path: '2016/04', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
      { path: '2016/06', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
      { path: '2016/07', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
      { path: '2016/08', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
      { path: '2016/11', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
      { path: '2015/10', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
      { path: 'post', loadChildren: 'app/Posts/post.module#PostModule' },
      { path: '2015/11', loadChildren: 'app/Posts/post.module#PostModule' },
      { path: '2015/09', loadChildren: 'app/Posts/post.module#PostModule' },
      { path: '2015/08', loadChildren: 'app/Posts/post.module#PostModule' },
      { path: '2015/07', loadChildren: 'app/Posts/post.module#PostModule' },
      { path: '2017', loadChildren: 'app/Posts/post.module#PostModule' },
      { path: 'enroll', component: EnrollmentComponent },
      { path: 'enrollsuccess', component: EnrollmentSuccessPageComponent },
      { path: 'search-plann/:PromoCode', component: PlanSearchComponent },
      { path: 'search-plan/:ZipCode', component: PlanSearchComponent },
      { path: 'search-plan/:PromoCode/:ZipCode', component: PlanSearchComponent },
      { path: 'search-plan', component: PlanSearchComponent },
      { path: 'process-enroll', component: EnrollProcessComponent },
      { path: 'broker-login', component: BrokerLoginComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }