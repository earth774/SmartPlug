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
  items = {
    P1: null,
    P2: null,
    USB: null,

  };;
  datafire;
  addcurrentinfo;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private af: AngularFireDatabase,
  ) {
    this.key = navParams.get('key');
    const personRef: firebase.database.Reference = firebase.database().ref(this.key);
    personRef.on('value', data => {
      this.addcurrentinfo = this.af.object(this.key);
      this.items = data.val();
      console.log(this.items)
    });

    console.log(this.key); //S1
  }

  update1() {
    this.addcurrentinfo.update({ P1: this.items.P1 })
  }
  update2() {
    this.addcurrentinfo.update({ P2: this.items.P2 })
  }
  update3() {
    this.addcurrentinfo.update({ USB: this.items.USB })
  }

}