import React from 'react';
// Statefulcomponent StatelessComponent
import Search from './Search';
import Results from './Results';
import Header from "./Header";

class Main extends React.Component {
    // 集列表 搜索一体 怎么做？
    constructor(){
        super();
        this.state = {
            beers:[],
            loading: true   // 正在加载中 优化体验
        }
    }

    // URL 不一样
    componentDidMount() {
        //  /, 根目录 把所有啤酒都查出来
        //  /search/:searchTerm, 就查searchTerm
        console.log(this.props);
        console.log(this.props.match.params);
        const params = this.props.match.params || {}; // 两种状况 优化
        const searchTerm = params.searchTerm || undefined;  // // 两种状况 优化
        this.loadBeers(searchTerm);
    }

    // 更新声明周期
    componentDidUpdate(prevProps) {
        // console.log('did update');
        // 把上次的值拿出来
        // console.log(prevProps);
        const currentSearchTerm = this.props.match.params.searchTerm;   // 拿到新的参数
        const oldSearchTerm = prevProps.match.params.searchTerm;
        // console.log(oldSearchTerm,currentSearchTerm);
        if (currentSearchTerm !== oldSearchTerm) {
            this.loadBeers(currentSearchTerm);
        }
    }
    //  = hops 在业务上有什么用?
    //  es6 概念 默认赋值 
    // ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
    loadBeers(searchTerm = "hops") {
        const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
        if (localStorageBeers){
            // 拿出来的是 JSON 格式
            const localBeers = JSON.parse(localStorageBeers);
            this.setState({
                loading:false,
                beers: localBeers
            })
            return ;
        }
        // console.log(searchTerm);
        fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`) // api地址
        .then(data => data.json())
        .then(data => {
            const beers = data.data || [];
            this.setState({
                loading:false,
                beers: beers
                // es6 简写 key 和 value 一样可以省成 beers
            })
            // 业务能力 
            // 与列表记录相关 根据searchTerm 变化
            localStorage.setItem(
                // 前面名字与模块相关
                `search-${searchTerm}`,
                // 存的是字符串
                JSON.stringify(this.state.beers)
            )
            console.log(data);
        })
    }

    render() {
        return(
            <React.Fragment>
                <Header siteName="Beer me!"></Header>
                <Search />
                {/* 搜索组件 */}
                <Results beers={this.state.beers} loading={this.state.loading} />
            </React.Fragment>
        )
    }
}

export default Main;