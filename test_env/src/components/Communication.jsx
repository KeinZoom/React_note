import { useState } from "react";

function Child(props) {
  console.log(props);
  const { info } = props;
  console.log(info);
  return <div></div>;
}

function Communication() {
  const [info, setInfo] = useState("hello");
  return (
    <div>
      <Child info={info} />
    </div>
  );
}

export default Communication;
