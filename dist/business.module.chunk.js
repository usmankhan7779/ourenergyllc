webpackJsonp(["business.module"],{

/***/ "./src/app/business/business-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__ = __webpack_require__("./src/app/Container/ourlife/ourlife.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["q" /* FirstDoubleTroubleComponent */],
    },
    {
        path: 'our-energy-buzz',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["Q" /* OurEnergyBuzzComponent */],
    },
    {
        path: 'specials-contests',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["W" /* SpecialContestComponent */],
    },
    {
        path: 'residential-promotions',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["T" /* ResidentialPromotionsComponent */],
    },
    {
        path: 'texas',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["_0" /* TexasNewsComponent */],
    },
    {
        path: 'energy-tips',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["m" /* EnergyTipsComponent */],
    },
    {
        path: 'business-promotions',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["e" /* BusinessPromotionsComponent */],
    },
    {
        path: 'energy-news',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["k" /* EnergyNewsComponent */],
    },
    {
        path: 'our-community',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["P" /* OurCommuntiyComponent */],
    }
];
var BusinessRoutingModule = /** @class */ (function () {
    function BusinessRoutingModule() {
    }
    BusinessRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], BusinessRoutingModule);
    return BusinessRoutingModule;
}());



/***/ }),

/***/ "./src/app/business/business.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessModule", function() { return BusinessModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_routing_module__ = __webpack_require__("./src/app/business/business-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__ = __webpack_require__("./src/app/Container/ourlife/ourlife.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BusinessModule = /** @class */ (function () {
    function BusinessModule() {
    }
    BusinessModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__business_routing_module__["a" /* BusinessRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["q" /* FirstDoubleTroubleComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["Q" /* OurEnergyBuzzComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["m" /* EnergyTipsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["W" /* SpecialContestComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["_0" /* TexasNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["T" /* ResidentialPromotionsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["P" /* OurCommuntiyComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["k" /* EnergyNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["e" /* BusinessPromotionsComponent */]
            ]
        })
    ], BusinessModule);
    return BusinessModule;
}());



/***/ })

});
//# sourceMappingURL=business.module.chunk.js.map