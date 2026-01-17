import { createStore } from "redux";

const initState = { value: 0 };

// The Reducer
// Receive Data and action changes from dispatch( action ) in app.jsx file
const counterReducer = (state = initState , action ) => {

  if ( action.type === "increase" ) {
    return { ...state , value: state.value + action.payload }
  }

  if ( action.type === "decrease" ) {
    return { ...state , value: state.value - action.payload }
  }

  return state;
};

// app init -> run state -> action(non) -> counter reducer -> 0

// Create the Store
// Send The Reducer to Store
const store = createStore(counterReducer);

// Make store Global
export default store;
