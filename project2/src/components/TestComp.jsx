import { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.data;
    case "DECREMENT":
      return state - action.data;
    case "INIT":
      return action.data;
    default:
      return state;
  }
}
export default function TestComp() {
  //   const [count, setCount] = useState(0);

  //   const onIncrease = () => {
  //     setCount(count + 1);
  //   };
  //   const onDecrease = () => {
  //     setCount(count - 1);
  //   };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Test Component</h1>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT", data: 1 })}>
          +1
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", data: 1 })}>
          -1
        </button>
        <button onClick={() => dispatch({ type: "INIT", data: 0 })}>
          초기화
        </button>
      </div>
    </div>
  );
}
