import { axiosInstance } from './config';
// export const getRecommendListRequest = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({
//                 data:[{
//                     id:1,
//                     title:'sadasdsada'
//                 }]
//             })
//         }, 1000);
//     })
// }

// 项目所有请求API的列表文件
// 每个请求一个函数
// 每个函数都返回一个Promise

// api 与actions 的分离
// axiosInstance.get 返回是 Promise 

// 首页广告
export const getBannerRequest = () => {
    return axiosInstance.get("/banner");
}

// 推荐列表
export const getRecommendListRequest = () => {
    return axiosInstance.get("/personalized");
}

//歌手列表 支持分页 0-50-100  -> offset
// 接口请求规范 要传 offset
// reducer init = {singerList: [], offset: 0}
// useEffect dispatch getHotSingerList 异步
// -> getHotSingerListRequest API 请求
// then 
//     changeSingerList [] [..oldSingrList, ...data] 同步
//     changeOffset 0  data.length
// better-scroll baseUI scroll/index.js 上拉 触底 加载 更多

// 下拉刷新的时候 过程是怎么样的
// pullDown offset 0 changeOffset 0
// getHotSingerList -> getHotSingerListRequest(API) -> changeSingerList

// 前后端合作的要素
    // 1. 接口地址 url /top/artists 请求    RESTFUL 资源的暴露
    // 2. 传参要匹配
    // 3. 接口文档的东西 后端给           
export const getHotSingerListRequest = count => {
    return axiosInstance.get(`/top/artists?offset=${count}`);
}

// 歌手详情页 history.push() NavLink
export const getSingerInfoRequest = id => {
    return axiosInstance.get(`/artists?id=${id}`);
}