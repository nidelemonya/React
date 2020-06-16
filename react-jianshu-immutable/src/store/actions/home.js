import { GET_HOME_LIST } from '../constants';
// 严格来说，一个action 应该是一个对象
// {
//   type: 'GET_ HOME_ LIST',
//   xxx:'xxx'
// }

// redux 中间件: 支持不同的 action,
// redux-thunk: 支持 action 是一个函数 即dispatch的参数是一个函数
// 如下所示
// export const getHomeList = () => {

// }
// dispatch(function() {
//   axios
// })

export const getHomeList = () => {
  console.log(1);
  // type: GET_HOME_LIST,
  // homeList: [0, 1, 2, 3]
}

// dispatch({

// })
