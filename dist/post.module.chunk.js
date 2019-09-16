webpackJsonp(["post.module"],{

/***/ "./src/app/Posts/post.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_routing_module__ = __webpack_require__("./src/app/Posts/post.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__ = __webpack_require__("./src/app/Container/ourlife/ourlife.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostModule = /** @class */ (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__post_routing_module__["a" /* PostRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["h" /* December2015 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["L" /* November2015 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["V" /* September2015 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["c" /* August2015 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["y" /* July2015 */],
                __WEBPACK_IMPORTED_MODULE_3__Container_ourlife_ourlife_component__["S" /* Post17 */]
            ]
        })
    ], PostModule);
    return PostModule;
}());



/***/ }),

/***/ "./src/app/Posts/post.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostRoutingModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["h" /* December2015 */],
    },
    {
        path: '2015/11',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["L" /* November2015 */],
    },
    {
        path: '2015/09',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["V" /* September2015 */],
    },
    {
        path: '2015/08',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["c" /* August2015 */],
    },
    {
        path: '2015/07',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["y" /* July2015 */],
    },
    {
        path: '2017',
        component: __WEBPACK_IMPORTED_MODULE_2__Container_ourlife_ourlife_component__["S" /* Post17 */]
    }
];
var PostRoutingModule = /** @class */ (function () {
    function PostRoutingModule() {
    }
    PostRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], PostRoutingModule);
    return PostRoutingModule;
}());



/***/ })

});
//# sourceMappingURL=post.module.chunk.js.map