import * as CounterActions from './ngrx.actions';

export type Action = CounterActions.All;

export function reducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case CounterActions.INCREMENT: {
      return state + 1;
    }

    case CounterActions.DECREMENT: {
      return state - 1;
    }

    case CounterActions.RESET: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
