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
        在 React 中， <></> 是 <React.Fragment/> 的语法糖。

        1. return的内容只能有一个根节点，需要一个包裹元素。一般我都会孤陋寡闻地用div，fragment的好处是聚合成一个子元素列表，且在DOM中不增加额外节点。可以直接简写成<></>。

        Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
        https://reactjs.bootcss.com/docs/fragments.html

        2. 因为在JS中，每个代码换行编译时都会在末尾加上;，没有括号就会变成P2。所以括号的作用是告诉JS这是一个代码块不需要加分号。把代码写成以下两种格式，return的括号不是必须的，括号只起到增加代码可读性的作用。
        文本节点 退出条件

5. 做项目碰到的问题
    - 文档 api
    - useRef 解决闭包的副作用问题
    - 接口数据还未加载完成 用户提前退出 报错