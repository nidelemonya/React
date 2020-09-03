let action1 = {
    type: 'INCREMENT'
}

let action2 = {
    type: 'DECREMENT'
}

function reducer(state = 1, action) {
    switch(action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
        default: return state
    }
}

function createStore(reducer) {
    let state // 1
    function dispatch(action) {
        state = reducer(state, action)
    }
    dispatch({type: ''}) // state 为 reducer 那里的默认值。 当没有 dispatch 任何值的时候 生成默认值。
    function getState() {
        return state
    }
    return {
        dispatch,
        getState
    }
} 

// redux-thunk
// 插槽 中间件
// 洋葱模型
let store = createStore(reducer)
store.dispatch(action1);
// store.dispatch(action2);
console.log(store.getState())