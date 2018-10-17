export default function createStore(reducer) {
  let state;
  const listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners.filter(item => item === listener);
    };
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe,
  };
}
