import React, { useEffect, useState, memo } from 'react';
// memo 缓存组件
import { connect } from 'react-redux';

function Recommend(props) {
    const { recommendList } = props;
    console.log(recommendList);
    return (
        <React.Fragment>
            Recommend
        </React.Fragment>
    )
}
const mapStateToProps = (state) => ({
    recommendList: state.recommend.recommendList
})
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))