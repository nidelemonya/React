import React, { useState, useEffect } from 'react';

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

export const MyComponent = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            {visible && <MyChildComponent />}
            <button onClick={() => setVisible(!visible)}>
                Toggle Child component visibility
            </button>
        </>
    )
}

const MyChildComponent = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'Cyclone',
        lastName: 'Joker'
    })
    useEffect (() => {
        console.log('Called when the component is mounted');
        return () => {
            console.log('Called on component unmounted, check the [] on the react useEffect')
        }
    }, [])
    return (
        <>
            <h3>{userInfo.name}{userInfo.lastName}</h3>
            <input 
                type="text"
                value={userInfo.name}
                onChange={(e) => {setUserInfo({...userInfo, name:e.target.value})}}/>
            <input 
                type="text"
                value={userInfo.lastName}
                onChange={(e) => {setUserInfo({...userInfo, lastName:e.target.value})}}/>
        </>
    )
}