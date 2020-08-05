import React, { useEffect, useRef } from 'react';
import pullToRefresh from './pullDown';
import './App.css';

const { init } = pullToRefresh()

function App() {
  const contentRef = useRef()
  const ptrRef = useRef()
  const bodyRef = useRef()
  useEffect(() => {
    init({
      contentEl: contentRef.current,
      ptrEl:ptrRef.current,
      bodyEl:bodyRef.current,
      loadingFunction:() => new Promise((resolve, reject) => {
        setTimeout(()=> {
          resolve()
        },3000)
      })
    })
  })
  return (
    <div ref={bodyRef} className="body-wrap">
      {/* ptr-wrap 负责移动 */}
      <div ref={ptrRef} className="ptr-wrap">
        {/* loading 负责动画 */}
        <div className="loading"></div>
      </div>
      <header ref={contentRef} className="content-wrap">Cyclone</header>
    </div>
  );
}

export default App;
