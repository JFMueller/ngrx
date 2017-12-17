import { Injectable } from '@angular/core';
import { DateUtils } from '../utils/date.utils';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PerformanceLogService {
  logEntries$: BehaviorSubject<string>;

  private applicationStartup: number;

  constructor() {
    this.applicationStartup = window.performance.now();
    const timestamp = DateUtils.hourlyLogFormat(this.applicationStartup);
    this.logEntries$ = new BehaviorSubject<string>(`${timestamp} Init`);
  }

  log(msg: string, object?: any): void {
    const timestamp = DateUtils.hourlyLogFormat(this.applicationStartup);
    const logMsg = `${timestamp} ${msg}`;
    this.logEntries$.next(logMsg);
  }
}
