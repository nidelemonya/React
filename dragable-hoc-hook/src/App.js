import React from 'react';
// 引入的组件必须大写
import DragAble1,{ WithDragAble2 } from './DragAble1';
import { Drag1 } from './useDrag';
import './App.css';

function App() {
  return (
    <div>
      <DragAble1/>
      <WithDragAble2></WithDragAble2>
      <Drag1/>
    </div>
  );
}

export default App;
