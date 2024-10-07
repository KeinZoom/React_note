import { forwardRef, useImperativeHandle, useRef } from "react";

const SonComp = forwardRef((props, ref) => {
  const showDom = (ref) => {
    ref.current.focus();
  };

  const childRef = useRef(null);

  const handleClick = () => showDom(childRef);

  useImperativeHandle(ref, () => {
    return {
      handleClick,
    };
  });
  return (
    <div>
      <input type="text" ref={childRef} />
    </div>
  );
});

function ParComp() {
  const parRef = useRef(null);

  return (
    <div>
      <SonComp ref={parRef} />
      <button onClick={() => parRef.current.handleClick()}>Focus</button>
    </div>
  );
}

export default ParComp;
