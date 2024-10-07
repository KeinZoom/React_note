### 钩子函数 —— useMemo()

- 组件每次重新渲染时**缓存**计算结果
- 使用场景：存在计算量较大的数据时使用

#### 基础语法

```javascript
useMemo(() => {
  // 根据count1的值计算并返回结果
}, [count1]);
```

#### useMemo 缓存斐波那契数列的结果

```javascript
function fibnacci(n) {
  if (n < 3) return 1;
  return fibnacci(n - 2) + fibnacci(n - 1);
}

const fibValue = useMemo(() => {
  return fibnacci(state);
}, [state]);

return (
  <div>
    <div>{state}</div>
    <div>fib value: {fibValue}</div>
    <button onClick={() => dispatch({ type: "INC" })}>INC</button>
    <button onClick={() => dispatch({ type: "DEC" })}>DEC</button>
    <button onClick={() => dispatch({ type: "RST" })}>RST</button>
    <button onClick={() => dispatch({ type: "SET10", payload: 10 })}>
      Set to 10
    </button>
  </div>
);
```
