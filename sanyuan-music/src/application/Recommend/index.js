import React, { useEffect, useState, memo } from 'react';
// memo 缓存组件
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators';

function Recommend(props) {
    const { recommendList, banners, enterLoading} = props;
    const { getRecommendListDataDispatch, getBannerDataDispatch } = props
    useEffect(()=> {
        // 如果没有数据 则请求一次
        if (!recommendList.length) {
            getRecommendListDataDispatch();
        }
        if (!banners.length) {
            getBannerDataDispatch();
        }
    },[])
    // 加个空数组 防止一直刷新
    console.log(recommendList, banners, enterLoading);
    return (
        <React.Fragment>
            Recommend
        </React.Fragment>
    )
}
const mapStateToProps = (state) => ({
    recommendList: state.recommend.recommendList,
    banners:state.recommend.banners,
    enterLoading:state.recommend.enterLoading
})
const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendListDataDispatch() {
            dispatch(actionTypes.getRecommendList())
        },
        getBannerDataDispatch() {
            dispatch(actionTypes.getBanners())
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))