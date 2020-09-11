/**
 * 
mid1 的 next === 原始的 dispatch

 const mid1 = (next) => (action) => {
    if (typeof action === 'function') {
        return action();
    }

    return next(action);
}


mid2 的 next === (action) => {
    if (typeof action === 'function') {
        return action();
    }

    return next(action);
}
const mid2 = (next) => (action) => {
    console.log('mid2 start')
    next();
    console.log(('mid2 end'))
}
 */