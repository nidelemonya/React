import React, { Fragment } from 'react';
import { Provider, connect } from 'react-redux';
import './App.css';

 
const { createStore, combineReducers } = require('redux')
let isLogin = false;
// isLogin = true
let posts = [];
// 状态 reducer（纯函数）
// state 上一次的状态
// createStore 经过 reducer 生成 store    ： 状态默认值
// dispatch action 也要 reducer 生成 store： 用户触发
// reducer 兼顾两者：判断 
//
const LOGIN_STATUS = Symbol('login/change-login-status');
const POSTS_STATUS = Symbol('posts/change-posts-status');
function loginReducer(state = isLogin, action) {
  switch (action.type) {
    case LOGIN_STATUS:
      // state = !state
      console.log(3333)
      return !state;            // 返回 新的state，不是修该原来那个变量
    default:                   // default 默认值
      return state; 
  }
}
function postsReducer(state = posts, action) {
  switch (action.type) {
    case POSTS_STATUS:
      return action.newPosts;
    default :
      return state
  }
}
// action：纯对象（{}）, type 字段：区分这个action 干啥的，常量, 整个应用唯一
// 自研状态管理库：单向

const loginAction = {
  type: LOGIN_STATUS,
  a: 1
}
const postAction = {
  type: POSTS_STATUS,
  newPosts: [{ a: 1 }, { a: 2 }]
}
// 分了 login posts
// 接受一个
// combineReducers 集合
const rootReducer = combineReducers({
  login: loginReducer,
  posts: postsReducer
})
// 状态存到 store
// createStore（需要返回值） 也调用了 reducer
// createStore 没有指定 任何 action type
const store = createStore(rootReducer);
console.log(store);
// mapStateToProps
console.log('now', store.getState());

// action - reducer

// mapDispatchToProps
store.dispatch(loginAction);
store.dispatch(postAction);
console.log('now', store.getState());
// 
function Login(){
  return(
    <div>
        Login
        <span>span</span>
    </div>
  )
}
function Header(props) {
  // 类组件 this.props
  console.log(props);
  return (
    <div>
      Header
      <Login />
      {
          props.login ? '1' : '0'
      }
      <button onClick={() => {props.changeLoginStatus()}}>btn</button>
    </div>
  )
}
// 获取全局 store 上面的数据， 可以用 Consumer 来获取
// store 里面的全部得到数据都是全局的， Header 只要 header 相关的数据

// { login: true, posts=[]}
// 从 全部 的 store 过滤一下 当前组件需要的一些数据
// Consumer 来， 让我们用 connect
// 取到数据
function mapStateToProps(state) {
    // 把你想要的数据 return 出来
    return {
        login: state.login
    }
}
// toProps
// 修改数据
function mapDispatch(dispatch) {
    return{
        changeLoginStatus() {
            dispatch(loginAction)
        }
    }
}
// connect mapDispatch
const ConnectedHeader = connect(mapStateToProps, mapDispatch)(Header);
function Footer() {
  return (
    <div>Footer</div>
  )
}
function App() {
  return (
    <Provider store={store}>
      {/* Provider 内部的组件 才能获取 Provider 提供的数据
      用 connect 获取*/}
      <Fragment>
        <ConnectedHeader />
        <Footer />
      </Fragment>
    </Provider>
  );
}

export default App;