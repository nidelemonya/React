import React from 'react';
import ReactDOM from 'react-dom'; // index.js 入口文件
import CommentApp from './CommentApp';  // 模块机制
// css in js   webpack  
import './index.css'; // 像js 引入
// 跟 link 标签说再见

ReactDOM.render(
  // React 实现
  <CommentApp />,
  // DOM  document.createElement
  // 真实DOM
  document.getElementById('root')
);


