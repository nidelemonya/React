import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import './App.css';

// 标签模版 原生js模版
function foo (...args) {
  console.log(args)
  let str = 'insert here'
  str += args[0][0]
  str += args[1]
  str += args[0][1]
  str += args[2]
  str += args[0][2]
  console.log(str)
}
foo`i am ${18}, i am a boy ${19}`

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`

function App() {
  const [ isPrimary, setIsPrimary ] = useState(false);
  return (
    <div className="App">
      <Button primary={isPrimary} onClick={() => {setIsPrimary(!isPrimary)}}>按钮</Button>
    </div>
  );
}

export default App;
