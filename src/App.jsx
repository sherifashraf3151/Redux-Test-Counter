import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  const counterState = useSelector( ( state ) => {
    // if (state.value < 1) {
    //   return "no Number";
    // }

    return state.value;
  });

  // function dispatch(send) action as { type: "increase" , payload: 4 }
  const increase = () => {
    const action = { type: "increase" , payload: 4 };
    dispatch( action )
  };

  // function dispatch(send) action as { type: "decrease" , payload: 2 }
  const decrease = () => {
    const action = { type: "decrease" , payload: 2 };
    dispatch( action )
  };


    const toggleState = useSelector( (state) => {

    return state.showCounter;
  } )

  const toggleCounter = () => {
    dispatch( { type: "toggleCounter" } )
  }


  return (
    <>
      <div className="App">
        <h1>Hello Redux Basic</h1>
        {
          toggleState && <>
          <div className="counter">Counter: {counterState} </div>
          <div>
            <button className="btn" onClick={increase}> increase + </button>
            <button className="btn" onClick={decrease}> decrease - </button>
          </div>
          </>
        }
        
        <div>
          <button className="btn" onClick={toggleCounter}>Hide/Show Counter Number</button>
        </div>
      </div>
    </>
  );
}

export default App;
