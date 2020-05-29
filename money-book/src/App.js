import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';
import Main from './Page/Main/index';
import Home from './Page/Home/index';
import Create from './Page/Create/index';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Main}/>
        <Route path="/home" component={Home}/>
        <Route path="/create" component={Create}/>
      </BrowserRouter>
  );
}

export default App;