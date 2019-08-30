import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  TexasTipsComponent,
  TexasThunderstormComponent,
  OdeTexasFatherComponent,
  EnergySavingRecipeComponent,
  NFLSweepstakesComponent,
  CavierRecipeComponent,
} from '../Container/ourlife/ourlife.component';

const routes: Routes = [
  {
    path: '',
    component: TexasTipsComponent
  },
  {
    path: 'energy-saving-recipe-national-hot-dog-day',
    component: EnergySavingRecipeComponent
  },
  {
    path: 'best-texas-caviar-recipe',
    component: CavierRecipeComponent
  },
  {
    path: 'ode-texas-fathers',
    component: OdeTexasFatherComponent
  },
  {
    path: 'texas-thunderstorm-safety-tips',
    component: TexasThunderstormComponent
  },
  {
    path: 'nfl-sweepstakes',
    component: NFLSweepstakesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurlifRoutingModule { }
