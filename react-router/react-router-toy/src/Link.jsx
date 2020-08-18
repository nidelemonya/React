import React, { useContext } from 'react'
import { context }from './BrowserRouter'

export default  function Link(props)  {
    const { update } = useContext(context); // 通过 useContext 解构 value 上的值
    const {to, children} = props;
    const handleClick = (e) => {
        e.preventDefault()
        window.history.pushState(null, null, to)
        // 整个页面更新
        // 在 Context 存一份数据
        // update({ pathname: to}) 类组件
        update(to)
    }
    return (
        <a onClick={handleClick} href={to}>
        {children}
        </a>
    )
}
