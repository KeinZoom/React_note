### 失效 token 的处理

1. Token 失效原因

- 用户**长时间未在网站操作**且**规定失效时间达到**后，Token 就会失效

2. 前端如何得知 Token 失效

- Token 失效后再请求接口，后端返回`401状态码`

3. Token 失效后前端怎么处理

   1. axios 响应拦截器监控 401 状态码
   2. 清除失效 Token，跳转登录

   ```javascript
   (error) => {
     if (error.response.status === 401) {
       removeToken();
       router.navigate("/login");
       window.location.reload(); // 修复不跳转bug，强制刷新
     }
     return Promise.reject(error);
   };
   ```
