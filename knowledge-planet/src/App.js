import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
// 全局引用 iconfont.css
import './assest/iconfont/iconfont.css';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/create" component={Create}/>
      </BrowserRouter>
  );
}

export default App;
