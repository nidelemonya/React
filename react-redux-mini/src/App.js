import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { context, connect } from './react-redux';

function App(props) {
  // context ? 怎么拿到 context 的值
  // 之前 connect -> mapStateToProps
  // 现在
  const context1 = useContext(context)
  const { count } = props
  const { inc } = props
  console.log(context1)
  console.log(props)
  console.log(props.count)
  useEffect(() => {
    let timeout = setTimeout(() => {
      inc()
    },2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <div>
      { count }
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
      inc:() => dispatch({type:'INCREMENT'}),
      dec:() => dispatch({type:'DECREMENT'})
  }
}
// mapStateToProps({a:1, b:2})
const mapStateToProps = (state) => {
  return {
    count: state
  }
  // 组件 this.props.count 拿到
}
// connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default Observer()(App)
// 1. 拿到 mapStateToProps 的返回值();
// 2. 把 返回值 放到 <App ... props/> 
//
