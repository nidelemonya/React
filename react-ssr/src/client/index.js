import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import Header from '../common/Header/Header';
import router from '../router'
// 浏览器不能识别 import 的代码 也需要打包一下 成为能让浏览器识别的 js 代码
function App() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            { renderRoutes(router) }
        </BrowserRouter>
    )
}
// hydrate 调和
// root 节点 下面已经有东西了
// 客户端不需要再构造 DOM 节点，只需要完成服务端完成不了的事件绑定 (但内容要保持一致)
ReactDom.hydrate(<App />, document.getElementById('root'));