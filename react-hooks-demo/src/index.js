import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

// import { MyComponent } from './demo1';
import { MyComponent } from './demo2';
// import { MyComponent } from './demo3';
// import { MyComponent } from './demo4';
// import { MyComponent } from './demo5';
// import { MyComponent } from './demo6';
// import { MyComponent } from './demo7';
// import { MyComponent } from './demo8';
// import { MyComponent } from './demo9';

function App() {
    return (
        <div className="App">
            <MyComponent />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDom.render(<App/>, rootElement);