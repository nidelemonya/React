import React from 'react';
import { Provider } from 'mobx-react';
import articleStore from './store/articleStore';
import Home from './pages/home';
import logo from './logo.svg';
import './util/request.js'
import './App.css';

// 自己合并成一个对象
const store = {
  articleStore
}
function App() {
  return (
    // 解构 store
    <Provider {...store}>
      <Home />
    </Provider>
  );
}

export default App;
