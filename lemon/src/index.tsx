// ts 是 js 的超集
// document.write('Hello from index.ts!');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { HelloComponent } from './hello'; 
import {App} from './app';


ReactDOM.render(
  <App/>, // 组件
  document.getElementById('root') //应用挂载点
);