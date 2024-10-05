### 请求拦截器注入 Token

- 作用：Token 作为用户标识数据，**后端很多接口**都将其作为接口权限判断依据
- 请求拦截器（request interceptors）注入 Token 后，所有 Axios 实例的接口都**自动携带 Token**

```javascript
    request.interceptors.request.use(
    (config) => {
        // 1. 获取token
        const token = getToken();
        if (token) {
        // 2. 按照后端格式做token拼接
        config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
    );
```
