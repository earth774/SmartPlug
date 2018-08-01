import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LampPage } from '../lamp/lamp';
import { PlugPage } from '../plug/plug';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Observable<any[]>;

  constructor(public navCtrl: NavController,
    private af: AngularFireDatabase,
  ) {
    this.showData();
  }

  ionViewDidLoad() {
    this.showData()
  }
  goToLamp(params) {
    if (!params) params = {};
    this.navCtrl.push(LampPage, { key: "LampControl" });
  }

  goToPlug(params) {
    if (!params) params = {};
    this.navCtrl.push(PlugPage, { key: "PlugControl" });
  }


  showData() {
    // const personRef: firebase.database.Reference = firebase.database().ref('/LampControl');
    // personRef.on('value', personSnapshot => {
    //   console.log(personSnapshot.val());
    // });
    // this.af.database.Reference.ref('/LampControl').once('value', res => {
    //   console.log(res.val());
    // });

  }
}
