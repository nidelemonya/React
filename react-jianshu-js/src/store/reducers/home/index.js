import { GET_HOME_LIST } from '../../constants';

// 数据状态
// 初始化: immutable
// 修改的时候: immutable concat 的特点

// 默认的数据
const defaultState = {
  homeList: []
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_HOME_LIST:
      return {
        // homeList: action.a
        homeList: action.homeList
      };
    default:
      return defaultState
  }
}