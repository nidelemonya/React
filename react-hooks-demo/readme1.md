## hooks
hooks文档
github作者
Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
现在很多大厂都已经全面升级react hooks 能熟练运用hooks 会成为你的加分项 

-useState useEffect memo UseRef useReducer usecontext

## 搭建
创建src index 在跟组件挂载 入口文件
public index.html 模板 根挂载点 
yarn init -y 
yarn add react react-dom react-scripts
修改配置文件
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
 打包 npm run bulid 会生成build
 这个目录给后端 后端发布到服务器上 这个目录可以独立运行 
 在服务器上通过nginx配置 指向index.html 这个网站就可以启动 作为首页 写完之后打包 就从开发阶段到上线阶段

fragment标签 在页面不会渲染 <> 


## useState
函数组件原本是无状态组件，但是在实际开发中都需要有状态的函数组件
这时候 hooks上场 hooks意为钩子 可以将状态钩入函数组件中


useState是一个方法 用来取代class组件中的setState。useState接受一个值作为state的初始值，返回一个数组，数组第一个值是state，第二个值是一个用于修改state的函数
可以使用es6新特性解构出来 
const [name, setname] = useState(0)
<!-- let _useState = useState(0);
let name = _useState[0];
let setName = _useState[1]; -->

初始值  String Number Boolean Object

不同点：类中的setState是合并，而函数组件中的setState是替换。
useState()用于管理简单状态。对于复杂的状态管理，可以使用useReducer()hook。
