import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: MoreThanCompanyComponent
  },
  {
    path: 'moving-to-texas',
    component: MovingToTexasComponent
  },
  {
    path: 'cheap-texas-energy-round-up',
    component: CheapTexasComponent
  },
  {
    path: 'more-than-just-energy-companies-in-houston',
    component: MoreThanEnergyComponent
  },
  {
    path: 'december-nfl-ticket-raffle-winners',
    component: DecemberNFLComponent
  },
  {
    path: 'march-madness-part',
    component: MarchMadnessComponent
  },
  {
    path: 'february-share-the-love-raffle',
    component: FebruaryShareComponent
  },
  {
    path: 'nfl-tickets-raffle',
    component: NFLTicketsComponent
  },
  {
    path: 'first-nfl-sweepstakes-winners',
    component: FirstNFLSweepKeepersComponent
  },
  {
    path: 'green-energy',
    component: AboutGreenComponent
  },
  {
    path: 'green-energy-news',
    component: GreenEnergyNewsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TexasRoutingModule { }
