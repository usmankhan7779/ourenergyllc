webpackJsonp(["texas.module"],{

/***/ "./src/app/texas/texas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TexasRoutingModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["F" /* MoreThanCompanyComponent */]
    },
    {
        path: 'moving-to-texas',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["H" /* MovingToTexasComponent */]
    },
    {
        path: 'cheap-texas-energy-round-up',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["g" /* CheapTexasComponent */]
    },
    {
        path: 'more-than-just-energy-companies-in-houston',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["G" /* MoreThanEnergyComponent */]
    },
    {
        path: 'december-nfl-ticket-raffle-winners',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["i" /* DecemberNFLComponent */]
    },
    {
        path: 'march-madness-part',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["D" /* MarchMadnessComponent */]
    },
    {
        path: 'february-share-the-love-raffle',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["p" /* FebruaryShareComponent */]
    },
    {
        path: 'nfl-tickets-raffle',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["J" /* NFLTicketsComponent */]
    },
    {
        path: 'first-nfl-sweepstakes-winners',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["r" /* FirstNFLSweepKeepersComponent */]
    },
    {
        path: 'green-energy',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["a" /* AboutGreenComponent */]
    },
    {
        path: 'green-energy-news',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["v" /* GreenEnergyNewsComponent */]
    },
];
var TexasRoutingModule = /** @class */ (function () {
    function TexasRoutingModule() {
    }
    TexasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], TexasRoutingModule);
    return TexasRoutingModule;
}());



/***/ }),

/***/ "./src/app/texas/texas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TexasModule", function() { return TexasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__texas_routing_module__ = __webpack_require__("./src/app/texas/texas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__ = __webpack_require__("./src/app/Container/ourlife/ourlife.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TexasModule = /** @class */ (function () {
    function TexasModule() {
    }
    TexasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__texas_routing_module__["a" /* TexasRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["F" /* MoreThanCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["G" /* MoreThanEnergyComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["g" /* CheapTexasComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["H" /* MovingToTexasComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["J" /* NFLTicketsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["i" /* DecemberNFLComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["p" /* FebruaryShareComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["D" /* MarchMadnessComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["r" /* FirstNFLSweepKeepersComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["a" /* AboutGreenComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["v" /* GreenEnergyNewsComponent */],
            ]
        })
    ], TexasModule);
    return TexasModule;
}());



/***/ })

});
//# sourceMappingURL=texas.module.chunk.js.map