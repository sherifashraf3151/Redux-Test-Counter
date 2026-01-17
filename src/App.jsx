import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  const state = useSelector( ( state ) => {
    // if (state.value < 1) {
    //   return "no Number";
    // }

    return state.value;
  });

  // function dispatch(send) action as { type: "increase" }
  const increase = () => {
    const action = { type: "increase" };
    dispatch( action )
  };

  // function dispatch(send) action as { type: "decrease" }
  const decrease = () => {
    const action = { type: "decrease" };
    dispatch( action )
  };

  return (
    <>
      <div className="App">
        <h1>Hello Redux Basic</h1>
        <div className="counter">Counter: {state} </div>
        <div>
          <button className="btn" onClick={increase}> increase + </button>
          <button className="btn" onClick={decrease}> decrease - </button>
        </div>
        <div>
          <button className="btn">Hide/Show Counter Number</button>
        </div>
      </div>
    </>
  );
}

export default App;
