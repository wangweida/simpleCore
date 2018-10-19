function combineReducers(reducers) {
  return (state = {}, action) => {
    const newState = state;
    Object.keys(reducers).forEach(key => {
      const reducer = reducers[key];
      newState[key] = reducer(newState[key], action);
    });
    return newState;
  };
}

export default combineReducers;
