// useReducer

// 数据在hooks 里面怎么走的
// useState -> context 轻量 | reducer 重   | useReducer | mobx

import React, { useReducer } from 'react'

const userInfoReducer = (state, action) => {
    switch(action.type) {
        case "setusername":
            return {
                ...state,
                // payload 子弹
                name: action.payload
            }
        case "setlastname":
            return {
                ...state,
                lastname: action.payload
            }
        default:
            return state
    }
}
export const MyComponent = () => {
    // useReducer 第一个参数 接收 reducer 函数 第二个参数 为 初始状态 是个对象
    const [reducer, dispatch] = useReducer(userInfoReducer, {
        name: "Cyclone",
        lastname : "Joker"
    })
    return (
        <>
            <h3>{reducer.name} {reducer.lastname}</h3>
            <EditUsername name={reducer.name} dispatch={dispatch}/>
            <input
                type="text"
                value={reducer.lastname}
                onChange={e=> dispatch({
                    type:'setlastname',
                    payload: e.target.value
                })
                }/>
        </>
    )
}

export const EditUsername = React.memo((props) => {
    console.log('Hey Im only rerendered when name gets updated, check React')
    return (
        <input
            type="text"
            value={props.name}
            onChange= {
                e => props.dispatch({
                    type:'setlastname',
                    payload: e.target.value
                })
            }
        />
    )
})