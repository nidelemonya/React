import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 优化移动端 click 事件 把 click 事件变成 touch 事件 因为 移动端 click 事件有延迟 0.5s。
import fastclick from 'fastclick';
fastclick.attach(document.body);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
