import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the StoragePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {
  driverName: string;
  isLogin: Boolean;
  items: string[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
      this.isLogin = false;
      this.storage.ready().then(() => {
        this.driverName = this.storage.driver;
        // set a key/value
        this.storage.set('isLogin', this.isLogin);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoragePage');
  }

  toggleLogin() {
    this.isLogin = !this.isLogin;
    this.storage.set('isLogin', this.isLogin);
  }

  getStorageData() {
    // Or to get a key/value pair
    this.storage.get('isLogin').then((val) => {
      console.log('isLogin=' + val);
    });
  }

}
