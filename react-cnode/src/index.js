// es6 module
// commonJS
// const http = require('http');
// module.exports = 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 默认导入
import App from './App';
// 命名导入
import {name} from './App';
import * as serviceWorker from './serviceWorker';

// 移动端： react-native
// pc: react-dom
// TV: react-tv
// VR: react-vr
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
