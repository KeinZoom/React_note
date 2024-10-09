import { useEffect, useRef } from "react";

function RefType() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 可选链?前值不为空(null | undefined)时继续执行
    // 类型守卫的作用
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default RefType;
