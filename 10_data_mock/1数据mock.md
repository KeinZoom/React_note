### 数据mock
- 前后端分离的开发模式，前端在没有实际后端接口的支持下先进行接口数据的模拟，完成正常的业务功能开发
- 常见Mock方式
  1. 直接配置假数据 —— 纯静态，无服务
  2. 自研Mock平台 —— 成本太高
  3. json-server等工具 —— 有服务，成本低

### json-server实现数据Mock
  1. 项目中安装`json-server`
     `npm i -D json-server`
  2. 准备一个json文件
  3. 添加启动命令
     `"server": "json-server ./server/data/json --port 8888"`