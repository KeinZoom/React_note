import { useState } from "react";

function ChildA({ onGetMsg }) {
  const [aMsg, setAMsg] = useState("ChildA");

  return <button onClick={() => onGetMsg(aMsg)}>getMsg</button>;
}

function ChildB({ passInfo }) {
  return <div>{passInfo}</div>;
}

function NeighbourComponent() {
  const [info, setInfo] = useState("");

  const getMsg = (msg) => {
    setInfo(msg);
  };

  return (
    <div>
      <ChildA onGetMsg={getMsg} />
      <ChildB passInfo={info} />
    </div>
  );
}

export default NeighbourComponent;
