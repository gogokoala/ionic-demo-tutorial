import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Barcode } from '../../providers/barcode';
import { BarcodeService } from '../../providers/barcode-service';

/**
 * Generated class for the BarcodeList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barcode-list',
  templateUrl: 'barcode-list.html',
})
export class BarcodeListPage {
  items: Barcode[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeService: BarcodeService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeList');
  }

  getBarcodes(): void {
    this.barcodeService
        .getAll()
        .then(barcodes => this.items = barcodes);
  }

  add(text: string): void {
    text = text.trim();
    if (!text) { return; }
    this.barcodeService.create(text, "QR_CODE")
      .then(barcode => {
        this.items.push(barcode);
      });
  }

  ngOnInit(): void {
    this.getBarcodes();
  }


}
