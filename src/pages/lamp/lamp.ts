import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { async } from '../../../node_modules/rxjs/internal/scheduler/async';

@Component({
  selector: 'page-lamp',
  templateUrl: 'lamp.html'
})

export class LampPage {
  key;
  items = {
    Amp: null,
    S1: null,
    S2: null,
    S3: null,
    S4: null,
    Slider1: null,
    Slider2: null,
    Slider3: null,
    Slider4: null,
    Volt: null,
    Watt: null,
    amount: null,
    energy: null,
  };
  zone: NgZone;
  datafire;
  addcurrentinfo
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private af: AngularFireDatabase,
  ) {
    this.zone = new NgZone({});
    this.key = navParams.get('key');
    const personRef: firebase.database.Reference = firebase.database().ref(this.key);
    personRef.on('value', data => {
      this.zone.run(() => {
        this.addcurrentinfo = this.af.object(this.key);
        this.items = data.val();
        console.log(this.items)
      });
    });
    console.log(this.key); //S1
  }


  update1() {
    // this.datafire.update(this.key, { S1: this.items.status1 })
    this.addcurrentinfo.update({ S1: this.items.S1 });
  }
  update2() {
    this.addcurrentinfo.update({ S2: this.items.S2 });
  }
  update3() {
    this.addcurrentinfo.update({ S3: this.items.S3 });
  }
  update4() {
    this.addcurrentinfo.update({ S4: this.items.S4 });
  }
  update_range1() {
    this.addcurrentinfo.update({ Slider1: this.items.Slider1 });
  }
  update_range2() {
    this.addcurrentinfo.update({ Slider2: this.items.Slider2 });
  }
  update_range3() {
    this.addcurrentinfo.update({ Slider3: this.items.Slider3 });
  }
  update_range4() {
    this.addcurrentinfo.update({ Slider4: this.items.Slider4 });
  }
}

