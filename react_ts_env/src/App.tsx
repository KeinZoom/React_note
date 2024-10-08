import { useState } from "react";

type User = {
  name: string;
  age: number;
};

function App() {
  // 自动推断
  const [count, setCount] = useState(0);
  // 使用泛型参数指定类型
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
