import React, {
    useReducer, useCallback
} from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'ADD': 
            return { count: state.count + 1 } 
        case 'REDUCE': 
            return { count: state.count - 1 }
        default:
            return state;
    }
}
function Counter() {
    const initState = {
        count: 0
    }
    // --------------------------------------------------> 这里需要设置默认值
    const [store, dispatch] = useReducer(reducer, initState);
    // useCallback 把函数包起来 缓存
    const handleAdd = useCallback(() => {
        dispatch({type:'ADD'})
    },[])
    const handleReduce = useCallback(() => {
        dispatch({type:'REDUCE'})
    },[])
    return (
        <div>
            count:{store.count}
            <button onClick={handleAdd}></button>
            <button onClick={handleReduce}></button>
        </div>
    )
}

export default Counter; 