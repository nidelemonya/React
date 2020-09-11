// mid2(mid1())
function mid1(next) {
    return function (action) {
        console.log('mid1 start')
        if (typeof action === 'function') {
            return action();
        }
        let res = next(action);
        console.log('mid1 end')
        return res
    }
}

function mid2(next) {
    return function (action) {
        console.log('mid2 start')
        next();
        console.log(('mid2 end'))
    }
}


// const mid1 = (next) => (action) => {
//     console.log('mid1 start')
//     if (typeof action === 'function') {
//         return action();
//     }
//     let res = next(action);
//     console.log('mid1 end')
//     return res
// }
// const mid2 = (next) => (action) => {
//     console.log('mid2 start')
//     next();
//     console.log(('mid2 end'))
// }
// redux 已经加载完了 两个中间件
// mid2(mid1(最原始的 dispatch))
const middlewares = [mid1, mid2]

function myFlow(...fns) {
    // 组合所有的函数 
    // 用 reduce 实现
    return (defaultVal) => {
        return fns.reduce((sum, e, i) => {
            return i === 0 ? sum = e(defaultVal) : sum = e(sum)
        }, '')
    }
}
// mid 返回的是个函数
// fn3(fn2(fn1())) 中间得到的上一个结果 也是函数
const chain = myFlow(...middlewares)
let nbDispatch = chain(() => {
    console.log(`就是 redux 源码内部最原始 
    只能处理 action 是纯对象的 dispatch函数`)
})
nbDispatch({
    a: 1
})