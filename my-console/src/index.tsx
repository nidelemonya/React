import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.min.css'; // 引入样式

// type originConsole = (...args: any []) => void
// let originConsole:originConsole =  console.log; // 先把 原来的 console.log 存起来
// console.log = function(...args: any []) { // 修改原来的 console.log
//   // any 任何类型
//   alert('called')
//   originConsole.apply(window.console, args) // 恢复默认的行为
// }


// let originConsole =  console.log; // 先把 原来的 console.log 存起来
// console.log = function(...args: any) { // 修改原来的 console.log
//   // any 任何类型
//   // alert('called')
//   originConsole.apply(window.console, args) // 恢复默认的行为
// }

// // console.log('hello',1)
// console.log(1)

// // 监听 push 这个行为
// let arr = [1,2,3]
// let originPush = Array.prototype.push;
// Array.prototype.push = function(...items:any) {
//   console.log('push call', items)
//   return originPush.apply(this, items)
// }
// arr.push(4);

// const originConsoleMap = {
//   push: () => {},
//   shift: () => {},
//   unshift: () => {},
//   pop: () => {},
//   slice: () => {}
// };
// function changeorigin(str:any){
//   const methodList = ['push', 'shift', 'unshift', 'pop', 'slice']; 
//   methodList.forEach(method => {
//     originConsoleMap[method] = (window.console as any)[method];
//   });
// }

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
