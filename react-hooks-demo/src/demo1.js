// useState
import React, { useState } from 'react';

export const MyComponent = props => {
    // JSX -> dom node
    const [myName, setmyName] = React.useState('John Doe')
    return (
        // <> 节点的优点
        <>
            <h4>{myName}</h4>
            <input type="text" value={myName}
                onChange={(e) => setmyName(e.target.value)}/>
        </>
    )
}

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