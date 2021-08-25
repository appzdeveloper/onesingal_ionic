import { Injectable, ViewChild } from '@angular/core';
import { LoadingController, Nav, Platform } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';


/*
  Generated class for the ServicesCallApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesCallApiProvider {
  public userCredentials: any;

  loginURL = 'http://demoapi.highitsolution.com/User/Login'
  regURL = "http://demoapi.highitsolution.com/User/Registration"
  logoutURL = "http://demoapi.highitsolution.com/User/Logout"
  switchAccountURL = "http://demoapi.highitsolution.com/User/SwitchAccount"



  // Validation messages:
  ENTER_EMAIL = "Enter an email id"
  ENTER_PASSWORD = "Enter a password"
  INVALID_EMAIL = "Invaild email id"
  INVALID_PASSWORD = "Invalid password, Password have must be at least 6 characters"
  ENTER_F_NAME = "Enter first name"
  ENTER_L_NAME = "Enter last name"
  @ViewChild(Nav) navCtrl: Nav;

  constructor(public loadingCtrl: LoadingController, private httpNative: HTTP, public platform: Platform, public http: HttpClient) {
  }

  callPostApi(url, data) {

    return new Promise((resolve, reject) => {
      this.http.post('https://cors-anywhere.herokuapp.com/' +
        url, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });


  }


  public get(url, params?: any, options: any = {}) {
    let responseData = this.httpNative.get(url, params, {}).then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));

    return Observable.fromPromise(responseData);
  }

  public post(url, params?: any, options: any = {}) {
    console.log('URL => ', url)
    console.log('PARAMS => ', params)
    let responseData = this.httpNative.post(url, params, {})
      .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));

    return Observable.fromPromise(responseData);
  }




  nativeAPICall(set_method: any, set_URL: any, set_Data: any, successCall: any, errorCall: any) {
    // console.log(set_method)
    // console.log(set_URL)
    // console.log(set_Data)
    // console.log(successCall)
    // console.log(errorCall)

    if (set_method === "get") {
      this.httpNative.get(set_URL, set_Data, {}).then((response: any) => {
        console.log(JSON.parse(response));
        if (response.status === 200 || response.status === 201) {
          successCall(JSON.parse(response.data));
        } else {
          errorCall(JSON.parse(response.data));
        }
      }).catch((response: any) => {
        console.log(response);
        errorCall(response.error);
      });
    } else {
      this.httpNative.post(set_URL, set_Data, null).then((response: any) => {
        console.log(JSON.parse(response));
        if (response.status === 200 || response.status === 201) {
          successCall(JSON.parse(response.data));
        } else {
          errorCall(JSON.parse(response.data));
        }
      }).catch((response: any) => {
        console.log(response);
        errorCall(response.error);
      });
    }
  }

  jsonToQueryString(keyVal: any) {
    let pushData: any = [];
    for (const property in keyVal) {
      const key = property;
      const val = keyVal[property];
      pushData.push(key + '=' + val);
    }
    return (pushData = pushData.join('&'));
  }
  public loading: any;
  showLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: false,
      content: 'Please wait...'
    });

    this.loading.present();
  }

  hideLoader() {
    if (this.loading != undefined) {
      this.loading.dismiss();
    }

  }
}
