webpackJsonp(["energy.module"],{

/***/ "./src/app/energy/energy-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnergyRoutingModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["n" /* EnjoyYearComponent */]
    },
    {
        path: 'find-low-energy-rates-in-2016',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["B" /* LowEnergyComponent */]
    },
    {
        path: 'putting-texas-energy-into-social-media',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["Y" /* TexasEnergyComponent */]
    },
    {
        path: 'our-energy-launches-new-website',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["j" /* EnergyLaunchesComponent */]
    },
    {
        path: 'texas-no-bake-maple-pecan-pie-bourbon-spiked-cream',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["_1" /* TexasNoBakeComponent */]
    },
    {
        path: 'green-electricity-for-a-brighter-future',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["u" /* GreenEnergyComponent */]
    },
    {
        path: 'top-five-creative-uses-of-led',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["_5" /* TopFiveLEDComponent */]
    },
    {
        path: 'summer-energy-saving-tips',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["X" /* SummerEnergyComponent */]
    },
    {
        path: 'first-texas-electricity-outreach-project',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["s" /* FirstTexasComponent */]
    },
    {
        path: 'seasonal-selfie-of-the-week-freebie-giveaway',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["U" /* SeaonalSelfieComponent */]
    },
    {
        path: 'no-limit-refer-a-friend',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["K" /* NoLimitReferComponent */]
    },
];
var EnergyRoutingModule = /** @class */ (function () {
    function EnergyRoutingModule() {
    }
    EnergyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], EnergyRoutingModule);
    return EnergyRoutingModule;
}());



/***/ }),

/***/ "./src/app/energy/energy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnergyModule", function() { return EnergyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__energy_routing_module__ = __webpack_require__("./src/app/energy/energy-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__ = __webpack_require__("./src/app/Container/ourlife/ourlife.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EnergyModule = /** @class */ (function () {
    function EnergyModule() {
    }
    EnergyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__energy_routing_module__["a" /* EnergyRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["j" /* EnergyLaunchesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["B" /* LowEnergyComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["Y" /* TexasEnergyComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["u" /* GreenEnergyComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["_1" /* TexasNoBakeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["_5" /* TopFiveLEDComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["X" /* SummerEnergyComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["s" /* FirstTexasComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["U" /* SeaonalSelfieComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["n" /* EnjoyYearComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["K" /* NoLimitReferComponent */],
            ]
        })
    ], EnergyModule);
    return EnergyModule;
}());



/***/ })

});
//# sourceMappingURL=energy.module.chunk.js.map