//initial state
const defaultState = {
  count: 69,
};

const rootReducer = (state = defaultState, action) => {
  console.log({ state, action });
  if (action.type === "DECREASE") {
    return { ...state, count: state.count - 1 };
  }
  return state;
};

export default rootReducer;
