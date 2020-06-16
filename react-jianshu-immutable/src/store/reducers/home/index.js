import { fromJS } from 'immutable';
import { GET_HOME_LIST } from '../../constants';

// 数据状态
// 初始化: immutable
// 修改的时候: immutable concat 的特点

// 默认的数据
const defaultState = fromJS({
  homeList: []
})
// reducer: 原生 js 对象 改成 immutable 以便于所有的数据都能享受 shouldComponentUpdate 这个组件的优化
// state 已经变成 immutable 结构的， 所以没有原生 js 操作了 例如. 获取属性值


export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_HOME_LIST:
      return {
        homeList: action.homeList
      };
    default:
      return defaultState
  }
}