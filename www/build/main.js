webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DialogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DialogProvider = /** @class */ (function () {
    function DialogProvider(alertCtrl, toastCtrl, oneSignal) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.oneSignal = oneSignal;
        this.isConfirmBox = false;
        console.log('Hello DialogProvider Provider');
    }
    /**
     *
     * @param title Alert Title
     * @param message Message
     * @param buttonName Button Name
     */
    DialogProvider.prototype.showAlert = function (title, message, buttonName) {
        var alert = this.alertCtrl.create({
            title: "Demo app",
            message: message,
            mode: 'ios',
            buttons: [buttonName]
        });
        alert.present();
    };
    /**
     *
     * @param title Confirm Title
     * @param message Confirm Message
     * @param btn_text Button Array ['No','Yes']
     * @param fun_suc CallBack function return true | false
     */
    DialogProvider.prototype.openConfirmBox = function (title, message, btn_text, fun_suc) {
        var _this = this;
        this.isConfirmBox = true;
        this.confirmBox = this.alertCtrl.create({
            title: title,
            message: message,
            enableBackdropDismiss: false,
            mode: 'ios',
            buttons: [
                {
                    text: btn_text[0],
                    role: "cancel",
                    handler: function () {
                        fun_suc(false);
                        _this.isConfirmBox = false;
                    }
                }, {
                    text: btn_text[1],
                    handler: function () {
                        fun_suc(true);
                        _this.isConfirmBox = false;
                    }
                }
            ]
        });
        this.confirmBox.present();
    };
    /**
     *
     * @param message Toast Message
     * @param duration 2000 | 5000 | 10000
     * @param position top | middle | bottom
     * @param showButton true | false
     */
    DialogProvider.prototype.showToast = function (message, duration, position, showButton) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
            showCloseButton: showButton
        });
        toast.present();
    };
    DialogProvider.prototype.initOneSignal = function () {
        var _this = this;
        this.oneSignal.startInit('75eac05b-39d6-4832-b9f9-ae3fbd784106', '555579005926');
        this.oneSignal.getIds().then(function (ids) {
            console.log(ids);
            _this.saveToLocal('pushToken', ids.pushToken);
            _this.saveToLocal('pushUserId', ids.userId);
        });
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(function (data) {
            // do something when notification is received
            console.log(data);
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (data) {
            // do something when a notification is opened
            console.log(data);
        });
        this.oneSignal.endInit();
    };
    /**
     * Set Given Value to Given Key into Local Storage
     *
     * @param {*} key : String
     * @param {*} value : String/Object
     * @memberof ApphelperService
     */
    DialogProvider.prototype.saveToLocal = function (key, value) {
        if (typeof value === 'object') {
            localStorage[key] = JSON.stringify(value);
        }
        else {
            localStorage[key] = value;
        }
    };
    /**
     * Get Value of given Key from Local Storage
     *
     * @param {*} key : String
     * @return {*} String Value (If value is object then it returns stringified object)
     * @memberof ApphelperService
     */
    DialogProvider.prototype.getFromLocal = function (key) {
        var value = localStorage[key];
        if (typeof value === 'undefined') {
            return null;
        }
        else {
            return value;
        }
    };
    /**
     * Remove Given Key from Local Storage
     *
     * @param {string} key
     * @memberof ApphelperService
     */
    DialogProvider.prototype.removeFromLocal = function (key) {
        localStorage.removeItem(key);
    };
    DialogProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__["a" /* OneSignal */]])
    ], DialogProvider);
    return DialogProvider;
}());

//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		281,
		2
	],
	"../pages/login/login.module": [
		279,
		1
	],
	"../pages/register/register.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesCallApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the ServicesCallApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicesCallApiProvider = /** @class */ (function () {
    function ServicesCallApiProvider(loadingCtrl, httpNative, platform, http) {
        this.loadingCtrl = loadingCtrl;
        this.httpNative = httpNative;
        this.platform = platform;
        this.http = http;
        this.loginURL = 'http://demoapi.highitsolution.com/User/Login';
        this.regURL = "http://demoapi.highitsolution.com/User/Registration";
        this.logoutURL = "http://demoapi.highitsolution.com/User/Logout";
        this.switchAccountURL = "http://demoapi.highitsolution.com/User/SwitchAccount";
        // Validation messages:
        this.ENTER_EMAIL = "Enter an email id";
        this.ENTER_PASSWORD = "Enter a password";
        this.INVALID_EMAIL = "Invaild email id";
        this.INVALID_PASSWORD = "Invalid password, Password have must be at least 6 characters";
        this.ENTER_F_NAME = "Enter first name";
        this.ENTER_L_NAME = "Enter last name";
    }
    ServicesCallApiProvider.prototype.callPostApi = function (url, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('https://cors-anywhere.herokuapp.com/' +
                url, JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ServicesCallApiProvider.prototype.get = function (url, params, options) {
        if (options === void 0) { options = {}; }
        var responseData = this.httpNative.get(url, params, {}).then(function (resp) { return options.responseType == 'text' ? resp.data : JSON.parse(resp.data); });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromPromise(responseData);
    };
    ServicesCallApiProvider.prototype.post = function (url, params, options) {
        if (options === void 0) { options = {}; }
        console.log('URL => ', url);
        console.log('PARAMS => ', params);
        var responseData = this.httpNative.post(url, params, {})
            .then(function (resp) { return options.responseType == 'text' ? resp.data : JSON.parse(resp.data); });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromPromise(responseData);
    };
    ServicesCallApiProvider.prototype.nativeAPICall = function (set_method, set_URL, set_Data, successCall, errorCall) {
        // console.log(set_method)
        // console.log(set_URL)
        // console.log(set_Data)
        // console.log(successCall)
        // console.log(errorCall)
        if (set_method === "get") {
            this.httpNative.get(set_URL, set_Data, {}).then(function (response) {
                console.log(JSON.parse(response));
                if (response.status === 200 || response.status === 201) {
                    successCall(JSON.parse(response.data));
                }
                else {
                    errorCall(JSON.parse(response.data));
                }
            }).catch(function (response) {
                console.log(response);
                errorCall(response.error);
            });
        }
        else {
            this.httpNative.post(set_URL, set_Data, null).then(function (response) {
                console.log(JSON.parse(response));
                if (response.status === 200 || response.status === 201) {
                    successCall(JSON.parse(response.data));
                }
                else {
                    errorCall(JSON.parse(response.data));
                }
            }).catch(function (response) {
                console.log(response);
                errorCall(response.error);
            });
        }
    };
    ServicesCallApiProvider.prototype.jsonToQueryString = function (keyVal) {
        var pushData = [];
        for (var property in keyVal) {
            var key = property;
            var val = keyVal[property];
            pushData.push(key + '=' + val);
        }
        return (pushData = pushData.join('&'));
    };
    ServicesCallApiProvider.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: false,
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ServicesCallApiProvider.prototype.hideLoader = function () {
        if (this.loading != undefined) {
            this.loading.dismiss();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], ServicesCallApiProvider.prototype, "navCtrl", void 0);
    ServicesCallApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], ServicesCallApiProvider);
    return ServicesCallApiProvider;
}());

//# sourceMappingURL=services-call-api.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_call_api_services_call_api__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dialog_dialog__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_7__providers_dialog_dialog__["a" /* DialogProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_services_call_api_services_call_api__["a" /* ServicesCallApiProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_dialog_dialog__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(app, platform, statusBar, splashScreen, dialog) {
        var _this = this;
        this.app = app;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.dialog = dialog;
        this.rootPage = 'LoginPage';
        this.platform.ready().then(function () {
            _this.checkUserIsLoggedinOrNot();
            if (_this.platform.is('cordova')) {
                _this.statusBar.styleLightContent();
                _this.splashScreen.hide();
                if (_this.platform.is('android')) {
                    _this.callBackButton();
                }
                _this.dialog.initOneSignal();
            }
        });
    }
    MyApp.prototype.checkUserIsLoggedinOrNot = function () {
        var ls = localStorage.loginDetails;
        console.log('ls > ', ls);
        if (ls == null) {
            console.log('IF');
            this.app.getActiveNav().setRoot('LoginPage');
        }
        else {
            console.log('ELSE');
            this.app.getActiveNav().setRoot('HomePage');
        }
    };
    MyApp.prototype.callBackButton = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            var localNav = _this.app.getActiveNavs()[0];
            if (_this.nav.getActive().name === 'LoginPage') {
                _this.platform.exitApp(); // Exit App.
            }
            else if (_this.nav.getActive().name === 'HomePage') {
                _this.dialog.openConfirmBox("Exit App", "Are you sure exit App", ["Cancel", "Exit"], function (val) {
                    if (val) {
                        _this.platform.exitApp();
                    }
                });
            }
            else {
                localNav.pop(); // Back to page.
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/Nikunj/BItBucket/Miranda/onesignal/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Volumes/Nikunj/BItBucket/Miranda/onesignal/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__providers_dialog_dialog__["a" /* DialogProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map