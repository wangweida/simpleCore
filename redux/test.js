import { createStore, combineReducers } from './index';

const reducerA = (state = 'a', action) => {
  switch (action.type) {
    case 'a':
      return `${state}_a`;
    default:
      return state;
  }
};
const reducerB = (state = 'b', action) => {
  switch (action.type) {
    case 'b':
      return `${state}_b`;
    default:
      return state;
  }
};
const reducerC = (state = 'c', action) => {
  switch (action.type) {
    case 'c':
      return `${state}_c`;
    default:
      return state;
  }
};

const { dispatch, subscribe, getState } = createStore(
  combineReducers({
    reducerA,
    reducerB,
    reducerC,
  }),
);

subscribe(() => {
  console.log('subscribe');
});

getState();

dispatch({ type: 'a' });

getState();

dispatch({ type: 'b' });

getState();

dispatch({ type: 'c' });

getState();
