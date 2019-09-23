webpackJsonp(["ourlif.module"],{

/***/ "./src/app/ourlif/ourlif-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurlifRoutingModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["_3" /* TexasTipsComponent */]
    },
    {
        path: 'energy-saving-recipe-national-hot-dog-day',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["l" /* EnergySavingRecipeComponent */]
    },
    {
        path: 'best-texas-caviar-recipe',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["f" /* CavierRecipeComponent */]
    },
    {
        path: 'ode-texas-fathers',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["O" /* OdeTexasFatherComponent */]
    },
    {
        path: 'texas-thunderstorm-safety-tips',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["_2" /* TexasThunderstormComponent */]
    },
    {
        path: 'nfl-sweepstakes',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["I" /* NFLSweepstakesComponent */]
    },
];
var OurlifRoutingModule = /** @class */ (function () {
    function OurlifRoutingModule() {
    }
    OurlifRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], OurlifRoutingModule);
    return OurlifRoutingModule;
}());



/***/ }),

/***/ "./src/app/ourlif/ourlif.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurlifModule", function() { return OurlifModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ourlif_routing_module__ = __webpack_require__("./src/app/ourlif/ourlif-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__ = __webpack_require__("./src/app/Container/ourlife/ourlife.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OurlifModule = /** @class */ (function () {
    function OurlifModule() {
    }
    OurlifModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ourlif_routing_module__["a" /* OurlifRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["_3" /* TexasTipsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["_2" /* TexasThunderstormComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["O" /* OdeTexasFatherComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["l" /* EnergySavingRecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["I" /* NFLSweepstakesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["f" /* CavierRecipeComponent */],
            ]
        })
    ], OurlifModule);
    return OurlifModule;
}());



/***/ })

});
//# sourceMappingURL=ourlif.module.chunk.js.map