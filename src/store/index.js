import { createStore } from "redux";

const initState = { value: 0 };

// The Reducer
const counterReducer = (state = initState, action) => {

  if ( action.type === "increase" ) {
    return { value: state.value + 1 }
  }

  if ( action.type === "decrease" ) {
    return { value: state.value - 1 }
  }

  return state;
};

// app init -> run state -> action(non) -> counter reducer -> 0

// Create the Store
// Send The Reducer to Store
const store = createStore(counterReducer);

// Make store Global
export default store;
