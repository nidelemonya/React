// 最外面这层数据也转换为 immutable 即把 rootReducer 也变成immutable
// 所以这里引入的是 'redux-immutable' 中的 combineReducers
import { combineReducers } from 'redux-immutable';
import { createStore, 
  // combineReducers,
   applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import HomeReducer from './reducers/home/index';

// 多个 reducer 合并成一个
// 不是 redux 给我们生成的
// redux 原生的 combineReducers 返回的是一个 reducer
// 伪代码：
// let defaultRootState = fromJS({
//   home: Map{ homeList => List },
//   detail:Map
// })

// 全链路都是 immutable {} [](数组和对象); 其他的基本数据类型： 比如字符串 true(布尔值) 本身就是不可变的
// function rootReducer(state = defaultRootState, action) {}


const rootReducer = combineReducers({
  home: HomeReducer
})
// state  = { title: fromJS() }
// HomeReducer 里面数据已经变成 immutable
// rootReducer 里面的数据 还是 原生的 js
// 创建 store 只能接收到 一个 reducer 
// 所以 创建之前 合并一下
// rootReducer = { home: immutable }
// rootReducer 整个 rootReducer 并不是 immutable 的



export default createStore(rootReducer, applyMiddleware(thunk));
// export default createStore(rootReducer);