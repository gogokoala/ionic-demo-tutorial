import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Barcode } from './barcode';

/*
  Generated class for the BarcodeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BarcodeService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private barcodesUrl = 'api/barcodes';  // URL to web api

  constructor(public http: Http) {
    console.log('Hello BarcodeService Provider');
  }

  getAll(): Promise<Barcode[]> {
    return this.http.get(this.barcodesUrl)
               .toPromise()
               .then(response => response.json().data as Barcode[])
               .catch(this.handleError);
  }

  getRow(id: number): Promise<Barcode> {
    const url = `${this.barcodesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Barcode)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.barcodesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(text: string, format: string): Promise<Barcode> {
    return this.http
      .post(this.barcodesUrl, JSON.stringify({text: text, format: format, scanAt: new Date().toString()}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Barcode)
      .catch(this.handleError);
  }

  update(barcode: Barcode): Promise<Barcode> {
    const url = `${this.barcodesUrl}/${barcode.id}`;
    return this.http
      .put(url, JSON.stringify(barcode), {headers: this.headers})
      .toPromise()
      .then(() => barcode)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
