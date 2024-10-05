### 封装request请求模块
- axios三方库做好统一封装，方便**统一管理和复用**

1. 相同的接口域名
2. 同样的超时时间
3. Token权限处理

### axios的封装处理
1. 根域名配置
2. 超时时间
```javascript
    const request = axios.create({
        baseURL: 'http://...',
        timeout: 5000
    })
```
3. 请求拦截器 / 响应拦截器
```javascript

    // 请求拦截器
    // 请求发送前 做拦截，插入自定义配置【参数处理等】
    request.interceptors.request.use((config) => {
        return config
    }, (error) => {
        return Promise.reject(error)
    })

    // 响应拦截器
    // 响应返回客户端前 做拦截，重点处理返回数据
    request.interceptors.response.use((response) => {
        // 2xx 范围内的状态码都会触发
        // 对响应数据操作后返回
        return response.data
    }, (error) => {
        // 超出 2xx 范围的状态码触发
        // 对响应错误操作后返回
        return Promise.reject(error)
    })
```