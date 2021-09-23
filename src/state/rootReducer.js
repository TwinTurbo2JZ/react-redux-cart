import { combineReducers } from "redux";
import cartReducers from "../state/cart/cartReducers";

const rootReducer = combineReducers({
  cart1: cartReducers,
});
export default rootReducer;
