import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayBlogsModule } from './may-routing.module';
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
@NgModule({
  imports: [
    CommonModule,
    MayBlogsModule
  ],
  declarations: [
    January2017,
    May2017,
    January2016,
    February2016,
    March2016,
    April2016,
    June2016,
    July2016,
    August2016,
    November2016,
    October2015  ]
})
export class MayBlogModule { }
