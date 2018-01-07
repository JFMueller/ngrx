import {
  Component,
  OnInit
} from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { LogActions } from '../../state/actions';
import { LogEntry } from '../../core/viewmodels/log-entry';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rx-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  logEntries: Observable<LogEntry[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.logEntries = this.store.select('logs');
  }

  clearEntries(): void {
    this.store.dispatch(new LogActions.ClearAll());
  }
}
