import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
const routes: Routes = [
      {
        path: '',
        component: EnjoyYearComponent
      },
      {
        path: 'find-low-energy-rates-in-2016',
        component: LowEnergyComponent
      },
      {
        path: 'putting-texas-energy-into-social-media',
        component: TexasEnergyComponent
      },
      {
        path: 'our-energy-launches-new-website',
        component: EnergyLaunchesComponent
      },
      {
        path: 'texas-no-bake-maple-pecan-pie-bourbon-spiked-cream',
        component: TexasNoBakeComponent
      },
      {
        path: 'green-electricity-for-a-brighter-future',
        component: GreenEnergyComponent
      },
      {
        path: 'top-five-creative-uses-of-led',
        component: TopFiveLEDComponent
      },
      {
        path: 'summer-energy-saving-tips',
        component: SummerEnergyComponent
      },
      {
        path: 'first-texas-electricity-outreach-project',
        component: FirstTexasComponent
      },
      {
        path: 'seasonal-selfie-of-the-week-freebie-giveaway',
        component: SeaonalSelfieComponent
      },
      {
        path: 'no-limit-refer-a-friend',
        component: NoLimitReferComponent
      },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnergyRoutingModule { }
