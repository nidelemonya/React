import React, { useState } from "react";

function Sort() {
  let [list, setList] = useState([
    { id: 0, content: "c0" },
    { id: 1, content: "c1" },
    { id: 2, content: "c2" }
  ]);
  const sort = () => {
    let preList = list.slice(0);
    preList.sort((a, b) => b.id - a.id);
    setList(preList);
  };
  return (
    <div>
      {list.map((item, i) => {
        return (
          <li
            // key={i}
            key={item.id}
          >
            {item.content}
            <input />
          </li>
        );
      })}
      <button onClick={sort}>sort</button>
    </div>
  );
}

// 错误边界
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  // 这个静态方法和componentDidCatch方法定义一个即可
  static getDerivedStateFromError(error) {
    console.log(error)
    // 当发生错误时，设置hasError为true，然后展示自己的错误提示组件
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // 这里可以将报错信息上报给自己的服务
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error</h1>;
    }
    return <>{this.props.children}</>;
  }
}

const Child = () => {
  let obj = {}
  return (
    <div>
      {obj.a}
    </div>
  )
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
      <h2>Start editing to see some magic happen!</h2>
      <Sort />
      <ErrorBoundary />
    </div>
  );
}
