import React, { useContext } from 'react'
import { context } from './BrowserRouter'

export default  function Route(props)  {
    const { pathname } = useContext(context);
    // 取别名 因为 组件第一个字母 要大写
    const {path, component : Com} = props;
    // return window.location.pathname === path && <Com />
    return pathname === path && <Com /> // 使用 全局上的 pathname

    // return window.location.pathname === path ? <Com /> :null
}
