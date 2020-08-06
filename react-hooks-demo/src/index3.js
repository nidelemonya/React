// import React from 'react';
// import ReactDom from 'react-dom';
// import { MyComponent } from './demo.js';

// function App() {
//     return (
//         <div className="App">
//             <MyComponent/>
//         </div>
//     )
// }

// const rootElement = document.getElementById('root');
// ReactDom.render(<App/>, rootElement);

import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import { FaceComponent } from './demo';

function App() {
    const [satisfactionLevel, setSatisfactionLevel] = useState(300)
    return (
        <div className="App">
            <input 
                type="range" 
                min="0" 
                max="500" 
                value={satisfactionLevel}
                // + str 变为 number
                onChange = {(e)=>{setSatisfactionLevel(+e.target.value)}}
            />
            <br/>
            <span>{satisfactionLevel}</span>
            <br/>
            {/* 可以做优化 */}
            <FaceComponent level={satisfactionLevel} />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDom.render(<App/>, rootElement);