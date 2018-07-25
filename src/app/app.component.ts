import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LampPage } from '../pages/lamp/lamp';
import { PlugPage } from '../pages/plug/plug';
import { AboutPage } from '../pages/about/about';
import { SettingPage } from '../pages/setting/setting';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToLamp(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LampPage);
  }goToPlug(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PlugPage);
  }goToAbout(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutPage);
  }goToSetting(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SettingPage);
  }
}
