import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { MapTypeModel } from './map-type.model';

@Injectable()
export class MapTypeService {
  constructor(public http: Http) {}

  getData(): Promise<MapTypeModel> {
    return this.http.get('./assets/example_data/listing.json')
     .toPromise()
     .then(response => response.json())
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
