import React from 'react';
import ImmutableComponent from './components/common';
import { BrowserRouter, Route } from 'react-router-dom';
// 引入 store
import store from './store'
// 放到全局位置
import { Provider } from 'react-redux';
import Header from './components/Header';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends ImmutableComponent　{
   render() {
       return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header ></Header>
                    {/* 具有包含关系 精确匹配 exact */}
                    <Route path="/" exact component={Home} ></Route>
                    <Route path="/detail" component={Detail} ></Route>
                </BrowserRouter>
            </Provider>
       )
   }
}

export default App;
