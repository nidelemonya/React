import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let obj = {}
let obj1 = obj;
let obj2 = obj;
obj1.name = 123; // 本意就是修改一下 obj1 但是却影响了 obj2，obj (副作用)
console.log(obj, obj2);
// 可变是魔鬼


// 不可变 
let newObj = {}
let obj3 = {
  ...newObj
}
obj3.name = 456; // 没有任何副作用
console.log(obj3, newObj);
// redux
// react-redux
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
