import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostRoutingModule} from './post.routing.module';
import{
    December2015,
    November2015,
    September2015,
    August2015,
    July2015,
    Post17
} from '../Container/ourlife/ourlife.component'
@NgModule({
    imports: [
      CommonModule,
      PostRoutingModule,
    ],
    declarations: [
        December2015,
        November2015,
        September2015,
        August2015,
        July2015,
        Post17
    ]
  })
export class PostModule { }