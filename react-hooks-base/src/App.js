import React from 'react';
import DemoUseEffect from './useEffect';
import DemoUseContext from './Usecontext';
import DemoUseReducer from './UseReducer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <DemoUseEffect/>
      <DemoUseContext/>
      <DemoUseReducer/>
    </div>
  );
}

export default App;
