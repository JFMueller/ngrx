import { Action } from '@ngrx/store';

export const DURATION = '[Log] Duration';
export const CLEAR_ALL = '[Log] Clear All';
export const TIMESTAMP = '[Log] Timestamp';

export class Duration implements Action {
  readonly type = DURATION;

  constructor(public msg: string, public start: number, public humanReadable) {
  }
}

export class Timestamp implements Action {
  readonly type = TIMESTAMP;

  constructor(public msg: string, public applicationStartup: number) {
  }
}

export class ClearAll implements Action {
  readonly type = CLEAR_ALL;
}

export type All
  = Duration
  | Timestamp
  | ClearAll;
