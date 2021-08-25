import { DialogProvider } from './../../providers/dialog/dialog';
import { Component } from '@angular/core';
import { IonicPage, App } from 'ionic-angular';
import { ServicesCallApiProvider } from '../../providers/services-call-api/services-call-api';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [ServicesCallApiProvider],
})
export class RegisterPage {
  public registerDetails = {
    User_Fname: '',
    User_LName: '',
    User_Emai: '',
    User_Password: '',
    User_DeviceId: '',
    User_Devicetype: '',
    confirmPassword: '',
    User_loginStatus: 'false'
  }
  constructor(public dialog: DialogProvider, public common: ServicesCallApiProvider, public app: App) {
    this.registerDetails.User_Devicetype = this.common.platform.is('android') ? 'android' : 'ios';
    this.registerDetails.User_DeviceId = this.dialog.getFromLocal('pushUserId') ? this.dialog.getFromLocal('pushUserId') : '1f8e5879-0b1c-4961-8564-afa84623b0a1';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUSer() {
    if (this.checkValidation()) {
      this.common.showLoader();
      this.submitData()
    }
  }


  checkValidation() {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.registerDetails.User_Fname.length === 0) {
      this.dialog.showAlert('Register', this.common.ENTER_F_NAME, 'Ok');
      return false;
    } else if (this.registerDetails.User_LName.length === 0) {
      this.dialog.showAlert('Register', this.common.ENTER_L_NAME, 'Ok');
      return false;
    } else if (this.registerDetails.User_Emai.length === 0) {
      this.dialog.showAlert('Register', this.common.ENTER_EMAIL, 'Ok');
      return false;
    } else if (!re.test(this.registerDetails.User_Emai)) {
      // Invalid Email
      this.dialog.showAlert('Login', this.common.INVALID_EMAIL, 'Ok');
      return false;
    } else if (this.registerDetails.User_Password.length < 6) {
      this.dialog.showAlert('Register', this.common.INVALID_PASSWORD, 'Ok');
      return false;
    } else if (this.registerDetails.User_Password !== this.registerDetails.confirmPassword) {
      this.dialog.showAlert('Register', "Password and confirm password does not match", 'Ok');
      return false;
    } else {
      return true
    }


  }

  submitData() {

    this.common.post(this.common.regURL, this.registerDetails, '').subscribe(response => {
      console.log(response);
      this.common.hideLoader();
      if (response.ResponseStatus === 200) {
        // this.common.navCtrl.pop();
        this.app.getActiveNav().pop()
        this.dialog.showToast("You are sucessfully register now.", 5000, 'top', true);
        // this.common.navCtrl.push('HomePage');
      } else {
        this.dialog.showAlert('Error', response.ResponseMessage, 'Dismiss');
      }
    })
  }

}
