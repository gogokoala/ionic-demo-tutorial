import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodeListPage } from './barcode-list';

@NgModule({
  declarations: [
    BarcodeListPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcodeListPage),
  ],
  exports: [
    BarcodeListPage
  ]
})
export class BarcodeListModule {}
