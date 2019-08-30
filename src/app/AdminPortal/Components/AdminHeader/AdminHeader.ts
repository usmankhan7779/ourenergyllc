import { Component, OnInit } from '@angular/core';
import { AdminRoutes } from '../../Utility';
import { Router } from '@angular/router';

@Component({
    selector: 'adminheader',
    templateUrl: './AdminHeader.html',
    styleUrls: ['../../Styles/AdminHeader.scss']
})
export class AdminHeader implements OnInit {
    constructor(private router: Router) { }
    title = 'Its work'
    ind
    role
    theme = ['Theme', 'Theme1', 'Theme2', 'Theme3']

    Palette(index) {
        this.ind = index
        let Color = this.theme[index];
    }
    routes;
    ngOnInit() {
        this.routes = AdminRoutes
    }
    signOut() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    myFunction = function () {
        window.scrollTo(0, 0)
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
}
