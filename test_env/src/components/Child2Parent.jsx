import { useState } from "react";

function Child({ onGetMsg }) {
  const [info, setInfo] = useState("hello");
  return <button onClick={() => onGetMsg(info)}>click to pass</button>;
}

function Child2Parent() {
  const getMsg = (msg) => {
    console.log(msg);
  };
  return <Child onGetMsg={getMsg} />;
}

export default Child2Parent;
