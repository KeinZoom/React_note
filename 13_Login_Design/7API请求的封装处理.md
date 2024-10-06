### API 模块封装

- 将接口请求放在功能实现位置，未在固定模块维护，后期查找困难

- 解决方法：项目中的接口按业务模块以**函数形式**统一封装到 apis 模块中

由之前封装的`request`模块进行前端请求封装

```javascript
request({
  url: "/...",
  method: "POST",
  data: formData,
});

request({
  url: "/...",
  method: "GET",
});
```
