### 样式控制
---
1. 两种样式控制方式
   - 行内样式（不推荐）
   - class类名控制 `className`

 <details>
    <summary><i>Interview</i> <b>性能而言，CSS > CSS in js >inline style</b></summary>
</details>

 <details>
    <summary><i>review</i> <b>Array类型的各种方法</b></summary>
    <ul>
        <li>for in</li>
        <li>for of</li>
        <li>foreach</li>
        <li>.map</li>
        <li>.reduce</li>
        <li>.filter</li>
        <li>.find</li>
        <li>.indexOf</li>
        <li>.lastIndexOf</li>
        <li>.sort</li>
    </ul>
</details>

---

2. 样式控制
 <details>
    <summary><i>review</i> <b>实现鼠标悬浮高亮的CSS写法</b></summary>
</details>
 <details>
    <summary><i>new knowledge</i> <b>JS库`lodash`提供各种方法用于JS各数据类型处理</b></summary>
</details>

---

3. 优化类名控制`classnames`
   - 一个JS库，便于通过**条件动态控制**class类名显示
```javascript
className={`nav-item` ${type === item.type && 'active'}}

className={classNames('nav-item', {active: type === item.type})}
// classNames(静态class, {【动态名key】: 【动态名条件】})
```