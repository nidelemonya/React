import React, { useCallback } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import { connect } from 'react-redux';
import Journey from './components/journey/Journey.jsx';
function App(props) {
  console.log(props);
  const {
    from,
    to
  } = props;

  // useCallback() 缓存
  const onBack = useCallback(()=>{
    window.history.back();
  },[]);
  
  return (
    <div>
      <div className="header-wrapper">
        {/* 想好要传入的 props 是啥 方便以后组件的复用 */}
        <Header title="火车票" onback={onBack}/>
      </div>
      <form action="./query.html" className="form">
        <Journey from= {from} to={to} />
      </form>
    </div>
  );
}

export default connect(function mapStateToProps(state){
  // 状态的读操作
  return state;
},)(App);