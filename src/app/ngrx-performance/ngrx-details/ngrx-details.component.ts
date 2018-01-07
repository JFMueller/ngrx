import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { CounterActions } from '../../state/actions';
import { Observable } from 'rxjs/Observable';
import { PerformanceLogService } from '../../core/services/performance-log.service';
import { AppState } from '../../app.state';

@Component({
  selector: 'rx-ngrx-details',
  templateUrl: './ngrx-details.component.html'
})
export class NgrxDetailsComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private activatedRoute: ActivatedRoute,
              private pls: PerformanceLogService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }

  increment(): void {
    this.actionAndLog(new CounterActions.Increment());
  }

  decrement() {
    this.actionAndLog(new CounterActions.Decrement());
  }

  reset() {
    this.actionAndLog(new CounterActions.Reset(0));
  }

  private actionAndLog(action: CounterActions.All): void {
    const count = this.activatedRoute.snapshot.params['count'];
    const start = window.performance.now();
    for (let i = 0; i < count; i++) {
      this.store.dispatch(action);
    }
    this.pls.duration(`Dispatched ${count} actions...`, start);
  }
}
