import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { homeListActionCreater } from '../../store/actions/home';
import { fromJS } from 'immutable';
class Home extends Component {
    componentDidMount() {
        this.props.fetchHomeList();
    }
    state = {}
    render() {
        // console.log(this.props.homeList)
        return (
            <div>
                Home
                {/* 整个数据都是 immutable 所以要用size获取长度 */}
                length: { this.props.homeList.size}
            </div>
        );
    }
}
// 获取数据
// state: 整个store, home页面，只要home模块， 过滤一下
// 过滤完结果(return) 都会由connect 传给你组件的 props
// 组件 之中 逻辑很少

const mapStateToProps = (state) => {
    console.log(state);
    // 现在全体的数据都是 immutable
    return {
        homeList: state.getIn(['home', 'homeList'])
    }
}
// 用户 操作 UI 引起页面变化
// 发起一个 action
// dispatch 行为 connect 传给 组件
const mapDispatchToProps = (dispatch) => {
    return {
        fetchHomeList() {
            // 请求
            axios.get('/home/home.json')
            // 通过拦截器，所以不用判断状态码
                .then(res => {
                    console.log(res);
                    const homeList = res.data;
                    // homeList 传到 action 那一步
                    // getHomeList.homeList = fromJS(homeList);
                    // 请求回来的数据 和 redux action
                    let action = homeListActionCreater(fromJS(homeList))
                    dispatch(action);
                })
        },
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);