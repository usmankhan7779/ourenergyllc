import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TexasRoutingModule } from './texas-routing.module';
import {
  MoreThanCompanyComponent,
  MoreThanEnergyComponent,
  CheapTexasComponent,
  MovingToTexasComponent,
  NFLTicketsComponent,
  DecemberNFLComponent,
  FebruaryShareComponent,
  MarchMadnessComponent,
  FirstNFLSweepKeepersComponent,
  AboutGreenComponent,
  GreenEnergyNewsComponent,
} from '../Container/ourlife/ourlife.component';

@NgModule({
  imports: [
    CommonModule,
    TexasRoutingModule
  ],
  declarations: [
  MoreThanCompanyComponent,
  MoreThanEnergyComponent,
  CheapTexasComponent,
  MovingToTexasComponent,
  NFLTicketsComponent,
  DecemberNFLComponent,
  FebruaryShareComponent,
  MarchMadnessComponent,
  FirstNFLSweepKeepersComponent,
  AboutGreenComponent,
  GreenEnergyNewsComponent,
  ]
})
export class TexasModule { }
