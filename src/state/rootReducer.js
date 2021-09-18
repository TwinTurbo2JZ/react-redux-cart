import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers(
  cartReducer({
    cart: cartReducer,
  })
);

export default rootReducer;
