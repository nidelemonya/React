import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from './react-redux.js';
import * as serviceWorker from './serviceWorker';

let action1 = {
  type: 'INCREMENT'
}

let action2 = {
  type: 'DECREMENT'
}

function reducer(state = 1, action) {
  switch(action.type) {
      case 'INCREMENT': return state + 1
      case 'DECREMENT': return state - 1
      default: return state
  }
}
let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* Porvider 组件干啥的 */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
