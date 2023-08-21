# MOCK 系统

> 无第三方库依赖，利用 webpack dev server 的 app.use() 的特性进行请求的 mock

# HOW TO USE

- 开关：在`mock.config.js`中 设置 enable 属性进行全局的开关控制`true`启用本地 mock ,`false`不启用本地 mock，如果配置了代理，则走代理

- 编写 mock 数据
- 配置 webpackDevServer.config.js 中配置配置 mock
- before(app, server) { mocker(app)}

## 目录结构

```bash
.
├── README.md
├── index.js   # 入口文件 一般情况下勿动
├── mock.config.js # mock 配置文件
├── admin-api  #后端的基础路径为 /admin-api/
│   ├── # 对应的api路径
└── utils.js
```
