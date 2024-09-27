import { createContext, useContext, useState } from "react";

const InfoContext = createContext();

function Child2() {
  const [msg1, msg2] = useContext(InfoContext);
  return (
    <div>
      {msg1}
      {msg2}
    </div>
  );
}

function Child1() {
  return <Child2 />;
}

function ContextImplementation() {
  const [msg1, setMsg1] = useState("msg1");
  const [msg2, setMsg2] = useState("msg2");

  return (
    <InfoContext.Provider value={[msg1, msg2]}>
      <Child1 />
    </InfoContext.Provider>
  );
}

export default ContextImplementation;
