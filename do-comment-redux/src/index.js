import React from 'react';
import ReactDOM from 'react-dom';
// 数据管理模式
// 创建store 中央仓库 数据管理架构
// createStore comments 放到中央仓库里面去
import { createStore, combineReducers } from 'redux';  // 三巨头 数据管理
import { Provider } from 'react-redux'; // Provider 提供
// 数据放到仓库中, 跟组件没有依赖关系
// 独立数据开发
import CommentApp from './containers/CommentApp';
import commentsReducers from './reducers/comments';

const store = createStore(commentsReducers);

ReactDOM.render(
  // 数据仓库
  <Provider store={store}>
    <CommentApp/>
  </Provider>,
  document.getElementById('root')
)
// commentApp comments 父组件, props 事件

// react-router react-redux
