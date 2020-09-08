import React
// { useState } 
from 'react'
import ReactDOM from 'react-dom'

// 手写一个 useState 核心理念 闭包
// react 链表
// preact 数组
let hooks = []; // 当前组件用到的 所有 hook 闭包里面的变量
let currentIndex = 0;
const useState = (function() {
  return function(initValue) {
    // currentIndex 组件里面 hook 调用的顺序
    // 不能出现在 类似 if 里面去 因为这样会导致 取 state 位置出错。
    // 例如 1 useState 2 if() useState 3 useState
    // [[state,setState],[],[]]
    if (!hooks[currentIndex]) hooks[currentIndex] = [];
    let hookState = hooks[currentIndex];
    hookState[0] = hookState[0] || initValue // 存着老的 state
    // hooks[currentIndex][0] = hookState[0] || initValue // 存着老的 state
    function setState(newState) {
      hookState[0] = newState;
      render();
    }
    hookState[1] = setState;
    currentIndex ++;
    return hookState;
  }
})()
// const useState = (function() {
//   let _state
//   return function (initValue) {
//     _state = _state || initValue // 如果上一次有state 使用 上一次的; 没有 使用 初始值
//     function setState(newState) {
//       _state = newState
//       render()
//     }
//     return [_state, setState]
//   }
// })()
function App() {
  // reRender
  const [time, setTime] = useState(4)
  const [count, setCount] = useState(0); // 记住上一次的 count ?
  // count 因为 useState(0) 执行 难道 不应该是 0 吗？
  // 闭包
  console.log(count)
  // let c = 0;
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>button</button>
      <br/>
      {time}
      <button onClick={() => setTime(time + 1)}>button</button>
    </div>
  )
}

function render() {
  // 取的时候也是 从 0 开始取
  currentIndex = 0
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()