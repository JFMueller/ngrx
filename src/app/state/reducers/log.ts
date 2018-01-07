import { LogActions } from '../actions/index';
import { DateUtils } from '../../core/utils/date.utils';
import { LogEntry } from '../../core/viewmodels/log-entry';

export function logReducer(state = [], action: LogActions.All): LogEntry[] {
  switch (action.type) {
    case LogActions.DURATION: {
      const logAction = (<LogActions.Duration>action);
      const duration = window.performance.now() - logAction.start;
      return [...state, new LogEntry(logAction.msg, DateUtils.duration(duration, logAction.humanReadable))];
    }

    case LogActions.TIMESTAMP: {
      const logAction = (<LogActions.Timestamp>action);
      return [...state, new LogEntry(logAction.msg, DateUtils.hourlyLogFormat(logAction.applicationStartup))];
    }

    case LogActions.CLEAR_ALL: {
      return [];
    }

    default: {
      return state;
    }
  }
}
