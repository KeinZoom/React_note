import { useEffect, useRef } from "react";

function RefTimer() {
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // 使用ref.current来存储数据
    timerRef.current = setInterval(() => {
      console.log("timer running...");
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  return <div>timer is running</div>;
}

export default RefTimer;
