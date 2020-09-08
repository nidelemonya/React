const _ = require('lodash')
function fn1(str) {
    return str.split('').reverse().join('')
}
// class A
function fn2(str) {
    return str.toUpperCase()
}
// class B
// 继承
// 组合
const fn = _.flow(fn1, fn2);
console.log(fn('abc'))

// 把第一个函数的结果传递给第二个函数 像一个流
function myFlow(...fns) {
    // 组合所有的函数
    // return function(defaultVal) {
    //     let res = defaultVal;
    //     while(fns.length) {
    //         let first = fns.shift()
    //         res = first(res)
    //     }
    //     return res
    // }
    
    // 用 reduce 实现
    return (defaultVal) => {
        return fns.reduce((sum, e, i) => {
            return i === 0 ?sum = e(defaultVal) :sum = e(sum)
        },'')
    }
}
const fns = myFlow(fn1, fn2);
console.log(fns('abc'))