### useReducer

- 作用与`useState`类似，管理**相对复杂**的状态数据
- 类似`Redux`，较多模板化代码

#### 基础用法

1. 定义一个 reducer 函数(不同 action 返回不同的新状态)
2. 组件中调用`useReducer`，参数中传入`reducer`函数及状态初始值
3. 事件发生时，通过`dispatch`函数分派一个`action`对象（通知 reducer 要返回的新状态并触发渲染 UI）

```javascript
// 定义reducer函数
// 不同case对应不同得dispatch分派的action.type
// payload 用于传递参数
function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RST":
      return 0;
    case "SET10":
      return action.payload;
    default:
      return state;
  }
}

// 调用钩子函数 useReducer
// 传入刚刚定义的reducer函数及初始状态
const [state, dispatch] = useReducer(reducer, 0);

// dispatch用于分派action对象及参数
// 更新状态并触发渲染UI
return (
  <div>
    <div>{state}</div>
    <button onClick={() => dispatch({ type: "INC" })}>INC</button>
    <button onClick={() => dispatch({ type: "DEC" })}>DEC</button>
    <button onClick={() => dispatch({ type: "RST" })}>RST</button>
    <button onClick={() => dispatch({ type: "SET10", payload: 10 })}>
      Set to 10
    </button>
  </div>
);
```
