1. tsx工作流
.tsx React 组件 -> webpack.config.js 
-> awesome-typescript-loader -> tsconfig.json -> typescript.jsx 
-> babel(polyfill + env + plugin 装饰器模式) -> react DOM 
-> webpack-dev-server html-webpack-plugin footer script boundle.js

2. react-scripts

3. hooks 特色
    - useState
        object ...
    - useEffect
    - useCallback
    - useMemo
    - useRef
    - useReducer

4. 分析下react项目是如何运行的
    jsx
    root 根
    JSX 编译的过程
    - 先分析节点的类型
        标签节点 div h4
        组件 递归
        React.Fragment <></> => 优点： 把所有 dom 节点内化
        文本节点 退出条件