- react 父子组件 通过 props传递 prop-types 进行校验
    ts 语法解决这个问题

    { title: string, content: string }
    ts 类型约束

    { key: val, key2: val2}
    面向对象，面向接口(interface)的编程是设计模式的基础

    typescript interface 关键字

- 运行一个 ts + react 项目需要哪些前端技术
    1. webpack
    .tsx
    2. tsconfig.json(ts配置文件) jsx -> react进行编译,  把 ts -> js
    3. babel

1. yarn add webpack webpack-cli webpack-dev-server
2. yarn add @babel/cli @babel/core @babel/polyfill @babel/preset-env
3. yarn add babel-loader
4. yarn add awesome-typescript-loader
5. yarn add html-webpack-plugin
6. yarn add react react-dom @types/react @types/react-dom
7. yarn add typescript