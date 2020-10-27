import React, { useState } from "react";
import { createContainer } from "unstated-next";
import { render } from "react-dom";

function useCounter(initialState = 0) {
  let [count, setCount] = useState(initialState);
  let decrement = () => setCount(count - 1); // 声明一个减少的函数
  let increment = () => setCount(count + 1); // 声明一个增加的函数
  return { count, decrement, increment }; // 将变量以及相关的设置函数返回
}

let Counter = createContainer(useCounter);

function CounterDisplay() {
  let counter = Counter.useContainer();
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
}

function App() {
  return (
    <Counter.Provider>
      <CounterDisplay />
      <Counter.Provider initialState={2}>
        <div>
          <div>
            <CounterDisplay />
          </div>
        </div>
      </Counter.Provider>
    </Counter.Provider>
  );
}

render(<App />, document.getElementById("root"));
