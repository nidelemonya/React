import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import { Provider } from "react-redux";
import { get } from 'axios';
import thunk from 'redux-thunk';

// redux 中的重要部分：action reducer state

const counterReducer = function (state = { count:1 }, action) {
  switch(action.type) {
    case 'COUNT_ADD':
      return {
        ...state, count:state.count+1
      }
    case 'COUNT_REDUCE':
        return {
          ...state, count:state.count-1
        }
      default:
        return state
  }
}

const postReducer = function(state = { list:[{title:'你好'}]},action) {
  switch(action.type) {
    case 'LOAD_POSTS':
      return {
        ...state,
        list: action.payload
      }
      default:
      return state
  }
}

// combineReducers 用来整合多个 reducer
const rootreducer = combineReducers({
  counterReducer,
  postReducer
})

const store = createStore(
  rootreducer,
  compose(
    applyMiddleware(...[thunk]), // 需要使用中间件数组
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); // 创建一个store

console.log(store);
console.log(store.getState());// 取得状态

// 想要改变 reducer 的值， 需要用 dispatch 派发一个action

// action 里面需要两个参数 type payload

store.dispatch({
  type:'COUNT_ADD',
  payload:{}
})

console.log(store);
console.log(store.getState());

store.dispatch({
  type:'COUNT_REDUCE',
  payload:{}
})

console.log(store);
console.log(store.getState());

const getPostRequest=() => {
  return get('https://jsonplaceholder.typicode.com/posts')
}

// 使用了 thunk 可以用函数
store.dispatch(async function(dispatch) {
  const res = await getPostRequest();
  console.log(res);
  dispatch({
    type: 'LOAD_POSTS',
    payload: res.data
  })
})

console.log(store);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
