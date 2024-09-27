### useRef()
- React组件中获取DOM，使用钩子函数`useRef()`
*steps*: 
    1. `useRef`创建ref对象，与JSX绑定
    2. **DOM渲染可用**后，通过`ref.current`获得DOM对象
    ```javascript
        const inputRef = useRef(null);
        <!-- 创建 -->

        <input type="text" ref={inputRef} />
        <!-- 绑定ref -->

        console.log(inputRef.current);
        <!-- 取到DOM对象 -->
    ```

*tips*：`console.dir(inputRef.current)` 打印该DOM对象展开结果