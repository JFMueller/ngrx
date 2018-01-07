import { LogEntry } from './core/viewmodels/log-entry';
import { WorldBankDto } from './core/domain/world-bank';

export interface AppState {
  counter: number;
  logs: LogEntry[];
  projects: WorldBankDto[];
}
