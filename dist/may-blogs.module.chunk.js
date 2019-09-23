webpackJsonp(["may-blogs.module"],{

/***/ "./src/app/May-blogs/may-blogs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MayBlogModule", function() { return MayBlogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__may_routing_module__ = __webpack_require__("./src/app/May-blogs/may-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__ = __webpack_require__("./src/app/Container/ourlife/ourlife.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MayBlogModule = /** @class */ (function () {
    function MayBlogModule() {
    }
    MayBlogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__may_routing_module__["a" /* MayBlogsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["x" /* January2017 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["E" /* May2017 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["w" /* January2016 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["o" /* February2016 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["C" /* March2016 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["b" /* April2016 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["A" /* June2016 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["z" /* July2016 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["d" /* August2016 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["M" /* November2016 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["N" /* October2015 */]
            ]
        })
    ], MayBlogModule);
    return MayBlogModule;
}());



/***/ }),

/***/ "./src/app/May-blogs/may-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MayBlogsModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["x" /* January2017 */]
    },
    {
        path: '2017/05',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["E" /* May2017 */]
    },
    {
        path: '2016/01',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["w" /* January2016 */]
    },
    {
        path: '2016/02',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["o" /* February2016 */]
    },
    {
        path: '2016/03',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["C" /* March2016 */]
    },
    {
        path: '2016/04',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["b" /* April2016 */]
    },
    {
        path: '2016/06',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["A" /* June2016 */]
    },
    {
        path: '2016/07',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["z" /* July2016 */]
    },
    {
        path: '2016/08',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["d" /* August2016 */]
    },
    {
        path: '2016/11',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["M" /* November2016 */]
    },
    {
        path: '2015/10',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["N" /* October2015 */]
    },
];
var MayBlogsModule = /** @class */ (function () {
    function MayBlogsModule() {
    }
    MayBlogsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], MayBlogsModule);
    return MayBlogsModule;
}());



/***/ })

});
//# sourceMappingURL=may-blogs.module.chunk.js.map