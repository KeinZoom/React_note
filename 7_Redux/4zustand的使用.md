### zustand 的使用

- 相较 Redux，写法更加简单的状态管理工具
- 使用方法
  1. 创建 store，初始化状态数据和操作方法
  2. 绑定到组件
  3. 在组件中消费数据和方法

```javascript
import { create } from "zustand";

const useStore = create((set) => {
  // 返回一个对象，包含状态和方法
  return {
    count: 0,
    // 方法为一个回调，需要调用形参set
    // set的入参是一个回调函数（回调的返回值也是对象）/对象
    // 由是否需要使用旧数据决定
    inc: () => {
      set((state) => ({ count: state.count + 1 }));
    },
    dec: () => {
      set((state) => ({ count: state.count - 1 }));
    },
    rst: () => {
      set({ count: 0 });
    },
  };
});

function ZustandUsage() {
  const { count, inc, dec, rst } = useStore();
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => inc()}>inc</button>
      <button onClick={() => dec()}>dec</button>
      <button onClick={() => rst()}>rst</button>
    </div>
  );
}

export default ZustandUsage;
```
