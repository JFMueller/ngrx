import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { PerformanceLogService } from '../../core/services/performance-log.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'rx-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit, OnDestroy {
  entries: string[] = [];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(private pls: PerformanceLogService) {
  }

  ngOnInit(): void {
    this.pls.logEntries$
      .takeUntil(this.destroyed$)
      .subscribe((entry: string) => this.entries.unshift(entry));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
