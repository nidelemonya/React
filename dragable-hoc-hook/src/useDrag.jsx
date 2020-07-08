import React from 'react';
import { useState } from 'react';

// useState 之前 ： 组件 class function
// useState 官方定义的 hook, 函数组件内部定义 state
//  useState 的用法是，需要传入一个参数作为状态的初始值，当函数执行后会返回两个值，
// 一个是当前状态的属性，一个是修改状态的方法。
// useDrag 自己定义出来的 hook
function useDrag() {
    // const state = {
    //     left: 0,
    //     top: 0
    // }
    // const [a,b] = [{left:0, top:0}], () => {}

    const [state, setState] = useState({left:0,top:0})
    var handleDown = (e) => {
        // console.log(e.clientX, obj.x);
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleUp);
    }
    const handleMove = (e) => {
        var newX = e.clientX;
        var newY = e.clientY;
        const diffX = newX;
        const diffY = newY;
        setState({
            left: diffX,
            top: diffY
        })
    }
    const handleUp = () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp);
    }

    return {
        left:state.left,
        top:state.top,
        handleDown
    }
}

function DDrag1() {
    const { left, top, handleDown } = useDrag();
    return (
        <div
            style={{ left, top }}
            className="dragable"
            onMouseDown={handleDown}>
            drag1
        </div>
    )
}
// drag1();
export const Drag1 = DDrag1;
export default useDrag;