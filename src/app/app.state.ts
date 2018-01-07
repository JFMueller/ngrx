import { LogEntry } from './core/viewmodels/log-entry';

export interface AppState {
  counter: number;
  logs: LogEntry[];
}
