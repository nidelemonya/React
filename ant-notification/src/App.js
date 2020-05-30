import React from 'react';
import notification from './Notification';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Notification>
        faild
        <h1> Successful </h1>
      </Notification> */}
      <button onClick={() => {
        notification. open({
          title: 'this is title'
        })}}>open</button>
      <button onClick={() => {notification. close()}}>C Lose</button>
    </div>
  );
}

export default App;
