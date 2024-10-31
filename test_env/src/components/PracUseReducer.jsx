import { useReducer } from "react";

export default function PracUseReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      case "set":
        return action.payload;
    }
  };
  const [countState, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>{countState}</div>
      <button onClick={() => dispatch({ type: "inc" })}>inc</button>
      <button onClick={() => dispatch({ type: "dec" })}>dec</button>
      <button onClick={() => dispatch({ type: "set", payload: 10 })}>
        set10
      </button>
    </div>
  );
}
