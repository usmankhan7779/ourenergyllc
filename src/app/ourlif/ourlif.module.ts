import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { OurlifRoutingModule } from './ourlif-routing.module';
import {
  TexasTipsComponent,
  TexasThunderstormComponent,
  OdeTexasFatherComponent,
  EnergySavingRecipeComponent,
  NFLSweepstakesComponent,
  CavierRecipeComponent,
} from '../Container/ourlife/ourlife.component';

@NgModule({
  imports: [
    CommonModule,
    OurlifRoutingModule
  ],
  declarations: [
    TexasTipsComponent,
    TexasThunderstormComponent,
    OdeTexasFatherComponent,
    EnergySavingRecipeComponent,
    NFLSweepstakesComponent,
    CavierRecipeComponent,
  ]
})
export class OurlifModule { }
