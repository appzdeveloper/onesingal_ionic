import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicesCallApiProvider } from '../providers/services-call-api/services-call-api';
import { DialogProvider } from '../providers/dialog/dialog';
import { OneSignal } from '@ionic-native/onesignal';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    DialogProvider,
    ServicesCallApiProvider,
    HTTP,
    
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
