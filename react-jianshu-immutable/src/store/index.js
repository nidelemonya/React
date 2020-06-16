// 最外面这层数据也转换为 immutable 即把 rootReducer 也变成immutable
import { combineReducers } from 'redux-immutable';
import { createStore, 
  // combineReducers,
   applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import HomeReducer from './reducers/home/index';


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