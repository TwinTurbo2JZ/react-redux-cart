import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import modules
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools());
store.dispatch({ type: "DECREASE" });
console.log(store.getState());

export default store;
