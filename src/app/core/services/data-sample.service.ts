import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataSampleService {
  constructor(private httpClient: HttpClient) {
  }

  loadWorldBankSample(): Observable<any> {
    return this.httpClient.get('assets/world-bank.json');
  }
}
