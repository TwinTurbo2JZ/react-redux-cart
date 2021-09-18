import cartVars from "./cartVars";

//initial state
const defaultState = {
  count: 69,
};

const cartReducer = (state = defaultState, action) => {
  console.log({ state, action });
  return state;
};

export default cartReducer;
