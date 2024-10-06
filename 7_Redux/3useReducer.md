### useReducer
- 作用与`useState`类似，管理**相对复杂**的状态数据
- 类似`Redux`，较多模板化代码

#### 基础用法
1. 定义一个reducer函数(不同action返回不同的新状态)
2. 组件中调用`useReducer`，参数中传入`reducer`函数及状态初始值
3. 事件发生时，通过`dispatch`函数分派一个`action`对象（通知reducer要返回的新状态并触发渲染UI）