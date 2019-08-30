import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
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
@NgModule({
  imports: [
    CommonModule,
    BusinessRoutingModule
  ],
  declarations: [
    FirstDoubleTroubleComponent,
    OurEnergyBuzzComponent,
    EnergyTipsComponent,
    SpecialContestComponent,
    TexasNewsComponent,
    ResidentialPromotionsComponent,
    OurCommuntiyComponent,
    EnergyNewsComponent,
    BusinessPromotionsComponent]
})
export class BusinessModule { }
