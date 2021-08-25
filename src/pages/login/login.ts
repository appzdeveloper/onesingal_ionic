import { DialogProvider } from './../../providers/dialog/dialog';
import { Component } from '@angular/core';
import { IonicPage, App } from 'ionic-angular';
import { ServicesCallApiProvider } from '../../providers/services-call-api/services-call-api';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ServicesCallApiProvider],
})
export class LoginPage {
  public loginDetails = {
    UserName: '',
    Password: '',
    User_DeviceId: '',
    User_Devicetype: '',
  }

  constructor(public dialog: DialogProvider, public common: ServicesCallApiProvider, public app: App,) {
    this.loginDetails.User_Devicetype = this.common.platform.is('android') ? 'android' : 'ios';
    this.loginDetails.User_DeviceId = this.dialog.getFromLocal('pushUserId') ? this.dialog.getFromLocal('pushUserId') : '1f8e5879-0b1c-4961-8564-afa84623b0a1';
  }

  onClick() {
    this.app.getActiveNav().push('RegisterPage')
  }

  login() {

    if (this.checkValidation()) {
      this.common.showLoader();
      this.submitData()
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
  }


  checkValidation() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.loginDetails.UserName.length === 0) {
      this.dialog.showAlert('Login', this.common.ENTER_EMAIL, 'Ok');
      return false;
    } else if (!re.test(this.loginDetails.UserName)) {
      // Invalid Email
      this.dialog.showAlert('Login', this.common.INVALID_EMAIL, 'Ok');
      return false;
    } else if (this.loginDetails.Password.length < 6) {
      this.dialog.showAlert('Login', this.common.INVALID_PASSWORD, 'Ok');
      return false;
    } else {
      return true
    }


  }

  submitData() {

    this.common.post(this.common.loginURL, this.loginDetails, '').subscribe(response => {
      console.log(response);
      this.common.hideLoader();
      if (response.ResponseStatus === 200) {
        this.dialog.saveToLocal('loginDetails', response.ResponseData);
        this.dialog.showToast(response.ResponseMessage, 5000, 'top', true);
        this.app.getActiveNav().setRoot('HomePage')
      } else {
        this.dialog.showAlert('Error', response.ResponseMessage, 'Dismiss');
      }
    })
  }
}
