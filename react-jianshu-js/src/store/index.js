import { createStore, combineReducers, } from 'redux'
import HomeReducer from './reducers/home/index';

// 创建 store 只能接收到 一个 reducer 
// 所以 在创建之前 要合并一下
// combineReducers 把多个 reducer 合并成一个
const rootReducer = combineReducers({
  home: HomeReducer,
  // x:'xxx',
  // x:'xxx',
  // x:'xxx',
  // x:'xxx'
  // 无论多少个都可以合并起来
})


export default createStore(rootReducer);