import { Injectable } from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { LogActions } from '../../state/actions';

@Injectable()
export class PerformanceLogService {
  private applicationStartup: number;

  constructor(private store: Store<AppState>) {
    this.applicationStartup = window.performance.now();
    this.store.dispatch(new LogActions.Timestamp('PerformanceLogService init', this.applicationStartup));
  }

  log(msg: string): void {
    this.store.dispatch(new LogActions.Timestamp(msg, this.applicationStartup));
  }

  duration(msg: string, start: number, humanReadable = true): void {
    this.store.dispatch(new LogActions.Duration(msg, start, humanReadable));
  }
}
