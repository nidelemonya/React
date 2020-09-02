import express from 'express'; // node 原生不支持 import 语句 需要用 webpack 打包
// import path from 'path';

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import router from '../router';
import { renderToString } from 'react-dom/server';
// clint 客户端 ReactDOm.render( ,root)
// server 服务器端 renderToString 渲染成 字符串

// import Header from '../common/Header/Header.jsx';

// <Header />
const app = express();
// 把 public 映射成 静态资源的目录 方便进行 js 资源引入
app.use(express.static('public'))
app.get('*', (req, res) => {
  // const root = <Header />

  const context = {};

  const root = (
    <StaticRouter location={req.url} context={context}>
      { renderRoutes(router) }
    </StaticRouter>
  )
  // 把 vnode -> html string
  // 有事件 addEventListener (浏览器专用的 api)
  // function renderToString(com) {
  //  return com()
  // }
  const htmlStr = renderToString(root); // 把 root 根节点 渲染成 html字符串
  // console.log(htmlStr);
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${htmlStr}</div>
    <script src="/index.js"></script>
  </body>
  </html>
  `)
})
app.listen(3000, () => {
  console.log('server is running port:3000');
})