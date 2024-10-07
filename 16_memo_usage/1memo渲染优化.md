### React.memo 渲染优化

- **Props 未改变**情况下用于跳过渲染

- React 组件默认渲染机制：父组件重新渲染，子组件就会重新渲染（存在多余渲染的情况）

#### 基础语法

- memo 函数包裹的缓存组件，`props`变化时才会重新渲染
  `const memoComponent = memo(function SomeComponent(props) {})`

#### 比较机制

- 使用 memo 缓存组件之后，React 会对每一个`prop`使用`Object.is`比较新老值，返回 true，表示没有变化；
  ```javascript
  Object.is(3,3) => true
  Object.is([], []) => false // 引用发生变化
  ```
- props 中传入**简单数据类型**时，值未变，子组件就不会重新渲染；
- props 中传入**复杂数据类型如数组、对象**时，父组件重新渲染，引用会发生改变；引用未改变时，才不会发生重新渲染（通过使用`useMemo()`缓存一个引用）
    - 缓存对象、数组时，使用`useMemo()`缓存引用
    - props为函数时，使用`useCallback()`缓存函数
