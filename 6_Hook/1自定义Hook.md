### 自定义 Hook

- `use`开头的函数
- 自定义 Hook 实现**逻辑的封装复用**

#### 封装自定义 hook 通用思路

1. 声明一个以 use 打头的函数
2. 函数体封装复用的逻辑
3. 调用 hook 后需要使用的状态/回调 return
4. 需要使用逻辑时，执行 hook 函数，解构状态/回调

#### React Hook 使用规则

1. 只能在组件/自定义 Hook 中使用
2. 只在组件顶层调用，不可嵌套`if` `for` 或其他函数中
<details>
    <summary><i>Interview</i> <b>why？</b></summary>
</details>

---

```javascript
import { useEffect, useState } from "react";
import axios from "axios";

function useDataLoading() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [dataContainer, setDataContainer] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await axios.get("http://localhost:3000/products");
        console.log(data.data);

        if (data.data) {
          setDataContainer(data.data);
        }
        setLoading(false);
      } catch (error) {
        setErr(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { dataContainer, loading, err };
}

function DataLoading() {
  const { dataContainer, loading, err } = useDataLoading();
  console.log(dataContainer, loading, err);

  return <div></div>;
}

export default DataLoading;
```
