webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dialog_dialog__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services_call_api_services_call_api__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navParams, app, common, dialog) {
        this.navParams = navParams;
        this.app = app;
        this.common = common;
        this.dialog = dialog;
        this.isPremiumAccount = 0;
        this.strAccountType = 'Basic';
        this.strBtn = 'Upgrade to Premium';
        // this.userData = JSON.parse(localStorage.loginDetails)
        // console.log(this.userData)
        // this.isPremiumAccount = this.userData.Ispremium;
        // this.strAccountType = this.isPremiumAccount ? 'Premium' : 'Basic'
        // this.strBtn = this.isPremiumAccount ? 'Back to Basic' : 'Upgrade to Premium'
        this.checkAccountType();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.onClickLogout = function () {
        this.logoutFromTheServer();
        // this.navCtrl.setRoot('LoginPage')
    };
    HomePage.prototype.checkAccountType = function () {
        this.userData = JSON.parse(localStorage.loginDetails);
        console.log(this.userData);
        this.isPremiumAccount = this.userData.Ispremium;
        this.strAccountType = this.isPremiumAccount ? 'Premium' : 'Basic';
        this.strBtn = this.isPremiumAccount ? 'Back to Basic' : 'Upgrade to Premium';
    };
    HomePage.prototype.logoutFromTheServer = function () {
        var _this = this;
        this.common.showLoader();
        this.common.post(this.common.logoutURL, { 'userid': this.userData.User_Id }, '').subscribe(function (response) {
            console.log(response);
            _this.common.hideLoader();
            if (response.ResponseStatus === 200) {
                // this.dialog.saveToLocal('loginDetails', response.ResponseData);
                _this.dialog.showToast(response.ResponseMessage, 5000, 'top', true);
                localStorage.removeItem("loginDetails");
                _this.app.getActiveNav().setRoot('LoginPage');
                // this.common.navCtrl.push('HomePage');
            }
            else {
                _this.dialog.showAlert('Error', response.ResponseMessage, 'Dismiss');
            }
        });
    };
    HomePage.prototype.upgradeAccount = function () {
        var _this = this;
        this.common.showLoader();
        this.common.post(this.common.switchAccountURL, { 'userId': this.userData.User_Id, 'Ispremium': this.isPremiumAccount ? 0 : 1 }, '').subscribe(function (response) {
            console.log(response);
            _this.common.hideLoader();
            if (response.ResponseStatus === 200) {
                _this.dialog.saveToLocal('loginDetails', response.ResponseData);
                _this.checkAccountType();
                _this.dialog.showToast("Your account type changed successfully", 5000, 'bottom', false);
                // localStorage.removeItem("loginDetails");
                // this.app.getActiveNav().setRoot('LoginPage');
                // this.common.navCtrl.push('HomePage');
            }
            else {
                _this.dialog.showAlert('Error', response.ResponseMessage, 'Dismiss');
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/Nikunj/BItBucket/Miranda/onesignal/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header mode=\'ios\'>\n  <ion-navbar mode=\'ios\' text-center color="primary">\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only style="color: white;" (click)="onClickLogout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card class="txtcenter">\n\n    <ion-item>\n      <h2>{{userData?.User_Fname}} {{userData?.User_LName}}</h2>\n      <p>{{userData?.User_Emai}}</p>\n    </ion-item>\n  <ion-item>\n    <h2 item-start>Account type: </h2>\n    <p item-end>{{strAccountType}}</p>\n  </ion-item>\n\n  <button ion-button icon-only class="btnAccount" (click)="upgradeAccount()">\n    {{strBtn}}\n  </button>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/Nikunj/BItBucket/Miranda/onesignal/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_services_call_api_services_call_api__["a" /* ServicesCallApiProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_dialog_dialog__["a" /* DialogProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map