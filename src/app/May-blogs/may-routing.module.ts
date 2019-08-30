import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    January2017,
    May2017,
    January2016,
    February2016,
    March2016,
    April2016,
    June2016,
    July2016,
    August2016,
    November2016 ,
    October2015
} from '../Container/ourlife/ourlife.component';
const routes: Routes = [
      {
        path: '',
        component: January2017
      },
      {
        path: '2017/05',
        component: May2017
      },
      {
        path: '2016/01',
        component: January2016
      },
      {
        path: '2016/02',
        component: February2016
      },
      {
        path: '2016/03',
        component: March2016
      },
      {
        path: '2016/04',
        component: April2016
      },
      {
        path: '2016/06',
        component: June2016
      },
      {
        path: '2016/07',
        component:  July2016
      },
      {
        path: '2016/08',
        component: August2016
      },
      {
        path: '2016/11',
        component: November2016
      },
      {
        path: '2015/10',
        component: October2015
      },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayBlogsModule { }
