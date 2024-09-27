import { useRef, useState } from "react";

function ControlledForm() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleClick = () => {
    setInputValue("");
    console.dir(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}></button>
    </div>
  );
}

export default ControlledForm;
