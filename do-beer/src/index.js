import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Single from './components/Single';
import './style.css'; // 如果项目比较简单 可以单独放一个文件

const Root = function(){
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Main} />
        <Route path="/search/:searchTerm" component={Main} />
        <Route path="/beer/:beerID/:beerSlug" component={Single} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.getElementById('root'))
