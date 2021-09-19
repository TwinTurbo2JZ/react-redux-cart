//initial state
const defaultState = {
  count: 69,
};

const cartReducers = (state = defaultState, action) => {
  if (action.type === "DECREASE") {
    console.log("working");
  }
};
