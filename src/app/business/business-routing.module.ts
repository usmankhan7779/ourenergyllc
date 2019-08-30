import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  FirstDoubleTroubleComponent,
  OurEnergyBuzzComponent,
  EnergyTipsComponent,
  SpecialContestComponent,
  TexasNewsComponent,
  ResidentialPromotionsComponent,
  OurCommuntiyComponent,
  EnergyNewsComponent,
  BusinessPromotionsComponent
} from '../Container/ourlife/ourlife.component';
const routes: Routes = [
  
  {
    path: '',
    component: FirstDoubleTroubleComponent,
  },
  {
    path: 'our-energy-buzz',
    component: OurEnergyBuzzComponent,
  },
  {
    path: 'specials-contests',
    component: SpecialContestComponent,
  },
  {
    path: 'residential-promotions',
    component: ResidentialPromotionsComponent,
  },
  {
    path: 'texas',
    component: TexasNewsComponent,
  },
  {
    path: 'energy-tips',
    component: EnergyTipsComponent,
  },
  {
    path: 'business-promotions',
    component: BusinessPromotionsComponent,
  },
  {
    path: 'energy-news',
    component: EnergyNewsComponent,
  },
  {
    path: 'our-community',
    component: OurCommuntiyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
