import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../../store/actions/home';
class Home extends Component {
    componentDidMount() {
        // 数据都通过 connect 传到了 props
        this.props.fetchHomeList();
    }
    state = {  }
    render() { 
        console.log(this.props);
        return ( 
            <div>
                Home
                Content: { this.props.homeList }
                Length: { this.props.homeList.length}
            </div>
         );
    }
}
// 获取数据
// state: 整个store, home页面，只要home模块的数据， 这个api的功能就是过滤一下，返回给你想要的数据。
// 过滤完结果 (return) 都会由 connect(高阶组件) 传给你组件的 props

const mapStateToProps = (state) => {
    return {
        homeList: state.home.homeList,
        a:1,
        b:2,
        c:3
    }
}
// 用户 操作 UI 引起页面变化
// 发起一个 action
// 把 dispatch 这个行为用 connect 传给 组件
const mapDispatchToProps = (dispatch) => {
    return {
        // 逻辑尽可能封装在这里
        fetchHomeList() {
            dispatch(getHomeList);
        }
    }
}
// 通过 connect 传给组件 相当于一个桥 connect 桥的功能
// redux -> 桥 -> react
// redux store -> react Provider 全局功能 每个组件都可以获取 
// 规定：获取 redux 里面的数据，必须用 mapStateToProps 的返回值，connect 返回值放到 props
export default connect(mapStateToProps,mapDispatchToProps)(Home);