import { fromJS } from 'immutable';
import { GET_HOME_LIST } from '../../constants';

// 数据 状态
// immutable 只会对数据产生影响 对redux 流程不会产生影响。
// 初始化: immutable
// 修改的时候: immutable concat()的特点 -> 返回一个新数组， 原数组不做任何改变
// 但是 push() 是会对原来的数组做出改变。 也就是原生js
// Map = {} List = {} 两种数据结构 对象 数组

// 默认的数据
const defaultState = fromJS({
  homeList: []
})
// reducer: 原生 js 对象 改成 immutable 以便于所有的数据都能享受 shouldComponentUpdate 这个组件的优化
// state 已经变成 immutable 结构的， 所以没有原生 js 操作了 例如. 获取属性值


export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_HOME_LIST:
      const newHomeList = action.homeList
      // 工具 lodash
      // 返回新的 state
      return state.set('homeList', newHomeList) // immutable 都类似 concat 所以应该是返回这个新对象 而不是原来的state
      // return {
      //   homeList: action.homeList
      // };
    default:
      return defaultState
  }
}