import { createStore } from './index';

const reducer = (state, action) => {
  if (state === undefined) return 0;

  switch (action.type) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
};

const { dispatch, subcribe, getState } = createStore(reducer);
