#### Typescript__useState-自动推导
- React根据传入useState的默认值来**自动推导**类型，无需显式标注

#### useState-传递泛型参数
- `useState`本身是一个`泛型函数`，可以传入具体的自定义类型

    ```javascript
    import { useState } from "react";

    type User = {
    name: string;
    age: number;
    };

    function App() {
    // 自动推断类型与初始值相同
    // count 和 setCount的参数类型都与'0'相同
    const [count, setCount] = useState(0);
    // 使用泛型参数指定类型
    // useState函数参数初始值满足 User | () => User
    // setUser函数参数类型 User | () => User | undefined
    const [user, setUser] = useState<User | null>(null);

    const handleCount = () => {
        setCount(10);
    };

    const handleUser = () => {
        setUser({
        name: "jack",
        age: 18,
        });
    };

    // 为了类型安全，可选链(?)做类型守卫
    return (
        <div>
        <div>this is app</div>
        <div>{count}</div>
        <div>
            {user?.name}
            {user?.age}
        </div>
        <button onClick={handleCount}>change count</button>
        <button onClick={handleUser}>change user</button>
        </div>
    );
    }

    export default App;
    ```