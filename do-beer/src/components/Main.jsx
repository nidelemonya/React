import React from 'react';
// Statefulcomponent StatelessComponent
import Search from './Search';
import Results from './Results';

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
    //  = hops 在业务上有什么用?
    //  es6 概念 默认赋值 
    // ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
    loadBeers(searchTerm = "hops") {
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
            console.log(data);
        })
    }

    render() {
        return(
            <React.Fragment>
                <Search />
                {/* 搜索组件 */}
                <Results beers={this.state.beers} loading={this.state.loading} />
            </React.Fragment>
        )
    }
}

export default Main;