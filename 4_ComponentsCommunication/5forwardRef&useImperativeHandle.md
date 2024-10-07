### 父组件获取子组件中的 DOM 和方法

#### 1. forwardRef 透传 Ref 至子组件中

```javascript
import { forwardRef, useRef } from "react";

const SonComp = forwardRef((props, ref) => {
  const { showDom } = props;
  return (
    <div>
        // 使用forwardRef传递子组件中的DOM
      <button ref={ref} onClick={() => showDom(ref)}>
        Click
      </button>
    </div>
  );
});

function ParComp() {
  const parRef = useRef(null);
  const showDom = (ref) => {
    console.log(ref.current);
  };

  return (
    <div>
      <SonComp ref={parRef} showDom={showDom} />
    </div>
  );
}

export default ParComp;
```

#### 2. `useImperativeHandle`传递子组件中的方法至父组件
```javascript
import { forwardRef, useImperativeHandle, useRef } from "react";

const SonComp = forwardRef((props, ref) => {
  const showDom = (ref) => {
    ref.current.focus();
  };

  const childRef = useRef(null);

  const handleClick = () => showDom(childRef);

  useImperativeHandle(ref, () => {
    // 返回一个Ref中的Object
    return {
      handleClick,
    };
  });
  return (
    <div>
      <input type="text" ref={childRef} />
    </div>
  );
});

function ParComp() {
  const parRef = useRef(null);

  return (
    <div>
      <SonComp ref={parRef} />
      <button onClick={() => parRef.current.handleClick()}>Focus</button>
    </div>
  );
}

export default ParComp;

```