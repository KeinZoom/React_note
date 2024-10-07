import { memo, useCallback, useMemo, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RST":
      return 0;
    case "SET10":
      return action.payload;
    default:
      return state;
  }
}

const MemoComponent = memo(function ChildCompnent({ count }) {
  console.log("子组件MemoComponent渲染了");
  return <div>child: {count}</div>;
});

const ClickComponent = memo(function ChildClick({ handleClick }) {
  console.log("子组件ClickComponent渲染了");
  return (
    <div>
      <button onClick={(e) => handleClick(e)}>hello</button>
    </div>
  );
});

function fibnacci(n) {
  if (n < 3) return 1;
  return fibnacci(n - 2) + fibnacci(n - 1);
}

function ReducerTemp() {
  const [state, dispatch] = useReducer(reducer, 0);
  const fibValue = useMemo(() => {
    return fibnacci(state);
  }, [state]);

  const list = useMemo(() => {
    return [1, 2, 3];
  }, []);

  const handleClick = useCallback((e) => {
    console.log(e.target.innerText);
  }, []);

  return (
    <div>
      <div>{state}</div>
      <div>fib value: {fibValue}</div>
      <button onClick={() => dispatch({ type: "INC" })}>INC</button>
      <button onClick={() => dispatch({ type: "DEC" })}>DEC</button>
      <button onClick={() => dispatch({ type: "RST" })}>RST</button>
      <button onClick={() => dispatch({ type: "SET10", payload: 10 })}>
        Set to 10
      </button>
      <MemoComponent count={list} />
      <ClickComponent handleClick={handleClick} />
    </div>
  );
}

export default ReducerTemp;
