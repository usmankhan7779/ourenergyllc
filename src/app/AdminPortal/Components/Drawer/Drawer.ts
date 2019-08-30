import { Component, OnInit } from '@angular/core';
import { AdminRoutes } from '../../Utility';
import { Router } from '@angular/router';

@Component({
    selector: 'drawer',
    templateUrl: './Drawer.html',
    styleUrls: ['../../Styles/Drawer.scss']
})
export class Drawer implements OnInit {
    routes;
    constructor(private router: Router) { }
    ngOnInit() {
        this.routes = AdminRoutes
    }
    signOut() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
