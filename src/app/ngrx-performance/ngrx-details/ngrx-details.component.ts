import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as Counter from '../state/ngrx.actions';
import { Observable } from 'rxjs/Observable';
import { PerformanceLogService } from '../../core/services/performance-log.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';

interface AppState {
  counter: number;
}

@Component({
  selector: 'rx-ngrx-details',
  templateUrl: './ngrx-details.component.html'
})
export class NgrxDetailsComponent implements OnInit, OnDestroy {
  counter$: Observable<number>;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
              private pls: PerformanceLogService,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
    this.store.select('counter')
      .takeUntil(this.destroyed$)
      .bufferCount(this.activatedRoute.snapshot.params['count'])
      .subscribe(() => this.pls.log('Buffer ready again...'));
  }

  increment(): void {
    const count = this.activatedRoute.snapshot.params['count'];
    this.pls.log(`Dispatching ${count} actions...`);
    for (let i = 0; i < this.activatedRoute.snapshot.params['count']; i++) {
      this.store.dispatch(new Counter.Increment());
    }
  }

  decrement() {
    const count = this.activatedRoute.snapshot.params['count'];
    this.pls.log(`Dispatching ${count} actions...`);
    for (let i = 0; i < this.activatedRoute.snapshot.params['count']; i++) {
      this.store.dispatch(new Counter.Decrement());
    }
  }

  reset() {
    this.store.dispatch(new Counter.Reset(0));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
