// memo 性能优化
import React, { memo, useState } from 'react';

export const DisplayUsername = memo((props)=>{
    console.log('只在name发生改变时才更新');
    return <h3>{props.name}</h3>
})

export const MyComponent = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'John',
        lastName: 'Doe'
    })

    setTimeout(()=> {
        console.log('---------')
        setUserInfo({
            ...userInfo,
            name: 'John'
        })
    },2000)
    return (
        <>
            <DisplayUsername name={userInfo.name}/>
            <input
                type="text"
                value={userInfo.name}
                onChange={e => setUserInfo({
                    ...userInfo,
                    name:e.target.value
                })}
            />
        </>
    )
}