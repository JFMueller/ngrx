import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { WorldBankDto } from '../domain/world-bank';

@Injectable()
export class DataSampleService {
  constructor(private httpClient: HttpClient) {
  }

  loadWorldBankSample(): Observable<WorldBankDto[]> {
    return this.httpClient.get<WorldBankDto[]>('assets/world-bank.json');
  }
}
