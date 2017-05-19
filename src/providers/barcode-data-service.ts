import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Barcode } from './barcode';

export class BarcodeDataService implements InMemoryDbService {
  createDb() {
    let barcodes: Array<Barcode> = [
    ];
    return {barcodes};
  }
}
