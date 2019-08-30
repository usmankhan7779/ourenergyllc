import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnergyRoutingModule } from './energy-routing.module';
import {
  EnergyLaunchesComponent,
  LowEnergyComponent,
  TexasEnergyComponent,
  GreenEnergyComponent,
  TexasNoBakeComponent,
  TopFiveLEDComponent,
  SummerEnergyComponent,
  FirstTexasComponent,
  SeaonalSelfieComponent,
  EnjoyYearComponent,
  NoLimitReferComponent,
} from '../Container/ourlife/ourlife.component';
@NgModule({
  imports: [
    CommonModule,
    EnergyRoutingModule
  ],
  declarations: [
  EnergyLaunchesComponent,
  LowEnergyComponent,
  TexasEnergyComponent,
  GreenEnergyComponent,
  TexasNoBakeComponent,
  TopFiveLEDComponent,
  SummerEnergyComponent,
  FirstTexasComponent,
  SeaonalSelfieComponent,
  EnjoyYearComponent,
  NoLimitReferComponent,
  ]
})
export class EnergyModule { }
