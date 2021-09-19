import { combineReducers } from "redux";
import cartItems from "../cart-items";
import cartReducers from "./cart/cartReducers";
import { INCREASE, DECREASE, RESET, CHANGE_NAME } from "./cart/cartVariables";
//initial state
const defaultState = {
  cart: cartItems,
  total: 100,
  amount: 0,
};

const rootReducer = (state = defaultState, action) => {
  console.log({ state, action });
  if (action.type === "DECREASE") {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === RESET) {
    return { ...state, count: 0 };
  }
  return state;
};

// const rootReducer = combineReducers({
//   // cart: cartReducers,
// });
export default rootReducer;
