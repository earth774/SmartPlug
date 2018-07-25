import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-Plug',
  templateUrl: 'Plug.html'
})
export class PlugPage {
  key;
  items;
  datafire;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private af: AngularFireDatabase,
  ) {
    this.key = navParams.get('key');

    this.items = this.af.database.ref(this.key).once('value', data => {
      this.addcurrentinfo = this.af.object(this.key);
      this.items = {
        status1: data.P1,
        status2: data.P2,
        status3: data.USB,
      }
      console.log(this.items)
    });
    console.log(this.key); //S1
  }

  update1() {
    this.addcurrentinfo.update({ P1: this.items.status1 })
  }
  update2() {
    this.addcurrentinfo.update({ P2: this.items.status2 })
  }
  update3() {
    this.addcurrentinfo.update({ USB: this.items.status3 })

  }

}