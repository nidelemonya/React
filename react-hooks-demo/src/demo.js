// import React, { useState, useEffect} from 'react';

// export const MyComponent = props => {
//     const [userInfo, setUserInfo] = useState({
//         name: 'John',
//         lastname:'Doe'
//     });
//     return (
//         <>
//             <h4>{userInfo.name}{userInfo.lastname}</h4>
//             <input type="text"
//                 value={userInfo.name}
//                 onChange={(e) => {
//                     setUserInfo({...userInfo,name:e.target.value})
//                 }}
//             />
//             <input type="text"
//                 value={userInfo.lastname}
//                 onChange={(e) => {
//                     setUserInfo({...userInfo,lastname:e.target.value})
//                 }}
//             />
//         </>
//     )
// }

// export const MyComponent = props => {
//     // JSX -> dom node
//     const [myName, setmyName] = React.useState('John Doe')
//     return (
//         <>
//             <h4>{myName}</h4>
//             <input type="text" value={myName}
//                 onChange={(e) => setmyName(e.target.value)}/>
//         </>
//     )
// }

// export const MyComponent = () => {
//     const [userName, setUserName] = useState('');
//     // unmount
//     useEffect(() => {
//         setTimeout(() => {
//             setUserName('Cyclone Joker')
//         },1500)
//     }, []);
//     return (
//         <>
//             <h4>{userName}</h4>
//             <input 
//                 type="text" 
//                 value={userName}
//                 onChange = { e=> setUserName(e.target.value)}/>
//         </>
//     )
// }

// export const MyComponent = () => {
//     const [visible, setVisible] = useState(false);
//     return (
//         <>
//             {visible && <MyChildComponent />}
//             <button onClick={() => setVisible(!visible)}>
//                 Toggle Child component visibility
//             </button>
//         </>
//     )
// }

// const MyChildComponent = () => {
//     const [userInfo, setUserInfo] = useState({
//         name: 'Cyclone',
//         lastName: 'Joker'
//     })
//     useEffect (() => {
//         console.log('Called when the component is mounted');
//         return () => {
//             console.log('Called on component unmounted, check the [] on the react useEffect')
//         }
//     }, [])
//     return (
//         <>
//             <h3>{userInfo.name}{userInfo.lastName}</h3>
//             <input 
//                 type="text"
//                 value={userInfo.name}
//                 onChange={(e) => {setUserInfo({...userInfo, name:e.target.value})}}/>
//             <input 
//                 type="text"
//                 value={userInfo.lastName}
//                 onChange={(e) => {setUserInfo({...userInfo, lastName:e.target.value})}}/>
//         </>
//     )
// }

// import React, { memo } from 'react';

// const setSatisfactionClass = (level) => {
//     if (level < 100) {
//         return "very-dissatisfied"
//     }
//     if (level < 200) {
//         return "somewhat-dissatisfied"
//     }
//     if (level < 300) {
//         return "neither"
//     }
//     if (level < 400) {
//         return "somewhat-satisfied"
//     }
//     return "very-satisfied"
// }

// // 是一个函数 如果两个值不相同 则更改 相同则不改
// const isSameRange = (prevValue, nextValue) => {
//     // console.log(prevValue, nextValue);
//     const prevValueClass = setSatisfactionClass(
//         prevValue.level
//     )
//     const nextValueClass = setSatisfactionClass(
//         nextValue.level
//     )
//     return prevValueClass === nextValueClass
// }

// export const FaceComponent = memo((props) => {
//     const { level } = props
//     return (
//         <div className={setSatisfactionClass(level)}></div>
//     )
// }, isSameRange)

// import React, { useState, useEffect } from 'react';

// export const MyComponent = () => {
//     const [filter, setFilter] = useState("")
//     const [userCollection, setUserCollection] = useState([])

//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//         .then(res => res.json())
//         .then(json => setUserCollection(json))
//     },[filter])
//     return (
//         // github api repos list
//         <>
//             <input 
//                 type="text" 
//                 value={filter}
//                 onChange={(e)=>setFilter(e.target.value)}
//             />
//             <ul>
//                 {userCollection.map((user,index) => 
//                     (<li key={index}>{user.name}</li>)
//                 )}
//             </ul>
//         </>
//     )
// }


// import React, { memo, useState } from 'react';

// export const DisplayUsername = memo((props)=>{
//     console.log('只在name发生改变时才更新');
//     return <h3>{props.name}</h3>
// })

// export const MyComponent = () => {
//     const [userInfo, setUserInfo] = useState({
//         name: 'John',
//         lastName: 'Doe'
//     })

//     setTimeout(()=> {
//         console.log('---------')
//         setUserInfo({
//             ...userInfo,
//             name: 'John'
//         })
//     },2000)
//     return (
//         <>
//             <DisplayUsername name={userInfo.name}/>
//             <input
//                 type="text"
//                 value={userInfo.name}
//                 onChange={e => setUserInfo({
//                     ...userInfo,
//                     name:e.target.value
//                 })}
//             />
//         </>
//     )
// }


// import React, { useState, useEffect } from 'react';

// export const MyComponent = () => {
//     const [ message, setMessage ] = useState('initial message')
//     const [seconds, setSeconds ] = useState(0)
//     const secondsRef = React.useRef(seconds)

//     useEffect(() => {
//         setTimeout(() => {
//             console.log(seconds);
//             setSeconds(1);
//             secondsRef.current = 1;
//         },1000)

//         // 闭包
//         setTimeout(() => {
//             setMessage(`Total Seconds: ${secondsRef.current}`);
//         },2000)
//         // 组件卸载
//         // return () => {
//         //     // cleanup
//         // }
//     }, [])
//     // [] 表示没有依赖项

//     // useEffect(() => {
//     //     setTimeout(() => {
//     //         console.log(seconds);
//     //         setSeconds(1);
//     //     },1000)

//     //     // 闭包
//     //     setTimeout(() => {
//     //         setMessage(`Total Seconds: ${seconds}`);
//     //     },2000)
//     //     // 组件卸载
//     //     // return () => {
//     //     //     // cleanup
//     //     // }
//     // }, [seconds])

//     return (
//         <>
//             <h3>{message}</h3>
//             <h4>{seconds}</h4>
//         </>
//     )
// }


// import React, { useState, useEffect, useRef } from 'react'

// export const MyComponent = () => {
//     const [visible, setvisible] = useState(false)
//     // mount unmount
//     return (
//         <>
//             {visible && <MyChildComponent/>}
//             <button onClick={() => setvisible(!visible)}>
//                 Toggle Child Component visibility:</button>
//         </>
//     )
// }

// export const MyChildComponent = () => {
//     const [ filter, setFilter ] = useState('')
//     const [ userCollection, setUserCollection ] = useState([])
//     const mountedRef = useRef(null)

//     // 另起一个新的 mountedRef 判断组件是否挂载
//     useEffect(()=> {
//         mountedRef.current = true
//         // 组件卸载 设置为 false
//         return () => (mountedRef.current = false)
//     })

//     const setUserCollect = userCollection => mountedRef.current && setUserCollection(userCollection)
//     useEffect(()=> {
//         // 如果接口请求过慢 数据未请求回来 用户等不及就返回上一级 会出现问题
//         setTimeout(() => {
//             fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//             .then(res => res.json())
//             .then(json => setUserCollect(json))
//         },2500)
//     },[filter])

//     return (
//         <>
//             <input 
//                 type="text"
//                 onChange={(e) => setFilter(e.target.value)}
//                 value={filter}/>
//             <ul ref={mountedRef}>
//                 {
//                     userCollection.map((user, index) => (
//                     <li key={index}>{user.name}</li>
//                 ))}
//             </ul>
//         </>
//     )
// }



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