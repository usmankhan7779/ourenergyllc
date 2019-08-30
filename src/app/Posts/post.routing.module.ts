import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    December2015,
    November2015,
    September2015,
    August2015,
    July2015,
    Post17
} from '../Container/ourlife/ourlife.component'
const routes: Routes = [
    {
        path: '',
        component: December2015,
    },
    {
        path: '2015/11',
        component: November2015,
    },
    {
        path: '2015/09',
        component: September2015,
    },
    {
        path: '2015/08',
        component: August2015,
    },
    {
        path: '2015/07',
        component: July2015,
    },
    {
        path:'2017',
        component:Post17
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }
