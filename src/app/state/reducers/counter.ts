import { CounterActions } from '../actions/index';

export function counterReducer(state = 0, action: CounterActions.All): number {
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
