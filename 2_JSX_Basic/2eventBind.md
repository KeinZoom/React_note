### 基础事件绑定

1. `on + 事件名称 = { 事件处理程序} `

```javascript
function App() {
  const clickHandler = () => {
    console.log("button按钮点击了");
  };

  return <button onClick={clickHandler}></button>;
}
```

2. 使用事件对象参数，回调函数中加入形参

```javascript
function App() {
  const clickHandler = (e) => {
    console.log("button按钮点击了", e);
  };
  return <button onClick={clickHandler}></button>;
}
```

3. 自定义参数，**高阶函数**/**函数柯里化**

```javascript
function App() {
  const clickHandler = (name, e) => {
    console.log("button按钮点击了", name, e);
  };
  return <button onClick={(e) => clickHandler("jack", e)}></button>;
}
```

<details>
    <summary><i>Interview</i>：函数柯里化</summary>
</details>
