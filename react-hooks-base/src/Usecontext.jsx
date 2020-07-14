import React, { createContext, useRef } from 'react';
import { useState, useEffect, useContext } from 'react';
// 跨层级传递数据
const context = createContext({
    theme:'red'
})
// 消息队列
function P() {
    // let obj = {theme:'red'};
    // setTimeout(()=>{
    //     obj.theme="blue"
    // },3000)
    // console.log(obj);
    let [obj, setTheme] = useState({theme:'red'})
    useEffect( () => {
        setTimeout(()=>{
        setTheme({
            theme:'orange'
        })
    },3000)},[])
    // 上面不能写成 obj 因为每次都会创建一个新的对象 两个对象是不相等的 因此会一直更新
    return (<context.Provider value={obj}>
        <Child a="1"/>
    </context.Provider>)
}
function Child() {
    // console.log('render1')
    return <Son/>
}
function Son() {
    // 拿到 dom 结构
    const ref = useRef();
    // console.log('render2')
    const value = useContext(context);
    // 最近的 context
    // didMount
    useEffect(()=>{
        console.log(ref.current)
    },[])
    return (
        <div>
            666
            <h2 style={{color:value.theme}} ref={ref}>h2</h2>
            {/* <context.Consumer>
                {
                    (value) => {
                        return(
                            <h2 style={{color:value.theme}}>h2</h2>
                        )
                    }
                }
            </context.Consumer> */}
        </div>
    )
}

export default P;