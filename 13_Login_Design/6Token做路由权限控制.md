### Token实现路由权限控制
- Token的**有无**决定当前路由是否可以跳转

#### 实现方式
封装高阶组件，通过判断Token有无决定路由组件跳转
```javascript

export function AuthRoute({children}) {
    const token = getToken()
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'} replace>
    }
}
```