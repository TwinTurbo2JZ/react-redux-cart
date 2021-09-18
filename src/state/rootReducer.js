//initial state
const defaultState = {
  count: 69,
};

const rootReducer = (state = defaultState, action) => {
  console.log({ state, action });
  return state;
};

export default rootReducer;
