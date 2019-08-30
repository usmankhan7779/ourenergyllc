import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  OurlifeComponent,
  TreatmentRaffleComponent,
  TexasNewYearComponent,
  ThanksGivingComponent,
  WaterProfingComponent,
  FiveMoneyComponent
} from '../../Container/ourlife/ourlife.component';

const routes: Routes = [
  {
    path: '',
    component: OurlifeComponent,
  },
  { path:'five-money-saving',
    component:FiveMoneyComponent
  },
  {
    path: 'free-mothers-day-spa-treatment-raffle-valued-at-300',
    component: TreatmentRaffleComponent
  },
  {
    path: 'texas-new-years-sound-advice-for-2017',
    component: TexasNewYearComponent
  },
  {
    path: 'best-thanksgiving-cranberry-chutney-recipe',
    component: ThanksGivingComponent
  },
  {
    path: 'home-weatherproofing-tips',
    component: WaterProfingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurlifeRoutingModule { }
