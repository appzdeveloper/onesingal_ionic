import { AlertController, ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';

/*
  Generated class for the DialogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DialogProvider {
  public isConfirmBox: boolean = false;
  public confirmBox: any;
  constructor(public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private oneSignal: OneSignal) {
    console.log('Hello DialogProvider Provider');
  }

  /**
   * 
   * @param title Alert Title
   * @param message Message
   * @param buttonName Button Name
   */
  showAlert(title: string, message: any, buttonName: string) {
    const alert = this.alertCtrl.create({
      title: "Demo app",
      message: message,
      mode: 'ios',
      buttons: [buttonName]
    });
    alert.present();
  }

  /**
   * 
   * @param title Confirm Title
   * @param message Confirm Message
   * @param btn_text Button Array ['No','Yes']
   * @param fun_suc CallBack function return true | false
   */
  openConfirmBox(title: string, message: any, btn_text: any, fun_suc: any) {
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
          handler: () => {
            fun_suc(false);
            this.isConfirmBox = false;
          }
        }, {
          text: btn_text[1],
          handler: () => {
            fun_suc(true);
            this.isConfirmBox = false;
          }
        }
      ]
    });
    this.confirmBox.present();
  }

  /**
   * 
   * @param message Toast Message
   * @param duration 2000 | 5000 | 10000
   * @param position top | middle | bottom
   * @param showButton true | false
   */
  showToast(message: string, duration: any, position: any, showButton: boolean) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position,
      showCloseButton: showButton
    });
    toast.present();
  }

  initOneSignal() {
    this.oneSignal.startInit('75eac05b-39d6-4832-b9f9-ae3fbd784106', '555579005926');
    this.oneSignal.getIds().then((ids: any) => {
      console.log(ids);
      this.saveToLocal('pushToken', ids.pushToken);
      this.saveToLocal('pushUserId', ids.userId);
    });
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationReceived().subscribe((data: any) => {
      // do something when notification is received
      console.log(data);
    });

    this.oneSignal.handleNotificationOpened().subscribe((data: any) => {
      // do something when a notification is opened
      console.log(data);
    });
    this.oneSignal.endInit();
  }

  /**
   * Set Given Value to Given Key into Local Storage
   *
   * @param {*} key : String
   * @param {*} value : String/Object
   * @memberof ApphelperService
   */
  saveToLocal(key: any, value: any) {
    if (typeof value === 'object') {
      localStorage[key] = JSON.stringify(value);
    } else {
      localStorage[key] = value;
    }
  }

  /**
   * Get Value of given Key from Local Storage
   *
   * @param {*} key : String
   * @return {*} String Value (If value is object then it returns stringified object)
   * @memberof ApphelperService
   */
  getFromLocal(key: string) {
    const value = localStorage[key];
    if (typeof value === 'undefined') {
      return null;
    } else {
      return value;
    }
  }

  /**
   * Remove Given Key from Local Storage
   *
   * @param {string} key
   * @memberof ApphelperService
   */
  removeFromLocal(key: string) {
    localStorage.removeItem(key);
  }
}
