// useRef 判断组件是否挂载
import React, { useState, useEffect, useRef } from 'react'

export const MyComponent = () => {
    const [visible, setvisible] = useState(false)
    // mount unmount
    return (
        <>
            {visible && <MyChildComponent/>}
            <button onClick={() => setvisible(!visible)}>
                Toggle Child Component visibility:</button>
        </>
    )
}

export const MyChildComponent = () => {
    const [ filter, setFilter ] = useState('')
    const [ userCollection, setUserCollection ] = useState([])
    const mountedRef = useRef(null)

    // 另起一个新的 mountedRef 判断组件是否挂载
    useEffect(()=> {
        mountedRef.current = true
        // 组件卸载 设置为 false
        return () => (mountedRef.current = false)
    })

    const setUserCollect = userCollection => mountedRef.current && setUserCollection(userCollection)
    useEffect(()=> {
        // 如果接口请求过慢 数据未请求回来 用户等不及就返回上一级 会出现问题
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
            .then(res => res.json())
            .then(json => setUserCollect(json))
        },2500)
    },[filter])

    return (
        <>
            <input 
                type="text"
                onChange={(e) => setFilter(e.target.value)}
                value={filter}/>
            <ul ref={mountedRef}>
                {
                    userCollection.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}
