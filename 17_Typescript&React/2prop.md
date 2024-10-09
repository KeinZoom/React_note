### Props 类型约束

- 为组件 prop 添加类型，本质是给**函数的参数**做类型注解
- 可使用**type 对象类型**或者**interface 接口**

```typescript
// type Prop = {
//   name: string;
// };

interface Prop {
  name: string;
}

function Son({ name }: Prop) {
  return <div>{name}</div>;
}

function PropType() {
  return (
    <div>
      <Son name={"hello"} />
    </div>
  );
}

export default PropType;
```

#### 特殊 Prop - children 的类型约束

- 内置的`ReactNode`类型做注解
- 注解后，`children`可以是多种类型，包括：`React.ReactElement`、`string`、`number`、`React.ReactFragment`、`React.ReactPortal`、`boolean`、`null`、`undefined`

```typescript
import React from "react";

interface Prop {
  className: string;
  children: React.ReactNode;
}

function Button(props: Prop) {
  const { className, children } = props;

  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  );
}

function ChildrenType() {
  return (
    <Button className="btn">
      <div>hello</div>
    </Button>
  );
}

export default ChildrenType;
```

#### props 与 TypeScript - 为事件 prop 添加类型

- 组件经常执行**类型为函数**的 prop 实现子传父
- 组件内部调用时要遵守类型的约束，参数传递符合要求
- 绑定 prop 时，如果使用内联函数可以直接推断参数类型，否则需要显示注解类型

  ```typescript
  interface Prop {
    title: string;
    onGetMsg?: (msg: string) => void;
  }

  function SonComponent(props: Prop) {
    const { title, onGetMsg } = props;

    const handleMsg = () => {
      onGetMsg?.("hello. this is Son.");
    };

    return (
      <div>
        <button onClick={handleMsg}>{title}</button>
      </div>
    );
  }

  function EventPropType() {
    const onGetMsg = (msg: string) => {
      console.log(msg);
    };

    return (
      <div>
        <SonComponent title="p2s" onGetMsg={onGetMsg} />
      </div>
    );
  }

  export default EventPropType;
  ```
