### useRef 与 TypeScript

### 1. 常用场景 1——获取 DOM

- 直接把要获取的**dom 元素的类型**作为**泛型参数**传递给`useRef`，可以**推导出**.current 属性的类型

    ```typescript
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
    ```

### 2. 常用场景2——引用稳定的存储器
- `useRef`作为稳定存储器，通过**泛型**传入联合类型
- 常用于如`定时器`
    ```typescript
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

    ```