import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LampPage } from '../pages/lamp/lamp';
import { PlugPage } from '../pages/plug/plug';
import { SettingPage } from '../pages/setting/setting';
import { AboutPage } from '../pages/about/about';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

export const config = {
  apiKey: "AIzaSyDpbT9KgWzgS-nlAkF2fng4Wncpq2ppkz4",
  authDomain: "control-lamp-plug.firebaseapp.com",
  databaseURL: "https://control-lamp-plug.firebaseio.com",
  projectId: "control-lamp-plug",
  storageBucket: "control-lamp-plug.appspot.com",
  messagingSenderId: "1061178618838"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LampPage,
    PlugPage,
    SettingPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LampPage,
    PlugPage,
    SettingPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }