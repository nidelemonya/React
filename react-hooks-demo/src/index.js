import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

import { MyComponent } from './demo';

function App() {
    return (
        <div className="App">
            <MyComponent />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDom.render(<App/>, rootElement);