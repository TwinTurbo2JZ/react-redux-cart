import { act } from "react-dom/test-utils";
import { combineReducers } from "redux";
import cartItems from "../cart-items";
import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
} from "./cart/cartVariables";
//initial state
const defaultState = {
  cart: cartItems,
  total: 100,
  amount: 11,
};

const rootReducer = (state = defaultState, action) => {
  // console.log({ state, action });
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    } else {
      tempCart = state.cart.map((item) => {
        if (action.payload.id === item.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    }

    return { ...state, cart: tempCart };
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map((item) => {
      if (action.payload.id === item.id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }

  if (action.type === GET_TOTALS) {
    console.log("get totals");
  }

  return state;
};

// const rootReducer = combineReducers({
//   // cart: cartReducers,
// });
export default rootReducer;
