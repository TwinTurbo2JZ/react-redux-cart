import { combineReducers } from "redux";
import cartItems from "../cart-items";
import cartReducers from "./cart/cartReducers";
import {
  INCREASE,
  DECREASE,
  RESET,
  CLEAR_CART,
  REMOVE,
} from "./cart/cartVariables";
//initial state
const defaultState = {
  cart: cartItems,
  total: 100,
  amount: 11,
};

const rootReducer = (state = defaultState, action) => {
  console.log({ state, action });
  if (action.type === "DECREASE") {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE) {
    return { ...state };
  }

  return state;
};

// const rootReducer = combineReducers({
//   // cart: cartReducers,
// });
export default rootReducer;
