import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { OurlifeRoutingModule } from './ourlife-routing.module';
import { MaterialModule } from '../../material.module';
import {
  OurlifeComponent,
  TreatmentRaffleComponent,
  TexasNewYearComponent,
  ThanksGivingComponent,
  WaterProfingComponent,
  FiveMoneyComponent
} from '../../Container/ourlife/ourlife.component';

@NgModule({
  imports: [
    CommonModule,
    OurlifeRoutingModule,
    MaterialModule
  ],
  declarations: [
    OurlifeComponent,
    TreatmentRaffleComponent,
    TexasNewYearComponent,
    ThanksGivingComponent,
    WaterProfingComponent,
    FiveMoneyComponent
     ]
})
export class OurlifeModule { }
