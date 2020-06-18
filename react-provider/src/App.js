import React, { Fragment, useState, createContext } from 'react';
import './App.css';

const context = createContext(); // 可以理解为特殊的 state 跨层级传输
// Consumer 相当于 connect
// Provider 内部 使用 Consumer 都是合法的
const { Provider, Consumer } = context;
// const { Provider, Consumer } = createContext();

// 有状态组件:stateFul => class state
// 无状态组件:stateLess => function react16(hook钩子函数 一系列的API，都以use开头 useXXX) state 叫做函数组件
function Login(){
  return(
    // <Consumer> 在哪里用就在哪里包起来
    <div>
      Login
      <Consumer>{
        (obj) => {
          console.log('obj:',obj);
          return (
            <span style={ {color: obj.state.theme2 } }>span</span>
          )
        }
      }
      </Consumer>
    </div>
  )
}
function Header(props) {
  // 类组件 this.props
  // 函数组件 props 放到参数上面
  const { theme } = props;
  console.log(theme);
  return (
    <div style={ {color: theme.theme1} }>
      Header
      {/* <Login theme={theme}/> */}
      <Login />
      {/* Login 里面还有其他组件，还要把theme传进去，这样很麻烦 <Avatar theme={theme}/> */}
    </div>
  )
}
function Footer() {
  return (
    <Consumer>
      {
        (obj) => {
          return (
            // 最外层 { } 表示内部是 js 语句
            <div style={ {color: obj.state.theme2 } }>Footer</div>
          )
        }
      }
    </Consumer>
  )
}
function App() {
  // useXXX 返回一个数组 解构
  // 类似 let res = [{ theme: 'res' }, function setTheme() {}]
  // let [s,set] = res;
  // Provider 提供
  // Consumer 消费
  // [] 数组的解构
  const [ state, setTheme ] = useState({ theme1: 'orange', theme2: 'red'}); 
  console.log('state:',state);
  console.log('state.theme1:',state.theme1);
  let obj = {
    state,
    setTheme
  }
  return (
    // 最外层 { } 表示内部是 js 语句
    // 里面 {} 代表是 js 对象 obj
    // <Provider value={{
    //   state,
    //   setTheme
    // }}>
    <Provider value={obj}>
      {/* Provider 内部的组件 才能获取 Provider 提供的数据
      用 Consumer 获取*/}
      <Fragment>
        <Header theme={state}/>
        <Footer />
      </Fragment>
    </Provider>
  );
}

export default App;