webpackJsonp([1],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_dialog_dialog__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(dialog, common, app) {
        this.dialog = dialog;
        this.common = common;
        this.app = app;
        this.loginDetails = {
            UserName: '',
            Password: '',
            User_DeviceId: '',
            User_Devicetype: '',
        };
        this.loginDetails.User_Devicetype = this.common.platform.is('android') ? 'android' : 'ios';
        this.loginDetails.User_DeviceId = this.dialog.getFromLocal('pushUserId') ? this.dialog.getFromLocal('pushUserId') : '1f8e5879-0b1c-4961-8564-afa84623b0a1';
    }
    LoginPage.prototype.onClick = function () {
        this.app.getActiveNav().push('RegisterPage');
    };
    LoginPage.prototype.login = function () {
        if (this.checkValidation()) {
            this.common.showLoader();
            this.submitData();
        }
        // if (this.loginDetails.UserName.length === 0) {
        //   this.dialog.showAlert('Login', 'Enter email.', 'Ok');
        //   return;
        // }
        // if (this.loginDetails.Password.length < 6) {
        //   this.dialog.showAlert('Login', 'Passwords must be at least 6 characters.', 'Ok');
        //   return;
        // }
        // this.common.showLoader();
        // console.log(this.loginDetails);
        // this.common.nativeAPICall('post', 'http://demoapi.highitsolution.com/User/Login', this.loginDetails, (response: any) => {
        //   this.common.hideLoader();
        //   if (response.ResponseStatus === 200) {
        //     this.dialog.saveToLocal('loginDetails', response.ResponseData);
        //     this.dialog.showToast(response.ResponseMessage, 5000, 'top', true);
        //     this.common.navCtrl.push('HomePage');
        //   } else {
        //     this.dialog.showAlert('Login', response.ResponseMessage, 'Dismiss');
        //   }
        // }, (error: any) => {
        //   this.common.hideLoader();
        //   console.log(error)
        //   this.dialog.showAlert('Login', 'Error from server side', 'Dismiss');
        // });
    };
    LoginPage.prototype.checkValidation = function () {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.loginDetails.UserName.length === 0) {
            this.dialog.showAlert('Login', this.common.ENTER_EMAIL, 'Ok');
            return false;
        }
        else if (!re.test(this.loginDetails.UserName)) {
            // Invalid Email
            this.dialog.showAlert('Login', this.common.INVALID_EMAIL, 'Ok');
            return false;
        }
        else if (this.loginDetails.Password.length < 6) {
            this.dialog.showAlert('Login', this.common.INVALID_PASSWORD, 'Ok');
            return false;
        }
        else {
            return true;
        }
    };
    LoginPage.prototype.submitData = function () {
        var _this = this;
        this.common.post(this.common.loginURL, this.loginDetails, '').subscribe(function (response) {
            console.log(response);
            _this.common.hideLoader();
            if (response.ResponseStatus === 200) {
                _this.dialog.saveToLocal('loginDetails', response.ResponseData);
                _this.dialog.showToast(response.ResponseMessage, 5000, 'top', true);
                _this.app.getActiveNav().setRoot('HomePage');
            }
            else {
                _this.dialog.showAlert('Error', response.ResponseMessage, 'Dismiss');
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/Nikunj/BItBucket/Miranda/onesignal/src/pages/login/login.html"*/'<ion-header mode="ios">\n  <ion-navbar text-center color="primary">\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class="topCard">\n    <ion-col col-12 text-center padding-bottom>\n      <h1 class="titletext">Demo App</h1>\n    </ion-col>\n  </ion-row>\n  <ion-card mode="md" no-margin class="bottomCard">\n    <ion-row>\n      <ion-col col-12 text-center padding-bottom padding-top>\n        <h1 ion-text color="primary"> Login to continue </h1>\n      </ion-col>\n      <ion-col col-12 padding-left padding-right margin-bottom>\n        <ion-input mode="md" type="email" class="customItemLogin" [(ngModel)]=\'loginDetails.UserName\'\n          placeholder="Email">\n        </ion-input>\n      </ion-col>\n      <ion-col col-12 padding-left padding-right margin-bottom>\n        <ion-input type="password" mode="md" class="customItemLogin" [(ngModel)]=\'loginDetails.Password\'\n          placeholder="Password">\n        </ion-input>\n      </ion-col>\n      <ion-col text-center col-12>\n        <button ion-button round color="primary" class="submitButton" (click)="login()">Login</button>\n      </ion-col>\n      <ion-col text-center col-12>\n        <button ion-button clear color="primary" mode="ios" (click)="onClick()"> Don\'t have an account? &nbsp;<b>\n            Register Now</b></button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Volumes/Nikunj/BItBucket/Miranda/onesignal/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_services_call_api_services_call_api__["a" /* ServicesCallApiProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_dialog_dialog__["a" /* DialogProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_services_call_api_services_call_api__["a" /* ServicesCallApiProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map