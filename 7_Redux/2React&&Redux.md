### React中使用redux
- **Redux Toolkit** + **react-redux**
- RTK - 官方提供的Redux逻辑工具集合，简化书写方式
  - 简化store config
  - 内置immer支持可变式状态修改
  - 内置thrunk for asynchronous creation
- react-redux - 链接Redux和React组件的中间件
  - 获取状态
  - 更新状态

### store目录结构
```
-store
||-modules # 子模块目录 编写业务分类的子store
||||-channelStore.js
||||-counterStore.js
||-index.js # 入口文件，组合modules中的所有子模块，并导出store
```

### 配置步骤
- Redux store
  1. 配置counterStore模块(`createSlice`)
  2. 配置根store并组合counterStore模块(`configureStore`)
- React组件
  1. 注入store(react-redux  Provider)
  2. 使用store中的数据(`useSelector`())
  3. 修改store中的数据(`useDispatch`())

### action传参
- `reducers`的**同步**修改方法中添加`action`
- 调用actioncCreater时传递参数到`action.payload`属性上

### 异步操作
1. 创建store的写法不变，配置好同步方法
2. 封装一个函数，函数内部return一个新函数：
   1. 封装异步请求获取数据
   2. 调用同步`actionCreater`传入异步数据生成一个action对象，使用dispatch提交
3. 组件中dispatch的写法不变