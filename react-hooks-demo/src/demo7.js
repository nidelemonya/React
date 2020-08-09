// 闭包 useRef
import React, { useState, useEffect } from 'react';

export const MyComponent = () => {
    const [ message, setMessage ] = useState('initial message')
    const [seconds, setSeconds ] = useState(0)
    const secondsRef = React.useRef(seconds)

    useEffect(() => {
        setTimeout(() => {
            console.log(seconds);
            setSeconds(1);
            secondsRef.current = 1;
        },1000)

        // 闭包
        setTimeout(() => {
            setMessage(`Total Seconds: ${secondsRef.current}`);
        },2000)
        // 组件卸载
        // return () => {
        //     // cleanup
        // }
    }, [])
    // [] 表示没有依赖项

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log(seconds);
    //         setSeconds(1);
    //     },1000)

    //     // 闭包
    //     setTimeout(() => {
    //         setMessage(`Total Seconds: ${seconds}`);
    //     },2000)
    //     // 组件卸载
    //     // return () => {
    //     //     // cleanup
    //     // }
    // }, [seconds])

    return (
        <>
            <h3>{message}</h3>
            <h4>{seconds}</h4>
        </>
    )
}