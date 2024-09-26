### JSX

1. What is JSX?

   - JSX = JavaScript + XML
   - JS 代码中编写 HTML 模板结构
   - 优势：
     1. 声明式模板写法（HTML）
     2. JS 的可编程能力

2. 使用 JS 表达式

   - **语法格式**：`{}` 识别 JavaScript 中的表达式

3. JSX 条件渲染
   1. **逻辑与运算符&&**
   ```javaScript
       {flag && <span>this is span</span>}
   ```
   2. **三元表达式 :**
   ```javaScript
       {loading ? <span>loading</span> : <span>this is span</span>}
   ```

4. 复杂条件渲染
**自定义函数（return Dom） + if判断语句**