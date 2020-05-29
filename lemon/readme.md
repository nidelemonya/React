## React 开发
### react 开发流程  webpack, ts, react + react-router,  redux
1. npm init -y
2. webpack    开发流程工具, webpack-cli  commend line（cmd） 开发工具的命令行工具
    - yarn add  webpack webpack-cli --save-dev 
3. webpack-dev-server 3000 启动我们的应用... (scripts webpack-dev-server 3000 运行dev 项目)
    - yarn add  webpack-dev-server --save-dev
    - "start": "webpack-dev-server --mode development --inline --hot --open"
    - webpack.config.js
4. yarn add  typescript --save-dev (typescript tsconfig.json 根目录下的 ts配置)
5. yarn add  @babel/core @babel/preset-env --save-dev
    - @babel/core es6- > es5 (.balelrc 处理js)
6. bootstrap 前端css框架
7. yarn add html-webpack-plugin mini-css-extract-plugin
8. yarn add awesome-typescript-loader
9. yarn add css-loader

### 说明
1. src 是我们未来的开发目录， 业务代码在这里 
    - index.ts entry 入口文件
    - index.html 模板
    - webpack webpack-cli, webpack.config.js 负责 webpack-dev-server
2. .ts typescript   awesome-typescript-loader 根据tsconfig.json 编译成 .js
3. @babel/cli @babel/core @babel/preset-env (使用babel可以将代码中js代码编译成兼容绝大多数主流浏览器的代码。)

### 搭建完开发流程
1. yarn add  react react-dom --save (react react-dom)
2. yarn add @types/react @types/react-dom   (@types/react @types/react-dom ts + react @babel/core)
