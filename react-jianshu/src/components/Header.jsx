import React from 'react';
import ImmutableComponent from './common'
// 判断immutable 中的两个对象一样不一样
// import {is} from 'immutable';
// 继承基类
class Header extends ImmutableComponent {
    state = {}
    // 对比俩个对象是否一样
    // nextProps = {} == this.props = {} 对比两个对象是否相等
    shallowEqual(objA, objB) {
        if (typeof objA !== 'object' || 
        typeof objB !== 'object') {
            return false;
        }
        const keysA = Object.keys(objA);
        const keysB = Object.keys(objB);
        if (keysA.length !== keysB.length ) return false;
        // 第一层的比较
        for (let key of keysA) {
            if (objA[key] !== objB[key]) {
                return false
            }
        }
        return true;
    }
    // 使用 immutable 结构共享

    // nextProps接收下次传进来的新的props
    // shouldComponentUpdate(nextProps, nextState){
    //     let isSame = this.shallowEqual(nextProps, this.props) &&
    //      this.shallowEqual(nextState, this.state);

    //     return !isSame; // 如果相等则不更新 不相等则更新
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     const thisProps = this.props || {};
    //     const thisState = this.state || {};
    //     nextProps = nextProps || {};
    //     nextState = nextState || {};
    //     if (Object.keys(thisProps).length !== Object.keys(nextProps).length
    //     || Object.keys(thisState).length !==Object.keys(nextState).length) {
    //         return true;
    //     }
    //     for (let propKey of Object.keys(nextProps)) {
    //         // fromjs：深层次is可以比较；Map is只能比较第一层
    //         if (!is(thisProps[propKey], nextProps[propKey])) {
    //             return true;
    //         }
    //     }
    //     for (let stateKey of Object.keys(nextState)) {
    //         if (!is(thisState[stateKey], nextState[stateKey])) {
    //             return true;
    //         }
    //     }
    //     // 这两对结构完全一样了
    //     return false;
    // }
    render() {
        console.log('header render');
        const { title } = this.props;
        return (
        <div>Header{title}</div>
        );
    }
}

export default Header;