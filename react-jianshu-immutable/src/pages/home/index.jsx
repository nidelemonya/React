import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../../store/actions/home';
class Home extends Component {
    componentDidMount() {
        this.props.fetchHomeList();
    }
    state = {  }
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

const mapStateToProps = (state) => {
    // console.log(state);
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
            dispatch(getHomeList);
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Home);