import { GET_HOME_LIST } from '../constants';
// 一个action 应该是一个对象
// {
//
// type: 'GET_ HOME_ LIST' ,
// xxx:
// }
// redux 中间件: 不同的act ion,
// redux-thunk: 函数
export const getHomeList = {
    type: GET_HOME_LIST,
    homeList: [0,1,2,3]
  }
// dispatch({

// })
// dispatch(function() {

// })