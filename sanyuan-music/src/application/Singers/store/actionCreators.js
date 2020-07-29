import {
    getHotSingerListRequest,
    getSingerListRequest
  } from "../../../api/request";
  
// 如果你没有选择分类或 alpha useEffect()
// export const getHotSingerList = () => {
  //   return (dispatch) => {
  //     getHotSingerListRequest(0).then(res => {
  //       const data = res.artists;
  //       dispatch(changeSingerList(data));
  //       dispatch(changeEnterLoading(false));
  //       dispatch(changePullDownLoading(false));
  //       dispatch(changeListOffset(data.length));
  //     }).catch(() => {
  //       console.log('热门歌手数据获取失败');
  //     })
  //   }
  // }

// export const refreshMoreHotSingerList = () => {
//     return (dispatch, getState) => {
//       const offset = getState().getIn(['singers', 'listOffset']);
//       const singerList = getState().getIn(['singers', 'singerList']).toJS();
//       getHotSingerListRequest(offset).then(res => {
//         const data = [...singerList, ...res.artists];
//         dispatch(changeSingerList(data));
//         dispatch(changePullUpLoading(false));
//         dispatch(changeListOffset(data.length));
//       }).catch(() => {
//         console.log('热门歌手数据获取失败');
//       });
//     }
//   };