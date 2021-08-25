import { Component } from '@angular/core';
import { IonicPage, NavParams, App } from 'ionic-angular';
import { DialogProvider } from '../../providers/dialog/dialog';
import { ServicesCallApiProvider } from '../../providers/services-call-api/services-call-api';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  userData: any;
  isPremiumAccount = 0;
  strAccountType = 'Basic'
  strBtn = 'Upgrade to Premium'

  constructor(public navParams: NavParams, public app: App, public common: ServicesCallApiProvider, public dialog: DialogProvider,) {
    // this.userData = JSON.parse(localStorage.loginDetails)
    // console.log(this.userData)
    // this.isPremiumAccount = this.userData.Ispremium;
    // this.strAccountType = this.isPremiumAccount ? 'Premium' : 'Basic'
    // this.strBtn = this.isPremiumAccount ? 'Back to Basic' : 'Upgrade to Premium'
    this.checkAccountType()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onClickLogout() {
    this.logoutFromTheServer()

    // this.navCtrl.setRoot('LoginPage')
  }

  checkAccountType(){
    this.userData = JSON.parse(localStorage.loginDetails)
    console.log(this.userData)
    this.isPremiumAccount = this.userData.Ispremium;
    this.strAccountType = this.isPremiumAccount ? 'Premium' : 'Basic'
    this.strBtn = this.isPremiumAccount ? 'Back to Basic' : 'Upgrade to Premium'
  }


  logoutFromTheServer() {
    this.common.showLoader()
    this.common.post(this.common.logoutURL, { 'userid': this.userData.User_Id }, '').subscribe(response => {
      console.log(response);
      this.common.hideLoader();
      if (response.ResponseStatus === 200) {
        // this.dialog.saveToLocal('loginDetails', response.ResponseData);
        this.dialog.showToast(response.ResponseMessage, 5000, 'top', true);
        localStorage.removeItem("loginDetails");
        this.app.getActiveNav().setRoot('LoginPage');
        // this.common.navCtrl.push('HomePage');

      } else {
        this.dialog.showAlert('Error', response.ResponseMessage, 'Dismiss');
      }
    })
  }

  upgradeAccount() {
    this.common.showLoader()
    this.common.post(this.common.switchAccountURL, { 'userId': this.userData.User_Id ,'Ispremium':this.isPremiumAccount ? 0 : 1}, '').subscribe(response => {
      console.log(response);
      this.common.hideLoader();
      if (response.ResponseStatus === 200) {
        this.dialog.saveToLocal('loginDetails', response.ResponseData);
        this.checkAccountType()
        this.dialog.showToast("Your account type changed successfully", 5000, 'bottom', false);
        // localStorage.removeItem("loginDetails");
        // this.app.getActiveNav().setRoot('LoginPage');
        // this.common.navCtrl.push('HomePage');

      } else {
        this.dialog.showAlert('Error', response.ResponseMessage, 'Dismiss');
      }
    })
  }
}
