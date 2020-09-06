import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { context, connect } from './react-redux';

function App(props) {
  // context ? 怎么拿到 context 的值
  // 之前 connect -> mapStateToProps
  // 现在
  const context1 = useContext(context)
  console.log(context1)
  console.log(props)
  console.log(props.count)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const mapDispatchToProps = () => {
  return {

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
// 1. 拿到 mapStateToProps 的返回值();
// 2. 把 返回值 放到 <App ... props/> 
//
