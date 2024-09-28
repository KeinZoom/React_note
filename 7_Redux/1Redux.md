### Redux

- React 最常用的**集中状态管理工具**
- 可以独立于框架运行
- 作用：通过集中管理的方式管理应用状态

#### 体验 Redux

不绑定框架、不使用构建工具，纯 Redux 实现计数器

```html
<button id="btn__d">-</button>
<span id="content">0</span>
<button id="btn__p">+</button>

<script src="https://unpkg.com/redux@4.2.1/dist/redux.min.js"></script>
<script>
  // 1. 定义reducer函数
  // 根据不同action对象，返回不同的新state
  // state：管理的数据初始状态
  // action：对象type标记需要做的修改
  function reducer(state = { count: 0 }, action) {
    // 数据不可变：基于原始状态生成一个新的状态
    if (action.type === "INCREMENT") {
      return { count: state.count + 1 };
    }
    if (action.type === "DECRESEMENT") {
      return { count: state.count - 1 };
    }
    return state;
  }
  // 2. 使用reducer函数生成store实例
  const store = Redux.createStore(reducer);

  //   3. 通过store实例的subscribe订阅数据变化
  // 回调的函数每次state变化时都会执行
  store.subscribe(() => {
    console.log("state changed...", store.getState().count);
    document.getElementById("content").innerText = store.getState().count; // store实例的getState()用于获取state
  });

  //   4. store实例的dispatch函数提交action，改变type来修改state
  document.getElementById("btn__d").addEventListener("click", () => {
    store.dispatch({
      type: "DECRESEMENT",
    });
  });

  document.getElementById("btn__p").addEventListener("click", () => {
    store.dispatch({
      type: "INCREMENT",
    });
  });
</script>
```

#### Redux 数据管理流程
`action` 驱动 `reducer` 修改 `store`实例中的`state`

- state ——对象，存放管理的数据状态
- action ——对象，存放描述数据的修改方式
- reducer ——函数，具体描述如何根据 action 修改 state
