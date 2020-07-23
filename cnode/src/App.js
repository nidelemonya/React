import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login';
import Collect from './Collect';
import './App.css';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login}></Route>
      <PrivateRoute path="/collect" component={Collect}></PrivateRoute>
    </BrowserRouter>
  );
}

export default App;
