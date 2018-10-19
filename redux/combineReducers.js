function combineReducers(reducers) {
  return (state = {}, action) =>
    Object.keys(reducers).reduce((nextState, key) => {
      const reducer = reducers[key];
      return Object.assign(nextState, { [key]: reducer(state[key], action) });
    }, {});
}

export default combineReducers;
