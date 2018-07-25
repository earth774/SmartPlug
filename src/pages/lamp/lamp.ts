import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-lamp',
  templateUrl: 'lamp.html'
})
export class LampPage {
  key;
  items;
  datafire;
  addcurrentinfo
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private af: AngularFireDatabase,
  ) {
    this.key = navParams.get('key');

    this.items = this.af.database.ref(this.key).once('value', data => {
      this.addcurrentinfo = this.af.object(this.key);
      this.items = {
        status1: data.S1,
        status2: data.S2,
        status3: data.S3,
        status4: data.S4,
        range1: data.Slider1,
        range2: data.Slider2,
        range3: data.Slider3,
        range4: data.Slider4,
        amount: data.amount,
      }
      console.log(this.items)
    });
    console.log(this.key); //S1
  }

  update1() {
    // this.datafire.update(this.key, { S1: this.items.status1 })
    this.addcurrentinfo.update({ S1: this.items.status1 });
  }
  update2() {
    this.addcurrentinfo.update({ S2: this.items.status2 });
  }
  update3() {
    this.addcurrentinfo.update({ S3: this.items.status3 });
  }
  update4() {
    this.addcurrentinfo.update({ S4: this.items.status4 });
  }
  update_range1() {
    this.addcurrentinfo.update({ Slider1: this.items.range1 });
  }
  update_range2() {
    this.addcurrentinfo.update({ Slider2: this.items.range2 });
  }
  update_range3() {
    this.addcurrentinfo.update({ Slider3: this.items.range3 });
  }
  update_range4() {
    this.addcurrentinfo.update({ Slider4: this.items.range4 });
  }
}

