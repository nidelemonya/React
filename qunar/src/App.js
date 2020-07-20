import React, { useCallback, useMemo } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import { connect } from 'react-redux';
import Journey from './components/journey/Journey.jsx';
// bindActionCreators的作用是将一个或多个action和dispatch组合起来
// 生成 mapDispatchToProps需要生成的内容
import { bindActionCreators } from 'redux';
import { exchangeFromTo } from './store/actions';

function App(props) {
  console.log(props);
  const {
    from,
    to,
    dispatch
  } = props;

  // useCallback() 缓存
  const onBack = useCallback(()=>{
    window.history.back();
  },[]);
  // 缓存: 有返回值的缓存函数
  const cbs = useMemo(() => {
    // 自动化 绑定 action 和 dispatch
    return bindActionCreators({
      exchangeFromTo
      // exchangeFromTo: exchangeFromTo
    },dispatch);
  },[]);
  return (
    <div>
      <div className="header-wrapper">
        {/* 想好要传入的 props 是啥 方便以后组件的复用 */}
        <Header title="火车票" onback={onBack}/>
      </div>
      <form action="./query.html" className="form">
        <Journey from= {from} to={to} {...cbs}/>
      </form>
    </div>
  );
}

export default connect(
  function mapStateToProps(state){
    // 状态的读操作
    return state;
}, 
  function mapStateToProps(dispatch) {
    return {
      dispatch
    }
})(App);