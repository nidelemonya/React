import React, { useState } from 'react'
import  useClock  from './useClock'
import { useEffect, useRef } from 'react'

function Clock() {
    // 每隔 1s + 1
    const [ count, setCount ] = useState(60)
    // console.log(count)
    const date = useClock()

    // 实现一个 倒计时计时器

    // 1. capture value
    // useEffect(() => {
    //     if (count < 0) setCount(60)
    //     let timer = setInterval(() => {
    //         setCount(count -1)
    //     },1000)
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [count])


    // 2. useRef 返回的对象 永远是 同一个对象
    let countRef = useRef();
    countRef.current = count
    useEffect(() => {
        let timer = setInterval(() => {
            setCount(countRef.current -1 < 0 ? 60 : countRef.current -1)
        },1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    // 3. SetState 回调函数 实现
    // useEffect(() => {
    //     let timer = setInterval(() => {
    //         setCount((count) => count -1 < 0 ? 60 : count -1) // 回调函数
    //     },1000)
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])

    return (
        <div>
            { date } <br/>
            { count }
        </div>
    )
}

export default Clock;