### 组件

1. 组件就是用户界面的一部分，可以有自己的逻辑和外观
   - 组件之间可以**互相嵌套**，也可以**复用**多次
   - 组件化开发让开发者像**搭积木**一样构建一个完整庞大的应用

<details>
    <summary><i>Interview</i> <b>区分component, element, instance几个概念</b></summary>
</details>

2. React组件
   - **首字母大写**的函数
   - 存放了组件的逻辑和UI
   - 渲染组件只需要当作**标签**书写

3. useState基础使用
   - 一个React **Hook**，向组件添加一个**状态变量**
   - 本质：相比普通JS变量，状态变量变化UI也会发生变化（**数据驱动视图**）
   - 返回值是一个数组，第一个参数是状态变量，第二个set函数用来修改状态变量
  
  <details>
    <summary><i>Interview</i> <b>为什么useState返回一个数组而不是对象？</b></summary>
</details>

 <details>
    <summary><i>Interview</i> <b>闭包是什么？闭包陷阱？如何避免闭包陷阱？</b></summary>
</details>

4. 状态不可变
   - 状态——**只读**，始终**替换**而不是**修改**
   - 直接修改状态变量不引发视图更新