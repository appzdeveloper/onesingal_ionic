webpackJsonp([0],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(dialog, common, app) {
        this.dialog = dialog;
        this.common = common;
        this.app = app;
        this.registerDetails = {
            User_Fname: '',
            User_LName: '',
            User_Emai: '',
            User_Password: '',
            User_DeviceId: '',
            User_Devicetype: '',
            confirmPassword: '',
            User_loginStatus: 'false'
        };
        this.registerDetails.User_Devicetype = this.common.platform.is('android') ? 'android' : 'ios';
        this.registerDetails.User_DeviceId = this.dialog.getFromLocal('pushUserId') ? this.dialog.getFromLocal('pushUserId') : '1f8e5879-0b1c-4961-8564-afa84623b0a1';
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registerUSer = function () {
        if (this.checkValidation()) {
            this.common.showLoader();
            this.submitData();
        }
    };
    RegisterPage.prototype.checkValidation = function () {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.registerDetails.User_Fname.length === 0) {
            this.dialog.showAlert('Register', this.common.ENTER_F_NAME, 'Ok');
            return false;
        }
        else if (this.registerDetails.User_LName.length === 0) {
            this.dialog.showAlert('Register', this.common.ENTER_L_NAME, 'Ok');
            return false;
        }
        else if (this.registerDetails.User_Emai.length === 0) {
            this.dialog.showAlert('Register', this.common.ENTER_EMAIL, 'Ok');
            return false;
        }
        else if (!re.test(this.registerDetails.User_Emai)) {
            // Invalid Email
            this.dialog.showAlert('Login', this.common.INVALID_EMAIL, 'Ok');
            return false;
        }
        else if (this.registerDetails.User_Password.length < 6) {
            this.dialog.showAlert('Register', this.common.INVALID_PASSWORD, 'Ok');
            return false;
        }
        else if (this.registerDetails.User_Password !== this.registerDetails.confirmPassword) {
            this.dialog.showAlert('Register', "Password and confirm password does not match", 'Ok');
            return false;
        }
        else {
            return true;
        }
    };
    RegisterPage.prototype.submitData = function () {
        var _this = this;
        this.common.post(this.common.regURL, this.registerDetails, '').subscribe(function (response) {
            console.log(response);
            _this.common.hideLoader();
            if (response.ResponseStatus === 200) {
                // this.common.navCtrl.pop();
                _this.app.getActiveNav().pop();
                _this.dialog.showToast("You are sucessfully register now.", 5000, 'top', true);
                // this.common.navCtrl.push('HomePage');
            }
            else {
                _this.dialog.showAlert('Error', response.ResponseMessage, 'Dismiss');
            }
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Volumes/Nikunj/BItBucket/Miranda/onesignal/src/pages/register/register.html"*/'<ion-header mode="ios">\n  <ion-navbar text-center color="primary">\n    <ion-title mode="ios"></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class="topCard">\n    <ion-col col-12 text-center padding-bottom>\n      <h1 class="titletext">Demo App</h1>\n    </ion-col>\n  </ion-row>\n  <ion-card mode="md" no-margin class="bottomCard">\n    <ion-row>\n      <ion-col col-12 text-center padding-bottom padding-top>\n        <h1 ion-text color="primary"> Create an Account </h1>\n      </ion-col>\n      <ion-col col-12 padding-left padding-right margin-bottom>\n        <ion-input mode="md" type="text" class="customItemLogin" [(ngModel)]=\'registerDetails.User_Fname\' placeholder="First Name">\n        </ion-input>\n      </ion-col>\n      <ion-col col-12 padding-left padding-right margin-bottom>\n        <ion-input mode="md" type="text" class="customItemLogin" [(ngModel)]=\'registerDetails.User_LName\' placeholder="Last Name">\n        </ion-input>\n      </ion-col>\n      <ion-col col-12 padding-left padding-right margin-bottom>\n        <ion-input mode="md" type="email" class="customItemLogin" [(ngModel)]=\'registerDetails.User_Emai\' placeholder="Email">\n        </ion-input>\n      </ion-col>\n      <ion-col col-12 padding-left padding-right margin-bottom>\n        <ion-input mode="md" type="password" class="customItemLogin" [(ngModel)]=\'registerDetails.User_Password\'\n          placeholder="Password">\n        </ion-input>\n      </ion-col>\n\n      <ion-col col-12 padding-left padding-right margin-bottom>\n        <ion-input mode="md" type="password" class="customItemLogin" [(ngModel)]=\'registerDetails.confirmPassword\'\n          placeholder="Confirm Password">\n        </ion-input>\n      </ion-col>\n      <ion-col text-center col-12>\n        <button ion-button round color="primary" class="submitButton" (click)="registerUSer()">Submit</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Volumes/Nikunj/BItBucket/Miranda/onesignal/src/pages/register/register.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_services_call_api_services_call_api__["a" /* ServicesCallApiProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_dialog_dialog__["a" /* DialogProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_services_call_api_services_call_api__["a" /* ServicesCallApiProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=0.js.map