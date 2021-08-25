import { DialogProvider } from './../providers/dialog/dialog';
import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'LoginPage';
  @ViewChild(Nav) nav: Nav;
  constructor(public app: App, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public dialog: DialogProvider) {
    this.platform.ready().then(() => {
      this.checkUserIsLoggedinOrNot()
      if (this.platform.is('cordova')) {
        this.statusBar.styleLightContent();
        this.splashScreen.hide();
        if (this.platform.is('android')) {
          this.callBackButton();
        }
        this.dialog.initOneSignal();
      }
    });
  }

  checkUserIsLoggedinOrNot() {
    let ls = localStorage.loginDetails
    console.log('ls > ', ls)
    if (ls == null) {
      console.log('IF')
      this.app.getActiveNav().setRoot('LoginPage');
    } else {
      console.log('ELSE')
      this.app.getActiveNav().setRoot('HomePage');
    }
  }

  callBackButton() {
    this.platform.registerBackButtonAction(() => {
      let localNav = this.app.getActiveNavs()[0];
      if (this.nav.getActive().name === 'LoginPage') {
        this.platform.exitApp(); // Exit App.
      } else if (this.nav.getActive().name === 'HomePage') {
        this.dialog.openConfirmBox(
          "Exit App",
          "Are you sure exit App",
          ["Cancel", "Exit"],
          (val: any) => {
            if (val) {
              this.platform.exitApp();
            }
          }
        );
      } else {
        localNav.pop(); // Back to page.
      }
    });
  }
}
