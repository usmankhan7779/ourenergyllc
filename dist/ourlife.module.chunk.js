webpackJsonp(["ourlife.module"],{

/***/ "./src/app/Container/ourlife/ourlife-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurlifeRoutingModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["R" /* OurlifeComponent */],
    },
    { path: 'five-money-saving',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["t" /* FiveMoneyComponent */]
    },
    {
        path: 'free-mothers-day-spa-treatment-raffle-valued-at-300',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["_6" /* TreatmentRaffleComponent */]
    },
    {
        path: 'texas-new-years-sound-advice-for-2017',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["Z" /* TexasNewYearComponent */]
    },
    {
        path: 'best-thanksgiving-cranberry-chutney-recipe',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["_4" /* ThanksGivingComponent */]
    },
    {
        path: 'home-weatherproofing-tips',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["_7" /* WaterProfingComponent */]
    }
];
var OurlifeRoutingModule = /** @class */ (function () {
    function OurlifeRoutingModule() {
    }
    OurlifeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], OurlifeRoutingModule);
    return OurlifeRoutingModule;
}());



/***/ }),

/***/ "./src/app/Container/ourlife/ourlife.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurlifeModule", function() { return OurlifeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ourlife_routing_module__ = __webpack_require__("./src/app/Container/ourlife/ourlife-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Container_ourlife_ourlife_component__ = __webpack_require__("./src/app/Container/ourlife/ourlife.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OurlifeModule = /** @class */ (function () {
    function OurlifeModule() {
    }
    OurlifeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ourlife_routing_module__["a" /* OurlifeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__Container_ourlife_ourlife_component__["R" /* OurlifeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__Container_ourlife_ourlife_component__["_6" /* TreatmentRaffleComponent */],
                __WEBPACK_IMPORTED_MODULE_4__Container_ourlife_ourlife_component__["Z" /* TexasNewYearComponent */],
                __WEBPACK_IMPORTED_MODULE_4__Container_ourlife_ourlife_component__["_4" /* ThanksGivingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__Container_ourlife_ourlife_component__["_7" /* WaterProfingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__Container_ourlife_ourlife_component__["t" /* FiveMoneyComponent */]
            ]
        })
    ], OurlifeModule);
    return OurlifeModule;
}());



/***/ })

});
//# sourceMappingURL=ourlife.module.chunk.js.map