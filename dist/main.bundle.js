webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AdminPortal/Components/DashboardLayout/Admin-Dashboard.module": [
		"./src/app/AdminPortal/Components/DashboardLayout/Admin-Dashboard.module.ts",
		"Admin-Dashboard.module",
		"common"
	],
	"./Container/Customer-Dashboard/dashboard/dashboard.module": [
		"./src/app/Container/Customer-Dashboard/dashboard/dashboard.module.ts",
		"dashboard.module",
		"common"
	],
	"app/Container/ourlife/ourlife.module": [
		"./src/app/Container/ourlife/ourlife.module.ts",
		"common",
		"ourlife.module"
	],
	"app/May-blogs/may-blogs.module": [
		"./src/app/May-blogs/may-blogs.module.ts",
		"common",
		"may-blogs.module"
	],
	"app/Posts/post.module": [
		"./src/app/Posts/post.module.ts",
		"common",
		"post.module"
	],
	"app/business/business.module": [
		"./src/app/business/business.module.ts",
		"common",
		"business.module"
	],
	"app/energy/energy.module": [
		"./src/app/energy/energy.module.ts",
		"common",
		"energy.module"
	],
	"app/ourlif/ourlif.module": [
		"./src/app/ourlif/ourlif.module.ts",
		"common",
		"ourlif.module"
	],
	"app/texas/texas.module": [
		"./src/app/texas/texas.module.ts",
		"common",
		"texas.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/AdminPortal/Store/customers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomersService = /** @class */ (function () {
    function CustomersService(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
    }
    CustomersService.prototype.completeChecker = function (value) {
        return value != null && value != undefined && value != "" ? true : false;
    };
    // Customer
    CustomersService.prototype.getallCustomers = function (q, l, u, s) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/customerslist" + (this.completeChecker(q) ? "-quicksearch/" + q : "") + "/" + l + "/" + u + "/" + (this.completeChecker(s) ? "" + s : ""), {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    CustomersService.prototype.getallUnenrolledCustomers = function (q, l, u) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/unenroll-customerslist" + (this.completeChecker(q) ? "/" + q : "") + "/" + l + "/" + u + "/", {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    CustomersService.prototype.getSignInLogs = function (q, l, u) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/login_log_check" + (this.completeChecker(q) ? "/" + q : "") + "/" + l + "/" + u + "/", {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    //Products
    CustomersService.prototype.getAllProducts = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/get-products/", {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    // Holidays
    CustomersService.prototype.getAllHolidays = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "enroll/holidays/", {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    CustomersService.prototype.createHoliday = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "enroll/holidays/", data, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    CustomersService.prototype.editHoliday = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "enroll/holidays/", data, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    // TOS
    CustomersService.prototype.getAllTos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/tos-file/");
    };
    CustomersService.prototype.addTos = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/tos-file/", data);
    };
    CustomersService.prototype.editTos = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/tos-file/", data);
    };
    // Promo Codes
    CustomersService.prototype.getAllPromo = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/get-promos/");
    };
    CustomersService.prototype.addPromo = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/get-promos/", data);
    };
    CustomersService.prototype.editPromo = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/get-promos/", data);
    };
    // Sessions
    CustomersService.prototype.getAllSessions = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].webenrollurl + "main/get-pr-sessions/");
    };
    // Link Account
    CustomersService.prototype.linkAccount = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "config/add_account/", data, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    // Customer Dialog
    CustomersService.prototype.getCustomersPortfolioPayment = function (cust_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/getpaymentsummary/" + cust_id + "/", {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    CustomersService.prototype.getCustomersPortfolioBill = function (cust_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/getbillsummary/" + cust_id + "/", {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    CustomersService.prototype.getCustomersPortfolioProduct = function (cust_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/getproduct/" + cust_id + "/", {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    CustomersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/app/AdminPortal/Store/dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DahsboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DahsboardService = /** @class */ (function () {
    function DahsboardService(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
    }
    DahsboardService.prototype.getService = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/get-setting");
    };
    DahsboardService.prototype.saveByPassValue = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/update-bypass-by-id/", obj);
    };
    DahsboardService.prototype.saveUAValue = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/update-ua-by-id/", obj);
    };
    DahsboardService.prototype.GetPaymentSetting = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/get-payment-setting");
    };
    DahsboardService.prototype.PaymentSetting = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/update-payment-setting-by-id/", obj, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.getSessionExpiry = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "config/session-expiry-time/", {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.changeSessionExpiry = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "config/session-expiry-time/", obj, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.tabSetting = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/get-tabs-setting/", {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.changeTab = function (para) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/update-tabs-setting/", para, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.mobTabSetting = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/get-mob-tabs-setting/", {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.changeMobTab = function (para) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/update-mob-tabs-setting/", para, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.getTdspRates = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/tdsp-rates/");
    };
    DahsboardService.prototype.editTdspRates = function (para) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/tdsp-rates/", para, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.getM2m = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/our-m2m-plan/");
    };
    DahsboardService.prototype.addM2m = function (para) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/our-m2m-plan/", para, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.editM2m = function (para) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/our-m2m-plan/", para, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.moveM2m = function (para) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/position-our-m2m-plan/", para, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.getAdvPrice = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/advantage-prime/");
    };
    DahsboardService.prototype.addAdvPrice = function (para) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/advantage-prime/", para, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.editAdvPrice = function (para) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/advantage-prime/", para, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.getAnalytics = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/count-for-signup/", {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService.prototype.moveAdv = function (para) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "portal/position-advantage-prime/", para, {
            'headers': { 'Authorization': "JWT " + this.token }
        });
    };
    DahsboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DahsboardService);
    return DahsboardService;
}());



/***/ }),

/***/ "./src/app/AdminPortal/Store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard__ = __webpack_require__("./src/app/AdminPortal/Store/dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customers__ = __webpack_require__("./src/app/AdminPortal/Store/customers.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__customers__["a"]; });





/***/ }),

/***/ "./src/app/Container/Store/Services/change-personel-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePersonelInfoServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePersonelInfoServices = /** @class */ (function () {
    function ChangePersonelInfoServices(http) {
        this.http = http;
    }
    ChangePersonelInfoServices.prototype.changePassword = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'config/changepassword/', data, {
            'headers': {
                'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        });
    };
    ChangePersonelInfoServices.prototype.changeContact = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'db/editCustinfo/', data, {
            'headers': {
                'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        });
    };
    ChangePersonelInfoServices.prototype.changeLoginId = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'config/editloginid/', data, {
            'headers': {
                'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        });
    };
    ChangePersonelInfoServices.prototype.changeCutInfo = function (para) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "customers/edit-Customer-Query/", para, {
            'headers': {
                'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        });
    };
    ChangePersonelInfoServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ChangePersonelInfoServices);
    return ChangePersonelInfoServices;
}());



/***/ }),

/***/ "./src/app/Container/Store/Services/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.getdata = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/dbcustdata/', {
            'headers': {
                'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
            }
        });
    };
    //meter info seperate service on dashboard page
    CustomerService.prototype.getMeterInfo = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/meterinfo/', {
            'headers': {
                'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
            }
        });
    };
    CustomerService.prototype.getBillAddress = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/getbilladd/', {
            'headers': {
                'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
            }
        });
    };
    CustomerService.prototype.getService = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/getserviceadd/', {
            'headers': {
                'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
            }
        });
    };
    CustomerService.prototype.contact = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'enroll/contactus/', data, {
            'headers': {
                'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
            }
        });
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/Container/Store/Services/enroll.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnrollmentService = /** @class */ (function () {
    function EnrollmentService(http) {
        this.http = http;
        this.date = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentDate = this.date.asObservable();
        this.myHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json');
    }
    // Enrollment API - Enrollment Form
    EnrollmentService.prototype.enrollUser = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'main/enrollProduct/', data, { headers: this.myHeaders, withCredentials: true });
    };
    EnrollmentService.prototype.dccSubmit = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + "pr/enrollment-with-sys-batch-no/sys-batch-no" + data.sys_batch_no + "/", data, { headers: this.myHeaders, withCredentials: true });
    };
    EnrollmentService.prototype.dccFinalSubmit = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'pr/product-enrollment-submission/', data, { headers: this.myHeaders, withCredentials: true });
    };
    EnrollmentService.prototype.initialSubmit = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'pr/initial-pr-submission/', data, { headers: this.myHeaders, withCredentials: true });
    };
    EnrollmentService.prototype.changeEnrollmentStatus = function (para) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'pr/sigEditEnroll/', para, { headers: this.myHeaders, withCredentials: true });
    };
    EnrollmentService.prototype.creditCheck = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'pr/pr-credit-check/', data, { headers: this.myHeaders, withCredentials: true });
    };
    EnrollmentService.prototype.nextSessionStep = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'enroll/set-step-session/', data, { headers: this.myHeaders, withCredentials: true });
    };
    EnrollmentService.prototype.findBillingAddress = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'pr/mail_address/', data, { headers: this.myHeaders });
    };
    // enrollProcess(data) {
    //     return this.http.get('http://192.168.29.183:8000/products/get-premise-by-zip-address-city/zip-code' + data)
    // }
    EnrollmentService.prototype.enrollProcess = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'enroll/get-premise-By-zip-service-city/', data, { headers: this.myHeaders, withCredentials: true });
    };
    EnrollmentService.prototype.requestDate = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backendurl + 'products/get-next-enroll-date-from-isigma/', data);
    };
    EnrollmentService.prototype.requestforDate = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'main/next-enroll-date/', obj);
    };
    EnrollmentService.prototype.sendPremiseDataForSession = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'enroll/set-premise-session-api/', obj, { headers: this.myHeaders, withCredentials: true });
    };
    EnrollmentService.prototype.sendProductDataForSession = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'enroll/set-product-session-api/', obj, { headers: this.myHeaders, withCredentials: true });
    };
    EnrollmentService.prototype.savedateDetail = function (obj) {
        this.date.next(obj);
    };
    EnrollmentService.prototype.Date = function (datee) {
        if (datee != null && datee != undefined && datee != "") {
            var date = new Date(datee);
            return (String((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()));
        }
        else
            return null;
    };
    EnrollmentService.prototype.DateDrl = function (datee) {
        if (datee != null && datee != undefined && datee != "") {
            var date = new Date(datee);
            return (String((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()));
        }
        else
            return null;
    };
    EnrollmentService.prototype.Date1 = function (datee) {
        if (datee != null && datee != undefined && datee != "") {
            var date = new Date(datee);
            return (String(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()));
        }
        else
            return null;
    };
    EnrollmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], EnrollmentService);
    return EnrollmentService;
}());



/***/ }),

/***/ "./src/app/Container/Store/Services/graph.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsageService = /** @class */ (function () {
    function UsageService(http) {
        this.http = http;
    }
    UsageService.prototype.getGraph = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/graphall/', {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        }).map(function (result) { return result; });
    };
    UsageService.prototype.getUsageGraph = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/usage/', {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        }).map(function (result) { return result; });
    };
    UsageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsageService);
    return UsageService;
}());



/***/ }),

/***/ "./src/app/Container/Store/Services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_service__ = __webpack_require__("./src/app/Container/Store/Services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graph_service__ = __webpack_require__("./src/app/Container/Store/Services/graph.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notify_service__ = __webpack_require__("./src/app/Container/Store/Services/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_service__ = __webpack_require__("./src/app/Container/Store/Services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_service__ = __webpack_require__("./src/app/Container/Store/Services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_service__ = __webpack_require__("./src/app/Container/Store/Services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__promoCode__ = __webpack_require__("./src/app/Container/Store/Services/promoCode.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enroll_service__ = __webpack_require__("./src/app/Container/Store/Services/enroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quick_bill_service__ = __webpack_require__("./src/app/Container/Store/Services/quick-bill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__change_personel_info__ = __webpack_require__("./src/app/Container/Store/Services/change-personel-info.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__main_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__customer_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__graph_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__notify_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__payment_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__products_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__promoCode__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__enroll_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__quick_bill_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__change_personel_info__["a"]; });













/***/ }),

/***/ "./src/app/Container/Store/Services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
    }
    MainService.prototype.BrokerApp = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].agenturl + 'config/register/', data);
    };
    MainService.prototype.GetYourQoute = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/getyourquote/', data);
    };
    MainService.prototype.helpContact = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/askourenergy/', data);
    };
    MainService.prototype.establishContact = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/get/', data);
    };
    MainService.prototype.community = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'enroll/communtiy/', data);
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/Container/Store/Services/notify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationService = /** @class */ (function () {
    function NotificationService(http) {
        this.http = http;
    }
    NotificationService.prototype.getNotifcation = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/notification/', {
            'headers': { 'Authorization': "JWT " + localStorage.getItem('token') }
        });
    };
    // ReadNotifcation(id) {
    //   return this.http.patch(environment.url + 'customers/readnotification/', id, {
    //     'headers': {
    //       'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
    //     },
    //   })
    // }
    NotificationService.prototype.ReadNotifcation = function (i) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/r-notification/', { id: i.id }, {
            'headers': { 'Authorization': "JWT " + localStorage.getItem('token') }
        });
    };
    NotificationService.prototype.DeleteNotifcation = function (i) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/deletenotification/', { id: i.id }, {
            'headers': { 'Authorization': "JWT " + localStorage.getItem('token') }
        });
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/Container/Store/Services/payment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentService = /** @class */ (function () {
    function PaymentService(http) {
        this.http = http;
    }
    PaymentService.prototype.makePayment = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/makepayment/', data, {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        });
    };
    PaymentService.prototype.payUsing = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'customers/pay-using/', {
            'headers': { 'Authorization': 'JWT' + ' ' + localStorage.getItem('token') }
        });
    };
    PaymentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/Container/Store/Services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getProducts = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url + 'customers/getproduct/', {
            'headers': {
                'Authorization': 'JWT' + ' ' + localStorage.getItem('token'),
            }
        });
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/Container/Store/Services/promoCode.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoCodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PromoCodeService = /** @class */ (function () {
    function PromoCodeService(http) {
        this.http = http;
        this.myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('content-type', 'application/json');
    }
    PromoCodeService.prototype.searchPlan = function (para) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].webenrollurl + 'enroll/products-with-zipcode/', para, { headers: this.myHeaders, withCredentials: true });
    };
    PromoCodeService.prototype.searchPlanhome_page = function (para) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].webenrollurl + 'enroll/products-with-zipcode-for-home/', para, { headers: this.myHeaders, withCredentials: true });
    };
    PromoCodeService.prototype.searchPlanByTdsp = function (tdsp) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].webenrollurl + 'enroll/multiple-duns-on-zip/', tdsp, { headers: this.myHeaders, withCredentials: true });
    };
    PromoCodeService.prototype.filterPlan = function (para) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].webenrollurl + 'enroll/products-with-zipcode/', para, { headers: this.myHeaders, withCredentials: true });
    };
    PromoCodeService.prototype.uaCheck = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].webenrollurl + 'enroll/product-enrollment-check/', { headers: this.myHeaders });
    };
    PromoCodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PromoCodeService);
    return PromoCodeService;
}());



/***/ }),

/***/ "./src/app/Container/Store/Services/quick-bill.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickBillService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuickBillService = /** @class */ (function () {
    function QuickBillService(http) {
        this.http = http;
    }
    QuickBillService.prototype.quickbill = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "customers/quick-pay-my-bill/", data);
    };
    QuickBillService.prototype.quickBillFinal = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "customers/quick-pay-makepayment/", data);
    };
    QuickBillService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuickBillService);
    return QuickBillService;
}());



/***/ }),

/***/ "./src/app/Container/business-rate-electricity/business-rate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"electricity-banner\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 banner \">\r\n            <h1>Business Rates Electricity</h1>\r\n            <div class=\"banner-link\">\r\n                <span>\r\n            <a routerLink=\"\">Home</a>\r\n                    </span>\r\n                <i>/</i>\r\n                <span>\r\n            <a routerLink=\"/business-rates-electricity\">Business Rates Electricity  </a>\r\n          </span>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<mat-card class=\"container electricity\">\r\n    <h3> <b>BUSINESS RATES ELECTRICITY </b>EASY LOOKUP & SIGNUP TOOL</h3>\r\n    <p><b> Save Time and Money! </b> Now you can find the business electricity plan of your choice and sign up for it digitally online! Find business rates electricity with our easy zip code search tool. Simply type in your zip code next to the plan of your\r\n        choice, fill in all of the fields, sign with your mouse or track pad and submit it! You will receive a copy of the signed contract to the valid email that you provided when filling out the form. <b> Start Saving your Business Money Today!</b>\r\n    </p>\r\n    <div class=\"compare-rates\">\r\n        <div class=\"fix\">\r\n            <h1>4.59</h1>\r\n        </div>\r\n        <div class=\"center-body\">\r\n            <h4>AMAZING FIXED RATE SAVINGS FOR 12 MONTHS</h4>\r\n            <div class=\"center-bodyinner\">\r\n                <div>\r\n                    <h5>Available for a Limited Time Only!</h5>\r\n                </div>\r\n                <div> <img src=\"/assets/img/arrows.png\" class=\"images\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"center-body\">\r\n            <div class=\"corner-body\">\r\n                <form>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\" ZIP CODE\">\r\n                    </mat-form-field>\r\n                </form>\r\n                <div><button >Grab it Today!</button>\r\n                </div>\r\n            </div>\r\n            <div><a href=\"https://www.ourenergyllc.com/prodox/EFLS/Commercial/tos-com051415oe-1.pdf\" target=\"_blank\">Term of service</a></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"compare-rates\">\r\n        <div class=\"fix\">\r\n            <h1>4.69</h1>\r\n        </div>\r\n        <div class=\"center-body\">\r\n            <h4>AMAZING FIXED RATE SAVINGS FOR 24 MONTHS</h4>\r\n            <div class=\"center-bodyinner\">\r\n                <div>\r\n                    <h5>Available for a Limited Time Only!</h5>\r\n                </div>\r\n                <div> <img src=\"/assets/img/arrows.png\" class=\"images\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"center-body\">\r\n            <div class=\"corner-body\">\r\n                <form>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\" ZIP CODE\">\r\n                    </mat-form-field>\r\n                </form>\r\n                <div><button >Grab it Today!</button>\r\n                </div>\r\n            </div>\r\n            <div><a href=\"https://www.ourenergyllc.com/prodox/EFLS/Commercial/tos-com051415oe-1.pdf\" target=\"_blank\">Term of service</a></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"compare-rates\">\r\n        <div class=\"fix\">\r\n            <h1>4.79</h1>\r\n        </div>\r\n        <div class=\"center-body\">\r\n            <h4>AMAZING FIXED RATE SAVINGS FOR 36 MONTHS</h4>\r\n            <div class=\"center-bodyinner\">\r\n                <div>\r\n                    <h5>Available for a Limited Time Only!</h5>\r\n                </div>\r\n                <div> <img src=\"/assets/img/arrows.png\" class=\"images\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"center-body\">\r\n            <div class=\"corner-body\">\r\n                <form>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\" ZIP CODE\">\r\n                    </mat-form-field>\r\n                </form>\r\n                <div><button >Grab it Today!</button>\r\n                </div>\r\n            </div>\r\n            <div><a href=\"https://www.ourenergyllc.com/prodox/EFLS/Commercial/tos-com051415oe-1.pdf\" target=\"_blank\">Term of service</a></div>\r\n        </div>\r\n    </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/Container/business-rate-electricity/business-rate.component.scss":
/***/ (function(module, exports) {

module.exports = ".electricity-banner {\n  background-image: url(https://storage.wattcrm.com/wattcrm-images/pics/upload/Commercialsignupsbanner.jpg);\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.banner {\n  padding: 30px 20px;\n  z-index: 1; }\n\n.banner h1 {\n    font-weight: 500;\n    color: #fff;\n    line-height: 40px; }\n\n.banner-link {\n  color: #2c2828; }\n\n.banner-link i {\n    color: #000; }\n\n.banner-link span a {\n    color: #e9e6e6;\n    font-size: 16px;\n    font-weight: bold;\n    text-decoration: none; }\n\n.banner-link span a:hover {\n  color: #e3e3e3; }\n\n.electricity {\n  font-family: Arial;\n  margin-top: 20px; }\n\n.electricity h3 {\n    margin-bottom: 20px; }\n\n.electricity p {\n    font-size: 16px;\n    line-height: 23px; }\n\n.compare-rates {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 20px; }\n\n.compare-rates .fix {\n    background-image: url(\"/assets/img/rate-12.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 65px 35px; }\n\n.compare-rates .fix h1 {\n      margin-top: -12px;\n      margin-bottom: 20px;\n      font-size: 45px; }\n\n.compare-rates .center-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.compare-rates .center-body .images {\n      margin-top: 6px; }\n\n.compare-rates .center-body h4 {\n      font-weight: 900;\n      margin-top: 20%;\n      font-size: 16px; }\n\n.compare-rates .center-body a {\n      font-size: 16px;\n      color: #cd0000;\n      cursor: pointer;\n      text-decoration: none; }\n\n.compare-rates .center-body a:hover {\n      color: #f82f2f; }\n\n.compare-rates .center-body .center-bodyinner {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      border-top: 4px solid #a50303; }\n\n.compare-rates .center-body .center-bodyinner .h5 {\n        margin-left: 50px; }\n\n.compare-rates .center-body .corner-body {\n      margin-top: 20%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n\n.compare-rates .center-body .corner-body mat-form-field {\n        font-size: 16px;\n        font-weight: bold; }\n\n.compare-rates .center-body .corner-body button {\n        color: #fff;\n        background-color: #cd0000;\n        font-size: 16px;\n        font-weight: bold;\n        border-radius: 30px;\n        margin-top: 8px; }\n"

/***/ }),

/***/ "./src/app/Container/business-rate-electricity/business-rate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessRateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BusinessRateComponent = /** @class */ (function () {
    function BusinessRateComponent() {
    }
    BusinessRateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'business-rates',
            template: __webpack_require__("./src/app/Container/business-rate-electricity/business-rate.component.html"),
            styles: [__webpack_require__("./src/app/Container/business-rate-electricity/business-rate.component.scss")]
        })
    ], BusinessRateComponent);
    return BusinessRateComponent;
}());



/***/ }),

/***/ "./src/app/Container/main/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <!-- <section class=\"about-1\">\r\n        <div class=\"container\">\r\n            <div class=\"main-text\">\r\n                <p class=\"large text-center\"> <strong> About Us Our Energy Texas Retail Electricity </strong> </p>\r\n            </div>\r\n        </div>\r\n    </section> -->\r\n    <div class=\"bus-banner\">\r\n        <div class=\"text-box\">\r\n                <h3 class=\"heading_s\">About Our Energy</h3>\r\n        </div>\r\n        <div class=\"img-box\">\r\n            <img src=\"../../../assets/img/about-bg.png\" >\r\n        </div>\r\n    </div>\r\n  <section class=\"four_Steps about-4\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <!-- <h3 class=\"title\">About Our Energy</h3> -->\r\n        <p>Our secret to being an excellent Texas electric company is in Building and Maintaining Relationship with You.\r\n          At OUR Energy llc, the core of our company is YOU. We reach out to our customers at every point of contact to\r\n          continuously\r\n          improve upon our service.</p>\r\n        <p>We strive to set the energy industry bar that others look to follow. We work towards our goals through\r\n          diligent efforts such as our genuinely friendly, personalized service, proactive involvement in continuous\r\n          service improvement and\r\n          affordable prices. At Our Energy, we make it our priority to care and serve for what matters the most: YOU.\r\n        </p>\r\n        <p>OUR Energy LLC is a Texas retail electricity provider (REP) founded by a group of professionals with 30+ years experience in retail electricity and gas industry. We are top quality electric providers servicing residential, commercial and industrial customers delivering competitive pricing, flexible contracts, customized billing and outstanding customer service.</p>\r\n        <p>In current economic conditions, business owners are seeking superior customer service at reduced costs to increase revenues and generate more value. At OUR Energy, we pride ourselves for providing excellent energy products and services, delivering superior customer service and offering far superior support than the mainstream energy providers in Texas. OUR Energy provides a wide range of products and services that will fit your needs. By combining prices and service, we deliver value to all customers, large or small, residential or commercial. You have the power to choose TX. Choose OUR Energy, the premier TX energy company!</p>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"text-center\">\r\n              <h3 class=\"title\">Resolve, Involve and Evolve</h3>\r\n            </div>\r\n            <section class=\"card-plain about-2\">\r\n              <div class=\"card-content\">\r\n                <ul class=\"timeline\">\r\n                  <li class=\"timeline-inverted\">\r\n                    <div class=\"timeline-badge danger\">\r\n                      <i class=\"fa fa-bolt\"></i>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                      <div class=\"timeline-heading\">\r\n                        <span class=\"btn btn-danger btn-sm\">Resolve</span>\r\n                      </div>\r\n                      <div class=\"timeline-body\">\r\n                        <p>At OUR Energy, our RESOLVE is to consistently provide our customers top quality energy service\r\n                          at the most affordable rates. What’s more, we provide the most competitive energy prices\r\n                          regardless of the season.\r\n                          We achieve this through our expert energy market analysis that allows us to strategically\r\n                          pre-purchase energy, therefore ensuring you reliable fixed rates. OUR Energy combines prices\r\n                          savings with cutting\r\n                          edge technology and old fashioned friendly customer service to deliver excellence across the\r\n                          board. Our RESOLVE is to be the finest residential and commercial energy company in Texas!</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"timeline-badge success\">\r\n                      <i class=\"fa fa-heart\"></i>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                      <div class=\"timeline-heading\">\r\n                        <span class=\"btn btn-success btn-sm\">Involve</span>\r\n                      </div>\r\n                      <div class=\"timeline-body\">\r\n                        <p>At OUR Energy, we keep our hearts INVOLVED in everything we do. From Community Outreach\r\n                          projects to your customer feedback, we value every opportunity we have to make a difference. No\r\n                          customer is too big or\r\n                          too small, every customer’s opinion counts. We go beyond the usual standard energy service\r\n                          simply because WE CARE!</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <li class=\"timeline-inverted\">\r\n                    <div class=\"timeline-badge info\">\r\n                      <i class=\"fa fa-magic\"></i>\r\n                    </div>\r\n                    <div class=\"timeline-panel\">\r\n                      <div class=\"timeline-heading\">\r\n                        <span class=\"btn btn-info btn-sm\">Evolve</span>\r\n                      </div>\r\n                      <div class=\"timeline-body\">\r\n                        <p>At OUR Energy, we constantly EVOLVE. Just as the world is ever changing, we listen, analyze,\r\n                          learn and plan ahead to always maintain a step ahead of the rest. We endeavor to constantly\r\n                          surprise you with service\r\n                          improvements simply because YOU DESERVE IT!</p>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </section>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </section>\r\n  <!-- <section class=\"about-1-sm\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n          <img class=\"width-full\" style=\"margin-top: 55px;\"\r\n            src=\"https://storage.wattcrm.com/wattcrm-images/pics/aboutus/AboutUsPage012.jpg\">\r\n        </div>\r\n\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 energy\">\r\n          <h2 class=\"sub-heading\">ABOUT OUR ENERGY</h2>\r\n          <p class=\"energy-tips-detail\">\r\n            OUR Energy LLC is a Texas retail electricity provider (REP) founded by a group of professionals with 30+\r\n            years experience in retail electricity and gas industry. We are top quality electric providers servicing\r\n            residential, commercial and industrial customers\r\n            delivering competitive pricing, flexible contracts, customized billing and outstanding customer service.\r\n          </p>\r\n          <p class=\"energy-tips-detail\">\r\n            In current economic conditions, business owners are seeking superior customer service at reduced costs to\r\n            increase revenues and generate more value. At OUR Energy, we pride ourselves for providing excellent energy\r\n            products and services, delivering superior\r\n            customer service and offering far superior support than the mainstream energy providers in Texas. OUR Energy\r\n            provides a wide range of products and services that will fit your needs. By combining prices and service, we\r\n            deliver value\r\n            to all customers, large or small, residential or commercial. You have the power to choose TX. Choose OUR\r\n            Energy, the premier TX energy company!\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 energy\">\r\n          <h2 class=\"sub-heading\">OUR MISSION AND VISION</h2>\r\n          <p class=\"energy-tips-detail\">\r\n            <b>Our Vision:</b> Our vision is to be the best Texas electricity company; leading by example by providing\r\n            highest level of quality, customer service and shareholder value.\r\n          </p>\r\n          <p class=\"energy-tips-detail\">\r\n            <b>Our Mission:</b> Our mission is to help customers not only save money off their energy bills but bring\r\n            them together as a community, continually striving for excellence in the products and services we offer.\r\n          </p>\r\n          <p class=\"energy-tips-detail\">\r\n            <b>Our Objective:</b> Our objective is to provide\r\n            <b>reliable</b> total\r\n            <b>quality</b> Texas power and energy services at the most\r\n            <b>competitive</b> pricing. We seek to revolutionize the retail electric provider (REP) industry through\r\n            innovation, scalability, diligence, expertise, dependability, honesty & integrity.\r\n          </p>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n          <img class=\"width-full\" style=\"margin-top: 55px;\"\r\n            src=\"https://storage.wattcrm.com/wattcrm-images/pics/aboutus/AboutUsPage021.jpg\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n  \r\n  <div class=\"\">\r\n    <div class=\"container-fluid container\">\r\n     \r\n      \r\n    </div>\r\n\r\n    <!-- <section class=\"about-5\">\r\n            <div class=\"container\">\r\n                <h3 class=\"title text-center\">OUR\r\n                    <strong>CLIENTS</strong>\r\n                </h3>\r\n                <span class=\"caption\">* The clients listed are an example of individual franchise customers that we serve and do not represent the entire brand.\r\n         </span>\r\n                <div class=\"detail\">\r\n                    <p>\r\n                        <span class=\"large\">Our Energy</span> is a premier Texas residential and commercial retail electricity provider.\r\n                        <br />We pride ourselves in making quality services affordable to all such as:</p>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"row\">\r\n                                <ul class=\"col-sm-6\">\r\n                                    <li>\r\n                                        <a routerLink=\"/help\">Same Day Move-Ins or Out of Cycle Switches</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a routerLink=\"/help\">Help Tools</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a routerLink=\"/energy-saving\">Money Saving Tips</a>\r\n                                    </li>\r\n                                </ul>\r\n                                <ul class=\"col-sm-6\">\r\n                                    <li>\r\n                                        <a routerLink=\"/community\">Community Outreach Projects</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a routerLink=\"/ourlife\">OUR Life Blog</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a routerLink=\"/special\">OUR Energy Member Rewards</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                            <p>OUR Energy services of all sizes from start ups to large corporations. Our success is brought about by our special ability to customize each business plan to best suit the needs of each commercial customer.</p>\r\n                            <p>The following are a few examples of the various types of Texas industries pride ourselves in servicing:</p>\r\n                            <div class=\"row\">\r\n                                <ul class=\"col-sm-6\">\r\n                                    <li>Agriculture</li>\r\n                                    <li>Banking and Accounting</li>\r\n                                    <li>Call Centers</li>\r\n                                    <li>Chemical</li>\r\n                                </ul>\r\n                                <ul class=\"col-sm-6\">\r\n                                    <li>Technology</li>\r\n                                    <li>Education</li>\r\n                                    <li>Food and Beverage</li>\r\n                                    <li>Non Profit</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4 \">\r\n                            <img class=\"mySlides\" src=\"../../assets/img/TAcobel.jpg\">\r\n                            <img class=\"mySlides\" src=\"../../assets/img/KFC2.jpg\">\r\n                            <img class=\"mySlides\" src=\"../../assets/img/Longjonh.jpg\">\r\n                            <img class=\"mySlides\" src=\"../../assets/img/TAcobel.jpg\">\r\n                            <img class=\"mySlides\" src=\"../../assets/img/PizzaHut.jpg\">\r\n                            <p class=\"clients\">* The clients listed are an example of individual franchise customers that we serve and do not represent the entire brand.</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <p>We are constantly seeking feedback on how we can enhance our services. Please feel free to submit your\r\n                                <a href=\"#\">feedback</a> today.\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section> -->\r\n    <section class=\"about_form\">\r\n        <div class=\"brokersforms\">\r\n            <mat-card class=\"brokersUpdate\">\r\n                <mat-card-header>\r\n                    <div mat-card-avatar>\r\n                        <i class=\"material-icons\">insert_comment</i>\r\n                    </div>\r\n                    <mat-card-title>CONTACT US</mat-card-title>\r\n                </mat-card-header>\r\n               \r\n                <form class=\"brokersalign\" [formGroup]=\"myForm\" (ngSubmit)=\"submit()\" #form>\r\n                    <div class=\"row\">\r\n                        <mat-form-field class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                            <input matInput placeholder=\"Name\" formControlName=name>\r\n                            <mat-error *ngIf=\"f.name.errors?.required\">You must enter a value</mat-error>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                            <input matInput placeholder=\"Email Address\" formControlName=email>\r\n                            <mat-error *ngIf=\"f.email.errors?.required\">You must enter a value</mat-error>\r\n                            <mat-error *ngIf=\"!f.email.errors?.required && f.email.errors?.email\">Invalid Email Address</mat-error>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                            <input matInput placeholder=\"Contact No.\" formControlName=mobile phone-no maxlength=\"12\">\r\n                            <mat-error *ngIf=\"f.mobile.errors?.required\">You must enter a value</mat-error>\r\n                            <mat-error *ngIf=\"f.mobile.errors?.pattern\">Invalid Contact No.</mat-error>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                            <textarea matInput placeholder=\"Message\" formControlName=message></textarea>\r\n                            <mat-error *ngIf=\"f.message.errors?.required\">You must enter a value</mat-error>\r\n                        </mat-form-field>\r\n                        <div class=\"recaptcha col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                            <app-recapcha></app-recapcha>\r\n                            <p class=\"text-center error\"> {{cap_result}}</p>\r\n                            <button [disabled]=\"btnDisabled\" >Submit</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n          \r\n            </mat-card>\r\n        </div>\r\n    </section>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Container/main/brokers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <section class=\"about-1\">\r\n        <div class=\"container\">\r\n            <div class=\"main-text\">\r\n                <h1 class=\"large-broker\">Welcome to Our Broker Program</h1>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <div class=\"main-content\">\r\n        <div class=\"container-fluid container\">\r\n            <section class=\"commercial-main\">\r\n                <div class=\"bg-white\">\r\n                    <h3 class=\"text-center\">OUR ENERGY BROKER PROGRAM</h3>\r\n                    <hr />\r\n                    <div class=\"cm-detail\">\r\n                        <p>\r\n                            <strong>LET’S GROW TOGETHER!</strong> Team up with Our Energy and rest assured that you are partnering with the finest energy company in Texas. Our Energy gives top notch energy brokers the opportunity to provide their customers\r\n                            with superb electricity solutions that they will thank you for! More importantly, your compensation is well worth your efforts!\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <section>\r\n                    <div class=\"Our-lev-heading\">\r\n                        <h1>OUR LEVERAGE</h1>\r\n                        <hr>\r\n                    </div>\r\n                    <div class=\"our-leverage\">\r\n                        <mat-card>\r\n                            <h3>VIP Level Support</h3>\r\n                            <div class=\"icon\">\r\n                                <i class=\"material-icons\">home</i>\r\n                            </div>\r\n                            <p>Get the royal treatment you deserve! Our friendly Broker Care Experts will help take your sales to the next level!\r\n                            </p>\r\n                        </mat-card>\r\n                        <mat-card>\r\n                            <h3>Solid As a Rock</h3>\r\n                            <div class=\"icon\">\r\n                                <i class=\"material-icons\">query_builder</i>\r\n                            </div>\r\n                            <p>We’re ahead of the game with 30+ years experience in retail electricity and gas industry.</p>\r\n                        </mat-card>\r\n                        <mat-card>\r\n                            <h3>Hit the Bulls Eye</h3>\r\n                            <div class=\"icon\">\r\n                                <i class=\"material-icons\">favorite</i>\r\n                            </div>\r\n                            <p>Our quality service and competitive prices are exactly what people are looking for! This is a service that sells itself!\r\n                            </p>\r\n                        </mat-card>\r\n                        <mat-card>\r\n                            <h3>Good As Gold</h3>\r\n                            <div class=\"icon\">\r\n                                <i class=\"material-icons\">account_balance</i>\r\n                            </div>\r\n                            <p>We are only as successful as our partners which is why it is a priority to take care of you!</p>\r\n                        </mat-card>\r\n                    </div>\r\n                </section>\r\n                <section class=\"about-4\">\r\n                    <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                                <h3 class=\"title\">HOW WE DO IT</h3>\r\n                                <p>At OUR Energy we understand how important it is to provide excellent service to Our Customers, but also to Our Brokers. This is why we have created a Broker Management Team, which provides the following services:</p>\r\n                                <ul class=\"list-group\">\r\n                                    <li>Expert Personalized Assistance.</li>\r\n                                    <li>Custom Tailored Plans.</li>\r\n                                    <li>Competitive Daily Pricing.</li>\r\n                                    <li>A willingness to be flexible</li>\r\n                                    <li>Competitive Compensation Models.</li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"col-lg-5 col-md-5 col-sm-12 col-xs-12\">\r\n                                <mat-accordion>\r\n                                    <mat-expansion-panel>\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                Expert Personalized Assistence\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <p>We provide one main point of contact for each Agent or Brokerage Firm, our friendly Broker Care Experts. This results in obtaining quotes, answer questions and establish contracts in a quick, efficient. We’ll work\r\n                                            with you to help meet and surpass your sales goals!</p>\r\n                                    </mat-expansion-panel>\r\n                                    <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                Custom Tailored Plans\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <p>We’re flexible! We offer Customized Plans that are scalable, reliable and affordable. We offer plans that are custom tailored to meet the client’s specific needs.</p>\r\n                                    </mat-expansion-panel>\r\n                                    <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                Competitive Daily Pricing\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <p>\r\n                                            Our energy market experts pre-purchase bulk volumes of electricity at the lowest rates. This insures you excellent prices that will not change with the trends. All of our contracts include Nodal & RUC charges.\r\n                                        </p>\r\n                                    </mat-expansion-panel>\r\n                                    <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                Competitive Compensation Models\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <p>Partner up with OUR Energy and secure a generous commission. We believe in flexibility, transparency, efficiency and timely for a mutually successful partnership..</p>\r\n                                    </mat-expansion-panel>\r\n                                </mat-accordion>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n                <h2 class=\"text-center\">BROKER APPLICATION</h2>\r\n                <h3 class=\"text-center\">BECOME AN OUR ENERGY BROKER TODAY!</h3>\r\n                <hr />\r\n                <div class=\"cm-detail\">\r\n                    <p>Thank you for your interest in the OUR Energy Broker Program. Please fill out the Broker Application Form with valid information and a friendly Broker Care Expert will get back to you in an expeditious manner. Make sure that you detail\r\n                        any questions that you may have in Comments section..</p>\r\n                </div>\r\n                <form class=\"brokersforms\" [formGroup]=myForm #form (ngSubmit)=\"submit()\">\r\n                    <mat-card class=\"brokersUpdate\">\r\n                        <mat-card-header>\r\n                            <div mat-card-avatar>\r\n                                <i class=\"material-icons\">edit_mode</i>\r\n                            </div>\r\n                            <mat-card-title>Broker Application</mat-card-title>\r\n                        </mat-card-header>\r\n                        <div class=\"row\">\r\n                            <mat-form-field style=\"margin-bottom: 10px; font-size: 24px;\" class=\"col-lg-offset-3 col-md-offset-3 col-sm-offset-0 col-xs-offset-0 col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                                <input matInput placeholder=\"Agent ID\" formControlName=AgentID maxlength=\"10\">\r\n                                <mat-hint>If you are an existing agent then enter your Agent ID</mat-hint>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <mat-form-field class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                                <input matInput placeholder=\"First Name\" formControlName=firstname maxlength=\"50\">\r\n                                <!-- <mat-error *ngIf=\"f.firstname.errors?.required\">First Name is required</mat-error> -->\r\n                                <mat-error *ngIf=\"f.firstname.errors?.pattern\">Invalid First Name</mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                                <input matInput placeholder=\"Last Name\" formControlName=lastname maxlength=\"50\">\r\n                                <!-- <mat-error *ngIf=\"f.lastname.errors?.required\">Last Name is required</mat-error> -->\r\n                                <mat-error *ngIf=\"f.lastname.errors?.pattern\">Invalid Last Name</mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                                <input matInput placeholder=\"Username\" formControlName=username required maxlength=\"20\">\r\n                                <mat-error *ngIf=\"f.username.errors?.required\">Username is required</mat-error>\r\n                                <mat-hint align=\"end\" style=\"color:#cd0000 !important\">{{errorUsername}}</mat-hint>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                                <input matInput placeholder=\"Email\" formControlName=email required maxlength=\"100\">\r\n                                <mat-error *ngIf=\"f.email.errors?.required\">Email is required</mat-error>\r\n                                <mat-error *ngIf=\"f.email.errors?.email && !f.email.errors?.required\">Invalid Email</mat-error>\r\n                                <mat-hint align=\"end\" style=\"color:#cd0000 !important\">{{errorEmail}}</mat-hint>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <mat-form-field class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                                <input matInput placeholder=\"Company Name\" formControlName=companyname required maxlength=\"50\">\r\n                                <mat-error *ngIf=\"f.companyname.errors?.required\">Company Name is required</mat-error>\r\n                                <mat-error *ngIf=\"f.companyname.errors?.pattern\">Invalid Company Name</mat-error>\r\n                                <mat-hint align=\"end\" style=\"color:#cd0000 !important\">{{errorCompanyName}}</mat-hint>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                                <input matInput placeholder=\"Contact No.\" formControlName=phoneno maxlength=\"12\" required phone-no>\r\n                                <mat-error *ngIf=\"f.phoneno.errors?.required\">Contact No. is required</mat-error>\r\n                                <mat-error *ngIf=\"f.phoneno.errors?.pattern\">Invalid Contact No.</mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                                <input matInput placeholder=\"Password\" formControlName=password type=\"password\" required maxlength=\"100\">\r\n                                <mat-error *ngIf=\"f.password.errors?.required\">Password is required</mat-error>\r\n                                <mat-error *ngIf=\"f.password.errors?.minlength\">Password must contain atleast 8 characters</mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n                                <input matInput placeholder=\"Confirm Password\" formControlName=confirm_password type=\"password\">\r\n                                <mat-error *ngIf=\"f.confirm_password.errors?.notEquivalent\">Password does not match</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"text-center\">\r\n                            <div style=\"margin-top: 10px\">\r\n                                <app-recapcha></app-recapcha>\r\n                            </div>\r\n                            <div>\r\n                                <p style=\"color: #f44336; font-weight: bold; margin-bottom: 0px; margin-top: 10px;\" class=\"error\"> {{cap_result}}</p>\r\n                            </div>\r\n                            <div class=\"recaptchaa\">\r\n                                <div>\r\n                                    <button class=\"btn\" [disabled]=\"btnDisabled\" class=\"brokersbtn2\">Submit</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </mat-card>\r\n                </form>\r\n            </section>\r\n        </div>\r\n    </div>\r\n    <div class=\"member-special\">\r\n        <div class=\"container\">\r\n            <h3 class=\"title\">Looking for an Excellent Residential Plan?</h3>\r\n            <p>Find one that's right for you!</p>\r\n            <button class=\"btn btn-warning btn-lg\" routerLink=\"/residential\">Read More\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Container/main/commercial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <div class=\"bus-banner\">\r\n        <div class=\"text-box\">\r\n                <h3 class=\"heading_s\">Delivering<br>custom Tailored plan<br>for your Business.</h3>\r\n        </div>\r\n        <div class=\"img-box\">\r\n            <img src=\"../../../assets/img/bus-img.jpg\">\r\n        </div>\r\n    </div>\r\n    <div class=\"s_reduce_b_cost\">\r\n      <div class=\"container padding-top-bottom\">\r\n              <h3 class=\"text-center\">Reduce Your Business Costs!</h3>\r\n              <h3 class=\"text-center\">Better Planning - Better Business</h3>\r\n              <div class=\"cm-detail\">\r\n                      <p>\r\n                          Our Energy LLC specializes in helping Texas businesses reduce their energy rates over the long term.  The reality is that very few businesses have the time, knowledge or resources to obtain the best energy savings that are so badly needed.  This is where Our Energy commercial power services really make a difference!\r\n                      </p>\r\n                      <div class=\"text-center commercialforms\">\r\n                          <button type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample2\" aria-expanded=\"false\" aria-controls=\"collapseExample\" class=\"toggle-form\">Request your free quote today</button>\r\n                          <div class=\"collapse\" id=\"collapseExample2\">\r\n                                  <mat-card class=\"commercialUpdate\">\r\n                                      <form [formGroup]=\"commercialForm\" (ngSubmit)=\"submit()\" #form>\r\n                                          <div class=\"row\">\r\n                                              <mat-form-field class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                  <input matInput placeholder=\"Name\" maxlength=\"50\" formControlName=Name required>\r\n                                                  <mat-error *ngIf=\"f.Name.errors?.required\">Name is required</mat-error>\r\n                                                  <mat-error *ngIf=\"f.Name.errors?.pattern\">Invalid Input</mat-error>\r\n                                              </mat-form-field>\r\n                                              <mat-form-field class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                  <input matInput placeholder=\" Business Name\" maxlength=\"50\" formControlName=BusinessName required>\r\n                                                  <mat-error *ngIf=\"f.BusinessName.errors?.required\">Business Name is required</mat-error>\r\n                                                  <mat-error *ngIf=\"f.BusinessName.errors?.pattern\">Invalid Input</mat-error>\r\n                                              </mat-form-field>\r\n                                              <mat-form-field class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                  <mat-select placeholder=\"Business Type\" formControlName=BusinessType>\r\n                                                      <mat-option *ngFor=\"let type of businessType\" [value]=\"type.value\">{{type.businesstype}}</mat-option>\r\n                                                  </mat-select>\r\n                                              </mat-form-field>\r\n                                              <mat-form-field class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                  <input matInput placeholder=\"Email\" maxlength=\"50\" formControlName=Email required>\r\n                                                  <mat-error *ngIf=\"f.Email.errors?.required\">Email is required</mat-error>\r\n                                                  <mat-error *ngIf=\"f.Email.errors?.email && !f.Email.errors?.required\">Invalid Email Address</mat-error>\r\n                                              </mat-form-field>\r\n                                              <mat-form-field class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                  <input matInput placeholder=\"Telephone\" maxlength=\"12\" formControlName=Telephone phone-no>\r\n                                                  <mat-error *ngIf=\"f.Telephone.errors?.pattern\">Invalid Input</mat-error>\r\n                                              </mat-form-field>\r\n                                              <mat-form-field class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                  <input matInput placeholder=\" Mobile No.\" maxlength=\"12\" formControlName=Mobile phone-no>\r\n                                                  <mat-error *ngIf=\"f.Mobile.errors?.pattern\">Invalid Input</mat-error>\r\n                                              </mat-form-field>\r\n                                              <mat-form-field class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                  <input matInput placeholder=\"Electricity Usage (kWh)\" maxlength=\"4\" formControlName=ElectricityUsage>\r\n                                                  <mat-error *ngIf=\"f.ElectricityUsage.errors?.pattern\">Invalid Input</mat-error>\r\n                                              </mat-form-field>\r\n                                              <mat-form-field class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                                  <input matInput placeholder=\"Notes or Additional Information\" maxlength=\"250\" formControlName=Notes>\r\n                                              </mat-form-field>\r\n                                          </div>\r\n                                          <div class=\"text-center s_com_res\">\r\n                                              <div class=\"center__recap\">\r\n                                                  <app-recapcha></app-recapcha>\r\n                                                  <div *ngIf=\"!cap_result\">\r\n                                                    <p style=\"color: #f44336; font-weight: bold; margin-bottom: 0px; margin-top: 10px;\" class=\"error\">\r\n                                                        {{cap_result}}\r\n                                                      </p>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"recaptchaa\">\r\n                                                  <div>\r\n                                                      <button class=\"btn\" [disabled]=\"btnDisabled\" class=\"brokersbtn2\">Submit</button>\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </form>\r\n                                  </mat-card>\r\n                              </div>\r\n                      </div>\r\n                       \r\n                  </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"main-content1\">\r\n        <!-- <div class=\"container-fluid container\">\r\n            <section class=\"commercial-main\">\r\n                <div class=\"\">\r\n                    <h3 class=\"text-center\">\r\n                        <strong>Why Choose</strong>Our Energy Commercial Electricity</h3>\r\n                    <hr />\r\n                    <div class=\"cm-detail\">\r\n                        <p>\r\n                            <strong>Reduce your costs and boost your bottom line!</strong> Everyone could use a reduction in their commercial electricity rates and overall electricity bill. The reality is that very few businesses have the time, knowledge\r\n                            or resources to obtain the best energy savings that are so badly needed. This is where OUR Energy commercial electricity services really make a difference!\r\n                        </p>\r\n                        <p>\r\n                            <strong>Hire us and we’ll help you save money.</strong> OUR Energy LLC specializes in helping Texas businesses reduce their energy rates over the long term. Tired of looking for TX energy services in all of the wrong places?\r\n                            Frustrated by the one size fits all mentality of most electric companies in Texas? Stop wasting money on fly by night electric providers. Get a proven commercial electricity solution for a change! Choose Our Energy, the best\r\n                            Texas Electric Company to help your business prosper and grow!\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </div> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"\">\r\n    <!-- <div class=\"main-content\">\r\n      <div class=\"container-fluid container\">\r\n        <section class=\"commercial-main\">\r\n          <h2 class=\"text-center\">LOOKING FOR A CUSTOM TAILORED PLAN FOR\r\n            <strong>YOUR BUSINESS?</strong>\r\n          </h2>\r\n          <h3 class=\"text-center\">REQUEST YOUR\r\n            <strong>FREE QUOTE</strong> TODAY!</h3>\r\n          <hr />\r\n          <div class=\"cm-detail\">\r\n            <p>Looking for a new quality\r\n              <b>Texas energy service provider</b> or just\r\n              <b>curious to what else is out there?</b> Please fill in all of the details with valid information to get\r\n              your\r\n              <b>FREE,</b> no obligation quote.</p>\r\n          </div>\r\n          <div class=\"cm-detail\">\r\n            <h3>\r\n              ENJOY BUSINESS ELECTRICITY DONE THE RIGHT WAY!</h3>\r\n            <p>\r\n              <b>We dare you to compare electricity rates.</b> You have nothing to lose! If you need more space to add\r\n              in zip codes, questions, comments or details please feel free to indicate that in the space “Notes or\r\n              Additional Info”.\r\n              A friendly Customer Care Specialist will contact you in a timely manner.</p>\r\n          </div>\r\n          \r\n        </section>\r\n      </div>\r\n    </div> -->\r\n    <!-- <section class=\"commercial-banner\">\r\n            <div class=\"container\">\r\n                <h3 class=\"title text-center\">\r\n                    FINDING THE RIGHT CUSTOMIZED PLAN FOR YOU\r\n                </h3>\r\n                <div class=\"row\">\r\n                    <div class=\"inner-row\">\r\n                        <div><i class=\"fa fa-search\"></i></div>\r\n                        <div>What are Your Needs?</div>\r\n                    </div>\r\n                    <div class=\"inner-row\">\r\n                        <div><i class=\"fa fa-tachometer\"></i></div>\r\n                        <div>What is Your Consumption History?</div>\r\n                    </div>\r\n                    <div class=\"inner-row\">\r\n                        <div><i class=\"fa fa-question-circle\"></i></div>\r\n                        <div>What are Other Factors?</div>\r\n                    </div>\r\n                    <div class=\"inner-row\">\r\n                        <div><i class=\"fa fa-road\"></i></div>\r\n                        <div>What Are your Future Plans?</div>\r\n                    </div>\r\n                    <div class=\"inner-row\">\r\n                        <div><i class=\"fa fa-lightbulb-o\"></i></div>\r\n                        <div>This is Your Customized Solution!</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section> -->\r\n  </div>\r\n  <div class=\"member-special\">\r\n    <div class=\"container\">\r\n      <h3 class=\"title\">Looking For an Excellent Residential Plan?</h3>\r\n      <p>Find one that's right for you!</p>\r\n      <button class=\"btn btn-warning btn-lg\" routerLink=\"/search-plan\">find a plan that's right for you\r\n      </button>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/Container/main/community.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid con-cumunity\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <h1>Community</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"clearfix\"></div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xm-12\">\r\n            <h1>OUR COMMUNITY OUTREACH PROGRAM</h1>\r\n            <p class=\"energy-tips-detail\">\r\n                We are proud to be an active member of the beautiful Texas community. In the midst of budget shortfalls, increased expectations, and limited resources, non-profits and communities in Texas regularly struggle to balance the budget.\r\n            </p>\r\n            <p class=\"energy-tips-detail\">\r\n                Recognizing these every day battles, we have developed the OUR Community program specifically to meet the needs of Texas non-profit organizations. This innovative program combines the power of cost savings with fund raising and development tools to give\r\n                back to the community.\r\n            </p>\r\n            <iframe src=\"//www.facebook.com/plugins/like.php?href=http://ourenergyllc.com/texas-community-outreach/&amp;layout=standard&amp;show_faces=false&amp;action=like&amp;colorscheme=light\" scrolling=\"no\" frameborder=\"0\" allowtransparency=\"true\"></iframe>\r\n\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xm-12\">\r\n            <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/community/OurComunitty1.jpg\" alt=\"Our Energy\">\r\n        </div>\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"title\">\r\n                <h2 class=\"special-text\">MAKE A DIFFERENCE IN THREE EASY STEPS!\r\n                </h2>\r\n                <h3 class=\"special-text\" style=\"color: #cd0000;text-align: left\">It’s so easy to participate in OUR Community!</h3>\r\n                <p class=\"margin\">By choosing OUR Energy LLC as the Texas power company of your choice, you can help the Texas community.&nbsp; Let’s keep Texas as the best place to live in the USA!</p>\r\n                <p class=\"margin\">OUR Community outreach program is an investment, by all parties, in the continued growth and future of your non-profit and the greater community.\r\n                    <a routerLink=\"/plan\">Sign up</a> with OUR Energy Today!</p>\r\n            </div>\r\n            <div class=\"features_sec39\">\r\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                    <ul data-wow-delay=\"0ms\" data-wow-iteration=\"1\">\r\n                        <li class=\"icon width-full\">\r\n                            <i class=\"fa fa-check\"></i>\r\n                        </li>\r\n                        <li class=\"text\">\r\n                            <h3 class=\"nocaps\">1. SELECT AN OUR ENERGY PLAN.</h3>\r\n                            <p>Simply select the\r\n                                <a routerLink=\"/plan\">OUR Energy Plan</a> associated with the cause of your choice.\r\n                            </p>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                    <ul data-wow-delay=\"0ms\" data-wow-iteration=\"1\">\r\n                        <li class=\"icon width-full\">\r\n                            <i class=\"fa fa-check\"></i>\r\n                        </li>\r\n                        <li class=\"text\">\r\n                            <h3 class=\"nocaps\">2. SAVE MONEY</h3>\r\n                            <p>Save money on quality Residential or Corporate electricity services. You’ve just upgraded to a better service for a better price and gave back to the community!</p>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                    <ul data-wow-delay=\"0ms\" data-wow-iteration=\"1\">\r\n                        <li class=\"icon width-full\">\r\n                            <i class=\"fa fa-check\"></i>\r\n                        </li>\r\n                        <li class=\"text\">\r\n                            <h3 class=\"nocaps\">3. THANK YOU FOR GIVING BACK TO THE COMMUNITY!</h3>\r\n                            <p>You’ve just helped make a positive impact! Proceeds will go to the support the worthy cause that you chose.</p>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<section class=\"container\">\r\n    <h2 class=\"text-center\">CONTACT OUR COMMUNITY OUTREACH</h2>\r\n    <h3 class=\"text-center\">BECOME AN OUR ENERGY BROKER TODAY!</h3>\r\n    <hr />\r\n    <div class=\"cm-detail\">\r\n        <p>Check out the Community section in the OUR Life Blog for the late news on past, current and future projects</p>\r\n        <p>Please feel free to use the form below to submit your non profit cause to the OUR Community Outreach program</p>\r\n    </div>\r\n    <div class=\"brokersforms\">\r\n        <mat-card class=\"brokersUpdate\">\r\n            <mat-card-header>\r\n                <div mat-card-avatar>\r\n                    <i class=\"material-icons\">edit_mode</i>\r\n                </div>\r\n                <mat-card-title>TOGETHER WE CAN MAKE A DIFFERENCE!</mat-card-title>\r\n            </mat-card-header>\r\n            <div class=\"brokersalign\">\r\n                <form [formGroup]=\"myForm\" class=\"brokersdate\" (ngSubmit)=\"submit()\" #form>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Name\" formControlName=name>\r\n                        <mat-error *ngIf=\"f.name.errors?.required\">You must enter a value</mat-error>\r\n                        <mat-error *ngIf=\"f.name.errors?.pattern\">Invalid pattern</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Email\" formControlName=email>\r\n                        <mat-error *ngIf=\"f.email.errors?.required\"> You must enter a value</mat-error>\r\n                        <mat-error *ngIf=\"f.email.errors?.pattern\">Invalid pattern</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Phone\" formControlName=phone>\r\n                        <mat-error *ngIf=\"f.phone.errors?.required\"> You must enter a value</mat-error>\r\n                        <mat-error *ngIf=\"f.phone.errors?.pattern\">Invalid pattern</mat-error>\r\n                    </mat-form-field>\r\n                    <p>Please describe the Texas community cause that you are interested in having Our Energy sponsor or donate to. You may also list any questions that you may have regarding the OUR Community Outreach Program. We promise to review your\r\n                        request get back to you as soon as possible.</p>\r\n                    <mat-form-field>\r\n                        <textarea matInput placeholder=\"Message\" formControlName=message></textarea>\r\n                        <mat-error *ngIf=\"f.message.errors?.required\"> You must enter a value</mat-error>\r\n                    </mat-form-field>\r\n                    <div class=\"recaptcha\">\r\n                        <div>\r\n                            <app-recapcha></app-recapcha>\r\n                        </div>\r\n                        <div>\r\n                            <p class=\"error\"> {{cap_result}}</p>\r\n                        </div>\r\n                        <div>\r\n                            <button class=\"btn\">Submit</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <!-- <div class=\"spinner\" *ngIf=\"showSpinner\" style=\"margin-top: 30px;\">\r\n                <img src=\"../../../assets/img/fidget_red.gif\" width=\"150\" height=\"150\" alt=\"logo\">\r\n            </div>\r\n        -->\r\n        </mat-card>\r\n    </div>\r\n</section>\r\n<section class=\"container community\">\r\n    <h3>CHECK OUT OUR LATEST TEXAS COMMUNITY OUTREACH PROGRAMS</h3>\r\n    <mat-tab-group>\r\n        <mat-tab>\r\n            <ng-template mat-tab-label>\r\n                <a class=\"tools-heading\">All</a>\r\n            </ng-template>\r\n            <div class=\"community-tab col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/community/newhopehousing-1024x536.jpg\" alt=\"newhopehousing\">\r\n                <div class=\"\" style=\"padding: 20px;\">\r\n                    <h4 style=\"text-align: left\">First Texas Electricity Outreach Project</h4>\r\n                    <p style=\"text-align: left\" class=\"margin\">FIRST TEXAS ELECTRICITY OUTREACH PROJECT: NEW HOPE HOUSING OUR Energy is proud to announce their very first community outreach project:&nbsp; New Hope Housing! Thank you New Hope Housing for giving us the opportunity to give back to\r\n                        the beautiful Texas community! ‪#‎powertochangelives‬ If you know of a project that you would like for us to [...]</p>\r\n                    <a routerLink=\"/blog/first-texas-electricity-outreach-project\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\r\n                </div>\r\n            </div>\r\n        </mat-tab>\r\n        <mat-tab>\r\n            <ng-template mat-tab-label>\r\n                <a class=\"tools-heading\">Our Community</a>\r\n            </ng-template>\r\n            <div class=\"community-tab col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/community/newhopehousing-1024x536.jpg\" alt=\"newhopehousing\">\r\n                <div class=\"\" style=\"padding: 20px;\">\r\n                    <h4 style=\"text-align: left\">First Texas Electricity Outreach Project</h4>\r\n                    <p style=\"text-align: left\" class=\"margin\">FIRST TEXAS ELECTRICITY OUTREACH PROJECT: NEW HOPE HOUSING OUR Energy is proud to announce their very first community outreach project:&nbsp; New Hope Housing! Thank you New Hope Housing for giving us the opportunity to give back to\r\n                        the beautiful Texas community! ‪#‎powertochangelives‬ If you know of a project that you would like for us to [...]</p>\r\n                    <a routerLink=\"/blog/first-texas-electricity-outreach-project\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\r\n                </div>\r\n            </div>\r\n        </mat-tab>\r\n        <mat-tab>\r\n            <ng-template mat-tab-label>\r\n                <a class=\"tools-heading\">Our Energy Buzz</a>\r\n            </ng-template>\r\n            <div class=\"community-tab col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/community/newhopehousing-1024x536.jpg\" alt=\"newhopehousing\">\r\n                <div class=\"\" style=\"padding: 20px;\">\r\n                    <h4 style=\"text-align: left\">First Texas Electricity Outreach Project</h4>\r\n                    <p style=\"text-align: left\" class=\"margin\">FIRST TEXAS ELECTRICITY OUTREACH PROJECT: NEW HOPE HOUSING OUR Energy is proud to announce their very first community outreach project:&nbsp; New Hope Housing! Thank you New Hope Housing for giving us the opportunity to give back to\r\n                        the beautiful Texas community! ‪#‎powertochangelives‬ If you know of a project that you would like for us to [...]</p>\r\n                    <a routerLink=\"/blog/first-texas-electricity-outreach-project\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\r\n                </div>\r\n            </div>\r\n        </mat-tab>\r\n\r\n    </mat-tab-group>\r\n</section>\r\n<div class=\"member-special\">\r\n    <div class=\"container\">\r\n        <h3 class=\"title\">COMPARE TEXAS ENERGY RATES!</h3>\r\n        <p>Our Energy is much better than mere cheap electricity,\r\n            <br/> We make High Quality Texas Energy Affordable to You!</p>\r\n        <button class=\"btn btn-warning btn-lg\" routerLink=\"/special\">VIEW PLANS !\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Container/main/energy-saving.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid con-cumunity\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <h1>Energy Saving Tips</h1>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"clearfix\"></div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n            <img class=\"width-full\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/Energy%20Save%20Tips/EnergySavingTips_Leftside02.jpg\" height=\"1000\">\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 energy\">\n            <h2 class=\"sub-heading\">ENERGY CONSERVATION: IT SAVES YOU MONEY!</h2>\n            <p class=\"energy-tips-detail\">\n                Tired of terribly high energy bills? Reducing energy consumption is good for your budget and for the environment. Practicing good energy conservation habits no longer has to be a drudgery.\n            </p>\n            <p class=\"energy-tips-detail\">\n                There are many practical ideas that are easy to implement energy efficiency, at little or no cost. You’ll be surprised at how a few easy changes can go such a long way.\n            </p>\n            <p class=\"energy-tips-detail\">\n                At OUR Energy LLC we’re always searching for ways to help you stretch your dollar. We go beyond delivering high quality energy solutions at competitive electricity rates! We keep you up to date on the latest Energy Saving Tips to help you further reduce\n                your electric bill. Make sure that you cash in on the low energy prices by staying tuned to the energy conservation techniques in the\n                <a routerLink=\"/ourlife\" class=\"linkable\"> OUR Life Blog</a> today!\n            </p>\n            <p class=\"energy-tips-detail\">\n                Save on Energy Texas!\n            </p>\n            <iframe src=\"//www.facebook.com/plugins/like.php?href=https://www.ourenergyllc.com/energy-saving-tips/&amp;layout=standard&amp;show_faces=false&amp;action=like&amp;colorscheme=light\" scrolling=\"no\" frameborder=\"0\" allowtransparency=\"true\"></iframe>\n        </div>\n        <div class=\"col-lg-12 energy\">\n            <div class=\"title\">\n                <h1 class=\"energy-heading\">SAVE MONEY IN THREE EASY STEPS! </h1>\n            </div>\n            <h2 class=\"sub-heading\">ENERGY CONSERVATION: IT SAVES YOU MONEY!</h2>\n            <div class=\"features_sec39\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <ul data-wow-delay=\"0ms\" data-wow-iteration=\"1\">\n                        <li class=\"icon width-full\">\n                            <i class=\"fa fa-check\"></i>\n                        </li>\n                        <li class=\"text\">\n                            <h3 class=\"nocaps\">1. SIGN UP WITH OUR ENERGY.</h3>\n                            <p>Enjoy Better Service at a Better Price.\n                                <a href=\"/plan\" class=\"linkable\">Sign Up Today!</a>\n                            </p>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <ul data-wow-delay=\"0ms\" data-wow-iteration=\"1\">\n                        <li class=\"icon width-full\">\n                            <i class=\"fa fa-check\"></i>\n                        </li>\n                        <li class=\"text\">\n                            <h3 class=\"nocaps\">2. REFER A FRIEND</h3>\n                            <p>EARN CASH CREDIT for your Referrals. The More, the Merrier!\n                                <a href=\"/special\" class=\"linkable\">Start Earning Credits Today!</a>\n                            </p>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <ul data-wow-delay=\"0ms\" data-wow-iteration=\"1\">\n                        <li class=\"icon width-full\">\n                            <i class=\"fa fa-check\"></i>\n                        </li>\n                        <li class=\"text\">\n                            <h3 class=\"nocaps\">3. APPLY SAVING TIPS</h3>\n                            <p>Keep up to date on the latest Energy Saving Tips brought to you by Our Energy.</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<section class=\"energy-banner\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\"></div>\n            <div class=\"col-md-6\">\n                <h2>Energy News! </h2>\n                <p>We’ll keep you in the loop! Whether it’s energy industry and Texas energy announcements, new alternative energy technology, contest winners, TDU information or Our Energy company updates, we’ll keep you informed.</p>\n                <h2>HAVE YOU LIKED OUR FACEBOOK PAGE YET?</h2>\n                <p> Keep informed on how to obtain and maintain Lower Energy Bills, the latest Member Promotions and Specials, what’s fun in Texas, Community Outreach Projects and much more!\n                </p>\n                <p>Your long search for electric companies in Texas has finally ended.</p>\n                <h5 routerLink=\"/plan\">Sign up with OUR Energy Today!</h5>\n                <iframe src=\"//www.facebook.com/plugins/like.php?href=https://www.ourenergyllc.com/energy-saving-tips/&amp;layout=standard&amp;show_faces=false&amp;action=like&amp;colorscheme=light\" scrolling=\"no\" frameborder=\"0\" allowtransparency=\"true\"></iframe>\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"container community\">\n    <h3>CHECK OUT OUR LATEST ENERGY SAVING TIPS</h3>\n    <mat-tab-group>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <a class=\"tools-heading\" (click)=\"loadMoretab()\">All</a>\n            </ng-template>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/08df25c5dcedb480f91e50535e56f48c_Post-Insert-Ourenergy-814-363-c.jpg\" alt=\"\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">TEXAS NEW YEARS SOUND ADVICE FOR 2017</h4>\n                        <p class=\"margin\">Let’s say good-bye to 2016 and hello to 2017 in the most positive way, with Texas New Years Sound Advice! It’s been a memorable year filled with every type of emotion possible. At OurEnergy, we always highlight the positive moments\n                            to be filled with hope for the coming year. We’d love to thank each and [...]</p>\n                        <a routerLink=\"/ourlife/texas-new-years-sound-advice-for-2017\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/8817676911c7cb153bb7c10aacf587e3_BlogPost2-814-363-c.jpg\" alt=\"\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">HOME WEATHERPROOFING TIPS</h4>\n                        <p class=\"margin\">Want to Save Money on Energy? Weatherproof Your Home! TOP FIVE HOME WEATHERPROOFING TIPS FROM OUR ENERGY: Now that we are about to go into the fall season, it's a great time to weatherproof your home.&nbsp; By planning ahead you\n                            will help save money on energy during the cold winter season.&nbsp; Save money and enjoy [...]</p>\n                        <a routerLink=\"/ourlife/home-weatherproofing-tips\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/cfad90a2be726e6b9768a5b8095a4c47_Chutney-OurEnergy-Post-ThanksGiving-814-363-c.jpg\" alt=\"Best Thanksgiving Cranberry Chutney Recipe - www.OurEnergyLLC\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">BEST THANKSGIVING CRANBERRY CHUTNEY RECIPE</h4>\n                        <p class=\"margin\">SAVE MONEY &amp; IMPRESS THIS THANKSGIVING! Try this Stove Top Thanksgiving Cranberry Chutney With Thanksgiving and December Holidays just around the corner, here is an amazing side dish treat you won't want to miss!&nbsp; A Thanksgiving\n                            dinner with all of the trimmings is notorious to kick up your grocery and energy bills.&nbsp; This Thanksgiving Cranberry [...]</p>\n                        <a routerLink=\"/ourlife/best-thanksgiving-cranberry-chutney-recipe\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div id=\"demo\" class=\"collapse\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/c54b32f01507473468c4dabc1b910287_blog-2-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">TEXAS TIPS TO STAY COOL ON A BUDGET</h4>\n                            <p class=\"margin\">In Texas seasons work differently than the rest of the country.&nbsp; Here it can get: dry, arid, muggy, sticky, hot and \"hotter than Hades\".&nbsp; It's also one of the few places where you'll wear a jacket one day and be scorched\n                                by blistering heat the next.&nbsp; Still, no one can take away the fact that [...]</p>\n                            <a routerLink=\"/ourlif\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/65f36ac6e201411e508aa04166a26eef_texascaviar-Blog-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">BEST TEXAS CAVIAR RECIPE</h4>\n                            <p class=\"margin\">HERE'S A FUN AND VERY TASTY ENERGY SAVING TIP! Try the Best Texas Caviar Recipe of All Time. It's feeling hot and muggy.&nbsp; Yes, it's good ole Texas weather for y'all!&nbsp; Here's a delicious take on a classic Texas treat:&nbsp;\n                                the Best Texas Caviar Recipe.&nbsp; Yes, I know that you've tried a dozen types of [...]</p>\n                            <a routerLink=\"/ourlif/best-texas-caviar-recipe\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/2afe2725715d17667670f4225bf8bb78_EnergySavingRecipies-02-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">ENERGY SAVING – NATIONAL HOT DOG DAY RECIPE</h4>\n                            <p class=\"margin\">TIME FOR A YUMMY ENERGY SAVING TIP! BBQ ANYONE?&nbsp; National Hot Dog Day Recipe In honor of National Hot Dog Month, we're kicking things off with a great energy saving recipe with a Texas twist!&nbsp; A Texas Style National\n                                Hot Dog Recipe brought to you by Our Energy Texas. It would make perfect sense that [...]</p>\n                            <a routerLink=\"/ourlif/energy-saving-recipe-national-hot-dog-day\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/527492d43b5cc405bd881d6bed631f36_Pekanpieday-featured-03-814-363-c.jpg\" alt=\"\">\n                        <div>\n                            <h4 class=\"tab-heading\">TEXAS NO BAKE MAPLE PECAN PIE WITH SPIKED CREAM</h4>\n                            <p>HAPPY PECAN DAY TEXAS! Yes, it's Pecan Day, not National Pecan Day but just Pecan Day. It might sound a bit nutty that there would be two days of the year to celebrate pecans but as Texans, we love it! After all, the Pecan\n                                Tree has been the national tree of Texas since 1919.Roll [...]\n                            </p>\n                            <a routerLink=\"/blog/texas-no-bake-maple-pecan-pie-bourbon-spiked-cream\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/f0a89fb3bf4f04fdee240bc7246b3567_BlogPost-1-814-363-c.jpg\" alt=\"Enjoy a Year of Money Savings Texas Energy\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">Enjoy a Year of Quality Electricity Texas</h4>\n                            <p>Let the Savings Begin! Saving Money.&nbsp; Everyone wants to do it.&nbsp; Many feel that it's easier said than done.&nbsp; Others just smile and know that they are doing it right.&nbsp; How do they do it?&nbsp; Find Quality\n                                Electricity Texas! How to Enjoy a Year of Money Savings:&nbsp; Every Penny Counts! You will be surprised to [...]\n                            </p>\n                        </div>\n                        <a routerLink=\"/blog\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/66588a56a3e2c1e3f59837d388156a76_GreenEnergy-Blog_OurEnergyPost-18-feb-2106-1-814-363-c.jpg\" alt=\"Enjoy a Year of Money Savings Texas Energy\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">GREEN ELECTRICITY FOR A BRIGHTER FUTURE</h4>\n                            <p>Green Electricity: Benefits for Today and Tomorrow What Is it Green Electricity? Green Electricity, Green Energy or Renewable Energy are the alternative energy sources, occurring naturally that are renewable, sustainable and\n                                clean. The main types of green energy are: solar, wind, hydroelectric, Geothermal and Biomass. For more information, view About Green Energy. What's the Big [...]\n                            </p>\n                        </div>\n                        <a routerLink=\"/blog/green-electricity-for-a-brighter-future\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/31177dc582aa0f3df99b43f4bffa00ae_BlogPost-814-363-c.jpg\" alt=\"Ourenergy Saving Money\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">FIND LOW ENERGY RATES IN 2016</h4>\n                            <p class=\"margin\">IT'S 2016...HOORAY!!! After all of the fireworks have gone off and the guests have gone home... Time to Start Those New Year's Resolutions. Which is the Number One Resolution for 2016 in Texas? STOP Paying those HIGH Energy\n                                Bills! Do you know where to find low energy rates? Before you start to find low energy [...]</p>\n                        </div>\n                        <a routerLink=\"/blog/find-low-energy-rates-in-2016\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/a1f7d4f5b5f7b8122bc8b211f84fdd6b_5000-814-363-c.jpg\" alt=\"thank you\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">PUTTING TEXAS ENERGY INTO SOCIAL MEDIA</h4>\n                            <p class=\"margin\">Putting Texas Energy into Social Media In 2015 we launched our Social Media Project in order to bring Texas Energy into Social Media! In December of 2015, we hit a 5000 likes milestone on Facebook! We are happy to have so many\n                                people on board our Social Media outlets getting in on the fun! Social [...]</p>\n                        </div>\n                        <a routerLink=\"/blog/putting-texas-energy-into-social-media\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/35ee721785f6e6bd6e876ddd99043ea7_TExasGlare-814-363-c.jpg\" alt=\"Our Energy\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">OUR ENERGY LAUNCHES NEW WEBSITE</h4>\n                            <p>Welcome to the new face of OUR Energy. We are delighted to announce our brand new OUR Energy website with an enhanced online experience! At OUR Energy, we treasure you as a customer and are always trying to find new ways of\n                                going the extra mile. You deserve it! Bring on the Good News! Let’s […]</p>\n                            <a routerLink=\"/blog/our-energy-launches-new-website\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/177449a4c4c18feb500cf6bc1face2a5_fEATUREDDOG1-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">Cheap Texas Energy Round Up</h4>\n                            <p class=\"margin\">Tired of the Stick Ups? STOP Paying those HIGH Energy Bills! Get Great Cheap Texas Energy Today! Meet Ralph. He’s here to help us get a good idea of what it's like to pay bills these days. Everything is so expensive! Energy\n                                is no exception. Summers are getting hotter and freezing cold winters are just [...]</p>\n                            <a routerLink=\"/Our-blogs/cheap-texas-energy-round-up\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/22b0a16d8550be550498ed0969c85497_CoolFriend-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">SUMMER ENERGY SAVING TIPS</h4>\n                            <p class=\"margin\">Like the Will Smith song goes, “It’s Summer, Summer time…Time to sit back and unwind…” With your spring-cleaning over and done with, the last thing on your mind is to put on your handyman hat to make your home energy efficient.\n                                OK, I said it. Now, how do we go about lowering your energy bill? […]</p>\n                            <a routerLink=\"/blog/summer-energy-saving-tips\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/Horse-Tail-LED-Lights_Featured.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">TOP FIVE CREATIVE USES OF LED</h4>\n                            <p class=\"margin\">LED LIGHTS: Bringing Science Fiction Alive! By now, I’m sure that you have heard about how LED lights are far superior to the traditional incandescent light bulbs and the alternative compact fluorescents (CFLs). But, how much\n                                do you really know about how their being used today? Light Emitting Diode is not the cousin of the [...]\n                            </p>\n                            <a routerLink=\"/blog/top-five-creative-uses-of-led\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/5e68527ed58c1ee27cd63b16e2aecc89_GreenEnergyFeatured1-814-363-c.jpg\" alt=\"Green Energy Our ENERGY\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">ABOUT GREEN ENERGY</h4>\n                            <p class=\"margin\">Time to Turn on the Green About Green Energy. Growing concerns on the impact to the environment and oil prices have resulted in more and more people turning to the “green” alternatives. Thereʼs all this talk about green energy\n                                and energy conservation. What exactly is green energy? Why do they call it “Green Energy”? The […]</p>\n                            <a routerLink=\"/Our-blogs/green-energy\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12 col-md-12 col-sm-12 load-more-btn ng-star-inserted\">\n                <button data-target=\"#demo\" data-toggle=\"collapse\" type=\"button\" (click)=\"loadMore()\">{{loadmorebtn}}</button>\n            </div>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <a class=\"tools-heading\" (click)=\"loadMoretab()\">Energy News</a>\n            </ng-template>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/f0a89fb3bf4f04fdee240bc7246b3567_BlogPost-1-814-363-c.jpg\" alt=\"Enjoy a Year of Money Savings Texas Energy\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">Enjoy a Year of Quality Electricity Texas</h4>\n                        <p class=\"margin\">Let the Savings Begin! Saving Money.&nbsp; Everyone wants to do it.&nbsp; Many feel that it's easier said than done.&nbsp; Others just smile and know that they are doing it right.&nbsp; How do they do it?&nbsp; Find Quality Electricity\n                            Texas! How to Enjoy a Year of Money Savings:&nbsp; Every Penny Counts! You will be surprised to [...]\n                        </p>\n                        <a routerLink=\"/blog\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/31177dc582aa0f3df99b43f4bffa00ae_BlogPost-814-363-c.jpg\" alt=\"Ourenergy Saving Money\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">FIND LOW ENERGY RATES IN 2016</h4>\n                        <p class=\"margin\">IT'S 2016...HOORAY!!! After all of the fireworks have gone off and the guests have gone home... Time to Start Those New Year's Resolutions. Which is the Number One Resolution for 2016 in Texas? STOP Paying those HIGH Energy Bills!\n                            Do you know where to find low energy rates? Before you start to find low energy [...]</p>\n                        <a routerLink=\"/blog/find-low-energy-rates-in-2016\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/a1f7d4f5b5f7b8122bc8b211f84fdd6b_5000-814-363-c.jpg\" alt=\"thank you\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">PUTTING TEXAS ENERGY INTO SOCIAL MEDIA</h4>\n                        <p class=\"margin\">Putting Texas Energy into Social Media In 2015 we launched our Social Media Project in order to bring Texas Energy into Social Media! In December of 2015, we hit a 5000 likes milestone on Facebook! We are happy to have so many\n                            people on board our Social Media outlets getting in on the fun! Social [...]</p>\n                        <a routerLink=\"/blog/putting-texas-energy-into-social-media\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div id=\"demo\" class=\"collapse\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/35ee721785f6e6bd6e876ddd99043ea7_TExasGlare-814-363-c.jpg\" alt=\"Our Energy\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">OUR ENERGY LAUNCHES NEW WEBSITE</h4>\n                            <p>Welcome to the new face of OUR Energy. We are delighted to announce our brand new OUR Energy website with an enhanced online experience! At OUR Energy, we treasure you as a customer and are always trying to find new ways of\n                                going the extra mile. You deserve it! Bring on the Good News! Let’s […]</p>\n                            <a routerLink=\"/blog/our-energy-launches-new-website\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12 col-md-12 col-sm-12 load-more-btn ng-star-inserted\">\n                <button data-target=\"#demo\" data-toggle=\"collapse\" type=\"button\" (click)=\"loadMore()\">{{loadmorebtn}}</button>\n            </div>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <a class=\"tools-heading\" (click)=\"loadMoretab()\">Energy Tips</a>\n            </ng-template>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/2afe2725715d17667670f4225bf8bb78_EnergySavingRecipies-02-814-363-c.jpg\" alt=\"\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">ENERGY SAVING – NATIONAL HOT DOG DAY RECIPE</h4>\n                        <p class=\"margin\">TIME FOR A YUMMY ENERGY SAVING TIP! BBQ ANYONE?&nbsp; National Hot Dog Day Recipe In honor of National Hot Dog Month, we're kicking things off with a great energy saving recipe with a Texas twist!&nbsp; A Texas Style National Hot\n                            Dog Recipe brought to you by Our Energy Texas. It would make perfect sense that [...]</p>\n                        <a routerLink=\"/ourlif/energy-saving-recipe-national-hot-dog-day\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/08df25c5dcedb480f91e50535e56f48c_Post-Insert-Ourenergy-814-363-c.jpg\" alt=\"\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">TEXAS NEW YEARS SOUND ADVICE FOR 2017</h4>\n                        <p class=\"margin\">Let’s say good-bye to 2016 and hello to 2017 in the most positive way, with Texas New Years Sound Advice! It’s been a memorable year filled with every type of emotion possible. At OurEnergy, we always highlight the positive moments\n                            to be filled with hope for the coming year. We’d love to thank each and [...]</p>\n                        <a routerLink=\"/ourlife/texas-new-years-sound-advice-for-2017\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/8817676911c7cb153bb7c10aacf587e3_BlogPost2-814-363-c.jpg\" alt=\"\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">HOME WEATHERPROOFING TIPS</h4>\n                        <p class=\"margin\">Want to Save Money on Energy? Weatherproof Your Home! TOP FIVE HOME WEATHERPROOFING TIPS FROM OUR ENERGY: Now that we are about to go into the fall season, it's a great time to weatherproof your home.&nbsp; By planning ahead you\n                            will help save money on energy during the cold winter season.&nbsp; Save money and enjoy [...]</p>\n                        <a routerLink=\"/ourlife/home-weatherproofing-tips\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div id=\"demo\" class=\"collapse\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/527492d43b5cc405bd881d6bed631f36_Pekanpieday-featured-03-814-363-c.jpg\" alt=\"\">\n                        <div>\n                            <h4 class=\"tab-heading\">TEXAS NO BAKE MAPLE PECAN PIE WITH SPIKED CREAM</h4>\n                            <p>HAPPY PECAN DAY TEXAS! Yes, it's Pecan Day, not National Pecan Day but just Pecan Day. It might sound a bit nutty that there would be two days of the year to celebrate pecans but as Texans, we love it! After all, the Pecan\n                                Tree has been the national tree of Texas since 1919.Roll [...]\n                            </p>\n                            <a routerLink=\"/blog/texas-no-bake-maple-pecan-pie-bourbon-spiked-cream\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/f0a89fb3bf4f04fdee240bc7246b3567_BlogPost-1-814-363-c.jpg\" alt=\"Enjoy a Year of Money Savings Texas Energy\">\n                        <div>\n                            <h4 class=\"tab-heading\">Enjoy a Year of Quality Electricity Texas</h4>\n                            <p>Let the Savings Begin! Saving Money. Everyone wants to do it.Many feel that it's easier said than done.&nbsp; Others just smile and know that they are doing it right.&nbsp; How do they do it?&nbsp; Find Quality Electricity\n                                Texas! How to Enjoy a Year of Money Savings:Every Penny Counts! You will be surprised to [...]\n                            </p>\n                        </div>\n                        <a routerLink=\"/blog\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/66588a56a3e2c1e3f59837d388156a76_GreenEnergy-Blog_OurEnergyPost-18-feb-2106-1-814-363-c.jpg\" alt=\"Enjoy a Year of Money Savings Texas Energy\">\n                        <div>\n                            <h4 class=\"tab-heading\">GREEN ELECTRICITY FOR A BRIGHTER FUTURE</h4>\n                            <p>Green Electricity: Benefits for Today and Tomorrow What Is it Green Electricity? Green Electricity, Green Energy or Renewable Energy are the alternative energy sources, occurring naturally that are renewable, sustainable and\n                                clean. The main types of green energy are: solar, wind, hydroelectric, Geothermal and Biomass. For more information, view About Green Energy. What's the Big [...]\n                            </p>\n                        </div>\n                        <a routerLink=\"/blog/green-electricity-for-a-brighter-future\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/177449a4c4c18feb500cf6bc1face2a5_fEATUREDDOG1-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">Cheap Texas Energy Round Up</h4>\n                            <p class=\"margin\">Tired of the Stick Ups? STOP Paying those HIGH Energy Bills! Get Great Cheap Texas Energy Today! Meet Ralph. He’s here to help us get a good idea of what it's like to pay bills these days. Everything is so expensive! Energy\n                                is no exception. Summers are getting hotter and freezing cold winters are just [...]</p>\n                            <a routerLink=\"/Our-blogs/cheap-texas-energy-round-up\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/22b0a16d8550be550498ed0969c85497_CoolFriend-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">SUMMER ENERGY SAVING TIPS</h4>\n                            <p class=\"margin\">Like the Will Smith song goes, “It’s Summer, Summer time…Time to sit back and unwind…” With your spring-cleaning over and done with, the last thing on your mind is to put on your handyman hat to make your home energy efficient.\n                                OK, I said it. Now, how do we go about lowering your energy bill? […]</p>\n                            <a routerLink=\"/blog/summer-energy-saving-tips\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/Horse-Tail-LED-Lights_Featured.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">TOP FIVE CREATIVE USES OF LED</h4>\n                            <p class=\"margin\">LED LIGHTS: Bringing Science Fiction Alive! By now, I’m sure that you have heard about how LED lights are far superior to the traditional incandescent light bulbs and the alternative compact fluorescents (CFLs). But, how much\n                                do you really know about how their being used today? Light Emitting Diode is not the cousin of the [...]\n                            </p>\n                            <a routerLink=\"/blog/top-five-creative-uses-of-led\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/65f36ac6e201411e508aa04166a26eef_texascaviar-Blog-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">BEST TEXAS CAVIAR RECIPE</h4>\n                            <p class=\"margin\">HERE'S A FUN AND VERY TASTY ENERGY SAVING TIP! Try the Best Texas Caviar Recipe of All Time. It's feeling hot and muggy.&nbsp; Yes, it's good ole Texas weather for y'all!&nbsp; Here's a delicious take on a classic Texas treat:&nbsp;\n                                the Best Texas Caviar Recipe.&nbsp; Yes, I know that you've tried a dozen types of [...]</p>\n                            <a routerLink=\"/ourlif/best-texas-caviar-recipe\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/cfad90a2be726e6b9768a5b8095a4c47_Chutney-OurEnergy-Post-ThanksGiving-814-363-c.jpg\" alt=\"Best Thanksgiving Cranberry Chutney Recipe - www.OurEnergyLLC\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">BEST THANKSGIVING CRANBERRY CHUTNEY RECIPE</h4>\n                            <p class=\"margin\">SAVE MONEY &amp; IMPRESS THIS THANKSGIVING! Try this Stove Top Thanksgiving Cranberry Chutney With Thanksgiving and December Holidays just around the corner, here is an amazing side dish treat you won't want to miss!&nbsp;\n                                A Thanksgiving dinner with all of the trimmings is notorious to kick up your grocery and energy bills.&nbsp; This Thanksgiving Cranberry [...]</p>\n                            <a routerLink=\"/ourlife/best-thanksgiving-cranberry-chutney-recipe\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/c54b32f01507473468c4dabc1b910287_blog-2-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">TEXAS TIPS TO STAY COOL ON A BUDGET</h4>\n                            <p class=\"margin\">In Texas seasons work differently than the rest of the country.&nbsp; Here it can get: dry, arid, muggy, sticky, hot and \"hotter than Hades\".&nbsp; It's also one of the few places where you'll wear a jacket one day and be scorched\n                                by blistering heat the next.&nbsp; Still, no one can take away the fact that [...]</p>\n                            <a routerLink=\"/ourlif\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12 col-md-12 col-sm-12 load-more-btn ng-star-inserted\">\n                <button data-target=\"#demo\" data-toggle=\"collapse\" type=\"button\" (click)=\"loadMore()\">{{loadmorebtn}}</button>\n            </div>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <a routerLink=\".\" class=\"tools-heading color\" (click)=\"loadMoretab()\">Green Energy</a>\n            </ng-template>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/5e68527ed58c1ee27cd63b16e2aecc89_GreenEnergyFeatured1-814-363-c.jpg\" alt=\"Green Energy Our ENERGY\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">ABOUT GREEN ENERGY</h4>\n                        <p class=\"margin\">Time to Turn on the Green About Green Energy. Growing concerns on the impact to the environment and oil prices have resulted in more and more people turning to the “green” alternatives. Thereʼs all this talk about green energy\n                            and energy conservation. What exactly is green energy? Why do they call it “Green Energy”? The […]</p>\n                        <a routerLink=\"/Our-blogs/green-energy\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/Horse-Tail-LED-Lights_Featured.jpg\" alt=\"\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">TOP FIVE CREATIVE USES OF LED</h4>\n                        <p class=\"margin\">LED LIGHTS: Bringing Science Fiction Alive! By now, I’m sure that you have heard about how LED lights are far superior to the traditional incandescent light bulbs and the alternative compact fluorescents (CFLs). But, how much do\n                            you really know about how their being used today? Light Emitting Diode is not the cousin of the [...]\n                        </p>\n                        <a routerLink=\"/blog/top-five-creative-uses-of-led\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/66588a56a3e2c1e3f59837d388156a76_GreenEnergy-Blog_OurEnergyPost-18-feb-2106-1-814-363-c.jpg\" alt=\"Let's go green a better future begins today\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">GREEN ELECTRICITY FOR A BRIGHTER FUTURE</h4>\n                        <p class=\"margin\">Green Electricity:&nbsp; Benefits for Today and Tomorrow What Is it Green Electricity? Green Electricity, Green Energy or Renewable Energy are the alternative energy sources, occurring naturally that are renewable, sustainable\n                            and clean.&nbsp; The main types of green energy are:&nbsp; solar, wind, hydroelectric, Geothermal and Biomass.&nbsp; For more information, view About Green Energy. What's the Big [...]</p>\n                        <a routerLink=\"/blog/green-electricity-for-a-brighter-future\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div id=\"demo\" class=\"collapse\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/22b0a16d8550be550498ed0969c85497_CoolFriend-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">SUMMER ENERGY SAVING TIPS</h4>\n                            <p class=\"margin\">Like the Will Smith song goes, “It’s Summer, Summer time…Time to sit back and unwind…” With your spring-cleaning over and done with, the last thing on your mind is to put on your handyman hat to make your home energy efficient.\n                                OK, I said it. Now, how do we go about lowering your energy bill? […]</p>\n                            <a routerLink=\"/blog/summer-energy-saving-tips\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/cfad90a2be726e6b9768a5b8095a4c47_Chutney-OurEnergy-Post-ThanksGiving-814-363-c.jpg\" alt=\"Best Thanksgiving Cranberry Chutney Recipe - www.OurEnergyLLC\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">BEST THANKSGIVING CRANBERRY CHUTNEY RECIPE</h4>\n                            <p class=\"margin\">SAVE MONEY &amp; IMPRESS THIS THANKSGIVING! Try this Stove Top Thanksgiving Cranberry Chutney With Thanksgiving and December Holidays just around the corner, here is an amazing side dish treat you won't want to miss!&nbsp;\n                                A Thanksgiving dinner with all of the trimmings is notorious to kick up your grocery and energy bills.&nbsp; This Thanksgiving Cranberry [...]</p>\n                            <a routerLink=\"/ourlife/best-thanksgiving-cranberry-chutney-recipe\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12 col-md-12 col-sm-12 load-more-btn ng-star-inserted\">\n                <button data-target=\"#demo\" data-toggle=\"collapse\" type=\"button\" (click)=\"loadMore()\">{{loadmorebtn}}</button>\n            </div>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <a class=\"tools-heading\" (click)=\"loadMoretab()\">Our Energy Buzz</a>\n            </ng-template>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/c54b32f01507473468c4dabc1b910287_blog-2-814-363-c.jpg\" alt=\"\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">TEXAS TIPS TO STAY COOL ON A BUDGET</h4>\n                        <p class=\"margin\">In Texas seasons work differently than the rest of the country.&nbsp; Here it can get: dry, arid, muggy, sticky, hot and \"hotter than Hades\".&nbsp; It's also one of the few places where you'll wear a jacket one day and be scorched\n                            by blistering heat the next.&nbsp; Still, no one can take away the fact that [...]</p>\n                        <a routerLink=\"/ourlif\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/08df25c5dcedb480f91e50535e56f48c_Post-Insert-Ourenergy-814-363-c.jpg\" alt=\"\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">TEXAS NEW YEARS SOUND ADVICE FOR 2017</h4>\n                        <p class=\"margin\">Let’s say good-bye to 2016 and hello to 2017 in the most positive way, with Texas New Years Sound Advice! It’s been a memorable year filled with every type of emotion possible. At OurEnergy, we always highlight the positive moments\n                            to be filled with hope for the coming year. We’d love to thank each and [...]</p>\n                        <a routerLink=\"/ourlife/texas-new-years-sound-advice-for-2017\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/cfad90a2be726e6b9768a5b8095a4c47_Chutney-OurEnergy-Post-ThanksGiving-814-363-c.jpg\" alt=\"Best Thanksgiving Cranberry Chutney Recipe - www.OurEnergyLLC\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">BEST THANKSGIVING CRANBERRY CHUTNEY RECIPE</h4>\n                        <p class=\"margin\">SAVE MONEY &amp; IMPRESS THIS THANKSGIVING! Try this Stove Top Thanksgiving Cranberry Chutney With Thanksgiving and December Holidays just around the corner, here is an amazing side dish treat you won't want to miss!&nbsp; A Thanksgiving\n                            dinner with all of the trimmings is notorious to kick up your grocery and energy bills.&nbsp; This Thanksgiving Cranberry [...]</p>\n                        <a routerLink=\"/ourlife/best-thanksgiving-cranberry-chutney-recipe\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div id=\"demo\" class=\"collapse\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/2afe2725715d17667670f4225bf8bb78_EnergySavingRecipies-02-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">ENERGY SAVING – NATIONAL HOT DOG DAY RECIPE</h4>\n                            <p class=\"margin\">TIME FOR A YUMMY ENERGY SAVING TIP! BBQ ANYONE?&nbsp; National Hot Dog Day Recipe In honor of National Hot Dog Month, we're kicking things off with a great energy saving recipe with a Texas twist!&nbsp; A Texas Style National\n                                Hot Dog Recipe brought to you by Our Energy Texas. It would make perfect sense that [...]</p>\n                            <a routerLink=\"/ourlif/energy-saving-recipe-national-hot-dog-day\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/65f36ac6e201411e508aa04166a26eef_texascaviar-Blog-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">BEST TEXAS CAVIAR RECIPE</h4>\n                            <p class=\"margin\">HERE'S A FUN AND VERY TASTY ENERGY SAVING TIP! Try the Best Texas Caviar Recipe of All Time. It's feeling hot and muggy.&nbsp; Yes, it's good ole Texas weather for y'all!&nbsp; Here's a delicious take on a classic Texas treat:&nbsp;\n                                the Best Texas Caviar Recipe.&nbsp; Yes, I know that you've tried a dozen types of [...]</p>\n                            <a routerLink=\"/ourlif/best-texas-caviar-recipe\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/527492d43b5cc405bd881d6bed631f36_Pekanpieday-featured-03-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">TEXAS NO BAKE MAPLE PECAN PIE WITH SPIKED CREAM</h4>\n                            <p class=\"margin\">HAPPY PECAN DAY TEXAS! Yes, it's Pecan Day, not National Pecan Day but just Pecan Day. It might sound a bit nutty that there would be two days of the year to celebrate pecans but as Texans, we love it! After all, the Pecan\n                                Tree has been the national tree of Texas since 1919. Roll [...]\n                            </p>\n                            <a routerLink=\"/blog/texas-no-bake-maple-pecan-pie-bourbon-spiked-cream\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/31177dc582aa0f3df99b43f4bffa00ae_BlogPost-814-363-c.jpg\" alt=\"Ourenergy Saving Money\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">FIND LOW ENERGY RATES IN 2016</h4>\n                            <p class=\"margin\">IT'S 2016...HOORAY!!! After all of the fireworks have gone off and the guests have gone home... Time to Start Those New Year's Resolutions. Which is the Number One Resolution for 2016 in Texas? STOP Paying those HIGH Energy\n                                Bills! Do you know where to find low energy rates? Before you start to find low energy [...]</p>\n                        </div>\n                        <a routerLink=\"/blog/find-low-energy-rates-in-2016\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/f0a89fb3bf4f04fdee240bc7246b3567_BlogPost-1-814-363-c.jpg\" alt=\"Enjoy a Year of Money Savings Texas Energy\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">Enjoy a Year of Quality Electricity Texas</h4>\n                            <p>Let the Savings Begin! Saving Money.&nbsp; Everyone wants to do it.&nbsp; Many feel that it's easier said than done.&nbsp; Others just smile and know that they are doing it right.&nbsp; How do they do it?&nbsp; Find Quality\n                                Electricity Texas! How to Enjoy a Year of Money Savings:&nbsp; Every Penny Counts! You will be surprised to [...]\n                            </p>\n                        </div>\n                        <a routerLink=\"/blog\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/66588a56a3e2c1e3f59837d388156a76_GreenEnergy-Blog_OurEnergyPost-18-feb-2106-1-814-363-c.jpg\" alt=\"Enjoy a Year of Money Savings Texas Energy\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">GREEN ELECTRICITY FOR A BRIGHTER FUTURE</h4>\n                            <p>Green Electricity: Benefits for Today and Tomorrow What Is it Green Electricity? Green Electricity, Green Energy or Renewable Energy are the alternative energy sources, occurring naturally that are renewable, sustainable and\n                                clean. The main types of green energy are: solar, wind, hydroelectric, Geothermal and Biomass. For more information, view About Green Energy. What's the Big [...]\n                            </p>\n                        </div>\n                        <a routerLink=\"/blog/green-electricity-for-a-brighter-future\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/a1f7d4f5b5f7b8122bc8b211f84fdd6b_5000-814-363-c.jpg\" alt=\"thank you\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">PUTTING TEXAS ENERGY INTO SOCIAL MEDIA</h4>\n                            <p class=\"margin\">Putting Texas Energy into Social Media In 2015 we launched our Social Media Project in order to bring Texas Energy into Social Media! In December of 2015, we hit a 5000 likes milestone on Facebook! We are happy to have so many\n                                people on board our Social Media outlets getting in on the fun! Social [...]</p>\n                        </div>\n                        <a routerLink=\"/blog/putting-texas-energy-into-social-media\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/177449a4c4c18feb500cf6bc1face2a5_fEATUREDDOG1-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">Cheap Texas Energy Round Up</h4>\n                            <p class=\"margin\">Tired of the Stick Ups? STOP Paying those HIGH Energy Bills! Get Great Cheap Texas Energy Today! Meet Ralph. He’s here to help us get a good idea of what it's like to pay bills these days. Everything is so expensive! Energy\n                                is no exception. Summers are getting hotter and freezing cold winters are just [...]</p>\n                            <a routerLink=\"/Our-blogs/cheap-texas-energy-round-up\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/35ee721785f6e6bd6e876ddd99043ea7_TExasGlare-814-363-c.jpg\" alt=\"Our Energy\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">OUR ENERGY LAUNCHES NEW WEBSITE</h4>\n                            <p>Welcome to the new face of OUR Energy. We are delighted to announce our brand new OUR Energy website with an enhanced online experience! At OUR Energy, we treasure you as a customer and are always trying to find new ways of\n                                going the extra mile. You deserve it! Bring on the Good News! Let’s […]</p>\n                            <a routerLink=\"/blog/our-energy-launches-new-website\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/22b0a16d8550be550498ed0969c85497_CoolFriend-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">SUMMER ENERGY SAVING TIPS</h4>\n                            <p class=\"margin\">Like the Will Smith song goes, “It’s Summer, Summer time…Time to sit back and unwind…” With your spring-cleaning over and done with, the last thing on your mind is to put on your handyman hat to make your home energy efficient.\n                                OK, I said it. Now, how do we go about lowering your energy bill? […]</p>\n                            <a routerLink=\"/blog/summer-energy-saving-tips\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12 col-md-12 col-sm-12 load-more-btn ng-star-inserted\">\n                <button data-target=\"#demo\" data-toggle=\"collapse\" type=\"button\" (click)=\"loadMore()\">{{loadmorebtn}}</button>\n            </div>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <a routerLink=\".\" class=\"tools-heading color\" (click)=\"loadMoretab()\">Texas</a>\n            </ng-template>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/c54b32f01507473468c4dabc1b910287_blog-2-814-363-c.jpg\" alt=\"\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">TEXAS TIPS TO STAY COOL ON A BUDGET</h4>\n                        <p class=\"margin\">In Texas seasons work differently than the rest of the country.&nbsp; Here it can get: dry, arid, muggy, sticky, hot and \"hotter than Hades\".&nbsp; It's also one of the few places where you'll wear a jacket one day and be scorched\n                            by blistering heat the next.&nbsp; Still, no one can take away the fact that [...]</p>\n                        <a routerLink=\"/ourlif\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/08df25c5dcedb480f91e50535e56f48c_Post-Insert-Ourenergy-814-363-c.jpg\" alt=\"\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">TEXAS NEW YEARS SOUND ADVICE FOR 2017</h4>\n                        <p class=\"margin\">Let’s say good-bye to 2016 and hello to 2017 in the most positive way, with Texas New Years Sound Advice! It’s been a memorable year filled with every type of emotion possible. At OurEnergy, we always highlight the positive moments\n                            to be filled with hope for the coming year. We’d love to thank each and [...]</p>\n                        <a routerLink=\"/ourlife/texas-new-years-sound-advice-for-2017\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/cfad90a2be726e6b9768a5b8095a4c47_Chutney-OurEnergy-Post-ThanksGiving-814-363-c.jpg\" alt=\"Best Thanksgiving Cranberry Chutney Recipe - www.OurEnergyLLC\">\n                    <div style=\"padding: 20px;\">\n                        <h4 class=\"tab-heading\">BEST THANKSGIVING CRANBERRY CHUTNEY RECIPE</h4>\n                        <p class=\"margin\">SAVE MONEY &amp; IMPRESS THIS THANKSGIVING! Try this Stove Top Thanksgiving Cranberry Chutney With Thanksgiving and December Holidays just around the corner, here is an amazing side dish treat you won't want to miss!&nbsp; A Thanksgiving\n                            dinner with all of the trimmings is notorious to kick up your grocery and energy bills.&nbsp; This Thanksgiving Cranberry [...]</p>\n                        <a routerLink=\"/ourlife/best-thanksgiving-cranberry-chutney-recipe\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div id=\"demo\" class=\"collapse\">\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/2afe2725715d17667670f4225bf8bb78_EnergySavingRecipies-02-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">ENERGY SAVING – NATIONAL HOT DOG DAY RECIPE</h4>\n                            <p class=\"margin\">TIME FOR A YUMMY ENERGY SAVING TIP! BBQ ANYONE?&nbsp; National Hot Dog Day Recipe In honor of National Hot Dog Month, we're kicking things off with a great energy saving recipe with a Texas twist!&nbsp; A Texas Style National\n                                Hot Dog Recipe brought to you by Our Energy Texas. It would make perfect sense that [...]</p>\n                            <a routerLink=\"/ourlif/energy-saving-recipe-national-hot-dog-day\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/65f36ac6e201411e508aa04166a26eef_texascaviar-Blog-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">BEST TEXAS CAVIAR RECIPE</h4>\n                            <p class=\"margin\">HERE'S A FUN AND VERY TASTY ENERGY SAVING TIP! Try the Best Texas Caviar Recipe of All Time. It's feeling hot and muggy.&nbsp; Yes, it's good ole Texas weather for y'all!&nbsp; Here's a delicious take on a classic Texas treat:&nbsp;\n                                the Best Texas Caviar Recipe.&nbsp; Yes, I know that you've tried a dozen types of [...]</p>\n                            <a routerLink=\"/ourlif/best-texas-caviar-recipe\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/527492d43b5cc405bd881d6bed631f36_Pekanpieday-featured-03-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">TEXAS NO BAKE MAPLE PECAN PIE WITH SPIKED CREAM</h4>\n                            <p>HAPPY PECAN DAY TEXAS! Yes, it's Pecan Day, not National Pecan Day but just Pecan Day. It might sound a bit nutty that there would be two days of the year to celebrate pecans but as Texans, we love it! After all, the Pecan\n                                Tree has been the national tree of Texas since 1919. Roll [...]\n                            </p>\n                            <a routerLink=\"/blog/texas-no-bake-maple-pecan-pie-bourbon-spiked-cream\" class=\"comunity-read-more margin-top\" title=\"Read more\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                    <div class=\"community-tab\">\n                        <img width=\"100%\" height=\"240px\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/177449a4c4c18feb500cf6bc1face2a5_fEATUREDDOG1-814-363-c.jpg\" alt=\"\">\n                        <div style=\"padding: 20px;\">\n                            <h4 class=\"tab-heading\">Cheap Texas Energy Round Up</h4>\n                            <p class=\"margin\">Tired of the Stick Ups? STOP Paying those HIGH Energy Bills! Get Great Cheap Texas Energy Today! Meet Ralph. He’s here to help us get a good idea of what it's like to pay bills these days. Everything is so expensive! Energy\n                                is no exception. Summers are getting hotter and freezing cold winters are just [...]</p>\n                            <a routerLink=\"/Our-blogs/cheap-texas-energy-round-up\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-12 col-md-12 col-sm-12 load-more-btn ng-star-inserted\">\n                <button data-target=\"#demo\" data-toggle=\"collapse\" type=\"button\" (click)=\"loadMore()\">{{loadmorebtn}}</button>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n</section>\n<div class=\"member-special\">\n    <div class=\"container\">\n        <h3 class=\"title\">COMPARE TEXAS ENERGY RATES!</h3>\n        <p>Our Energy is much better than mere cheap electricity,\n            <br/> We make High Quality Texas Energy Affordable to You!</p>\n        <button class=\"btn btn-warning btn-lg\" routerLink=\"/special\">VIEW PLANS !\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Container/main/enroll-process.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"residential-main\">\r\n    <div class=\"heading\">\r\n        <h1>Lets Find Your Meter</h1>\r\n        <h4>Enter your Street Address and City or Premise ID so we can locate you.</h4>\r\n    </div>\r\n    <div class=\"enrolled\">\r\n        <form [formGroup]=enrollProcessForm (ngSubmit)=\"submit()\">\r\n            <mat-card class=\"enrol mat-elevation-z8\">\r\n                <div class=\"enroll-main\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Street Address</mat-label>\r\n                        <input matInput placeholder=\"Please Enter Street Address\" formControlName=service_address maxlength=\"35\">\r\n                        <mat-icon matSuffix>person_pin_circle</mat-icon>\r\n                        <mat-error *ngIf=\"enrollProcessForm.controls.service_address.errors?.required\">Service Address is required</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>City</mat-label>\r\n                        <input matInput placeholder=\"Please Enter City\" formControlName=city maxlength=\"24\">\r\n                        <mat-icon matSuffix>location_city</mat-icon>\r\n                        <!-- <mat-error *ngIf=\"enrollProcessForm.controls.city.errors?.required\">City is required</mat-error> -->\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Zip Code</mat-label>\r\n                        <input matInput placeholder=\"Please Enter Zip Code\" formControlName=\"zip_code\" maxlength=\"5\">\r\n                        <mat-icon matSuffix>place</mat-icon>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"enroll-or\">\r\n                    <label>OR</label>\r\n                </div>\r\n                <div class=\"enroll-main\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Premise/ESID</mat-label>\r\n                        <input matInput placeholder=\"Please Enter Premise/ESID\" name=\"premise_id\" formControlName='premise_id' [(ngModel)]=ESID maxlength=\"50\">\r\n                        <mat-icon matSuffix>my_location</mat-icon>\r\n                        <mat-error *ngIf=\"enrollProcessForm.controls.premise_id.errors?.required\">Premise/ESID is required</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <button  [disabled]=\"searchPremiseBtn\" type=\"submit\">Search</button>\r\n                <div style=\"display:flex; flex-direction:column\">\r\n                    <b style=\"margin-top:10px;\"><i class=\"fa fa-warning\" style=\"font-size:18px;color:#dcc70b;margin:5px;\"></i>Note:If you are unable to locate your address or have a special request contact us at 1-888-545-4687 and we will be happy to assist you!</b>\r\n                    <b style=\"margin-top:10px;text-align:center;font-weight:bold;color:red\">{{errorMessagee}}</b>\r\n                </div>\r\n                <mat-progress-bar *ngIf=\"status==true\" mode=\"indeterminate\"></mat-progress-bar>\r\n            </mat-card>\r\n        </form>\r\n        <div *ngIf=\"summary\">\r\n            <div class=\"enroll-plan\" *ngFor=\"let value of products;index as i;\">\r\n                <div class=\"pro\">\r\n                    <h4>Product Information</h4>\r\n                </div>\r\n                <h2>{{value.product_info}}</h2>\r\n                <mat-card>\r\n                    <p>\r\n                        Rates are the average price per kWh based on monthly usage of 1000 kWh.\r\n                    </p>\r\n                </mat-card>\r\n                <div class=\"rateSheet\">\r\n                    <div>\r\n                        <h4>Rate: {{value.rate}} <span>¢ per kWh</span> </h4>\r\n                        <span>Term: {{value.term}}</span>\r\n                        <span>Early Termination Fee: ${{value.display_termination_fee}}</span>\r\n                        <span>Utility Provider: <b>{{value.utility_provider}}</b></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"pdf\">\r\n                    <a [href]=value.tos target=\"_blank\"> TOS </a>\r\n                    <span>|</span>\r\n                    <a [href]=value.efl target=\"_blank\"> EFL </a>\r\n                    <span>|</span>\r\n                    <a href=\"http://www.ourenergyllc.com/prodox/yrac.pdf\" target=\"_blank\">YRAC</a>\r\n                </div>\r\n                <div class=\"lable\">\r\n                    <label>{{value.product_id}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"len > 1\">\r\n        <br>\r\n        <h1 class=\"text-center\" *ngIf=\"len > 0\" #premises>Select Your Address</h1>\r\n        <h4 class=\"text-center\">Multiple service addresses were found. Please select from the below list or refine what you entered above.</h4>\r\n        <br>\r\n        <div class=\"premise\" *ngFor=\"let value of multiplePremise; let ind = index\">\r\n            <div class=\"inner-premise\">\r\n                <div class=\"premise-details\">\r\n                    <h4>{{value.address1}}</h4>\r\n                    <h4 style=\"margin:0px\">{{value.city}} {{value.state}} {{value.zip}}</h4>\r\n                </div>\r\n                <div class=\"premise-details\">\r\n                    <h4>{{value.premise_id}} </h4>\r\n                    <h4 style=\"margin:0px\">{{value.provider_name}}</h4>\r\n                </div>\r\n                <div class=\"premise-details\">\r\n                    <button  [disabled]=\"selectPremiseBtnDisabled[ind]\" (click)=\"SelectPremise(ind)\" type=\"button\"><h4>Select</h4></button>\r\n                </div>\r\n            </div>\r\n            <div class=\"inner-premise\">\r\n                <div *ngIf=\"(ind + 1) < multiplePremise.length\" style=\"display: flex; flex: 1; margin-top: 25px; box-shadow: 0 -5px 5px -5px #333; border: 1px solid #ccc;\"></div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n    </div>\r\n    <div class=\"spinner\" *ngIf=\"showSpinner\" style=\"margin-top: 30px;\">\r\n        <img src=\"../../../assets/img/fidget_red.gif\" width=\"150\" height=\"150\" alt=\"logo\">\r\n    </div>\r\n    <button matStepperNext style=\"display:none\" id=\"nextBtn\"></button>\r\n</section>"

/***/ }),

/***/ "./src/app/Container/main/establish-contracts.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"con-contacts\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <h1>Contact Us Our Energy</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n<section class=\"container eastablish-contact\">\r\n    <mat-card style=\"margin: 0px !important;\" class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 contacts\">\r\n            <div class=\"col-lg-12 col-md-12 sol-sm-12 text-heading\">\r\n                <div class=\"row\">\r\n                    <h2>\r\n                        Who Turned off the Lights?\r\n                    </h2>\r\n                    <h3>24-hour Power Outage Contact</h3>\r\n                    <p>In the event you experience an outage, please call the corresponding transmission and distribution utility (TDU) your service area. If you have any questions regarding your service area, call at\r\n                        <b>+1-888-545-4687</b>\r\n                    </p>\r\n                </div>\r\n                <div class=\"tabs-bar row\">\r\n                    <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                        <input matInput placeholder=\"Centerpoint\" value=\"+1-800-332-7143\" disabled>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                        <input matInput placeholder=\"Oncor\" value=\"+1-888-313-4747\" disabled>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                        <input matInput placeholder=\"AEP Central/North\" value=\"+1-800-332-7143\" disabled>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                        <input matInput placeholder=\"Sharyland Utilities\" value=\"+1-800-442-8688\" disabled>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <h2 style=\"margin-top: 13px !important;\">\r\n                        Contact Form\r\n                    </h2>\r\n                    <p>Thank you for reaching out to us, Our Energy, LLC, the premier Texas Retail Electric Provider (REP). We welcome all of your questions, comments and feedback.&nbsp; Please fill in the required fields with valid information.&nbsp; We\r\n                        will be happy to review your question and get back to you within twenty-four hours.&nbsp; Experience the total quality customer care service that you deserve!</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 contacts\">\r\n            <div class=\"one_half last margin-up\">\r\n                <div class=\"address_info\">\r\n                    <h2>Address Info</h2>\r\n                    <h3 style=\"margin-bottom: -5px !important;\">Our Energy</h3>\r\n                    <div class=\"contact_info row\">\r\n                        <div class=\"tabs-bar\">\r\n                            <mat-form-field class=\"cancel-padding col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                                <input matInput value=\"17154 Butte Creek Rd, Houston, TX 77090, USA\" disabled>\r\n                                <i matPrefix class=\"fa fa-map-marker icon-large\"></i>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"cancel-padding col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                                <input matInput value=\"info@ourenergyllc.com\" disabled>\r\n                                <i matPrefix class=\"fa fa-envelope\"></i>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"cancel-padding col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                                <input matInput value=\"+1-888-545-4687\" disabled>\r\n                                <i matPrefix class=\"fa fa-phone\"></i>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"cancel-padding col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                                <input matInput value=\"281-715-5767\" disabled>\r\n                                <i matPrefix class=\"fa fa-print\"></i>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"clear\"></div>\r\n                        <h4 >OPEN: 8 AM – 6:30 PM (Mon – Fri)</h4>\r\n                    </div>\r\n                    <h2> Contact by Email </h2>\r\n                    <div class=\"tabs-bar row\">\r\n                        <mat-form-field class=\"cancel-padding col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                            <input matInput placeholder=\"Corporate office\" value=\"info@ourenergyllc.com\" disabled>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"cancel-padding col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                            <input matInput placeholder=\"Customer Service\" value=\"customerservice@ourenergyllc.com\" disabled>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"cancel-padding col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                            <input matInput placeholder=\"Billing\" value=\"billing@ourenergyllc.com\" disabled>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"cancel-padding col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                            <input matInput placeholder=\"Complaints\" value=\"complaints@ourenergyllc.com\" disabled>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </mat-card>\r\n</section>\r\n<section class=\"container\">\r\n    <div class=\"brokersforms about_form\">\r\n        <mat-card class=\"brokersUpdate\">\r\n            <mat-card-header>\r\n                <div mat-card-avatar>\r\n                    <i class=\"material-icons\">contacts</i>\r\n                </div>\r\n                <mat-card-title>Get in Touch with us</mat-card-title>\r\n                <mat-card-subtitle>If you feel any kind of queries Please feel free to contact with Us. Just leave a Message, Our customer support person will contact you</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <form class=\"brokersalign\" [formGroup]=\"myForm\" (ngSubmit)=\"submit()\" #form>\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                        <input matInput placeholder=\"Name\" formControlName=name>\r\n                        <mat-error *ngIf=\"f.name.errors?.required\">You must enter a value</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                        <input matInput placeholder=\"Email Address\" formControlName=email>\r\n                        <mat-error *ngIf=\"f.email.errors?.required\">You must enter a value</mat-error>\r\n                        <mat-error *ngIf=\"!f.email.errors?.required && f.email.errors?.email\">Invalid Email Address</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                        <input matInput placeholder=\"Contact No.\" formControlName=mobile phone-no maxlength=\"12\">\r\n                        <mat-error *ngIf=\"f.mobile.errors?.required\">You must enter a value</mat-error>\r\n                        <mat-error *ngIf=\"f.mobile.errors?.pattern\">Invalid Contact No.</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                        <textarea matInput placeholder=\"Message\" formControlName=message></textarea>\r\n                        <mat-error *ngIf=\"f.message.errors?.required\">You must enter a value</mat-error>\r\n                    </mat-form-field>\r\n                    <div class=\"recaptcha col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                        <app-recapcha></app-recapcha>\r\n                        <p class=\"text-center error\"> {{cap_result}}</p>\r\n                        <button [disabled]=\"btnDisabled\" >Submit</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </mat-card>\r\n    </div>\r\n</section>\r\n\r\n<section id=\"contact-map\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <iframe width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.797672844163!2d-95.46002558488563!3d30.013965481893482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cb6d2119458f%3A0xe39c8dbbf9832bbd!2s17154+Butte+Creek+Rd+%23250%2C+Houston%2C+TX+77090%2C+USA!5e0!3m2!1sen!2s!4v1523885719372\"\r\n                    allowfullscreen></iframe>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/Container/main/help.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid con-helpTools\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <h1>HELP</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!-- <div class=\"container\">\r\n    <div class=\"padding-top-bottom help\">\r\n        <mat-tab-group [selectedIndex]=\"tabIndex\">\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <a routerLink=\".\" class=\"icons\">\r\n                        <i class=\"fa fa-list-ul tools-heading\"></i>\r\n                    </a>\r\n                    <a routerLink=\".\" class=\"tools-heading\">FAQ'S</a>\r\n                </ng-template>\r\n                <h1 style=\"font-size: 31px;\">FAQ's</h1>\r\n                <p>Thank you for visiting the Our Energy Frequently Asked Questions section. We always advise that you drop by and browse the questions as we update them on a regular basis. We hope that you find the answer to your questions here. If your\r\n                    question is not listed, please feel free to use the Ask Our Energy form below. We will be happy to review your question and get back to you within twenty four hours.</p>\r\n                <mat-accordion>\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                Who is Our Energy?\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        <p>OUR Energy is a Retail Electric Provider (REP) which is Licensed to operate in Texas in the Retail Energy Market, we are in process of expanding our operations in Retail Electricity and Gas Markets in New York and Illinois.</p>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                What is the difference between a Retail Electricity Provider (REP) and a utility company (TDSP)?\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        <p>With electricity market deregulation, you have a choice of who is your retail electric provider. Retail electric providers provide you with an energy price, electric bill and customer service. The local utility company (TDSP) maintains\r\n                            the poles and wires in your community. Because of electricity market deregulation, Customers have a choice in retail electric providers. So, when you switch retail electric providers for the same residence or business location,\r\n                            you should experience no change in the reliability of your service. Your local utility company (TDSP) will continue to read your meter and will continue to maintain the poles and wires. And you will continue to call your local\r\n                            utility company (TDSP) in the event of an outage. If you change locations within the state, your local utility company (TDSP) may change.</p>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                Is OUR Energy certified as a Retail Electricity Provider?\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        <p>Yes, the Public Utility Commission for the State of Texas puts every REP through a rigid and strict process of certification. OUR Energy has met the requirements for financial, managerial and technical abilities for the privilege\r\n                            of selling energy in Texas (PUC Certificate Number 10170).</p>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                Why would I choose OUR Energy?\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        <p>Honesty, Integrity and Loyalty. As a Retail Electric provider we will make sure that you THE Customer is treated as a part of OUR Energy Family, we will make sure your issues or concerns are addressed and as much as it is possible\r\n                            it should always be a one call resolution.</p>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                How will OUR Energy be better than any other REP?\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        <p>With proper Risk management, competitive prices and customer service above all others we will make sure that we always tailor to you THE CUSTOMER’S needs.</p>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                What happens if my REP (Retail Electric Provider) goes out of business?\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        <p>You will not lose POWER. You will receive a notice from the provider giving you time to select your new provider, usually it is a 30 Day Notice. If a customer does not choose a new provider during that time, you will be assigned\r\n                            to a “Provider of Last Resort,” which is an assigned back-up electricity provider. (Texas Administrative Code §25.43(a)(2)).\r\n                        </p>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                What are OUR Energy hours of operations for Customer Service?\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        <p>OUR Energy will be available from 8:30 AM to 6 PM over the phone (1888-5454-OUR) , fax (281-715-5767) or by email customerservice@ourenergyllc.com\r\n                        </p>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                What Should I do if there is a Power Outage?\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        <p>For information about power outages, please contact your (local utility) Transmission and Distribution Service Provider.\r\n                        </p>\r\n                        <p>AEP Texas Central (866) 223-8508</p>\r\n                        <p>AEP Texas North (866) 223-8508</p>\r\n                        <p>CenterPoint Energy (800) 332-7143</p>\r\n                        <p>Sharyland Utilities (956) 668-9551</p>\r\n                        <p>TNMP (Texas-New Mexico Power Company) (888) 866-7456</p>\r\n                        <p>Oncor (formerly TXU Electric Delivery Company) (888) 313-4747</p>\r\n                    </mat-expansion-panel>\r\n                </mat-accordion>\r\n                <div class=\"brokersforms\">\r\n                    <mat-card class=\"brokersUpdate\">\r\n                        <mat-card-header>\r\n                            <div mat-card-avatar>\r\n                                <i class=\"material-icons\">contact_support</i>\r\n                            </div>\r\n                            <mat-card-title>Ask Our Energy</mat-card-title>\r\n                        </mat-card-header>\r\n                        <form class=\"brokersdate\" [formGroup]=\"myForm\" (ngSubmit)=\"Submit()\" #help>\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Name\" formControlName=name>\r\n                                <mat-error *ngIf=\"f.name.errors?.required\">You must enter a value</mat-error>\r\n                                <mat-error *ngIf=\"f.name.errors?.pattern\">Invalid pattern</mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Email\" formControlName=email>\r\n                                <mat-error *ngIf=\"f.email.errors?.required\">You must enter a value</mat-error>\r\n                                <mat-error *ngIf=\"f.email.errors?.pattern\">Invalid pattern</mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Question\" formControlName=question>\r\n                                <mat-error *ngIf=\"f.question.errors?.required\">You must enter a value</mat-error>\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <input matInput placeholder=\"Message\" formControlName=message>\r\n                            </mat-form-field>\r\n                            <div class=\"recaptcha\">\r\n                                <div>\r\n                                    <app-recapcha></app-recapcha>\r\n                                </div>\r\n                                <div>\r\n                                    <p class=\"error\"> {{cap_result}}</p>\r\n                                </div>\r\n                                <div>\r\n                                    <button >Submit</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </mat-card>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <a routerLink=\".\" class=\"icons\">\r\n                        <i class=\"fa fa-usd tools-heading\"></i>\r\n                    </a>\r\n                    <a routerLink=\".\" class=\"tools-heading\">TDSP RATES</a>\r\n                </ng-template>\r\n                <h1 style=\"margin-bottom: 40px;\" class=\"col-lg-12 col-md-12 col-sm-12\">TDSP DELIVERY CHARGES</h1>\r\n                <div style=\"margin-bottom: 50px;\" class=\"row tdsp-rates\">\r\n                    <div *ngFor=\"let tdsp of tdsps\" class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                        <div class=\"row innner\">\r\n                            <h3 class=\"tdsp-heading col-lg-12 col-md-12 col-sm-12\">{{tdsp.utility_id__nick_name}}</h3>\r\n                            <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                                <input matInput placeholder=\"Charges per Month\" [value]=\"'$'+tdsp.per_month\" disabled>\r\n                            </mat-form-field>\r\n                            <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                                <input matInput placeholder=\"Charges per kWh\" [value]=\"tdsp.per_kwh+'¢'\" disabled>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <a routerLink=\".\" class=\"icons\">\r\n                        <i class=\"fa fa-usd tools-heading\"></i>\r\n                    </a>\r\n                    <a routerLink=\".\" class=\"tools-heading\">HISTORICAL PRICES</a>\r\n                </ng-template>\r\n                <div class=\"row\">\r\n                    <h1 class=\"col-lg-12 col-md-12 col-sm-12\">HISTORICAL PRICES</h1>\r\n                    <p class=\"col-lg-12 col-md-12 col-sm-12 margin-top\">The prices above reflect an average usage of 1,000 kWh per month. Each plan’s pricing represents an aggregate of pricing for that product offered to the market during the time period specified and should not be used to predict future\r\n                        pricing. Please see the Electricity Facts Label for each product other pricing information. Your average price for electricity service will vary according to your usage.</p>\r\n                    <div style=\"display: flex; justify-content: space-evenly; margin-bottom: 20px; margin-top: -15px;\" class=\"col-lg-12 col-md-12 col-sm-12 text-center\">\r\n                        <div class=\"historical-bar\">\r\n                            <button (click)=\"planTable()\"  class=\"helpbutton\">Our M2M Plan</button>\r\n                        </div>\r\n                        <div class=\"historical-bar\">\r\n                            <button (click)=\"plansTable()\"  class=\"helpbutton\">Advantage Prime 12</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"OurPlans\">\r\n                    <mat-table #table [dataSource]=\"priceSource\" class=\"mat-elevation-z2\">\r\n                        <ng-container matColumnDef=\"year\">\r\n                            <mat-header-cell *matHeaderCellDef>Month/Year</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> {{element.month}} </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"centerpoint\">\r\n                            <mat-header-cell *matHeaderCellDef>Centerpoint</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> {{element.centerpoint}} </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"oncor\">\r\n                            <mat-header-cell *matHeaderCellDef> Oncor </mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> {{element.oncor}} </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"aep_central\">\r\n                            <mat-header-cell *matHeaderCellDef>AEP Central</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> {{element.aep_central}} </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"aep_north\">\r\n                            <mat-header-cell *matHeaderCellDef>AEP North</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> {{element.aep_north}} </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"tnmp\">\r\n                            <mat-header-cell *matHeaderCellDef>TNMP</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> {{element.tnmp}} </mat-cell>\r\n                        </ng-container>\r\n                        <mat-header-row *matHeaderRowDef=\"priceColumns\" color=\"primary\"></mat-header-row>\r\n                        <mat-row *matRowDef=\"let row; columns: priceColumns;\" (click)=\"onRowClicked(row)\"></mat-row>\r\n                    </mat-table>\r\n                </div>\r\n                <div *ngIf=\"OurPlan\">\r\n                    <mat-table #table [dataSource]=\"priceSources\" class=\"mat-elevation-z2\">\r\n                        <ng-container matColumnDef=\"month\">\r\n                            <mat-header-cell *matHeaderCellDef>Month</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> {{element.month}} </mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"price\">\r\n                            <mat-header-cell *matHeaderCellDef>Price</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let element\"> {{element.price}} </mat-cell>\r\n                        </ng-container>\r\n                        <mat-header-row *matHeaderRowDef=\"priceColumn\" color=\"primary\"></mat-header-row>\r\n                        <mat-row *matRowDef=\"let row; columns: priceColumn;\"></mat-row>\r\n                    </mat-table>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <a routerLink=\".\" class=\"icons\">\r\n                        <i class=\"fa fa-bar-chart-o tools-heading\"></i>\r\n                    </a>\r\n                    <a routerLink=\".\" class=\"tools-heading\">TEXAS MOVING SOLUTIONS</a>\r\n                </ng-template>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 margin-top\" style=\"padding-bottom: 40px\">\r\n                    <h1>TEXAS MOVING SOLUTIONS</h1>\r\n                    <h2 class=\"margin margin-top\">SAME DAY MOVE INS</h2>\r\n                    <p>Are you planning on moving to Texas or moving your place of residence or business within Texas?&nbsp; No problem!&nbsp; There is no need to wait to sign up with any of the various excellent OUR Energy plans until after your move.&nbsp;\r\n                        Sign up now, move tomorrow and we’ll make it easy!</p>\r\n                    <p style=\"    margin-bottom: 45px;\">Whether you’re looking for energy companies in Houston, electric companies in Dallas or&nbsp;Fort Worth electric companies we’ll make your move a breeze! We offer same day move ins as well as out of cycle switches.</p>\r\n                    <button routerLink=\"\"  class=\"helpbutton\" routerLink=\"/contact\">\r\n            <i class=\"fa fa-truck icon-large\"></i>\r\n            Questions About Switching? Contact Us!\r\n          </button>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 margin-top\">\r\n                    <div class=\"\">\r\n                        <img width=\"100%\" src=\"\" data-lazy-type=\"image\" data-lazy-src=\"https://storage.wattcrm.com/wattcrm-images/pics/help/samedayMove.jpg\" class=\"lazy vc_single_image-img attachment-full lazy-loaded\" alt=\"\" data-lazy-srcset=\"https://storage.wattcrm.com/wattcrm-images/pics/help/samedayMove.jpg 700w,https://storage.wattcrm.com/wattcrm-images/pics/help/samedayMove.jpg 300w\"\r\n                            data-lazy-sizes=\"(max-width: 700px) 100vw, 700px\" srcset=\"https://storage.wattcrm.com/wattcrm-images/pics/help/samedayMove.jpg 700w, https://storage.wattcrm.com/wattcrm-images/pics/help/samedayMove.jpg 300w\" sizes=\"(max-width: 700px) 100vw, 700px\">\r\n                        <noscript>\r\n              <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/help/samedayMove.jpg\" class=\"vc_single_image-img attachment-full\"\r\n                alt=\"\" srcset=\"https://storage.wattcrm.com/wattcrm-images/pics/help/samedayMove.jpg 700w, https://storage.wattcrm.com/wattcrm-images/pics/help/samedayMove.jpg 300w\"\r\n                sizes=\"(max-width: 700px) 100vw, 700px\" />\r\n            </noscript>\r\n                    </div>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <a routerLink=\".\" class=\"icons\">\r\n                        <i class=\"fa fa-credit-card tools-heading\"></i>\r\n                    </a>\r\n                    <a class=\"tools-heading\">PAYMENT SOLUTIONS</a>\r\n                </ng-template>\r\n\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\" style=\"padding-bottom: 40px\">\r\n                    <h1>REVIEW, MONITOR AND PAY YOUR BILLS</h1>\r\n                    <p>OUR Energy online portal provides a convenient way to access your account information. Bill Payments, Usage, Historical Data and all other important information is just few clicks away.</p>\r\n                    <ul class=\"padding-zero\">\r\n                        <li>– Using our online portal you can:</li>\r\n                        <li>– Pay bills online by using Visa, Master or Discover.</li>\r\n                        <li>– View your current and previous bills.</li>\r\n                        <li>– Review your previous usage history and payment history.</li>\r\n                        <li>– Download PDF copies of all your previous and current bills.</li>\r\n                        <li>– and a lot more.</li>\r\n                    </ul>\r\n                    <p>\r\n                        <button class=\"helpbutton\"  routerLink=\"/login\">Sign in to online portal | Register</button>\r\n                    </p>\r\n                    <div class=\"\">\r\n                        <img width=\"90\" height=\"72\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/img/secure/secure90x72.png\" data-lazy-type=\"image\" data-lazy-src=\"https://storage.wattcrm.com/wattcrm-images/pics/img/secure/secure90x72.png\" class=\"lazy vc_single_image-img attachment-full lazy-loaded\"\r\n                            alt=\"\">\r\n                        <noscript>\r\n              <img width=\"90\" height=\"72\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/img/secure/secure90x72.png\" class=\"vc_single_image-img attachment-full\"\r\n                alt=\"\" />\r\n            </noscript>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12 margin-top\">\r\n                    <div class=\"\">\r\n                        <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/help/payyourbillop.jpg\" data-lazy-type=\"image\" data-lazy-src=\"https://storage.wattcrm.com/wattcrm-images/pics/help/payyourbillop.jpg\" class=\"lazy vc_single_image-img attachment-full lazy-loaded\"\r\n                            alt=\"Our Energy Texas Electricity\" data-lazy-srcset=\"https://storage.wattcrm.com/wattcrm-images/pics/help/payyourbillop.jpg 700w,https://storage.wattcrm.com/wattcrm-images/pics/help/payyourbillop.jpg 300w\" data-lazy-sizes=\"(max-width: 700px) 100vw, 700px\"\r\n                            srcset=\"https://storage.wattcrm.com/wattcrm-images/pics/help/payyourbillop.jpg 700w, https://storage.wattcrm.com/wattcrm-images/pics/help/payyourbillop.jpg 300w\" sizes=\"(max-width: 700px) 100vw, 700px\">\r\n                        <noscript>\r\n              <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/help/payyourbillop.jpg\" class=\"vc_single_image-img attachment-full\"\r\n                alt=\"Our Energy Texas Electricity\" srcset=\"https://storage.wattcrm.com/wattcrm-images/pics/help/payyourbillop.jpg 300w\"\r\n                sizes=\"(max-width: 700px) 100vw, 700px\" />\r\n            </noscript>\r\n                    </div>\r\n                </div>\r\n\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <a class=\"icons\">\r\n                        <i class=\"fa fa-slideshare tools-heading\"></i>\r\n                    </a>\r\n                    <a class=\"tools-heading\">UNDERSTAND YOUR BILL</a>\r\n                </ng-template>\r\n                <div class=\"modalBill\" style=\"text-align: center\">\r\n\r\n                    <img src=\"https://storage.wattcrm.com/wattcrm-images/pics/help/Sample-Bill-Residential1.jpg\" data-lazy-type=\"image\" data-lazy-src=\"https://storage.wattcrm.com/wattcrm-images/pics/help/Sample-Bill-Residential1.jpg\" width=\"576\" height=\"745\">\r\n                    <noscript>\r\n            <img  src=\"https://storage.wattcrm.com/wattcrm-images/pics/help/Sample-Bill-Residential1.jpg\"\r\n              width=\"576\" height=\"745\" />\r\n          </noscript>\r\n                    <button id=\"btnBill1\" type=\"button\" data-toggle=\"popover\" title=\"This section contain your account details\">1</button>\r\n                    <button id=\"btnBill2\" type=\"button\" data-toggle=\"popover\" title=\"This section contain your utility provider and Our Energy details\">2</button>\r\n                    <button id=\"btnBill3\" type=\"button\" data-toggle=\"popover\" title=\"This section contain your billing and payment details\">3</button>\r\n                    <button id=\"btnBill4\" type=\"button\" data-toggle=\"popover\" title=\"This section contain your address details\">4</button>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <a routerLink=\".\" class=\"icons\">\r\n                        <i class=\"fa fa-file tools-heading\"></i>\r\n                    </a>\r\n                    <a routerLink=\".\" class=\"tools-heading\">DOWNLOAD FORMS</a>\r\n                </ng-template>\r\n                <h1 class=\"col-lg-12 col-md-12 col-sm-12\">DOWNLOAD FORMS</h1>\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 helpForm\">\r\n                    <h4>ACH FORM:</h4>\r\n                    <p>Download this form to setup Auto Payment using your bank account information.</p>\r\n                    <ul class=\"padding-zero\">\r\n                        <li>\r\n                            <button  class=\"helpbutton\"><a href=\"https://ourenergyllc.com/wp-content/uploads/bsk-pdf-manager/2_2_1_ACHFORM.PDF\" target=\"_blank\">Download Form</a></button>\r\n                        </li>\r\n                    </ul>\r\n                    <h4>Account Closing Form:</h4>\r\n                    <p>Use this form to close your account with Our Energy.</p>\r\n                    <ul class=\"padding-zero\">\r\n                        <li>\r\n                            <button  class=\"helpbutton\"><a href=\"https://ourenergyllc.com/wp-content/uploads/bsk-pdf-manager/1_1_2_ACF.PDF\" target=\"_blank\">Download Form</a></button>\r\n                        </li>\r\n                    </ul>\r\n                    <p>All documents are in PDF format. You can download free copy of Adobe PDF Reader from following link.&nbsp;\r\n                        <a class=\"nonblock\" href=\"https://get.adobe.com/reader/?promoid=BUIGO\" target=\"_blank\">\r\n                            <span id=\"u862-3\">Adobe Read</span>\r\n                        </a>\r\n                    </p>\r\n                </div>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    </div>\r\n\r\n</div>  -->\r\n\r\n<!-- ...............New Layout.................. -->\r\n\r\n<section class=\"container-fluid padding-30\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 s_helpBan\">\r\n        <div class=\"help_img\">\r\n            <img src=\"../../../assets/img/Banner/Artboard 1 copy.png\" alt=\"img\">\r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-12\">\r\n      <nav class=\"nav-sidebar\">\r\n        <ul class=\"nav tabs help-sidebar\">\r\n          <li class=\"active\"><a href=\"#faqs\" data-toggle=\"tab\">FAQ'S</a></li>\r\n          <li class=\"\"><a href=\"#TDSP\" data-toggle=\"tab\">TDSP RATES</a></li>\r\n          <li class=\"\"><a href=\"#HISTORICAL\" data-toggle=\"tab\">HISTORICAL PRICES</a></li>\r\n          <li class=\"\"><a href=\"#SOLUTIONS\" data-toggle=\"tab\">TEXAS MOVING SOLUTIONS</a></li>\r\n          <li class=\"\"><a href=\"#PAYMENT_SOLUTIONS\" data-toggle=\"tab\">PAYMENT SOLUTIONS</a></li>\r\n          <li class=\"\"><a href=\"#UNDERSTAND_BILL\" data-toggle=\"tab\">UNDERSTAND YOUR BILL</a></li>\r\n          <li class=\"\"><a href=\"#DOWNLOAD_FORMS\" data-toggle=\"tab\">DOWNLOAD FORMS</a></li>\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-9\">\r\n      <div class=\"tab-content s_help_Tab\">\r\n        <div class=\"tab-pane active  text-style\" id=\"faqs\">\r\n          <h1 style=\"font-size: 31px;\">FAQ's</h1>\r\n          <p class=\"text-dark\">Thank you for visiting the Our Energy Frequently Asked Questions section. We always advise that you drop by\r\n            and browse the questions as we update them on a regular basis. We hope that you find the answer to your\r\n            questions here. If your\r\n            question is not listed, please feel free to use the Ask Our Energy form below. We will be happy to review\r\n            your question and get back to you within twenty four hours.</p>\r\n          <section class=\"faqs_home\">\r\n            <div class=\"panel-group\" id=\"accordion\">\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">\r\n                  <h4 class=\"panel-title\">\r\n                    <a> Who is Our Energy?</a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapse1\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    <p>OUR Energy is a Retail Electric Provider (REP) which is Licensed to operate in Texas in the\r\n                      Retail Energy Market, we are in process of expanding our operations in Retail Electricity and Gas\r\n                      Markets in New York and Illinois.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">\r\n                  <h4 class=\"panel-title\">\r\n                     \r\n                        <a> What is the difference between a Retail Electricity Provider (REP) and a utility company\r\n                      (TDSP)?</a>\r\n\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapse2\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    <p>With electricity market deregulation, you have a choice of who is your retail electric provider.\r\n                      Retail electric providers provide you with an energy price, electric bill and customer service.\r\n                      The local utility company (TDSP) maintains\r\n                      the poles and wires in your community. Because of electricity market deregulation, Customers have\r\n                      a choice in retail electric providers. So, when you switch retail electric providers for the same\r\n                      residence or business location,\r\n                      you should experience no change in the reliability of your service. Your local utility company\r\n                      (TDSP) will continue to read your meter and will continue to maintain the poles and wires. And you\r\n                      will continue to call your local\r\n                      utility company (TDSP) in the event of an outage. If you change locations within the state, your\r\n                      local utility company (TDSP) may change.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">\r\n                  <h4 class=\"panel-title\">\r\n                      <a> Is OUR Energy certified as a Retail Electricity Provider? </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapse3\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    <p>Yes, the Public Utility Commission for the State of Texas puts every REP through a rigid and\r\n                      strict process of certification. OUR Energy has met the requirements for financial, managerial and\r\n                      technical abilities for the privilege\r\n                      of selling energy in Texas (PUC Certificate Number 10170).</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse4\">\r\n                  <h4 class=\"panel-title\">\r\n                      <a>Why would I choose OUR Energy? </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapse4\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    <p>Honesty, Integrity and Loyalty. As a Retail Electric provider we will make sure that you THE\r\n                      Customer is treated as a part of OUR Energy Family, we will make sure your issues or concerns are\r\n                      addressed and as much as it is possible\r\n                      it should always be a one call resolution.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse5\">\r\n                  <h4 class=\"panel-title\">\r\n                           <a> How will OUR Energy be better than any other REP? </a>\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapse5\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    <p>With proper Risk management, competitive prices and customer service above all others we will\r\n                      make sure that we always tailor to you THE CUSTOMER’S needs.</p>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse6\">\r\n                  <h4 class=\"panel-title\">\r\n                     \r\n                    <a> What happens if my REP (Retail Electric Provider) goes out of business? </a>\r\n\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapse6\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    <p>You will not lose POWER. You will receive a notice from the provider giving you time to select\r\n                      your new provider, usually it is a 30 Day Notice. If a customer does not choose a new provider\r\n                      during that time, you will be assigned\r\n                      to a “Provider of Last Resort,” which is an assigned back-up electricity provider. (Texas\r\n                      Administrative Code §25.43(a)(2)).\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse7\">\r\n                  <h4 class=\"panel-title\">\r\n                     \r\n                    <a>\r\n                      What are OUR Energy hours of operations for Customer Service?\r\n                    </a>\r\n\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapse7\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    <p>OUR Energy will be available from 8:30 AM to 6 PM over the phone (1888-5454-OUR) , fax\r\n                      (281-715-5767) or by email customerservice@ourenergyllc.com\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse8\">\r\n                  <h4 class=\"panel-title\">\r\n                    \r\n                    <a>\r\n                      What Should I do if there is a Power Outage?\r\n                    </a>\r\n\r\n                  </h4>\r\n                </div>\r\n                <div id=\"collapse8\" class=\"panel-collapse collapse\">\r\n                  <div class=\"panel-body\">\r\n                    <p>For information about power outages, please contact your (local utility) Transmission and\r\n                      Distribution Service Provider.\r\n                    </p>\r\n                    <p>AEP Texas Central (866) 223-8508</p>\r\n                    <p>AEP Texas North (866) 223-8508</p>\r\n                    <p>CenterPoint Energy (800) 332-7143</p>\r\n                    <p>Sharyland Utilities (956) 668-9551</p>\r\n                    <p>TNMP (Texas-New Mexico Power Company) (888) 866-7456</p>\r\n                    <p>Oncor (formerly TXU Electric Delivery Company) (888) 313-4747</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </section>\r\n        </div>\r\n        <div class=\"tab-pane text-style\" id=\"TDSP\">\r\n          <h1 style=\"margin-bottom: 40px;\" class=\"col-lg-12 col-md-12 col-sm-12\">TDSP DELIVERY CHARGES</h1>\r\n          <div style=\"margin-bottom: 50px;\" class=\"row tdsp-rates\">\r\n            <div *ngFor=\"let tdsp of tdsps\" class=\"col-lg-5 col-md-5 col-sm-6 col-xs-12\">\r\n              <div class=\"row innner\">\r\n                <h3 class=\"tdsp-heading col-lg-12 col-md-12 col-sm-12\">{{tdsp.utility_id__nick_name}}</h3>\r\n                <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                  <input matInput placeholder=\"Charges per Month\" [value]=\"'$'+tdsp.per_month\" disabled>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                  <input matInput placeholder=\"Charges per kWh\" [value]=\"tdsp.per_kwh+'¢'\" disabled>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"tab-pane text-style\" id=\"HISTORICAL\">\r\n          <h1 class=\"col-lg-12 col-md-12 col-sm-12\">HISTORICAL PRICES</h1>\r\n          <p class=\"col-lg-12 col-md-12 col-sm-12 margin-top\">The prices above reflect an average usage of 1,000 kWh per\r\n            month. Each plan’s pricing represents an aggregate of pricing for that product offered to the market during\r\n            the time period specified and should not be used to predict future\r\n            pricing. Please see the Electricity Facts Label for each product other pricing information. Your average\r\n            price for electricity service will vary according to your usage.</p>\r\n          <div style=\"display: flex; justify-content: space-evenly; margin-bottom: 20px; margin-top: -15px;\"\r\n            class=\"col-lg-12 col-md-12 col-sm-12 text-center\">\r\n            <div class=\"historical-bar\">\r\n              <button (click)=\"planTable()\" class=\"helpbutton\">Our M2M Plan</button>\r\n            </div>\r\n            <div class=\"historical-bar\">\r\n              <button (click)=\"plansTable()\" class=\"helpbutton\">Advantage Prime 12</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"tab-pane text-style\" id=\"SOLUTIONS\">\r\n          <h1>TEXAS MOVING SOLUTIONS</h1>\r\n          <h2 class=\"margin margin-top\">SAME DAY MOVE INS</h2>\r\n          <p>Are you planning on moving to Texas or moving your place of residence or business within Texas?&nbsp; No\r\n            problem!&nbsp; There is no need to wait to sign up with any of the various excellent OUR Energy plans until\r\n            after your move.&nbsp;\r\n            Sign up now, move tomorrow and we’ll make it easy!</p>\r\n          <p style=\"    margin-bottom: 45px;\">Whether you’re looking for energy companies in Houston, electric companies\r\n            in Dallas or&nbsp;Fort Worth electric companies we’ll make your move a breeze! We offer same day move ins as\r\n            well as out of cycle switches.</p>\r\n          <button routerLink=\"\" class=\"helpbutton\" routerLink=\"/contact\">\r\n            <i class=\"fa fa-truck icon-large\"></i>\r\n            Questions About Switching? Contact Us!\r\n          </button>\r\n        </div>\r\n        <div class=\"tab-pane text-style\" id=\"PAYMENT_SOLUTIONS\">\r\n          <h1>REVIEW, MONITOR AND PAY YOUR BILLS</h1>\r\n          <p>OUR Energy online portal provides a convenient way to access your account information. Bill Payments,\r\n            Usage, Historical Data and all other important information is just few clicks away.</p>\r\n          <ul class=\"padding-zero\">\r\n            <li> Using our online portal you can:</li>\r\n            <li>Pay bills online by using Visa, Master or Discover.</li>\r\n            <li>View your current and previous bills.</li>\r\n            <li>Review your previous usage history and payment history.</li>\r\n            <li>Download PDF copies of all your previous and current bills.</li>\r\n            <!-- <li>– and a lot more.</li> -->\r\n          </ul>\r\n          <p>\r\n            <button class=\"helpbutton\" routerLink=\"/login\">Sign in to online portal | Register</button>\r\n            <img width=\"90\" height=\"72\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/img/secure/secure90x72.png\"\r\n              data-lazy-type=\"image\"\r\n              data-lazy-src=\"https://storage.wattcrm.com/wattcrm-images/pics/img/secure/secure90x72.png\"\r\n              class=\"lazy vc_single_image-img attachment-full lazy-loaded\" style=\"float: right;\" alt=\"\">\r\n            <noscript>\r\n              <img width=\"90\" height=\"72\" style=\"float: right;\"\r\n                src=\"https://storage.wattcrm.com/wattcrm-images/pics/img/secure/secure90x72.png\"\r\n                class=\"vc_single_image-img attachment-full\" alt=\"\" />\r\n            </noscript>\r\n          </p>\r\n          <!-- <div class=\"\">\r\n                          <img width=\"90\" height=\"72\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/img/secure/secure90x72.png\" data-lazy-type=\"image\" data-lazy-src=\"https://storage.wattcrm.com/wattcrm-images/pics/img/secure/secure90x72.png\" class=\"lazy vc_single_image-img attachment-full lazy-loaded\"\r\n                              alt=\"\">\r\n                          <noscript>\r\n                <img width=\"90\" height=\"72\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/img/secure/secure90x72.png\" class=\"vc_single_image-img attachment-full\"\r\n                  alt=\"\" />\r\n              </noscript>\r\n                      </div> -->\r\n        </div>\r\n        <!--  -->\r\n        <div class=\"tab-pane text-style text-center\" id=\"UNDERSTAND_BILL\">\r\n          \r\n            <h1 class=\"text-left\">UNDERSTAND YOUR BILL</h1>\r\n\r\n          <div class=\"col-sm-6 contents_of_bill\">\r\n          <div *ngIf=\"featureSelected === 'firstDiv'\">\r\n              <h2 class=\"modal-title\">This section contain your account details.</h2>\r\n              <div class=\"tooltip_img\">\r\n                 <img src=\"../../../assets/img/no1.jpg\" alt=\"img\">\r\n              </div>\r\n          </div>\r\n          <!--  -->\r\n          <div *ngIf=\"featureSelected === 'secondDiv'\">\r\n              <h2 class=\"modal-title\">This section contain your utility provider and Our Energy details.</h2>\r\n                     <div class=\"tooltip_img s_utlity_provider_img\">\r\n                        <img src=\"../../../assets/img/no2.jpg\" alt=\"img\">\r\n                     </div>\r\n            </div>\r\n            <!--  -->\r\n            <div *ngIf=\"featureSelected === 'thirdDiv'\">\r\n                <h2 class=\"modal-title\">This section contain your billing and payment details.</h2>\r\n                <div class=\"tooltip_img\">\r\n                   <img src=\"../../../assets/img/no3.jpg\" alt=\"img\">\r\n                </div>\r\n            </div>\r\n            <!--  -->\r\n            <div *ngIf=\"featureSelected === 'fourthDiv'\">\r\n                <h2 class=\"modal-title\">This section contain your address details.</h2>\r\n                <div class=\"tooltip_img\">\r\n                   <img src=\"../../../assets/img/no4.jpg\" alt=\"img\">\r\n                </div>\r\n            </div>\r\n            <!--  -->\r\n            </div>\r\n          <div  class=\"col-sm-6 tab-img\">\r\n          <img src=\"https://storage.wattcrm.com/wattcrm-images/pics/help/Sample-Bill-Residential1.jpg\"\r\n            data-lazy-type=\"image\"\r\n            data-lazy-src=\"https://storage.wattcrm.com/wattcrm-images/pics/help/Sample-Bill-Residential1.jpg\"\r\n            width=\"576\" height=\"745\">\r\n          <noscript>\r\n            <img src=\"https://storage.wattcrm.com/wattcrm-images/pics/help/Sample-Bill-Residential1.jpg\" width=\"576\"\r\n              height=\"745\" />\r\n          </noscript>\r\n<!-- buttons -->\r\n          <button id=\"btnBill1\" type=\"button\" (click)=\"toggle('firstDiv')\">1</button>\r\n          <button id=\"btnBill2\" type=\"button\" (click)=\"toggle('secondDiv')\">2</button>\r\n          <button id=\"btnBill3\" type=\"button\" (click)=\"toggle('thirdDiv')\">3</button>\r\n          <button id=\"btnBill4\" type=\"button\" (click)=\"toggle('fourthDiv')\">4</button>\r\n     <!-- buttons -->\r\n          <!-- models start-->\r\n          <!-- <div id=\"no1\" class=\"modal fade\" role=\"dialog\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h2 class=\"modal-title\">This section contain your account details.</h2>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    \r\n                   <div class=\"tooltip_img\">\r\n                      <img src=\"../../../assets/img/no1.jpg\" alt=\"img\">\r\n                   </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n            <!-- ------------------ -->\r\n            <!-- <div id=\"no2\" class=\"modal fade\" role=\"dialog\">\r\n                <div class=\"modal-dialog\">\r\n                  <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                      <h2 class=\"modal-title\">This section contain your utility provider and Our Energy details.</h2>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <h2 class=\"modal-title\">This section contain your utility provider and Our Energy details.</h2>\r\n                     <div class=\"tooltip_img\">\r\n                        <img src=\"../../../assets/img/no2.jpg\" alt=\"img\">\r\n                     </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div> -->\r\n            <!-- ------------------- -->\r\n            <!-- <div id=\"no3\" class=\"modal fade\" role=\"dialog\">\r\n                  <div class=\"modal-dialog\">\r\n                    <div class=\"modal-content\">\r\n                      <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                        <h2 class=\"modal-title\">This section contain your billing and payment details.</h2>\r\n                      </div>\r\n                      <div class=\"modal-body\">\r\n                          <h2 class=\"modal-title\">This section contain your billing and payment details.</h2>\r\n                       <div class=\"tooltip_img\">\r\n                          <img src=\"../../../assets/img/no3.jpg\" alt=\"img\">\r\n                       </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n            </div> -->\r\n            <!-- -------------------------- -->\r\n            <!-- <div id=\"no4\" class=\"modal fade\" role=\"dialog\">\r\n                <div class=\"modal-dialog\">\r\n                  <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                      <h2 class=\"modal-title\">This section contain your address details.</h2>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                     <div class=\"tooltip_img\">\r\n                        <img src=\"../../../assets/img/no4.jpg\" alt=\"img\">\r\n                     </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n          <!-- models end -->\r\n          </div>\r\n        </div>\r\n        <!--  -->\r\n        <div class=\"tab-pane text-style\" id=\"DOWNLOAD_FORMS\">\r\n          <h1 class=\"col-lg-12 col-md-12 col-sm-12\">DOWNLOAD FORMS</h1>\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 helpForm\">\r\n            <h4>ACH FORM:</h4>\r\n            <p>Download this form to setup Auto Payment using your bank account information.</p>\r\n            <ul class=\"padding-zero btns-list\">\r\n              <li>\r\n                <a class=\"btn\" href=\"https://ourenergyllc.com/wp-content/uploads/bsk-pdf-manager/2_2_1_ACHFORM.PDF\"\r\n                  target=\"_blank\">Download Form</a>\r\n              </li>\r\n            </ul>\r\n            <h4>Account Closing Form:</h4>\r\n            <p>Use this form to close your account with Our Energy.</p>\r\n            <ul class=\"padding-zero btns-list\">\r\n              <li>\r\n\r\n                <a class=\"btn\" href=\"https://ourenergyllc.com/wp-content/uploads/bsk-pdf-manager/1_1_2_ACF.PDF\"\r\n                  target=\"_blank\">\r\n                  Download Form</a>\r\n\r\n              </li>\r\n            </ul>\r\n            <p>All documents are in PDF format. You can download free copy of Adobe PDF Reader from following\r\n              link.&nbsp;\r\n              <a class=\"nonblock\" href=\"https://get.adobe.com/reader/?promoid=BUIGO\" target=\"_blank\">\r\n                <span id=\"u862-3\">Adobe Read</span>\r\n              </a>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <!-- end tab content -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/Container/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"main-bg-slider\" class=\"carousel slide carousel-fade slider-main\" data-ride=\"carousel\" data-interval=\"4000\" style=\"margin-top: 0px\">\r\n <div class=\"download-here\">\r\n <a href=\"https://play.google.com/store/apps/details?id=com.brainplow.OurEnergythemeone\" rel=\"noreferrer\" target=\"_blank\">\r\n <img src=\"../../assets/img/Adroid-Badge.png\">\r\n </a>\r\n <a href=\"https://itunes.apple.com/us/app/our-energy/id1438707950?mt=8\" rel=\"noreferrer\" target=\"_blank\">\r\n <img src=\"../../assets/img/IOS-Badge.png\">\r\n </a>\r\n </div>\r\n <div class=\"carousel-inner\">\r\n <div class=\"item\">\r\n <h1 class=\"search-bg__title animated fadeInDown\">Powering Texas. One Smile at a Time</h1>\r\n <img src=\"../../assets/img/bg-images/bg-03.png\" />\r\n </div>\r\n <div class=\"item active\">\r\n <h1 class=\"search-bg__title animated fadeInDown\"> Switch Now - Save Hundreds of Dollars per year on your Energy Bills</h1>\r\n <img src=\"../../assets/img/bg-images/bg-01.png\" />\r\n </div>\r\n <div class=\"item\">\r\n <h1 class=\"search-bg__title animated fadeInUp\"> Lower your Energy Bills Today. Switch to Our Energy Now</h1>\r\n <img src=\"../../assets/img/bg-images/bg-02.png\" />\r\n </div>\r\n <div class=\"item\">\r\n <h1 class=\"search-bg__title animated fadeInDown\">We offer a wide spectrum of Money Saving Plans and Products for Your Business.</h1>\r\n <img src=\"../../assets/img/bg-images/bg-04.png\" />\r\n </div>\r\n <div class=\"item\">\r\n <h1 class=\"search-bg__title animated fadeInDown\">Earn Free Credits with Our Energy. There is no limit to them</h1>\r\n <img src=\"../../assets/img/bg-images/bg-05.png\" />\r\n </div>\r\n </div>\r\n <a class=\"left carousel-control\" href=\"#main-bg-slider\" data-slide=\"prev\">\r\n <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n <span class=\"sr-only\">Previous</span>\r\n </a>\r\n <a class=\"right carousel-control\" href=\"#main-bg-slider\" data-slide=\"next\">\r\n <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n <span class=\"sr-only\">Next</span>\r\n </a>\r\n <div class=\"form-home\">\r\n <div class=\"container-fluid\">\r\n <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" class=\"form-zip ng-untouched ng-pristine ng-valid\" novalidate>\r\n <div class=\"card\">\r\n <div class=\"card-header card-header-text\" data-background-color=\"rose\">\r\n <h4 class=\"card-title\">Enter your Zip Code</h4>\r\n </div>\r\n <div class=\"clearfix mt-5\">\r\n <div class=\"col-md-6 col-sm-6\">\r\n <div class=\"form-group\">\r\n <mat-form-field>\r\n <input matInput placeholder=\"Zip Code\" [formControl]=\"zip_code\" [(ngModel)]=\"zipCode\" #zip name=\"zipCode\" maxlength=\"5\" />\r\n <mat-error *ngIf=\"zip_code.hasError('pattern')\">\r\n Invalid Zip Code\r\n </mat-error>\r\n <mat-error *ngIf=\"zip_code.hasError('required')\">\r\n Zip Code is required\r\n </mat-error>\r\n </mat-form-field>\r\n </div>\r\n </div>\r\n <div class=\"col-md-6 col-sm-6\">\r\n <div class=\"form-group\">\r\n <mat-form-field>\r\n <input matInput placeholder=\"Promo Code\" name=promo [(ngModel)]=\"promoCode\" />\r\n </mat-form-field>\r\n </div>\r\n </div>\r\n </div>\r\n <div class=\"clearfix\">\r\n <div class=\"form-group text-center\">\r\n <button type=\"submit\" class=\"btn btn-ros\">Search Plans</button>\r\n </div>\r\n </div>\r\n </div>\r\n </form>\r\n </div>\r\n </div>\r\n</div> -->\r\n<!-- <section class=\"choose-criteria\">\r\n <div class=\"container\">\r\n <ul>\r\n <li>\r\n <a routerLink=\"/residential\">\r\n <i class=\"material-icons\">explore</i>\r\n <h4>Residential</h4>\r\n <p>\r\n Are you tired of run of the mill energy companies in Texas?\r\n <b>Get the premium quality service and great prices you deserve.</b>\r\n <a routerLink=\"/residential\">Read More..</a>\r\n </p>\r\n </a>\r\n </li>\r\n <li>\r\n <a routerLink=\"/commercial\">\r\n <i class=\"material-icons\">polymer</i>\r\n <h4>Commercial</h4>\r\n <p>\r\n <b>Hire us and we’ll help you save money. </b>Everyone could use a reduction in their electricity bill.\r\n <a routerLink=\"/commercial\">Read More..</a>\r\n </p>\r\n </a>\r\n </li>\r\n <li>\r\n <a routerLink=\"/login\">\r\n <i class=\"material-icons\">lock_open</i>\r\n <h4>Member Login</h4>\r\n <p>\r\n <b>Welcome Back!</b> The OUR Energy Online Portal provides a convenient way to access your account information.\r\n <a routerLink=\"/login\">Read More..</a>\r\n </p>\r\n </a>\r\n </li>\r\n </ul>\r\n </div>\r\n</section> \r\n <section class=\"why-our\">\r\n <div class=\"container\">\r\n <div class=\"mainPage\">\r\n <h2>Why Our Energy?</h2>\r\n <p>\r\n Our overhead is low. We leverage technology to the hilt. We, at Our Energy have made it our mission to bring you the most affordable rates in the industry by leveraging cutting edge technologies and exceptional customer service.\r\n </p>\r\n <p>\r\n <b>We propel our customers to the next level up in Energy Automation & Efficiency.</b>\r\n </p>\r\n <h4>Saving Money on Energy Bills like NEVER BEFORE - A Glimpse into Our Energy</h4>\r\n </div>\r\n <div class=\"content back-padding\">\r\n <div class=\"rightSideContent-image\">\r\n <img src=\"../assets/img/1.png\" alt=\"logo\">\r\n </div>\r\n <div class=\"leftSideContent\">\r\n <p>\r\n <span>Save Hundreds of Dollars per year on your Energy Bills!</span> We keep our overhead low and pass on the savings to our customers.\r\n </p>\r\n </div>\r\n </div>\r\n <div class=\"content background\">\r\n <div class=\"leftSideContent\">\r\n <p>\r\n <span>We leverage cutting edge Technologies to lower costs</span> This helps us our customers save more money </p>\r\n </div>\r\n <div class=\"rightSideContent-image\">\r\n <img src=\"../assets/img/2.png\" alt=\"logo\">\r\n </div>\r\n </div>\r\n <div class=\"content back-padding\">\r\n <div class=\"rightSideContent-image\">\r\n <img src=\"../assets/img/3.png\" alt=\"logo\">\r\n </div>\r\n <div class=\"leftSideContent\">\r\n <p>\r\n <span> Lower your Energy Bills Today. Switch to Our Energy Now!</span>Our Customer Service is simply exceptional. Try Us today.\r\n </p>\r\n </div>\r\n </div>\r\n <div class=\"content background\">\r\n <div class=\"leftSideContent\">\r\n <p>\r\n <span>Powering Texas. One Smile at a Time!</span> </p>\r\n </div>\r\n <div class=\"rightSideContent-image\">\r\n <img src=\"../assets/img/5.png\" alt=\"logo\">\r\n </div>\r\n </div>\r\n <div class=\"content background\">\r\n <div class=\"rightSideContent-image\">\r\n <img src=\"../assets/img/4.png\" alt=\"logo\">\r\n </div>\r\n <div class=\"leftSideContent\">\r\n <p>\r\n <span>Shop and Manage Energy on Mobile</span> Experience our next generation Artificially Intelligent App on Google Play and Apple App Store.\r\n </p>\r\n </div>\r\n\r\n </div>\r\n </div>\r\n</section> \r\n <section class=\"quality\">\r\n <div class=\"container\">\r\n <h2> QUALITY & AFFORDABLE RESIDENTIAL ELECTRICITY SINCE 2009 </h2>\r\n <p>NO Tricks. NO Hidden Fees. Get Excellent Texas Energy for the Best Price! Simple and Hassle-Free Switching. Find Your Residential Electricity Plan Today!</p>\r\n <mat-divider></mat-divider>\r\n </div>\r\n</section> \r\n <section class=\"desc-banner\">\r\n <div class=\"container\">\r\n <div class=\"row\">\r\n <div class=\"col-md-6\">\r\n <h2>TOP QUALITY & AFFORDABLE TEXAS </h2>\r\n <p>ENERGY SERVICES</p>\r\n <h2>YOU HAVE THE POWER TO CHOOSE.</h2>\r\n <p> CHOOSE PRICE. CHOOSE SERVICE.</p>\r\n <h2>CHOOSE YOUR ENERGY LLC.</h2>\r\n <div class=\"btn-holder\">\r\n <button type=\"button\" class=\"btn btn-rose btn-lg\" routerLink=\"/plan\">VIEW PLANS\r\n </button>\r\n </div>\r\n </div>\r\n </div>\r\n </div>\r\n</section> \r\n <section class=\"pw-solutions\">\r\n <div class=\"container\">\r\n <h1 class=\"text-center\">OUR ENERGY TEXAS POWER SOLUTIONS</h1>\r\n <ul class=\"fourcolumns\">\r\n <li>\r\n <div class=\"holder icons red\">\r\n <a href=\"#\" class=\"img-holder\">\r\n <i class=\"fa-gift fa fa-4x\"></i>\r\n </a>\r\n <h3>Specials & Refer a Friend</h3>\r\n <div class=\"txt-holder\">\r\n <p>This is your lucky day! Take advantage of Raffles, FREE Prizes, Contests, Discounts and Refer a Friend Promotions. There’s something for everyone at OUR Energy. Sign up Today and Reap the Rewards!</p>\r\n </div>\r\n <div class=\"btn-holder\">\r\n <button type=\"button\" class=\"btn btn-info btn-round\" routerLink=\"/special\">View Specials </button>\r\n </div>\r\n </div>\r\n </li>\r\n <li>\r\n <div class=\"holder icons red\">\r\n <a href=\"#\" class=\"img-holder\">\r\n <i class=\"fa fa-newspaper-o fa-4x\"></i>\r\n </a>\r\n <h3>News and More!</h3>\r\n <div class=\"txt-holder\">\r\n <p>Stay up to date on TX Energy News and Events, TX Energy Tips, Promotions, Sports, Activities, Texas Community, Lifestyle and much more by visiting the OUR Energy Life BLOG!</p>\r\n </div>\r\n <div class=\"btn-holder\">\r\n <button type=\"button\" class=\"btn btn-info btn-round\" routerLink=\"/ourlife\" style=\"margin-top:30px;\">View Our Life Blog </button>\r\n </div>\r\n </div>\r\n </li>\r\n <li>\r\n <div class=\"holder icons red\">\r\n <a href=\"#\" class=\"img-holder\">\r\n <i class=\"fa fa-truck fa-4x\"></i>\r\n </a>\r\n <h3>Same Day Move Ins</h3>\r\n <div class=\"txt-holder\">\r\n <p>Whether you’re looking for electricity providers Houston, electric companies in Dallas or Fort Worth electric companies we’ll make your move a breeze! We offer same day move ins as well as out of cycle switches.</p>\r\n </div>\r\n <div class=\"btn-holder\">\r\n <button type=\"button\" class=\"btn btn-info btn-round\" routerLink=\"/help\" style=\"margin-top:10px;\">Moving Solutions</button>\r\n </div>\r\n </div>\r\n </li>\r\n <li>\r\n <div class=\"holder icons red\">\r\n <a href=\"#\" class=\"img-holder\">\r\n <i class=\"fa fa-money fa-4x\"></i>\r\n </a>\r\n <h3>Money and Saving Tips</h3>\r\n <div class=\"txt-holder\">\r\n <p>Want to Save Money on your electric bill? Keep your eyes glued to our Energy Saving Tips page for the latest tips and tricks to cut down on your power bill!</p>\r\n </div>\r\n <div class=\"btn-holder\">\r\n <button type=\"button\" class=\"btn btn-info btn-round\" routerLink=\"/energy-saving\" style=\"margin-top:20px;\">VIEW TIPS</button>\r\n </div>\r\n </div>\r\n </li>\r\n <li>\r\n <div class=\"holder icons red\">\r\n <a href=\"#\" class=\"img-holder\">\r\n <i class=\"fa fa-heart fa-4x\"></i>\r\n </a>\r\n <h3>Community</h3>\r\n <div class=\"txt-holder\">\r\n <p>We’re active members of our beautiful Texas community! Together we can make a difference! View our recent community outreach projects.</p>\r\n </div>\r\n <div class=\"btn-holder\">\r\n <button type=\"button\" class=\"btn btn-info btn-round\" routerLink=\"/community\" style=\"margin-top:15px;\">View Projects</button>\r\n </div>\r\n </div>\r\n </li>\r\n <li>\r\n <div class=\"holder icons red\">\r\n <a href=\"#\" class=\"img-holder\">\r\n <i class=\"fa fa-wrench fa-4x\"></i>\r\n </a>\r\n <h3>Help Tools</h3>\r\n <div class=\"txt-holder\">\r\n <p>All the help you need is just a click away! Visit our Help Tools page for FAQs, Payment Solutions, Understand Your Bill, Forms, Historical Prices and more!</p>\r\n </div>\r\n <div class=\"btn-holder\">\r\n <button type=\"button\" class=\"btn btn-info btn-round\" routerLink=\"/help\">Visit Help Center</button>\r\n </div>\r\n </div>\r\n </li>\r\n </ul>\r\n </div>\r\n</section> \r\n <section class=\"success-for-business\">\r\n <div class=\"container\">\r\n <h2>Success for your Business</h2>\r\n <div class=\"row\">\r\n <div class=\"col-md-4\">\r\n <article class=\"icon-box\">\r\n <i class=\"material-icons\">wb_sunny</i>\r\n <h4>Better Planning</h4>\r\n <p>We take the time to understand your needs by analyzing your previous energy consumption.This enables us to propose short and long term solutions.</p>\r\n </article>\r\n </div>\r\n <div class=\"col-md-4\">\r\n <article class=\"icon-box\">\r\n <i class=\"material-icons\">blur_on</i>\r\n <h4>Better Business</h4>\r\n <p>Our Energy market experts pre-purchase bulk volumes of electricity at the lowest rates.</p>\r\n </article>\r\n </div>\r\n <div class=\"col-md-4\">\r\n <article class=\"icon-box\">\r\n <i class=\"material-icons\">trending_down</i>\r\n <h4>Reduce Business Cost</h4>\r\n <p>Pay lower energy rates! We deliver affordable electricity prices which translate to substantial energy savings.</p>\r\n </article>\r\n </div>\r\n </div>\r\n <div style=\"display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap\">\r\n <button class=\"btn\" routerLink='/commercial'> GET YOUR FREE TEXAS ENERGY QUOTE TODAY!</button>\r\n </div>\r\n </div>\r\n</section> \r\n <section class=\"about-4\">\r\n\r\n <div class=\"container\">\r\n <h3>OUR CLIENTS</h3>\r\n <span> The clients listed are an example of individual franchise customers that we serve and do not represent the entire brand.</span>\r\n <div class=\"detail\">\r\n <p> Our Energy is a premier Texas residential and commercial retail electricity provider.</p>\r\n <p>We pride ourselves in making quality services affordable to all such as:</p>\r\n <div class=\"row\">\r\n <div class=\"col-sm-8\">\r\n <div class=\"row\">\r\n <ul class=\"col-sm-6\">\r\n <li>\r\n <a routerLink=\"/help\">Same Day Move-Ins or Out of Cycle Switches</a>\r\n </li>\r\n <li>\r\n <a routerLink=\"/help\">Help Tools</a>\r\n </li>\r\n <li>\r\n <a routerLink=\"/energy-saving\">Money Saving Tips</a>\r\n </li>\r\n </ul>\r\n <ul class=\"col-sm-6\">\r\n <li>\r\n <a routerLink=\"/community\">Community Outreach Projects</a>\r\n </li>\r\n <li>\r\n <a routerLink=\"/ourlife\">OUR Life Blog</a>\r\n </li>\r\n <li>\r\n <a routerLink=\"/special\">OUR Energy Member Rewards</a>\r\n </li>\r\n </ul>\r\n </div>\r\n <p>OUR Energy services of all sizes from start ups to large corporations. Our success is brought about by our special ability to customize each business plan to best suit the needs of each commercial customer.</p>\r\n <p>The following are a few examples of the various types of Texas industries pride ourselves in servicing:</p>\r\n <div class=\"row\">\r\n <ul class=\"col-sm-6\">\r\n <li>Agriculture</li>\r\n <li>Banking and Accounting</li>\r\n <li>Call Centers</li>\r\n <li>Chemical</li>\r\n </ul>\r\n <ul class=\"col-sm-6\">\r\n <li>Technology</li>\r\n <li>Education</li>\r\n <li>Food and Beverage</li>\r\n <li>Non Profit</li>\r\n </ul>\r\n </div>\r\n </div>\r\n <div class=\"col-sm-4 \">\r\n <img class=\"mySlides\" src=\"../../assets/img/TAcobel.jpg\">\r\n <img class=\"mySlides\" src=\"../../assets/img/KFC2.jpg\">\r\n <img class=\"mySlides\" src=\"../../assets/img/Longjonh.jpg\">\r\n <img class=\"mySlides\" src=\"../../assets/img/TAcobel.jpg\">\r\n <img class=\"mySlides\" src=\"../../assets/img/PizzaHut.jpg\">\r\n <p class=\"clients\">* The clients listed are an example of individual franchise customers that we serve and do not represent the entire brand.</p>\r\n </div>\r\n </div>\r\n\r\n <div class=\"row\">\r\n <div class=\"col-sm-6\">\r\n <p>We are constantly seeking feedback on how we can enhance our services. Please feel free to submit your\r\n <a routerLink=\"/contact\">feedback</a> today.</p>\r\n </div>\r\n </div>\r\n </div>\r\n </div>\r\n</section> \r\n\r\n<section class=\"main_banner\">\r\n <div class=\"download-here\">\r\n <a href=\"https://play.google.com/store/apps/details?id=com.brainplow.OurEnergythemeone\" rel=\"noreferrer\" target=\"_blank\">\r\n <img src=\"../../assets/img/Adroid-Badge.png\">\r\n </a>\r\n <a href=\"https://itunes.apple.com/us/app/our-energy/id1438707950?mt=8\" rel=\"noreferrer\" target=\"_blank\">\r\n <img src=\"../../assets/img/IOS-Badge.png\">\r\n </a>\r\n </div>\r\n</section>-->\r\n<!-- ............................................ -->\r\n<section class=\"main_banner\">\r\n  <div class=\"download-here\">\r\n    <a href=\"https://play.google.com/store/apps/details?id=com.brainplow.OurEnergythemeone\" rel=\"noreferrer\"\r\n      target=\"_blank\">\r\n      <img src=\"../../assets/img/Adroid-Badge.png\">\r\n    </a>\r\n    <a href=\"https://itunes.apple.com/us/app/our-energy/id1438707950?mt=8\" rel=\"noreferrer\" target=\"_blank\">\r\n      <img src=\"../../assets/img/IOS-Badge.png\">\r\n    </a>\r\n  </div>\r\n  <div class=\"promo_img_div\">\r\n    <div class=\"zip_promo\">\r\n      <h3 class=\"heading_s\">Saving <br> on Energy <br>Made Easy </h3>\r\n      <div class=\"form-home\">\r\n        <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" class=\"form-zip ng-untouched ng-pristine ng-valid\" novalidate>\r\n          <div class=\"card\">\r\n            <div class=\"clearfix mt-5\">\r\n              <div class=\"col-md-6 col-sm-6\">\r\n                <div class=\"form-group\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Zip Code\" [formControl]=\"zip_code\" [(ngModel)]=\"zipCode\" #zip\r\n                      name=\"zipCode\" maxlength=\"5\" />\r\n                    <mat-error *ngIf=\"zip_code.hasError('pattern')\">\r\n                      Invalid Zip Code\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"zip_code.hasError('required')\">\r\n                      Zip Code is required\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 col-sm-6\">\r\n                <div class=\"form-group\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Promo Code\" name=promo [(ngModel)]=\"promoCode\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <div class=\"form-group text-center\">\r\n                <button type=\"submit\" class=\"btn btn-rose blue-btn\">Lets find a plan to fit your needs</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"main_img\">\r\n      <img src=\"../../../assets/img/home-bg-04.png\" class=\"img-responsive\" alt=\"\">\r\n    </div>\r\n    </div>\r\n   </section>\r\n   <section class=\"four_Steps\">\r\n    <h3 class=\"heading_s\"> Choose the plan that’s right for you</h3>\r\n    <div class=\"search-result\">\r\n    <div class=\"result-box\" *ngFor=\"let value of products | slice:0:3 \">\r\n    \r\n    <div class=\"search-plan\">\r\n    <h3 class=\"productName\"> \r\n    {{value.product_name}}\r\n    </h3>\r\n    <div class=\"main\">\r\n    <div>\r\n    <div class=\"text-center inner price-box\">\r\n    <div>\r\n    <h3>{{value.tariff_2000}}¢</h3>\r\n    <b>per kWh</b>\r\n    </div>\r\n    <!-- <p class=\"tag-line\">\r\n    {{value.product_info}}\r\n    </p> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"inner\">\r\n              <div class=\"rateSheet\">\r\n                <div>\r\n                  <!-- <span>Contract Term: 6 months</span><br>\r\n    <span>Termination Fee: $50</span><br>\r\n    <span>Utility: OurEnergy</span> -->\r\n    <span >Contract Term: {{value.display_term}} months</span>\r\n    <span >Termination Fee: ${{value.display_termination_fee}}</span>\r\n    <span >Utility: {{value.vendor_company}}</span>\r\n    <span>Average Rate at 2000 kWhs</span>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    \r\n    <div class=\"text-center inner links-list\">\r\n    <a matTooltip=\"Terms of Service\" [href]=\"value.product_tos_url\" target=\"_blank\"><b>TOS</b></a>\r\n    <a matTooltip=\"Your Rights as a Customer\" href=\"https://www.ourenergyllc.com/prodox/yrac.pdf\" target=\"_blank\"><b>YRAC</b></a>\r\n    <a matTooltip=\"Electric Facts Label\" [href]=\"value.product_efl_url\" target=\"_blank\"><b>EFL</b></a>\r\n    \r\n    <button class=\"pink_btn enroll-btn\" (click)=\"enroll(i)\">Enroll Now</button>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    \r\n    \r\n    </div>\r\n    <!-- <div class=\"result-box\">\r\n    <div>\r\n    <div class=\"search-plan\">\r\n    <h3 class=\"productName\">Product Name</h3>\r\n    <p class=\"tag-line\">\r\n    Tagline\r\n    </p>\r\n    <div class=\"main\">\r\n    \r\n    <div>\r\n    \r\n    <div class=\"text-center inner price-box\">\r\n    <div>\r\n    <b>2000 kWh</b>\r\n    <h3>8¢</h3>\r\n    </div>\r\n    \r\n    </div>\r\n    </div>\r\n    <div class=\"bar\"></div>\r\n    <div class=\"inner\">\r\n    <div class=\"rateSheet\">\r\n    <div>\r\n    <span>Contract Term: 6 months</span><br>\r\n    <span>Termination Fee: $50</span><br>\r\n    <span>Utility: OurEnergy</span>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"bar\"></div>\r\n    <div class=\"bar\"></div>\r\n    <div class=\"text-center inner links-list\">\r\n    <a matTooltip=\"Terms of Service\" target=\"_blank\"><b>TOS</b></a>\r\n    <a matTooltip=\"Your Rights as a Customer\" href=\"https://www.ourenergyllc.com/prodox/yrac.pdf\"\r\n    target=\"_blank\"><b>YRAC</b></a>\r\n    <a matTooltip=\"Electric Facts Label\" target=\"_blank\"><b>EFL</b></a>\r\n    \r\n    <button class=\"btn btn-rose\" >Enroll Now</button>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    \r\n    </div> -->\r\n    <!-- <div class=\"result-box\">\r\n    <div>\r\n    <div class=\"search-plan\">\r\n    <h3 class=\"productName\">Product Name</h3>\r\n    <p class=\"tag-line\">\r\n    Tagline\r\n    </p>\r\n    <div class=\"main\">\r\n    \r\n    <div>\r\n    \r\n    \r\n    <div class=\"text-center inner price-box\">\r\n    <div>\r\n    <b>2000 kWh</b>\r\n    <h3>7¢</h3>\r\n    </div>\r\n    \r\n    </div>\r\n    </div>\r\n    <div class=\"bar\"></div>\r\n    <div class=\"inner\">\r\n    <div class=\"rateSheet\">\r\n    <div>\r\n    <span>Contract Term: 6 months</span><br>\r\n    <span>Termination Fee: $50</span><br>\r\n    <span>Utility: OurEnergy</span>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"bar\"></div>\r\n    <div class=\"bar\"></div>\r\n    <div class=\"text-center inner links-list\">\r\n    <a matTooltip=\"Terms of Service\" target=\"_blank\"><b>TOS</b></a>\r\n    <a matTooltip=\"Your Rights as a Customer\" href=\"https://www.ourenergyllc.com/prodox/yrac.pdf\"\r\n    target=\"_blank\"><b>YRAC</b></a>\r\n    <a matTooltip=\"Electric Facts Label\" target=\"_blank\"><b>EFL</b></a>\r\n    \r\n    <button class=\"btn btn-rose\" >Enroll Now</button>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    \r\n    </div> -->\r\n  </div>\r\n\r\n  <div class=\"faqs_home \">\r\n    <h3 class=\"heading_s\">Frequently Asked Questions</h3>\r\n    <div class=\"panel-group\" id=\"accordion\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading collapsed\" aria-expanded=\"ture\" data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n          href=\"#collapse1\">\r\n          <h4 class=\"panel-title p__1\">\r\n            <!-- <i  (click)=\"hide = !hide\" class=\" {{hide ? 'fa fa-plus-square' : 'fa fa-minus-square'}}\"></i> -->\r\n            <!-- <i class=\"tglClass fa fa-plus-square\"></i> -->\r\n            <a> Who is Our Energy?</a>\r\n            <!-- <i class=\"eye-splash\" (click)=\"hide = !hide\" class=\" {{hide ? 'fa fa-angle-down' : 'fa fa-angle-up'}}\"></i> -->\r\n          </h4>\r\n        </div>\r\n        <div id=\"collapse1\" class=\"panel-collapse collapse in\">\r\n          <div class=\"panel-body\">\r\n            <p>OUR Energy is a Retail Electric Provider (REP) which is Licensed to operate in Texas in the\r\n              Retail Energy Market, we are in process of expanding our operations in Retail Electricity and Gas\r\n              Markets in New York and Illinois.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">\r\n          <h4 class=\"panel-title\">\r\n            <!-- <i  (click)=\"hide1 = !hide1\" class=\" {{hide1 ? 'fa fa-plus-square' : 'fa fa-minus-square'}}\"></i> -->\r\n            <a> Is OUR Energy certified as a Retail Electricity Provider? </a>\r\n\r\n          </h4>\r\n        </div>\r\n        <div id=\"collapse3\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body\">\r\n            <p>Yes, the Public Utility Commission for the State of Texas puts every REP through a rigid and\r\n              strict process of certification. OUR Energy has met the requirements for financial, managerial and\r\n              technical abilities for the privilege\r\n              of selling energy in Texas (PUC Certificate Number 10170).</p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse4\">\r\n          <h4 class=\"panel-title\">\r\n            <!-- <i  (click)=\"hide2 = !hide2\" class=\" {{hide2 ? 'fa fa-plus-square' : 'fa fa-minus-square'}}\"></i> -->\r\n            <a>Why would I choose OUR Energy? </a>\r\n\r\n          </h4>\r\n        </div>\r\n        <div id=\"collapse4\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body\">\r\n            <p>Honesty, Integrity and Loyalty. As a Retail Electric provider we will make sure that you THE\r\n              Customer is treated as a part of OUR Energy Family, we will make sure your issues or concerns are\r\n              addressed and as much as it is possible\r\n              it should always be a one call resolution.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mg-0\">\r\n        <div class=\"col-sm-12 text-right\">\r\n          <button class=\"btn btn-rose\" routerLink=\"/help\">\r\n            View More\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- <section class=\"three-blog container\">\r\n    <h3 class=\"heading_s\">Blog Feeds</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n    <div class=\"blog\">\r\n    <div class=\"img\">\r\n    <img src=\"../../../assets/img/RESIDENTIAL-ELECTRICITY.png\" alt=\"\">\r\n    </div>\r\n    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>\r\n    <button>Read More</button>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n    <div class=\"blog\">\r\n    <div class=\"img\">\r\n    <img src=\"../../../assets/img/RESIDENTIAL-ELECTRICITY.png\" alt=\"\">\r\n    </div>\r\n    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>\r\n    <button>Read More</button>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"blog\">\r\n        <div class=\"img\">\r\n          <img src=\"../../../assets/img/RESIDENTIAL-ELECTRICITY.png\" alt=\"\">\r\n        </div>\r\n        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>\r\n        <button>Read More</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section> -->"

/***/ }),

/***/ "./src/app/Container/main/main.component.scss":
/***/ (function(module, exports) {

module.exports = "img {\n  vertical-align: top; }\n\n.myCard {\n  -webkit-box-shadow: 5px 0 5px -5px #333;\n          box-shadow: 5px 0 5px -5px #333; }\n\n::ng-deep .tdsp-rates .mat-form-field-underline {\n  height: 0px; }\n\n::ng-deep .tdsp-rates .mat-input-element:disabled {\n  color: #333; }\n\n::ng-deep .tdsp-rates .tdsp-heading {\n  margin: 20px 0 20px !important; }\n\n::ng-deep .tdsp-rates .innner .mat-form-field {\n  font-size: 18px; }\n\n.premise {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 20px;\n  padding-bottom: 0px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.premise .inner-premise {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.premise .inner-premise .premise-details {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      text-align: center; }\n\n.clearfix {\n  width: 100%;\n  display: block;\n  clear: both; }\n\n.bg-white {\n  background: #ffffff;\n  padding: 30px 9999px;\n  margin: 20px -9999px; }\n\n.required {\n  color: #e53935; }\n\nul {\n  font-size: 16px;\n  line-height: 22px;\n  padding: 0;\n  list-style: inside; }\n\nul li {\n    margin: 0 0 10px; }\n\np {\n  font-size: 16px;\n  line-height: 24px; }\n\n.mat-select {\n  padding: 0 !important;\n  background: none; }\n\n.mat-select .mat-select-trigger {\n    padding: 8px; }\n\n.mat-select *,\n.btn {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: transparent; }\n\nh3 {\n  margin: 0 0 20px !important;\n  font-weight: 300 !important; }\n\n.card {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin: 25px 0;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff;\n  padding: 15px;\n  margin-top: 20px; }\n\n.card mat-error {\n    font-weight: bold;\n    font-size: 14px; }\n\n.card mat-form-field {\n    font-size: 16px;\n    font-weight: bold; }\n\n.card .card-header {\n    padding: 15px 20px 0;\n    background: linear-gradient(60deg, #bb0f0f, #c40202);\n    margin: -20px 15px 0;\n    border-radius: 6px;\n    padding: 15px;\n    position: relative;\n    -webkit-box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n            box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4); }\n\n.card .card-header .card-header-text {\n      display: inline-block; }\n\n.card .card-title {\n    color: #FFFFFF;\n    font-weight: bold;\n    margin-top: 0;\n    margin-bottom: 3px;\n    font-size: 22px;\n    line-height: 26px;\n    font-weight: 500 !important; }\n\n.card a {\n    display: inline-block;\n    vertical-align: top;\n    font-weight: 500; }\n\n.card .card-description {\n    font-weight: 500; }\n\n.home-main {\n  position: relative;\n  left: 0;\n  right: 0; }\n\n.header-home {\n  padding: 10px 0;\n  min-height: 58px;\n  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  background: #fefefe; }\n\n.logo {\n  width: 120px;\n  display: block; }\n\n.logo img {\n    width: 100%; }\n\n.nav-home ul {\n  font-size: 18px;\n  line-height: 22px;\n  font-weight: 700;\n  padding: 10px 0 0; }\n\n.nav-home ul a {\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    padding: 0 !important;\n    color: #616161; }\n\n.nav-home ul a i {\n      margin: -3px 2px 0 0; }\n\n.nav-home ul li {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 0 0 20px; }\n\n.nav-home ul a:hover {\n    color: #e53935;\n    text-decoration: none; }\n\n.form-home {\n  max-width: 500px; }\n\n.form-home .mat-form-field {\n    width: 100% !important; }\n\n.form-group {\n  margin-top: 15px;\n  margin-bottom: 0px; }\n\n.form-zip {\n  margin: 0 auto;\n  max-width: 640px; }\n\n.packages-holder {\n  padding: 30px 0 25px; }\n\n.packages-holder .heading {\n    margin: 0 !important; }\n\n.packages-holder .btn-holder {\n    text-align: center; }\n\n.heading {\n  margin: 0 0 30px; }\n\n.interest-area {\n  background: #ffffff;\n  padding: 30px 0 40px; }\n\n.interest-area .container > strong {\n    font-size: 22px;\n    line-height: 26px;\n    text-align: center;\n    margin: 0 0 15px;\n    display: block; }\n\n.interest-area ul {\n    font-size: 30px;\n    line-height: 30px;\n    text-align: center; }\n\n.interest-area ul li {\n      display: inline-block;\n      vertical-align: middle; }\n\n.interest-area ul li a {\n        -webkit-transition: all 0.25s ease;\n        transition: all 0.25s ease;\n        width: 170px;\n        height: 110px;\n        display: block;\n        padding: 20px;\n        color: #bf360c;\n        border-radius: 4px;\n        background: #f3f0ef; }\n\n.interest-area ul li a span {\n          -webkit-transition: all 0.25s ease;\n          transition: all 0.25s ease;\n          font-size: 16px;\n          line-height: 20px;\n          display: block;\n          padding: 6px 0 0;\n          font-weight: 700;\n          color: #bf360c; }\n\n.interest-area ul li a:hover {\n        background: #bf360c;\n        color: #ffffff; }\n\n.interest-area ul li a:hover span {\n          color: #ffffff; }\n\n@-webkit-keyframes popupDown {\n  35% {\n    font-size: 65px; }\n  100% {\n    font-size: 50px; } }\n\n@keyframes popupDown {\n  35% {\n    font-size: 65px; }\n  100% {\n    font-size: 50px; } }\n\n.pw-solutions {\n  padding: 30px 0; }\n\n.pw-solutions ul {\n    letter-spacing: -10px;\n    margin: 0 -10px;\n    padding: 0;\n    list-style: none; }\n\n.pw-solutions ul li {\n      display: inline-block;\n      vertical-align: top;\n      letter-spacing: 0;\n      width: 33%;\n      margin: 0 0 20px;\n      padding: 0 10px; }\n\n.pw-solutions ul li .holder {\n        -webkit-transition: all 0.3s ease-out;\n        transition: all 0.3s ease-out;\n        padding: 8px;\n        -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n                box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n        background: #ffffff;\n        border-radius: 6px;\n        height: 480px; }\n\n.pw-solutions ul li .holder .icons {\n          padding: 25px 8px 8px; }\n\n.pw-solutions ul li .holder .red .btn {\n          background: #000;\n          bottom: 0px; }\n\n.pw-solutions ul li .holder .red i {\n          color: #131275; }\n\n.pw-solutions ul li .holder:hover {\n        -webkit-box-shadow: 0 5px 25px 0 rgba(64, 64, 64, 0.3);\n        box-shadow: 0 5px 25px 0 rgba(64, 64, 64, 0.3);\n        -webkit-transform: scale(1.05);\n                transform: scale(1.05); }\n\n.pw-solutions ul li h3 {\n        text-align: center; }\n\n.pw-solutions ul li .img-holder {\n        border-radius: 6px;\n        overflow: hidden;\n        text-align: center; }\n\n.pw-solutions ul li .img-holder .material-icons {\n          width: 100px;\n          height: 100px;\n          font-size: 10px;\n          line-height: 100px;\n          border: 1px solid crimson;\n          border-radius: 100%;\n          text-align: center;\n          margin: 0 0 15px; }\n\n.pw-solutions ul li .txt-holder {\n        padding: 10px;\n        font-weight: 400 !important;\n        line-height: 26px; }\n\n.pw-solutions ul li .btn-holder {\n        text-align: center; }\n\n.pw-solutions ul li a {\n        display: block; }\n\n.pw-solutions ul li a img {\n          max-width: 100%; }\n\n.pw-solutions ul li a:hover {\n        text-decoration: none; }\n\n.pw-solutions .img-holder i {\n    color: #383634;\n    border: 4px solid #cd0000;\n    border-radius: 100%;\n    display: block;\n    width: 100px;\n    height: 100px;\n    line-height: 100px;\n    text-align: center;\n    margin: 0 auto 30px;\n    font-size: 40px; }\n\n.btn-refer {\n  background: #242323;\n  color: #fff;\n  padding: 10px 20px;\n  text-align: center;\n  display: inline-block;\n  text-decoration: none;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  margin-bottom: 10px;\n  border: none;\n  width: 100%;\n  font-size: 19px;\n  font-weight: bold;\n  border-radius: 25px; }\n\n.btn-refer:hover {\n  background: #eb542f;\n  color: #fff;\n  text-decoration: none; }\n\n.btn-lg {\n  line-height: 1.3333333; }\n\n.btn.btn-round {\n  border-radius: 30px;\n  background: #000;\n  bottom: 0px; }\n\n.carouselTwo {\n  margin: 0 -15px;\n  padding: 0 15px; }\n\n.carouselTwo .slick-list {\n    padding: 60px 0 0; }\n\n.carouselTwo .item {\n    padding: 0 15px; }\n\n.carouselTwo .buttons {\n    position: absolute;\n    top: 50%;\n    padding: 5px !important; }\n\n.carouselTwo .buttons .material-icons {\n      font-size: 30px;\n      line-height: 30px; }\n\n.carouselTwo .buttons .leftRs {\n      left: -35px; }\n\n.carouselTwo .buttons .rightRs {\n      right: -35px; }\n\n.bannerCarousel {\n  position: relative;\n  overflow: hidden;\n  height: 479px; }\n\n.bannerCarousel .banner-slider {\n  height: 100%; }\n\n.bannerCarousel .banner-slider .item {\n  height: 100% !important; }\n\n.bannerCarousel .banner-slider .item img {\n  width: 100%;\n  height: 100%; }\n\n.bannerCarousel .buttons {\n  width: 48px;\n  height: 48px;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  border-radius: 100%;\n  background: #212121;\n  border: none;\n  position: absolute;\n  top: 50%;\n  margin: -24px 0 0;\n  color: #e0f2f1;\n  opacity: 0.6;\n  z-index: 5; }\n\n.bannerCarousel .buttons:hover {\n  opacity: 0.95; }\n\n.bannerCarousel .buttons.rightRs {\n  right: 30px; }\n\n.bannerCarousel .buttons.leftRs {\n  left: 30px; }\n\n.bannerCarousel .buttons .material-icons {\n  font-size: 34px;\n  line-height: 48px; }\n\n.s-areaCarousel .item {\n  vertical-align: middle; }\n\n.s-areaCarousel button {\n  width: calc(100% - 10px);\n  border: none;\n  padding: 10px;\n  margin: 0 5px;\n  text-transform: capitalize;\n  font-weight: 700;\n  border-radius: 20px; }\n\n.s-areaCarousel .buttons {\n  width: 30px;\n  height: 30px;\n  background: none;\n  padding: 0;\n  margin: 0;\n  bottom: 5px; }\n\n.s-areaCarousel .buttons.rightRs {\n  position: absolute;\n  right: -35px; }\n\n.s-areaCarousel .buttons.leftRs {\n  position: absolute;\n  left: -35px; }\n\n.s-areaCarousel .buttons i {\n  font-size: 30px;\n  line-height: 30px; }\n\n.choose-criteria {\n  padding: 10px;\n  min-height: 100px;\n  background: linear-gradient(-45deg, #880705 0, #7e0404 100%); }\n\n.choose-criteria ul {\n  font-size: 18px;\n  line-height: 20px;\n  letter-spacing: -10px; }\n\n.choose-criteria ul li {\n  display: inline-block;\n  vertical-align: top;\n  padding: 0 10px 0 75px;\n  margin: 0;\n  position: relative;\n  letter-spacing: 0;\n  width: 33.33%; }\n\n.choose-criteria ul li i {\n  font-size: 60px;\n  line-height: 64px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: auto;\n  bottom: auto; }\n\n.choose-criteria ul li a {\n  display: block;\n  color: #ffffff;\n  font-weight: 300 !important; }\n\n.choose-criteria ul li a:hover {\n  color: #e4ebe9;\n  text-decoration: none; }\n\n.choose-criteria ul li p {\n  margin: 0; }\n\n.choose-criteria ul li p a:hover {\n    text-decoration: underline; }\n\n.choose-criteria ul li h4 {\n  font-size: 28px;\n  line-height: 32px;\n  margin: 0 0 5px;\n  font-weight: bold; }\n\n.col-md-3 .card .card-image {\n  min-height: 155px; }\n\n.in-your-area {\n  font-weight: 500;\n  padding: 40px 0; }\n\n.in-your-area .col {\n  margin-bottom: 25px; }\n\n.in-your-area img {\n  width: 100%;\n  height: auto;\n  max-width: 100%; }\n\n.in-your-area a {\n  position: relative;\n  display: block;\n  color: #212121; }\n\n.in-your-area a img {\n  width: 100%;\n  max-height: 100%; }\n\n.in-your-area a .cover {\n  margin: 0 0 10px;\n  height: 240px; }\n\n.in-your-area a .cover.small {\n  height: 175px; }\n\n.in-your-area a .cover > p {\n  margin: 0 0 25px; }\n\n.in-your-area a .overlay {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 30px;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-transition: 0.4s ease all 0s;\n  transition: 0.4s ease all 0s;\n  padding: 15px;\n  opacity: 0;\n  visibility: hidden;\n  color: #fafafa;\n  text-align: left;\n  overflow: hidden;\n  font-weight: 400; }\n\n.in-your-area a .overlay h4 {\n  display: inline-block;\n  vertical-align: top;\n  border-bottom: 1px solid #fafafa; }\n\n.in-your-area a .overlay ul {\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 400; }\n\n.in-your-area a .overlay ul li {\n  position: relative;\n  padding: 0 0 0 15px;\n  margin: 0 0 5px; }\n\n.in-your-area a .overlay ul li:before {\n  content: '';\n  width: 5px;\n  height: 5px;\n  position: absolute;\n  left: 0;\n  top: 8px;\n  right: auto;\n  bottom: auto;\n  background: #fafafa; }\n\n.in-your-area a:hover {\n  color: #212121; }\n\n.in-your-area a:hover .overlay {\n  opacity: 1;\n  visibility: visible; }\n\n.testimonial-holder .img-holder {\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  overflow: hidden; }\n\n.testimonial-holder .img-holder img {\n  width: 100%;\n  height: 100%; }\n\n.testimonial-holder .name {\n  display: block;\n  font-weight: 700; }\n\n.success-for-business {\n  font-size: 18px;\n  line-height: 25px;\n  background-image: url('busines.276b8fe0c7a061c4d3d8.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: #fefefe;\n  position: relative;\n  padding: 40px 0; }\n\n.success-for-business h2 {\n    font-size: 35px !important;\n    text-align: center; }\n\n.success-for-business .btn {\n    background-color: #000;\n    color: #fff;\n    font-weight: bold;\n    cursor: pointer;\n    font-size: 12px !important;\n    border-radius: 25px; }\n\n.success-for-business:after {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  content: ''; }\n\n.success-for-business > .container {\n  position: relative;\n  z-index: 1; }\n\n.success-for-business h4 {\n  font-size: 25px;\n  line-height: 34px;\n  font-weight: 500; }\n\n.success-for-business .icon-box {\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  padding: 45px 20px 20px;\n  border-radius: 5px;\n  text-align: center;\n  min-height: 320px; }\n\n.success-for-business .icon-box:hover {\n  background: rgba(218, 83, 5, 0.5); }\n\n.success-for-business .icon-box:hover .material-icons {\n  color: #fefefe; }\n\n.success-for-business .material-icons {\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  font-size: 65px;\n  line-height: 65px;\n  color: #cd0000; }\n\n.sidebar-user {\n  padding: 10px 10px 20px;\n  color: #212121; }\n\n.sidebar-user h5 {\n  margin: 0;\n  font-weight: 500; }\n\n.sidebar-user ul li {\n  display: block;\n  margin: 0 0 20px; }\n\n.sidebar-user mat-slider {\n  width: 100%; }\n\n.sidebar-user .btn {\n  width: 100%; }\n\n.sidebar-user .btn .material-icons {\n  margin: 0 0 0 8px;\n  font-weight: 700; }\n\n.sidebar .logo {\n  width: 100%;\n  text-align: center; }\n\n.sidebar .logo img {\n  max-width: 120px; }\n\n.sidebar.custom {\n  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);\n  background: #ffffff;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n.sidebar.custom label {\n  color: #212121; }\n\n.sidebar.custom .logo {\n  padding: 10px; }\n\n.mat-slider-horizontal .mat-slider-ticks-container {\n  background: #ccc;\n  height: 3px; }\n\n.mat-slider-horizontal .mat-slider-thumb {\n  background: #333 !important; }\n\n.main-content {\n  padding: 40px 0 0;\n  overflow: hidden; }\n\n.main-content1 {\n  padding: 0px;\n  overflow: hidden; }\n\n.main-content.custom {\n  margin-top: 0 !important;\n  padding: 0; }\n\n.products-area {\n  font-size: 15px;\n  line-height: 19px; }\n\n.products-area .card-title small {\n  color: inherit; }\n\n.products-area .plan-detail {\n  font-size: 18px;\n  line-height: 22px;\n  text-align: justify; }\n\n.products-area .card {\n  padding: 0 15px 20px; }\n\n.products-area .card .card-content {\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.products-area .card .rate {\n  border-right: 1px solid #333;\n  border-left: 1px solid #333;\n  min-height: 65px; }\n\n.products-area .card .rate small {\n  font-size: 18px;\n  line-height: 22px;\n  display: block; }\n\n.products-area .card .rate h5 {\n  margin: 0; }\n\n.products-area .card .term .material-icons {\n  margin: 0 0 0 5px; }\n\n.products-area h4 {\n  margin: 0 0 10px;\n  font-weight: 500; }\n\n.products-area h5 {\n  font-weight: 500; }\n\n.products-area p {\n  margin: 0 0 15px; }\n\n.products-area strong {\n  font-size: 24px;\n  line-height: 28px;\n  display: block; }\n\n.products-area .view-more i {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.products-area .view-more:focus {\n  color: #e53935; }\n\n.products-area .view-more.collapsed i {\n  -webkit-transform: rotate(0);\n          transform: rotate(0); }\n\n.products-area .panel-details {\n  border-top: 1px solid #ccc; }\n\n.products-area .panel-details h4 {\n  padding: 20px 0 0; }\n\n.products-area .panel-details h5 {\n  padding: 10px 0 0;\n  margin: 0 0 10px; }\n\n.products-area .panel-details .list-group {\n  margin: 0; }\n\n.products-area .panel-details .list-normal {\n  list-style: inside; }\n\n.products-area .panel-details .list-normal li a {\n  color: #212121; }\n\n.products-area .panel-details .list-normal li a i {\n  color: #CA1A02; }\n\n.list-normal li {\n  display: block;\n  margin: 0 0 7px; }\n\n.list-normal li a {\n  color: #ef6c00;\n  text-decoration: none; }\n\n.list-normal li a:hover {\n  text-decoration: underline; }\n\n.table-normal {\n  font-size: 18px;\n  line-height: 22px;\n  width: 100%;\n  table-layout: fixed; }\n\n.table-normal thead {\n  background: #ef5350;\n  font-weight: 500;\n  color: #fefefe; }\n\n.table-normal td {\n  border: 1px solid #ccc !important;\n  padding: 10px; }\n\n.view-more {\n  font-size: 17px;\n  line-height: 21px;\n  display: inline-block;\n  vertical-align: middle;\n  font-weight: 500;\n  cursor: pointer; }\n\n.view-more:hover {\n  color: #e53935; }\n\n.view-more i {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 21px; }\n\n.page-title {\n  margin: 0 0 25px; }\n\n.page-title span {\n  font-size: 24px;\n  line-height: 28px;\n  font-weight: 500;\n  position: relative; }\n\n.page-title span:before {\n  content: '';\n  left: 0;\n  right: auto;\n  bottom: -10px;\n  min-width: 70px;\n  height: 5px;\n  position: absolute;\n  background: linear-gradient(-45deg, #ef5350 0, #880e4f 100%); }\n\n.about-1 {\n  background-image: url('img-03.84227c60858583723dbe.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: 100% auto;\n  padding: 130px 20px;\n  min-height: 467px;\n  position: relative;\n  color: #ffffff;\n  z-index: 1;\n  margin-top: 0px; }\n\n.about-1 .large {\n  font-size: 24px;\n  line-height: 45px;\n  font-weight: bold !important;\n  padding: 0 40px 0 0; }\n\n.mySlides {\n  display: none; }\n\n.about-1 .large-broker {\n  font-size: 55px !important;\n  line-height: 45px;\n  font-weight: bold !important;\n  padding: 0 40px 0 0; }\n\n.about-1 .large strong {\n  font-size: 40px;\n  line-height: 48px;\n  display: block;\n  font-weight: 500;\n  margin: 0 0 20px; }\n\n.about-1:before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  content: '';\n  z-index: -1; }\n\n.about-1-sm {\n  font-size: 18px;\n  line-height: 33px;\n  padding: 40px 0;\n  position: relative;\n  background: #ffffff;\n  font-weight: 400;\n  z-index: 2; }\n\n.about-1-sm:after {\n  bottom: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(255, 255, 255, 0);\n  border-bottom-color: #ffffff;\n  border-width: 30px;\n  margin-left: -30px; }\n\n.about-2 .timeline-body {\n  text-align: justify; }\n\n.about-3 {\n  background-image: url(https://storage.wattcrm.com/wattcrm-images/pics/img/WhyOurEnergy1-mcgw5euj12ixifcb66l08jfu375tf9yflcqnm90qhc.jpg);\n  padding: 50px 20px;\n  min-height: 400px;\n  position: relative;\n  z-index: 1;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: right;\n  color: #ffffff;\n  font-weight: 400; }\n\n.about-3 p {\n  margin: 0 0 20px; }\n\n.about-3 .title {\n  color: #ffffff; }\n\n.about-3:before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  content: '';\n  z-index: -1; }\n\n.about-4 {\n  font-size: 16px;\n  line-height: 22px;\n  background: #ffffff;\n  padding: 50px 0; }\n\n.about-4 h3 {\n  font-weight: 300;\n  text-align: center; }\n\n.about-4 span {\n  text-align: center;\n  font-weight: bold;\n  font-size: 17px; }\n\n.about-4 p {\n  text-align: justify;\n  font-size: 16px;\n  font-weight: 300; }\n\n.about-4 a {\n  color: #cd0000;\n  font-weight: bold;\n  font-size: 15px; }\n\n.about-5 {\n  padding: 50px 0 0; }\n\n.about-5 .detail {\n  line-height: 30px;\n  padding: 40px 9999px 30px;\n  margin: 0 -9999px;\n  background: #ffffff;\n  font-weight: 400; }\n\n.about-5 .detail a {\n    color: #cd0000;\n    font-weight: bold;\n    font-size: 15px; }\n\n.about-5 .detail .clients {\n    font-size: 14px;\n    font-weight: bold; }\n\n.about-5 .detail .large {\n  font-size: 22px;\n  font-weight: 500; }\n\n.about-5 .caption {\n  font-size: 17px;\n  margin: 0 0 40px;\n  display: block;\n  text-align: center;\n  font-weight: 400;\n  color: #66615b;\n  font-weight: bold; }\n\n@-webkit-keyframes beat {\n  0% {\n    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24);\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24); }\n  50% {\n    -webkit-box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.44);\n    box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.44); }\n  100% {\n    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24);\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24); } }\n\n@keyframes beat {\n  0% {\n    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24);\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24); }\n  50% {\n    -webkit-box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.44);\n    box-shadow: 0 1px 14px 0 rgba(0, 0, 0, 0.44); }\n  100% {\n    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24);\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24); } }\n\n.count-on {\n  margin-top: 20px; }\n\n.count-on h3 {\n    margin-bottom: 30px; }\n\n.count-on a {\n    color: #959fac; }\n\n.count-on .title {\n  margin: 0 0 30px !important; }\n\n.count-on .holder {\n  font-size: 22px;\n  line-height: 26px;\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  position: relative;\n  background: #fafafa;\n  min-height: 260px;\n  padding: 20px;\n  text-align: center;\n  margin: 0 0 30px;\n  cursor: pointer;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24); }\n\n.count-on .holder i {\n  font-size: 30px;\n  line-height: 75px;\n  width: 75px;\n  height: 75px;\n  border-radius: 100%;\n  background: #ff4270;\n  color: #fefefe;\n  margin: 0 auto 15px;\n  text-align: center;\n  display: block; }\n\n.count-on .holder h4 {\n  margin: 0 0 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  color: #ff4270; }\n\n.count-on .holder:hover .overlay-holder {\n  visibility: visible;\n  opacity: 1; }\n\n.count-on .holder .overlay-holder {\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  padding: 0 15px;\n  position: absolute;\n  left: 100%;\n  right: auto;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  visibility: hidden;\n  opacity: 0;\n  z-index: 9; }\n\n.count-on .holder .overlay-holder.right {\n  right: 100%;\n  left: auto; }\n\n.count-on .holder .overlay-holder.right .overlay:after {\n  border-left-color: #e57373;\n  border-right-color: transparent;\n  right: auto;\n  left: 100%; }\n\n.count-on .holder .overlay {\n  font-size: 16px;\n  line-height: 20px;\n  -webkit-animation: beat 1.5s infinite;\n  animation: beat 1.5s infinite;\n  width: 300px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  text-align: left;\n  background: #e57373;\n  color: #fefefe;\n  position: relative;\n  text-align: justify; }\n\n.count-on .holder .overlay > p:last-child {\n  margin: 0; }\n\n.count-on .holder .overlay:after {\n  right: 100%;\n  top: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(255, 0, 0, 0);\n  border-right-color: #e57373;\n  border-width: 15px;\n  margin-top: 0px; }\n\n.count-on .holder .overlay strong {\n  font-weight: 500; }\n\n.our-clients {\n  padding: 0 0 40px; }\n\n.our-clients .item {\n  padding: 10px;\n  text-align: center; }\n\n.our-clients .item .taco img {\n  max-width: 90px; }\n\n.our-clients .item a:hover {\n  opacity: 0.7; }\n\n.our-clients .item img {\n  max-width: 110px;\n  width: 90%;\n  height: auto; }\n\n.member-special {\n  padding: 20px 0;\n  min-height: 100px;\n  text-align: center;\n  font-weight: 400;\n  background-color: #fff; }\n\n.member-special .title {\n  margin: 0 0 10px !important; }\n\n.member-special p {\n  line-height: 25px; }\n\n.reg-text {\n  display: block;\n  text-align: left; }\n\n.dialogRes {\n  width: 400px; }\n\n.cdk-overlay-container .mat-dialog-container {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.commercial-main hr {\n  border-color: #ccc; }\n\n.commercial-main .cm-detail {\n  font-size: 17px;\n  line-height: 25px; }\n\n.commercial-main .cm-detail strong {\n  display: block; }\n\n.commercial-main .mat-select {\n  background: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.commercial-main .mat-select .mat-select-value {\n  line-height: 0; }\n\n.or {\n  position: relative;\n  min-height: 20px;\n  text-align: center;\n  z-index: 5; }\n\n.or span {\n  font-size: 22px;\n  line-height: 30px;\n  font-weight: 600;\n  position: relative;\n  text-align: center;\n  background: #ffffff;\n  padding: 2px 10px; }\n\n.or:after {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  right: 15px;\n  bottom: auto;\n  content: '';\n  height: 2px;\n  margin: -1px 0 0;\n  background: #ccc;\n  z-index: -1; }\n\ninput.mat-input-element,\ninput.mat-input-element::-webkit-input-placeholder {\n  font-size: 18px !important;\n  font-weight: 700 !important; }\n\n.btn {\n  font-size: 16px !important;\n  font-weight: 400 !important; }\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-weight: 700 !important; }\n\nh3 {\n  font-size: 23px;\n  font-weight: 300 !important; }\n\n.mat-step-label {\n  font-size: 16px !important; }\n\n.alert span {\n  font-weight: 500; }\n\n.mat-input-infix {\n  padding: 0.6375em 0 0.2375em; }\n\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-placeholder,\n.mat-form-field-empty.mat-form-field-placeholder {\n  font-size: 20px; }\n\n.sidebarToggle {\n  display: none;\n  width: 130px;\n  margin: 0 0 0 30px; }\n\n.new-product-holder {\n  padding: 30px 0; }\n\n.new-product-holder > .container {\n  background: #fff;\n  padding: 20px 15px 0; }\n\n.new-product-holder .mat-form-field {\n  width: 100% !important; }\n\n/*# sourceMappingURL=main.css.map */\n\n.timeline {\n  list-style: none;\n  padding: 20px 0 20px;\n  position: relative;\n  margin-top: 30px; }\n\n.timeline:before {\n  top: 50px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 3px;\n  background-color: #E5E5E5;\n  left: 50%;\n  margin-left: -1px; }\n\n.timeline h6 {\n  color: #333333;\n  font-weight: 400;\n  margin: 10px 0px 0px; }\n\n.timeline.timeline-simple {\n  margin-top: 30px;\n  padding: 0 0 20px; }\n\n.timeline.timeline-simple:before {\n  left: 5%;\n  background-color: #E5E5E5; }\n\n.timeline.timeline-simple > li > .timeline-panel {\n  width: 86%; }\n\n.timeline.timeline-simple > li > .timeline-badge {\n  left: 5%; }\n\n.timeline > li {\n  margin-bottom: 20px;\n  position: relative; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  width: 45%;\n  float: left;\n  padding: 20px;\n  margin-bottom: 20px;\n  position: relative;\n  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n          box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff; }\n\n.timeline > li > .timeline-panel:before {\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  display: inline-block;\n  border-top: 15px solid transparent;\n  border-left: 15px solid #e4e4e4;\n  border-right: 0 solid #e4e4e4;\n  border-bottom: 15px solid transparent;\n  content: \" \"; }\n\n.timeline > li > .timeline-panel:after {\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  display: inline-block;\n  border-top: 14px solid transparent;\n  border-left: 14px solid #FFFFFF;\n  border-right: 0 solid #FFFFFF;\n  border-bottom: 14px solid transparent;\n  content: \" \"; }\n\n.timeline > li > .timeline-badge {\n  color: #FFFFFF;\n  width: 50px;\n  height: 50px;\n  line-height: 51px;\n  font-size: 1.4em;\n  text-align: center;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  margin-left: -24px;\n  z-index: 100;\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  border-bottom-left-radius: 50%; }\n\n.timeline > li > .timeline-badge.primary {\n  z-index: 5;\n  background-color: #9c27b0;\n  -webkit-box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4);\n          box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4); }\n\n.timeline > li > .timeline-badge.success {\n  z-index: 5;\n  background-color: #4caf50;\n  -webkit-box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4);\n          box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4); }\n\n.timeline > li > .timeline-badge.warning {\n  z-index: 5;\n  background-color: #ff9800;\n  -webkit-box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\n          box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4); }\n\n.timeline > li > .timeline-badge.info {\n  z-index: 5;\n  background-color: #00bcd4;\n  -webkit-box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4);\n          box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4); }\n\n.timeline > li > .timeline-badge.danger {\n  z-index: 5;\n  background-color: #f44336;\n  -webkit-box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4);\n          box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4); }\n\n.timeline > li > .timeline-badge [class^=\"ti-\"],\n.timeline > li > .timeline-badge [class*=\" ti-\"],\n.timeline > li > .timeline-badge [class=\"material-icons\"] {\n  line-height: inherit; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right;\n  background-color: #FFFFFF; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  border-left-width: 0;\n  border-right-width: 15px;\n  left: -15px;\n  right: auto; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  border-left-width: 0;\n  border-right-width: 14px;\n  left: -14px;\n  right: auto; }\n\n.timeline-heading {\n  margin-bottom: 15px; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body hr {\n  margin-top: 10px;\n  margin-bottom: 5px; }\n\n.timeline-body .btn {\n  margin-bottom: 0; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n.tosPrivacyCont {\n  background-color: #fff;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n  padding-top: 30px; }\n\n.tosPrivacyCont .content {\n  width: 60%;\n  height: 800px;\n  text-align: justify;\n  overflow-y: auto;\n  padding: 35px 50px;\n  -webkit-box-shadow: 0px 1px 10px 2px #e0dada;\n          box-shadow: 0px 1px 10px 2px #e0dada; }\n\n.tosPrivacyCont .content h5 {\n  font-weight: bold !important; }\n\n.tosPrivacyCont .content h5 span {\n  font-weight: bold !important;\n  color: #272727; }\n\n.tosPrivacyCont h3 {\n  color: #272727;\n  font-weight: bold !important;\n  font-size: 20px !important; }\n\n.tosPrivacyCont p {\n  font-size: 16px;\n  line-height: 28px; }\n\n.tosPrivacyCont .content li {\n  font-size: 16px;\n  font-weight: bold; }\n\n.tosPrivacyCont .content h1 {\n  color: #000e88;\n  font-weight: bold !important;\n  text-align: center; }\n\n.energy-heading {\n  color: #000000;\n  font-weight: 700; }\n\n.energy-heading span {\n  font-weight: 100; }\n\n.sub-heading {\n  font-size: 20px;\n  color: #000000; }\n\n.width-full {\n  width: 100% !important; }\n\n.energy-tips-detail {\n  font-size: 15px !important;\n  line-height: 24px;\n  margin-top: 25px; }\n\n.title-plan {\n  margin-bottom: 10px; }\n\n.font-style {\n  font-size: 12px;\n  margin-right: 15px; }\n\n.padding-top-bottom {\n  padding: 27px 0; }\n\n.full-radius {\n  width: 300px;\n  height: 300px; }\n\n.font-size-16 {\n  font-size: 16px; }\n\n.width-50 {\n  width: 49% !important; }\n\n.background-red {\n  background: #cd0000; }\n\n.tools-heading {\n  font-size: 20px;\n  color: #cd0000;\n  -webkit-transition: 1s;\n  transition: 1s;\n  font-weight: bold; }\n\n.tools-heading:hover {\n  color: #cd0000;\n  text-decoration: none; }\n\n.residential-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-top: 50px; }\n\n.residential-main .cart {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n\n.residential-main .cart i {\n      font-size: 35px;\n      cursor: pointer; }\n\n.residential-main .multiplePremise {\n    text-align: center;\n    width: 90%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 20px 20px;\n    border: 1px solid #cdcdcd;\n    border-radius: 4px;\n    margin: 10px; }\n\n.residential-main .multiplePremise .item {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n\n.residential-main .multiplePremise .item button {\n        background-color: #000;\n        color: #fff;\n        font-weight: bold; }\n\n.residential-tabs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-bottom: 10px; }\n\n.residential-tabs a {\n    color: #cd0000;\n    text-decoration: none;\n    font-weight: 500; }\n\n.three-blog {\n  margin: 20px auto; }\n\n.three-blog .blog {\n    text-align: center;\n    padding: 20px;\n    -webkit-box-shadow: 0px 0px 9px 2px #e8e8e8;\n            box-shadow: 0px 0px 9px 2px #e8e8e8;\n    border-radius: 10px; }\n\n.three-blog .blog .img {\n      width: 100%;\n      height: 150px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      overflow: hidden; }\n\n.three-blog .blog .img img {\n        max-width: 100%;\n        max-height: 100%; }\n\n.three-blog .blog h4 {\n      margin: 10px 0 !important;\n      font-size: 18px;\n      font-weight: 400 !important;\n      line-height: 26px;\n      color: #959fac; }\n\n.three-blog .blog button {\n      padding: 5px 20px; }\n\n.bus-banner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 1270px;\n  margin: 0 auto;\n  padding-top: 50px; }\n\n.bus-banner .text-box {\n    min-width: 400px; }\n\n.bus-banner .text-box h3 {\n      text-align: left; }\n\n.bus-banner .img-box {\n    max-width: 500px; }\n\n.help_img {\n  height: 200px; }\n\n.help_img img {\n  width: 100%;\n  height: 100%; }\n\n.tab-img {\n  max-width: 600px;\n  margin: 0 auto;\n  position: relative;\n  padding: 0;\n  -webkit-box-shadow: 0 0 10px #ccc;\n          box-shadow: 0 0 10px #ccc;\n  border-radius: 8px; }\n\n.tab-img img, .tooltip_img img {\n  width: 100%; }\n\n.s_utlity_provider_img {\n  max-width: 300px;\n  margin: 0 auto; }\n\n.for-home {\n  padding: 50px 0 10px; }\n\n.for-home .card {\n    text-align: center;\n    padding: 10px 20px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    background: none; }\n\n.for-home .card .img {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      overflow: hidden; }\n\n.for-home .card .img img {\n        max-width: 100%;\n        max-height: 100%; }\n\n.for-home .card h3 {\n      margin: 17px 0px 10px !important;\n      font-weight: 300 !important; }\n\n@media (max-width: 840px) {\n  .myCard {\n    -webkit-box-shadow: 0px 0 0px 0px;\n            box-shadow: 0px 0 0px 0px; }\n  .residential-one {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border-right: 0px;\n    margin-bottom: 30px;\n    width: 100%; } }\n\n.enrolled {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n@media (max-width: 551px) {\n  .myCard {\n    -webkit-box-shadow: 0px 0 0px 0px;\n            box-shadow: 0px 0 0px 0px; }\n  .enrolled {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n\n.residential-tabs mat-card-title {\n  font-size: 26px;\n  background: transparent !important;\n  color: #273c61 !important; }\n\n.residential-tabs .pics {\n  border-radius: 50%;\n  margin-bottom: 10px; }\n\n.residential-tabs p {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: left;\n  margin-bottom: 20px;\n  color: #616161; }\n\n.residential-tabs .btn {\n  font-size: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.residential-two {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.residential-two .residential-tabs {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  border-top: 5px solid #131275; }\n\n.residential-two .residential-tabs p {\n  font-size: 14px;\n  color: #616161;\n  margin-bottom: 20px; }\n\n.residential-tabs span {\n  font-size: 15px;\n  font-weight: bold;\n  line-height: 30px;\n  color: #0e0e0f;\n  margin-bottom: 20px; }\n\n.residential-two .residential-tabs .btn1 {\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.con-cumunity {\n  background: url(\"/assets/img/backv2.jpg\");\n  font-weight: bold;\n  text-align: center;\n  padding: 100px; }\n\n.con-cumunity h1 {\n    color: #fff;\n    font-size: 50px; }\n\n.special-link {\n  color: #cd0000;\n  cursor: pointer;\n  text-decoration: none; }\n\n.community {\n  margin-top: 20px; }\n\n.community .mat-tab-group.mat-primary .mat-ink-bar,\n  .community .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n    background-color: #cd0000; }\n\n.community mat-panel-title {\n    font-weight: bold;\n    font-size: 17px;\n    color: #353333; }\n\n.community h3 {\n    text-align: center;\n    margin: 10px 10px;\n    color: #131275; }\n\n.community-form {\n  background-size: 1367px 922px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-image: url(https://storage.wattcrm.com/wattcrm-images/pics/community/ComunittyContact2-mcgutku78l1mostmhi8hclzdtaxdps26cll4fbxz4g.jpg);\n  min-height: 150px;\n  -webkit-transition: -webkit-transform linear -1ms;\n  transition: -webkit-transform linear -1ms;\n  transition: transform linear -1ms;\n  transition: transform linear -1ms, -webkit-transform linear -1ms;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  padding: 20px 0px; }\n\n.community-tab {\n  background-color: #fdfafa;\n  padding: 0px 0px 20px 0px;\n  margin: 29px 0px; }\n\n.community-tab p {\n    padding-bottom: 20px;\n    font-size: 14px;\n    font-weight: 500; }\n\n.comunity-read-more {\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 25px;\n  background: #000;\n  color: #ffffff;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  font-weight: 700; }\n\n.comunity-read-more:hover {\n  color: #fff;\n  background: #f80000;\n  text-decoration: none; }\n\n.load-more-btn {\n  text-align: center;\n  margin-top: 29px;\n  font-size: 21px; }\n\n.load-more-btn button {\n  color: #ffffff;\n  font-weight: 600;\n  background: #131275;\n  border-radius: 5px;\n  border: none;\n  padding: 5px 20px;\n  outline: none; }\n\n.commercial-banner {\n  background-image: url(https://storage.wattcrm.com/wattcrm-images/pics/commercial/Commercial02-mcgtlqn6hr177ii1h21vk68gfd03pz0unm8vnqxzbk.jpg);\n  padding: 50px 20px;\n  min-height: 400px;\n  position: relative;\n  z-index: 1;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: right;\n  font-size: 16px;\n  color: #ffffff;\n  font-weight: bold !important;\n  text-align: center; }\n\n.commercial-banner i {\n    margin-top: 40px;\n    font-size: 25px;\n    color: #272727;\n    background-color: #fff;\n    padding: 30px;\n    border-radius: 50%; }\n\n.commercial-banner i:hover {\n    color: #fff;\n    background-color: #272727; }\n\n.commercial-banner .row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.commercial-banner .row .inner-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin: 6px;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n\n.commercialforms {\n  margin-bottom: 20px;\n  width: 70%;\n  margin: 0 auto 20px;\n  text-align: center; }\n\n.commercialbtn2 {\n  width: 95%;\n  background-color: #cd0000;\n  color: #fff;\n  padding: 7px;\n  font-size: 19px;\n  font-weight: bold;\n  margin-top: 10px; }\n\n.commercialUpdate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 20px; }\n\n.commercialUpdate .commercialbutton-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.commercialdate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 45%; }\n\n[disabled].mat-button {\n  background-color: #c3c1c1b8;\n  color: #050505;\n  cursor: not-allowed; }\n\n.commercialalign {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-top: 20px; }\n\n.commercialforms mat-form-field {\n  font-size: 19px !important;\n  font-weight: bold; }\n\n.commercialforms mat-card-header mat-card-title {\n  font-size: 27px;\n  font-weight: bold;\n  border-bottom: 4px solid #ff4270; }\n\n.commercialUpdate .material-icons {\n  color: #161497;\n  font-size: 38px; }\n\n.brokersforms {\n  margin-bottom: 20px; }\n\n.form-control {\n  background-image: none;\n  border: 1px solid #fff;\n  padding: 0 10px; }\n\n.brokersUpdate mat-card-subtitle {\n  font-weight: bold;\n  font-size: 18px; }\n\n.brokersUpdate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 20px; }\n\n.brokersUpdate .brokersbutton-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.brokersalign {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: 20px; }\n\n.brokersalign .child {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    margin: 5px; }\n\n.brokersalign p {\n    font-size: 16px;\n    font-weight: bold;\n    color: #616161;\n    margin-top: 10px; }\n\n.brokersforms mat-form-field {\n  font-size: 18px;\n  font-weight: bold; }\n\n.brokersforms mat-card-header mat-card-title {\n  font-size: 26px;\n  border-bottom: 4px solid #ff4270; }\n\n.brokersUpdate .material-icons {\n  color: #161497;\n  font-size: 38px; }\n\n.brokersdate {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.Our-lev-heading h1 {\n  text-align: center;\n  font-weight: bold !important;\n  margin-bottom: 25px; }\n\n.Our-lev-heading hr {\n  border: 2px solid #cd0000; }\n\n.our-leverage {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.our-leverage h3 {\n  font-weight: 300 !important;\n  font-size: 27px !important;\n  text-align: center; }\n\n.our-leverage i {\n  font-size: 43px;\n  color: #131275; }\n\n.our-leverage .icon {\n  text-align: center; }\n\n.our-leverage .material-icons {\n  border-radius: 50%;\n  padding: 5%;\n  border: 5px solid #cd0000; }\n\n.our-leverage p {\n  font-size: 20px;\n  font-weight: bold !important;\n  line-height: 36px;\n  text-align: center;\n  color: #7c7c7c; }\n\n.float-right {\n  float: right; }\n\n.bg-image {\n  padding: 21px 0; }\n\n.energy-heading {\n  color: #000;\n  font-weight: 700;\n  font-size: 36px !important; }\n\n.energy-heading span {\n  font-weight: 100; }\n\n.sub-heading {\n  font-size: 20px;\n  color: #000000; }\n\n.energy-tips-detail {\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 23px;\n  margin-top: 25px; }\n\n.linkable:hover {\n  text-decoration: none;\n  color: #207cce; }\n\n.features_sec39 {\n  float: right;\n  width: 94%;\n  text-align: left;\n  padding-bottom: 30px;\n  position: relative; }\n\n.features_sec39 .icon-list-line {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 39px;\n  width: 1px;\n  border-right: 1px solid #000;\n  z-index: -1; }\n\n.features_sec39 .icon-list-line > div {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #000;\n  left: -4px;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%; }\n\n.features_sec39 .icon-list-line > div.end {\n  bottom: 0; }\n\n.features_sec39 ul li {\n  list-style: none; }\n\n.features_sec39 ul {\n  float: left;\n  padding: 0px;\n  margin: 65px 0px 0px 0px;\n  position: relative; }\n\n.features_sec39 li {\n  padding: 0px;\n  margin: 0px;\n  text-align: center; }\n\n.features_sec39 li.icon {\n  width: 80px;\n  height: 80px; }\n\n.features_sec39 li.icon i {\n  color: #fff;\n  font-size: 35px;\n  width: 80px;\n  height: 80px;\n  padding: 0px;\n  margin: -30px;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 80px;\n  background-color: #008000;\n  border-radius: 100%; }\n\n.plan-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 20px 60px 20px 60px;\n  margin-bottom: 10px; }\n\n.plan-main mat-form-field {\n    min-width: 45%;\n    font-size: 18px;\n    font-weight: bold; }\n\n.plan-main button {\n    width: 100%; }\n\n.plan-main mat-icon {\n    font-size: 27px; }\n\n.plan-main mat-hint {\n    font-weight: bold; }\n\n.enrol {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: 10px;\n  margin-left: 10px;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-bottom: 20px; }\n\n.enrol button {\n    width: 100%;\n    margin-top: 10px; }\n\n.enrol .enroll-or {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 20px; }\n\n.enrol .enroll-or label {\n      font-weight: bold;\n      font-size: 20px;\n      color: #fff;\n      padding: 15px;\n      background-color: #ff4270;\n      border-radius: 50%; }\n\n.enrol .enroll-main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n\n.enrol .enroll-main mat-form-field {\n      font-size: 16px;\n      font-weight: bold; }\n\n.enrol .enroll-main mat-icon {\n      font-size: 27px;\n      color: #4d4747; }\n\n.enrol .enroll-main mat-hint {\n      font-weight: bold; }\n\n.spacing {\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-family: 'Open Sans'; }\n\n.spacing p {\n    font-size: 14px;\n    margin: 0px; }\n\n.help-sidebar li {\n  color: #0a97d2; }\n\n.help-sidebar li a {\n    color: #959fac;\n    font-weight: 400; }\n\n.help-sidebar li.active a, .help-sidebar a:hover, .help-sidebar a:focus {\n  color: #fff !important;\n  background: -webkit-gradient(linear, left top, right top, from(#a91f73), to(#ff4270)) !important;\n  background: linear-gradient(90deg, #a91f73 0%, #ff4270 100%) !important;\n  border-radius: 5px; }\n\n.search_plan_main {\n  background-color: #edf4ff;\n  padding: 0;\n  padding-top: 50px; }\n\n@media (max-width: 1380px) {\n  .plan-main {\n    zoom: 90%; } }\n\n@media (max-width: 565px) {\n  .plan-main mat-form-field {\n    min-width: 100%; }\n  .myCard {\n    -webkit-box-shadow: 0px 0 0px 0px;\n            box-shadow: 0px 0 0px 0px; } }\n\n@media (max-width: 570px) {\n  .myCard {\n    -webkit-box-shadow: 0px 0 0px 0px;\n            box-shadow: 0px 0 0px 0px; }\n  .enrol {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .enrol .enroll-or {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 10px;\n      margin: auto; }\n      .enrol .enroll-or label {\n        font-weight: bold;\n        font-size: 20px;\n        color: #fff;\n        text-align: center;\n        padding: 15px;\n        background-color: #ff4270;\n        border-radius: 50%;\n        max-width: 70px; } }\n\n@media (max-width: 790px) {\n  .myCard {\n    -webkit-box-shadow: 0px 0 0px 0px;\n            box-shadow: 0px 0 0px 0px; }\n  .our-leverage {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .bar {\n    border-left: 0px solid #ccc;\n    height: 0px; } }\n\n@media (max-width: 990px) {\n  .myCard {\n    -webkit-box-shadow: 0px 0 0px 0px;\n            box-shadow: 0px 0 0px 0px; }\n  .card {\n    margin-top: -20px; } }\n\n@media (max-width: 790px) {\n  .myCard {\n    -webkit-box-shadow: 0px 0 0px 0px;\n            box-shadow: 0px 0 0px 0px; }\n  .commercialalign {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .commercialbutton-row {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .commercialbtn2 {\n    width: 100%; } }\n\n@media (max-width: 1198px) {\n  .logo-width a {\n    margin-top: -118px; } }\n\n@media (max-width: 1024px) {\n  .header .Toggle {\n    display: none !important; } }\n\n@media (max-width: 962px) {\n  .logo-width a {\n    margin-top: -189px; } }\n\n@media (max-width: 768px) {\n  .result-box {\n    width: 100% !important; }\n  .logo-width a {\n    margin-top: -118px; }\n  .Toggle {\n    margin-right: 10px;\n    margin-bottom: 10px; }\n  .right-bar ul {\n    margin: 0 0 8px 0; }\n  .margin-right {\n    margin-right: 0px !important; }\n  .main-menu ul li a {\n    padding: 10px 5px; } }\n\n@media (max-width: 425px) {\n  .plan-main {\n    padding: 10px; }\n  .filter-bar button {\n    margin: 5px 0; }\n  .mainheader {\n    display: none !important; }\n  .logo-width a {\n    margin-top: 0 !important; } }\n\n@media (max-width: 770px) {\n  .search-bg__title {\n    font-size: 35px; } }\n\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px; } }\n\n@media (max-width: 991px) {\n  .card .card-header.card-header-text {\n    display: block; } }\n\n@media (max-width: 991px) {\n  .fourcolumns > li {\n    width: 50% !important; } }\n\n@media (max-width: 991px) {\n  .container {\n    max-width: 100%;\n    width: auto; } }\n\n@media (max-width: 991px) {\n  .choose-criteria ul li {\n    padding: 0 10px;\n    text-align: center; } }\n\n@media (max-width: 490px) {\n  .choose-criteria ul li {\n    width: 100%; } }\n\n@media (max-width: 640px) {\n  .choose-criteria ul li h4 {\n    font-size: 22px; } }\n\n@media (max-width: 640px) {\n  .choose-criteria ul li i {\n    margin: 0;\n    font-size: 40px; } }\n\n@media (max-width: 991px) {\n  .choose-criteria ul li p {\n    font-size: 16px;\n    font-weight: 500; } }\n\n@media (max-width: 640px) {\n  .choose-criteria ul li p {\n    display: none; } }\n\n@media (max-width: 991px) {\n  .choose-criteria ul li i {\n    line-height: 50px;\n    position: static; } }\n\n@media (max-width: 640px) {\n  .fourcolumns > li,\n  .fourcolumns > div {\n    width: 100% !important; } }\n\n@media only screen and (max-width: 770px) {\n  .tosPrivacyCont {\n    background-color: #fff;\n    padding: 3px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-item-align: center;\n        align-self: center;\n    padding-top: 30px; }\n  .tosPrivacyCont .content {\n    width: 90%;\n    text-align: justify;\n    padding: 10px 20px;\n    -webkit-box-shadow: 0px 1px 10px 2px #e0dada;\n            box-shadow: 0px 1px 10px 2px #e0dada; }\n  .tosPrivacyCont .content h2 {\n    font-size: 32px; }\n  img {\n    vertical-align: top; } }\n\n.rateSheet {\n  padding: 5px; }\n\n.rateSheet div {\n    display: inherit; }\n\n.rateSheet span {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 2em;\n  color: #959fac;\n  display: block; }\n\n.pdf {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 10px; }\n\n.pdf a {\n    font-size: 16px;\n    margin: 3px 10px;\n    font-weight: bold; }\n\n.selectBtn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 15px; }\n\n.selectBtn button {\n    background-color: #000;\n    color: #fff;\n    padding: 5px 25px;\n    font-size: 22px;\n    border-radius: 25px; }\n\n.search-plan {\n  padding: 50px 24px;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  cursor: pointer; }\n\n.search-plan span {\n    font-size: 16px; }\n\n.search-plan h3 span {\n    font-size: 16px; }\n\n.result-box:nth-child(2) {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  border-top: 10px solid #ff4270;\n  -webkit-box-shadow: 9.8px 6.9px 40px 0 rgba(0, 0, 0, 0.11);\n          box-shadow: 9.8px 6.9px 40px 0 rgba(0, 0, 0, 0.11); }\n\n.result-box:nth-child(2) .search-plan:hover {\n  -webkit-transform: none;\n          transform: none;\n  border-top: none; }\n\n.enroll-plan {\n  border-radius: 10px;\n  padding: 16px 24px;\n  margin-left: 5px;\n  -webkit-box-shadow: 0px 5px 15px 0 rgba(0, 0, 0, 0.7);\n          box-shadow: 0px 5px 15px 0 rgba(0, 0, 0, 0.7); }\n\n.enroll-plan .pro {\n    text-align: center;\n    border-bottom: 5px solid #ff4270;\n    font-weight: bold; }\n\n.enroll-plan p {\n    font-size: 16px;\n    font-weight: bold; }\n\n.enroll-plan span {\n    font-size: 14px; }\n\n.enroll-plan h2 {\n    font-size: 20px; }\n\n.enroll-plan mat-card {\n    padding: 5px;\n    background-color: #e8e8e8; }\n\n.enroll-plan .lable {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    font-style: italic;\n    color: #6c6a6a; }\n\n.wrapper {\n  position: relative;\n  top: 0;\n  height: auto !important;\n  min-height: 100vh !important;\n  background-color: #eee;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\nh3 {\n  margin: 0 0 20px !important;\n  font-weight: 300 !important; }\n\n.search-bg__title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 45px;\n  font-weight: 600;\n  margin-bottom: 19px;\n  background-color: rgba(0, 0, 0, 0.5);\n  width: auto;\n  text-align: center;\n  color: white;\n  padding: 20px 0px 20px 0px;\n  width: 100%;\n  position: absolute;\n  top: 80px;\n  z-index: 9;\n  text-shadow: black 3px 3px 4px; }\n\n.search-bg__title span {\n  font-weight: 400; }\n\n.search-bg__text {\n  display: inline-block;\n  vertical-align: middle;\n  background-color: #f9f9f9;\n  border-radius: 22px 0 0 22px;\n  border: none;\n  width: 100%;\n  max-width: 630px;\n  height: 50px;\n  padding: 10px 20px 10px 30px;\n  font-size: 16px;\n  color: #000000;\n  font-weight: bold; }\n\n.search-bg__text::-webkit-input-placeholder {\n  font-size: 16px;\n  font-weight: 300;\n  color: #727e85;\n  opacity: 1; }\n\n.search-bg__text::-moz-placeholder {\n  font-size: 16px;\n  font-weight: 300;\n  color: #727e85;\n  opacity: 1; }\n\n.search-bg__text:-ms-input-placeholder {\n  font-size: 16px;\n  font-weight: 300;\n  color: #727e85;\n  opacity: 1; }\n\n.search-bg__text:-ms-input-placeholder {\n  font-size: 16px;\n  font-weight: 300;\n  color: #727e85;\n  opacity: 1; }\n\n#main-bg-slider .item {\n  overflow: hidden;\n  width: 100%; }\n\n#main-bg-slider .item img {\n  height: 522px;\n  width: 100%; }\n\n.carousel-indicators li {\n  width: 9px !important;\n  height: 1px !important;\n  margin: 1px !important;\n  border-radius: 10px !important;\n  padding: 5px; }\n\n.why-our {\n  background-color: #fff; }\n\n.why-our .mainPage {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    font-weight: bold;\n    text-align: center; }\n\n.why-our .mainPage h4 {\n      color: #333333;\n      font-size: 24px;\n      font-weight: 540 !important;\n      font-family: 'Open Sans'; }\n\n.why-our .mainPage > h2 {\n    padding: 5px 0; }\n\n.why-our .mainPage h2 {\n    font-weight: 400 !important;\n    text-align: center;\n    font-size: 48px;\n    color: #424242; }\n\n.why-our .mainPage > p {\n    font-size: 17px;\n    font-weight: 400 !important; }\n\n.why-our .content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background-color: #fff; }\n\n.why-our .content .leftSideContent {\n    width: 50%;\n    font-weight: bold;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.why-our .content .rightSideContent-image {\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.why-our .leftSideContent h2 {\n    color: #f80000;\n    text-align: center;\n    font-size: 50px; }\n\n.why-our .leftSideContent p {\n    font-size: 21px;\n    text-align: center;\n    color: #333;\n    font-weight: 400 !important; }\n\n.why-our .content .rightSideContent-image img {\n    max-width: 85%;\n    max-height: 500px; }\n\n.why-our span {\n    font-size: 27px;\n    line-height: 1.20;\n    font-weight: 600;\n    color: #000;\n    display: block;\n    letter-spacing: -.015em;\n    text-align: left;\n    text-align: center;\n    margin-bottom: 10px; }\n\n.why-our .background {\n    background: #fff;\n    padding-top: 50px;\n    padding-bottom: 50px; }\n\n.why-our .back-padding {\n    padding-top: 20px;\n    padding-bottom: 20px; }\n\n@media only screen and (max-width: 870px) {\n    .why-our .content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 0 15px; }\n    .why-our .content .leftSideContent {\n      width: 100%; }\n    .why-our .content .rightSideContent-image {\n      width: 80%;\n      margin: 0 10%; }\n    .why-our .mainPage > p {\n      padding: 20px 20px;\n      font-size: 18px; }\n    .why-our .back-padding {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n\n@media only screen and (max-width: 770px) {\n    .why-our .content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 0 40px; }\n    .why-our .content .leftSideContent {\n      width: 100%; }\n    .why-our .content .rightSideContent-image {\n      width: 80%;\n      margin: 0 10%; }\n    .why-our .mainPage > p {\n      padding: 20px 20px;\n      font-size: 18px; }\n    .why-our .back-padding {\n      padding-top: 60px;\n      padding-bottom: 60px; } }\n\n.quality {\n  padding: 20px 10px; }\n\n.quality h2 {\n    font-weight: bold;\n    text-align: center; }\n\n.quality p {\n    font-size: 15px !important;\n    font-weight: bold;\n    text-align: center; }\n\n.desc-banner {\n  min-height: 400px;\n  padding: 70px 0;\n  background-image: url('desc.cdc1e8e4fee8b7f45939.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: right;\n  color: #fafafa; }\n\n.desc-banner h2 {\n  margin: 0 !important;\n  font-weight: 500;\n  font-size: 28px !important; }\n\n.desc-banner p {\n  font-size: 19px;\n  line-height: 24px;\n  font-weight: 500;\n  margin: 0 0 30px; }\n\n.energy-banner {\n  min-height: 200px;\n  padding: 10px;\n  background-image: url(https://storage.wattcrm.com/wattcrm-images/pics/Energy%20Save%20Tips/PowerLines-mcgv6i4b7kqkbs1s0lct4ukjv182jydb4kigzas3kg.jpg);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: right;\n  color: #fafafa; }\n\n.energy-banner h2 {\n    margin: 0 !important;\n    font-weight: 300 !important;\n    font-size: 30px !important;\n    cursor: pointer; }\n\n.energy-banner p {\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 500;\n    margin: 0 0 30px; }\n\n.energy-banner h5 {\n    font-weight: bold;\n    color: #ffff00;\n    font-size: 16px;\n    cursor: pointer; }\n\n.energy .sub-heading {\n  color: #1e73be;\n  font-weight: 300 !important;\n  font-size: 26px;\n  margin-top: 40px; }\n\n.energy .energy-tips-detail {\n  font-weight: 500 !important;\n  font-size: 18px; }\n\n::ng-deep .tabs-bar .mat-form-field-underline {\n  height: 0px !important; }\n\n::ng-deep .tabs-bar .mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,\n::ng-deep .tabs-bar .mat-input-element:disabled {\n  color: #333; }\n\n::ng-deep .tabs-bar .mat-form-field {\n  font-size: 18px; }\n\n::ng-deep .tabs-bar .cancel-padding .mat-form-field-wrapper {\n  padding-bottom: 0px !important;\n  margin-left: 15px !important; }\n\n::ng-deep .tabs-bar i {\n  font-size: 25px;\n  width: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.special-banner {\n  min-height: 400px;\n  padding: 70px 0;\n  background-image: url(https://storage.wattcrm.com/wattcrm-images/pics/special/LUCKYday_ParalaxxOP-mcgx6svevtpjc114ucerf3rwqyvflue22exyuhkyz4.jpg);\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: right;\n  color: #fafafa; }\n\n.special-banner h2 {\n  margin: 0 !important;\n  font-weight: 300;\n  font-size: 22px !important; }\n\n.special-banner p {\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 500;\n  margin: 0 0 30px; }\n\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 0px; }\n\n.recaptcha {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-bottom: 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.recaptcha button {\n    width: 160px; }\n\n.recaptcha .error {\n    color: #f44336;\n    font-weight: bold;\n    text-align: center;\n    font-size: 16px;\n    margin-left: 8px; }\n\n.recaptchaa {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 0px; }\n\n.recaptchaa button {\n    width: 160px; }\n\n.linkable {\n  color: #ff0000;\n  font-size: 18px; }\n\n.con-contacts {\n  background-image: url('backv2.ab2a90dc62a62978b42b.jpg');\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  padding: 120px;\n  margin-top: -8px; }\n\n.con-contacts h1 {\n    font-size: 55px; }\n\n.eastablish-contact {\n  margin-top: 30px; }\n\n.contacts {\n  font-weight: bold; }\n\n.contacts p {\n    color: #616161;\n    font-size: 17px;\n    line-height: 26px;\n    font-weight: bold; }\n\n.contacts h2 {\n    line-height: 1.1;\n    color: #464649;\n    font-weight: bold;\n    font-size: 28px;\n    margin: 25px 0px !important; }\n\n.contacts h4 {\n    font-weight: 300 !important;\n    margin-top: 30px;\n    text-align: center; }\n\n.contacts .fa {\n    color: #ff4270; }\n\n.contacts ul li {\n    font-size: 16px;\n    color: #616161;\n    list-style: none; }\n\n.contacts a {\n    color: #cd0000; }\n\n.contacts mat-panel-title {\n    font-size: 17px;\n    font-weight: bold;\n    color: #777777; }\n\n.contacts .mataccordion {\n    margin-bottom: 20px; }\n\n.con-helpTools {\n  background: url('houston.32f514e44e4d10b83e68.jpg');\n  font-weight: bold;\n  text-align: center;\n  padding: 101px;\n  margin-top: 0px; }\n\n.con-helpTools h1 {\n    font-size: 55px;\n    color: #fff; }\n\n.historical-bar {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n.help h1 {\n  font-weight: bold; }\n\n.help ul li {\n  font-weight: bold;\n  font-size: 16px; }\n\n.help h2 {\n  font-weight: bold;\n  color: #000e88; }\n\n.help p {\n  font-size: 16px;\n  font-weight: bold;\n  color: #525252;\n  line-height: 23px; }\n\n.help mat-panel-title {\n  font-weight: bold;\n  font-size: 14px;\n  color: #353333; }\n\n.help ul li {\n  list-style: none; }\n\n.helpbutton a {\n  color: #fff; }\n\n.btns-list li {\n  list-style: none; }\n\n.modalBill {\n  position: relative; }\n\n.modalBill img {\n  width: 80%;\n  height: auto;\n  margin: 0 auto; }\n\n.editModal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.editModal .modal-button {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.editModal .modal-button button {\n      font-weight: bold;\n      border-radius: 25px;\n      font-size: 16px;\n      padding: 5px 35px; }\n\n.editModal .modal-button .btn1 {\n      background-color: black;\n      color: #fff; }\n\n.editModal .modal-button .btn2 {\n      background-color: #f5f4f4;\n      color: #2c2b2b; }\n\n.editModal mat-form-field {\n    font-size: 17px;\n    font-weight: bold; }\n\n#btnBill1 {\n  top: 40px;\n  left: 300px;\n  border-radius: 50px !important;\n  position: absolute;\n  line-height: 15px;\n  padding: 5px;\n  width: 30px;\n  height: 30px;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n#btnBill1:hover {\n  color: #cd0000 !important;\n  background: #ffffff !important;\n  border: 1px solid #cd0000 !important; }\n\n.modalBill button {\n  color: white;\n  background: #000;\n  border: 1px solid #000;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n\n.modalBill button:hover {\n  color: #000;\n  background: #ffffff;\n  border: 1px solid #000; }\n\n#btnBill2 {\n  top: 120px;\n  left: 115px;\n  border-radius: 50px !important;\n  position: absolute;\n  line-height: 15px;\n  padding: 5px;\n  width: 30px;\n  height: 30px;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n#btnBill3 {\n  top: 260px;\n  right: 100px;\n  border-radius: 50px !important;\n  position: absolute;\n  line-height: 15px;\n  padding: 5px;\n  width: 30px;\n  height: 30px;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n#btnBill4 {\n  bottom: 44px;\n  right: 270px;\n  border-radius: 50px !important;\n  position: absolute;\n  line-height: 15px;\n  padding: 5px;\n  width: 30px;\n  height: 30px;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n#btnBill2:hover {\n  color: #cd0000 !important;\n  background: #ffffff !important;\n  border: 1px solid #cd0000 !important; }\n\n#btnBill3:hover {\n  color: #cd0000 !important;\n  background: #ffffff !important;\n  border: 1px solid #cd0000 !important; }\n\n#btnBill4:hover {\n  color: #cd0000 !important;\n  background: #ffffff !important;\n  border: 1px solid #cd0000 !important; }\n\n.spinner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 5px 0 20px; }\n\n.showError {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 10px 0 30px; }\n\n.errormessage {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 27px; }\n\n::ng-deep .mat-horizontal-stepper-header .mat-step-icon,\n.mat-horizontal-stepper-header .mat-step-icon-not-touched {\n  margin-right: 0px;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  padding: 15px; }\n\n.mat-horizontal-stepper-header .mat-step-icon,\n.mat-horizontal-stepper-header .mat-step-icon-not-touched {\n  margin-right: 8px;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  padding: 15px; }\n\n.item1 {\n  height: 200px;\n  width: 500px; }\n\n.main_banner {\n  position: relative;\n  min-height: 100vh;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaIAAAPJCAMAAADXoK9vAAAAolBMVEUAAADv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zv8/zPcSu+AAAANXRSTlMAA/v2CgGHDxTe5QYjytTP6hmV8b/uOzLZHblA+KBnjlhvLZtFKMR5fzdPq3RKsLRiXaZrVLBjPWAAACDjSURBVHja7N3BThNAEIDhgQC1amiDQCUVxRhtEIMQMu//ahyBcugWwjCH73uI/7A7OxuvcZ4AvJ14hZ8JwINOiV7uJgAPGiX6bJ4APNIn0XuzBOCxPol2VQiwpk2ibxKAp7okevEtAXiqSaIn0wRgTY9E7/9PANb1SPQqAXhzX+IFTr1ZAXiuRaI/fEwAnumQ6P3rBKDA1PIkgK6mJqIBupqaiAboamY1B0BXf2I7FwlAkePYytlJAlDkOraxc5wAVLmKbfxLAMqcxxYWHn4DFDqKcZ8OE4A6BzHuIAEotIphl445AErdxai9rwlApdsY9SMBKPU3Bi0TgFpLxxwAXS1McwB09dmjFYCuJjFiZ5YAFNuNIasEoNo8Rvz2FxZAvcMYYQUpQK3xT1duE4B6V7HZZJ4A1PsVmx0lAMNKd5FeJgDv4c5INEBXF7HJ9wTgXZzGBpOThHv27i2nrSiGAqhp0hYKqKqKIDwCIhAhAQGhyPOfGgPIuffX/lhrFJa87Q2U2NoVAnS1jHkb75MAiizcFQJ0tYp5rwlAkYuYdXqSABRZx6zHBKDKL4E7gK7u9RUCdLWLGdeLBKDMJmasE4A6xzFtkwDU+R8zPhKAOn9j2lUCUOgjpt0kAIUeYtJtAlBp738SQFc7QzRAV1tDNEBTP05jwmUCUOpEnAOgqxuZaICuHhwWAnS1j7FtAlDsOcaeEoBi1zH07y4BqLX4qWwFoKnzGFpqLAQot46hfQJQ7T1GjlYJQLVdjOwSgHJnMfKZAFQbBzrOEoBy5xJ3AF09SdwBdLWPga8EoN6lthWArpaWhQBNrSwLAbp6i0NHfxKAei8uCwG6eo5DbwlAA8dx4Ldf/sA3e3eS01YYRGG0ZIgECSSQENOaXsgDi772vzXmrgVwB+cs4737f0WCfaNogFTvNV00AAE2NewtGoAAS+dWAEItdmt4agAC/K7huAFI8FDDdQOQ4M2eAyDVwXy3Ys8BEOGohtsGIMGzPgdAqs3skP5rABIsa9uyAUiw86u2rRuABCc1HDYACdYzodQARLg0uQMIdTUbSg8NQIKTGs4agARrlTuAVEufogFCzVV0/W0AErzU8KcBSHA3Q6QNQIT72nbZACT4WcOmAUiw0ooGSHVbw34DEGCxp6EEEOqwhscGIMHa30KAVKc1rBqAAEc/XFwBCLWqyfFvgAifNZw3AAF2dg06AEK91PTRAAR4remmAQhwXAodAJmeqvT8ATJtqqb/DcD3O6hycgUg0hd795LTVhQEAbRlfgYsO0qIMkgCQbHFzzJMev9bwyB59nj2yN2DcxZRk3u7ahEDVglAvYeIsIoF0NIsBvxLAMrNY8h9AlDuMYacJwDlVjHkfwJQbRGDNglAtXUMukkASu36OWyuADR0E8PmCUCx2xh2mQDU+nMRW5YLARraxBdOEoBaz/GFBKDWt2sRDdDUXYhogKZ+iWiAphYhogGauhfRAE1NpiIaoKmX2HK6AtDRUkQDNHV5Fls6OgAaWoeIBuhpMo0RiwSgzO6x0OoKQDu/Y8xLAlBlHjsWwAGauY1R5wlAkR+nMWqdABS5i3FvCUCRWYxbJgA1XmOPVQJQYxl7nCYAJeZnsc/PBKDCW3xyAQ7QztV17LVJAAo8xAe3KwD9nExjy8dogIa+xwGeEoCjm8ziABcJwNH9jYNcJQDHtoodpf68s3d3O02EURRAd4sVjAQBq5iWVJBAQgJcVM/7v5oBFAxX7XRm/C7WeozzszfQlockcdIB0KLbbOZXATCuRTZ0WACMa5lNHRcAY5pnY4sCYEzLJPaFAC2a5x+KVwBasszm3k0LgNHMs42bAmA0yySG0QAtWiQxjAZo0lkSw2iAFq3zxGU0QHOmh9nSZQEwiqv8JaYDoC17J9natwJgBO+zve8FwPCO97O9ZQEwvFU6mCgwBBje0SRdnBYAQ7tPJ18LgIHN083MpANgYNMfeeSmA6A9p+nqrAAY0peDdHZUAAzoZ17J6QBoyadJujs4LwAGs8wu1gXAUNZ5Q/cKQCM+n2Qnkw8FwDAus6O7AuCPhnaFT/b3CoAh3GZnVwXAs0b+Cl9dFwDP/nuQvyZwgDFcpA/3BUDfHtKLmaAOgEctnUS/uCgA+rXKC+8rAE25maUvqwKgR+fX6c1HBVkAfbrLW2Kjgd/s3dtOU1EQBuDZpS0NbLAaQREjEQ0qUYsN8/6v5uHKkFJK92Gti+97ipV/zfxDHU6a6NHUMxqgNwdt/CWNBqjPx+jXsaEOgJ7cNNGzuwSgxpjjj8aKIUBdSyv/uU8AulvFAGY3CUBXy0UM4VsC0NVtDGOdAHTzKQbSvk8Aung7jaHME4AOJm9iMIfLBKCS9qSHfiUAe3s3iwcM3gHUYbmIQV1PEoD9fI6BvUoA9jKPDfwYAlRga7+da+AABS0vYgSrBKC+IPqfi4MEoLog2qlZgP28bmIczUkC8BxHL+NxhqMBCpqcx3i+JgC9XfwWdQAUs45RXWuOBtjV6TTG9T0B2MlZGyNrVN4B7GTyI0bXWmAB2MWXKOBDAvCk9SxK+JkAPOHFNIpYHCUAFdTbbXKZAGwzuYxi5gnAFndRzrElQ4AtrqKk9iwBeMSqiaJuE4DNTg+jsKsEYJNlG3sQRwMM7+A8yhNHA2xyHzUQRwNU0sxhOhrgN3v3thNVEEQBtGYYmAsoKAqCaEQCGGUwxNT//5rGmACiUZ7orl7rI/bDOV17/4ezaMTkOAG463gSrVgsE4Bbu0/+3O6OQ93RALdWL6IlNwnAL6/Poy0vE4CfTlp4EH3P5FUC8MO0jQfR9yzeJACZp9Gg8/0EYCuatJ4mwOjONqNNVwkwuOt2TlZ+9y4BhnYxi2Zte9YBDK2po8IH5p51AANbtnVU+MDOXgIMavX0Kyv/cHCSAEPaa+3s+w8+JMCI9g+jA5cJMJ6Nt9EFjUrAeKbr6MPkOgHGMv0cvZhdJMBIpjfRD613wFjeR092VgkwjG/Rl4+aSYFhXEZvDgzOAoPoL6G1RwOjaLTC3yg4QKcJHXGaANX1mtARWwlQW78J7RQcqK7nhI5NS1lAZV0ndMTkSwJU1XlCR2x/TYCauk/oiJnFWaCmAgkdMX+WAPWUSGgZDZT0KYqY7yZALT32cvzF4nkCVHIVhchooJS+GvzNsAADmRZL6IijZQKU0NVOoYwGhtLR1vcjHPkeDRSwsY6S/DP8zt69ZKUVRFEAvX4QFUxUhKDCUjEfyT/Rmv/U0khThEeHV/Vq70Hc1j3nAOUb3UZHudFA6cbL6Cw3Gijb6SI6zI0GSnYyjE471tcBFOvdRXScTiWgVGf96Ly+/migSDeHUQEd/0CJvg2iCoe2soDizPeiEgObs0Bh7npRjb15AihIZyZWGuldJoBSdK98dJOjBFCGg05W2633JQGUYDSJCj0ngPx1u5bjbff7CSBz0+uo1I+DBJC1s+Oo1mSUADL2q4rQ91sW5wkgW/VEClcbGp0FsnVUUaRwtQsl/0CmHoL+5wSQn9lLEHH4MwHkZlxlYGWFvccEkJeTT8F/PYUdQF7ed36lcBsPCSAfdWxgNfcySwCZeKz8Hfq1W0FDIBN19fc3szhNAO3b/x28di3EArRv9DFYpX+VANp1+iGwDA5kybPdGr27BNCem36wxrMlFqA1l57tNvhqiQVoyfdgk6WWf6ANB5rtmhhOE8CunS+DJo41SAO7Nh0GzQz+JoBduvLK0VzvKQHsznwQbOGP5ztgZ56qn5Hd1mScAHZhdh947IB/7N2NThNhEAXQaUGKVrBQ0wi0CiKgIoml+d7/1RRCwk8W6JbddiDnPMbcmbmkNFBSuIhNX5WA9m1b5VhMf1IAKvjKkYHFDqCCrxxZHKo0BNrTPQosdgAprf0OLHYAKSlYaUBvvwA0b0vBShM6uwWgaefrQSO+ugYHGrbh5rsxB0JDoEnjaSA0BFJy8/2f0BBIyc33NaEhkJCb7xtCQyAdN9+3hIZAKt1Z0I4ToSHwMsMfQVt6XkgDL/HlJGhP51sBWNTnzaBVf4WGwIKO9Xy3bjQoAPV1/wTt29sqAHUNL4JlWL8sAPW8/x4sx7szA2mgllNB4RJdDAvA3CaCwue4YgFW5CyYh9d3wHy0yL5urlgALbKJTccFQItsUr8+FIAnXWqRXZmd0wLwhJ9aZFeor4sFeNzaYVCfLhagmqDwjRkZSAOVPu0FK7fjrRJQ4VxQmEL/uAA8sCEozGJmIA3cM54GafjzD9w1GAWJGEgDt7Y/Bqn0JwXg2n4vyObIQBq4stsJ8jkwkAZKdxakZCAN/GPvTnASCoIoirbfEYcIURBNxAmCGuOEvf+tuY1fVecso9P31dW6MVJ+SEN1k01jvFY2pKEyV2RHzoY0FOaK7OjNrjtQ01bzPX5njhpCScahg/jZ70A107dGDDeTDtSi+Q7k5K4DlWi+Q9k76kAdmu9o/jxIQxXDUyOazbIDFey/N+I5/uxAfu58B3W4tU8K6bnzHdd63oHUfOWI7NY+KaT24itHaAcOZkFi20Zw9kkhK6scGdgnhZymi0YCJ/ZJIaGlVY4k9uyTQjoOrCQiB4dkfh1YyUQODqkcObCSixwc8hh2jWTk4JCF3aSU5OCQgs92ScnBIYHJppGTHBzCu/DZLjE5OMT2ddBITA4OkVm2y04ODnG9NrKTg0NQw3ejADk4ROQ7dBVycIhn7jt0GXJwiOb0uVGGHBxiWTr0XYscHAIRrJRzftmBGAQrBcnBIYh7+/0l7TxIQwAP9vuLWsjBYfQ+GlXN5OAwbsOqUdeZHBzGbHhslPbP3p3ltBUEUQBtB4xtIMzBERHCOIFERAYx1P63xgdCzGBwP79CnLOI+9HqunfkHBzSWpgUvrjxIICUth19U3pnASS0MSxQuv8CSGfZSiE3Js7BIZuBWg5ura4FkMm6Wg7uLF4EkMdxr8A9h87BIY0dxUk8srsRQAqq7Xhq8ziABM5U2/GMla0AWnfRKfCcc+fg0LZ9Cc1Lhs7BoV1b6qF5WX8vgKlJaOarsxTAlCQ0c3e1HUArlgq85ehnAG+T0LyDflL43CQ0+kkhKwnN1E48SMOrJDRtOtJPCq+Q0LSrdxrAvBwU8CANOfkPjcEsyEpCYzALstJtx8cs/g/gIQlNGt2/BrOgWacSmo+b+CENTdqzsYLKDkjKkiwqOyCr770Cs+nqkIZmrPULzOzEqCE0YLBZoIKxUUOobnm1gFFDSOnHuEAlnYMAKlrYLVDPyIM01PPtT4Gahh6koZpRgbr6OwFUcVigtpXfARhZIatLtUowu30F0TTjl55/UJ1EWnr+YUbrqpN4Qq0S1+zd7U4TURQF0NOmhvJRRaoCUhICaWlJJVo97/9q6g9jxFQ6JJ25413rMe7dex/KoPbNXg3MKsHLTecBf9FigRIMrwL27PwogZf4ErB3bycJNLcMaMHxdQJNbQSiaclaiwUaWghE8xzHwaEjh+5g0aK56TtoYGrDn1aNFwnsaPgp4Bk+DaEj64C2rRPYxXVA+x40DWEHE2EOdqdpCK06sp1EA5qG0KbZKqAjo00C//I5oDOvlglsdxbQmHlS2MJXIf+XlU9D2OLUVyGdu3yTgBF/CuWmIWgVUq7BWQJPPZqIphDa4PDU4UFAIb4JdsAfZucBxVidJvDb14CCnLxO4JdNQFEO3iXgIZpCHd8l8NPQeBIFuk/gh/uAAt3MEvg4CCjRh/cJtTPNQbFOLhIq9xBQqrFTLFTuLqBco8eEil2MAgpmVYmaydtRPKtK1GsZULqbYUKVJvJ29MDVNKFCs9uAHrh10pAaqRXSE5eW76iPZw56Y7xIqMtsHtAXAtLUxj1Z+mRgnZSqfGfvznIaCGIggFrsYd8CBAQSiA8ShCCCvv/VOIer3ztEyZpply985qCXjwHT2HGtkG5ePJBmGgcF3fzJaCax0M1BQ5ZYmMR7QUP3lwPyPRe0dLoYkG55VNDTlUVD4v0WdHVo0ZBwnkTT2d7jgGR6/Gnt5HNALucKac4yOMH8K6S9/YMBoV4L2nPRkFAP/hWS4GVAoq+CBFuFHQT6LsiwkdHE2XFqhRjvuwOyXBfEUHxHmBsP7kiyXg4I8lGQ5E05KUGOFfkT5u14QIqfgjCnMpoU57ZWyKPknxSbgjwrGU2Es/2CQKuHAf05KUuoI8ey6O+2IJSMpr+7glQymu4eC3LJaJpzsJBoMprWDNGEk9F0ZogmnYymL0M0+WQ0bRmimYCMpilDNFO4sgtOS08FM9DXQUdnBXOQ0TSk4o5prPRH0825ijvmoeOfbrYF83DPkF4Wjq0wlfubAX28FkxlvTugi6Wz3/yzd287TUBBFECnSGliMYIKWi/YAFEiAiFh/v/X4AXCPbx1N2etjzgPZ2b2Hs0PbzRrY6tgNGcbDWthY7dgOEtvNOvhV8GADhrWwWHBiP425FMqy6h+N8Rz+82opkcN4ZytMK7JaUO2/wXDmn9pSPZuVjCu2ceGYJ8KRqaGhWg27hjcttg7cv0pGJxIJXItC0YnroNUO/OC4V02RJJxBzdOGhItCqhyZkiiiwJuTL43xLkqwAkLmQwL4dbu+4YshoVw51ArOGG2C7h1bD2aKLL8QVMWsS4L0MJCps+bBdwzuWhIcVTAA5tW74ixX8BDC6t3hPg2LeCRr5JJyXBSwBPLhgQSlOA5Ww2rZykanjU9b1i5gwKsdZDp56wAhbNkOi3gBfvSOlixfwVI6yDTnqRoUJRFKsff8Jr5h4bVOStACQuZ/HOAkSGx/HOAkSGxjgswMiTTzqQAI0My+eeAN1jsNdfs3dtKHFEQBdCSTIzRoIkmTtQRQcU7eMH6/18T9MEHRad7TveUsNZnbKr2ZgkOArAJTk3rcg6Yy0XC6LYDmMd3e7PMy2ghjO7Hz4RPyDlgWaazhE/IOaAbHyx8Wf5WoIOHhI/p54ClmfxPGM9hAB0cf0sYzWMAXdwljGU2CaCTw4SR3AYgjqaouwA6OnYdzUjWAnAdTU1nAXR3nTCCmwCUdVDUrwB6uNQdzfA2A+jlPGFoRwH0svI34R0msaACU4YMbUeFEvR2lTCo6wB6O0l4y2shlOARnGH9CcBMFjVtBeDyjqJWA3B5R1G7ASxkbydhGP9WAljMfcIwHgLQeUdR9wEsam094ZU2fyjlNOGFkzuoZzvhmZM7qGei3p8BnAbQwq56f5qbTQJo4iihsf0A2tjYTHhmWBbqmYo6aGwaQCurCS399v0Nog6q8v0Nog7KMrgCog7K2gugoY2thFae2Lu3nLaCIAig7ZAIYgMJoKA4EQkgxBuBgN7/1hD8gqXra2bcH+cso6an6ncAog6K2g9A1EFRzwF8rplBcBSRQlmHCZ9iN4BXujoo6H8Ab9SSUs91AG8ssFCPKBqaOEqwiQVFbf1MEEVDUccJq7oLoI37hNV82QygjflGwkp2AmjlJEEUDUVNdhJE0VDUqco7ViKKhvf8A6cGV9HQ1OY0QVc0FPWcMNpxAO84jqaGvQCa2nYczVjfA2jsImGcowAam+0mjPIQQGt/E0bZDuBjmqNZt2kA7W39SljeYwAd/EtY3lMAHXw7T1jaaQALqFNizQ4mAXSxn7CkPwEs5MWQ9boMYCEvhqzXWQCdTH4kWJaFog4T1PlDVf4Yos4fyto7SFDnD0XdJgw3D6CjiVZSdChBWWcJQ90E0NdNwkAnAfQ1t2PIUFcBdHaZMMjGLIDOvk4ThjgPeGHvvlIaCoAwjE7swQKWqNgrVmw4+9+aCFGiSUjiw72DnLOO+f6hca8J0zgNoHGL6wlTeA+geXcJU9gMoAVvCcIVKMrhHcIVqMvhHcIVKMvhHcIVqMvhHZMcCVdgFg7vmES4Av+DH1kIV6Aui3f4uAJlrR0l+LgCRZ0mCFegqOVewlhPAbTpPGGsmwDatNpNGOcwgFadJYwxtxDA7PQrNGEjgD/Qr9CEywDa9pQw0ksAbbueSxjlIoDWbSWMsN0JoHUr2wnDdgIo4CZh2FIABfi/wij3AVRwkjBkM4AKOvsJv3QDqOE94ZeHAGqQgTPkMYAiDhN+2g2giucEM3dQ1F7CoPUA6nhLGLAVQB1r1pQY9BpAIdaUGHQdQCEr8wlfeosBVHKb8OUggFIWegl9twHUcp7QdxVALUZJ+bYcQDFGSenbD6CaTjfh03EA5Xywd29JTQAwGEZT2mktVbFeBxUsOshtuLxk/1uj7CKZnLOK7yX5DwlvLgMoZ3GWcPQjgHruEzKXiwAK8tufo68BVOS3P0frAEr6mXAfQEl3CfsAanpKptsGUNTfZLqHAKoykTXeVQBVXZvImu57AGVdJKOd7AIoy9LscB8CKOxfMtnnAAo7/50Mdgigsj/JYO8DqGy/TMb6FEBt62Ss5wBqeyej57oJoLjbZKpfARS3+ZLMdLIKoDoZPdVZAOVtviUjOVyBDm6SkRyuQAcrGT3TeQANyOiRTgPoQEaPZHEFmrhK5rG4Ak2sTpNx7gLoQUbPs7S4Al3I6Hn+B9CFjB5nHUAXOxk9zWMAbVwms2wCaENGD+OHErQio2fxQwla2W2TQfxQgl5ekkH2AXSykNGDbAPoRUYPchFALzJ6kJcAmjkkU1wH0MziYzLDK3t3lhNXFENR1CmoQBIiKoSkBHzQt6ITyPOfGuPweWuNYsu6194UMI6MXgrr/GEgGb0U1vnDRDJ6IbYFzLM+bBbg37cCBnpqFuC1gIlk9CIYRcNQMnoJrgoYaf27SbdZFzDTS5POq2iYS0bH+yxgKhkdzygaBrtrohlFw2RnTTSjaBjtuElmFA2jyehsBwVMJqOTOVsIw/1vcl0XMNtpE+uigNkem1j7BQwno2MdFjCdjI71vYDxXptMNwWMt20i7ewWMJ+MznRaQAAZnem5gAQfTaBtAQlumzw/LSKFEDI6kN/fkOJg1aR5KiDEdRNmtVdAiBMZnea4gBhHTRZP7iDIn50mym0BOc6bJA6uQJR9GR3lqIAkD02QlwKS7P1tYthyB2numxhvBWTZ3TQp3gsIc9mEWDksC3F+/Wgy+FoIgd6bDJcFX+zdCy4kUBAF0JKhZRojmfg02id+jQQhav9bs42uqnOW8V7de2ln51/SwkUA/bwlHRwH0NDeUdLASwAdPSYN3AfQ0klS3iqAnl6T8hYBNPWRVPcaQFNPJrKqW+4F0JWl2eq8c0BjJrKqOw+gr0VSmXsOaG3/NClMbgV6U0pamulv6E0paWX6OaC7r6SsTQC97RwnVekhhfa0KZX1HEB7l0lN9lZggPOkJLuyMMJ1UtFHAAOIgdf0E8AEL0k9pwcBTLC7TMr5H8AM8isFKbmDKeRX6hH+hjmukmIcRcMgZgyLWe8HMMahGcNargMY5Dap5CqAQeyvlLKy/A2z3CR1+CyEYRzeFfLHZyFMc5ZU8RDANN9JEZKFMI/GuyqOAphnk5RwF8A8B6ukgKUaUhjpPSlgE8BIn8nWW9sshKEO18m2c3EHYy2SbfcUwFC7f5Pt9hnAWL/s3VtOGwEMBVBPBQTatCFAmlJF9AEN5Q0S3v/WQIIvIGT4mbE056zC8uPaxLC67wEM10VSmbMVGLTpflLYfQBD9iep61sTwJA1X5Oy7gIYtrk/hmXtKKJh8PaSoo4CGLrR56QkAUpAxH1SkiIaeHSdFKSIBixHl3UbAI+OknKscwBPNg+SahTRwLOxX7PVOCwE3IGXdRUAz5plUskyALQ6ijoLAK2Omi4CQKujpsU4ALQ6atoKAAcsNe2OAuCFm6QEVyvAa9NZUsDE1QoglrQqC3fAm46T3h0HwFs2fiQ9m20HgGezNZkVAiudJr1abgbACo3o6F4t/gXAStPdpD+nAfCOk+QjrEQDXdpKevJpHgAy72oSnwSsdagd3Y/JlwBY58R2dB8WfwNgvf9J9y4DoIXmZ9K1A9scQDvbO0m3ZocB0M7cm6yOnQdAW7+TLu0FQHu/ku5MNgJAoFJJ++MA+IiRfP93aEQ/sHe3O2lEURRA70AHig0VJLb4UZtUEE1R09jz/q/Wv00rBoa5M9dkrYc4mdw5ex+gX2vnZncT/AYakDJ8f2xEA028BPlNXCsErHUUaqGaA2imegryGvhVCDT1YRr8T3kSUIS5to6sbhNAc2sF/xk9W+YAjvKgUSmbqdw3YD26UEvrdoDWu0KdaOYAWnATtG9mIRpoxSZo2+IhAbRiFLRreJUARMGLNHhMAG2pz4L2DFcJwIwuklcOwIwulQkNmNGlMqGBDGr/DNtwbtsOyOI+kFgBSrUNjjOR+gayudGpdJTTeQLI5vd10NjlOAFkdLUIGvr2KQFk9eMkaGRUJ4DMLpbB4a5/JYD8xpfBoWZfEkAXqtvgMKcXCaAjW8t3B/npkCzQoUeLHfsbbP0oBDq1/hzsZ6Y3Ceja+CnYx9QzNNC9+t6D9B6+y6sAvVjNgredO1II9GV+F7zlziMH0J9qFOw02FQJoEcrlR27LL8mgH59fA5ecyauAvSvfhkG/5qsEkAJ1tPAJzRQqGrjGMvfJvKE8Ke9+9BRG4iiMDzGYLDXBWzasrjgUE1Zw+68/6tFUaRVpEiJtk/5v4e4Gt1yBiqpeUi/6Hg8oQGoxdnRkf4tqgUAqCYcS8jsiV1oAEq6TqTt8pEAADUNLP+OJeL3KwAqm1k8NhwW9DgAqM1pLY2/c72+AADV9T0bl6RzMu0A6CE8SsssSEwCoI+pVUHSEceEAPRyTqQlkkYAgGacypcWSBrWOADoyGmNL9JJ0xMAoCfDi/SWAg1Aa04VS0M9ckoIQHu9s4nbHct8IwDABAfT9qSHe9KSAJgjLDNpjOR6JwDAJP3VXJrAzQ8CAIzTW186UnPz1UAAgJlGe52X8Nz8gSU7ACZzzkdNc/C2LWGjAMzXL/SL/Z/vQwEAdth4Os0Og5KoUQB2mZWB1EGQTslJAmAfZ1qqPjz0ywP1GYC1Zp66ER7RrhYAYLf7p0dXqiY7tpx4A8Av3XOq0PiwE+1pPwPAn+7b21B+v7hsuB8EgL/1NsUtkN+mk6TPlGcA+IfwmiYd+dUmi/26KwAA/9V92B19+UXcbXkNyd4AgNcYrE+3uCM/U7Dwqg2TQQB4m7u68o7xUn40f1EWU2KRAOD9nPC8Ki+xK99tOV/8ODU1bWcA+GiDWVN4+TgeylfK5uObt6qmI3rOAPDZnFG9fm5PXppfxtvE9yeZK19kWRb4STS+3FJvV1TresRXg1DATwWD6kyJrjILAAAAAElFTkSuQmCC);\n  background-position: 700px 0;\n  background-repeat: no-repeat;\n  background-size: contain; }\n\n.main_banner .download-here {\n    position: absolute;\n    right: 40px;\n    top: 85px;\n    z-index: 9; }\n\n.main_banner .promo_img_div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-width: 1270px;\n    margin: 0 auto; }\n\n.main_banner .promo_img_div .zip_promo {\n      min-width: 400px; }\n\n.main_banner .promo_img_div .zip_promo h3 {\n        text-align: left;\n        padding: 0; }\n\n.main_banner .promo_img_div .main_img {\n      max-width: 500px; }\n\n.panel-group .panel + .panel {\n  margin-top: 0px; }\n\n.fa-minus-square {\n  color: #ff4072 !important; }\n\n.four_Steps {\n  width: 100%;\n  min-height: 200px;\n  margin: 0 auto;\n  background-image: url('home-bg-four.8c545683f9d2c926d6fd.png');\n  background-position: -200px 0;\n  background-repeat: no-repeat;\n  background-size: 2700px auto;\n  margin-top: -750px;\n  margin-bottom: 0;\n  padding: 800px 0px 0px 0px; }\n\n.heading_s {\n  font-size: 40px;\n  color: #273c61;\n  text-align: center;\n  line-height: 1.2;\n  padding: 50px 0;\n  font-weight: 400 !important;\n  text-transform: capitalize; }\n\n.panel-group .panel-heading + .panel-collapse > .panel-body {\n  border-top: none; }\n\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.88em;\n  color: #959fac; }\n\n.panel-heading:hover .panel-title {\n  color: #c00 !important; }\n\n.residential-main .heading {\n  text-align: center;\n  margin-bottom: 15px;\n  border-bottom: 4px solid #ff4270;\n  font-weight: bold; }\n\n.zip_btns {\n  min-height: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.main {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.bar {\n  height: 1px;\n  background: #dbdee3; }\n\n.inner {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center; }\n\n.rs {\n  margin: 0px !important;\n  color: #ff4270;\n  font-size: 30px !important; }\n\n.price-box {\n  padding: 20px 0; }\n\n.border_bottom {\n  border-bottom: 1px solid #ccc; }\n\n.rateSheet span {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 2em;\n  color: #959fac;\n  display: block; }\n\n.links-list a {\n  margin: 0 10px;\n  font-size: 18px;\n  color: #959fac;\n  text-decoration: underline; }\n\n.residential-main .heading {\n  text-align: center;\n  margin-bottom: 15px;\n  border-bottom: 4px solid #ddd;\n  font-weight: bold; }\n\n.search-result {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 10px;\n  max-width: 1300px;\n  margin: 0 auto; }\n\n.result-box {\n  width: 350px;\n  float: left;\n  margin: 0px 5px;\n  max-width: 350px;\n  background: #fff;\n  margin-bottom: 20px;\n  -webkit-box-shadow: 0px 0px 12px #ccc;\n          box-shadow: 0px 0px 12px #ccc; }\n\n.price-box h3 {\n  margin: 0px !important;\n  color: #ff4270;\n  font-size: 55px !important; }\n\n.price-box b {\n  font-size: 18px;\n  color: #273c61; }\n\n.enroll-btn {\n  width: 100%;\n  margin: 20px 0 0px; }\n\n.productName {\n  text-align: center;\n  color: #273c61;\n  font-size: 22px;\n  font-weight: 500;\n  text-transform: uppercase;\n  line-height: 1.09em;\n  margin: 30px 0 10px !important; }\n\n.tag-line {\n  color: #959fac;\n  font-size: 18px;\n  text-align: center; }\n\n.rs {\n  margin: 0px !important;\n  color: #ff4270;\n  font-size: 30px !important; }\n\n.price-box {\n  padding: 20px 0; }\n\n.s_helpBan {\n  padding: 0; }\n\n.residential-form-home {\n  margin: 0 auto; }\n\n@media (max-width: 991px) {\n  .header .inner_header .main-listt {\n    padding: 15px 0px; }\n  .timeline > li > .timeline-panel {\n    float: right;\n    width: 86%; }\n  .main_banner {\n    min-height: auto; }\n  .main_banner .promo_img_div .main_img {\n    display: none; }\n  .main_banner .download-here {\n    position: static;\n    text-align: right; }\n  .main_banner img {\n    max-width: 100px; }\n  .main_banner .promo_img_div .zip_promo {\n    min-width: auto; }\n  .promo_img_div {\n    padding: 0 30px; }\n  .main_banner .promo_img_div .zip_promo h3 {\n    font-size: 30px !important;\n    padding-bottom: 20px; }\n  .form-zip {\n    max-width: 440px; }\n  .heading_s {\n    font-size: 34px; }\n  .help-sidebar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    white-space: nowrap; }\n  .help-sidebar li {\n    font-size: 12px;\n    font-weight: 600; }\n  .h1, h1 {\n    font-size: 26px; } }\n\n.mat-accordion p {\n  font-size: 14px; }\n\n.tab-content h1 {\n  text-decoration: underline; }\n\n.pd-10 {\n  padding: 10px 0; }\n\n.contents_of_bill {\n  margin-top: 100px; }\n\n.contents_of_bill .modal-title {\n  font-weight: 300 !important;\n  padding: 5px 30px;\n  font-size: 20px; }\n\n@media (max-width: 767px) {\n  .logo-width a {\n    margin-top: 0px; }\n  .header .Toggle {\n    display: block !important; }\n  .heading_s {\n    font-size: 26px !important; }\n  .faqs_home #accordion .panel-default .panel-heading .panel-title {\n    font-size: 16px; }\n  .download-here img {\n    max-width: 100px; }\n  .main_banner {\n    min-height: auto !important; }\n  .heading_s {\n    padding: 20px 0; } }\n"

/***/ }),

/***/ "./src/app/Container/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export errorMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MainComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PrivacyPolicyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CommercialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return PlansComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ResidentialsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TermConditionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BrokersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EnergySavingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SpecialsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PlanSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EnrollProcessComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return OurCommunityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EstablishContractsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container_Store_Services__ = __webpack_require__("./src/app/Container/Store/Services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Store_Services_enroll_service__ = __webpack_require__("./src/app/Container/Store/Services/enroll.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__always_auth_service__ = __webpack_require__("./src/app/always-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enrollment_enrollment_component__ = __webpack_require__("./src/app/enrollment/enrollment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recapcha_recapcha_service__ = __webpack_require__("./src/app/recapcha/recapcha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var errorMatcher = /** @class */ (function () {
    function errorMatcher() {
    }
    errorMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return errorMatcher;
}());

var MainComponent = /** @class */ (function () {
    function MainComponent(_router, http, promos, enrollment) {
        this.http = http;
        this.promos = promos;
        this.enrollment = enrollment;
        this.hide = true;
        this.hide1 = true;
        this.hide2 = true;
        this.promoCode = '';
        this.ZipCode = localStorage.getItem('zip');
        this.matcher = new errorMatcher();
        this.selectProductBtnDisabled = [];
        this.digitsOnly = '^[0-9]+$';
        this.promo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required
        ]);
        this.zip_code = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern(this.digitsOnly), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required
        ]);
        this.router = _router;
    }
    MainComponent.prototype.setPosition = function (position) {
        var _this = this;
        // if (!localStorage.getItem('zip')) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //33.0604
        //-96.7333
        this.http.get('https://apis.wattcrm.com/portal/zipcode-by-lat-lng/lat-->' + position.coords['latitude'] + '/lng-->' + position.coords['longitude'] + '/').subscribe(function (Res) {
            console.log(Res);
            if (Res['status'] == true) {
                _this.zipCode = Res['message'];
                _this.view_result(_this.zipCode);
            }
            else if (Res['status'] == false) {
                _this.zipCode = '75023';
                _this.view_result(_this.zipCode);
            }
        });
    };
    // }
    MainComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
            // navigator.geolocation.getCurrentPosition(this.getzipcode.bind(this));
        }
        var myIndex = 0;
        carousel();
        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1;
            }
            // x[myIndex - 1].style.display = "block"
            setTimeout(carousel, 1000);
        }
    };
    MainComponent.prototype.view_result = function (zip_codes) {
        var _this = this;
        this.promos.uaCheck().subscribe(function (res) {
            if (res['message']['bypass'] == true && res['message']['ua'] == false) {
                localStorage.setItem('ua', "False");
            }
            else
                localStorage.setItem('ua', "True");
        });
        // if (this.promoCode == null) { this.promoCode = "" }
        var data = {
            zip_code: zip_codes,
            promo_code: "" + this.promoCode,
            client: "WattGenie-Web"
        };
        this.promos.searchPlanhome_page(data).subscribe(function (res) {
            console.log(res);
            // localStorage.removeItem('duns')
            // if (res["status"] == false) {
            //   this.showError = true
            //   this.error = res["Error"]
            //   this.submitBtnDisabled = false
            // }
            // if (res["status"] == true) {
            //   // this.showSpinner = false
            //   // this.showError = false
            //   // this.submitBtnDisabled = false
            //   if (res["tdsp_status"] == false) {
            //     localStorage.setItem('duns', res['message'][0]['provider_id'])
            //     this.showFilteredProducts = true
            //     this.showPlans = true
            _this.products = res["message"];
            //     localStorage.setItem('promotionCode', JSON.stringify(res['promo_code']))
            //     localStorage.removeItem('zip')
            //     this.submitBtnDisabled = false
            //   }
            //   else {
            //     this.showTdsp = true
            //     this.tdsps = res['message']['row']
            //     this.submitBtnDisabled = false
            //   }
            // }
            // else if (res["status"] == false) {
            //   this.showFilteredProducts = false
            //   this.showSpinner = false
            //   this.showError = true
            //   this.showPlans = false
            //   this.error = res["message"]
            //   localStorage.removeItem('zip')
            //   this.submitBtnDisabled = false
            // }
        });
    };
    MainComponent.prototype.enroll = function (i) {
        var _this = this;
        this.selectProductBtnDisabled[i] = true;
        var data = {
            product_pk: this.products[i].id,
            enroll_product: this.products[i].product_id,
            rate: this.products[i].rate,
            batch_rate: this.products[i].batch_rate,
            contract_term: this.products[i].term,
        };
        this.enrollment.sendProductDataForSession(data).subscribe(function (res) {
            if (res['status'] == true) {
                _this.selectProductBtnDisabled[i] = false;
                localStorage.setItem('zip', _this.ZipCode);
                _this.router.navigate(['/enroll']);
                localStorage.setItem('productSummary', JSON.stringify(_this.products[i]));
            }
            if (res["status"] == false && res["redirect_url"] != null && res["redirect_url"] != undefined && res["redirect_url"] != '') {
                __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('Your session has expired. Please refresh the page and try again', '', 'error').then(function () {
                    _this.selectProductBtnDisabled[i] = false;
                    _this.ngOnInit();
                });
            }
            else {
                _this.selectProductBtnDisabled[i] = false;
            }
        }, function () {
            _this.selectProductBtnDisabled[i] = false;
        });
    };
    MainComponent.prototype.onSubmit = function () {
        if (this.zipCode != "" && this.zip_code.errors == null) {
            localStorage.setItem('promoCode', this.promoCode);
            localStorage.setItem('zip', this.zipCode);
            this.router.navigate(["search-plan/" + this.zipCode]);
        }
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/Container/main/main.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__Container_Store_Services__["h" /* PromoCodeService */], __WEBPACK_IMPORTED_MODULE_5__Store_Services_enroll_service__["a" /* EnrollmentService */]])
    ], MainComponent);
    return MainComponent;
}());

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(recapcha, changeDetectorRef, contact, snackBar) {
        this.recapcha = recapcha;
        this.changeDetectorRef = changeDetectorRef;
        this.contact = contact;
        this.snackBar = snackBar;
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]),
            mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')]),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required])
        });
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        var myIndex = 0;
        carousel();
        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1;
            }
            x[myIndex - 1].style.display = "block";
            setTimeout(carousel, 1000);
        }
    };
    AboutUsComponent.prototype.submit = function () {
        var _this = this;
        var status = this.recapcha.check();
        if (status == false) {
            this.cap_result = "Please re-enter text";
        }
        else {
            this.cap_result = "";
        }
        if (this.myForm.valid && status == true) {
            this.btnDisabled = true;
            this.contact.establishContact(this.myForm.value).subscribe(function (res) {
                if (res['status']) {
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("" + res['message'], '', "success").then(function () {
                        _this.btnDisabled = false;
                        _this.froms.nativeElement.reset();
                        _this.changeDetectorRef.detectChanges();
                    });
                }
                else {
                    _this.btnDisabled = false;
                    _this.snackBar.open(" Something went wrong, please try again later.", 'close', {
                        duration: 1000
                    });
                }
            }, function () {
                _this.btnDisabled = false;
                _this.snackBar.open(" Something went wrong, please try again later.", 'close', {
                    duration: 1000
                });
            });
        }
    };
    Object.defineProperty(AboutUsComponent.prototype, "f", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AboutUsComponent.prototype, "froms", void 0);
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("./src/app/Container/main/about-us.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__recapcha_recapcha_service__["a" /* RecapchaService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2__Container_Store_Services__["d" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBar */]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () { window.scrollTo(0, 0); };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-privacy-policy',
            template: __webpack_require__("./src/app/Container/main/privacy-policy.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        })
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());

var CommercialComponent = /** @class */ (function () {
    function CommercialComponent(recapcha, getQoute, snackBar, changeDetectorRef) {
        this.recapcha = recapcha;
        this.getQoute = getQoute;
        this.snackBar = snackBar;
        this.changeDetectorRef = changeDetectorRef;
        this.commercialForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            Name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
            BusinessName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
            BusinessType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            Email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]),
            Telephone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9-]+$')]),
            Mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9-]+$')]),
            ElectricityUsage: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^(0|[1-9][0-9]*)$')]),
            Notes: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('')
        });
        this.businessType = [
            { value: 'B', businesstype: 'Building' },
            { value: 'R', businesstype: 'Restaurant' },
            { value: 'S', businesstype: 'Store' },
            { value: 'M', businesstype: 'Manufacturing Plant' },
            { value: 'Of', businesstype: 'Office' },
            { value: 'O', businesstype: 'Other' },
        ];
    }
    CommercialComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    Object.defineProperty(CommercialComponent.prototype, "f", {
        get: function () { return this.commercialForm.controls; },
        enumerable: true,
        configurable: true
    });
    CommercialComponent.prototype.submit = function () {
        var _this = this;
        var status = this.recapcha.check();
        if (status == false) {
            this.cap_result = "Please re-enter text";
        }
        else {
            this.cap_result = "";
        }
        if (this.commercialForm.valid && status == true) {
            this.btnDisabled = true;
            var obj = this.commercialForm.value;
            this.getQoute.GetYourQoute(obj).subscribe(function (res) {
                if (res['status'] == true) {
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('' + res['message'], '', 'success').then(function () {
                        _this.btnDisabled = false;
                        _this.froms.nativeElement.reset();
                        _this.changeDetectorRef.detectChanges();
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("" + res['message'], '', "error").then(function () {
                        _this.btnDisabled = false;
                    });
                }
            }, function () {
                __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("Could not connect to server, please try again", '', "error").then(function () {
                    _this.btnDisabled = false;
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CommercialComponent.prototype, "froms", void 0);
    CommercialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-commercial',
            template: __webpack_require__("./src/app/Container/main/commercial.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__recapcha_recapcha_service__["a" /* RecapchaService */], __WEBPACK_IMPORTED_MODULE_2__Container_Store_Services__["d" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], CommercialComponent);
    return CommercialComponent;
}());

var PlansComponent = /** @class */ (function () {
    function PlansComponent() {
    }
    PlansComponent.prototype.ngOnInit = function () { window.scrollTo(0, 0); };
    PlansComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plans',
            template: __webpack_require__("./src/app/Container/main/plans.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        })
    ], PlansComponent);
    return PlansComponent;
}());

var ResidentialsComponent = /** @class */ (function () {
    function ResidentialsComponent() {
        this.tabOne = true;
    }
    ResidentialsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ResidentialsComponent.prototype.tab1 = function () {
        this.tabOne = true;
        this.tabTwo = false;
        this.tabThree = false;
    };
    ResidentialsComponent.prototype.tab2 = function () {
        this.tabOne = false;
        this.tabThree = false;
        this.tabTwo = true;
    };
    ResidentialsComponent.prototype.tab3 = function () {
        this.tabOne = false;
        this.tabThree = true;
        this.tabTwo = false;
    };
    ResidentialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-residentials',
            template: __webpack_require__("./src/app/Container/main/residentials.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResidentialsComponent);
    return ResidentialsComponent;
}());

var TermConditionComponent = /** @class */ (function () {
    function TermConditionComponent() {
    }
    TermConditionComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    TermConditionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-term-condition',
            template: __webpack_require__("./src/app/Container/main/term-condition.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TermConditionComponent);
    return TermConditionComponent;
}());

var BrokersComponent = /** @class */ (function () {
    function BrokersComponent(recapcha, broker, snackBar, changedetector, fb) {
        this.recapcha = recapcha;
        this.broker = broker;
        this.snackBar = snackBar;
        this.changedetector = changedetector;
        this.fb = fb;
        this.panelOpenState = false;
        this.myForm = this.fb.group({
            AgentID: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]),
            phoneno: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9-]*$')]),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(128)]),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            companyname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required])
        }, { validator: this.checkIfMatchingPasswords('password', 'confirm_password') });
        this.errorEmail = null;
        this.errorUsername = null;
        this.errorCompanyName = null;
    }
    BrokersComponent.prototype.checkIfMatchingPasswords = function (passwordKey, passwordConfirmationKey) {
        return function (group) {
            var passwordInput = group.controls[passwordKey], passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    };
    BrokersComponent.prototype.submit = function () {
        var _this = this;
        var status = this.recapcha.check();
        if (status == false) {
            this.cap_result = "Please re-enter text";
        }
        else {
            this.cap_result = "";
            if (this.myForm.valid) {
                this.btnDisabled = true;
                this.errorEmail = null;
                this.errorUsername = null;
                this.errorCompanyName = null;
                var obj = this.myForm.value;
                this.broker.BrokerApp(obj).subscribe(function (res) {
                    if (res['status'] == true) {
                        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("" + res['message'], '', "success").then(function () {
                            _this.btnDisabled = false;
                            _this.brokers.nativeElement.reset();
                            _this.changedetector.detectChanges();
                        });
                    }
                    else {
                        if (res['message'].hasOwnProperty('username')) {
                            var msg = void 0;
                            msg = res['message']['username'][0].slice(18).toLowerCase();
                            _this.errorUsername = msg.charAt(0).toUpperCase() + msg.slice(1);
                        }
                        if (res['message'].hasOwnProperty('email')) {
                            var msg = void 0;
                            msg = res['message']['email'][0].slice(18).toLowerCase();
                            _this.errorEmail = msg.charAt(0).toUpperCase() + msg.slice(1);
                        }
                        if (res['message'].hasOwnProperty('companyname')) {
                            var msg = void 0;
                            msg = res['message']['companyname'][0].slice(18).toLowerCase();
                            _this.errorCompanyName = msg.charAt(0).toUpperCase() + msg.slice(1);
                        }
                        _this.btnDisabled = false;
                    }
                }, function () {
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("Could not connect to server, please try again", '', "error").then(function () {
                        _this.btnDisabled = false;
                    });
                });
            }
        }
    };
    Object.defineProperty(BrokersComponent.prototype, "f", {
        get: function () {
            return this.myForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    BrokersComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], BrokersComponent.prototype, "brokers", void 0);
    BrokersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-brokers',
            template: __webpack_require__("./src/app/Container/main/brokers.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__recapcha_recapcha_service__["a" /* RecapchaService */], __WEBPACK_IMPORTED_MODULE_2__Container_Store_Services__["d" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], BrokersComponent);
    return BrokersComponent;
}());

var EnergySavingComponent = /** @class */ (function () {
    function EnergySavingComponent() {
        this.loadmorebtn = "Load More";
    }
    EnergySavingComponent.prototype.ngOnInit = function () { window.scrollTo(0, 0); };
    EnergySavingComponent.prototype.loadMore = function () {
        if (this.loadmorebtn == "Load More") {
            this.loadmorebtn = 'Show Less';
        }
        else if (this.loadmorebtn == "Show Less") {
            this.loadmorebtn = "Load More";
        }
    };
    EnergySavingComponent.prototype.loadMoretab = function () {
        if (this.loadmorebtn == "Load More") {
            this.loadmorebtn = "Load More";
        }
        else if (this.loadmorebtn = "Show Less") {
            this.loadmorebtn = "Load More";
        }
    };
    EnergySavingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-energy-saving',
            template: __webpack_require__("./src/app/Container/main/energy-saving.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        })
    ], EnergySavingComponent);
    return EnergySavingComponent;
}());

var SpecialsComponent = /** @class */ (function () {
    function SpecialsComponent() {
    }
    SpecialsComponent.prototype.ngOnInit = function () { window.scrollTo(0, 0); };
    SpecialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-specials',
            template: __webpack_require__("./src/app/Container/main/specials.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        })
    ], SpecialsComponent);
    return SpecialsComponent;
}());

var PlanSearchComponent = /** @class */ (function () {
    function PlanSearchComponent(promo, router, route, enrollment) {
        this.promo = promo;
        this.router = router;
        this.route = route;
        this.enrollment = enrollment;
        this.matcher = new errorMatcher();
        this.contractTerm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.contractTermList = ['36 Months', '24 Months', '18 Months', '14 Months', '12 Months', '6 Months'];
        this.showSpinner = false;
        this.showPlans = false;
        this.showTdsp = false;
        this.showError = false;
        this.submitBtnDisabled = false;
        this.ZipCode = localStorage.getItem('zip');
        this.promoCode = localStorage.getItem('promoCode');
        this.zip_code = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]+$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]);
        this.abc = [
            { "market_id": "" },
            { "promo_code": "" + this.promoCode },
            { "vendor_id": "" },
            { "vendor_group": "" },
            { "pm_duns": "" },
            { "plan_group": "" },
            { "plan_id": "" },
            { "plan_group_type": "POS" }
        ];
        this.Array1 = [];
        this.Array2 = [];
        this.promoCodeArray = [];
        this.showFilteredProducts = false;
        this.showSpinner2 = false;
        this.showError2 = false;
        this.price_from = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]*[\.]?[0-9]+$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].min(1)]);
        this.price_to = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]*[\.]?[0-9]+$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].max(99)]);
        this.selectProductBtnDisabled = [];
    }
    PlanSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = [];
        this.tdsps = [];
        window.scrollTo(0, 0);
        this.route.params.subscribe(function (res) {
            if (res.PromoCode != null && res.PromoCode != "" && res.PromoCode != undefined) {
                _this.promoCode = res.PromoCode;
            }
            if (res.ZipCode != null && res.ZipCode != "" && res.ZipCode != undefined) {
                _this.ZipCode = res.ZipCode;
                setTimeout(function () {
                    _this.submit();
                }, 1);
            }
        });
    };
    PlanSearchComponent.prototype.searchPlansByTdsps = function (value) {
        var _this = this;
        this.showTdsp = false;
        this.showSpinner = null;
        this.x = setTimeout(function () {
            if (_this.showSpinner == null) {
                _this.showSpinner = true;
            }
        }, 1500);
        localStorage.setItem('duns', value);
        var data = {
            provider_id: value,
            promo_code: this.promoCode
        };
        this.promo.searchPlanByTdsp(data).subscribe(function (res) {
            if (res["status"] == true) {
                _this.showSpinner = false;
                _this.showError = false;
                _this.showFilteredProducts = true;
                _this.showPlans = true;
                _this.products = res["message"];
                localStorage.removeItem('zip');
            }
            else {
                _this.showFilteredProducts = false;
                _this.showSpinner = false;
                _this.showError = true;
                _this.showPlans = false;
                _this.error = res["message"];
                localStorage.removeItem('zip');
            }
        }, function () {
            _this.showSpinner = false;
            _this.showError = true;
            _this.error = "Could not connect to server, please try again";
        });
    };
    PlanSearchComponent.prototype.filterProduct = function () {
        var _this = this;
        if (this.price_from.valid == true && this.price_to.valid == true) {
            this.showSpinner2 = null;
            this.showFilteredProducts = false;
            this.showError2 = false;
            var data = {
                zip_code: this.ZipCode,
                client: "WattGenie-Web",
                promo_code: "" + this.promoCode,
                tariff_rate: [1, 99],
                tariff_usage: ""
            };
            if (this.term1 == true || this.term2 == true || this.term3 == true || this.term4 == true || this.term5 == true || this.term6 == true || this.term7 == true) {
                data['term'] = [];
                if (this.term1 == true) {
                    data['term'].push(36);
                }
                if (this.term2 == true) {
                    data['term'].push(24);
                }
                if (this.term3 == true) {
                    data['term'].push(18);
                }
                if (this.term4 == true) {
                    data['term'].push(14);
                }
                if (this.term5 == true) {
                    data['term'].push(12);
                }
                if (this.term6 == true) {
                    data['term'].push(6);
                }
                if (this.term7 == true) {
                    data['term'].push(5);
                }
            }
            else {
                data['term'] = "";
            }
            if (this.estimatedUsage != "" && this.estimatedUsage != null && this.estimatedUsage != undefined) {
                data['tariff_usage'] = this.estimatedUsage;
            }
            if (this.priceFrom != "" && this.priceFrom != null && this.priceFrom != undefined) {
                data['tariff_rate'][0] = this.priceFrom;
            }
            if (this.priceTo != "" && this.priceTo != null && this.priceTo != undefined) {
                data['tariff_rate'][1] = this.priceTo;
            }
            var duns = localStorage.getItem('duns');
            if (duns != '' && duns != null && duns != undefined) {
                data['provider_id'] = duns;
                this.showSpinner2 = null;
                this.x = setTimeout(function () {
                    if (_this.showSpinner2 == null) {
                        _this.showSpinner2 = true;
                    }
                }, 1500);
                this.promo.searchPlanByTdsp(data).subscribe(function (res) {
                    if (res["status"] == true) {
                        _this.showSpinner2 = false;
                        _this.showError2 = false;
                        _this.showFilteredProducts = true;
                        window.scrollTo(0, 0);
                        _this.products = res["message"];
                        localStorage.removeItem('zip');
                    }
                    else {
                        _this.showFilteredProducts = false;
                        _this.showSpinner2 = false;
                        _this.showError2 = true;
                        _this.error = res["message"];
                        localStorage.removeItem('zip');
                    }
                }, function () {
                    _this.showSpinner2 = false;
                    _this.showError2 = true;
                    _this.error = "Could not connect to server, please try again";
                });
            }
        }
    };
    PlanSearchComponent.prototype.showZip = function () {
        this.showPlans = false;
        this.showTdsp = false;
    };
    PlanSearchComponent.prototype.submit = function () {
        var _this = this;
        this.promo.uaCheck().subscribe(function (res) {
            if (res['message']['bypass'] == true && res['message']['ua'] == false) {
                localStorage.setItem('ua', "False");
            }
            else
                localStorage.setItem('ua', "True");
        });
        this.showSpinner = null;
        this.showPlans = false;
        this.showTdsp = false;
        this.showError = false;
        if (((this.ZipCode != null || this.promoCode != null) && this.zip_code.errors == null) && ((this.ZipCode != "" || this.promoCode != "") && this.zip_code.errors == null)) {
            this.submitBtnDisabled = true;
            this.x = setTimeout(function () {
                if (_this.showSpinner == null) {
                    _this.showSpinner = true;
                }
            }, 1500);
            if (this.promoCode == null) {
                this.promoCode = "";
            }
            var data = {
                zip_code: this.ZipCode,
                promo_code: "" + this.promoCode,
                client: "WattGenie-Web"
            };
            this.promo.searchPlan(data).subscribe(function (res) {
                localStorage.removeItem('duns');
                if (res["status"] == false) {
                    _this.showError = true;
                    _this.error = res["Error"];
                    _this.submitBtnDisabled = false;
                }
                if (res["status"] == true) {
                    _this.showSpinner = false;
                    _this.showError = false;
                    _this.submitBtnDisabled = false;
                    if (res["tdsp_status"] == false) {
                        localStorage.setItem('duns', res['message'][0]['provider_id']);
                        _this.showFilteredProducts = true;
                        _this.showPlans = true;
                        _this.products = res["message"];
                        localStorage.setItem('promotionCode', JSON.stringify(res['promo_code']));
                        localStorage.removeItem('zip');
                        _this.submitBtnDisabled = false;
                    }
                    else {
                        _this.showTdsp = true;
                        _this.tdsps = res['message']['row'];
                        _this.submitBtnDisabled = false;
                    }
                }
                else if (res["status"] == false) {
                    _this.showFilteredProducts = false;
                    _this.showSpinner = false;
                    _this.showError = true;
                    _this.showPlans = false;
                    _this.error = res["message"];
                    localStorage.removeItem('zip');
                    _this.submitBtnDisabled = false;
                }
            }, function () {
                _this.showSpinner = false;
                _this.showError = true;
                _this.submitBtnDisabled = false;
                _this.error = "Could not connect to server, please try again";
            });
        }
    };
    PlanSearchComponent.prototype.enroll = function (i) {
        var _this = this;
        this.selectProductBtnDisabled[i] = true;
        var data = {
            product_pk: this.products[i].id,
            enroll_product: this.products[i].product_id,
            rate: this.products[i].rate,
            batch_rate: this.products[i].batch_rate,
            contract_term: this.products[i].term,
        };
        this.enrollment.sendProductDataForSession(data).subscribe(function (res) {
            if (res['status'] == true) {
                _this.selectProductBtnDisabled[i] = false;
                localStorage.setItem('zip', _this.ZipCode);
                _this.router.navigate(['/enroll']);
                localStorage.setItem('productSummary', JSON.stringify(_this.products[i]));
            }
            if (res["status"] == false && res["redirect_url"] != null && res["redirect_url"] != undefined && res["redirect_url"] != '') {
                __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('Your session has expired. Please refresh the page and try again', '', 'error').then(function () {
                    _this.selectProductBtnDisabled[i] = false;
                    _this.ngOnInit();
                });
            }
            else {
                _this.selectProductBtnDisabled[i] = false;
            }
        }, function () {
            _this.selectProductBtnDisabled[i] = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('findProducts'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], PlanSearchComponent.prototype, "findProducts", void 0);
    PlanSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-plan',
            template: __webpack_require__("./src/app/Container/main/search-plan.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Container_Store_Services__["h" /* PromoCodeService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__Store_Services_enroll_service__["a" /* EnrollmentService */]])
    ], PlanSearchComponent);
    return PlanSearchComponent;
}());

var EnrollProcessComponent = /** @class */ (function () {
    function EnrollProcessComponent(obj, router, service, enrollment, enrollmentComponent) {
        this.obj = obj;
        this.router = router;
        this.service = service;
        this.enrollment = enrollment;
        this.enrollmentComponent = enrollmentComponent;
        this.products = [];
        this.showSpinner = false;
        this.enrollProcessForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            service_address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](""),
            zip_code: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: localStorage.getItem('zip'), disabled: true }),
            premise_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required])
        });
        this.summary = false;
        this.status = false;
        this.selectPremiseBtnDisabled = [];
    }
    EnrollProcessComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('zip') == "" || localStorage.getItem('zip') == null || localStorage.getItem('zip') == undefined) {
            this.router.navigate(['/search-plan']);
        }
        window.scrollTo(0, 0);
        this.products.push(JSON.parse(localStorage.getItem('productSummary')));
    };
    EnrollProcessComponent.prototype.showSummary = function () {
        if (this.summary == false) {
            this.summary = true;
        }
        else {
            this.summary = false;
        }
    };
    EnrollProcessComponent.prototype.saveData = function () {
        var _this = this;
        this.errorMessagee = null;
        this.multiplePremise = [];
        if (this.enrollProcessForm.valid == true) {
            this.searchPremiseBtn = true;
            this.showSpinner = null;
            setTimeout(function () {
                if (_this.showSpinner == null) {
                    _this.showSpinner = true;
                }
            }, 1500);
            var date = new Date();
            var req_date_1 = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
            var obj = this.enrollProcessForm.value;
            var zip = localStorage.getItem('zip');
            obj['zip_code'] = zip;
            this.obj.enrollProcess(this.enrollProcessForm.value).subscribe(function (res) {
                if (res["status"] == true) {
                    _this.showSpinner = false;
                    _this.searchPremiseBtn = false;
                    if (res['message'].length > 1) {
                        _this.multiplePremise = res['message'];
                        _this.len = res['message'].length;
                        window.scrollTo(0, 600);
                    }
                    else {
                        _this.multiplePremise = res['message'];
                        _this.len = res['message'].length;
                        _this.SelectPremise(_this.len - 1);
                    }
                    var value = res['message'];
                    var tdsp = value['provider_id'];
                    var dateDetails = { req_date: req_date_1, tdsp_duns: tdsp, expedited: "false" };
                    _this.obj.savedateDetail(dateDetails);
                    _this.router.navigate(['/enroll']);
                }
                else if (res["status"] == false && res["redirect_url"] != null && res["redirect_url"] != undefined && res["redirect_url"] != '') {
                    _this.showSpinner = false;
                    _this.searchPremiseBtn = false;
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('Your session has expired.', '', 'error').then(function () {
                        _this.router.navigate(['' + res["redirect_url"]]);
                    });
                }
                else {
                    _this.showSpinner = false;
                    _this.searchPremiseBtn = false;
                    _this.errorMessagee = res["message"];
                }
            }, function () {
                _this.showSpinner = false;
                _this.searchPremiseBtn = false;
                __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('Could not connect to server, please try again.', '', 'error');
            });
        }
    };
    EnrollProcessComponent.prototype.submit = function () {
        this.multiplePremise == [];
        if (this.enrollProcessForm.controls.premise_id.value == "" || this.enrollProcessForm.controls.premise_id.value == null || this.enrollProcessForm.controls.premise_id.value == undefined) {
            this.enrollProcessForm.controls.premise_id.clearValidators();
            this.enrollProcessForm.controls.premise_id.setValue("");
            this.multiplePremise == [];
            this.len = null;
            this.saveData();
        }
        else {
            this.enrollProcessForm.controls.service_address.clearValidators();
            this.enrollProcessForm.controls.city.clearValidators();
            this.enrollProcessForm.controls.service_address.setValue("");
            this.enrollProcessForm.controls.city.setValue("");
            this.multiplePremise == [];
            this.len = null;
            this.saveData();
        }
    };
    Object.defineProperty(EnrollProcessComponent.prototype, "controls", {
        get: function () {
            return this.enrollProcessForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EnrollProcessComponent.prototype.SelectPremise = function (index) {
        var _this = this;
        this.status = true;
        this.selectPremiseBtnDisabled[index] = true;
        this.enrollmentComponent.startFormGroup.controls.goNext.setValue("asdasd");
        var premise = this.multiplePremise[index];
        switch (premise.pm_type) {
            case 'Small Non-Residential':
                localStorage.setItem('plan', 'C1');
                break;
            case 'Commercial > 10 KVa':
                localStorage.setItem('plan', 'C3');
                break;
            case 'Residential':
                localStorage.setItem('plan', 'R1');
                break;
            case 'Residential > 10 KVa':
                localStorage.setItem('plan', 'R3');
                break;
            case 'AMS Residential Prepay':
                localStorage.setItem('plan', 'RAMS');
                break;
            default: break;
        }
        this.service.changeDataa1(premise);
        var data = {
            provider_id: premise.provider_id,
            premise_id: premise.premise_id,
            city: premise.city,
            address1: premise.address1,
            countyname: premise.countyname
        };
        this.enrollment.sendPremiseDataForSession(data).subscribe(function (res) {
            if (res['status'] == true) {
                var date = new Date();
                var currentreq_date = {
                    req_date: date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear(),
                    tdsp_duns: premise.provider_id,
                    expedited: "false",
                };
                _this.enrollment.requestforDate(currentreq_date).subscribe(function (res) {
                    localStorage.setItem('priorityCode', res['DATES'].row[0].priority_code);
                    _this.service.changeDataa(res);
                    _this.enrollmentComponent.requestDateValidation();
                }, function (err) { return console.log(err); }, function () {
                    _this.selectPremiseBtnDisabled[index] = false;
                    document.getElementById('nextBtn').click();
                    window.scrollTo(0, 0);
                    _this.status = false;
                });
            }
            else
                _this.selectPremiseBtnDisabled[index] = false;
        }, function () { _this.selectPremiseBtnDisabled[index] = false; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('premises'),
        __metadata("design:type", Object)
    ], EnrollProcessComponent.prototype, "target", void 0);
    EnrollProcessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'enroll-process',
            template: __webpack_require__("./src/app/Container/main/enroll-process.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__Store_Services_enroll_service__["a" /* EnrollmentService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__always_auth_service__["f" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__Store_Services_enroll_service__["a" /* EnrollmentService */], __WEBPACK_IMPORTED_MODULE_7__enrollment_enrollment_component__["b" /* EnrollmentComponent */]])
    ], EnrollProcessComponent);
    return EnrollProcessComponent;
}());

var OurCommunityComponent = /** @class */ (function () {
    function OurCommunityComponent(recapcha, snackBar, community, changeDetectorRef) {
        this.recapcha = recapcha;
        this.snackBar = snackBar;
        this.community = community;
        this.changeDetectorRef = changeDetectorRef;
        this.showSpinner = false;
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')]),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]*$')]),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required)
        });
    }
    OurCommunityComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    OurCommunityComponent.prototype.submit = function () {
        var _this = this;
        var status = this.recapcha.check();
        if (status == false) {
            this.cap_result = "Please re-enter text";
        }
        else {
            this.cap_result = "";
        }
        if (this.myForm.valid && status == true) {
            var obj = this.myForm.value;
            this.community.community(obj).subscribe(function () {
            }, function () {
                _this.snackBar.open("Server not responding", 'close', {
                    duration: 1000
                });
            });
            this.froms.nativeElement.reset();
            this.changeDetectorRef.detectChanges();
        }
    };
    Object.defineProperty(OurCommunityComponent.prototype, "f", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], OurCommunityComponent.prototype, "froms", void 0);
    OurCommunityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'our-community',
            template: __webpack_require__("./src/app/Container/main/community.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__recapcha_recapcha_service__["a" /* RecapchaService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__Container_Store_Services__["d" /* MainService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], OurCommunityComponent);
    return OurCommunityComponent;
}());

var EstablishContractsComponent = /** @class */ (function () {
    function EstablishContractsComponent(recapcha, changeDetectorRef, contact, snackBar) {
        this.recapcha = recapcha;
        this.changeDetectorRef = changeDetectorRef;
        this.contact = contact;
        this.snackBar = snackBar;
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]),
            mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')]),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required])
        });
    }
    EstablishContractsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    EstablishContractsComponent.prototype.submit = function () {
        var _this = this;
        var status = this.recapcha.check();
        if (status == false) {
            this.cap_result = "Please re-enter text";
        }
        else {
            this.cap_result = "";
        }
        if (this.myForm.valid && status == true) {
            this.btnDisabled = true;
            this.contact.establishContact(this.myForm.value).subscribe(function (res) {
                if (res['status']) {
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("" + res['message'], '', "success").then(function () {
                        _this.btnDisabled = false;
                        _this.froms.nativeElement.reset();
                        _this.changeDetectorRef.detectChanges();
                    });
                }
                else {
                    _this.btnDisabled = false;
                    _this.snackBar.open(" Something went wrong, please try again later.", 'close', {
                        duration: 1000
                    });
                }
            }, function () {
                _this.btnDisabled = false;
                _this.snackBar.open(" Something went wrong, please try again later.", 'close', {
                    duration: 1000
                });
            });
        }
    };
    Object.defineProperty(EstablishContractsComponent.prototype, "f", {
        get: function () { return this.myForm.controls; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], EstablishContractsComponent.prototype, "froms", void 0);
    EstablishContractsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-establish-contracts',
            template: __webpack_require__("./src/app/Container/main/establish-contracts.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__recapcha_recapcha_service__["a" /* RecapchaService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2__Container_Store_Services__["d" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBar */]])
    ], EstablishContractsComponent);
    return EstablishContractsComponent;
}());

var HelpComponent = /** @class */ (function () {
    function HelpComponent(route, recapcha, changeDetectorRef, contact, snackBar, dialog, http) {
        this.route = route;
        this.recapcha = recapcha;
        this.changeDetectorRef = changeDetectorRef;
        this.contact = contact;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.http = http;
        this.featureSelected = 'firstDiv';
        this.tabIndex = 0;
        this.tdsps = [];
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')]),
            question: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            message: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('')
        });
        this.OurPlans = false;
        this.OurPlan = false;
        this.password = false;
        this.correct = false;
        this.err = false;
        this.priceSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatTableDataSource */]();
        this.priceSources = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatTableDataSource */]();
        this.priceColumns = ['year', 'centerpoint', 'oncor', 'aep_central', 'aep_north', 'tnmp'];
        this.priceColumn = ['month', 'price'];
    }
    HelpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            if (parseInt(res.tabNo) >= 0 && parseInt(res.tabNo) < 7) {
                _this.tabIndex = parseInt(res.tabNo);
            }
        });
        window.scrollTo(0, 0);
        this.http.get(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].url + "portal/our-m2m-plan/").subscribe(function (res) {
            _this.priceSources.data = res['message'];
        });
        this.http.get(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].url + "portal/tdsp-rates/").subscribe(function (res) { return _this.tdsps = res['message']; });
        this.http.get(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].url + "portal/advantage-prime/").subscribe(function (res) {
            _this.priceSource.data = res['message'];
        });
    };
    HelpComponent.prototype.Submit = function () {
        var _this = this;
        var status = this.recapcha.check();
        if (status == false) {
            this.cap_result = "Please re-enter text";
        }
        else {
            this.cap_result = "";
        }
        if (this.myForm.valid && status == true) {
            var obj = this.myForm.value;
            this.contact.helpContact(obj).subscribe(function () {
            }, function () {
                _this.snackBar.open("Server not responding", 'close', {
                    duration: 1000
                });
            });
            this.froms.nativeElement.reset();
            this.changeDetectorRef.detectChanges();
        }
    };
    Object.defineProperty(HelpComponent.prototype, "f", {
        get: function () {
            return this.myForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    HelpComponent.prototype.plansTable = function () {
        if (this.OurPlans == true) {
            this.OurPlans = false;
        }
        else {
            this.OurPlans = true;
            this.OurPlan = false;
        }
    };
    HelpComponent.prototype.planTable = function () {
        if (this.OurPlan == true) {
            this.OurPlan = false;
        }
        else {
            this.OurPlan = true;
            this.OurPlans = false;
        }
    };
    HelpComponent.prototype.toggle = function (selectedSection) {
        this.featureSelected = selectedSection;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('help'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HelpComponent.prototype, "froms", void 0);
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-help',
            template: __webpack_require__("./src/app/Container/main/help.component.html"),
            styles: [__webpack_require__("./src/app/Container/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_9__recapcha_recapcha_service__["a" /* RecapchaService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2__Container_Store_Services__["d" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/Container/main/plans.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row padding-top-bottom\">\n        <div class=\"col-lg-12 text-center\">\n            <div class=\"title-plan\">\n                <h1 class=\"energy-heading\">POWERING TEXAS <span>ONE SMILE AT A TIME.</span></h1>\n            </div>\n            <h2 class=\"sub-heading\">OUR ENERGY RESIDENTIAL AND COMMERCIAL ELECTRICITY. VIEW OUR RATES AND PLANS. SIGN UP NOW AND ENJOY THE DIFFERENCE!</h2>\n        </div>\n    </div>\n    <div class=\"row padding-top-bottom\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center\">\n            <a routerLink=\".\" class=\"d-inline-block full-radius\">\n                <img class=\"full-radius\" src=\"../assets/img/RESIDENTIAL-ELECTRICITY.png\">\n            </a>\n            <h2 class=\"sub-heading\">RESIDENTIAL ELECTRICITY</h2>\n            <p class=\"energy-tips-detail\">\n                We encourage you to compare electricity rates and service levels. OUR Energy stands out on top of all other electric companies in Texas.\n            </p>\n            <p style=\"margin-top:34px;\">\n                <strong>Make the switch now.</strong> You’ll never look back!\n            </p>\n            <button type=\"button\" class=\"btn-refer text-uppercase\" [routerLink]=\"['/search-plan', '']\">\n        <i class=\"fa fa-location-arrow\"></i>\n        Find Your plan\n      </button>\n            <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                            <h4 class=\"modal-title text-center\">Find Your plan</h4>\n                            <button type=\"button\" data-dismiss=\"modal\" style=\"background-color:#000;\"></button>\n                        </div>\n                        <form>\n                            <div class=\"modal-body\">\n                                <div class=\"form-group\">\n                                    <div class=\"input-group mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 float-left\">\n                                        <div class=\"input-group-prepend float-left\">\n                                            <span class=\"input-group-text font-size-16\">Zip Code</span>\n                                        </div>\n                                        <input type=\"text\" class=\"form-control width-50\" id=\"zip-code\" placeholder=\"Zip Code\">\n                                    </div>\n                                    <div class=\"input-group mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 float-left\">\n                                        <div class=\"input-group-prepend float-left\">\n                                            <span class=\"input-group-text font-size-16\">Promo Code</span>\n                                        </div>\n                                        <input type=\"text\" class=\"form-control width-50\" id=\"promo-code\" placeholder=\"Promo Code\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button class=\"btn btn-danger background-red float-right\">Search</button>\n                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                            </div>\n                        </form>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center\">\n            <a routerLink=\".\" class=\"d-inline-block full-radius\">\n                <img class=\"full-radius\" src=\"../assets/img/COMMERCIAL-ELECTRICITY.png\">\n            </a>\n            <h2 class=\"sub-heading\">COMMERCIAL ELECTRICITY</h2>\n            <p class=\"energy-tips-detail\">\n                <strong>Hire us and we’ll help you save money. </strong>OUR Energy LLC specializes in helping Texas businesses reduce their energy rates far better than other electricity companies.\n            </p>\n            <p>\n                Get your <strong>FREE</strong> Customized Commercial Quote Today!\n            </p>\n            <a routerLink=\"/commercial\" class=\"btn-refer text-uppercase\">\n                <i class=\"fa fa-location-arrow\"></i> Find Your Solution\n            </a>\n        </div>\n\n    </div>\n</div>\n<div class=\"member-special\">\n    <div class=\"container\">\n        <h3 class=\"title\">YOU'RE JUST IN TIME!</h3>\n        <p>SIGN UP TODAY AND TAKE ADVANTAGE OF THE OUR ENERGY MEMBER SPECIALS! <br/> JUST ANOTHER GREAT REASON TO SWITCH!</p>\n        <button class=\"btn btn-lg\" routerLink=\"/special\">CHECK OUT THEM !</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Container/main/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tosPrivacyCont\">\n    <div class=\"content\">\n        <h1>Privacy Policy</h1>\n        <p>\n            This privacy notice discloses the privacy practices for\n            <b>www.OurEnergyllc.com.</b> This site is specifically designed for persons who are 18 years of age or older and legally authorized to select or change retail electric providers. This privacy notice applies solely to information collected\n            by this website. It will notify you of the following:\n        </p>\n        <ul>\n            <li>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>\n            <li>What choices are available to you regarding the use of your data.</li>\n            <li>The security procedures in place to protect the misuse of your information.</li>\n            <li>How you can correct any inaccuracies in the information.</li>\n        </ul>\n        <h3>Information and Uses</h3>\n        <p>\n            We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.\n        </p>\n        <p>\n            We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to process a request or order.\n        </p>\n        <p>\n            Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.\n        </p>\n        <h3>Registration</h3>\n        <p>\n            In order to use this website or place an order, a user must first complete the registration form. During registration, a user is required to give certain information (such as name and email address). This information is used to contact you about the products/services\n            on our site in which you have expressed interest. At your option, you may also provide demographic information (such as gender or age) about yourself, but it is not required.\n        </p>\n        <h3>Your Access to and Control Over Information</h3>\n        <p>\n            You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:\n        </p>\n        <ul>\n            <li>See what data we have about you if any.</li>\n            <li>Change/correct any data we have about you.</li>\n            <li>Have us delete any data we have about you.</li>\n            <li>Express any concern you have about our use of your data.</li>\n        </ul>\n        <h3>Customer Enrollment</h3>\n        <p>\n            We request information from you on our enrollment form. To enroll with us, you must provide personnel information (like name, social security number, state id, and service address) and financial information (like credit card number, expiration date).\n            This information is used for billing purposes and to complete your enrollment request. We will use this information to contact you.\n        </p>\n        <h3>Links</h3>\n        <p>\n            This website may contain links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any\n            other site that collects personally identifiable information.\n        </p>\n        <h3>Surveys & Contests</h3>\n        <p>\n            From time-to-time our site requests information via surveys or contests. Participation in these surveys or contests is completely voluntary and you may choose whether or not to participate and therefore disclose this information. Information requested\n            may include contact information (such as name and shipping address), and demographic information (such as zip code, age level). Contact information will be used to notify the winners and award prizes. Survey information will be used for purposes\n            of monitoring or improving the use and satisfaction of this site.\n        </p>\n        <h3>Security </h3>\n        <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. Wherever we collect sensitive information (such as Personnel Information, Social Security\n            Number, Credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for “https” at the beginning of the address of the Web page.\n        </p>\n        <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, Enrollment, Billing or Customer Service) are\n            granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.\n        </p>\n        <h3>Legal Obligations</h3>\n        <p>Our Energy will disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to (a) confirm to the edicts of the law or comply with legal process served on Our energy\n            or the site; (b) protect and defend the rights or property of Our Energy; and, (c) act under exigent circumstances to protect the personal safety of users of Our Energy, or the public.\n        </p>\n        <h3>Changes to this Statement</h3>\n        <p>Our Energy will occasionally update this Statement of Privacy to reflect company and customer feedback. Our Energy encourages you to periodically review this Statement to be informed of how Our Energy is protecting and using your information.</p>\n        <p>If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at\n            <b>281.552.8390</b> or CustomerService@ourenergyllc.com.</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Container/main/residentials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid container\">\r\n        <section class=\"for-home container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"img\">\r\n                        <img src=\"../../../assets/img/home-1.png\" alt=\"\">\r\n                        </div>\r\n                        <h3>Quality & Affordable Residential Plans</h3>\r\n                        <p>We offer a broad range of competitively priced electricity plans designed to meet your needs. Our Energy provides residential power to communities throughout Texas. We provide customers with affordable electricity plans including renewable energy plans.</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"img\">\r\n                        <img src=\"../../../assets/img/home-2.png\" alt=\"\">\r\n                        </div>\r\n                        <h3>Same Day Move-in</h3>\r\n                        <p>Whether you’re looking for electricity providers Houston, electric companies in Dallas or Fort Worth electric companies we’ll make your move a breeze! We offer same day move in’s as well as out of cycle switches.</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center col-lg-12\">\r\n                    <button class=\"btn s_en_plans\"  routerLink=\"/search-plan\">\r\n                        Search for energy plans\r\n                    </button>               \r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n\r\n\r\n        <!-- <section class=\"residential-main\">\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                  <h3 class=\"text-center\">Quality & Affordable Residential Plans</h3>\r\n                  <p>\r\n                      We offer a broad range of competitively priced electricity plans designed to meet your needs. Our Energy provides residential power to communities throughout Texas. We provide customers with affordable electricity plans including renewable energy plans.\r\n                  </p>\r\n                </div>\r\n                <div class=\"text-center pd-10\">\r\n                  <button class=\"btn\"  routerLink=\"/search-plan\">\r\n                      Search for energy plans\r\n                  </button>               \r\n                </div>\r\n            \r\n                <div class=\"col-sm-12\">\r\n                    <h3 class=\"text-center\">Same Day Move-in</h3>\r\n                    <p>\r\n                        Whether you’re looking for electricity providers Houston, electric companies in Dallas or Fort Worth electric companies we’ll make your move a breeze! We offer same day move in’s as well as out of cycle switches.\r\n                    </p>\r\n                </div>\r\n          </div>\r\n            <!-- <div class=\"heading\">\r\n                <h3>Our Energy Residential Electricity</h3>\r\n            </div> -->\r\n            <!-- <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                    <div class=\"residential-tabs\" (click)=\"tab1()\">\r\n                        <img src=\"https://storage.wattcrm.com/wattcrm-images/pics/Residential/NewCustomer.jpg\" width=\"300px\" class=\"pics\">\r\n                        <mat-card-title>New Customer</mat-card-title>\r\n                        <p style=\"text-align: center;\"> We encourage you to compare electricity rates and service levels.\r\n                            <span> Make the switch now.</span> You’ll never look back!</p>\r\n                        <button  routerLink=\"/search-plan\" class=\"btn\">FIND YOUR PLAN</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                    <div class=\"residential-tabs\" (click)=\"tab2()\">\r\n                        <img src=\"https://storage.wattcrm.com/wattcrm-images/pics/Residential/RenewResidentialOP.jpg\" width=\"300px\" class=\"pics\">\r\n                        <mat-card-title>Renew Residential</mat-card-title>\r\n                        <p style=\"text-align: center;\">\r\n                            <span> Welcome back!</span> It’s our privilege to continue providing you with the most affordable Texas electricity rates with the premium service that you deserve.</p>\r\n                        <button  routerLink=\"/login\" class=\"btn\">RENEW YOUR SERVICE</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n                    <div class=\"residential-tabs\" (click)=\"tab3()\">\r\n                        <img src=\"https://storage.wattcrm.com/wattcrm-images/pics/Residential/payyourbillop1.jpg\" width=\"300px\" class=\"pics\">\r\n                        <mat-card-title>Pay Your Bill</mat-card-title>\r\n                        <p style=\"text-align: center;\">\r\n                            <span>Safe. Secure. Hassle Free.</span> This will not interrupt your busy schedule. You’ll you wish that everything was just as easy!</p>\r\n                        <button  routerLink=\"/login\" class=\"btn\">PAY ONLINE NOW</button>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n            <!-- <div class=\"residential-two\">\r\n                <mat-card class=\"residential-tabs\" *ngIf=\"tabOne\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xm-12\">\r\n                            <img class=\"width-full\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/Residential/NewCustomer.jpg\">\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xm-12\">\r\n                            <p>Are you tired of run of the mill energy providers in Texas? Make the switch now. You’ll never look back!\r\n                            </p>\r\n                            <p>\r\n                                <span> We encourage you to compare electricity rates and service levels.</span> Other power and light companies just don’t measure up to the OUR Energy llc high quality standards. Act now and take advantage of our affordable\r\n                                residential electricity prices. Your ideal Texas energy plan is only a click away!\r\n                            </p>\r\n                            <p>\r\n                                <span> You have the Power to Choose Texas! Make the Right Choice Today!</span>\r\n                            </p>\r\n                            <button  class=\"btn1\" routerLink=\"/search-plan\">SIGN UP TODAY!\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n                <mat-card class=\"residential-tabs\" *ngIf=\"tabTwo\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xm-12\">\r\n                            <img class=\"width-full\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/Residential/RenewResidentialOP.jpg\">\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xm-12\">\r\n                            <p>\r\n                                <span> Welcome back!</span> It’s our privilege to continue providing you with the most affordable Texas electricity rates with the premium service that you deserve. It’s not just about our select energy services. We are\r\n                                all about personalized attention and premium extras. At Our Energy LLC, we constantly seek out new ways to better serve you. We promise to set ourselves apart from the usual humdrum of traditional electric providers.\r\n                            </p>\r\n                            <p> You have entrusted us with the essential task of providing your home with electrical energy. For this reason, we’ve made it our mission to go above and beyond your expectations of a quality electric company. As a member of\r\n                                the Our Energy family, you are invited to partake in our exclusive\r\n                                <span>Member specials.</span> <a routerLink=\"/special\">Check them out today!</a>\r\n                            </p>\r\n                            <p>Have a question about your local Texas electric rates? Do you have any suggestions on how we can improve our TX energy service?\r\n                                <span>We welcome and encourage your questions and valuable customer feedback.</span> Please feel free to\r\n                                <a routerLink=\"/contact\"> contact our friendly support team.</a> It is our pleasure to serve you. You have the Power to Choose Texas! Make the Right Choice Today!\r\n                            </p>\r\n                            <button  routerLink=\"/login\" class=\"btn1\">RENEW TODAY!</button>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n                <mat-card class=\"residential-tabs\" *ngIf=\"tabThree\">\r\n                    <p>\r\n                        <span>Safe. Secure. Hassle Free.</span>\r\n                    </p>\r\n                    <p> This will not interrupt your busy schedule. You’ll you wish that everything was just as easy</p>\r\n                    <button  routerLink=\"/login\" class=\"btn1\">PAY ONLINE NOW</button>\r\n                </mat-card>\r\n\r\n            </div>\r\n        </section> -->\r\n    </div>\r\n</div>\r\n<div class=\"member-special four_Steps\">\r\n    <div class=\"container\">\r\n        <!-- <h3 class=\"title\">Member Special</h3>\r\n        <p>Sign Up Today And Take Advantage Of The Latest And Greatest Our Energy Member Specials!\r\n               <br> You'll Find Raffles, Freebies, Credit Giveaways And More!</p>\r\n        <button class=\"btn btn-warning btn-lg\" routerLink=\"/special\">GO NOW!\r\n        </button> -->\r\n\r\n\r\n        <div class=\"count-on\">\r\n            <h3 class=\"text-center\">You Can Count On Our Energy</h3>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"holder\" data-toggle=\"collapse\" data-target=\"#demo\">\r\n                  <i class=\"fa fa-calculator\" aria-hidden=\"true\"></i>\r\n                  <h4>save money</h4>\r\n                  <p>Better service at better price</p>\r\n                  <div id=\"demo\" class=\"collapse\">\r\n                    <p>\r\n                      <strong>Our commitment is to supply our customers with reliable and dependable energy at a competitive\r\n                        rate.</strong>\r\n                    </p>\r\n                    <p>We take all of the guesswork out of how to save money on your power bill. Our energy market analysts\r\n                      negotiate and pre-purchase massive volumes of electricity enabling us to pass along the energy savings\r\n                      to you. REAL-TIME\r\n                      rates and pricing means real savings for you. At OUR Energy we provide customized pricing solutions\r\n                      tailored to meet your individual needs.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"holder\" data-toggle=\"collapse\" data-target=\"#demo1\">\r\n                  <i class=\"fa fa-scissors\" aria-hidden=\"true\"></i>\r\n                  <h4>hassle free</h4>\r\n        \r\n                  <p>Cut through all of the red tape!</p>\r\n                  <div id=\"demo1\" class=\"collapse\">\r\n                    <p>\r\n                      <strong>At OUR Energy, we are always looking for new ways to help make your life easier.</strong>\r\n                    </p>\r\n                    <p>We understand that time is money, which is why we offer same day move-ins and out-of-cycle switches.\r\n                      Manage all aspects of your energy service very easily online through your\r\n                      My Account portal. Visit our website regularly to take advantage of a\r\n                      wealth of information such as energy saving tips , industry updates as well as an intuitive\r\n                      Help Center. We simplify the complex energy market to make it easier for\r\n                      you.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"holder\" data-toggle=\"collapse\" data-target=\"#demo2\">\r\n                  <i class=\"material-icons\">wb_sunny</i>\r\n                  <h4>quality services</h4>\r\n                  <p>Total quality care specialists</p>\r\n                  <div id=\"demo2\" class=\"collapse\">\r\n                    <p>\r\n                      <strong>Building solid, long lasting relationships one customer at a time is the focus of the OUR\r\n                        Energy Team.</strong>\r\n                    </p>\r\n                    <p>We incorporate quality into every aspect of our business through our intuitive account management\r\n                      system, fully scalable and customizable residential and commercial power services, as well as your personal Customer Care\r\n                      Specialist to cater to your individual needs. Experience first hand how we stand out from all other\r\n                      Texas energy companies!</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n           \r\n          </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Container/main/search-plan.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!showPlans && !showTdsp\" class=\"main-content\">\r\n        <div class=\"container\">\r\n            <section class=\"residential-main\">\r\n                <div class=\"heading\">\r\n                    <h1>Search Your Plan</h1>\r\n                </div>\r\n                <form style=\"margin-top: 35px; margin-bottom: 15px !important;\" class=\"plan-main mat-elevation-z8\">\r\n                    <mat-form-field>\r\n                        <mat-label>Zip Code</mat-label>\r\n                        <input matInput placeholder=\"Please Enter Zip Code\" #input maxlength=\"5\" [formControl]=\"zip_code\" name=\"zip\" [(ngModel)]='ZipCode'>\r\n                        <mat-icon matSuffix>place</mat-icon>\r\n                        <mat-error *ngIf=\"zip_code.hasError('pattern')\">\r\n                            Invalid Zip Code\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"zip_code.hasError('required')\">\r\n                            Zip Code is required\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <mat-label>Promo Code</mat-label>\r\n                        <input matInput placeholder=\"Please Enter Promo Code\" name=\"promo\" [(ngModel)]=\"promoCode\">\r\n                        <mat-icon matSuffix>my_location</mat-icon>\r\n                    </mat-form-field>\r\n                    <button  [disabled]=\"submitBtnDisabled\" style=\"width:300px;\" (click)=\"submit()\">Search Plans</button>\r\n                </form>\r\n            </section>\r\n        </div>\r\n    </div>\r\n    <div class=\"showError\" *ngIf=\"showError\">\r\n        <mat-error style=\"margin-bottom: 25px\"><b><h4>{{error}}</h4></b></mat-error>\r\n    </div>\r\n    <div class=\"spinner\" *ngIf=\"showSpinner\" style=\"margin-top: 30px;\">\r\n        <img src=\"../../../assets/img/Spinner-new.svg\" width=\"150\" height=\"150\" alt=\"logo\">\r\n    </div>\r\n    <div *ngIf=\"!showPlans && !showTdsp\" style=\"margin-top:150px\"></div>\r\n    <div *ngIf=\"showPlans\">\r\n        <div class=\"container residential-main\">\r\n            <div class=\"heading\">\r\n                <h1 class=\"text-center\">Select your Energy Plan</h1>\r\n                <h4 style=\"color:#555\" class=\"text-center\">Based on your Zip Code, here are the plans we offer.</h4>\r\n            </div>\r\n        </div>\r\n    \r\n        <!-- Start filter bar -->\r\n        <div class=\"container filter-bar\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-5 col-sm-5 estimated text-center\">\r\n                    <label class=\"heading\">\r\n                        Estimated Usage\r\n                    </label>\r\n                    <mat-radio-group [(ngModel)]=\"estimatedUsage\" class=\"text-center col-lg-12 col-md-12 col-sm-12 col-sm-12\">\r\n                        <mat-radio-button color=\"primary\" value=\"500\">\r\n                            <p class=\"radioText\">500 kWh</p>\r\n                        </mat-radio-button>\r\n                        <mat-radio-button color=\"primary\" value=\"1000\" >\r\n                            <p class=\"radioText\">1000 kWh</p>\r\n                        </mat-radio-button>\r\n                        <mat-radio-button color=\"primary\" value=\"2000\" checked=\"true\">\r\n                            <p class=\"radioText\">2000 kWh</p>\r\n                        </mat-radio-button>\r\n                    </mat-radio-group>\r\n                </div>\r\n                <div class=\"col-lg-8 col-md-7 col-sm-7 contract-list text-center\">\r\n                    <label class=\"heading\">\r\n                        Contract Terms\r\n                    </label>\r\n                    <section class=\"\">\r\n                        <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term1\" class=\"\">\r\n                            <p>36 Months</p>\r\n                        </mat-slide-toggle>\r\n                        <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term2\" class=\"\">\r\n                            <p>24 Months</p>\r\n                        </mat-slide-toggle>\r\n                        <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term3\" class=\"\">\r\n                            <p>18 Months</p>\r\n                        </mat-slide-toggle>\r\n                        <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term4\" class=\"\">\r\n                            <p>14 Months</p>\r\n                        </mat-slide-toggle>\r\n                        <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term5\" class=\"\">\r\n                            <p>12 Months</p>\r\n                        </mat-slide-toggle>\r\n                        <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term6\" class=\"\">\r\n                            <p>6 Months</p>\r\n                        </mat-slide-toggle>\r\n                        <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term7\" class=\"\">\r\n                            <p>5 Months</p>\r\n                        </mat-slide-toggle>\r\n                    </section>\r\n                </div>\r\n                <div class=\"col-md-12 text-center\">\r\n                    <button  (click)=\"showZip()\">Change Zip Code</button>\r\n                    <button  [disabled]=\"submitBtnDisabled2\" (click)=\"filterProduct()\">Apply Filters</button>\r\n                </div>\r\n                <!-- <div class=\"col-lg-3 col-md-3 range-select text-center\">\r\n                    <label class=\"heading\">\r\n                            Price Range\r\n                    </label>\r\n                    <mat-form-field class=\"\">\r\n                        <input matInput maxlength=\"5\" placeholder=\"From\" [formControl]=\"price_from\" [(ngModel)]=\"priceFrom\">\r\n                        <span matSuffix>¢</span>\r\n                        <mat-error *ngIf=\"price_from.hasError('pattern')\">\r\n                            Invalid Input\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"price_from.hasError('min')\">\r\n                            Price is atleast 1¢\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"\">\r\n                        <input matInput maxlength=\"5\" placeholder=\"To\" [formControl]=\"price_to\" [(ngModel)]=\"priceTo\">\r\n                        <span matSuffix>¢</span>\r\n                        <mat-error *ngIf=\"price_to.hasError('pattern')\">\r\n                            Invalid Input\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"price_to.hasError('max')\">\r\n                            Price should be less than 100¢\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div> -->\r\n                <!-- <div class=\"col-lg-12 text-center\">\r\n                        <button  (click)=\"showZip()\">Change Zip Code</button>\r\n                        <button  [disabled]=\"submitBtnDisabled2\" (click)=\"filterProduct()\">Apply Filters</button>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n        <!-- End filter bar -->\r\n        <div class=\"plan-main search_plan_main\">\r\n            <!-- <div class=\"col-lg-3 col-md-3 col-sm-12 col-sm-12 myCard\">\r\n                <br>\r\n                <button  (click)=\"showZip()\">Change Zip Code</button>\r\n                <br>\r\n                <br>\r\n                <h4>Estimated Usage</h4>\r\n                <mat-radio-group [(ngModel)]=\"estimatedUsage\" class=\"text-center col-lg-12 col-md-12 col-sm-12 col-sm-12\">\r\n                    <mat-radio-button color=\"primary\" value=\"500\">\r\n                        <p class=\"radioText\">500 kWh</p>\r\n                    </mat-radio-button>\r\n                    <mat-radio-button color=\"primary\" value=\"1000\" checked=\"true\">\r\n                        <p class=\"radioText\">1000 kWh</p>\r\n                    </mat-radio-button>\r\n                    <mat-radio-button color=\"primary\" value=\"2000\">\r\n                        <p class=\"radioText\">2000 kWh</p>\r\n                    </mat-radio-button>\r\n                </mat-radio-group>\r\n                <br>\r\n                <hr>\r\n                <h4>Contract Terms</h4>\r\n                <section class=\"row\">\r\n                    <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term1\" class=\"spacing col-lg-12 col-md-12 col-sm-6 col-xs-12\">\r\n                        <p>36 Months</p>\r\n                    </mat-slide-toggle>\r\n                    <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term2\" class=\"spacing col-lg-12 col-md-12 col-sm-6 col-xs-12\">\r\n                        <p>24 Months</p>\r\n                    </mat-slide-toggle>\r\n                    <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term3\" class=\"spacing col-lg-12 col-md-12 col-sm-6 col-xs-12\">\r\n                        <p>18 Months</p>\r\n                    </mat-slide-toggle>\r\n                    <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term4\" class=\"spacing col-lg-12 col-md-12 col-sm-6 col-xs-12\">\r\n                        <p>14 Months</p>\r\n                    </mat-slide-toggle>\r\n                    <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term5\" class=\"spacing col-lg-12 col-md-12 col-sm-6 col-xs-12\">\r\n                        <p>12 Months</p>\r\n                    </mat-slide-toggle>\r\n                    <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term6\" class=\"spacing col-lg-12 col-md-12 col-sm-6 col-xs-12\">\r\n                        <p>6 Months</p>\r\n                    </mat-slide-toggle>\r\n                    <mat-slide-toggle color=\"primary\" [(ngModel)]=\"term7\" class=\"spacing col-lg-12 col-md-12 col-sm-6 col-xs-12\">\r\n                        <p>5 Months</p>\r\n                    </mat-slide-toggle>\r\n                </section>\r\n                <hr>\r\n                <h4>Price Range</h4>\r\n                <mat-form-field class=\"col-lg-6 col-md-6 col-sm-6 col-sm-12\">\r\n                    <input matInput maxlength=\"5\" placeholder=\"From\" [formControl]=\"price_from\" [(ngModel)]=\"priceFrom\">\r\n                    <span matSuffix>¢</span>\r\n                    <mat-error *ngIf=\"price_from.hasError('pattern')\">\r\n                        Invalid Input\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"price_from.hasError('min')\">\r\n                        Price is atleast 1¢\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-lg-6 col-md-6 col-sm-6 col-sm-12\">\r\n                    <input matInput maxlength=\"5\" placeholder=\"To\" [formControl]=\"price_to\" [(ngModel)]=\"priceTo\">\r\n                    <span matSuffix>¢</span>\r\n                    <mat-error *ngIf=\"price_to.hasError('pattern')\">\r\n                        Invalid Input\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"price_to.hasError('max')\">\r\n                        Price should be less than 100¢\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <br>\r\n                <button style=\"margin-top:20px\"  [disabled]=\"submitBtnDisabled2\" (click)=\"filterProduct()\">Apply Filters</button>\r\n                <br>\r\n                <br>\r\n            </div> -->\r\n            \r\n            <div class=\"col-md-12 col-sm-12 col-sm-12\">\r\n                <div class=\"showError\" *ngIf=\"showError2\">\r\n                    <mat-error style=\"margin-bottom: 25px\"><b><h4>{{error}}</h4></b></mat-error>\r\n                </div>\r\n                <div class=\"spinner\" *ngIf=\"showSpinner2\" style=\"margin-top: 30px;\">\r\n                    <img src=\"../../../assets/img/fidget_red.gif\" width=\"150\" height=\"150\" alt=\"logo\">\r\n                </div>\r\n                <div *ngIf=\"showFilteredProducts == true\" class=\"search-result\">\r\n                    <div class=\"result-box\" *ngFor=\"let value of products;index as i;\">\r\n                        <div >\r\n                            \r\n                            <div class=\"search-plan\">\r\n                                <h3 class=\"productName\">{{value.product_name}}</h3>\r\n                                <div [ngSwitch]=\"estimatedUsage\" class=\"border_bottom\">\r\n                                    <div class=\"text-center inner price-box\" *ngSwitchCase=\"500\">\r\n                                        <div>\r\n                                           \r\n                                            <h3 >{{value.tariff_500}}¢</h3>\r\n                                            <b >500 kWh</b>\r\n                                        </div>\r\n                                        <!-- this code is comment bu usman khan -->\r\n                                        <!-- <div style=\"display: flex; flex-direction: row;\">\r\n                                            <div style=\"flex: 1; width: 130px;\">\r\n                                                <b style=\"font-size: 15px;\">1000 kWh</b>\r\n                                                <h3 class=\"rs\">{{value.tariff_1000}}¢</h3>\r\n                                            </div>\r\n                                            <div style=\"flex: 1; width: 130px;\">\r\n                                                <b style=\"font-size: 15px;\">2000 kWh</b>\r\n                                                <h3 class=\"rs\">{{value.tariff_2000}}¢</h3>\r\n                                            </div>\r\n                                        </div> -->\r\n                                        <!-- end   -->\r\n                                    </div>\r\n                                    <div class=\"text-center inner price-box\" *ngSwitchCase=\"1000\">\r\n                                        <div>\r\n                                          \r\n                                            <h3 >{{value.tariff_1000}}¢</h3>\r\n                                            <b >per kWh</b>\r\n                                        </div>\r\n                                        <!-- this code is comment bu usman khan -->\r\n                                        <!-- <div style=\"display: flex; flex-direction: row;\">\r\n                                            <div style=\"flex: 1; width: 130px;\">\r\n                                                <b style=\"font-size: 15px;\">500 kWh</b>\r\n                                                <h3 class=\"rs\">{{value.tariff_500}}¢</h3>\r\n                                            </div>\r\n                                            <div style=\"flex: 1; width: 130px;\">\r\n                                                <b style=\"font-size: 15px;\">2000 kWh</b>\r\n                                                <h3 class=\"rs\">{{value.tariff_2000}}¢</h3>\r\n                                            </div>\r\n                                        </div> -->\r\n                                        <!-- end code -->\r\n                                    </div>\r\n                                    <div class=\"text-center inner price-box\" *ngSwitchCase=\"2000\">\r\n                                        <div>\r\n                                          \r\n                                            <h3 >{{value.tariff_2000}}¢</h3>\r\n                                            <b >per kWh</b>\r\n                                        </div>\r\n                                        <!-- this code is comment bu usman khan -->\r\n                                        <!-- <div style=\"display: flex; flex-direction: row;\">\r\n                                            <div style=\"flex: 1; width: 130px;\">\r\n                                                <b style=\"font-size: 15px;\">500 kWh</b>\r\n                                                <h3 class=\"rs\">{{value.tariff_500}}¢</h3>\r\n                                            </div>\r\n                                            <div style=\"flex: 1; width: 130px;\">\r\n                                                <b style=\"font-size: 15px;\">1000 kWh</b>\r\n                                                <h3 class=\"rs\">{{value.tariff_1000}}¢</h3>\r\n                                            </div>\r\n                                        </div> -->\r\n                                        <!-- end code comment -->\r\n                                    </div>\r\n                                    <div class=\"text-center inner price-box\" *ngSwitchDefault>\r\n                                        <div>\r\n                                                <h3 >{{value.tariff_2000}}¢</h3>\r\n                                                <b >per kWh</b>\r\n                                            <!-- <h3 class=\"rs\">{{value.tariff_2000}}¢</h3> -->\r\n                                        </div>\r\n\r\n\r\n                                        <!-- this code i comment by usman khan  start -->\r\n                                        <!-- <div style=\"display: flex; flex-direction: row;\">\r\n                                            <div style=\"flex: 1; width: 130px;\">\r\n                                                <b style=\"font-size: 15px;\">500 kWh</b>\r\n                                                <h3 class=\"rs\">{{value.tariff_500}}¢</h3>\r\n                                            </div>\r\n                                            <div style=\"flex: 1; width: 130px;\">\r\n                                                <b style=\"font-size: 15px;\">2000 kWh</b>\r\n                                                <h3 class=\"rs\">{{value.tariff_2000}}¢</h3>\r\n                                            </div>\r\n                                        </div> -->\r\n                                        <!-- this code isend  -->\r\n                                    </div>\r\n                                    <!--  -->\r\n                                  \r\n                                <!-- <p class=\"tag-line\">\r\n                                    {{value.product_info}}\r\n                                </p> -->\r\n                                </div>\r\n                              <!--  -->\r\n                                \r\n                                <div class=\"main\">\r\n                                    <!-- <div class=\"text-center inner\">\r\n                                        <img src=\"../../../assets/img/Product-image-4.png\" width=\"100px\" height=\"100px\">\r\n                                    </div> -->\r\n                                   \r\n                                    <div class=\"bar\"></div>\r\n                                    <div class=\"inner\">\r\n                                        <div class=\"rateSheet\">\r\n                                            <div >\r\n                                                <span >Contract Term: {{value.display_term}} months</span>\r\n                                                <span >Termination Fee: ${{value.display_termination_fee}}</span>\r\n                                                <span >Utility: {{value.vendor_company}}</span>\r\n                                                <span>Average Rate at 2000 kWhs</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                              \r\n                                    <div class=\"text-center inner links-list\">\r\n                                        <a  matTooltip=\"Terms of Service\" [href]=value.product_tos_url target=\"_blank\"><b>TOS</b></a>\r\n                                        <a  matTooltip=\"Your Rights as a Customer\" href=\"https://www.ourenergyllc.com/prodox/yrac.pdf\" target=\"_blank\"><b>YRAC</b></a>\r\n                                        <a  matTooltip=\"Electric Facts Label\" [href]=value.product_efl_url target=\"_blank\"><b>EFL</b></a>\r\n                                \r\n                                        <button class=\"pink_btn enroll-btn\"  [disabled]=\"selectProductBtnDisabled[i]\" (click)=\"enroll(i)\">Enroll Now</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n    </div>\r\n    <div *ngIf=\"showTdsp\" class=\"residential-main\">\r\n        <div class=\"container\">\r\n            <div class=\"heading\">\r\n                <h1 class=\"text-center\">Select a Utility Provider</h1>\r\n                <h4 style=\"color:#555\" class=\"text-center\">Based on your Zip Code, multiple Utility Providers found serving your area! Please choose your Provider.</h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"container text-center\">\r\n            <div *ngFor=\"let value of tdsps;index as i;\">\r\n                <div class=\"text-center inner\">\r\n                    <div class=\"selectBtn\">\r\n                        <button style=\"width: 450px;\"  (click)=\"searchPlansByTdsps(value.provider_id)\">{{value.provider_name}}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <h1 class=\"text-center\">Or</h1>\r\n        <br>\r\n        <div class=\"container text-center\">\r\n            <div class=\"text-center inner\">\r\n                <div class=\"selectBtn\">\r\n                    <button style=\"width: 450px;\"  (click)=\"showZip()\">Change Zip Code</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n    </div>"

/***/ }),

/***/ "./src/app/Container/main/specials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid con-cumunity\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <h1>Specials</h1>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row padding-top-bottom\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-sm-12\">\n            <img src=\"https://storage.wattcrm.com/wattcrm-images/pics/special/MOneySpecials1.jpg\" class=\"width-full\">\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-sm-12\">\n            <h2 class=\"sub-heading\">OUR ENERGY MEMBER SPECIALS</h2>\n            <p class=\"energy-tips-detail\">\n                Now that you have compared electricity rates and service levels, here’s yet another reason to\n                <a routerLink=\"/plan\" class=\"linkable\">signup</a> with OUR Energy LLC. If you are looking for the finest electric companies in Texas, OUR Energy gives you more!\n            </p>\n            <p class=\"energy-tips-detail\">\n                Get in on all of the cash saving fun! Keep a watchful eye on our Specials so they don’t get away. At OUR Energy we love to reward our loyal members with promotions such as: on the spot specials, weekly, monthly and more! It’s just one of our many ways\n                of saying, “Thanks Y’all!”\n            </p>\n            <h2 class=\"sub-heading\">I WANT IN! HOW DO I PARTICIPATE?</h2>\n            <p class=\"energy-tips-detail\">\n                You don’t want to miss out! Make sure you click LIKE or FOLLOW our Social Media pages. This way you’ll keep up to date on the latest contests, raffles and giveaways. If you are looking for more than your usual energy providers in Texas, OUR Energy gives\n                you more bang for your buck!\n            </p>\n        </div>\n    </div>\n    <div class=\"row padding-top-bottom\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-sm-12\">\n            <h2 class=\"sub-heading\">OUR ENERGY NO LIMIT REFER A FRIEND SPECIAL!</h2>\n            <p class=\"energy-tips-detail\">\n                What could we do to top off our excellent customer service and super low prices? You have a ticket to the No Limit Refer a Friend Table!\n            </p>\n            <h2 class=\"sub-heading\">HOW DOES AN EXTRA $500 SOUND?</h2>\n            <p class=\"energy-tips-detail\">\n                You could get this and much more! There’s NO LIMIT!\n                <br> Enter the OUR Energy Refer a Friend Special and receive Unlimited Member Credits ($25, $100, $100, $500, or more!)\n                <br> Plus, your friends that you refer will all receive FREE Signup Credits as well!\n            </p>\n            <div class=\"text-right width-full\">\n                <a routerLink=\"/no-limit-refer-a-friend\" class=\"btn-refer\">\n                    <i class=\"fa fa-location-arrow\"></i> HURRY AND START REFERRING TODAY!\n                </a>\n            </div>\n            <a routerLink=\"/no-limit-refer-a-friend\" class=\"linkable d-block text-right font-style\">\n        CLICK HERE For Additional Contest Details and Rules.\n      </a>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-sm-12\">\n            <img class=\"width-full\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/special/Referafriend_FacebookInvitebox_Lasso2_WEBSITE_LArger.jpg\">\n        </div>\n    </div>\n\n</div>\n<section class=\"special-banner\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h2>THIS IS YOUR LUCKY DAY! </h2>\n                <p>We’ll keep you glued to your screen and on the edge of your seat for the next riveting special! There’s something for everyone at Our Energy.</p>\n                <h2>HAVE YOU LIKED OUR FACEBOOK PAGE YET?</h2>\n                <p> Oodles of fun and surprises are headed your way!</p>\n                <p>Not an Our Energy customer yet? Sign up now and look out! Sweet deals on cheap electricity or Cool Free Stuff may follow…</p>\n                <iframe src=\"//www.facebook.com/plugins/like.php?href=https://www.ourenergyllc.com/specials/&amp;layout=standard&amp;show_faces=false&amp;action=like&amp;colorscheme=light\" scrolling=\"no\" frameborder=\"0\" allowtransparency=\"true\"></iframe>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"container community\">\n    <h3>CHECK OUT OUR LATEST TEXAS COMMUNITY OUTREACH PROGRAMS</h3>\n    <mat-tab-group>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <a class=\"tools-heading\">All</a>\n            </ng-template>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/Rev-Mothers-Day-SpecialRaffle-OURENERGY-041-1024x536.jpg\" alt=\"Free-Mother's-Day-Spa-Treatment-Raffle-Featured-Image\">\n                    <div class=\"\" style=\"padding: 20px;\">\n                        <h4 style=\"text-align: left\">Free Mother’s Day Spa Treatment Raffle – Valued at $300</h4>\n                        <p style=\"text-align: left\" class=\"margin\">Enter the Free Mother's Day Spa Treatment Raffle In order to show our gratitude for being a loyal www.OurEnergyllc Customer, you are invited to partake in a Free Mother's Day Spa Treatment Raffle, sponsored by the finest Residential\n                            and Business Texas Electricity Company, Our Energy. There is No Purchase Necessary in order to participate! What's [...]</p>\n                        <a routerLink=\"/ourlife/free-mothers-day-spa-treatment-raffle-valued-at-300\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/special/MMP-Blog-1024x536.jpg\" alt=\"March Madness Party\">\n                    <div class=\"\" style=\"padding: 20px;\">\n                        <h4 class=\"margin\" style=\"text-align: left\">March Madness Party</h4>\n                        <a routerLink=\"/Our-blogs/march-madness-part\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/special/Valantine-day-OurEnergy-Blog-1024x536.jpg\" alt=\"ValantinesDiner-Banner\">\n                    <div class=\"\" style=\"padding: 20px;\">\n                        <h4 class=\"margin\" style=\"text-align: left\">FEBRUARY SHARE THE LOVE RAFFLE</h4>\n                        <a routerLink=\"/Our-blogs/february-share-the-love-raffle\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <a class=\"tools-heading\">Our Community</a>\n            </ng-template>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/Rev-Mothers-Day-SpecialRaffle-OURENERGY-041-1024x536.jpg\" alt=\"Free-Mother's-Day-Spa-Treatment-Raffle-Featured-Image\">\n                    <div class=\"\" style=\"padding: 20px;\">\n                        <h4 style=\"text-align: left\">Free Mother’s Day Spa Treatment Raffle – Valued at $300</h4>\n                        <p style=\"text-align: left\" class=\"margin\">Enter the Free Mother's Day Spa Treatment Raffle In order to show our gratitude for being a loyal www.OurEnergyllc Customer, you are invited to partake in a Free Mother's Day Spa Treatment Raffle, sponsored by the finest Residential\n                            and Business Texas Electricity Company, Our Energy. There is No Purchase Necessary in order to participate! What's [...]</p>\n                        <a routerLink=\"/ourlife/free-mothers-day-spa-treatment-raffle-valued-at-300\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/special/MMP-Blog-1024x536.jpg\" alt=\"March Madness Party\">\n                    <div class=\"\" style=\"padding: 20px;\">\n                        <h4 class=\"margin\" style=\"text-align: left\">March Madness Party</h4>\n                        <a routerLink=\"/Our-blogs/march-madness-part\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/special/Valantine-day-OurEnergy-Blog-1024x536.jpg\" alt=\"ValantinesDiner-Banner\">\n                    <div class=\"\" style=\"padding: 20px;\">\n                        <h4 class=\"margin\" style=\"text-align: left\">FEBRUARY SHARE THE LOVE RAFFLE</h4>\n                        <a routerLink=\"/Our-blogs/february-share-the-love-raffle\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n        </mat-tab>\n        <mat-tab>\n            <ng-template mat-tab-label>\n                <a class=\"tools-heading\">Our Energy Buzz</a>\n            </ng-template>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/ourlife/Rev-Mothers-Day-SpecialRaffle-OURENERGY-041-1024x536.jpg\" alt=\"Free-Mother's-Day-Spa-Treatment-Raffle-Featured-Image\">\n                    <div class=\"\" style=\"padding: 20px;\">\n                        <h4 style=\"text-align: left\">Free Mother’s Day Spa Treatment Raffle – Valued at $300</h4>\n                        <p style=\"text-align: left\" class=\"margin\">Enter the Free Mother's Day Spa Treatment Raffle In order to show our gratitude for being a loyal www.OurEnergyllc Customer, you are invited to partake in a Free Mother's Day Spa Treatment Raffle, sponsored by the finest Residential\n                            and Business Texas Electricity Company, Our Energy. There is No Purchase Necessary in order to participate! What's [...]</p>\n                        <a routerLink=\"/ourlife/free-mothers-day-spa-treatment-raffle-valued-at-300\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/special/MMP-Blog-1024x536.jpg\" alt=\"March Madness Party\">\n                    <div class=\"\" style=\"padding: 20px;\">\n                        <h4 class=\"margin\" style=\"text-align: left\">March Madness Party</h4>\n                        <a routerLink=\"/Our-blogs/march-madness-part\" class=\"comunity-read-more\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n                <div class=\"community-tab\">\n                    <img width=\"100%\" src=\"https://storage.wattcrm.com/wattcrm-images/pics/special/Valantine-day-OurEnergy-Blog-1024x536.jpg\" alt=\"ValantinesDiner-Banner\">\n                    <div class=\"\" style=\"padding: 20px;\">\n                        <h4 class=\"margin\" style=\"text-align: left\">FEBRUARY SHARE THE LOVE RAFFLE</h4>\n                        <a routerLink=\"/Our-blogs/february-share-the-love-raffle\" class=\"comunity-read-more margin-top\" title=\"Read more\" target=\"_blank\">Read more</a>\n                    </div>\n                </div>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n</section>\n<div class=\"member-special\">\n    <div class=\"container\">\n        <h3 class=\"title\">SUPERIOR QUALITY TEXAS ELECTRICITY IS NOW AFFORDABLE!</h3>\n        <p>VIEW OUR EXCELLENT RESIDENTIAL OR COMMERCIAL PLANS TODAY!</p>\n        <button class=\"btn btn-warning btn-lg\" routerLink=\"/plan\">VIEW PLANS\n    </button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Container/main/term-condition.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tosPrivacyCont\">\n  <div class=\"content\">\n    <h1>AGREEMENT BETWEEN USER AND OUR ENERGY</h1>\n    <h3>AGREEMENT BETWEEN USER AND OUR ENERGY</h3>\n    <p>The Our Energy Web Site is comprised of various Web pages operated by Our Energy</p>\n    <p>The Our Energy Web Site is offered to you conditioned on your acceptance without modification of the terms, conditions,\n      and notices contained herein. Your use of the OUR Energy Web Site constitutes your agreement to all such terms, conditions,\n      and notices.</p>\n    <h3>MODIFICATION OF THESE TERMS OF USE</h3>\n    <p>Our Energy reserves the right to change the terms, conditions, and notices under which the Our Energy Web Site is offered,\n      including but not limited to the charges associated with the use of the OUR Energy Web Site.</p>\n\n\n    <h3>LINKS TO THIRD PARTY SITES:</h3>\n\n    <p>The Our Energy Web Site may contain links to other Web Sites (“Linked Sites”). The Linked Sites are not under the control\n      of Our Energy and OUR Energy is not responsible for the contents of any Linked Site, including without limitation any\n      link contained in a Linked Site, or any changes or updates to a Linked Site. Our Energy is not responsible for webcasting\n      or any other form of transmission received from any Linked Site. OUR Energy is providing these links to you only as\n      a convenience, and the inclusion of any link does not imply endorsement by Our Energy of the site or any association\n      with its operators.\n\n    </p>\n    <h3>NO UNLAWFUL OR PROHIBITED USE</h3>\n    <p>As a condition of your use of the OUR Energy Web Site, you warrant to OUR Energy that you will not use the OUR Energy\n      Web Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use the\n      OUR Energy Web Site in any manner which could damage, disable, overburden, or impair the OUR Energy Web Site or interfere\n      with any other party’s use and enjoyment of the OUR Energy Web Site. You may not obtain or attempt to obtain any materials\n      or information through any means not intentionally made available or provided for through the OUR Energy Web Sites.\n\n    </p>\n    <h3>USE OF COMMUNICATION SERVICES</h3>\n    <p>The Our Energy Web Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web\n      pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public\n      at large or with a group (collectively, “Communication Services”), you agree to use the Communication Services only\n      to post, send and receive messages and material that are proper and related to the particular Communication Service.\n      By way of example, and not as a limitation, you agree that when using a Communication Service, you will not</p>\n    <ul>\n      <li>Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity)\n        of others.</li>\n      <li>Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent\n        or unlawful topic, name, material or information.</li>\n      <li>Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy\n        of publicity) unless you own or control the rights thereto or have received all necessary consents.</li>\n      <li>Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation\n        of another's computer.</li>\n      <li>Advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Service\n        specifically allows such messages.</li>\n      <li>Conduct or forward surveys, contests, pyramid schemes or chain letters.</li>\n      <li>Download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot\n        be legally distributed in such manner.</li>\n      <li>Falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the\n        origin or source of software or other material contained in a file that is uploaded</li>\n      <li>Restrict or inhibit any other user from using and enjoying the Communication Services.</li>\n      <li>Violate any code of conduct or other guidelines which may be applicable for any particular Communication Service.</li>\n      <li>Harvest or otherwise collect information about others, including e-mail addresses, without their consent.</li>\n      <li>Violate any applicable laws or regulations.</li>\n    </ul>\n    <p> Our Energy has no obligation to monitor the Communication Services. However, OUR Energy reserves the right to review\n      materials posted to a Communication Service and to remove any materials in its sole discretion. OUR Energy reserves\n      the right to terminate your access to any or all of the Communication Services at any time without notice for any reason\n      whatsoever.\n    </p>\n    <p> Our Energy reserves the right at all times to disclose any information as necessary to satisfy any applicable law, regulation,\n      legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole\n      or in part, in OUR Energy’s sole discretion. </p>\n    <p> Always use caution when giving out any personally identifying information about yourself or your children in any Communication\n      Service. OUR Energy does not control or endorse the content, messages or information found in any Communication Service\n      and, therefore, OUR Energy specifically disclaims any liability with regard to the Communication Services and any actions\n      resulting from your participation in any Communication Service. Managers and hosts are not authorized OUR Energy spokespersons,\n      and their views do not necessarily reflect those of OUR Energy. </p>\n    <p>Materials uploaded to a Communication Service may be subject to posted limitations on usage, reproduction and/or dissemination.\n      You are responsible for adhering to such limitations if you download the materials.\n\n    </p>\n    <p>\n      <b>MATERIALS PROVIDED TO OUR Energy OR POSTED AT ANY OUR Energy WEB SITE:</b>\n      OUR Energy does not claim ownership of the materials you provide to OUR Energy (including feedback and suggestions) or post,\n      upload, input or submit to any OUR Energy Web Site or its associated services (collectively “Submissions”). However,\n      by posting, uploading, inputting, providing or submitting your Submission you are granting OUR Energy, its affiliated\n      companies and necessary sublicensees permission to use your Submission in connection with the operation of their Internet\n      businesses including, without limitation, the rights to: copy, distribute, transmit, publicly display, publicly perform,\n      reproduce, edit, translate and reformat your Submission; and to publish your name in connection with your Submission.</p>\n    <p>No compensation will be paid with respect to the use of your Submission, as provided herein. OUR Energy is under no obligation\n      to post or use any Submission you may provide and may remove any Submission at any time in OUR Energy’s sole discretion.</p>\n    <p>By posting, uploading, inputting, providing or submitting your Submission you warrant and represent that you own or otherwise\n      control all of the rights to your Submission as described in this section including, without limitation, all the rights\n      necessary for you to provide, post, upload, input or submit the Submissions.\n\n    </p>\n    <h3>LIABILITY DISCLAIMER</h3>\n    <p>The information, software, products, and services included in or available through the our energy web site may include\n      inaccuracies or typographical errors. Changes are periodically added to the information herein. Our energy and/or its\n      suppliers may make improvements and/or changes in the our energy web site at any time. Advice received via the our\n      energy web site should not be relied upon for personal, medical, legal or financial decisions and you should consult\n      an appropriate professional for specific advice tailored to your situation.</p>\n    <p>Our energy and/or its suppliers make no representations about the suitability, reliability, availability, timeliness,\n      and accuracy of the information, software, products, services and related graphics contained on the Our Energy web\n      site for any purpose. To the maximum extent permitted by applicable law, all such information, software, products,\n      services and related graphics are provided \"as is\" without warranty or condition of any kind. Our Energy and/or its\n      suppliers hereby disclaim all warranties and conditions with regard to this information, software, products, services\n      and related graphics, including all implied warranties or conditions of merchantability, fitness for a particular purpose,\n      title and non-infringement.</p>\n    <p>To the maximum extent permitted by applicable law, in no event shall Our Energy and/or its suppliers be liable for any\n      direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without\n      limitation, damages for loss of use, data or profits, arising out of or in any way connected with the use or performance\n      of the Our Energy web site, with the delay or inability to use the Our Energy web site or related services, the provision\n      of or failure to provide services, or for any information, software, products, services and related graphics obtained\n      through the Our Energy web site, or otherwise arising out of the use of the Our Energy web site, whether based on contract,\n      tort, negligence, strict liability or otherwise, even if Our Energy or any of its suppliers has been advised of the\n      possibility of damages. Because some states/jurisdictions do not allow the exclusion or limitation of liability for\n      consequential or incidental damages, the above limitation may not apply to you. If you are dissatisfied with any portion\n      of the Our Energy web site, or with any of these terms of use, your sole and exclusive remedy is to discontinue using\n      the Our Energy web site.\n    </p>\n    <h4>\n      <b>Service Contant:</b>\n      <span>customerservices@wattcrm.com</span>\n    </h4>\n\n    <h3>TERMINATION/ACCESS RESTRICTION:</h3>\n    <p>Our Energy reserves the right, in its sole discretion, to terminate your access to the Our Energy Web Site and the related\n      services or any portion thereof at any time, without notice. GENERAL To the maximum extent permitted by law, this agreement\n      is governed by the laws of the State of Washington, U.S.A. and you hereby consent to the exclusive jurisdiction and\n      venue of courts in San Mateo County, California, U.S.A. in all disputes arising out of or relating to the use of the\n      Our Energy Web Site. Use of the Our Energy Web Site is unauthorized in any jurisdiction that does not give effect to\n      all provisions of these terms and conditions, including without limitation this paragraph. You agree that no joint\n      venture, partnership, employment, or agency relationship exists between you and Our Energy as a result of this agreement\n      or use of the Our Energy Web Site. Our Energy's performance of this agreement is subject to existing laws and legal\n      process, and nothing contained in this agreement is in derogation of Our Energy's right to comply with governmental,\n      court and law enforcement requests or requirements relating to your use of the Our Energy Web Site or information provided\n      to or gathered by Our Energy with respect to such use. If any part of this agreement is determined to be invalid or\n      unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations\n      set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision\n      that most closely matches the intent of the original provision and the remainder of the agreement shall continue in\n      effect. Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and Our\n      Energy with respect to the Our Energy Web Site and it supersedes all prior or contemporaneous communications and proposals,\n      whether electronic, oral or written, between the user and Our Energy with respect to the Our Energy Web Site. A printed\n      version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative\n      proceedings based upon or relating to this agreement to the same extent an d subject to the same conditions as other\n      business documents and records originally generated and maintained in printed form. It is the express wish to the parties\n      that this agreement and all related documents be drawn up in English.</p>\n    <h3> TRADEMARKS</h3>\n    <p>The names of actual companies and products mentioned herein may be the trademarks of their respective owners.</p>\n\n    <p>The example companies, organizations, products, people and events depicted herein are fictitious. No association with\n      any real company, organization, product, person, or event is intended or should be inferred.</p>\n    <p>Any rights not expressly granted herein are reserved.</p>\n    <h3>NOTICES AND PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT INFRINGEMENT:</h3>\n    <p>Pursuant to Title 17, United States Code, Section 512(c)(2), notifications of claimed copyright infringement under United\n      States copyright law should be sent to Service Provider's Designated Agent. </p>\n    <p>\n      <b>ALL INQUIRIES NOT RELEVANT TO THE FOLLOWING PROCEDURE WILL RECEIVE NO RESPONSE.</b> See Notice and Procedure for Making\n      Claims of Copyright Infringement. </p>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/CustomDirectives/CustomValidation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CreditCardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SocialSecurityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PhoneNumberDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockCopyPasteDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HighlightSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreditCardDirective = /** @class */ (function () {
    function CreditCardDirective() {
    }
    CreditCardDirective.prototype.onKeyDown = function (event) {
        var input = event.target;
        var trimmed = input.value.replace(/[-]+/g, '');
        if (trimmed.length > 16) {
            trimmed = trimmed.substr(0, 16);
        }
        var numbers = [];
        for (var i = 0; i < trimmed.length; i += 4) {
            numbers.push(trimmed.substr(i, 4));
        }
        input.value = numbers.join('-');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CreditCardDirective.prototype, "onKeyDown", null);
    CreditCardDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[credit-card]'
        })
    ], CreditCardDirective);
    return CreditCardDirective;
}());

var SocialSecurityDirective = /** @class */ (function () {
    function SocialSecurityDirective() {
    }
    SocialSecurityDirective.prototype.onKeyDown = function (event) {
        var input = event.target;
        var trimmed = input.value.replace(/[-]+/g, '');
        if (trimmed.length > 9) {
            trimmed = trimmed.substr(0, 9);
        }
        var numbers = [];
        for (var i = 0; i < trimmed.length; i += this.num) {
            if (i == 0) {
                this.num = 3;
            }
            if (i == 1) {
                this.num = 3;
            }
            if (i == 2) {
                this.num = 3;
            }
            if (i == 3) {
                this.num = 2;
            }
            if (i == 4) {
                this.num = 2;
            }
            if (i == 5) {
                this.num = 4;
            }
            if (i == 6) {
                this.num = 4;
            }
            if (i == 7) {
                this.num = 4;
            }
            if (i == 8) {
                this.num = 4;
            }
            numbers.push(trimmed.substr(i, this.num));
        }
        input.value = numbers.join('-');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SocialSecurityDirective.prototype, "onKeyDown", null);
    SocialSecurityDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[ssn]'
        })
    ], SocialSecurityDirective);
    return SocialSecurityDirective;
}());

var PhoneNumberDirective = /** @class */ (function () {
    function PhoneNumberDirective() {
    }
    PhoneNumberDirective.prototype.onKeyDown = function (event) {
        var input = event.target;
        var trimmed = input.value.replace(/[-]+/g, '');
        if (trimmed.length > 10) {
            trimmed = trimmed.substr(0, 10);
        }
        var numbers = [];
        for (var i = 0; i < trimmed.length; i += this.num) {
            if (i == 0) {
                this.num = 3;
            }
            if (i == 1) {
                this.num = 3;
            }
            if (i == 2) {
                this.num = 3;
            }
            if (i == 3) {
                this.num = 3;
            }
            if (i == 4) {
                this.num = 3;
            }
            if (i == 5) {
                this.num = 3;
            }
            if (i == 6) {
                this.num = 4;
            }
            if (i == 7) {
                this.num = 4;
            }
            if (i == 8) {
                this.num = 4;
            }
            if (i == 9) {
                this.num = 4;
            }
            numbers.push(trimmed.substr(i, this.num));
        }
        input.value = numbers.join('-');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PhoneNumberDirective.prototype, "onKeyDown", null);
    PhoneNumberDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[phone-no]'
        })
    ], PhoneNumberDirective);
    return PhoneNumberDirective;
}());

var BlockCopyPasteDirective = /** @class */ (function () {
    function BlockCopyPasteDirective() {
    }
    BlockCopyPasteDirective.prototype.blockPaste = function (e) {
        e.preventDefault();
    };
    BlockCopyPasteDirective.prototype.blockCopy = function (e) {
        e.preventDefault();
    };
    BlockCopyPasteDirective.prototype.blockCut = function (e) {
        e.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('paste', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BlockCopyPasteDirective.prototype, "blockPaste", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('copy', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BlockCopyPasteDirective.prototype, "blockCopy", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('cut', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BlockCopyPasteDirective.prototype, "blockCut", null);
    BlockCopyPasteDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[blockCopyPaste]'
        }),
        __metadata("design:paramtypes", [])
    ], BlockCopyPasteDirective);
    return BlockCopyPasteDirective;
}());

var HighlightSearch = /** @class */ (function () {
    function HighlightSearch() {
    }
    HighlightSearch.prototype.transform = function (value, args) {
        var re = new RegExp(args, 'gi');
        return value.replace(re, "<mark>" + args + "</mark>");
    };
    HighlightSearch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'highlight'
        })
    ], HighlightSearch);
    return HighlightSearch;
}());



/***/ }),

/***/ "./src/app/always-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AlwaysAuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OnlyLoggedInUsersGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OnlyLoggedInUsersGuardAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return OnlyLoggedOutUsersGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService() {
        this.datas = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.data = this.datas.asObservable();
        this.datass = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.dataa = this.datass.asObservable();
        this.datass1 = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.dataa1 = this.datass1.asObservable();
    }
    UserService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        var isAdmin = localStorage.getItem('is_admin');
        if (token != null && isAdmin == 'false') {
            return true;
        }
        else {
            return false;
        }
    };
    UserService.prototype.changeData = function (dataa) {
        this.datas.next(dataa);
    };
    UserService.prototype.changeDataa = function (dataa) {
        this.datass.next(dataa);
    };
    UserService.prototype.changeDataa1 = function (dataa1) {
        this.datass1.next(dataa1);
    };
    return UserService;
}());

var AdminService = /** @class */ (function () {
    function AdminService() {
    }
    AdminService.prototype.isAdminLoggedIn = function () {
        var token = localStorage.getItem('token');
        var check = localStorage.getItem('is_admin');
        if (token != null && check == 'true') {
            return true;
        }
        else {
            return false;
        }
    };
    return AdminService;
}());

var AlwaysAuthService = /** @class */ (function () {
    function AlwaysAuthService() {
    }
    AlwaysAuthService.prototype.canActivate = function () {
        return true;
    };
    AlwaysAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AlwaysAuthService);
    return AlwaysAuthService;
}());

var OnlyLoggedInUsersGuard = /** @class */ (function () {
    function OnlyLoggedInUsersGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    OnlyLoggedInUsersGuard.prototype.canActivate = function () {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    OnlyLoggedInUsersGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [UserService, __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], OnlyLoggedInUsersGuard);
    return OnlyLoggedInUsersGuard;
}());

var OnlyLoggedInUsersGuardAdmin = /** @class */ (function () {
    function OnlyLoggedInUsersGuardAdmin(userService, admin, router) {
        this.userService = userService;
        this.admin = admin;
        this.router = router;
    }
    OnlyLoggedInUsersGuardAdmin.prototype.canActivate = function () {
        if (this.admin.isAdminLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    OnlyLoggedInUsersGuardAdmin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [UserService, AdminService, __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], OnlyLoggedInUsersGuardAdmin);
    return OnlyLoggedInUsersGuardAdmin;
}());

var OnlyLoggedOutUsersGuard = /** @class */ (function () {
    function OnlyLoggedOutUsersGuard(userService, admin, router) {
        this.userService = userService;
        this.admin = admin;
        this.router = router;
    }
    OnlyLoggedOutUsersGuard.prototype.canActivate = function () {
        if (this.admin.isAdminLoggedIn()) {
            if (!this.admin.isAdminLoggedIn()) {
                return true;
            }
            else {
                this.router.navigate(['/adminportal']);
            }
        }
        else {
            if (!this.userService.isLoggedIn()) {
                return true;
            }
            else {
                this.router.navigate(['/dashboard']);
            }
        }
    };
    OnlyLoggedOutUsersGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [UserService, AdminService, __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], OnlyLoggedOutUsersGuard);
    return OnlyLoggedOutUsersGuard;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__always_auth_service__ = __webpack_require__("./src/app/always-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forget_password_forget_password_component__ = __webpack_require__("./src/app/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__broker_login_broker_login_component__ = __webpack_require__("./src/app/broker-login/broker-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__ = __webpack_require__("./src/app/Container/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__enrollment_enrollment_component__ = __webpack_require__("./src/app/enrollment/enrollment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Container_business_rate_electricity_business_rate_component__ = __webpack_require__("./src/app/Container/business-rate-electricity/business-rate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__enrollment_success_page_enrollment_success_page_component__ = __webpack_require__("./src/app/enrollment-success-page/enrollment-success-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pay_enroll_deposit_pay_enroll_deposit__ = __webpack_require__("./src/app/pay-enroll-deposit/pay-enroll-deposit.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'adminportal',
        loadChildren: './AdminPortal/Components/DashboardLayout/Admin-Dashboard.module#AdminDashboardModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__always_auth_service__["d" /* OnlyLoggedInUsersGuardAdmin */]],
    },
    {
        path: 'dashboard',
        loadChildren: './Container/Customer-Dashboard/dashboard/dashboard.module#DashboardModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__always_auth_service__["c" /* OnlyLoggedInUsersGuard */]],
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["h" /* MainComponent */] },
            { path: 'payenrolldeposit/:custid', component: __WEBPACK_IMPORTED_MODULE_11__pay_enroll_deposit_pay_enroll_deposit__["a" /* PayEnrollDepositComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__always_auth_service__["e" /* OnlyLoggedOutUsersGuard */]] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["d" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__always_auth_service__["e" /* OnlyLoggedOutUsersGuard */]] },
            { path: 'broker', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["b" /* BrokersComponent */] },
            { path: 'commercial', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["c" /* CommercialComponent */] },
            { path: 'residential', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["m" /* ResidentialsComponent */] },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["a" /* AboutUsComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["f" /* EstablishContractsComponent */] },
            { path: 'term-and-conditions', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["o" /* TermConditionComponent */] },
            { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["l" /* PrivacyPolicyComponent */] },
            { path: 'special', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["n" /* SpecialsComponent */] },
            { path: 'energy-saving', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["d" /* EnergySavingComponent */] },
            { path: 'plan', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["k" /* PlansComponent */] },
            { path: 'help', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["g" /* HelpComponent */] },
            { path: 'help/:tabNo', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["g" /* HelpComponent */] },
            { path: 'community', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["i" /* OurCommunityComponent */] },
            { path: 'reset-password/:username/:email', component: __WEBPACK_IMPORTED_MODULE_5__forget_password_forget_password_component__["b" /* ResetPasswordComponent */] },
            { path: 'business-rates-electricity', component: __WEBPACK_IMPORTED_MODULE_9__Container_business_rate_electricity_business_rate_component__["a" /* BusinessRateComponent */] },
            { path: 'ourlife', loadChildren: 'app/Container/ourlife/ourlife.module#OurlifeModule' },
            { path: 'free-mothers-day-spa-treatment-raffle-valued-at-300', loadChildren: 'app/Container/ourlife/ourlife.module#OurlifeModule' },
            { path: 'texas-new-years-sound-advice-for-2017', loadChildren: 'app/Container/ourlife/ourlife.module#OurlifeModule' },
            { path: 'best-thanksgiving-cranberry-chutney-recipe', loadChildren: 'app/Container/ourlife/ourlife.module#OurlifeModule' },
            { path: 'home-weatherproofing-tips', loadChildren: 'app/Container/ourlife/ourlife.module#OurlifeModule' },
            { path: 'ourlif', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
            { path: 'energy-saving-recipe-national-hot-dog-day', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
            { path: 'best-texas-caviar-recipe', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
            { path: 'ode-texas-fathers', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
            { path: 'texas-thunderstorm-safety-tips', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
            { path: 'nfl-sweepstakes', loadChildren: 'app/ourlif/ourlif.module#OurlifModule' },
            { path: 'blog', loadChildren: 'app/energy/energy.module#EnergyModule' },
            { path: 'find-low-energy-rates-in-2016', loadChildren: 'app/energy/energy.module#EnergyModule' },
            { path: 'putting-texas-energy-into-social-media', loadChildren: 'app/energy/energy.module#EnergyModule' },
            { path: 'our-energy-launches-new-website', loadChildren: 'app/energy/energy.module#EnergyModule' },
            { path: 'texas-no-bake-maple-pecan-pie-bourbon-spiked-cream', loadChildren: 'app/energy/energy.module#EnergyModule' },
            { path: 'green-electricity-for-a-brighter-future', loadChildren: 'app/energy/energy.module#EnergyModule' },
            { path: 'top-five-creative-uses-of-led', loadChildren: 'app/energy/energy.module#EnergyModule' },
            { path: 'summer-energy-saving-tips', loadChildren: 'app/energy/energy.module#EnergyModule' },
            { path: 'first-texas-electricity-outreach-project', loadChildren: 'app/energy/energy.module#EnergyModule' },
            { path: 'seasonal-selfie-of-the-week-freebie-giveaway', loadChildren: 'app/energy/energy.module#EnergyModule' },
            { path: 'no-limit-refer-a-friend', loadChildren: 'app/energy/energy.module#EnergyModule' },
            { path: 'more-than-just-energy-companies-in-fort-worth', loadChildren: 'app/texas/texas.module#TexasModule' },
            { path: 'Our-blogs', loadChildren: 'app/texas/texas.module#TexasModule' },
            { path: 'cheap-texas-energy-round-up', loadChildren: 'app/texas/texas.module#TexasModule' },
            { path: 'more-than-just-energy-companies-in-houston', loadChildren: 'app/texas/texas.module#TexasModule' },
            { path: 'december-nfl-ticket-raffle-winners', loadChildren: 'app/texas/texas.module#TexasModule' },
            { path: 'march-madness-part', loadChildren: 'app/texas/texas.module#TexasModule' },
            { path: 'february-share-the-love-raffle', loadChildren: 'app/texas/texas.module#TexasModule' },
            { path: 'nfl-tickets-raffle', loadChildren: 'app/texas/texas.module#TexasModule' },
            { path: 'first-nfl-sweepstakes-winners', loadChildren: 'app/texas/texas.module#TexasModule' },
            { path: 'green-energy', loadChildren: 'app/texas/texas.module#TexasModule' },
            { path: 'green-energy-news', loadChildren: 'app/texas/texas.module#TexasModule' },
            { path: 'blogs', loadChildren: 'app/business/business.module#BusinessModule' },
            { path: 'our-energy-buzz', loadChildren: 'app/business/business.module#BusinessModule' },
            { path: 'specials-contests', loadChildren: 'app/business/business.module#BusinessModule' },
            { path: 'residential-promotions', loadChildren: 'app/business/business.module#BusinessModule' },
            { path: 'texas', loadChildren: 'app/business/business.module#BusinessModule' },
            { path: 'energy-tips', loadChildren: 'app/business/business.module#BusinessModule' },
            { path: 'business-promotions', loadChildren: 'app/business/business.module#BusinessModule' },
            { path: 'energy-news', loadChildren: 'app/business/business.module#BusinessModule' },
            { path: 'our-community', loadChildren: 'app/business/business.module#BusinessModule' },
            { path: 'posts', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
            { path: '2017/05', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
            { path: '2016/01', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
            { path: '2016/02', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
            { path: '2016/03', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
            { path: '2016/04', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
            { path: '2016/06', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
            { path: '2016/07', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
            { path: '2016/08', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
            { path: '2016/11', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
            { path: '2015/10', loadChildren: 'app/May-blogs/may-blogs.module#MayBlogModule' },
            { path: 'post', loadChildren: 'app/Posts/post.module#PostModule' },
            { path: '2015/11', loadChildren: 'app/Posts/post.module#PostModule' },
            { path: '2015/09', loadChildren: 'app/Posts/post.module#PostModule' },
            { path: '2015/08', loadChildren: 'app/Posts/post.module#PostModule' },
            { path: '2015/07', loadChildren: 'app/Posts/post.module#PostModule' },
            { path: '2017', loadChildren: 'app/Posts/post.module#PostModule' },
            { path: 'enroll', component: __WEBPACK_IMPORTED_MODULE_8__enrollment_enrollment_component__["b" /* EnrollmentComponent */] },
            { path: 'enrollsuccess', component: __WEBPACK_IMPORTED_MODULE_10__enrollment_success_page_enrollment_success_page_component__["a" /* EnrollmentSuccessPageComponent */] },
            { path: 'search-plann/:PromoCode', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["j" /* PlanSearchComponent */] },
            { path: 'search-plan/:ZipCode', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["j" /* PlanSearchComponent */] },
            { path: 'search-plan/:PromoCode/:ZipCode', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["j" /* PlanSearchComponent */] },
            { path: 'search-plan', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["j" /* PlanSearchComponent */] },
            { path: 'process-enroll', component: __WEBPACK_IMPORTED_MODULE_7__Container_main_main_component__["e" /* EnrollProcessComponent */] },
            { path: 'broker-login', component: __WEBPACK_IMPORTED_MODULE_6__broker_login_broker_login_component__["a" /* BrokerLoginComponent */] },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__always_auth_service__ = __webpack_require__("./src/app/always-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_websocket_service__ = __webpack_require__("./node_modules/angular2-websocket-service/lib/index.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_websocket_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_websocket_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forget_password_forget_password_component__ = __webpack_require__("./src/app/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_footer_main_footer_component__ = __webpack_require__("./src/app/main-footer/main-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_header_main_header_component__ = __webpack_require__("./src/app/main-header/main-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__enrollment_enrollment_component__ = __webpack_require__("./src/app/enrollment/enrollment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__ = __webpack_require__("./src/app/Container/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Container_business_rate_electricity_business_rate_component__ = __webpack_require__("./src/app/Container/business-rate-electricity/business-rate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__broker_login_broker_login_component__ = __webpack_require__("./src/app/broker-login/broker-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__AdminPortal_Store__ = __webpack_require__("./src/app/AdminPortal/Store/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__recapcha_recapcha_component__ = __webpack_require__("./src/app/recapcha/recapcha.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__recapcha_recapcha_service__ = __webpack_require__("./src/app/recapcha/recapcha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__enrollment_success_page_enrollment_success_page_component__ = __webpack_require__("./src/app/enrollment-success-page/enrollment-success-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Container_Store_Services__ = __webpack_require__("./src/app/Container/Store/Services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_module__ = __webpack_require__("./src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pay_enroll_deposit_pay_enroll_deposit__ = __webpack_require__("./src/app/pay-enroll-deposit/pay-enroll-deposit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__login_verification_email_verification_email_component__ = __webpack_require__("./src/app/login/verification-email/verification-email.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// import * as Sentry from "@sentry/browser"








// Sentry.init({
//   dsn: "https://e06be21554224e8a8e46fa0743ed7d76@sentry.io/1329724"
// }) 
// @Injectable()
// export class SentryErrorHandler implements ErrorHandler {
//   constructor() { }
//   handleError(error) {
//     Sentry.captureException(error.originalError || error) 
//     throw error 
//   }
// }
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_14__main_footer_main_footer_component__["a" /* MainFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__main_header_main_header_component__["a" /* MainHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["o" /* TermConditionComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["l" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["h" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["m" /* ResidentialsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["c" /* CommercialComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["b" /* BrokersComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["n" /* SpecialsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["d" /* EnergySavingComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["f" /* EstablishContractsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["k" /* PlansComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["g" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_16__enrollment_enrollment_component__["b" /* EnrollmentComponent */],
                __WEBPACK_IMPORTED_MODULE_23__enrollment_success_page_enrollment_success_page_component__["a" /* EnrollmentSuccessPageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pay_enroll_deposit_pay_enroll_deposit__["a" /* PayEnrollDepositComponent */],
                __WEBPACK_IMPORTED_MODULE_16__enrollment_enrollment_component__["a" /* DespositPopup */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["j" /* PlanSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["e" /* EnrollProcessComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Container_main_main_component__["i" /* OurCommunityComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["d" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__forget_password_forget_password_component__["b" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["b" /* QuickPayComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["c" /* QuickPayComponentFinal */],
                __WEBPACK_IMPORTED_MODULE_19__broker_login_broker_login_component__["a" /* BrokerLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__Container_business_rate_electricity_business_rate_component__["a" /* BusinessRateComponent */],
                __WEBPACK_IMPORTED_MODULE_21__recapcha_recapcha_component__["a" /* RecapchaComponent */],
                __WEBPACK_IMPORTED_MODULE_16__enrollment_enrollment_component__["c" /* EnrollmentConsentDialog */],
                __WEBPACK_IMPORTED_MODULE_27__login_verification_email_verification_email_component__["a" /* VerificationEmailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_25__shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_25__shared_module__["a" /* SharedModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["b" /* QuickPayComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["c" /* QuickPayComponentFinal */],
                __WEBPACK_IMPORTED_MODULE_16__enrollment_enrollment_component__["a" /* DespositPopup */],
                __WEBPACK_IMPORTED_MODULE_16__enrollment_enrollment_component__["c" /* EnrollmentConsentDialog */],
                __WEBPACK_IMPORTED_MODULE_27__login_verification_email_verification_email_component__["a" /* VerificationEmailComponent */]
            ],
            providers: [
                // { provide: ErrorHandler, useClass: SentryErrorHandler },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */], useClass: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* HammerGestureConfig */] },
                __WEBPACK_IMPORTED_MODULE_20__AdminPortal_Store__["b" /* DahsboardService */],
                __WEBPACK_IMPORTED_MODULE_11__always_auth_service__["b" /* AlwaysAuthService */],
                __WEBPACK_IMPORTED_MODULE_11__always_auth_service__["f" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_11__always_auth_service__["c" /* OnlyLoggedInUsersGuard */],
                __WEBPACK_IMPORTED_MODULE_11__always_auth_service__["e" /* OnlyLoggedOutUsersGuard */],
                __WEBPACK_IMPORTED_MODULE_11__always_auth_service__["d" /* OnlyLoggedInUsersGuardAdmin */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_websocket_service__["WebSocketService"],
                __WEBPACK_IMPORTED_MODULE_24__Container_Store_Services__["d" /* MainService */],
                __WEBPACK_IMPORTED_MODULE_24__Container_Store_Services__["h" /* PromoCodeService */],
                __WEBPACK_IMPORTED_MODULE_24__Container_Store_Services__["c" /* EnrollmentService */],
                __WEBPACK_IMPORTED_MODULE_24__Container_Store_Services__["i" /* QuickBillService */],
                __WEBPACK_IMPORTED_MODULE_24__Container_Store_Services__["e" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_24__Container_Store_Services__["a" /* ChangePersonelInfoServices */],
                __WEBPACK_IMPORTED_MODULE_11__always_auth_service__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_22__recapcha_recapcha_service__["a" /* RecapchaService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/broker-login/broker-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <mat-card class=\"mainCard\">\r\n        <mat-card>\r\n            <h3>Sign In to Your Account</h3>\r\n        </mat-card>\r\n        <form>\r\n            <div class=\"inputFields\">\r\n                <mat-form-field>\r\n                    <input matInput [(ngModel)]=\"email\" [formControl]=\"validate_email\" required>\r\n                    <mat-error *ngIf=\"validate_email.invalid\">{{getErrorMessageEmail()}}</mat-error>\r\n                    <mat-placeholder>Enter Email </mat-placeholder>\r\n                </mat-form-field>\r\n                <mat-form-field hintLabel=\"Max 12 Min 8 characters\">\r\n                    <input matInput [(ngModel)]=\"password\" [type]=\"hide ? 'password' : 'text'\" required [formControl]=\"validate_password\" #input maxlength=\"12\">\r\n                    <mat-error *ngIf=\"validate_password.invalid\">{{getErrorMessagePassword()}}</mat-error>\r\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                    <mat-placeholder>Enter Password </mat-placeholder>\r\n                </mat-form-field>\r\n            </div>\r\n            <!-- <div class=\"recaptcha\">\r\n                <div>\r\n                    <blackgeeks-recaptcha></blackgeeks-recaptcha>\r\n                </div>\r\n                <div>\r\n                    <p class=\"error\"> {{cap_result}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"spinner\" *ngIf=\"showSpinner\">\r\n                <img src=\"../../../assets/img/fidget_red.gif\" width=\"150\" height=\"150\" alt=\"logo\">\r\n            </div> -->\r\n            <button  class=\"button\">Sign In</button>\r\n        </form>\r\n        <div class=\"footer\">\r\n            <div>\r\n                <mat-checkbox color=\"warn\">\r\n                    <span class=\"mat-checkbox\">Stay Signed In</span>\r\n                </mat-checkbox>\r\n                <a class=\"space\">\r\n                    <span> Forgot Password?</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/broker-login/broker-login.component.scss":
/***/ (function(module, exports) {

module.exports = ".background {\n  background: url(\"/assets/img/Background.png\") no-repeat;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .background .mainCard {\n    margin: 50px 10px;\n    max-width: 600px; }\n  .background .mainCard .recaptcha {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      margin-bottom: 10px;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n  .background .mainCard .inputFields {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin: 30px 0; }\n  .background .mainCard .button {\n      width: 100%;\n      font-size: 24px; }\n  .background .mainCard .footer {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      margin: 20px 0; }\n  .background .mainCard .footer div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; }\n  .background .mainCard .footer div .space {\n          color: #333333;\n          cursor: pointer;\n          font-size: 14px; }\n  .background .mainCard .footer div .space:hover {\n          color: #000; }\n  .background .mainCard .footer a {\n        font-weight: bold;\n        color: #034294;\n        font-size: 18px; }\n  .background .mainCard .footer a:hover {\n        font-weight: bold;\n        color: #009ccc;\n        text-decoration: none; }\n  .background .mainCard .mat-checkbox {\n      font-weight: bold;\n      color: #c51414; }\n  .background .mainCard .error {\n      color: #c51414;\n      font-weight: bold;\n      text-align: center;\n      font-size: 18px; }\n  .background .mainCard span {\n      font-size: 18px; }\n  .background .mainCard mat-icon {\n      color: #4d4747;\n      cursor: pointer; }\n  .background .mainCard mat-form-field {\n      font-size: 22px;\n      font-weight: bold; }\n  .background .mainCard mat-card {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: -webkit-gradient(linear, left top, right top, from(#042863), to(#0a97d2));\n      background: linear-gradient(90deg, #042863 0%, #0a97d2 100%);\n      margin-top: -50px; }\n  .background .mainCard mat-card h3 {\n        font-size: 35px;\n        color: #ffffff;\n        font-weight: bold;\n        text-align: center; }\n  .spinner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 5px 0 20px; }\n"

/***/ }),

/***/ "./src/app/broker-login/broker-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrokerLoginComponent = /** @class */ (function () {
    function BrokerLoginComponent() {
        this.validate_email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]);
        this.validate_password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(8)]);
        this.hide = true;
    }
    BrokerLoginComponent.prototype.getErrorMessageEmail = function () {
        return this.validate_email.hasError('required') ? 'You must enter a value' :
            this.validate_email.hasError('email') ? 'Not a valid email' :
                '';
    };
    BrokerLoginComponent.prototype.getErrorMessagePassword = function () {
        return this.validate_password.hasError('required') ? 'You must enter a value' :
            this.validate_password.hasError('minlength') ? 'Password should contain 8 characters' :
                '';
    };
    BrokerLoginComponent.prototype.ngOnInit = function () { };
    BrokerLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-broker-login',
            template: __webpack_require__("./src/app/broker-login/broker-login.component.html"),
            styles: [__webpack_require__("./src/app/broker-login/broker-login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BrokerLoginComponent);
    return BrokerLoginComponent;
}());



/***/ }),

/***/ "./src/app/enrollment-success-page/enrollment-success-page.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n    <div class=\"Confirmation\">\n        <div class=\"text-center\">\n            <i style=\"color:green\" class=\"fa fa-check fa-5x\"></i>\n            <h1>Thanks!</h1>\n            <h4>Your service request has been received</h4>\n        </div>\n        <br>\n        <div>\n            <p class=\"content\">Thank you for submitting your enrollment application! Your Enrollment reference ID is:\n                <b style=\"display: inline; font-size: 18px;\">{{response?.message?.use_cust_id}}</b>.</p>\n            <p class=\"content\" *ngIf=\"response?.message_color == 'red'\" style=\"color: #cd0000; font-size: bold\">\n                {{response?.show_message}}\n            </p>\n            <p class=\"content\" *ngIf=\"response?.message_color == 'black'\" style=\"font-size: bold\">\n                {{response?.show_message}}\n            </p>\n            <p class=\"content\">\n                Please print a copy of this page for your records.\n            </p>\n            <p class=\"content\">\n                We will be sending you a final confirmation email with your account number & contract information. In this email you will also receive a link to view your contract documents electronically. These documents include the Terms of Service (TOS), Your Rights\n                As A Customer (YRAC) & Electricity Facts Label (EFL).\n            </p>\n            <p class=\"content\">\n                If you are required to submit additional documents or have not made the required payment, please note that your enrollment will be pending until all requirements are complete. If you have any questions or need further assistance, please email or call\n                us.\n            </p>\n            <p class=\"content\">\n                Once your account has been activated, you can visit our website to create an online account. Access your account online anytime! Instantly view your balance, payment history, & billing statements in real time and pay your monthly invoice in under a minute.\n                You can also enroll for Automatic Bill Payments and Paperless Billing so you never miss a payment.\n            </p>\n            <hr>\n            <div>\n                <strong>\n                    Have any questions?\n                </strong>\n                <p class=\"text-center text1\">\n                    Contact our Customer Support team\n                </p>\n            </div>\n            <hr>\n            <div>\n                <p class=\"text-center text1\">\n                    If you do not receive the email,\n                    <a style=\" font-weight: bold;cursor: pointer\" *ngIf=\"isBtnDisabled==true\" (click)=\"verificationEmail()\">\n                        click here to resend the email\n                    </a>\n                    <a style=\" font-weight: bold;color:#A9A9A9;\" *ngIf=\"isBtnDisabled==false\">\n                        click here to resend the email\n                    </a>\n                </p>\n            </div>\n            <hr>\n            <div class=\"main text-center\">\n                <p class=\"inner\">\n                    <strong>Toll Free </strong> 1-888-545-4687\n                </p>\n            </div>\n            <div class=\"main text-center\">\n                <p class=\"inner\">\n                    <strong>Mailing Address</strong> 17154 Butte Creek Rd, Suite# 250. Houston, TX 77090\n                </p>\n            </div>\n            <div class=\"main text-center\">\n                <p class=\"inner\">\n                    <strong>Email</strong> customerservice@ourenergyllc.com\n                </p>\n            </div>\n            <div class=\"main text-center\">\n                <p class=\"inner\">\n                    <strong>Website</strong> <a target=\"_blank\" href=\"https://ourenergyllc.wattcrm.com\">OurEnergyLLC.com</a>\n                </p>\n            </div>\n        </div>\n    </div>\n    <h3 class=\"text-center\">Download Now!</h3>\n    <div class=\"text-center\">\n        <a href=\"https://itunes.apple.com/us/app/our-energy/id1438707950?mt=8\" rel=\"noreferrer\" target=\"_blank\">\n            <i style=\"margin-right: 15px; font-size: 45px; color: #333\" class=\"fa fa-apple\" matTooltip=\"IOS App\"></i>\n        </a>\n        <a href=\"https://play.google.com/store/apps/details?id=com.brainplow.OurEnergythemeone\" rel=\"noreferrer\" target=\"_blank\">\n            <i style=\"font-size: 45px; color: #333\" class=\"fa fa-android\" matTooltip=\"Android App\"></i>\n        </a>\n    </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/enrollment-success-page/enrollment-success-page.component.scss":
/***/ (function(module, exports) {

module.exports = ".Confirmation {\n  padding: 10px; }\n  .Confirmation hr {\n    margin: 10px !important; }\n  h1 {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 0px; }\n  h4 {\n  margin-top: 5px; }\n  .text1 {\n  display: inline; }\n  .main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .inner {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .content {\n  text-align: justify; }\n"

/***/ }),

/***/ "./src/app/enrollment-success-page/enrollment-success-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrollmentSuccessPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__always_auth_service__ = __webpack_require__("./src/app/always-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnrollmentSuccessPageComponent = /** @class */ (function () {
    function EnrollmentSuccessPageComponent(service, router, http) {
        this.service = service;
        this.router = router;
        this.http = http;
        this.response = null;
        this.isBtnDisabled = true;
    }
    EnrollmentSuccessPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 100);
        this.service.data.subscribe(function (res) {
            _this.response = res;
        });
        // if(this.response==null){
        //   this.router.navigate(['plan'])
        // }
    };
    EnrollmentSuccessPageComponent.prototype.verificationEmail = function () {
        var _this = this;
        this.isBtnDisabled = false;
        var obj = {
            cust_id: this.response['message']['use_cust_id']
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + 'pr/resend-enrollment-email/', obj, {
            'headers': { 'Content-Type': 'application/json' }
        }).subscribe(function (res) {
            if (res['status'] == true) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()(res['message'], '', 'success');
                _this.isBtnDisabled = true;
            }
            else {
                if (res['status'] == false) {
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()(res['message'], '', 'error');
                }
                _this.isBtnDisabled = true;
            }
        });
    };
    EnrollmentSuccessPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-enrollment-success-page',
            template: __webpack_require__("./src/app/enrollment-success-page/enrollment-success-page.component.html"),
            styles: [__webpack_require__("./src/app/enrollment-success-page/enrollment-success-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__always_auth_service__["f" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], EnrollmentSuccessPageComponent);
    return EnrollmentSuccessPageComponent;
}());



/***/ }),

/***/ "./src/app/enrollment/consent-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Proceed/Authorize Enrollment?</h1>\r\n<div mat-dialog-content>\r\n    <h3>Personal Information</h3>\r\n    <p>First Name: <b>{{data.cust_firstname}}</b></p>\r\n    <p>Last Name: <b>{{data.cust_lastname}}</b></p>\r\n    <p>SSN: <b>{{data.ssn}}</b></p>\r\n    <p>Phone: <b>{{data.phone1}}</b></p>\r\n    <p>Email: <b>{{data.email_address}}</b></p>\r\n\r\n    <h3>Service Address</h3>\r\n    <p><b>{{data.pm_address2}}</b></p>\r\n    <p><b>{{data.pm_city}}, {{data.pm_state}} {{data.pm_zip}}</b></p>\r\n    <p>Premise/ESI ID: <b>{{data.premise_id}}</b></p>\r\n    <p>Provider: <b>{{data.vendor_company}}</b></p>\r\n    <p>For Outages/Emergencies Call: (800)-332-7143</p>\r\n\r\n    <h3>Billing Address</h3>\r\n    <p><b>{{data.cm_address2}}</b></p>\r\n    <p><b>{{data.cm_city}}, {{data.cm_state}} {{data.cm_zip}}</b></p>\r\n\r\n    <h3>Service Request</h3>\r\n    <p>Request Type: <b>{{data.enrol_type}}</b></p>\r\n    <p>Requested Date: <b>{{data.request_date}}</b></p>\r\n\r\n    <h3>Product Information</h3>\r\n    <p><b>{{data.product_name}}</b></p>\r\n    <p><b>{{data.product_info}}</b></p>\r\n    <p>Rate: <b>{{data.tariff_1000}}¢ per kWh</b></p>\r\n    <p>Terms: <b>{{data.term}} Months</b></p>\r\n    <p>Termination Fees: <b>${{data.display_termination_fee}}</b></p>\r\n    <p>Utility Provider: <b>{{data.vendor_company}}</b></p>\r\n    <a mat-fab color=\"primary\" matTooltip=\"Terms of Service\" [href]=data.tos target=\"_blank\"><b>TOS</b></a>\r\n    <a mat-fab color=\"primary\" matTooltip=\"Your Rights as a Customer\" href=\"https://www.ourenergyllc.com/prodox/yrac.pdf\" target=\"_blank\"><b>YRAC</b></a>\r\n    <a mat-fab color=\"primary\" matTooltip=\"Electric Facts Label\" [href]=data.product_efl_url target=\"_blank\"><b>EFL</b></a>\r\n    <hr>\r\n    <p>I have reviewed the information provided above and by clicking <b>“Yes I Authorize”</b> below, I accept that I am authorizing Our Energy LLC to become my new retail electric provider and to act as my agent to perform the necessary task to establish\r\n        my electric service amount with Our Energy LLC. This authorization to establish or switch my provider of electric service extends to the above location.\r\n    </p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button class=\"btn1\"  (click)=\"submit()\">Yes, I Authorize</button>\r\n    <button class=\"btn2\"  (click)=\"close()\">Wait, Let me Verify</button>\r\n</div>"

/***/ }),

/***/ "./src/app/enrollment/consent-dialog.scss":
/***/ (function(module, exports) {

module.exports = ".mat-dialog-actions {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\nh1 {\n  text-align: center; }\n\na {\n  margin-bottom: 10px;\n  margin-top: 10px; }\n\np {\n  font-size: 16px; }\n\nh3 {\n  font-weight: bold; }\n\n.btn1 {\n  background-color: #000;\n  color: #fff;\n  padding: 0px 25px;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  border-radius: 25px; }\n\n.btn2 {\n  background-color: #888;\n  color: #fff;\n  padding: 0px 25px;\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  border-radius: 25px; }\n"

/***/ }),

/***/ "./src/app/enrollment/depositpopup.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Deposit Submission</h1>\r\n<h4 class=\"text-center\">{{data.custom_msg}}</h4>\r\n<h4 *ngIf=\"!data.custom_msg\" class=\"text-center\">Enter your payment details below to pay the maximum deposit of $300.00.</h4>\r\n<br>\r\n<form [formGroup]=\"sendingData\" (ngSubmit)=\"submit()\">\r\n    <div mat-dialog-content>\r\n        <div class=\"row\">\r\n            <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <mat-select placeholder=\"Credit Card Type\" formControlName=\"de_card_type\" required>\r\n                    <mat-option [value]=\"\">--</mat-option>\r\n                    <mat-option [value]=\"cardtype\" *ngFor=\"let cardtype of cards\">{{cardtype}}</mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"sendingData.controls.de_card_type.hasError('required')\">Card Type is required</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <input matInput placeholder=\"Card No.\" formControlName=\"de_cc_no\" maxlength=\"19\" required credit-card>\r\n                <mat-error *ngIf=\"sendingData.controls.de_cc_no.hasError('required')\">Card No. is required</mat-error>\r\n                <mat-error *ngIf=\"sendingData.controls.de_cc_no.hasError('pattern')\">Invalid Format</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"row\">\r\n            <mat-form-field class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                <input matInput placeholder=\"CCV\" formControlName=\"de_security_code\" maxlength=\"3\" required>\r\n                <mat-error *ngIf=\"sendingData.controls.de_security_code.hasError('required')\">CCV is required</mat-error>\r\n                <mat-error *ngIf=\"sendingData.controls.de_security_code.hasError('pattern')\">Invalid Format</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                <mat-select placeholder=\"Expiry Month\" formControlName=\"de_expiry_MM\" required>\r\n                    <mat-option [value]=\"\">--</mat-option>\r\n                    <mat-option [value]=\"x.value\" *ngFor=\"let x of months\">{{x.viewValue}}</mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"sendingData.controls.de_expiry_MM.hasError('required')\">Expiry Month is required</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                <mat-select placeholder=\"Expiry Year\" formControlName=\"de_expiry_YYYY\" required>\r\n                    <mat-option [value]=\"\">--</mat-option>\r\n                    <mat-option [value]=\"y\" *ngFor=\"let y of years\">{{y}}</mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"sendingData.controls.de_expiry_YYYY.hasError('required')\">Expiry Year is required</mat-error>\r\n            </mat-form-field>\r\n            <mat-slide-toggle style=\"margin-top: 20px;\" class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\" formControlName=\"de_autopay\" color=\"primary\"><b>Auto Pay</b></mat-slide-toggle>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <br>\r\n        <button  [disabled]=\"btnDisabled\" type=\"submit\">Pay Now</button>\r\n        <button  [disabled]=\"btnDisabled\" type=\"button\" (click)=\"cancel()\">I'll pay later</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/enrollment/depositpopup.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  font-size: 16px;\n  font-weight: bold; }\n\nbutton {\n  background-color: #000;\n  color: #fff;\n  padding: 5px 30px;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  border-radius: 25px; }\n\nb {\n  font-size: 16px; }\n\nh1 {\n  font-weight: 700; }\n"

/***/ }),

/***/ "./src/app/enrollment/enrollment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"enroll-container\">\r\n    <h1>Tell us about yourself!</h1>\r\n    <h3 style=\"margin-top: 0px;\">Provide your personal information and let us know if you are switching or moving in.</h3>\r\n    <div class=\"inner\">\r\n        <div class=\"cart\">\r\n            <img (click)=\"showSummary()\" style=\"margin-bottom: 10px; cursor: pointer;\" src=\"../../assets/img/cart.png\" width=\"35\" height=\"35\" matTooltip=\"Show Summary\" />\r\n        </div>\r\n        <mat-card class=\"note\">\r\n            <div>\r\n                <i class=\"material-icons\">info</i>\r\n            </div>\r\n            <div>\r\n                <p>Any Enrollment Request including move-in or a switch can only be made by the service applicant or the applicant's authorized agent If you are not an authorized individual, please do not submit your request using this portal.</p>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <form [ngClass]=\"{'col-lg-9 col-lg-9 col-sm-12 col-xs-12' : summary}\" [ngClass]=\"{'col-lg-12 col-lg-12 col-sm-12 col-xs-12' : !summary}\">\r\n            <div class=\"bodyy\">\r\n                <mat-horizontal-stepper (selectionChange)=\"stepSession()\" #stepper linear=\"true\">\r\n                    <!-- <mat-horizontal-stepper (selectionChange)=\"stepSession()\" #stepper> -->\r\n                    <mat-step [stepControl]=\"startFormGroup\" (click)=\"reset()\">\r\n                        <ng-template matStepLabel><b style=\"padding-right: 15px; padding-left: 15px;\">Locate Yourself</b></ng-template>\r\n                        <div class=\"enrollProcess\">\r\n                            <enroll-process></enroll-process>\r\n                        </div>\r\n\r\n                    </mat-step>\r\n                    <!-- <div class=\"spinner\" *ngIf=\"showSpinner\" style=\"margin-top: 30px;\">\r\n                        <img src=\"../../../assets/img/fidget_red.gif\" width=\"150\" height=\"150\" alt=\"logo\">\r\n                    </div> -->\r\n\r\n                    <mat-step [stepControl]=\"firstFormGroup\" (click)=\"reset()\">\r\n                        <form [formGroup]=\"firstFormGroup\">\r\n                            <ng-template matStepLabel><b style=\"padding-right: 15px; padding-left: 15px;\">Service</b></ng-template>\r\n                            <mat-card>\r\n                                <mat-card-title class=\"mat-elevation-z4\">Are you moving or switching providers at the selected service location?\r\n                                </mat-card-title>\r\n                                <mat-card class=\"form1 mat-elevation-z4\">\r\n                                    <div class=\"leftSider\">\r\n                                        <div>\r\n                                            <label>Service Type<span>*</span></label>\r\n                                        </div>\r\n                                        <div>\r\n                                            <mat-radio-group class=\"radio-group\" (change)=\"radioChange($event)\" formControlName=\"enrol_type\">\r\n                                                <mat-radio-button class=\"radio-button\" *ngFor=\"let service of services\" [value]=service>\r\n                                                    {{service}}\r\n                                                </mat-radio-button>\r\n                                            </mat-radio-group>\r\n                                        </div>\r\n                                        <mat-form-field style=\"margin: 15px 0px 0px 15px; width: 500px;\">\r\n                                            <input [matDatepickerFilter]=\"myFilter\" matInput [min]=\"first_available_date\" [max]=\"end_date\" [matDatepicker]=\"picker\" placeholder=\"Requested Date\" formControlName=\"request_date\">\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #picker></mat-datepicker>\r\n                                            <mat-error *ngIf=\"firstFormGroup.controls.request_date.hasError('required')\">Requested Date is required\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </mat-card>\r\n                                <mat-card class=\"main-note mat-elevation-z4\">\r\n                                    <div class=\"note\">\r\n                                        <div>\r\n                                            <i class=\"material-icons\">info</i>\r\n                                        </div>\r\n                                        <div>\r\n                                            <p style=\"margin:0px 0px 0px 10px\">A standard switch will be completed in 0-5 business days. Move-in and self-selected switch fees may be applicable and passed through to you from your TDSP. Please refer to your TOS for full list of TDSP fees.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"note\">\r\n                                        <div>\r\n                                            <i class=\"material-icons\">info</i>\r\n                                        </div>\r\n                                        <div>\r\n                                            <p style=\"margin:0px 0px 0px 10px\">In the case of a switch request, you have the right to review and rescind the Terms of Service within three federal business days, after receiving the Terms Of Service, without penalty.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"note\">\r\n                                        <div>\r\n                                            <i class=\"material-icons\">info</i>\r\n                                        </div>\r\n                                        <div>\r\n                                            <p style=\"margin:0px 0px 0px 10px\">If you take an action that cancels or terminates your service with us, prior to the end of the initial term specified in your contract, you may be responsible to pay an early termination fee (ETF) specified\r\n                                                in your TOS/EFL.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </mat-card>\r\n                            </mat-card>\r\n                        </form>\r\n                        <div class=\"stepperbutton\">\r\n                            <button  matStepperPrevious (click)=\"goToTop()\">Back</button>\r\n                            <button  matStepperNext id=\"next1\" (click)=\"goToTop()\">Next</button>\r\n                        </div>\r\n                    </mat-step>\r\n                    <mat-step [stepControl]=\"secondFormGroup\" (click)=\"reset()\">\r\n                        <form [formGroup]=\"secondFormGroup\">\r\n                            <ng-template matStepLabel><b style=\"padding-right: 15px; padding-left: 15px;\">Personal Information</b></ng-template>\r\n                            <mat-card class=\"form mat-elevation-z4\">\r\n                                <mat-card-title class=\"mat-elevation-z4\">About You</mat-card-title>\r\n                                <div class=\"row\">\r\n                                    <div style=\"padding: 10px;\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                                        <p style=\"margin-bottom: 0px !important;\">This will appear as the name on your bill</p>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"First Name\" required formControlName=\"cust_firstname\" maxlength=\"50\">\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.cust_firstname.hasError('required')\">First Name is required\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Middle Initial\" formControlName=\"cust_mi\" maxlength=\"4\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Last Name\" required formControlName=\"cust_lastname\" maxlength=\"50\">\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.cust_lastname.hasError('required')\">Last Name is required</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput [max]=\"birthDate\" [matDatepicker]=\"birthdt\" placeholder=\"Birth Date\" required formControlName=\"cust_dob\">\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"birthdt\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker startView=\"year\" [startAt]=\"birthDate\" #birthdt></mat-datepicker>\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.cust_dob.hasError('required')\">Birth Date is required</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div style=\"margin-bottom:15px\" class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Authorized Representative\" formControlName=\"contact1\" maxlength=\"50\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <mat-card-title class=\"mat-elevation-z4\">Your Identity</mat-card-title>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"SSN\" formControlName=\"ssn\" maxlength=\"11\" required ssn>\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.ssn.hasError('required')\">SSN is required</mat-error>\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.ssn.hasError('pattern') && !secondFormGroup.controls.ssn.hasError('required')\">Invalid SSN\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Driving License No.\" formControlName=\"cust_drl_nbr\" maxlength=\"15\">\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.cust_drl_nbr.hasError('pattern')\">Invalid Format</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"License State\" formControlName=\"cust_drl_state\">\r\n                                                <mat-option [value]=\"\">--</mat-option>\r\n                                                <mat-option [value]=\"state.value\" *ngFor=\"let state of states\">{{state.viewValue}}</mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput [min]=\"currentdate\" [matDatepicker]=\"expdt\" placeholder=\"Expiration Date\" formControlName=\"cust_drl_expire\">\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"expdt\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #expdt></mat-datepicker>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"Security Question\" formControlName=\"personal_pin\">\r\n                                                <mat-option [value]=\"\">--</mat-option>\r\n                                                <mat-option [value]=\"question\" *ngFor=\"let question of questions\">{{question}}</mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Security Answer\" formControlName=\"personal_ref_code\" maxlength=\"20\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <mat-card-title class=\"mat-elevation-z4\">Communication</mat-card-title>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"Language Preference\" formControlName=\"cust_bill_type\">\r\n                                                <mat-option [value]=\"\">--</mat-option>\r\n                                                <mat-option [value]=\"language.value\" *ngFor=\"let language of languages\">{{language.viewValue}}</mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Phone No.\" required formControlName=\"phone1\" maxlength=\"12\" phone-no>\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.phone1.hasError('required')\">Primary Phone is required</mat-error>\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.phone1.hasError('pattern') && !secondFormGroup.controls.phone1.hasError('required')\">Invalid Residential Phone No.</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"Mobile Provider\" formControlName=\"cust_sms_provider\">\r\n                                                <mat-option [value]=\"\">--</mat-option>\r\n                                                <mat-option [value]=\"provider\" *ngFor=\"let provider of providers\">{{provider}}</mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Mobile Phone No.\" formControlName=\"phone2\" maxlength=\"12\" phone-no>\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.phone2.hasError('required')\">Mobile Phone is required</mat-error>\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.phone2.hasError('pattern') && !secondFormGroup.controls.phone2.hasError('required')\">Invalid Mobile Phone No.</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Personal Email Address\" required formControlName=\"email_address\" maxlength=\"100\">\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.email_address.hasError('required')\">Email is required</mat-error>\r\n                                            <mat-error *ngIf=\"secondFormGroup.controls.email_address.hasError('email') && !secondFormGroup.controls.email_address.hasError('required')\">Invalid Format\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"How did you hear about us\" formControlName=\"referred_by\">\r\n                                                <mat-option [value]=\"\">--</mat-option>\r\n                                                <mat-option [value]=\"about.value\" *ngFor=\"let about of aboutUs\">{{about.name}}</mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div style=\"padding: 10px;\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"></div>\r\n                                </div>\r\n                            </mat-card>\r\n                        </form>\r\n                        <div class=\"stepperbutton\">\r\n                            <button  matStepperPrevious (click)=\"goToTop()\">Back</button>\r\n                            <button  matStepperNext id=\"next2\" (click)=\"goToTop()\">Next</button>\r\n                        </div>\r\n                    </mat-step>\r\n                    <mat-step [stepControl]=\"thirdFormGroup\" (click)=\"reset()\">\r\n                        <form [formGroup]=\"thirdFormGroup\">\r\n                            <ng-template matStepLabel><b style=\"padding-right: 15px; padding-left: 15px;\">Billing Information</b></ng-template>\r\n                            <mat-card class=\"form mat-elevation-z4\">\r\n                                <mat-card-title class=\"mat-elevation-z4\">Billing Address</mat-card-title>\r\n                                <mat-checkbox (change)=\"SameAsServiceAddress()\" [(ngModel)]=\"serviceAddresscheck\" [ngModelOptions]=\"{standalone: true}\">Same as Service Address</mat-checkbox>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Apartment Name\" maxlength=\"50\" formControlName=\"cm_address1\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Street Address\" required formControlName=\"cm_address2\" maxlength=\"50\">\r\n                                            <mat-error *ngIf=\"thirdFormGroup.controls.cm_address2.hasError('required')\">Street Address is required\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"City\" required formControlName=\"cm_city\" maxlength=\"50\">\r\n                                            <mat-error *ngIf=\"thirdFormGroup.controls.cm_city.hasError('required')\">City is required</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"State\" required formControlName=\"cm_state\">\r\n                                                <mat-option [value]=\"\">--</mat-option>\r\n                                                <mat-option [value]=\"state.value\" *ngFor=\"let state of states\">{{state.viewValue}}</mat-option>\r\n                                            </mat-select>\r\n                                            <mat-error *ngIf=\"thirdFormGroup.controls.cm_state.hasError('required')\">State is required</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Zip Code\" maxlength=\"5\" required formControlName=\"cm_zip\" maxlength=\"9\">\r\n                                            <mat-error *ngIf=\"thirdFormGroup.controls.cm_zip.hasError('required')\">Zip is required</mat-error>\r\n                                            <mat-error *ngIf=\"thirdFormGroup.controls.cm_zip.hasError('pattern') && !thirdFormGroup.controls.cm_zip.hasError('required')\">Invalid Format\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"stepperbutton text-center\">\r\n                                    <button  (click)=\"findBillingAddress()\" [disabled]=\"findBtn\">Find</button>\r\n                                </div>\r\n                            </mat-card>\r\n                            <div *ngIf=\"billingAddresses.length == 0\">\r\n                                <div *ngIf=\"alertcondition == true\">\r\n                                    <h1 class=\"alertCondition\">\r\n                                        {{alert}} </h1>\r\n                                    <h1 class=\"text-center\" #premises>OR</h1>\r\n                                    <h4 class=\"text-center\"><a (click)=\"SelectBillingPrem('same')\" class=\"anchorrrr\">Click here</a> to select what you entered.</h4>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n\r\n                        <div *ngIf=\"billingAddresses.length > 0\">\r\n                            <br>\r\n                            <h1 class=\"text-center\" style=\"font-weight: bold !important;\" *ngIf=\"billingAddresses.length > 0\" #premises>Select Your Mailing Address</h1>\r\n                            <h4 class=\"text-center\">Multiple mailing addresses were found. Please select from the below list or refine what you entered above.</h4>\r\n                            <br>\r\n                            <div class=\"premise\" *ngFor=\"let value of billingAddresses; let ind = index\">\r\n                                <div class=\"inner-premise\">\r\n                                    <div class=\"premise-details\">\r\n                                        <h4>{{value.Address2}}</h4>\r\n                                        <h4 style=\"margin:0px\">{{value.City}} {{value.State}} {{value.Zip5}}-{{value.Zip4}}</h4>\r\n                                    </div>\r\n                                    <div class=\"premise-details\">\r\n                                        <button  (click)=\"SelectBillingPrem(value)\" type=\"button\"><h4 style=\"font-weight: bold !important;\">Select</h4></button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"inner-premise\">\r\n                                    <div *ngIf=\"(ind + 1) < billingAddresses.length\" style=\"display: flex; flex: 1; margin-top: 25px; box-shadow: 0 -5px 5px -5px #333; border: 1px solid #ccc;\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <h1 class=\"text-center\" *ngIf=\"billingAddresses.length > 0\" #premises>OR</h1>\r\n                            <h4 class=\"text-center\"><a (click)=\"SelectBillingPrem('same')\" class=\"anchorrrr\">Click here</a> to select what you entered.</h4>\r\n                        </div>\r\n\r\n                    </mat-step>\r\n                    <mat-step [stepControl]=\"fourFormGroup\" (click)=\"reset()\">\r\n                        <form [formGroup]=\"fourFormGroup\">\r\n                            <ng-template matStepLabel><b style=\"padding-right: 15px; padding-left: 15px;\">Requests and Verification</b></ng-template>\r\n                            <mat-card class=\"form mat-elevation-z4\">\r\n                                <mat-card-title class=\"mat-elevation-z4\"> Automatic Bill Pay </mat-card-title>\r\n                                <mat-checkbox (change)=\"changeAutoBillPay($event)\"> Sign-up for Auto Bill Pay </mat-checkbox>\r\n                                <div *ngIf=\"setAutoPay\" class=\"row\">\r\n                                    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"Credit Card Type\" formControlName=\"deposit_card_type\" required>\r\n                                                <mat-option [value]=\"\">--</mat-option>\r\n                                                <mat-option [value]=\"cardtype\" *ngFor=\"let cardtype of cards\">{{cardtype}}</mat-option>\r\n                                            </mat-select>\r\n                                            <mat-error *ngIf=\"fourFormGroup.controls.deposit_card_type.hasError('required')\">Card Type is required</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"Card No.\" maxlength=\"19\" formControlName=\"deposit_cc_no\" required credit-card>\r\n                                            <mat-error *ngIf=\"fourFormGroup.controls.deposit_cc_no.hasError('required')\">Card No. is required</mat-error>\r\n                                            <mat-error *ngIf=\"fourFormGroup.controls.deposit_cc_no.hasError('pattern')\">Invalid Format</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"setAutoPay\" class=\"row\">\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <input matInput placeholder=\"CCV\" maxlength=\"3\" formControlName=\"deposit_security_code\" required>\r\n                                            <mat-error *ngIf=\"fourFormGroup.controls.deposit_security_code.hasError('required')\">CCV is required</mat-error>\r\n                                            <mat-error *ngIf=\"fourFormGroup.controls.deposit_security_code.hasError('pattern')\">Invalid Format</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"Expiry Month\" formControlName=\"deposit_expiry_MM\" required>\r\n                                                <mat-option [value]=\"\">--</mat-option>\r\n                                                <mat-option [value]=\"x.value\" *ngFor=\"let x of months\">{{x.viewValue}}</mat-option>\r\n                                            </mat-select>\r\n                                            <mat-error *ngIf=\"fourFormGroup.controls.deposit_expiry_MM.hasError('required')\">Expiry Month is required</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div style=\"margin-bottom:15px\" class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"Expiry Year\" formControlName=\"deposit_expiry_YYYY\" required>\r\n                                                <mat-option [value]=\"\">--</mat-option>\r\n                                                <mat-option [value]=\"y\" *ngFor=\"let y of years\">{{y}}</mat-option>\r\n                                            </mat-select>\r\n                                            <mat-error *ngIf=\"fourFormGroup.controls.deposit_expiry_YYYY.hasError('required')\">Expiry Year is required</mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <mat-card-title class=\"mat-elevation-z4\"> Special Request </mat-card-title>\r\n                                <mat-checkbox formControlName=\"life_support\"> Life Support </mat-checkbox>\r\n                                <p> (Choose if a resident at the selected service address requires Life Support) </p>\r\n                                <mat-card-title class=\"mat-elevation-z4\"> Credit Verification </mat-card-title>\r\n                                <mat-radio-group class=\"radio-group\" [(ngModel)]=\"credit_verification\" (change)=\"radioChangeCreditVerification($event)\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <mat-radio-button [checked]=\"verify.val.status\" class=\"radio-button\" *ngFor=\"let verify of creditCards\" [value]=\"verify.val.value\">\r\n                                        {{verify.val.value}}\r\n                                    </mat-radio-button>\r\n                                </mat-radio-group>\r\n                                <div class=\"form hintMsg\">\r\n                                    <p *ngIf=\"credit_verification=='Check My Credit'\"> Credit Verification </p>\r\n                                    <p *ngIf=\"credit_verification=='Dont Check Credit'\">I would like to pay the maximum deposit of $300.00 and not run the credit check.</p>\r\n                                    <div *ngIf=\"credit_verification=='Waive Deposit'\">\r\n                                        <mat-radio-group class=\"radio-group\" (change)=\"radioChangeCreditVerificationsub($event)\">\r\n                                            <mat-radio-button class=\"radio-button\" *ngFor=\"let waived of waivedeposit\" [value]=\"waived\">\r\n                                                {{waived}}\r\n                                            </mat-radio-button>\r\n                                        </mat-radio-group>\r\n                                        <p>You can download the Waiver Form\r\n                                            <a class=\"anchor\" href=\"http://www.puc.texas.gov/industry/electric/forms/violence/DepWaivFrm.pdf\" matTooltip=\"Waiver Form\"> here</a>. Please fax your waiver documents to us at 1-281.715.5767 or email us at CustomerService@OUREnergyLLC.com.</p>\r\n                                    </div>\r\n                                </div>\r\n                            </mat-card>\r\n                        </form>\r\n                        <div class=\"stepperbutton\">\r\n                            <button  matStepperPrevious (click)=\"goToTop()\">Back</button>\r\n                            <button  matStepperNext id=\"next4\" (click)=\"goToTop()\">Next</button>\r\n                        </div>\r\n                    </mat-step>\r\n                    <mat-step>\r\n                        <ng-template matStepLabel><b style=\"padding-right: 15px; padding-left: 15px;\">Authorization</b></ng-template>\r\n                        <mat-card>\r\n                            <mat-card-title class=\"mat-elevation-z4\">Please read carefully and provide authorization</mat-card-title>\r\n                            <mat-card class=\"form mat-elevation-z4\">\r\n                                <mat-checkbox [(ngModel)]=\"check1\" [ngModelOptions]=\"{standalone: true}\">I am choosing Our Energy LLC | TX PUCT # 10170 to provide energy services for the selected location.\r\n                                </mat-checkbox>\r\n                                <mat-checkbox [(ngModel)]=\"check2\" [ngModelOptions]=\"{standalone: true}\">I am an authorized person to request service for the selected location.</mat-checkbox>\r\n                                <div>\r\n                                    <p style=\"margin-left: 30px;\">\r\n                                        Any Enrollment request including move-in or a switch can only be made by the service applicant or the applicant's authorized agent.If you are not an authorized individual, please do not submit your request using this portal.\r\n                                    </p>\r\n                                </div>\r\n                                <mat-checkbox disabled [checked]=\"status\" *ngIf=\"showCheckbox == true\"> I authorize OUR ENERGY to obtain information from a consumer credit reporting agency to process this application for electric service. I understand that this application is not a commitment from OUR ENERGY to provide service.</mat-checkbox>\r\n                                <mat-checkbox [(ngModel)]=\"check3\" [ngModelOptions]=\"{standalone: true}\"> I have read and understand all the authorization disclosures and terms of service for the product I have chosen. You can view, print or save your Terms of Service document\r\n                                    <a class=\"anchor\" href=\"http://www.ourenergyllc.com/prodox/tos/TOS-08302017R-1.pdf\" target=\"_blank\" matTooltip=\"Term of Services\"> here</a>.</mat-checkbox>\r\n                            </mat-card>\r\n                            <mat-card class=\"main-note mat-elevation-z4\">\r\n                                <div class=\"note\">\r\n                                    <div>\r\n                                        <i class=\"material-icons\">info</i>\r\n                                    </div>\r\n                                    <div>\r\n                                        <p style=\"margin:0px 0px 0px 10px\">In the case of a switch request, you have the right to review and rescind the Terms of Service within three federal business days, after receiving the Terms Of Service, without penalty.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"note\">\r\n                                    <div>\r\n                                        <i class=\"material-icons\">info</i>\r\n                                    </div>\r\n                                    <div>\r\n                                        <p style=\"margin:0px 0px 0px 10px\">If you have chosen a prepaid service, you will not receive a bill and may request a summary of usage and payment if needed.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </mat-card>\r\n\r\n                            <mat-progress-bar *ngIf=\"loader==true\" mode=\"indeterminate\"></mat-progress-bar>\r\n                        </mat-card>\r\n                        <div class=\"stepperbutton\">\r\n                            <button  matStepperPrevious (click)=\"goToTop()\" (click)=\"reset()\">Back</button>\r\n\r\n                            <button  [disabled]=\"!check1 || !check2 || !check3 || submitBtn\" (click)=\"enroll()\">Submit</button>\r\n                        </div>\r\n\r\n                    </mat-step>\r\n                </mat-horizontal-stepper>\r\n            </div>\r\n        </form>\r\n        <div *ngIf=\"summary\" class=\"col-lg-3 col-lg-3 col-sm-12 col-xs-12\">\r\n            <div class=\"enroll-plan\" *ngFor=\"let value of products;index as i;\">\r\n                <div class=\"pro\">\r\n                    <h3 style=\"font-weight: bold;\">Enrollment Summary</h3>\r\n                </div>\r\n                <div class=\"rateSheet\">\r\n                    <div>\r\n                        <div  class=\"text-center price-box_en\">\r\n                            <h3 >${{value?.tariff_2000}}¢ </h3>\r\n                            <b >Average Rate at 2000 kWhs</b>\r\n                        </div>\r\n                        <div *ngIf=\"premiseInfo != null || premiseInfo != undefined\">\r\n                            <br>\r\n                            \r\n                            <div class=\"headingDiv\">State</div>\r\n                            \r\n                            <div class=\"dataDiv\">{{premiseInfo?.city}}, {{premiseInfo?.state}}</div>\r\n                            <div class=\"headingDiv\">Zip Code</div>\r\n                            <div class=\"dataDiv\">{{premiseInfo?.zip}}</div>\r\n                            <div class=\"headingDiv\">Street Address</div>\r\n                            <div class=\"dataDiv\">{{premiseInfo?.address1}}</div>\r\n                        </div>\r\n                        <!--  -->\r\n\r\n                        <h2>{{value?.product_name}}</h2>\r\n                        <mat-card>\r\n                            <p>\r\n                                {{value?.product_info}}\r\n                            </p>\r\n                        </mat-card>\r\n                        <div style=\"margin-top: 10px\" class=\"headingDiv\">Contract Term</div>\r\n                        <div class=\"dataDiv\">{{value?.display_term}} Months</div>\r\n                        <div class=\"headingDiv\">Utility Provider</div>\r\n                        <div class=\"dataDiv\">{{value?.vendor_company}}</div>\r\n                       \r\n                        <h2>Price Details</h2>\r\n                        <table id=\"pricing\">\r\n                            <tr>\r\n                                <th class=\"subRow\">Avg Monthly Use</th>\r\n                                <th class=\"subRow dataRow\">500 kWh</th>\r\n                                <th class=\"subRow dataRow\">1000 kWh</th>\r\n                                <th class=\"subRow dataRow\">2000 kWh</th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th class=\"subRow\">Avg Rate (cent per kWh from EFL)</th>\r\n                                <th class=\"subRow dataRow\">{{value.tariff_500}}¢</th>\r\n                                <th class=\"subRow dataRow\">{{value.tariff_1000}}¢</th>\r\n                                <th class=\"subRow dataRow\">{{value.tariff_2000}}¢</th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th class=\"subRow\">Estimated Monthly Bill*</th>\r\n                                <th class=\"subRow dataRow\">${{value.tariff_500 * 500 / 100}}</th>\r\n                                <th class=\"subRow dataRow\">${{value.tariff_1000 * 1000 / 100}}</th>\r\n                                <th class=\"subRow dataRow\">${{value.tariff_2000 * 2000 / 100}}</th>\r\n                            </tr>\r\n                        </table>\r\n                       \r\n                            <h2>Documents</h2>\r\n                            <div class=\"TOS_EFL\">\r\n                            <a  [href]=value?.product_tos_url target=\"_blank\">\r\n                                TOS \r\n                            </a>\r\n                            <a  [href]=value?.product_efl_url target=\"_blank\">\r\n                                 EFL\r\n                            </a>\r\n                            <a  href=\"http://www.ourenergyllc.com/prodox/yrac.pdf\" target=\"_blank\">\r\n                                 YRAC\r\n                            </a>\r\n                        </div>\r\n                        \r\n                        <div style=\"margin-top: 10px\" class=\"headingDiv\">Early Termination Fee</div>\r\n                        <div class=\"dataDiv\">${{value?.display_termination_fee}}</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"lable\">\r\n                    <label>*Disclaimer - The total bill calculation is based on the monthly usage values shown. Your total bill\r\n          usage will vary based on actual usage. Please refer to Electricity Facts Label for details and more\r\n          information.</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/enrollment/enrollment.component.scss":
/***/ (function(module, exports) {

module.exports = ".enroll-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .enroll-container h1 {\n    color: #2b2a2a;\n    font-weight: 700 !important;\n    text-align: center; }\n  .enroll-container h3 {\n    color: #494949;\n    font-weight: bold;\n    text-align: center;\n    font-size: 20px; }\n  .enroll-container .cart {\n    margin-top: -40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .enroll-container .cart i {\n      font-size: 35px;\n      cursor: pointer; }\n  .enroll-container .inner {\n    width: 80%; }\n  .enroll-container .inner mat-card {\n      background-color: #f8f8f8;\n      margin-bottom: 10px; }\n  .enroll-container .inner mat-card p {\n        font-size: 16px;\n        font-weight: 600 !important;\n        color: #646464;\n        margin: 3px; }\n  .enroll-container .inner .note {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #4d4949;\n      font-weight: 800 !important;\n      font-size: 16px; }\n  .enroll-container .inner .note i {\n        margin-right: 10px;\n        font-size: 35px;\n        color: #000; }\n  .mat-horizontal-stepper-header .mat-step-icon {\n  margin-top: 9px !important; }\n  ::ng-deep .mat-horizontal-stepper-header .mat-step-icon-not-touched {\n  margin-top: 9px;\n  margin-right: 0px; }\n  .premise {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 20px;\n  padding-bottom: 0px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .premise .inner-premise {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .premise .inner-premise .premise-details {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      text-align: center; }\n  .premise .inner-premise .premise-details button {\n        background-color: #000;\n        border-radius: 100px;\n        color: #fff;\n        font-weight: bold;\n        width: 150px;\n        margin-top: 10px; }\n  .alertCondition {\n  color: #cd0000;\n  font-weight: bold;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 84px; }\n  .anchorrrr {\n  color: #cd0000;\n  font-weight: bold;\n  cursor: pointer;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none; }\n  .anchorrrr:hover {\n  color: #cd0000;\n  font-weight: bold;\n  cursor: pointer;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none; }\n  .bodyy mat-card {\n  margin: 8px;\n  background-color: #f8f8f8;\n  margin-bottom: 10px; }\n  .bodyy mat-card mat-card-title {\n    font-weight: 600 !important;\n    border-bottom-right-radius: 18px;\n    border-top-left-radius: 18px;\n    text-align: center;\n    padding: 10px; }\n  .bodyy mat-card p {\n    font-size: 14px;\n    font-weight: 600 !important;\n    color: #646464; }\n  .bodyy .main-note {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .bodyy .note {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #4d4949;\n  margin-bottom: 10px;\n  font-weight: 800 !important;\n  font-size: 16px; }\n  .bodyy .note i {\n    font-size: 35px;\n    color: #000; }\n  .bodyy .form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .bodyy .form .separator {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .bodyy .form .separator p {\n      background-color: #cd0000;\n      border-radius: 50px;\n      padding: 15px;\n      color: #fff; }\n  .bodyy .form mat-form-field {\n    width: 100%;\n    font-size: 16px;\n    font-weight: bolder; }\n  .bodyy .form mat-checkbox {\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 8px; }\n  .bodyy .form .radio-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .bodyy .form .radio-button {\n    margin: 5px;\n    font-size: 16px; }\n  .bodyy .form .mat-radio.label {\n    white-space: normal !important; }\n  .bodyy .form label {\n    font-size: 16px;\n    font-weight: 600 !important;\n    color: #47474b; }\n  .bodyy .form label span {\n      color: #000; }\n  .bodyy .form1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .bodyy .form1 .separator {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .bodyy .form1 .separator p {\n      background-color: #cd0000;\n      border-radius: 50px;\n      padding: 15px;\n      color: #fff; }\n  .bodyy .form1 .leftSider {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3; }\n  .bodyy .form1 .rightSider {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .bodyy .form1 mat-form-field {\n    width: 100%;\n    font-size: 16px;\n    font-weight: bolder; }\n  .bodyy .form1 mat-checkbox {\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 8px; }\n  .bodyy .form1 .radio-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .bodyy .form1 .radio-button {\n    margin: 5px;\n    font-size: 16px; }\n  .bodyy .form1 .mat-radio.label {\n    white-space: normal !important; }\n  .bodyy .form1 label {\n    font-size: 16px;\n    font-weight: 600 !important;\n    color: #47474b; }\n  .bodyy .form1 label span {\n      color: #000; }\n  .bodyy .form > * {\n  width: 100%; }\n  .bodyy mat-horizontal-stepper .stepperbutton {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .mat-horizontal-stepper-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 66px;\n  overflow: hidden;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 9px !important; }\n  .enroll-plan {\n  padding: 10px 20px;\n  margin-right: 10px;\n  margin-top: 30px;\n  margin-bottom: 20px;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n  .enroll-plan .pro {\n    text-align: left;\n    border-bottom: 5px solid #ff4270;\n    font-weight: bold; }\n  .enroll-plan p {\n    font-size: 16px; }\n  .enroll-plan span {\n    font-size: 14px; }\n  .enroll-plan h2,\n  .enroll-plan h4 {\n    font-weight: bold;\n    font-size: 16px; }\n  .enroll-plan mat-card {\n    padding: 5px;\n    background-color: #e8e8e8; }\n  .enroll-plan .lable {\n    margin-top: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    font-style: italic;\n    color: #6c6a6a; }\n  .enroll-plan .rateSheet {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    padding: 5px; }\n  .enroll-plan .rateSheet div {\n      display: inherit;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n  .enroll-plan .rateSheet span {\n      font-size: 16px;\n      font-weight: bold; }\n  .enroll-plan .pdf {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 10px; }\n  .enroll-plan .pdf a {\n      font-size: 16px;\n      margin: 3px 10px;\n      font-weight: bold; }\n  .mat-list .mat-list-item {\n  height: 40px;\n  font-size: 16px;\n  font-weight: bold; }\n  :host ::ng-deep .mat-list .mat-list-item .mat-list-item-content {\n  padding: 0 1px; }\n  .enrol {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  @media only screen and (max-width: 1000px) {\n  .enroll-container .inner {\n    width: 100%; } }\n  @media (min-width: 1200px) {\n  .container {\n    width: 1450px; } }\n  @media (max-width: 800px) {\n  .enrol {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n  ::ng-deep .mat-step-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  ::ng-deep .mat-step-header .mat-step-label .mat-step-label-active {\n  padding-top: 5px; }\n  .hintMsg {\n  margin-top: 10px;\n  margin-left: 35px; }\n  th {\n  padding-right: 10px;\n  font-size: 16px; }\n  .subRow {\n  padding-bottom: 5px;\n  padding-top: 5px; }\n  .dataRow {\n  text-align: center; }\n  .headingDiv {\n  font-size: 15px !important; }\n  .dataDiv {\n  font-size: 16px !important;\n  font-weight: bold !important;\n  padding-bottom: 5px !important; }\n  #pricing th {\n  border-top: 1px solid #333;\n  border-bottom: 1px solid #333; }\n  .mainDiv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .innerDiv {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .mat-stepper-horizontal {\n  font-family: 'Open Sans'; }\n  .anchor {\n  color: #cd0000; }\n  .anchor .anchor-text {\n    -webkit-transition: 0.3s ease;\n    transition: 0.3s ease; }\n  .anchor:hover {\n  color: #cd0000;\n  text-decoration: none; }\n  .anchor:hover .anchor-text {\n    -webkit-transition: 0.3s ease;\n    transition: 0.3s ease;\n    font-weight: bold; }\n  .anchor-text {\n  margin-top: 0px;\n  margin-bottom: 4px;\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/enrollment/enrollment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EnrollmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DespositPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EnrollmentConsentDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container_Store_Services__ = __webpack_require__("./src/app/Container/Store/Services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__always_auth_service__ = __webpack_require__("./src/app/always-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var EnrollmentComponent = /** @class */ (function () {
    function EnrollmentComponent(formBuilder, dialog, enrollment, router, service) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.enrollment = enrollment;
        this.router = router;
        this.service = service;
        this.summary = true;
        this.check1 = false;
        this.check2 = false;
        this.check3 = false;
        this.check4 = false;
        this.status = true;
        this.serviceAddresscheck = false;
        this.showSpinner = false;
        this.currentdate = new Date();
        this.birthDate = new Date();
        this.date = this.currentdate.getDate() + "/" + (this.currentdate.getMonth() + 1) + "/" + this.currentdate.getFullYear();
        this.CreditVerification = "Check My Credit";
        this.products = [];
        this.services = ["Move-in (New Service)", "Switching from another Service Provider on Next Available Schedule Date", "Switching from another Service Provider on a Specific Date"];
        this.creditCards = [{ val: { status: true, value: "Check My Credit" } }, { val: { status: false, value: "Dont Check Credit" } }, { val: { status: false, value: "Waive Deposit" } }];
        this.waivedeposit = ["I will submit a letter from my current provider showing timely payments for the last 12 months with no more than 1 late payment", "I am 65+ and can provide proof of timely payments to my current electric provider.", "I am a victim of family violence and will complete and return the required forms."];
        this.states = [{ viewValue: "Alabama", value: "AL" }, { viewValue: "Alaska", value: "AK" }, { viewValue: "Arizona", value: "AZ" }, { viewValue: "Arkansas", value: "AR" }, { viewValue: "California", value: "CA" }, { viewValue: "Colorado", value: "CO" }, { viewValue: "Connecticut", value: "CT" }, { viewValue: "Delaware", value: "DE" }, { viewValue: "District of Columbia", value: "DC" }, { viewValue: "Florida", value: "FL" }, { viewValue: "Georgia", value: "GA" }, { viewValue: "Hawaii", value: "HI" }, { viewValue: "Idaho", value: "ID" }, { viewValue: "Illinois", value: "IL" }, { viewValue: "Indiana", value: "IN" }, { viewValue: "Iowa", value: "IA" }, { viewValue: "Kansas", value: "KS" }, { viewValue: "Kentucky", value: "KY" }, { viewValue: "Louisiana", value: "LA" }, { viewValue: "Maine", value: "ME" }, { viewValue: "Maryland", value: "MD" }, { viewValue: "Massachusetts", value: "MA" }, { viewValue: "Michigan", value: "MI" }, { viewValue: "Minnesota", value: "MN" }, { viewValue: "Mississippi", value: "MS" }, { viewValue: "Missouri", value: "MO" }, { viewValue: "Montana", value: "MT" }, { viewValue: "Nebraska", value: "NE" }, { viewValue: "Nevada", value: "NV" }, { viewValue: "New Hampshire", value: "NH" }, { viewValue: "New Jersey", value: "NJ" }, { viewValue: "New Mexico", value: "NM" }, { viewValue: "New York", value: "NY" }, { viewValue: "North Carolina", value: "NC" }, { viewValue: "North Dakota", value: "ND" }, { viewValue: "Ohio", value: "OH" }, { viewValue: "Oklahoma", value: "OK" }, { viewValue: "Oregon", value: "OR" }, { viewValue: "Pennsylvania", value: "PA" }, { viewValue: "Rhode Island", value: "RI" }, { viewValue: "South Carolina", value: "SC" }, { viewValue: "South Dakota", value: "SD" }, { viewValue: "Tennessee", value: "TN" }, { viewValue: "Texas", value: "TX" }, { viewValue: "Utah", value: "UT" }, { viewValue: "Vermont", value: "VT" }, { viewValue: "Virginia", value: "VA" }, { viewValue: "Washington", value: "WA" }, { viewValue: "West Virginia", value: "WV" }, { viewValue: "Wisconsin", value: "WI" }, { viewValue: "Wyoming", value: "WY" }, { viewValue: "American Samoa", value: "AS" }, { viewValue: "Guam", value: "GU" }, { viewValue: "Northern Mariana Islands", value: "MP" }, { viewValue: "Puerto Rico", value: "PR" }, { viewValue: "U.S. Virgin Islands", value: "VI" }, { viewValue: "Micronesia", value: "FM" }, { viewValue: "Marshall Islands", value: "MH" }, { viewValue: "Palau", value: "PW" }, { viewValue: "U.S. Armed Forces – Americas[d]", value: "AA" }, { viewValue: "U.S. Armed Forces – Europe[e]", value: "AE" }, { viewValue: "U.S. Armed Forces – Pacific[f]", value: "AP" }, { viewValue: "Northern Mariana Islands", value: "CM" }, { viewValue: "Panama Canal Zone", value: "CZ" }, { viewValue: "Nebraska", value: "NB" }, { viewValue: "Philippine Islands", value: "PI" }, { viewValue: "Trust Territory of the Pacific Islands", value: "TT" }];
        this.questions = ["PIN", "What school did you attend sixth grade", "In what city or town was your first job", "What was the name of your favorite teacher", "What was your first car"];
        this.languages = [{ value: "Default", viewValue: "English" }, { value: "es.Default", viewValue: "Spanish" }];
        this.aboutUs = [{ name: "Web", value: "01" }, { name: "OutBound Call TeleMarketer", value: "02" }, { name: "Inbound Call Internal", value: "03" }, { name: "Mail", value: "04" }, { name: "Other", value: "05" }];
        this.cards = ["Master", "Discover", "Visa"];
        this.providers = ["Altel", "Ameritech", "ATT Wireless", "Bell Canada", "Bellsouth", "Boost", "Cellular South", "CellularOne", "CellularOne MMS", "Centennial WireLess", "Cincinnati Bell", "Cingular", "Cricket", "Edge Wireless", "Metro PCS", "Nextel", "O2", "Orange", "Qwest", "Rogers WireLess", "Spint PCS", "Suncom", "T-Mobile", "Teleflip", "Tellus Mobility", "U.S. Cellular", "Verizon", "Virgin Mobile"];
        this.years = [];
        this.months = [{ value: "01", viewValue: "January" }, { value: "02", viewValue: "February" }, { value: "03", viewValue: "March" }, { value: "04", viewValue: "April" }, { value: "05", viewValue: "May" }, { value: "06", viewValue: "June" }, { value: "07", viewValue: "July" }, { value: "08", viewValue: "August" }, { value: "09", viewValue: "September" }, { value: "10", viewValue: "October" }, { value: "11", viewValue: "November" }, { value: "12", viewValue: "December" }];
        this.myFilter = function (d) {
            var day = d.getDay();
            var date = d.getDate();
            var month = d.getMonth();
            var weekend = day !== 0 && day !== 6;
            if (_this.holidays.length > 0) {
                var middle = [];
                for (var index = 0; index < _this.holidays.length; index++) {
                    var d_1 = new Date(_this.holidays[index]);
                    middle[index] = month !== d_1.getMonth() || date !== d_1.getDate();
                }
                return weekend && middle.reduce(_this.getAnd);
            }
            else
                return weekend;
        };
        this.creditCardString = '';
        this.findBtn = false;
        this.billingAddresses = [];
        this.alertcondition = false;
        this.setAutoPay = false;
        this.showCheckbox = false;
        this.loader = false;
        this.creditverification = {};
        this.creditvalue = '';
    }
    EnrollmentComponent.prototype.getAnd = function (total, num) {
        return total && num;
    };
    EnrollmentComponent.prototype.goToTop = function () {
        window.scrollTo(0, 0);
    };
    EnrollmentComponent.prototype.reset = function () {
        this.showCheckbox = false;
        console.log("check");
    };
    EnrollmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentYear = new Date().getFullYear();
        this.years[0] = currentYear;
        for (var index = 1; index < 20; index++) {
            "" + (this.years[index] = this.years[index - 1] + 1);
        }
        this.birthDate.setFullYear(this.currentdate.getFullYear() - 18);
        this.startFormGroup = this.formBuilder.group({
            goNext: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]
        });
        this.firstFormGroup = this.formBuilder.group({
            enrol_type: ['Move-in (New Service)'],
            request_date: [this.enrollment.Date(''), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required],
        });
        this.secondFormGroup = this.formBuilder.group({
            cust_firstname: [''],
            cust_mi: [''],
            cust_lastname: [''],
            cust_dob: [''],
            contact1: [''],
            ssn: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].pattern('^[0-9]{3}-[0-9]{2}-[0-9]{4}$'), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]],
            cust_drl_nbr: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].pattern("[0-9]+")],
            personal_pin: [''],
            cust_drl_state: [''],
            personal_ref_code: [''],
            cust_drl_expire: [null],
            phone1: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')],
            phone2: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')],
            cust_sms_provider: [''],
            cust_bill_type: ['Default'],
            email_address: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].email],
            referred_by: [''],
        });
        this.thirdFormGroup = this.formBuilder.group({
            cm_address1: [''],
            cm_address2: [''],
            cm_city: [''],
            cm_state: ['TX'],
            cm_zip: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].pattern("[0-9]+")],
            complete: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]
        });
        this.fourFormGroup = this.formBuilder.group({
            life_support: [''],
            deposit_card_type: [{ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]],
            deposit_cc_no: [{ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].pattern("[0-9-]+")]],
            deposit_security_code: [{ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].pattern("[0-9]+")]],
            deposit_expiry_MM: [{ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]],
            deposit_expiry_YYYY: [{ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]],
            save_acct_ref_on_file: ['0']
        });
        window.scrollTo(0, 0);
        this.products.push(JSON.parse(localStorage.getItem('productSummary')));
        setTimeout(function () {
            if (_this.showSpinner == null) {
                _this.showSpinner = true;
            }
        }, 500);
    };
    EnrollmentComponent.prototype.findBillingAddress = function () {
        var _this = this;
        this.billingAddresses = [];
        if (this.thirdFormGroup.controls.cm_address1.valid && this.thirdFormGroup.controls.cm_city.valid && this.thirdFormGroup.controls.cm_state.valid && this.thirdFormGroup.controls.cm_zip.valid) {
            this.findBtn = true;
            var obj = {
                name: this.thirdFormGroup.controls.cm_address1.value,
                address_1: this.thirdFormGroup.controls.cm_address2.value,
                zipcode: this.thirdFormGroup.controls.cm_zip.value,
                city: this.thirdFormGroup.controls.cm_city.value,
                state: this.thirdFormGroup.controls.cm_state.value,
                bypass: true
            };
            this.enrollment.findBillingAddress(obj).subscribe(function (res) {
                _this.findBtn = false;
                if (res['status'] == true) {
                    _this.billingAddresses.push(res['message']['AddressValidateResponse']['Address']);
                    window.scrollTo(0, 600);
                }
                else {
                    _this.alertcondition = true;
                    _this.alert = res['message'];
                }
            }, function (err) { _this.findBtn = false; });
        }
    };
    EnrollmentComponent.prototype.SelectBillingPrem = function (value) {
        this.thirdFormGroup.controls.complete.setValue('Done');
        if (value != 'same') {
            this.thirdFormGroup.controls.cm_address1.setValue(value.Address1);
            this.thirdFormGroup.controls.cm_address2.setValue(value.Address2);
            this.thirdFormGroup.controls.cm_zip.setValue("" + value.Zip5 + value.Zip4);
            this.thirdFormGroup.controls.cm_city.setValue(value.City);
            this.thirdFormGroup.controls.cm_state.setValue(value.State);
        }
        document.getElementById('next1').click();
    };
    EnrollmentComponent.prototype.mychange = function (event) {
        if (event == 51 || event == 52 || event == 53 || event == 54 || event == 55 || event == 56) {
            this.creditCardString = 'MasterCard';
        }
        else if (event == 6) {
            this.creditCardString = 'Discover/Diners Club';
        }
        else if (event == 3) {
            this.creditCardString = 'American Express/Diners Club';
        }
        else if (event == '') {
            this.creditCardString = '';
        }
    };
    EnrollmentComponent.prototype.requestDateValidation = function () {
        var _this = this;
        this.service.dataa.subscribe(function (res) {
            _this.holidays = res['DATES']['holidays'];
            _this.ReqDateResponse = res['DATES']['row'];
            _this.ReqDateResponse.map(function (value) {
                _this.first_standard_date = value.first_standard_date;
                _this.first_available_date = value.first_available_date;
                _this.end_date = value.end_date;
            });
            _this.startFormGroup.controls.goNext.setValue('asdasd');
            _this.first_standard_date = _this.first_standard_date.slice(0, 10);
            _this.first_available_date = _this.first_available_date.slice(0, 10);
            _this.end_date = _this.end_date.slice(0, 10);
            _this.firstFormGroup.controls.request_date.setValue(_this.first_standard_date);
        });
        this.service.dataa1.subscribe(function (res) {
            if (res != null && res != undefined) {
                _this.premiseInfo = res;
            }
        });
    };
    EnrollmentComponent.prototype.stepSession = function () {
        if (this.thirdFormGroup.valid == true) {
            var data = {
                phone1: this.secondFormGroup.controls.phone1.value,
                phone2: this.secondFormGroup.controls.phone2.value,
                email_address: this.secondFormGroup.controls.email_address.value,
                pm_address2: this.premiseInfo['address1'],
                cust_firstname: this.secondFormGroup.controls.cust_firstname.value,
                premise_id: this.premiseInfo['premise_id'],
                cust_lastname: this.secondFormGroup.controls.cust_lastname.value,
                cust_mi: this.secondFormGroup.controls.cust_mi.value,
                offcycle_switch_date: this.enrollment.Date(this.firstFormGroup.controls.request_date.value),
                request_date: this.enrollment.Date(this.firstFormGroup.controls.request_date.value),
                enrol_type: "",
            };
            data.enrol_type = data.enrol_type == 'Move-in (New Service)' ? "M" : "S";
            this.enrollment.nextSessionStep(data).subscribe(function (res) { });
        }
    };
    EnrollmentComponent.prototype.showSummary = function () {
        this.summary = this.summary == false ? true : false;
    };
    EnrollmentComponent.prototype.changeAutoBillPay = function (event) {
        this.setAutoPay = event.checked;
        this.fourFormGroup.controls.deposit_card_type.setValue('');
        this.fourFormGroup.controls.deposit_cc_no.setValue('');
        this.fourFormGroup.controls.deposit_security_code.setValue('');
        this.fourFormGroup.controls.deposit_expiry_MM.setValue('');
        this.fourFormGroup.controls.deposit_expiry_YYYY.setValue('');
        if (event.checked) {
            this.fourFormGroup.controls.save_acct_ref_on_file.setValue('1');
            this.fourFormGroup.controls.deposit_card_type.enable();
            this.fourFormGroup.controls.deposit_cc_no.enable();
            this.fourFormGroup.controls.deposit_security_code.enable();
            this.fourFormGroup.controls.deposit_expiry_MM.enable();
            this.fourFormGroup.controls.deposit_expiry_YYYY.enable();
        }
        else {
            this.fourFormGroup.controls.save_acct_ref_on_file.setValue('0');
            this.fourFormGroup.controls.deposit_card_type.disable();
            this.fourFormGroup.controls.deposit_cc_no.disable();
            this.fourFormGroup.controls.deposit_security_code.disable();
            this.fourFormGroup.controls.deposit_expiry_MM.disable();
            this.fourFormGroup.controls.deposit_expiry_YYYY.disable();
        }
    };
    EnrollmentComponent.prototype.SameAsServiceAddress = function () {
        if (this.premiseInfo != null || this.premiseInfo != undefined) {
            if (this.serviceAddresscheck) {
                this.thirdFormGroup.controls.cm_address2.setValue(this.premiseInfo.address1);
                this.thirdFormGroup.controls.cm_city.setValue(this.premiseInfo.city);
                this.thirdFormGroup.controls.cm_state.setValue(this.premiseInfo.state);
                this.thirdFormGroup.controls.cm_zip.setValue(this.premiseInfo.zip);
            }
            else {
                this.thirdFormGroup.controls.cm_address1.reset();
                this.thirdFormGroup.controls.cm_address2.reset();
                this.thirdFormGroup.controls.cm_city.reset();
                this.thirdFormGroup.controls.cm_state.reset();
                this.thirdFormGroup.controls.cm_zip.reset();
            }
        }
    };
    EnrollmentComponent.prototype.radioChangeCreditVerification = function (event) {
        this.creditvalue = event.value;
        switch (event.value) {
            case "Check My Credit":
                this.flow_status = '-102';
                this.showCheckbox = true;
                break;
            case "Dont Check Credit":
                this.flow_status = '-104';
                break;
            case "Waive Deposit":
                this.flow_status = '-229';
                break;
            default: break;
        }
    };
    EnrollmentComponent.prototype.radioChangeCreditVerificationsub = function (event) {
        if (this.creditvalue == 'Waive Deposit' && event.value == 'I will submit a letter from my current provider showing timely payments for the last 12 months with no more than 1 late payment') {
            this.flow_status = '-229';
        }
        else if (this.creditvalue == 'Waive Deposit' && event.value == 'I am 65+ and can provide proof of timely payments to my current electric provider.') {
            this.flow_status = '-228';
        }
        else if (this.creditvalue == 'Waive Deposit' && event.value == 'I am a victim of family violence and will complete and return the required forms.') {
            this.flow_status = '-227';
        }
    };
    EnrollmentComponent.prototype.enroll = function () {
        var _this = this;
        this.submitBtn = true;
        if ((this.check1 == true && this.check2 == true && this.check3 == true && this.check4) || (this.check1 == true && this.check2 == true && this.check3 == true)) {
            var second = this.secondFormGroup.value;
            second.personal_pin = "[{\"id\":\"1\",\"q\":\"30\",\"a\":\"" + this.secondFormGroup.controls.personal_ref_code.value + "\",\"q_d\":\"" + this.secondFormGroup.controls.personal_pin.value + "\"}]";
            var obj_1 = __assign({}, this.firstFormGroup.value, second, this.thirdFormGroup.value, this.fourFormGroup.getRawValue());
            this.productDetails = JSON.parse(localStorage.getItem('productSummary'));
            obj_1['enroll_product'] = this.productDetails.product_id;
            obj_1['product_pk'] = this.productDetails.id;
            obj_1['rate'] = this.productDetails.rate;
            obj_1['batch_rate'] = this.productDetails.batch_rate;
            obj_1['contract_term'] = this.productDetails.display_term;
            obj_1['efl_link'] = this.productDetails.product_efl_url;
            obj_1['deposit_amount'] = "300.00";
            obj_1['deposit_plan'] = "PNSYSDEPOSIT";
            obj_1['deposit_pay_amount'] = "0.00";
            obj_1['deposit_charge'] = "N";
            obj_1['life_support'] = this.fourFormGroup.controls.life_support.value == true ? "Y" : "N";
            localStorage.setItem('enrol_type', JSON.stringify(obj_1.enrol_type));
            obj_1['enrol_type'] = obj_1.enrol_type == 'Move-in (New Service)' ? "M" : "S";
            obj_1['cust_dob'] = this.enrollment.Date(this.secondFormGroup.controls.cust_dob.value);
            obj_1['request_date'] = this.enrollment.Date(this.firstFormGroup.controls.request_date.value);
            obj_1['cust_drl_expire'] = this.enrollment.DateDrl(this.secondFormGroup.controls.cust_drl_expire.value);
            obj_1['source'] = "WebLite";
            obj_1['ua'] = "" + localStorage.getItem('ua');
            obj_1['plan_group'] = "" + localStorage.getItem('plan');
            obj_1['promo_code'] = (localStorage.getItem('promotionCode') != "\"\"" && localStorage.getItem('promotionCode') != null && localStorage.getItem('promotionCode') != undefined) ? localStorage.getItem('promotionCode') : '';
            obj_1['priority_code'] = "" + localStorage.getItem('priorityCode');
            obj_1['offcycle_switch_date'] = obj_1.request_date;
            obj_1['premise_id'] = this.premiseInfo['premise_id'];
            obj_1['flow_status'] = this.flow_status;
            obj_1['pm_address2'] = this.premiseInfo['address1'];
            obj_1['pm_city'] = this.premiseInfo['city'];
            obj_1['pm_country'] = '';
            obj_1['pm_duns'] = this.premiseInfo['provider_id'];
            obj_1['pm_state'] = this.premiseInfo['state'];
            obj_1['pm_zip'] = this.premiseInfo['zip'];
            obj_1['pm_county'] = this.premiseInfo['countyname'];
            obj_1['waiver_notice'] = 'Y';
            if (this.setAutoPay == true) {
                obj_1['deposit_pay_type'] = "C";
                obj_1['deposit_acct_type'] = "ccard";
            }
            var dialogRef = this.dialog.open(EnrollmentConsentDialog, {
                width: '750px',
                data: obj_1,
                autoFocus: false
            });
            var consent_1;
            dialogRef.afterClosed().subscribe(function (result) {
                consent_1 = result;
                if (consent_1 == true) {
                    _this.loader = true;
                    switch (_this.flow_status) {
                        // Dont Check Credit
                        case '-104':
                            _this.enrollment.initialSubmit(obj_1).subscribe(function (response) {
                                if (response['status'] == true) {
                                    obj_1.sys_batch_no = response['message']['SYSBATCHNO'];
                                    obj_1.use_cust_id = response['message']['use_cust_id'];
                                    obj_1.enroll_status = 'Pending for Deposit';
                                    _this.loader = false;
                                    _this.dialog.open(DespositPopup, {
                                        autoFocus: false,
                                        data: obj_1
                                    });
                                }
                                else {
                                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()("Could not connect to server, please try again.", '', 'error').then(function (t) { return _this.submitBtn = false; });
                                }
                            });
                            break;
                        // Check Credit
                        case '-102':
                            obj_1.enroll_status = 'Pending for Deposit';
                            _this.enrollment.initialSubmit(obj_1).subscribe(function (initialRes) {
                                if (initialRes['status'] == true) {
                                    obj_1.sys_batch_no = initialRes['message']['SYSBATCHNO'];
                                    obj_1.use_cust_id = initialRes['message']['use_cust_id'];
                                    _this.submitBtn = false;
                                    _this.enrollment.creditCheck(obj_1).subscribe(function (res) {
                                        if (res['status'] == true) {
                                            if (res['message']['CC']['CreditCheckStatus'] == "true") {
                                                if (res['message']['CC']['CreditCheckDeposit'] == "" || res['message']['CC']['CreditCheckDeposit'] == "0.00" || res['message']['CC']['CreditCheckDeposit'] == "0") {
                                                    obj_1.flow_status = "100";
                                                    obj_1.enroll_status = 'Pending for Switch';
                                                    _this.submitBtn = false;
                                                    res['show_message'] = "Credit check successful.";
                                                    res['message_color'] = "black";
                                                    res['message'] = {};
                                                    res['message']['use_cust_id'] = obj_1.use_cust_id;
                                                    _this.service.changeData(res);
                                                    _this.router.navigate(['enrollsuccess']);
                                                }
                                                else {
                                                    // pending payment and credit check success
                                                    obj_1.flow_status = "-120";
                                                    var para = {
                                                        rec_type: "CHG",
                                                        sys_batch_no: obj_1.sys_batch_no,
                                                        flow_status: "-120",
                                                    };
                                                    _this.enrollment.changeEnrollmentStatus(para).subscribe(function (resp) {
                                                        _this.loader = false;
                                                        _this.dialog.open(DespositPopup, {
                                                            autoFocus: false,
                                                            data: obj_1
                                                        });
                                                    });
                                                }
                                            }
                                            else {
                                                // No score return
                                                obj_1.flow_status = "-121";
                                                obj_1.custom_msg = 'We were unable to check your credit. Please pay deposit of $300.00 to proceed or call our customer service at 1-888-545-4687.';
                                                var para = {
                                                    rec_type: "CHG",
                                                    sys_batch_no: obj_1.sys_batch_no,
                                                    flow_status: "-121",
                                                };
                                                _this.enrollment.changeEnrollmentStatus(para).subscribe(function (resp) {
                                                    _this.loader = false;
                                                    _this.dialog.open(DespositPopup, {
                                                        autoFocus: false,
                                                        data: obj_1
                                                    });
                                                });
                                            }
                                        }
                                        else {
                                            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()(res['message'], '', 'error').then(function (t) { return _this.submitBtn = false; });
                                        }
                                    }, function (err) { _this.submitBtn = false; });
                                }
                                else {
                                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()("Could not connect to server, please try again.", '', 'error').then(function (t) { return _this.submitBtn = false; });
                                }
                            });
                            break;
                        // Waiver Deposit
                        case '-229':
                        case '-228':
                        case '-227':
                            obj_1.enroll_status = 'Pending for Waiver Documents';
                            _this.enrollment.initialSubmit(obj_1).subscribe(function (initialResponse) {
                                if (initialResponse['status'] == true) {
                                    obj_1.sys_batch_no = initialResponse['message']['SYSBATCHNO'];
                                    obj_1.use_cust_id = initialResponse['message']['use_cust_id'];
                                    _this.enrollment.dccFinalSubmit(obj_1).subscribe(function (res) {
                                        if (res['status'] == true) {
                                            _this.submitBtn = false;
                                            res['show_message'] = "Please note that your enrollment will be pending until we recieve your waiver documents, fax your waiver documents to us at 281.715.5767 or email us at CustomerService@OUREnergyLLC.com.";
                                            res['message_color'] = "red";
                                            res['message'] = {};
                                            res['message']['use_cust_id'] = obj_1.use_cust_id;
                                            _this.service.changeData(res);
                                            _this.router.navigate(['enrollsuccess']);
                                        }
                                        else {
                                            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()(res['message'], '', 'error').then(function (t) { return _this.submitBtn = false; });
                                        }
                                    }, function (err) { _this.submitBtn = false; });
                                }
                                else {
                                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()("Could not connect to server, please try again.", '', 'error').then(function (t) { return _this.submitBtn = false; });
                                }
                            });
                            break;
                        default:
                            break;
                    }
                }
                else {
                    _this.submitBtn = false;
                }
            });
        }
    };
    EnrollmentComponent.prototype.disable_requestDate = function () {
        this.firstFormGroup.controls.request_date.disable();
    };
    EnrollmentComponent.prototype.enable_requestDate = function () {
        this.firstFormGroup.controls.request_date.enable();
    };
    EnrollmentComponent.prototype.radioChange = function (event) {
        var _this = this;
        if (event.value == 'Switching from another Energy Provider on Next Available Schedule Date') {
            this.firstFormGroup.controls.request_date.disable();
            this.ReqDateResponse.map(function (value) {
                _this.first_standard_date = value.first_standard_date;
                _this.first_available_date = value.first_available_date;
            });
            this.first_standard_date = this.first_standard_date.slice(0, 10);
            this.first_available_date = this.first_available_date.slice(0, 10);
            this.firstFormGroup.controls.request_date.setValue(this.first_standard_date);
        }
        else if (event.value == 'Switching from another Energy Provider on a Specific Date') {
            this.ReqDateResponse.map(function (value) {
                _this.firstFormGroup.controls.request_date.enable();
                _this.first_standard_date = value.first_standard_date;
                _this.first_available_date = value.first_available_date;
            });
            this.first_standard_date = this.first_standard_date.slice(0, 10);
            this.first_available_date = this.first_standard_date;
            this.firstFormGroup.controls.request_date.setValue(this.first_standard_date);
        }
        else {
            this.firstFormGroup.controls.request_date.enable();
            this.ReqDateResponse.map(function (value) {
                _this.first_standard_date = value.first_standard_date;
                _this.first_available_date = value.first_available_date;
            });
            this.first_standard_date = this.first_standard_date.slice(0, 10);
            this.first_available_date = this.first_available_date.slice(0, 10);
            this.firstFormGroup.controls.request_date.setValue(this.first_standard_date);
        }
    };
    EnrollmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-enrollment',
            template: __webpack_require__("./src/app/enrollment/enrollment.component.html"),
            styles: [__webpack_require__("./src/app/enrollment/enrollment.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__Container_Store_Services__["c" /* EnrollmentService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__always_auth_service__["f" /* UserService */]])
    ], EnrollmentComponent);
    return EnrollmentComponent;
}());

var DespositPopup = /** @class */ (function () {
    function DespositPopup(router, service, enrollment, dialog, dialogRef, data) {
        this.router = router;
        this.service = service;
        this.enrollment = enrollment;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.years = [];
        this.months = [
            { value: "01", viewValue: "January" },
            { value: "02", viewValue: "February" },
            { value: "03", viewValue: "March" },
            { value: "04", viewValue: "April" },
            { value: "05", viewValue: "May" },
            { value: "06", viewValue: "June" },
            { value: "07", viewValue: "July" },
            { value: "08", viewValue: "August" },
            { value: "09", viewValue: "September" },
            { value: "10", viewValue: "October" },
            { value: "11", viewValue: "November" },
            { value: "12", viewValue: "December" },
        ];
        this.cards = ['Master', 'Discover', 'Visa'];
        this.btnDisabled = false;
        this.sendingData = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormGroup */]({
            de_card_type: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]),
            de_cc_no: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].pattern("[0-9-]+")]),
            de_security_code: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].pattern("[0-9]+")]),
            de_expiry_MM: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]),
            de_expiry_YYYY: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]),
            de_autopay: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */](true, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]),
        });
        dialogRef.disableClose = true;
    }
    DespositPopup.prototype.ngOnInit = function () {
        var currentYear = new Date().getFullYear();
        this.years[0] = currentYear;
        for (var index = 1; index < 20; index++) {
            "" + (this.years[index] = this.years[index - 1] + 1);
        }
    };
    DespositPopup.prototype.submit = function () {
        var _this = this;
        if (this.sendingData.valid == true) {
            this.btnDisabled = true;
            var obj_2 = this.data;
            obj_2['de_expiry_MM'] = this.sendingData.controls.de_expiry_MM.value;
            obj_2['de_expiry_YYYY'] = String(this.sendingData.controls.de_expiry_YYYY.value);
            obj_2['de_security_code'] = this.sendingData.controls.de_security_code.value;
            obj_2['de_card_type'] = this.sendingData.controls.de_card_type.value;
            obj_2['de_cc_no'] = this.sendingData.controls.de_cc_no.value;
            obj_2['de_autopay'] = this.sendingData.controls.de_autopay.value == true ? obj_2.de_autopay = "Y" : obj_2.deposit_autopay = "N";
            obj_2.pay_later = false;
            delete obj_2.custom_msg;
            this.enrollment.dccSubmit(obj_2).subscribe(function (res) {
                if (res['status'] == true) {
                    if (res['message'] == "") {
                        _this.btnDisabled = false;
                        res['show_message'] = "Your deposit is submitted sucessfully.";
                        res['message_color'] = "black";
                        res['message'] = {};
                        res['message']['use_cust_id'] = obj_2.use_cust_id;
                        _this.dialogRef.close();
                        _this.service.changeData(res);
                        _this.router.navigate(['enrollsuccess']);
                    }
                    else {
                        _this.btnDisabled = false;
                        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()(res['message'], '', 'error');
                    }
                }
                else {
                    _this.btnDisabled = false;
                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()(res['message'], '', 'error');
                }
            }, function (err) { _this.btnDisabled = false; });
        }
    };
    DespositPopup.prototype.cancel = function () {
        var _this = this;
        this.btnDisabled = true;
        var obj = this.data;
        obj.de_expiry_MM = "";
        obj.de_expiry_YYYY = "";
        obj.de_security_code = "";
        obj.de_card_type = "";
        obj.de_cc_no = "";
        obj.pay_later = true;
        delete obj.custom_msg;
        this.enrollment.dccFinalSubmit(obj).subscribe(function (res) {
            if (res['status'] == true) {
                _this.btnDisabled = false;
                res['show_message'] = "Please call us at 1-888-545-4687 to submit your deposit or check your email";
                res['message_color'] = "red";
                res['message'] = {};
                res['message']['use_cust_id'] = obj.use_cust_id;
                _this.dialogRef.close();
                _this.service.changeData(res);
                _this.router.navigate(['enrollsuccess']);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()(res['message'], '', 'error').then(function (t) { return _this.btnDisabled = false; });
            }
        }, function (err) { _this.btnDisabled = false; });
    };
    DespositPopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'confirmationpopup',
            template: __webpack_require__("./src/app/enrollment/depositpopup.component.html"),
            styles: [__webpack_require__("./src/app/enrollment/depositpopup.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__always_auth_service__["f" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__Container_Store_Services__["c" /* EnrollmentService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], DespositPopup);
    return DespositPopup;
}());

var EnrollmentConsentDialog = /** @class */ (function () {
    function EnrollmentConsentDialog(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        thisDialogRef.disableClose = true;
        this.data = __assign({}, this.data, JSON.parse(localStorage.getItem('productSummary')), { enrol_type: JSON.parse(localStorage.getItem('enrol_type')) });
    }
    EnrollmentConsentDialog.prototype.ngOnInit = function () { };
    EnrollmentConsentDialog.prototype.submit = function () {
        this.thisDialogRef.close(true);
    };
    EnrollmentConsentDialog.prototype.close = function () {
        this.thisDialogRef.close(false);
    };
    EnrollmentConsentDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/enrollment/consent-dialog.html"),
            styles: [__webpack_require__("./src/app/enrollment/consent-dialog.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], EnrollmentConsentDialog);
    return EnrollmentConsentDialog;
}());



/***/ }),

/***/ "./src/app/forget-password/forget-password.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"forget\">\r\n    <div class=\"close-dialog\"><i class=\"material-icons\" (click)=\"close()\">\r\n            close\r\n            </i></div>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"email\" [formControl]=\"validate_email\" required>\r\n        <mat-error *ngIf=\"validate_email.invalid\">{{getErrorMessageEmail()}}</mat-error>\r\n        <mat-placeholder>Enter Your Email </mat-placeholder>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"custid\" [formControl]=\"cust_id\" required>\r\n        <mat-error *ngIf=\"cust_id.invalid\">{{getErrorMessageAcc()}}</mat-error>\r\n        <mat-placeholder>Enter Your Account no. </mat-placeholder>\r\n    </mat-form-field>\r\n    <div class=\"recaptcha\">\r\n        <div class=\"text-center\">\r\n            <app-recapcha></app-recapcha>\r\n        </div>\r\n        <div>\r\n            <p class=\"error\"> {{cap_result}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"spinner\" *ngIf=\"showSpinner\">\r\n        <img src=\"../../../assets/img/fidget_red.gif\" width=\"150\" height=\"150\" alt=\"logo\">\r\n    </div>\r\n    <button  (click)=\"sumbit()\" class=\"btn\">Submit</button>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/forget-password/forget-password.component.scss":
/***/ (function(module, exports) {

module.exports = ".forget {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .forget .btn {\n    color: #fff;\n    background: #000;\n    font-weight: bold;\n    font-size: 18px;\n    float: right;\n    padding: 5px;\n    border-radius: 25px; }\n  .forget mat-form-field {\n    width: 100%;\n    font-size: 20px;\n    font-weight: bold; }\n  .forget .close-dialog {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .forget .close-dialog i {\n      font-size: 20px;\n      color: #fff;\n      border-radius: 25px;\n      background-color: #000;\n      cursor: pointer;\n      font-weight: bold;\n      padding: 5px; }\n  .mat-dialog-container {\n  padding: 0px !important; }\n  .wizard {\n  margin: auto;\n  margin-top: 60px;\n  margin-bottom: 100px;\n  max-width: 800px; }\n  .wizard .timer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin-right: 20px; }\n  .wizard mat-form-field {\n    width: 100%;\n    font-size: 18px;\n    font-weight: bold; }\n  .wizard label {\n    color: #000;\n    font-weight: bold;\n    font-size: 20px; }\n  .wizard button {\n    background-color: #000;\n    color: #fff;\n    padding: 5px 30px;\n    font-size: 18px;\n    font-weight: bold;\n    border-radius: 24px;\n    margin: 2px; }\n  .wizard h2 {\n    text-align: center;\n    font-weight: 600px;\n    color: #0ba4be; }\n  .wizard .login {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .recaptcha {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n"

/***/ }),

/***/ "./src/app/forget-password/forget-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recapcha_recapcha_service__ = __webpack_require__("./src/app/recapcha/recapcha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(recapcha, routes, http, thisDialogRef, snackBar) {
        this.recapcha = recapcha;
        this.routes = routes;
        this.http = http;
        this.thisDialogRef = thisDialogRef;
        this.snackBar = snackBar;
        this.showSpinner = false;
        this.validate_email = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].email]);
        this.cust_id = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]);
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.getErrorMessageEmail = function () {
        return this.validate_email.hasError('required') ? 'You must enter a value' :
            this.validate_email.hasError('email') ? 'Not a valid email' :
                '';
    };
    ForgetPasswordComponent.prototype.getErrorMessageAcc = function () {
        return this.validate_email.hasError('required') ? 'You must enter a value' :
            this.validate_email.hasError('custid') ? 'Not a valid Account no.' :
                '';
    };
    ForgetPasswordComponent.prototype.close = function () {
        this.thisDialogRef.close();
    };
    ForgetPasswordComponent.prototype.sumbit = function () {
        var _this = this;
        var status = this.recapcha.check();
        if (status == false) {
            this.cap_result = "The reCAPTCHA code you entered was incorrect";
        }
        else {
            this.cap_result = "";
        }
        if (this.email != null && this.email != null) {
            var post = {
                email: this.email,
                account_no: this.custid,
            };
            this.x = setTimeout(function () {
                _this.showSpinner = true;
            }, 2000);
            this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].url + 'config/forgetpasswordcode/', post, {
                'headers': {
                    'Content-Type': 'application/json',
                }
            }).
                subscribe(function (res) {
                if (res["status"] == true) {
                    _this.username = res['username'];
                    clearTimeout(_this.x);
                    _this.snackBar.open(res["message"], 'close', {
                        duration: 2000
                    });
                    _this.showSpinner = true;
                    _this.thisDialogRef.close();
                    _this.routes.navigate(['/reset-password', _this.username, _this.email], { skipLocationChange: true });
                }
                else if (res["status"] == false) {
                    _this.snackBar.open(res["message"], 'close', {
                        duration: 2000
                    });
                    _this.thisDialogRef.close();
                }
            }, function (err) {
                _this.snackBar.open('Server not responding', 'close', {
                    duration: 2000
                });
            });
        }
    };
    ForgetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forget-password',
            template: __webpack_require__("./src/app/forget-password/forget-password.component.html"),
            styles: [__webpack_require__("./src/app/forget-password/forget-password.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__recapcha_recapcha_service__["a" /* RecapchaService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSnackBar */]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(route, snackBar, _formBuilder, http) {
        this.route = route;
        this.snackBar = snackBar;
        this._formBuilder = _formBuilder;
        this.http = http;
        this.isLinear = true;
        // secondFormGroup: FormGroup;
        this.secondFormGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            code: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required]),
            new_password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$')]),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$')])
        });
        // new_password;
        // confirm_password;
        this.showSpinner = false;
        this.showResendButton = false;
        this.showTimerr = true;
        this.showExpString = "Your code will expire in ";
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.username = res.username;
            _this.email = res.email;
            // console.log(this.username)
            // if (res.PromoCode != null && res.PromoCode != "" && res.PromoCode != undefined) {
            //   // this.promoCode = res.PromoCode
            // }
        });
        this.firstFormGroup = this._formBuilder.group({
            code: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required],
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]({ value: this.email, disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["l" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
        // this.secondFormGroup = this._formBuilder.group({
        //   code: ['', Validators.required],
        //   new_password: ['', Validators.required,  Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')],
        //   confirm_password: ['', Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]
        // });
        this.showResendButton = false;
        this.Timerr(4, 59);
    };
    ResetPasswordComponent.prototype.Timerr = function (hour, _second) {
        var _this = this;
        this.hour = hour;
        this._second = _second;
        var clear = setInterval(function () {
            _this._second = _second--;
            if (_second == 0) {
                if (hour == 0) {
                    _this.showExpString = "Your is Code Expired";
                    clearInterval(clear);
                    _this.showTimerr = false;
                    _this.showResendButton = true;
                }
                else {
                    _this._second = _second = 59;
                    _this.hour = hour--;
                }
            }
        }, 1000);
    };
    ResetPasswordComponent.prototype.Resend = function () {
        var _this = this;
        this.showResendButton = false;
        var post = {
            email: this.email,
        };
        this.x = setTimeout(function () {
            _this.showSpinner = true;
        }, 2000);
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].url + 'config/forgetpasswordcode/', post, {
            'headers': {
                'Content-Type': 'application/json',
            }
        }).subscribe(function (res) {
            if (res["status"] == true) {
                _this.showTimerr = true;
                _this.showExpString = "Your code will expire in ";
                _this.Timerr(4, 59);
            }
            else if (res["status"] == false) {
                _this.snackBar.open(res["message"], 'close', {
                    duration: 2000
                });
            }
        });
    };
    ResetPasswordComponent.prototype.verifyCode = function (stepper) {
        var _this = this;
        var post = {
            code: this.code,
            email: this.username
        };
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].url + 'config/verifysentpasswordCode/', post).subscribe(function (res) {
            if (res["status"] == true) {
                stepper.next();
                _this.snackBar.open(res["message"], 'close', {
                    duration: 2000
                });
            }
            else {
                _this.snackBar.open(res["message"], 'close', {
                    duration: 2000
                });
            }
        });
    };
    ResetPasswordComponent.prototype.resetPassword = function (stepper) {
        var _this = this;
        if (this.secondFormGroup.valid) {
            var post = {
                code: this.code,
                // new_password: this.new_password,
                // confirm_password: this.confirm_password
                new_password: this.secondFormGroup.controls.new_password.value,
                confirm_password: this.secondFormGroup.controls.confirm_password.value
            };
            this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].url + 'config/verifyForgetPasswordCode/', post).subscribe(function (res) {
                if (res["status"] == true) {
                    stepper.next();
                    __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()(res['message'], '', 'success');
                    _this.snackBar.open(res["message"], 'close', {
                        duration: 2000
                    });
                }
                else {
                    _this.snackBar.open(res["message"], 'close', {
                        duration: 2000
                    });
                }
            });
        }
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reset-password',
            template: __webpack_require__("./src/app/forget-password/reset-password.html"),
            styles: [__webpack_require__("./src/app/forget-password/forget-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/forget-password/reset-password.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"wizard mat-elevation-z8\">\r\n    <div class=\"timer\">\r\n        <h3>{{showExpString}}{{\" \"}}\r\n            <span *ngIf=\"showTimerr\">{{hour}}:{{_second}}</span>\r\n        </h3>\r\n    </div>\r\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n        <mat-step [stepControl]=\"firstFormGroup\">\r\n            <form [formGroup]=\"firstFormGroup\">\r\n                <ng-template matStepLabel><label>Enter Code</label></ng-template>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" name=\"email\" formControlName=\"email\" required>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Please Enter Code\" [(ngModel)]=\"code\" name=\"code\" formControlName=\"code\" required>\r\n                </mat-form-field>\r\n                <div>\r\n                    <button  (click)=\"verifyCode(stepper)\">Submit</button>\r\n                    <button  (click)=\"Resend()\" *ngIf=\"showResendButton\">Resend</button>\r\n                </div>\r\n            </form>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"secondFormGroup\">\r\n            <form [formGroup]=\"secondFormGroup\">\r\n                <ng-template matStepLabel><label>Reset Passwords</label></ng-template>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Code\" [(ngModel)]=\"code\" name=\"code\" formControlName=\"code\" required>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"New Password\" formControlName=\"new_password\">\r\n                    <mat-error>Doesn't match password criteria</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Confirm Password\" formControlName=\"confirm_password\">\r\n                </mat-form-field>\r\n                <div>\r\n                    <button  (click)=\"resetPassword(stepper)\">Submit</button>\r\n                </div>\r\n            </form>\r\n        </mat-step>\r\n        <mat-step>\r\n            <ng-template matStepLabel><label>Done</label></ng-template>\r\n            <h2> Your Password is Updated Successfully !</h2>\r\n            <div class=\"login\">\r\n                <button  routerLink=\"/login\">Login</button>\r\n            </div>\r\n        </mat-step>\r\n    </mat-horizontal-stepper>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-header></app-main-header>\r\n<div class=\"router__outlet\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.myFunction = function () {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            }
            else {
                x.className = "topnav";
            }
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        // var list = document.getElementsByClassName("router__outlet")[0];
        // list.getElementsByTagName("div")[0].classList.add("pd-tp")
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <!-- <div class=\"quick-pay\" *ngIf=\"hideLogin\">\r\n        <mat-icon (click)=\"quickPayDialog()\" matTooltip=\"Quick Pay My Bill\">featured_play_list</mat-icon>\r\n    </div> -->\r\n    <div class=\"back-image\">\r\n        <mat-card style=\"padding-bottom:0px;\" class=\"mainCard\" *ngIf=\"hideLogin\">\r\n            <mat-card>\r\n                <h3>Sign In to Your Account</h3>\r\n            </mat-card>\r\n            <form (ngSubmit)=onSubmit() #login [formGroup]=loginForm>\r\n                <div class=\"inputFields\">\r\n                    <mat-form-field class=\"input_fix\">\r\n                        <input matInput formControlName=email [ngModel]='Email'>\r\n                        <mat-placeholder>Login ID</mat-placeholder>\r\n                        <mat-error *ngIf=\"f.email.errors?.required\"> Login ID is required </mat-error>\r\n                        <mat-error *ngIf=\"f.email.errors?.pattern\">Invalid pattern</mat-error>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input matInput formControlName=password [ngModel]='Password' [type]=\"hide ? 'password' : 'text'\" #input maxlength=\"130\">\r\n                        <mat-placeholder>Password </mat-placeholder>\r\n                        <mat-icon matSuffix (click)=\"hide= !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                        <mat-error *ngIf=\"f.password.errors?.required\">Password is required\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div >\r\n                    <div class=\"rememberforget\">\r\n                        <div class=\"checkbox pull-left\" style=\"margin-left: -20px;\r\n                            padding-right: 20px;\">\r\n                            <mat-slide-toggle color=\"primary\" (click)=\"remeberMe()\" [(ngModel)]=\"checked\" [ngModelOptions]=\"{standalone:\r\n                                true}\">\r\n                                <span class=\"mat-checkbox\">Stay Signed in</span>\r\n                            </mat-slide-toggle>\r\n                        </div>\r\n                        <div class=\"forgotPassword\">\r\n                            <a class=\"space\" (click)=\"openDialog()\">\r\n                                <span> Forgot Password?</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"recaptcha\">\r\n                        <div class=\"text-center\">\r\n                            <app-recapcha></app-recapcha>\r\n                        </div>\r\n                        <div>\r\n                            <p class=\"error\"> {{cap_result}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"spinner\" *ngIf=\"showSpinner\">\r\n                    <img src=\"../../../assets/img/fidget_red.gif\" width=\"150\" height=\"150\" alt=\"logo\">\r\n                </div>\r\n                <button  class=\"button\" *ngIf=\"SignInButton\">Sign In</button>\r\n                <button  disabled class=\"buttond\" *ngIf=\"!SignInButton\">Sign In</button>\r\n                <div *ngIf=\"hideLogin\">\r\n                    <button class=\"btn-100 quick-pay\" (click)=\"quickPayDialog()\" matTooltip=\"Quick Pay My Bill\">\r\n                        <img src=\"../../assets/img/QuickPay/qickpay11@50x.png\">\r\n                    </button>\r\n                    \r\n                </div>\r\n            </form>\r\n            <div class=\"links\">\r\n                <span style=\"font-size: 14px;\">Don’t have an online account? </span>\r\n                <a routerLink=\"/register\" style=\"margin-left: 6px;\r\n                    font-size:14;font-weight:600;margin-top: -1px;\">\r\n                    Register Now </a>\r\n            </div>\r\n            <!-- <div style=\"display: flex; flex-direction: row; justify-content:\r\n                space-evenly; margin-bottom: 12px; font-size: 17px;\">\r\n                <span>\r\n                    <a style=\"font-size: 14px;font-weight:bold;\"\r\n                        (click)=\"verificationEmail()\">Resend Verification email</a>\r\n                </span>\r\n            </div> -->\r\n            <div class=\"links s_pp_term\">\r\n                <a style=\"font-size: 14px;\" target=\"_blank\" routerLink=\"/term-and-conditions\">Terms of Use</a>\r\n                <a style=\"font-size: 14px;\" target=\"_blank\" routerLink=\"/privacy-policy\">Privacy Policy</a>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<div class=\"multipleAccounts\">\r\n    <div *ngIf=\"check==true\" class=\"SetStyling\">\r\n        <h2 style=\"font-weight: bold\">You have multiple Linked Accounts</h2>\r\n        <div class=\"account\" *ngFor=\"let value of multiple_Accounts; let\r\n            ind=index\">\r\n            <div>\r\n                <div class=\"Details\">\r\n                    <span *ngIf=\"value.company_name==''\">{{value.cust_firstname}}\r\n                        {{value.cust_middlename}} {{value.cust_lastname}}</span>\r\n                    <span *ngIf=\"value.cust_firstname==''\">{{value.company_name}}\r\n                    </span>\r\n                    <span>{{value.cust_address2}}</span>\r\n                    <span>{{value.cust_city}}, {{value.cust_state}}\r\n                        {{value.cust_zip}}</span>\r\n                </div>\r\n                <br>\r\n                <div class=\"Details\">\r\n                    <span>Account No.: {{value.cust_id}}</span>\r\n                    <span>Amount due: {{(value.due_amount.toString())[0] == '-'\r\n                        ? '-$' + value.due_amount.toString().slice(1) : '$' +\r\n                        value.due_amount}}</span>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <button [disabled]=\"selectBtnStatus[value.cust_id]\"  class=\"button\" (click)=\"SelectAccount(ind)\">Select Account</button>\r\n            </div>\r\n        </div>\r\n        <span (click)=\"ShowLoginForm()\" class=\"signOutbuttonIcon\">\r\n            <img src=\"../../assets/img/Icons/Logout.png\" alt=\"logout\"\r\n                style=\"cursor: pointer;margin-top: -6px;\" width=\"20\">\r\n            <span style=\"margin-left: 5px; font-size: 25px; margin-bottom: 7px;\r\n                cursor: pointer\"> Signout </span>\r\n        </span>\r\n        <div class=\"spinner\" *ngIf=\"showSpinnerForMultiAccount\">\r\n            <img src=\"../../../assets/img/fidget_red.gif\" width=\"150\" height=\"150\" alt=\"logo\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".background {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: auto;\n  margin-left: auto;\n  width: 900px; }\n  .background .back-image {\n    width: 100%;\n    margin: 0 auto;\n    background: url(\"/assets/img/sign-in.png\");\n    background-repeat: no-repeat;\n    background-size: 100% 100%; }\n  .background .quick-pay {\n    background: #fff;\n    padding: 10px; }\n  .background .quick-pay img {\n      width: 130px; }\n  .background .quick-pay mat-icon {\n      color: #444444;\n      font-size: 40px;\n      cursor: pointer; }\n  .background .mainCard {\n    margin: 40px auto;\n    max-width: 400px;\n    -webkit-box-shadow: 0 0 15px #ccc;\n            box-shadow: 0 0 15px #ccc; }\n  .background .mainCard .recaptcha {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  .background .mainCard .inputFields {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin: 30px 0px 5px 0px; }\n  .background .mainCard .button {\n      width: 100%;\n      font-size: 16px;\n      margin-top: 0; }\n  .background .mainCard .footer {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      margin: 10px 0; }\n  .background .mainCard .footer div {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  .background .mainCard .footer div .space {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: end;\n              -ms-flex-pack: end;\n                  justify-content: flex-end;\n          color: #333333;\n          cursor: pointer;\n          font-size: 14px; }\n  .background .mainCard .footer div .space:hover {\n          color: #000; }\n  .background .mainCard .footer a {\n        font-weight: bold;\n        color: #c51414;\n        font-size: 18px; }\n  .background .mainCard .footer a:hover {\n        font-weight: bold;\n        color: #cd0000;\n        text-decoration: none; }\n  .background .mainCard .mat-checkbox {\n      font-weight: bold;\n      color: #333; }\n  .background .mainCard .error {\n      color: #f44336;\n      font-weight: bold;\n      text-align: center;\n      font-size: 16px; }\n  .background .mainCard span {\n      font-size: 14px;\n      cursor: pointer; }\n  .background .mainCard mat-icon {\n      color: #4d4747;\n      cursor: pointer; }\n  .background .mainCard mat-form-field {\n      font-size: 18px;\n      font-weight: bold; }\n  .background .mainCard mat-card {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: -webkit-gradient(linear, left top, right top, from(#a91f73), to(#ff4270));\n      background: linear-gradient(90deg, #a91f73 0%, #ff4270 100%);\n      margin-top: -56px;\n      border-radius: 4px; }\n  .background .mainCard mat-card h3 {\n        font-size: 22px;\n        color: #ffffff;\n        font-weight: bold;\n        text-align: center; }\n  .settings mat-icon {\n  color: #4d4747; }\n  .settings mat-form-field {\n  width: 100%;\n  font-size: 18.1px;\n  font-weight: bold;\n  margin-bottom: 20px; }\n  .settings .title {\n  text-align: center;\n  font-size: 27px;\n  font-weight: bold;\n  margin-bottom: 24px;\n  margin-top: 0px; }\n  .settings mat-card-header mat-card-title {\n  font-size: 27px;\n  font-weight: bold;\n  border-bottom: 4px solid #ff4270; }\n  .settings mat-radio-button {\n  font-size: 20px;\n  font-weight: bold; }\n  .settings .btn1 {\n  background-color: #161414;\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n  border-radius: 25px;\n  padding: 3px 30px; }\n  .settings .btn2 {\n  background-color: #e4e4e4;\n  color: #191919;\n  font-size: 20px;\n  border-radius: 25px;\n  padding: 3px 30px;\n  font-weight: bold; }\n  .register-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 10px; }\n  .register-main .header-title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: -webkit-gradient(linear, left top, right top, from(#a91f73), to(#ff4270));\n    background: linear-gradient(90deg, #a91f73 0%, #ff4270 100%);\n    margin-top: -40px;\n    border-radius: 4px;\n    width: 100%; }\n  .register-main .header-title h3 {\n      font-size: 25px;\n      color: #ffffff;\n      font-weight: bold;\n      text-align: center; }\n  .container {\n  margin-top: 34px;\n  margin-bottom: 20px; }\n  .container .rows {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .container .rows mat-form-field {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      padding: 0px 10px 0px 10px;\n      font-size: 16px;\n      font-weight: bold; }\n  .container .sub-titles {\n    width: 100%;\n    margin-bottom: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    font-size: 23px;\n    color: #000;\n    font-weight: bold;\n    margin-top: 20px; }\n  .container .footer-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .container .footer-row .error {\n      color: #f44336;\n      margin: 10px 10px 0px 10px;\n      font-size: 16px;\n      font-weight: bold; }\n  .container .footer-row .recaptcha-container {\n      margin: 10px 10px 0px 10px; }\n  .container .footer-row .tos {\n      font-size: 16px;\n      margin-top: 25px;\n      margin-bottom: 15px; }\n  .container .header-title {\n    background: -webkit-gradient(linear, left top, right top, from(#a91f73), to(#ff4270));\n    background: linear-gradient(90deg, #a91f73 0%, #ff4270 100%);\n    margin-top: -40px;\n    border-radius: 4px;\n    width: 100%; }\n  .container .header-title h3 {\n      font-size: 24px;\n      color: #ffffff;\n      font-weight: bold;\n      text-align: center; }\n  .spinner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 5px 0 20px; }\n  .multipleAccounts {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .multipleAccounts .SetStyling {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .multipleAccounts .SetStyling .signOutbuttonIcon {\n      padding: 15px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      font-weight: bold; }\n  .multipleAccounts .account {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    border: 1px solid #cdcdcd;\n    padding: 15px 15px;\n    font-size: 20px;\n    margin: 10px;\n    width: 460px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-shadow: 0 0 10px #ccc !important;\n            box-shadow: 0 0 10px #ccc !important; }\n  .multipleAccounts .account button {\n      background-color: #000;\n      color: #fff;\n      font-size: 15px;\n      font-weight: bold;\n      border-radius: 100px; }\n  .multipleAccounts .account .Details {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      font-weight: bold; }\n  .multipleAccounts .account .Details span {\n        margin: 3px 0px 3px 0px;\n        font-size: 17px; }\n  mat-form-field-label-wrapper mat-form-field-placeholder-wrapper {\n  font-size: 18px; }\n  .rememberforget {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 27px; }\n  .forgotPassword {\n  margin-top: -21px;\n  font-weight: bold;\n  font-size: 13px; }\n  .checkbox {\n  margin-top: -23px;\n  padding-bottom: 15px;\n  font-size: 16px; }\n  .links {\n  text-align: center;\n  padding: 5px 0; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuickPayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return QuickPayComponentFinal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forget_password_forget_password_component__ = __webpack_require__("./src/app/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Container_Store_Services__ = __webpack_require__("./src/app/Container/Store/Services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recapcha_recapcha_service__ = __webpack_require__("./src/app/recapcha/recapcha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__verification_email_verification_email_component__ = __webpack_require__("./src/app/login/verification-email/verification-email.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var LoginComponent = /** @class */ (function () {
    function LoginComponent(recapcha, change, http, router, dialog, snackBar) {
        this.recapcha = recapcha;
        this.change = change;
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('')]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required])
        });
        this.RememberMe = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            checked: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('')]),
        });
        this.SignInButton = true;
        this.hide = true;
        this.hideLogin = true;
        this.remember = localStorage.getItem('remember');
        this.checked = true;
        this.showSpinner = false;
        this.showSpinnerForMultiAccount = false;
        this.multipleID = false;
        this.multiple_Accounts = [];
        this.selectBtnStatus = [];
        this.dialogResult = "";
        this.quickResult = "";
    }
    LoginComponent.prototype.verificationEmail = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__verification_email_verification_email_component__["a" /* VerificationEmailComponent */], {
            width: '520px',
        });
        dialogRef.afterClosed();
    };
    LoginComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        if (localStorage.getItem('remember') == 'true') {
            this.Email = localStorage.getItem('email');
            this.checked = true;
        }
        else {
            this.Email;
            this.Password;
            this.checked;
        }
    };
    LoginComponent.prototype.SelectAccount = function (index) {
        var _this = this;
        this.showSpinnerForMultiAccount = true;
        var obj = this.multiple_Accounts[index];
        var AccLogin = this.loginForm.value;
        AccLogin['cust_id'] = obj.cust_id;
        this.selectBtnStatus[obj.cust_id] = true;
        // this.multiple_Accounts = []
        this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].url + 'config/login/', AccLogin, {
            'headers': { 'Content-Type': 'application/json' }
        }).subscribe(function (res) {
            if (Array.isArray(res)) {
                // this.showSpinnerForMultiAccount = false
                // this.selectBtnStatus[obj.cust_id] = false
                _this.multipleID = true;
                res.map(function (resp) {
                    _this.multiple_Accounts.push(resp['sub_id']);
                });
                clearTimeout(_this.x);
            }
            else {
                var token = res['data'].token;
                var decode = JSON.parse(atob(token.split('.')[1]));
                if (res['status'] == false) {
                    // this.showSpinnerForMultiAccount = false
                    // this.selectBtnStatus[obj.cust_id] = false
                    clearTimeout(_this.x);
                    _this.snackBar.open(res['message']['non_field_errors'], 'close', {
                        duration: 2000,
                    });
                }
                else if (res['status'] == true && decode['is_admin'] == false) {
                    // else if (res['status'] == true) {
                    if ([res].length > 1) {
                        // this.showSpinnerForMultiAccount = false
                        // this.selectBtnStatus[obj.cust_id] = false
                        _this.multipleID = true;
                    }
                    else {
                        // this.showSpinnerForMultiAccount = false
                        // this.selectBtnStatus[obj.cust_id] = false
                        clearTimeout(_this.x);
                        localStorage.setItem('login_res', JSON.stringify(res));
                        localStorage.setItem('token', res['data']['token']);
                        localStorage.setItem('is_admin', decode['is_admin']);
                        _this.router.navigate(['/dashboard']);
                        // this.showSpinnerForMultiAccount = false
                        // this.selectBtnStatus[obj.cust_id] = false
                        localStorage.setItem('custid', decode['cust_id']);
                        localStorage.setItem('username', decode['username']);
                        if (localStorage.getItem('remember') == 'true') {
                            localStorage.setItem('email', _this.loginForm.value.email);
                            localStorage.setItem('cust_password', _this.loginForm.value.password);
                        }
                        else if (localStorage.getItem('remember') == 'false') {
                            localStorage.removeItem('email');
                            localStorage.removeItem('cust_password');
                            localStorage.removeItem('remember');
                        }
                        // this.snackBar.open('You have Successfully Logged In', 'close', {
                        //   duration: 2000,
                        // })
                    }
                }
                else if (res['status'] == true && decode['is_admin'] == true) {
                    clearTimeout(_this.x);
                    localStorage.setItem('login_res', JSON.stringify(res));
                    localStorage.setItem('token', res['data']['token']);
                    localStorage.setItem('is_admin', decode['is_admin']);
                    _this.router.navigate(['/adminportal']);
                    localStorage.setItem('custid', decode['cust_id']);
                    localStorage.setItem('username', decode['username']);
                    if (localStorage.getItem('remember') == 'true') {
                        localStorage.setItem('email', _this.loginForm.value.email);
                        localStorage.setItem('cust_password', _this.loginForm.value.password);
                    }
                    else if (localStorage.getItem('remember') == 'false') {
                        localStorage.removeItem('email');
                        localStorage.removeItem('cust_password');
                        localStorage.removeItem('remember');
                    }
                    // this.snackBar.open('You have Successfully Logged In', 'close', {
                    //   duration: 2000,
                    // })
                }
            }
        }, function (err) {
            clearTimeout(_this.x);
            _this.snackBar.open('Something went wrong', 'close', {
                duration: 2000,
            });
            _this.showSpinnerForMultiAccount = false;
            _this.selectBtnStatus[obj.cust_id] = false;
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var status = this.recapcha.check();
        if (status == false) {
            this.cap_result = "Please re-enter text";
        }
        else {
            this.cap_result = "";
        }
        if (this.loginForm.valid && status == true) {
            this.multiple_Accounts = null;
            this.check = false;
            this.SignInButton = false;
            var obj = this.loginForm.value;
            this.x = setTimeout(function () {
                _this.showSpinner = true;
            }, 1000);
            this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].url + 'config/login/', obj, {
                'headers': {
                    'Content-Type': 'application/json',
                }
            }).
                subscribe(function (res) {
                _this.SignInButton = true;
                if (Array.isArray(res['message'])) {
                    _this.showSpinner = false;
                    _this.multipleID = true;
                    _this.multiple_Accounts = [];
                    res['message'].map(function (resp) {
                        _this.multiple_Accounts.push(resp['sub_id']);
                    });
                    if (_this.multiple_Accounts != null) {
                        _this.check = true;
                    }
                    _this.showSpinner = false;
                    _this.hideLogin = false;
                    clearTimeout(_this.x);
                    window.scrollTo(0, 0);
                }
                else {
                    if (res['status'] == false) {
                        _this.hideLogin = true;
                        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()(res['message']['non_field_errors'].toString(), '', 'warning');
                        clearTimeout(_this.x);
                        // this.snackBar.open(res['message']['non_field_errors'], 'close', {
                        //   duration: 2000,
                        // }) 
                        _this.showSpinner = false;
                    }
                    else {
                        var token = res['data'].token;
                        var decode = JSON.parse(atob(token.split('.')[1]));
                        if (res['status'] == true && decode['is_admin'] == false) {
                            // else if (res['status'] == true) {
                            if ([res].length > 1) {
                                _this.showSpinner = false;
                                _this.multipleID = true;
                            }
                            else {
                                clearTimeout(_this.x);
                                localStorage.setItem('login_res', JSON.stringify(res));
                                localStorage.setItem('token', res['data']['token']);
                                localStorage.setItem('is_admin', decode['is_admin']);
                                _this.router.navigate(['/dashboard']);
                                // this.showSpinner = false
                                localStorage.setItem('custid', decode['cust_id']);
                                localStorage.setItem('username', decode['username']);
                                if (localStorage.getItem('remember') == 'true') {
                                    localStorage.setItem('email', _this.loginForm.value.email);
                                    localStorage.setItem('cust_password', _this.loginForm.value.password);
                                }
                                else if (localStorage.getItem('remember') == 'false') {
                                    localStorage.removeItem('email');
                                    localStorage.removeItem('cust_password');
                                    localStorage.removeItem('remember');
                                }
                                // localStorage.setItem('Photo', res['user']['pic']) 
                                // this.snackBar.open('You have Successfully Logged In', 'close', {
                                //   duration: 2000,
                                // })
                            }
                        }
                        else if (res['status'] == true && decode['is_admin'] == true) {
                            clearTimeout(_this.x);
                            // this.showSpinner = false
                            localStorage.setItem('login_res', JSON.stringify(res));
                            localStorage.setItem('token', res['data']['token']);
                            localStorage.setItem('is_admin', decode['is_admin']);
                            _this.router.navigate(['/adminportal']);
                            localStorage.setItem('custid', decode['cust_id']);
                            if (localStorage.getItem('remember') == 'true') {
                                localStorage.setItem('email', _this.loginForm.value.email);
                                localStorage.setItem('cust_password', _this.loginForm.value.password);
                            }
                            else if (localStorage.getItem('remember') == 'false') {
                                localStorage.removeItem('email');
                                localStorage.removeItem('cust_password');
                                localStorage.removeItem('remember');
                            }
                            // localStorage.setItem('Photo', res['user']['pic']) 
                            // this.snackBar.open('You have Successfully Logged In', 'close', {
                            //   duration: 2000,
                            // })
                        }
                    }
                }
            }, function (err) {
                clearTimeout(_this.x);
                _this.snackBar.open('Something went wrong', 'close', {
                    duration: 2000,
                });
                _this.SignInButton = true;
                _this.showSpinner = false;
            });
        }
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ShowLoginForm = function () {
        this.check = false;
        this.hideLogin = true;
    };
    LoginComponent.prototype.remeberMe = function () {
        if (localStorage.getItem('remember') == 'false' || localStorage.getItem('remember') == undefined) {
            localStorage.setItem('remember', 'true');
        }
        else if (localStorage.getItem('remember') == 'true') {
            localStorage.setItem('remember', 'false');
            localStorage.removeItem('email');
            localStorage.removeItem('cust_password');
        }
    };
    LoginComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__forget_password_forget_password_component__["a" /* ForgetPasswordComponent */], {
            width: '550px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogResult = result;
        });
    };
    LoginComponent.prototype.quickPayDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(QuickPayComponent, {
            width: '550px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogResult = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('login'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], LoginComponent.prototype, "loginForms", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__recapcha_recapcha_service__["a" /* RecapchaService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(recapcha, snackBar, http, changedetector, router) {
        this.recapcha = recapcha;
        this.snackBar = snackBar;
        this.http = http;
        this.changedetector = changedetector;
        this.router = router;
        this.registerSbmtBtn = false;
        this.showSpinner = false;
        this.emailStatus = false;
        this.showEmailSpinnerstatus = false;
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            // firstname: new FormControl('', [Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
            // lastname: new FormControl('', [Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')]),
            zip: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]*$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(5)]),
            login_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(6)]),
            cust_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]*$')]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$')]),
            password_confirm: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$')]),
            secret_question: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
            secret_answer: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
        });
        this.hide = true;
        this.hides = true;
    }
    RegisterComponent.prototype.ComparePassword = function (event) {
        if (event.target.value != this.myForm.value.password) {
            this.passError = true;
            this.passwordError = "Your password and confirmation password do not match";
        }
        else {
            this.passError = false;
            this.passwordError = "";
        }
    };
    RegisterComponent.prototype.checkEmail = function (val) {
        var _this = this;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(val).toLowerCase()) == true) {
            var obj = {
                email: val
            };
            this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].url + "config/validateemail/", obj).subscribe(function (res) {
                if (res['status'] == true) {
                    _this.emailStatus = res['status'];
                    _this.showEmailSpinnerstatus = false;
                }
                else {
                    _this.emailStatus = res['status'];
                    _this.showEmailSpinnerstatus = true;
                    _this.snackBar.open(res["message"][0], 'close', {
                        duration: 1000
                    });
                }
            });
        }
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        var status = this.recapcha.check();
        if (status == false) {
            this.cap_result = "The reCAPTCHA code you entered was incorrect";
        }
        else {
            this.cap_result = "";
        }
        // if(this.emailStatus==false){
        // }
        if (this.myForm.valid && status && this.emailStatus == true) {
            this.registerSbmtBtn = true;
            this.showSpinner = true;
            var data = this.myForm.value;
            data.register_client = 'W';
            data.signup_from = 'W';
            this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].url + "config/sig-register/", data).subscribe(function (res) {
                var errMsg = "";
                if (res['status'] == true) {
                    _this.showSpinner = false;
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()(res['message'].toString(), '', 'success').then(function (res) {
                        _this.registerSbmtBtn = false;
                        _this.router.navigate(['/login']);
                    });
                    _this.snackBar.open(res["message"], 'close', {
                        duration: 1000
                    });
                }
                else {
                    for (var a in res['message']) {
                        errMsg = errMsg + res['message'][a] + "<br>";
                    }
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()(errMsg, '', 'warning');
                    _this.registerSbmtBtn = false;
                    _this.showSpinner = false;
                }
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('Something went wrong', '', 'error');
                _this.registerSbmtBtn = false;
                _this.showSpinner = false;
            });
        }
    };
    Object.defineProperty(RegisterComponent.prototype, "controls", {
        get: function () {
            return this.myForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], RegisterComponent.prototype, "forms", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register',
            template: __webpack_require__("./src/app/login/register.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__recapcha_recapcha_service__["a" /* RecapchaService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());

var QuickPayComponent = /** @class */ (function () {
    function QuickPayComponent(dialog, changedetect, quick, snackBar, thisDialogRef, fb) {
        this.dialog = dialog;
        this.changedetect = changedetect;
        this.quick = quick;
        this.snackBar = snackBar;
        this.thisDialogRef = thisDialogRef;
        this.fb = fb;
        this.sbmtBtn = false;
        this.thisDialogRef.disableClose = true;
        this.quickForm = this.fb.group({
            cust_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]*$')]),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9-]*$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(12)]),
            zip_code: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]*$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(5)])
        });
        this.changePhone();
    }
    QuickPayComponent.prototype.submit = function () {
        var _this = this;
        if (this.quickForm.valid) {
            this.sbmtBtn = true;
            var obj = this.quickForm.value;
            this.quick.quickbill(obj).subscribe(function (res) {
                if (res['status'] == true) {
                    _this.sbmtBtn = false;
                    _this.thisDialogRef.close();
                    _this.dialog.open(QuickPayComponentFinal, {
                        data: res['message']
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()(res['message'], '', 'error').then(function (res) {
                        _this.sbmtBtn = false;
                    });
                }
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("Could not connect to server, please try again.", '', 'error').then(function (res) {
                    _this.sbmtBtn = false;
                });
            });
        }
    };
    QuickPayComponent.prototype.changePhone = function () {
        this.quickForm.valueChanges.subscribe(function (val) {
        });
    };
    Object.defineProperty(QuickPayComponent.prototype, "quickPay", {
        get: function () {
            return this.quickForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    QuickPayComponent.prototype.cancel = function () {
        this.thisDialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('quick'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], QuickPayComponent.prototype, "quickpay", void 0);
    QuickPayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'quick-pay',
            template: __webpack_require__("./src/app/login/quickPay.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_7__Container_Store_Services__["i" /* QuickBillService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], QuickPayComponent);
    return QuickPayComponent;
}());

var QuickPayComponentFinal = /** @class */ (function () {
    function QuickPayComponentFinal(changedetect, quick, snackBar, data, thisDialogRef) {
        this.changedetect = changedetect;
        this.quick = quick;
        this.snackBar = snackBar;
        this.data = data;
        this.thisDialogRef = thisDialogRef;
        this.months = [
            { value: "01", viewValue: "January" },
            { value: "02", viewValue: "February" },
            { value: "03", viewValue: "March" },
            { value: "04", viewValue: "April" },
            { value: "05", viewValue: "May" },
            { value: "06", viewValue: "June" },
            { value: "07", viewValue: "July" },
            { value: "08", viewValue: "August" },
            { value: "09", viewValue: "September" },
            { value: "10", viewValue: "October" },
            { value: "11", viewValue: "November" },
            { value: "12", viewValue: "December" },
        ];
        this.years = [];
        this.quickForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            curr_email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            address_1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            address_2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            state: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            zip: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]+$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].min(5)]),
            cust_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            card_no: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9-]+$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            exp_mm: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            exp_yyyy: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            acct_no_code: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^[0-9]+$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            card_type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('VISA', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]),
            sched_pay_amount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('^([0-9]{1,4})(\.[0-9]{1,2})?$'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].min(1)]),
            cust_pii_2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('TX'),
            auto_pay: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('F'),
            cust_firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("" + this.data.cust_firstname),
            cust_lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("" + this.data.cust_lastname),
            company_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("" + this.data.company_name),
            cust_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("" + this.data.cust_id),
            sched_type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('C'),
            country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('US'),
            useActInFile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('N'),
        });
        this.sbmtBtn = false;
        this.thisDialogRef.disableClose = true;
        var myYear;
        myYear = new Date().getFullYear();
        for (var index = 0; index < 25; index++) {
            this.years[index] = "" + myYear;
            myYear = myYear + 1;
        }
    }
    QuickPayComponentFinal.prototype.ngOnInit = function () {
        if (this.data.due_amount_unposted > 0) {
            this.quickForm.controls.sched_pay_amount.setValue("" + this.data.due_amount_unposted);
        }
    };
    QuickPayComponentFinal.prototype.changeAddress = function (event) {
        if (event.checked == true) {
            this.quickPay.cust_name.setValue(this.data.cust_firstname + " " + this.data.cust_lastname);
            this.quickPay.zip.setValue(("" + this.data.premise_zip).slice(0, 5));
            this.quickPay.state.setValue("" + this.data.premise_state);
            this.quickPay.city.setValue("" + this.data.premise_city);
            this.quickPay.address_2.setValue("" + this.data.premise_address2);
        }
        else {
            this.quickPay.cust_name.setValue('');
            this.quickPay.zip.setValue('');
            this.quickPay.state.setValue('');
            this.quickPay.city.setValue('');
            this.quickPay.address_2.setValue('');
        }
    };
    QuickPayComponentFinal.prototype.submit = function () {
        var _this = this;
        if (this.quickForm.valid) {
            this.sbmtBtn = true;
            var obj = this.quickForm.value;
            this.quick.quickBillFinal(obj).subscribe(function (res) {
                if (res['status'] == true) {
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("Payment submitted successfully", '', 'success').then(function (res) {
                        _this.sbmtBtn = false;
                        _this.thisDialogRef.close();
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()(res['message'], '', 'error').then(function (res) {
                        _this.sbmtBtn = false;
                    });
                }
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()("Could not connect to server, please try again.", '', 'error').then(function (res) {
                    _this.sbmtBtn = false;
                });
            });
        }
    };
    Object.defineProperty(QuickPayComponentFinal.prototype, "quickPay", {
        get: function () {
            return this.quickForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    QuickPayComponentFinal.prototype.cancel = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel!'
        }).then(function (result) {
            if (result.value) {
                _this.thisDialogRef.close();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('quick'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], QuickPayComponentFinal.prototype, "quickpay", void 0);
    QuickPayComponentFinal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/login/quickPayFinal.html"),
            styles: [__webpack_require__("./src/app/login/quickPayFinal.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_7__Container_Store_Services__["i" /* QuickBillService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatSnackBar */], Object, __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatDialogRef */]])
    ], QuickPayComponentFinal);
    return QuickPayComponentFinal;
}());



/***/ }),

/***/ "./src/app/login/quickPay.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"settings\" [formGroup]=quickForm (ngSubmit)=submit() #quick>\r\n    <h3 class=\"title\"> Quick Pay My Bill </h3>\r\n    <mat-form-field>\r\n        <mat-label>Account No.</mat-label>\r\n        <input matInput formControlName=\"cust_id\" #inputs maxlength=\"30\">\r\n        <mat-icon matSuffix>account_circle</mat-icon>\r\n        <mat-error *ngIf=\"quickPay.cust_id.errors?.required\">Account No. is required</mat-error>\r\n        <mat-error *ngIf=\"quickPay.cust_id.errors?.pattern\">Invalid Account No.</mat-error>\r\n        <mat-hint>Account number as it appears on your payment coupon</mat-hint>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <mat-label>Billing Zip Code</mat-label>\r\n        <input matInput formControlName=\"zip_code\" #input maxlength=\"5\">\r\n        <mat-icon matSuffix>place</mat-icon>\r\n        <mat-error *ngIf=\"quickPay.zip_code.errors?.required\">Billing Zip Code is required</mat-error>\r\n        <mat-error *ngIf=\"quickPay.zip_code.errors?.pattern\">Invalid Zip Code</mat-error>\r\n        <mat-error *ngIf=\"!quickPay.zip_code.errors?.pattern && quickPay.zip_code.errors?.minlength\">Minimum of 5 characters required.</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field appearance=\"outline\">\r\n        <mat-label>Phone No.</mat-label>\r\n        <input matInput formControlName=\"phone\" #input1 maxlength=\"12\" phone-no blockCopyPaste>\r\n        <mat-icon matSuffix>phone</mat-icon>\r\n        <mat-error *ngIf=\"quickPay.phone.errors?.required\">Phone No. is required</mat-error>\r\n        <mat-error *ngIf=\"quickPay.phone.errors?.pattern\">Invalid Phone No.</mat-error>\r\n        <mat-error *ngIf=\"!quickPay.phone.errors?.pattern && quickPay.phone.errors?.minlength\">Minimum of 10 characters required.</mat-error>\r\n    </mat-form-field>\r\n    <div class=\"text-center\">\r\n        <button  type=\"submit\" [disabled]=\"sbmtBtn\" class=\"btn1\">Verify Account</button>\r\n        <button  type=\"button\" (click)=\"cancel()\" class=\"btn2\">Cancel</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/login/quickPayFinal.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=quickForm #quick>\r\n    <h3 class=\"title\"> Quick Pay My Bill </h3>\r\n    <p class=\"cust-info\">{{data.cust_firstname}} {{data.cust_lastname}}, Account No. {{data.cust_id}} has a current balance of {{(data.due_amount_unposted.toString())[0] == '-' ? '-$' + data.due_amount_unposted.toString().slice(1) : '$' + data.due_amount_unposted}} due on\r\n        {{data.due_date | date : 'MM/dd/yyyy'}}.</p>\r\n    <p *ngIf=\"data.last_paid_amount\" class=\"cust-info\">A payment of ${{data.last_paid_amount}} was recieved on {{data.last_pay_date | date: 'MM/dd/yyyy'}}.</p>\r\n    <br>\r\n    <div class=\"row\">\r\n        <mat-form-field class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n            <span matPrefix>$&nbsp;</span>\r\n            <input matInput placeholder=\"Payment Amount\" formControlName=\"sched_pay_amount\">\r\n            <mat-error *ngIf=\"quickForm.controls.sched_pay_amount.errors?.required\"> Payment Amount is required</mat-error>\r\n            <mat-error *ngIf=\"quickForm.controls.sched_pay_amount.hasError('pattern')\"> Invalid Format </mat-error>\r\n            <mat-error *ngIf=\"!quickForm.controls.sched_pay_amount.hasError('pattern') && quickForm.controls.sched_pay_amount.hasError('min')\"> Invalid Amount </mat-error>\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"row\">\r\n        <mat-form-field class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\r\n            <mat-select placeholder=\"Card Type\" formControlName=\"card_type\">\r\n                <mat-option [value]=\"null\">--</mat-option>\r\n                <mat-option value=\"VISA\">Visa</mat-option>\r\n                <mat-option value=\"MASTER\">Master</mat-option>\r\n                <mat-option value=\"DISCOVER\">Discover</mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"quickForm.controls.card_type.hasError('required')\"> Card Type is required </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n            <input matInput placeholder=\"Card No.\" formControlName=\"card_no\" maxlength=\"19\" credit-card>\r\n            <mat-error *ngIf=\"quickForm.controls.card_no.hasError('required')\"> Card No. is required </mat-error>\r\n            <mat-error *ngIf=\"quickForm.controls.card_no.hasError('pattern')\"> Invalid Format </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-lg-1 col-md-1 col-sm-6 col-xs-12\">\r\n            <input matInput placeholder=\"CCV\" formControlName=\"acct_no_code\" maxlength=\"3\">\r\n            <mat-error *ngIf=\"quickForm.controls.acct_no_code.hasError('required')\"> CCV is required </mat-error>\r\n            <mat-error *ngIf=\"quickForm.controls.acct_no_code.hasError('pattern')\"> Invalid Format </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-lg-2 col-md-2 col-sm-6 col-xs-12\">\r\n            <mat-select placeholder=\"Expiry Month\" formControlName=\"exp_mm\">\r\n                <mat-option *ngFor=\"let m of months\" [value]=\"m.value\">\r\n                    {{ m.viewValue }}\r\n                </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"quickForm.controls.exp_mm.hasError('required')\"> Expiry Month is required </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-lg-2 col-md-2 col-sm-6 col-xs-12\">\r\n            <mat-select placeholder=\"Expiry Year\" formControlName=\"exp_yyyy\">\r\n                <mat-option *ngFor=\"let y of years\" [value]=\"y\">\r\n                    {{ y }}\r\n                </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"quickForm.controls.exp_yyyy.hasError('required')\"> Expiry Year is required </mat-error>\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"row\" style=\"padding-top: 15px; padding-bottom: 15px;\">\r\n        <mat-checkbox style=\"margin-left: 20px\" (change)=\"changeAddress($event)\">Use Current Mailing Address</mat-checkbox>\r\n    </div>\r\n    <div class=\"row\">\r\n        <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n            <input matInput placeholder=\"Name\" formControlName=\"cust_name\" maxlength=\"50\">\r\n            <mat-error *ngIf=\"quickForm.controls.cust_name.hasError('required')\"> Name is required </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n            <input matInput placeholder=\"Address\" formControlName=\"address_2\" maxlength=\"50\">\r\n            <mat-error *ngIf=\"quickForm.controls.address_2.hasError('required')\"> Address is required </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n            <input matInput placeholder=\"City\" formControlName=\"city\" maxlength=\"20\">\r\n            <mat-error *ngIf=\"quickForm.controls.city.hasError('required')\"> City is required </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n            <input matInput placeholder=\"State\" formControlName=\"state\" maxlength=\"20\">\r\n            <mat-error *ngIf=\"quickForm.controls.state.hasError('required')\"> State is required </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n            <input matInput placeholder=\"Zip Code\" formControlName=\"zip\" maxlength=\"5\">\r\n            <mat-error *ngIf=\"quickForm.controls.zip.hasError('required')\"> Zip Code is required </mat-error>\r\n            <mat-error *ngIf=\"quickForm.controls.zip.hasError('pattern') || quickForm.controls.zip.hasError('min')\"> Invalid Format </mat-error>\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <button  (click)=\"submit()\" [disabled]=\"sbmtBtn\" class=\"btn1\">Pay Now</button>\r\n        <button  (click)=\"cancel()\" class=\"btn2\">Cancel</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/login/quickPayFinal.scss":
/***/ (function(module, exports) {

module.exports = "mat-icon {\n  color: #4d4747; }\n\nmat-form-field {\n  font-size: 18.2px;\n  font-weight: bold; }\n\n.title {\n  text-align: center;\n  font-size: 27px;\n  font-weight: bold;\n  margin-bottom: 24px;\n  margin-top: 0px; }\n\nmat-card-header mat-card-title {\n  font-size: 27px;\n  font-weight: bold;\n  border-bottom: 4px solid #ff4270; }\n\nmat-radio-button {\n  font-size: 20px;\n  font-weight: bold; }\n\n.btn1 {\n  background-color: #161414;\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n  border-radius: 25px;\n  padding: 3px 30px; }\n\n.btn2 {\n  background-color: #e4e4e4;\n  color: #191919;\n  font-size: 20px;\n  border-radius: 25px;\n  padding: 3px 30px;\n  font-weight: bold; }\n\n.cust-info {\n  text-align: center;\n  font-weight: bold;\n  font-size: 16px;\n  margin: 0px !important; }\n"

/***/ }),

/***/ "./src/app/login/register.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card class=\"container\">\r\n    <form (ngSubmit)=\"submit()\" #form [formGroup]=\"myForm\" autocomplete=\"off\">\r\n        <mat-card class=\"header-title\">\r\n            <h3>New User Registration</h3>\r\n        </mat-card>\r\n        <div class=\"sub-titles\">Your Account With Us</div>\r\n        <div class=\"rows\">\r\n            <mat-form-field>\r\n                <mat-label>Account Number</mat-label>\r\n                <input matInput formControlName=cust_id #input0 maxlength=\"10\" required>\r\n                <mat-icon matSuffix>account_circle </mat-icon>\r\n                <mat-error *ngIf=\"controls.cust_id.errors?.required\">Account Number is required</mat-error>\r\n                <mat-error *ngIf=\"controls.cust_id.errors?.pattern\">Invalid pattern</mat-error>\r\n                <mat-hint align=\"end\">{{input0.value?.length || 0}}/10</mat-hint>\r\n                <mat-hint>Account number as it appears on your payment coupon</mat-hint>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-label>Billing Zip Code</mat-label>\r\n                <input matInput #input1 maxlength=\"5\" formControlName=zip required>\r\n                <mat-icon matSuffix>place</mat-icon>\r\n                <mat-error *ngIf=\"controls.zip.errors?.required\">Billing Zip Code is required</mat-error>\r\n                <mat-error *ngIf=\"controls.zip.errors?.pattern\">Invalid pattern</mat-error>\r\n                <mat-error *ngIf=\"controls.zip.errors?.minlength\">Minimum of 5 characters required</mat-error>\r\n                <mat-hint align=\"end\">{{input1.value?.length || 0}}/5</mat-hint>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"sub-titles\">Signup Information</div>\r\n        <div class=\"rows\">\r\n            <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <mat-label>Login id</mat-label>\r\n                <input matInput formControlName=login_id required>\r\n                <mat-icon matSuffix>picture_in_picture_alt</mat-icon>\r\n                <mat-error *ngIf=\"controls.login_id.errors?.required\">login id is required</mat-error>\r\n                <mat-error *ngIf=\"controls.login_id.errors?.minlength\">Minimum of 6 characters required</mat-error>\r\n            </mat-form-field>\r\n            <!-- <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <mat-label>First Name</mat-label>\r\n                <input matInput formControlName=firstname>\r\n                <mat-error *ngIf=\"controls.firstname.errors?.pattern\">Invalid pattern</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <mat-label>Last Name</mat-label>\r\n                <input matInput formControlName=lastname>\r\n                <mat-error *ngIf=\"controls.lastname.errors?.pattern\">Invalid pattern</mat-error>\r\n            </mat-form-field> -->\r\n            <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <mat-label>Email</mat-label>\r\n                <input matInput formControlName=email (keyup)=\"checkEmail($event.target.value)\" required>\r\n                <mat-icon matSuffix style=\"color:red\" *ngIf=\"showEmailSpinnerstatus\">error</mat-icon>\r\n                <mat-icon matSuffix>email</mat-icon>\r\n                <mat-error *ngIf=\"controls.email.errors?.required\">Email is required</mat-error>\r\n                <mat-error *ngIf=\"controls.email.errors?.pattern\">Invalid pattern</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <mat-label>Password</mat-label>\r\n                <input matInput formControlName=password [type]=\"hide ? 'password' : 'text'\" #inpu0 maxlength=\"24\" required>\r\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                <mat-error *ngIf=\"controls.password.errors?.required\">Password is required</mat-error>\r\n                <mat-error *ngIf=\"controls.password.errors?.minlength\">Password must be 6 to 24 characters long.</mat-error>\r\n                <mat-hint align=\"end\">{{inpu0.value?.length || 0}}/24</mat-hint>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <mat-label>Confirm Password</mat-label>\r\n                <input matInput formControlName=password_confirm [type]=\"hides ? 'password' : 'text'\" (input)=\"ComparePassword($event)\" required>\r\n                <mat-icon matSuffix (click)=\"hides = !hides\">{{hides ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                <mat-error *ngIf=\"controls.password_confirm.errors?.required\">Confirm Password is required</mat-error>\r\n                <mat-hint>\r\n                    <mat-error *ngIf=\"passError\">{{passwordError}}</mat-error>\r\n                </mat-hint>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <mat-label>Secret Question</mat-label>\r\n                <input matInput formControlName=secret_question>\r\n                <mat-error>required</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                <mat-label>Secret Answer</mat-label>\r\n                <input matInput formControlName=secret_answer>\r\n                <mat-error>required</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"footer-row\">\r\n            <div class=\"tos\">\r\n                <mat-checkbox [(ngModel)]=\"agree\" [ngModelOptions]=\"{standalone: true}\">I understand and agree to the <a target=\"_blank\" routerLink=\"/term-and-conditions\">Terms of Use</a> and <a target=\"_blank\" routerLink=\"/privacy-policy\">Privacy Policy</a> </mat-checkbox>\r\n            </div>\r\n            <div class=\"recaptcha-container\">\r\n                <app-recapcha></app-recapcha>\r\n                <div *ngIf=\"cap_result\">\r\n                  <p class=\"error\"> {{cap_result}} </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"s_reg_btn_div\">\r\n              <button class=\"btn-100\" type=\"submit\" [disabled]=\"registerSbmtBtn || !agree\" >Submit</button>\r\n          </div>\r\n        </div>\r\n    \r\n    </form>\r\n    <div class=\"spinner\" *ngIf=\"showSpinner\">\r\n        <img src=\"../../../assets/img/fidget_red.gif\" width=\"150\" height=\"150\" alt=\"logo\">\r\n    </div>\r\n</mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/verification-email/verification-email.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n    <h3 class=\"title\"> Email Verification </h3>\r\n    <div class=\"row\">\r\n        <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <input matInput placeholder=\"Username\" formControlName=\"email\">\r\n        </mat-form-field>\r\n    </div>\r\n    <br>\r\n    <div class=\"text-center\">\r\n        <button  class=\"btn1\" type=\"submit\">Verify</button>\r\n        <button  [mat-dialog-close] class=\"btn2\">Cancel</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/login/verification-email/verification-email.component.scss":
/***/ (function(module, exports) {

module.exports = ".btn1 {\n  background-color: #161414;\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n  border-radius: 25px;\n  padding: 3px 30px; }\n\n.btn2 {\n  background-color: #e4e4e4;\n  color: #191919;\n  font-size: 20px;\n  border-radius: 25px;\n  padding: 3px 30px;\n  font-weight: bold; }\n\n.title {\n  text-align: center;\n  font-size: 27px;\n  font-weight: bold;\n  margin-bottom: 24px;\n  margin-top: 0px; }\n"

/***/ }),

/***/ "./src/app/login/verification-email/verification-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VerificationEmailComponent = /** @class */ (function () {
    function VerificationEmailComponent(http, dialog) {
        this.http = http;
        this.dialog = dialog;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].pattern('')]),
        });
    }
    VerificationEmailComponent.prototype.ngOnInit = function () {
    };
    VerificationEmailComponent.prototype.submit = function () {
        var _this = this;
        var obj = {};
        if (this.form.valid) {
            obj = this.form.value;
        }
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'config/resendverification/', obj, {
            'headers': {
                'Content-Type': 'application/json',
            }
        }).subscribe(function (res) {
            if (res['status'] == true) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(res['message'], '', 'success');
                _this.dialog.closeAll();
            }
            else {
                if (res['status'] == false) {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(res['message'], '', 'error');
                }
            }
        });
    };
    VerificationEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-verification-email',
            template: __webpack_require__("./src/app/login/verification-email/verification-email.component.html"),
            styles: [__webpack_require__("./src/app/login/verification-email/verification-email.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */]])
    ], VerificationEmailComponent);
    return VerificationEmailComponent;
}());



/***/ }),

/***/ "./src/app/main-footer/main-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footerback\">\r\n    <div class=\"raven-divider\"> \r\n        <span class=\"raven-divider-line\"></span>\r\n    </div>\r\n    <div class=\"main-footer\">\r\n        <div class=\"inner-footer\">\r\n            <div>\r\n                    <a [routerLink]=\"['/']\">\r\n                <img src=\"../assets/img/log_OurEnergy.png\" style=\"height:42px;margin: 6px 0px;\">\r\n                </a>\r\n                \r\n                <!-- <img src=\"../assets/img/WTG-Energy-Logo.png\" style=\"height:42px;margin: 6px 0px;\"> -->\r\n                <!-- <a style=\"text-decoration: none;\">\r\n                    <h1 style=\"font-size:32px;font-weight:800;\">\r\n                        <span style=\"color:#d00000\">W</span>\r\n                        <span style=\"color:#2e2566;margin-left:-4px;\">TG</span>\r\n                        <span style=\"color:#2e2566\"> ENERGY</span>\r\n                    </h1>\r\n                </a> -->\r\n                <mat-list>\r\n                        <mat-list-item>\r\n                                <a routerLink=\"/about\">\r\n                                    <i class=\"fa fa-chevron-right\"></i> About Us</a>\r\n                            </mat-list-item>\r\n                    <mat-list-item>\r\n                        <a routerLink=\"/contact\">\r\n                            <i class=\"fa fa-chevron-right\"></i> Contact Us\r\n                        </a>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <a routerLink=\"/residential\">\r\n                            <i class=\"fa fa-chevron-right\"></i> For the Home\r\n                        </a>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <a routerLink=\"/commercial\">\r\n                            <i class=\"fa fa-chevron-right\"></i> For the Bussiness\r\n                        </a>\r\n                    </mat-list-item>\r\n                \r\n                    <!-- <mat-list-item>\r\n                        <a routerLink=\"/community\">\r\n                            <i class=\"fa fa-chevron-right\"></i> FAQ's\r\n                        </a>\r\n                    </mat-list-item> -->\r\n                    <!-- broker-login -->\r\n                    <mat-list-item>\r\n                        <a routerLink=\"/\">\r\n                            <i class=\"fa fa-chevron-right\"></i> Blog\r\n                        </a>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                      <a routerLink=\"/help\">\r\n                          <i class=\"fa fa-chevron-right\"></i> Help\r\n                      </a>\r\n                  </mat-list-item>\r\n                </mat-list>\r\n            </div>\r\n            <!-- <div>\r\n                <mat-list class=\"second-list\">\r\n                    <mat-list-item>\r\n                        <a routerLink=\"/broker\">\r\n                            <i class=\"fa fa-chevron-right\"></i> BROKER PROGRAM\r\n                        </a>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <a routerLink=\"/community\">\r\n                            <i class=\"fa fa-chevron-right\"></i> ENERGY SAVING TIPS\r\n                        </a>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <a routerLink=\"/special\">\r\n                            <i class=\"fa fa-chevron-right\"></i> SPECIAL\r\n                        </a>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <a routerLink=\"/ourlife\">\r\n                            <i class=\"fa fa-chevron-right\"></i> OUR ENERGY LIFE\r\n                        </a>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <a routerLink=\"/contact\">\r\n                            <i class=\"fa fa-chevron-right\"></i> CONTACT US</a>\r\n                    </mat-list-item>\r\n                   \r\n                </mat-list>\r\n            </div> -->\r\n            <div>\r\n                <h4>ADDRESS</h4>\r\n                <mat-list class=\"contactus\">\r\n                    <mat-list-item>\r\n                        17154 Butte Creek Rd,\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        Suite 250,\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        Houston TX 77090.\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        Toll Free: 1-888-545-4687\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        Fax: 281.715.5767\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        Voice: 281.552.8390\r\n                    </mat-list-item>\r\n                </mat-list>\r\n                \r\n            </div>\r\n            <div>\r\n                <h4>ACCOUNTS</h4>\r\n                <mat-list>\r\n                    <mat-list-item>\r\n                        <a routerLink=\"/register\">\r\n                            <i class=\"fa fa-chevron-right\"></i> Signup Now</a>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <a routerLink=\"/login\">\r\n                            <i class=\"fa fa-chevron-right\"></i> My Account</a>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </div>\r\n            <div>\r\n                <h4>Social Links</h4>\r\n                <ul class=\"footer-link\">\r\n                <li>\r\n                    <a rel=\"noreferrer\" href=\"https://www.facebook.com/ourenergytexas\" target=\"_blank\" >\r\n                        <img src=\"../assets/img/facebook1.png\" alt=\"\" width=\"45px\" height=\"45px\">\r\n                        FaceBook\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a rel=\"noreferrer\" href=\"https://twitter.com/ourenergy\" target=\"_blank\">\r\n                        <img src=\"../assets/img/twitter.png\" alt=\"\" width=\"45px\" height=\"45px\">\r\n                        Twitter\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a rel=\"noreferrer\" href=\"https://plus.google.com/+Ourenergyllc\" target=\"_blank\">\r\n                        <img src=\"../../assets/img/google-plus.png\" alt=\"\" width=\"45px\" height=\"45px\">\r\n                        Google Plus\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a rel=\"noreferrer\" href=\"https://www.linkedin.com/company/our-energy-llc\" target=\"_blank\">\r\n                        <img src=\"../../assets/img/linkedin.png\" alt=\"\" width=\"45px\" height=\"45px\">\r\n                        Linked In\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        © 2019 Our Energy, LLC. PUCT Certificate (#10170) All rights reserved.\r\n        <div class=\"footerLinks\">\r\n            <a routerLink=\"/term-and-conditions\"> Customer Agreement </a> |\r\n            <a routerLink=\"/privacy-policy\"> Privacy Policy </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--  -->\r\n<!-- <div class=\"panel-group footer_panel\" id=\"accordion\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">\r\n        <h4 class=\"panel-title\">\r\n          <a>Footer</a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse1\" class=\"panel-collapse collapse\">\r\n        <div class=\"panel-body\">\r\n            <div class=\"main-footer\">\r\n                <div class=\"inner-footer\">\r\n                    <div>\r\n                            <a [routerLink]=\"['/']\">\r\n                        <img src=\"../assets/img/For-Footer-2.png\" style=\"height:42px;margin: 6px 0px;\">\r\n                        </a>\r\n                        <mat-list>\r\n                                <mat-list-item>\r\n                                        <a routerLink=\"/about\">\r\n                                            <i class=\"fa fa-chevron-right\"></i> About Us</a>\r\n                                    </mat-list-item>\r\n                            <mat-list-item>\r\n                                <a routerLink=\"/contact\">\r\n                                    <i class=\"fa fa-chevron-right\"></i> Contact Us\r\n                                </a>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <a routerLink=\"/residential\">\r\n                                    <i class=\"fa fa-chevron-right\"></i> For the Home\r\n                                </a>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <a routerLink=\"/commercial\">\r\n                                    <i class=\"fa fa-chevron-right\"></i> For the Bussiness\r\n                                </a>\r\n                           \r\n                                <a routerLink=\"/\">\r\n                                    <i class=\"fa fa-chevron-right\"></i> Blog\r\n                                </a>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                              <a routerLink=\"/help\">\r\n                                  <i class=\"fa fa-chevron-right\"></i> Help\r\n                              </a>\r\n                          </mat-list-item>\r\n                        </mat-list>\r\n                    </div>\r\n                   \r\n                    <div>\r\n                        <h4>ADDRESS</h4>\r\n                        <mat-list class=\"contactus\">\r\n                            <mat-list-item>\r\n                                17154 Butte Creek Rd,\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                Suite 250,\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                Houston TX 77090.\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                Toll Free: 1-888-545-4687\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                Fax: 281.715.5767\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                Voice: 281.552.8390\r\n                            </mat-list-item>\r\n                        </mat-list>\r\n                        <span>\r\n                            <a rel=\"noreferrer\" href=\"https://www.facebook.com/ourenergytexas\" target=\"_blank\" >\r\n                                <img src=\"../assets/img/facebook.png\" alt=\"\" width=\"45px\" height=\"45px\">\r\n                            </a>\r\n                        </span>\r\n                        <span>\r\n                            <a rel=\"noreferrer\" href=\"https://twitter.com/ourenergy\" target=\"_blank\">\r\n                                <img src=\"../assets/img/Twitter_Icon.png\" alt=\"\" width=\"45px\" height=\"45px\">\r\n                            </a>\r\n                        </span>\r\n                        <span>\r\n                            <a rel=\"noreferrer\" href=\"https://plus.google.com/+Ourenergyllc\" target=\"_blank\">\r\n                                <img src=\"https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697064-googleplus-512.png\" alt=\"\" width=\"46px\" height=\"46px\">\r\n                            </a>\r\n                        </span>\r\n                        <span>\r\n                            <a rel=\"noreferrer\" href=\"https://www.linkedin.com/company/our-energy-llc\" target=\"_blank\">\r\n                                <img src=\"https://www.brainplow.com/wp-content/uploads/2018/04/linkedineeeee.png\" alt=\"\" width=\"35px\" height=\"35px\">\r\n                            </a>\r\n                        </span>\r\n                    </div>\r\n                    <div>\r\n                        <h4>ACCOUNTS</h4>\r\n                        <mat-list>\r\n                            <mat-list-item>\r\n                                <a routerLink=\"/register\">\r\n                                    <i class=\"fa fa-chevron-right\"></i> Signup Now</a>\r\n                            </mat-list-item>\r\n                            <mat-list-item>\r\n                                <a routerLink=\"/login\">\r\n                                    <i class=\"fa fa-chevron-right\"></i> My Account</a>\r\n                            </mat-list-item>\r\n                        </mat-list>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n                © 2019 Our Energy, LLC. PUCT Certificate (#10170) All rights reserved.\r\n                <div class=\"footerLinks\">\r\n                    <a routerLink=\"/term-and-conditions\"> Customer Agreement </a> |\r\n                    <a routerLink=\"/privacy-policy\"> Privacy Policy </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div> -->\r\n<!--  -->\r\n\r\n"

/***/ }),

/***/ "./src/app/main-footer/main-footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 20px 15px;\n  background: url(/assets/img/sign-in.png) no-repeat;\n  background-size: 100% 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .main-footer .inner-footer {\n    min-width: 88%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    padding: 25px 15px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .main-footer .inner-footer .second-list {\n      margin-top: 60px; }\n  .main-footer h4 {\n    color: #273c61;\n    font-weight: bold;\n    font-size: 18px !important;\n    padding: 12px;\n    border-bottom: 1px solid #ccc; }\n  .main-footer .mat-list {\n    padding: 0px 0px;\n    list-style: none;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .main-footer .mat-list-item {\n    height: 27px;\n    cursor: pointer; }\n  .main-footer .mat-list-item a {\n      color: #273c61;\n      font-size: 14px; }\n  .main-footer .mat-list-item a:hover {\n      text-decoration: underline;\n      -webkit-transition: all 0.3s ease-in-out linear;\n      transition: all 0.3s ease-in-out linear; }\n  .main-footer .mat-list-item i {\n      color: #ff4270;\n      padding-right: 14px; }\n  .main-footer .contactus mat-list-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    color: #273c61;\n    font-size: 14px; }\n  .footer {\n  background-color: #0a0a0a;\n  padding: 10px 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  color: #6b6d72;\n  font-size: 12px;\n  text-align: center; }\n  .footer span {\n    width: 700px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .footer .footerLinks {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .footer .footerLinks a {\n      color: #6b6d72;\n      font-size: 12px;\n      padding: 0px 3px; }\n  .footer .footerLinks a:hover {\n    color: #f80000;\n    text-decoration: none; }\n  .footer-link {\n  padding: 0;\n  list-style: none;\n  margin: 0; }\n  .footer-link a {\n    color: #273c61;\n    font-size: 14px; }\n  .footer-link img {\n    width: 40px;\n    height: 40px;\n    margin: 5px; }\n  .raven-divider {\n  padding: 15px 0 15px 0;\n  padding: 0 0 15px 0;\n  border-top: 1px solid #dbdee3;\n  width: 1140px;\n  margin: 0 auto; }\n  @media (max-width: 770px) {\n  .inner-footer .child-one {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; } }\n  .footer_panel {\n  display: none; }\n  .footer_panel .panel-body {\n  padding: 0;\n  border: none; }\n  .footer_panel .panel-default > .panel-heading {\n  color: #fff;\n  background: -webkit-gradient(linear, left top, right top, from(#0a97d2), to(#042863));\n  background: linear-gradient(90deg, #0a97d2 0%, #042863 100%);\n  text-align: center; }\n  .footer_panel .panel-default > .panel-heading .panel-title {\n    font-size: 24px; }\n  @media (max-width: 991px) {\n  .footer_panel {\n    display: block; }\n  .main-footer {\n    display: none; } }\n  @media (max-width: 980px) {\n  .main-footer .inner-footer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .main-footer .inner-footer .second-list {\n      margin-top: -19px; } }\n"

/***/ }),

/***/ "./src/app/main-footer/main-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainFooterComponent = /** @class */ (function () {
    function MainFooterComponent() {
    }
    MainFooterComponent.prototype.ngOnInit = function () {
    };
    MainFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main-footer',
            template: __webpack_require__("./src/app/main-footer/main-footer.component.html"),
            styles: [__webpack_require__("./src/app/main-footer/main-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainFooterComponent);
    return MainFooterComponent;
}());



/***/ }),

/***/ "./src/app/main-header/main-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"mainheader\">\r\n    <p class=\"info-bar\">\r\n        <i class=\"material-icons\">phone</i>CALL TOLL FREE: 1.888.545.4687 Email: info@ourenergyllc.com\r\n    </p>\r\n    <div style=\"display: flex; flex-direction: row; align-items: center;\">\r\n        <mat-list role=\"list\" class=\"items\">\r\n            <button style=\"border: 0px; margin-top: 0px; font-weight: bold; color: red;\" (click)=\"quickPayDialog()\"> Quick Pay My Bill </button>\r\n            <a routerLink=\"/contact\">\r\n                <p role=\"listitem\">\r\n                    Contact Us\r\n                </p>\r\n            </a>\r\n            <a routerLink=\"/help\">\r\n                <p role=\"listitem\">\r\n                    Help\r\n                </p>\r\n            </a>\r\n            <a routerLink=\"/login\">\r\n                <p role=\"listitem\">\r\n                    My Account\r\n                </p>\r\n            </a>\r\n        </mat-list>\r\n        <mat-list role=\"list1\" class=\"socialLinks\">\r\n            <a href=\"https://www.facebook.com/ourenergytexas\" rel=\"noreferrer\" target=\"_blank\">\r\n                <span role=\"listitem\">\r\n                    <i class=\"fa fa-facebook\"></i>\r\n                </span>\r\n            </a>\r\n            <a href=\"https://twitter.com/ourenergy\" rel=\"noreferrer\" target=\"_blank\">\r\n                <span role=\"listitem\">\r\n                    <i class=\"fa fa-twitter\"></i>\r\n                </span>\r\n            </a>\r\n            <a href=\"https://plus.google.com/+Ourenergyllc\" rel=\"noreferrer\" target=\"_blank\">\r\n                <span role=\"listitem\">\r\n                    <i class=\"fa fa-google\"></i>\r\n                </span>\r\n            </a>\r\n            <a href=\"https://www.linkedin.com/company/our-energy-llc\" rel=\"noreferrer\" target=\"_blank\">\r\n                <span role=\"listitem\">\r\n                    <i class=\"fa fa-linkedin\"></i>\r\n                </span>\r\n            </a>\r\n        </mat-list>\r\n    </div>\r\n</div> -->\r\n\r\n<div class=\"header \" >\r\n    <!-- <div class=\"tempHeader\">\r\n      <marquee *ngFor=\"let value of data;index as i;\">\r\n        <a href=\"{{value.redirect_link}}\" target=\"_blank\">\r\n          <h3>{{value.text_to_display}}</h3>\r\n          </a>\r\n      </marquee>\r\n    </div> -->\r\n  <div class=\"inner_header\" id=\"MYHeader\">\r\n    <div class=\"logo_wrapp\">\r\n      <div>\r\n          <a class=\"logo\" [routerLink]=\"['/']\">\r\n            <img src=\"../assets/img/log_OurEnergy.png\" alt=\"logo\" routerLink=\"\">\r\n          </a>\r\n      </div>\r\n     \r\n      <!-- <img src=\"../assets/img/WTG-Energy-Logo.png\" alt=\"logo\" style=\"height: 40px\" routerLink=\"\" matTooltip=\"Home\"> -->\r\n      <!-- <a routerLink=\"\" style=\"text-decoration: none;\">\r\n                <h1 style=\"font-size:32px;font-weight:800;margin-left:10px\">\r\n                    <span style=\"color:#d00000\">W</span>\r\n                    <span style=\"color:#2e2566;margin-left: -4px;\">TG</span>\r\n                    <span style=\"color:#2e2566;\"> ENERGY</span>\r\n                </h1>\r\n            </a>-->\r\n\r\n    </div>\r\n    <div class=\"nav_right\">\r\n      <mat-list role=\"list\" class=\"nav\">\r\n        <!-- <a routerLink=\"/plan\">\r\n                <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n                    Plans\r\n                </mat-list-item>\r\n            </a> -->\r\n        <!-- <a routerLink=\"/residential\">\r\n                <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n                    Residential\r\n                </mat-list-item>\r\n            </a> -->\r\n        <!-- <a routerLink=\"/commercial\">\r\n                <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n                    Commercial\r\n                </mat-list-item>\r\n            </a> -->\r\n        <!-- <a routerLink=\"/energy-saving\">\r\n                <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n                    Saving Tips\r\n                </mat-list-item>\r\n            </a> -->\r\n        <!-- <a routerLink=\"/ourlife\">\r\n                <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n                    Our Life\r\n                </mat-list-item>\r\n            </a> -->\r\n        <!-- <a routerLink=\"/special\">\r\n                <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n                    Specials\r\n                </mat-list-item>\r\n            </a> -->\r\n        <a routerLink=\"/about\" routerLinkActive=\"Active\">\r\n          <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n            About Us\r\n          </mat-list-item>\r\n        </a>\r\n        <a routerLink=\"/residential\" routerLinkActive=\"Active\">\r\n          <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n            For the Home\r\n\r\n          </mat-list-item>\r\n        </a>\r\n        <a routerLink=\"/commercial\" routerLinkActive=\"Active\">\r\n          <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n            For the Business\r\n          </mat-list-item>\r\n        </a>\r\n        <!-- <a class=\"divide_login\" routerLink=\"/register\" routerLinkActive=\"Active\">\r\n          <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n            Sign Up\r\n          </mat-list-item>\r\n        </a> -->\r\n        <button class=\"sMyAccount divide_login\" type=\"button\" routerLink=\"/login\">\r\n          <mat-list-item *ngIf=\"!show\" class=\"main-listt  btn\" role=\"listitem\">\r\n          {{username}}  \r\n          </mat-list-item>\r\n          <mat-list-item *ngIf=\"show\" class=\"main-listt  btn\" role=\"listitem\">\r\n              {{username}} \r\n            </mat-list-item>\r\n        </button>\r\n      </mat-list>\r\n    </div>\r\n    <div class=\"Toggle\">\r\n      <mat-icon (click)=\"myFunction()\">format_align_right</mat-icon>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"topnav\" id=\"myTopnav\">\r\n  <mat-list>\r\n    <!-- <a routerLink=\"/plan\">\r\n        <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n            Plans\r\n        </mat-list-item>\r\n    </a> -->\r\n    <!-- <a routerLink=\"/residential\">\r\n        <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n            Residential\r\n        </mat-list-item>\r\n    </a> -->\r\n    <!-- <a routerLink=\"/commercial\">\r\n        <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n            Commercial\r\n        </mat-list-item>\r\n    </a> -->\r\n    <!-- <a routerLink=\"/energy-saving\">\r\n        <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n            Saving Tips\r\n        </mat-list-item>\r\n    </a> -->\r\n    <!-- <a routerLink=\"/ourlife\">\r\n        <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n            Our Life\r\n        </mat-list-item>\r\n    </a> -->\r\n    <!-- <a routerLink=\"/special\">\r\n        <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n            Specials\r\n        </mat-list-item>\r\n    </a> -->\r\n    <a routerLink=\"/about\" routerLinkActive=\"Active\">\r\n      <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n        About Us\r\n      </mat-list-item>\r\n    </a>\r\n    <a routerLink=\"/commercial\" routerLinkActive=\"Active\">\r\n      <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n        For the Home\r\n      </mat-list-item>\r\n    </a>\r\n    <a routerLink=\"/\" routerLinkActive=\"Active\">\r\n      <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n        For the Business\r\n      </mat-list-item>\r\n    </a>\r\n    <button class=\"sMyAccount\" type=\"button\" routerLink=\"/login\">\r\n      <mat-list-item class=\"main-listt  btn\" role=\"listitem\">\r\n        My Account\r\n      </mat-list-item>\r\n    </button>\r\n    <!-- <a routerLink=\"/register\" routerLinkActive=\"Active\">\r\n      <mat-list-item class=\"main-listt\" role=\"listitem\">\r\n        Sign Up\r\n      </mat-list-item>\r\n    </a> -->\r\n  </mat-list>\r\n</div>"

/***/ }),

/***/ "./src/app/main-header/main-header.component.scss":
/***/ (function(module, exports) {

module.exports = ".mainheader {\n  padding: 0px 30px !important;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #eee;\n  padding: 0;\n  color: #616161;\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  z-index: 10; }\n  .mainheader .socialLinks {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .mainheader .socialLinks span i {\n      padding: 3px 8px; }\n  .mainheader mat-list {\n    padding-top: 0px; }\n  .mainheader .items {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .mainheader .items p {\n      padding: 0px 5px;\n      margin: 0px; }\n  .mainheader .info-bar {\n    display: inline-block;\n    font-size: 15px; }\n  .mainheader .info-bar i {\n      vertical-align: middle;\n      font-size: 20px; }\n  .mainheader .mainToggle {\n    display: none; }\n  .mainheader .logo {\n    padding: 2px 10px; }\n  .mainheader .logo i {\n      font-size: 15px; }\n  .mainheader mat-list-item,\n  .mainheader a {\n    color: #616161;\n    font-weight: bold;\n    height: 25px;\n    padding: 2px 1px;\n    text-decoration: none; }\n  .tempHeader {\n  width: 100%;\n  background: #f2f2f2; }\n  .tempHeader h3 {\n  margin: 10px 0; }\n  :host ::ng-deep .mat-list .mat-list-item .mat-list-item-content,\n.mat-list .mat-list-option .mat-list-item-content,\n.mat-nav-list .mat-list-item .mat-list-item-content,\n.mat-nav-list .mat-list-option .mat-list-item-content,\n.mat-selection-list .mat-list-item .mat-list-item-content,\n.mat-selection-list .mat-list-option .mat-list-item-content {\n  padding: 5px 8px; }\n  .mat-list .mat-list-item {\n  height: auto; }\n  .header {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n  top: 0; }\n  .header .inner_header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    padding: 0 30px;\n    min-height: 85px;\n    -webkit-transition: 0.3s ease-in-out all;\n    transition: 0.3s ease-in-out all; }\n  .header .inner_header .logo_wrapp {\n      width: 30%; }\n  .header .inner_header .logo_wrapp div {\n        width: 180px; }\n  .header .inner_header .main-listt {\n      font-size: 15px;\n      padding: 15px 8px; }\n  .header .inner_header .logo {\n      cursor: pointer; }\n  .header .inner_header .Toggle {\n      display: none; }\n  .header .inner_header .nav_right .nav {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n  .header .inner_header .nav_right .nav a {\n        position: relative;\n        cursor: pointer; }\n  .header .inner_header .nav_right .nav a:hover::after, .header .inner_header .nav_right .nav a:active::after {\n        position: absolute;\n        bottom: 0px;\n        left: 0;\n        height: 2px;\n        content: \"\";\n        background: #ff4270;\n        width: 100%; }\n  .header .inner_header .nav_right .nav .Active::after {\n        position: absolute;\n        bottom: 0px;\n        left: 0;\n        height: 3px;\n        content: \"\";\n        background: #ff4270;\n        width: 100%;\n        text-decoration: none;\n        cursor: pointer; }\n  .header .inner_header mat-list {\n      padding-top: 0px; }\n  .header .inner_header mat-list-item,\n    .header .inner_header a {\n      font-weight: 600;\n      font-size: 16px;\n      text-decoration: none;\n      color: #273c61; }\n  .mainnav a:hover {\n  color: #ffffff;\n  background-color: transparent;\n  font-weight: bold;\n  text-decoration: none;\n  cursor: pointer; }\n  .topnav {\n  display: none; }\n  .box_shadow {\n  -webkit-box-shadow: 0 0px 5px #ccc !important;\n          box-shadow: 0 0px 5px #ccc !important;\n  min-height: 65px !important;\n  background: #fff; }\n  .divide_login {\n  margin-left: 50px; }\n  .sMyAccount .btn {\n  background: -webkit-gradient(linear, left top, right top, from(#a91f73), to(#ff4270)) !important;\n  background: linear-gradient(90deg, #a91f73 0%, #ff4270 100%) !important;\n  padding: 5px !important;\n  border-radius: 6px;\n  color: #fff !important;\n  border: none !important;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin: 0;\n  border: none; }\n  .sMyAccount {\n  padding: 0;\n  background: none;\n  border: none !important;\n  border-radius: 8px; }\n  @media only screen and (max-width: 991px) {\n  .tempHeader {\n    height: 43px; }\n  .mat-list {\n    padding: 0; }\n  .mainheader {\n    display: none; }\n  .header {\n    top: 0; }\n  .header .nav {\n    display: none; }\n  .header .Toggle {\n    display: unset;\n    color: #7c7c7c;\n    cursor: pointer; }\n  .topnav {\n    display: unset; }\n  .topnav a {\n    display: none; }\n  .SideNavToggle a.icon {\n    display: block; }\n  .SideNavToggle.responsive {\n    position: relative; }\n  .SideNavToggle.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0; }\n  .topnav.responsive a {\n    display: block;\n    text-align: left;\n    font-weight: bold;\n    text-decoration: none; }\n    .topnav.responsive a mat-list-item {\n      height: 28px; }\n  #myTopnav a:hover {\n    background-color: #cd0000;\n    text-decoration: none;\n    font-weight: bold;\n    color: #fff !important; }\n    #myTopnav a:hover mat-list-item {\n      color: #fff; } }\n  @media only screen and (max-width: 991px) {\n  .mainheader .mainnav {\n    display: none; } }\n  p {\n  margin: 0px 0 0px; }\n  @media only screen and (max-width: 767px) {\n  .header .inner_header .Toggle {\n    display: block; }\n  .header .inner_header .nav {\n    display: none; }\n  .mat-list {\n    background: #fff; }\n  .topnav {\n    position: fixed;\n    top: 66px;\n    right: 0;\n    width: 230px;\n    z-index: 9;\n    -webkit-box-shadow: 0 0 5px #ccc;\n            box-shadow: 0 0 5px #ccc; }\n  .topnav.responsive a {\n    padding-left: 10px; }\n  .nav_right {\n    display: none; }\n  .header .inner_header {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; } }\n"

/***/ }),

/***/ "./src/app/main-header/main-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent(dialog, http) {
        this.dialog = dialog;
        this.http = http;
        this.myFunction = function () {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            }
            else {
                x.className = "topnav";
            }
        };
        this.show = false;
        this.dialogResult = "";
        this.data = [];
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
        // 
        // this.username = localStorage.getItem('username')
        if (localStorage.getItem('username') != null) {
            this.show = true;
            this.username = localStorage.getItem('username');
        }
        else {
            this.show = false;
            this.username = "My Account";
        }
        this.setheader();
        window.scroll(0, 0);
        window.onscroll = function () { myFunction(); };
        var header = document.getElementById("MYHeader");
        var sticky = header.offsetTop;
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("box_shadow");
            }
            else {
                header.classList.remove("box_shadow");
            }
        }
        // 
    };
    MainHeaderComponent.prototype.quickPayDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__login_login_component__["b" /* QuickPayComponent */], {
            width: '550px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogResult = result;
        });
    };
    MainHeaderComponent.prototype.setheader = function () {
        var _this = this;
        // if (!localStorage.getItem('zip')) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //33.0604
        //-96.7333
        this.http.get('https://devbackend.wattcrm.com/portal/public-news-from-ourenergy/').subscribe(function (Res) {
            console.log(Res['message']);
            _this.data = Res['message'];
        });
    };
    MainHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-header',
            template: __webpack_require__("./src/app/main-header/main-header.component.html"),
            styles: [__webpack_require__("./src/app/main-header/main-header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_divider__ = __webpack_require__("./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_paginator__ = __webpack_require__("./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_stepper__ = __webpack_require__("./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_slide_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_19__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_paginator__["b" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_paginator__["b" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatProgressSpinnerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_19__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_paginator__["b" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_paginator__["b" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatProgressSpinnerModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/pay-enroll-deposit/pay-enroll-deposit.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 class=\"text-center\">Deposit Submission</h1>\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n            <div class=\"row contains\">\r\n                <h3>Product Details</h3>\r\n                <div style=\"font-size: 20px; margin: 15px 0px 0px 15px;\">\r\n                    {{response?.product_name}}\r\n                </div>\r\n                <div style=\"font-size: 16px; margin: 10px 10px 15px 15px;\">\r\n                    {{response?.display_info}}\r\n                </div>\r\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                    <input matInput placeholder=\"Rate\" [value]=\"response?.rate ? (response?.rate + '¢ per kWh') : ''\" disabled>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                    <input matInput placeholder=\"Contract Term\" [value]=\"response?.term\" disabled>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                    <input matInput placeholder=\"Early Termination Fee\" [value]=\"response?.display_termination_fee ? ('$' + response?.display_termination_fee) : ''\" disabled>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n            <div class=\"row contains\">\r\n                <h3>Customer Details</h3>\r\n                <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                    <input matInput placeholder=\"Name\" [value]=\"response?.cust_firstname ? (response?.cust_firstname + ' ' + response?.cust_lastname) : ''\" disabled>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                    <input matInput placeholder=\"Account No.\" [value]=\"response?.use_cust_id\" disabled>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                    <input matInput placeholder=\"Email\" [value]=\"response?.email_address\" disabled>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                    <input matInput placeholder=\"Phone No.\" [value]=\"response?.phone1\" disabled>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <h4>You are required to submit a deposit of $300.00</h4>\r\n    <br>\r\n    <form [formGroup]=\"sendingData\" (ngSubmit)=\"submit()\">\r\n        <div mat-dialog-content>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                    <input matInput placeholder=\"Card Holder Name\" formControlName=\"cust_name\" maxlength=\"50\">\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                    <mat-select placeholder=\"Credit Card Type\" formControlName=\"de_card_type\" required>\r\n                        <mat-option [value]=\"\">--</mat-option>\r\n                        <mat-option [value]=\"cardtype\" *ngFor=\"let cardtype of cards\">{{cardtype}}</mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"sendingData.controls.de_card_type.hasError('required')\">Card Type is required</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\r\n                    <input matInput placeholder=\"Card No.\" formControlName=\"de_cc_no\" maxlength=\"19\" required credit-card>\r\n                    <mat-error *ngIf=\"sendingData.controls.de_cc_no.hasError('required')\">Card No. is required</mat-error>\r\n                    <mat-error *ngIf=\"sendingData.controls.de_cc_no.hasError('pattern')\">Invalid Format</mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"row\">\r\n                <mat-form-field class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                    <input matInput placeholder=\"CCV\" formControlName=\"de_security_code\" maxlength=\"3\" required>\r\n                    <mat-error *ngIf=\"sendingData.controls.de_security_code.hasError('required')\">CCV is required</mat-error>\r\n                    <mat-error *ngIf=\"sendingData.controls.de_security_code.hasError('pattern')\">Invalid Format</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                    <mat-select placeholder=\"Expiry Month\" formControlName=\"de_expiry_MM\" required>\r\n                        <mat-option [value]=\"\">--</mat-option>\r\n                        <mat-option [value]=\"x.value\" *ngFor=\"let x of months\">{{x.viewValue}}</mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"sendingData.controls.de_expiry_MM.hasError('required')\">Expiry Month is required</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                    <mat-select placeholder=\"Expiry Year\" formControlName=\"de_expiry_YYYY\" required>\r\n                        <mat-option [value]=\"\">--</mat-option>\r\n                        <mat-option [value]=\"y\" *ngFor=\"let y of years\">{{y}}</mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"sendingData.controls.de_expiry_YYYY.hasError('required')\">Expiry Year is required</mat-error>\r\n                </mat-form-field>\r\n                <mat-slide-toggle style=\"margin-top: 20px;\" class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\" formControlName=\"de_autopay\" color=\"primary\"><b>Auto Pay</b></mat-slide-toggle>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n            <br>\r\n            <button  [disabled]=\"btnDisabled\" type=\"submit\">Pay Now</button>\r\n            <button  [disabled]=\"btnDisabled\" type=\"button\" (click)=\"cancel()\">Cancel</button>\r\n        </div>\r\n        <br>\r\n        <br>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/pay-enroll-deposit/pay-enroll-deposit.scss":
/***/ (function(module, exports) {

module.exports = "::ng-deep .contains .mat-form-field-underline {\n  height: 0px !important; }\n\n::ng-deep .contains .mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after,\n::ng-deep .contains .mat-input-element:disabled {\n  color: #333; }\n\n.mat-form-field {\n  font-size: 16px;\n  font-weight: bold; }\n\nbutton {\n  background-color: #000;\n  color: #fff;\n  padding: 5px 30px;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  border-radius: 25px; }\n\nh1 {\n  font-weight: 700; }\n\nh3 {\n  font-weight: bold; }\n\nh4 {\n  text-align: center;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/pay-enroll-deposit/pay-enroll-deposit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayEnrollDepositComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__always_auth_service__ = __webpack_require__("./src/app/always-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PayEnrollDepositComponent = /** @class */ (function () {
    function PayEnrollDepositComponent(route, http, router, service) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.service = service;
        this.btnDisabled = false;
        this.years = [];
        this.months = [
            { value: "01", viewValue: "January" },
            { value: "02", viewValue: "February" },
            { value: "03", viewValue: "March" },
            { value: "04", viewValue: "April" },
            { value: "05", viewValue: "May" },
            { value: "06", viewValue: "June" },
            { value: "07", viewValue: "July" },
            { value: "08", viewValue: "August" },
            { value: "09", viewValue: "September" },
            { value: "10", viewValue: "October" },
            { value: "11", viewValue: "November" },
            { value: "12", viewValue: "December" },
        ];
        this.cards = ['Master', 'Discover', 'Visa'];
        this.sendingData = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormGroup */]({
            sched_type: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('C'),
            sched_pay_amount: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('300.00'),
            de_card_type: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]),
            de_cc_no: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].pattern("[0-9-]+")]),
            de_security_code: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].pattern("[0-9]+")]),
            de_expiry_MM: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]),
            de_expiry_YYYY: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["l" /* Validators */].required]),
            cust_name: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */](''),
            cust_firstname: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */](''),
            cust_lastname: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */](''),
            use_cust_id: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */](''),
            sys_batch_no: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */](''),
            ua: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('True'),
            created_by: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('Internet One Time'),
            created_process: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('Enroll'),
            cust_pii_2: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('TX'),
            de_autopay: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */](true),
        });
    }
    PayEnrollDepositComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentYear = new Date().getFullYear();
        this.years[0] = currentYear;
        for (var index = 1; index < 20; index++) {
            this.years[index] = this.years[index - 1] + 1;
        }
        window.scrollTo(0, 0);
        this.route.params.subscribe(function (res) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + "pr/enrollment-with-sys-batch-no/sys-batch-no" + res.custid + "/").subscribe(function (resp) {
                if (resp['status'] == true) {
                    _this.response = resp['message'];
                    _this.sendingData.controls.cust_firstname.setValue("" + resp['message']['cust_firstname']);
                    _this.sendingData.controls.cust_lastname.setValue("" + resp['message']['cust_lastname']);
                    _this.sendingData.controls.use_cust_id.setValue("" + resp['message']['use_cust_id']);
                    _this.sendingData.controls.sys_batch_no.setValue("" + res.custid);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()(resp['message'], '', 'warning').then(function () { return _this.router.navigate(['/']); });
                }
            });
        }, function (err) { __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()(err, '', 'error').then(function () { return _this.router.navigate(['/']); }); });
    };
    PayEnrollDepositComponent.prototype.cancel = function () { this.router.navigate(['/']); };
    PayEnrollDepositComponent.prototype.submit = function () {
        var _this = this;
        if (this.sendingData.valid == true) {
            this.btnDisabled = true;
            var obj = this.sendingData.value;
            obj['de_autopay'] = this.sendingData.controls.de_autopay.value == true ? obj.de_autopay = "Y" : obj.deposit_autopay = "N";
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].webenrollurl + "pr/enrollment-with-sys-batch-no/sys-batch-no" + this.sendingData.controls.sys_batch_no.value + "/", obj).subscribe(function (res) {
                if (res['status'] == true) {
                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()("Deposit submitted successfully", "", 'success').then(function () {
                        res['show_message'] = "Your deposit is submitted sucessfully.";
                        res['message_color'] = "black";
                        res['message'] = {};
                        res['message']['use_cust_id'] = _this.sendingData.controls.use_cust_id.value;
                        _this.service.changeData(res);
                        _this.router.navigate(['enrollsuccess']);
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()(res['message'], "", 'warning');
                }
                _this.btnDisabled = false;
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()(err, '', 'error').then(function () { return _this.btnDisabled = false; });
            });
        }
    };
    PayEnrollDepositComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-pay-enroll-deposit',
            template: __webpack_require__("./src/app/pay-enroll-deposit/pay-enroll-deposit.html"),
            styles: [__webpack_require__("./src/app/pay-enroll-deposit/pay-enroll-deposit.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__always_auth_service__["f" /* UserService */]])
    ], PayEnrollDepositComponent);
    return PayEnrollDepositComponent;
}());



/***/ }),

/***/ "./src/app/recapcha/recapcha.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card recaptcha_div\">\r\n    <div class=\"main\">\r\n        <img [src]=\"imgName\">\r\n        <mat-form-field class=\"text-center\" floatLabel=\"always\">\r\n            <mat-label></mat-label>\r\n            <input matInput [(ngModel)]=\"capchaText\" autocomplete=\"off\" maxlength=\"5\" (ngModelChange)=\"checkChange()\" placeholder=\"Enter text\">\r\n        </mat-form-field>\r\n    </div>\r\n    <button type=\"button\" (click)=\"resetImg()\" mat-icon-button>\r\n        <mat-icon>cached</mat-icon>\r\n      </button>\r\n   \r\n</div>"

/***/ }),

/***/ "./src/app/recapcha/recapcha.component.scss":
/***/ (function(module, exports) {

module.exports = ".card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 5px;\n  -webkit-box-shadow: 0 0 5px #ccc;\n          box-shadow: 0 0 5px #ccc;\n  border-radius: 5px;\n  margin: 10px 0;\n  max-width: 300px; }\n\n.main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 5px; }\n\n.mat-form-field {\n  text-align: center;\n  font-size: 16px;\n  max-width: 100px; }\n\nbutton {\n  margin-left: 10px;\n  background-color: black;\n  border: none !important;\n  width: 30px;\n  height: 30px;\n  line-height: 12px; }\n\nbutton .mat-icon {\n    color: #fff !important;\n    font-size: 20px; }\n\nbutton:focus {\n  background: #000; }\n"

/***/ }),

/***/ "./src/app/recapcha/recapcha.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecapchaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recapcha_service__ = __webpack_require__("./src/app/recapcha/recapcha.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecapchaComponent = /** @class */ (function () {
    function RecapchaComponent(recapchaService) {
        this.recapchaService = recapchaService;
    }
    RecapchaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recapchaService.resetImg();
        this.recapchaService.img.subscribe(function (res) { return _this.imgName = res; });
    };
    RecapchaComponent.prototype.resetImg = function () {
        var _this = this;
        this.recapchaService.resetImg();
        this.recapchaService.img.subscribe(function (res) { return _this.imgName = res; });
    };
    RecapchaComponent.prototype.checkChange = function () {
        this.recapchaService.changeData(this.capchaText);
    };
    RecapchaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recapcha',
            template: __webpack_require__("./src/app/recapcha/recapcha.component.html"),
            styles: [__webpack_require__("./src/app/recapcha/recapcha.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__recapcha_service__["a" /* RecapchaService */]])
    ], RecapchaComponent);
    return RecapchaComponent;
}());



/***/ }),

/***/ "./src/app/recapcha/recapcha.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecapchaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecapchaService = /** @class */ (function () {
    function RecapchaService() {
        this.isn = "../assets/Recaptcha Images/Recaptcha Images-";
        this.recapchaImages = [
            { img: this.isn + "01.jpg", text: "FFhtq" },
            { img: this.isn + "02.jpg", text: "ghTkn" },
            { img: this.isn + "03.jpg", text: "OfrHt" },
            { img: this.isn + "04.jpg", text: "qjRtf" },
            { img: this.isn + "05.jpg", text: "sbCwt" },
            { img: this.isn + "06.jpg", text: "pdkOs" },
            { img: this.isn + "07.jpg", text: "efiQx" },
            { img: this.isn + "08.jpg", text: "nVbra" },
            { img: this.isn + "09.jpg", text: "pLkub" },
            { img: this.isn + "10.jpg", text: "Vbnuy" },
            { img: this.isn + "12.jpg", text: "iYhjE" },
            { img: this.isn + "13.jpg", text: "zUlds" },
            { img: this.isn + "14.jpg", text: "pScNo" },
            { img: this.isn + "15.jpg", text: "xxFyt" },
            { img: this.isn + "16.jpg", text: "dApmt" },
            { img: this.isn + "17.jpg", text: "cHejp" },
            { img: this.isn + "19.jpg", text: "LqwRc" },
            { img: this.isn + "20.jpg", text: "qXfrt" },
            { img: this.isn + "21.jpg", text: "ZbyvC" },
            { img: this.isn + "22.jpg", text: "Mrysi" },
            { img: this.isn + "23.jpg", text: "DgEqt" },
            { img: this.isn + "24.jpg", text: "jXbeD" },
            { img: this.isn + "25.jpg", text: "pStuK" },
            { img: this.isn + "26.jpg", text: "mCrgt" },
            { img: this.isn + "27.jpg", text: "ieTyu" },
            { img: this.isn + "28.jpg", text: "XgdzV" },
            { img: this.isn + "29.jpg", text: "OsYrt" },
            { img: this.isn + "30.jpg", text: "fgWrk" },
            { img: this.isn + "31.jpg", text: "iQsdh" },
            { img: this.isn + "32.jpg", text: "bnLsp" },
            { img: this.isn + "33.jpg", text: "iQrgb" },
            { img: this.isn + "34.jpg", text: "pHzsn" },
            { img: this.isn + "35.jpg", text: "ZyUie" },
            { img: this.isn + "36.jpg", text: "qRvbx" },
            { img: this.isn + "37.jpg", text: "SfciG" },
            { img: this.isn + "38.jpg", text: "KrXdb" },
            { img: this.isn + "39.jpg", text: "gWjyb" },
            { img: this.isn + "40.jpg", text: "Rxjod" },
            { img: this.isn + "41.jpg", text: "Bvkjr" },
            { img: this.isn + "42.jpg", text: "YodxV" },
            { img: this.isn + "43.jpg", text: "eyTsM" },
            { img: this.isn + "44.jpg", text: "ilGkx" },
            { img: this.isn + "45.jpg", text: "mKeqr" },
            { img: this.isn + "46.jpg", text: "ulbcN" },
            { img: this.isn + "47.jpg", text: "hBjxV" },
            { img: this.isn + "49.jpg", text: "AqfGu" },
            { img: this.isn + "50.jpg", text: "sAwio" },
            { img: this.isn + "51.jpg", text: "ExJua" },
            { img: this.isn + "53.jpg", text: "FcVbm" },
            { img: this.isn + "54.jpg", text: "SvJkl" },
            { img: this.isn + "56.jpg", text: "JrExF" }
        ];
        this.datas = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.data = this.datas.asObservable();
        this.imgData = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.img = this.imgData.asObservable();
        this.capchaText = "";
        this.imgText = "";
        this.rn = Math.round(Math.random() * Math.floor(this.recapchaImages.length - 1));
    }
    RecapchaService.prototype.changeData = function (dataa) {
        this.datas.next(dataa);
    };
    RecapchaService.prototype.changeImgData = function (d) {
        this.imgData.next(d);
    };
    RecapchaService.prototype.resetImg = function () {
        this.nrn = Math.round(Math.random() * Math.floor(this.recapchaImages.length - 1));
        this.imgText = this.recapchaImages[this.nrn].text;
        this.changeImgData(this.recapchaImages[this.nrn].img);
        return this.recapchaImages[this.nrn].img;
    };
    RecapchaService.prototype.check = function () {
        var text;
        this.data.subscribe(function (res) { return text = res; });
        if (this.imgText === text) {
            return true;
        }
        else {
            this.resetImg();
            return false;
        }
    };
    RecapchaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RecapchaService);
    return RecapchaService;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CustomDirectives_CustomValidation__ = __webpack_require__("./src/app/CustomDirectives/CustomValidation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__ = __webpack_require__("./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__CustomDirectives_CustomValidation__["c" /* HighlightSearch */],
                __WEBPACK_IMPORTED_MODULE_1__CustomDirectives_CustomValidation__["b" /* CreditCardDirective */],
                __WEBPACK_IMPORTED_MODULE_1__CustomDirectives_CustomValidation__["e" /* SocialSecurityDirective */],
                __WEBPACK_IMPORTED_MODULE_1__CustomDirectives_CustomValidation__["d" /* PhoneNumberDirective */],
                __WEBPACK_IMPORTED_MODULE_1__CustomDirectives_CustomValidation__["a" /* BlockCopyPasteDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__["a" /* PdfViewerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__CustomDirectives_CustomValidation__["c" /* HighlightSearch */],
                __WEBPACK_IMPORTED_MODULE_1__CustomDirectives_CustomValidation__["b" /* CreditCardDirective */],
                __WEBPACK_IMPORTED_MODULE_1__CustomDirectives_CustomValidation__["e" /* SocialSecurityDirective */],
                __WEBPACK_IMPORTED_MODULE_1__CustomDirectives_CustomValidation__["d" /* PhoneNumberDirective */],
                __WEBPACK_IMPORTED_MODULE_1__CustomDirectives_CustomValidation__["a" /* BlockCopyPasteDirective */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__["a" /* PdfViewerModule */]
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // url: 'https://apis.wattcrm.com/',
    url: 'https://devbackend.wattcrm.com/',
    webenrollurl: 'https://webenrollapi.smartixai.com/',
    // webenrollurl: 'http://192.168.29.165:8003/',
    backendurl: 'https://backend.wattcrm.com/',
    agenturl: 'https://agentapis.wattcrm.com/',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map