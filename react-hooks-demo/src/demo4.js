// useState, useEffect
import React, { useState, useEffect } from 'react';

export const MyComponent = () => {
    const [filter, setFilter] = useState("")
    const [userCollection, setUserCollection] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
        .then(res => res.json())
        .then(json => setUserCollection(json))
    },[filter])
    return (
        // github api repos list
        <>
            <input 
                type="text" 
                value={filter}
                onChange={(e)=>setFilter(e.target.value)}
            />
            <ul>
                {userCollection.map((user,index) => 
                    (<li key={index}>{user.name}</li>)
                )}
            </ul>
        </>
    )
}