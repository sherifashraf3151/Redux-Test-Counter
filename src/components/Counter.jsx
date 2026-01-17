import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect , useCallback } from 'react'

export default function Counter() {

  const dispatch = useDispatch();

  const globalState = useSelector((state) => state);

  // This Function To increase or decrease the Counter
  const counterOperation = useCallback(
    (type, payload) => {
      dispatch({ type: type, payload: payload });
    },
    [dispatch],
  );

  useEffect(() => counterOperation("increase", 10), [counterOperation]);

  // This Function to Switch Show OR Hide Counter
  const toggleCounter = () => {
    dispatch({ type: "toggleCounter" });
  };

  return (
    <>
      <div className="App">
        <h1>Hello Redux Basic</h1>
        <div>
          <button className="btn" onClick={toggleCounter}>Hide/Show Counter Number</button>
        </div>
        {
          globalState.showCounter && <>
          <div className="counter">Counter: {globalState.value} </div>
          <div>
            <button className="btn" onClick={ () => counterOperation( "increase" , 4 )}> increase + </button>
            <button className="btn" onClick={ () => counterOperation( "decrease" , 2 )}> decrease - </button>
          </div>
          </>
        }
      </div>
    </>
  );
}
