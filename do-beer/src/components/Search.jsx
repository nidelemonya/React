import React from 'react';
import PropTypes from 'prop-types';

// Statefulcomponent StatelessComponent
// Main.js 传入
class Search extends React.Component {
    // 静态属性
    static contextTypes= {
        router: PropTypes.object.isRequired
    }
    // public 属性 react 不能进行dom操作  querySelector
    searchRef = React.createRef();

    // 箭头函数 this指向外层 这里直接指向组件本身
    handleSubmit = (e) => {
        // 阻止事件的默认行为
        e.preventDefault();
        // 1. 拿到用户输入的内容
        const searchTerm = this.searchRef.current.value;
        console.log(this.context);
        // console.log(this, '----------------');
        // 2. 路由重新导到用户搜索的路径
        this.context.router.history.push(`/search/${searchTerm}`);
        // history 历史记录 一个栈
    }

    render() {
        console.log(this.searchRef);

        return(
            // 表单
            <div className="search">
                {/* 法1： 使用bind函数 重新绑定this指向 */}
                {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
                {/* 法2： 改成箭头hans*/}
                <form onSubmit={this.handleSubmit}>
                {/* ref 属性 这里相当于一个id选择器 这里将 searchRef与这个输入框绑定*/}
                    <input type="text" ref={this.searchRef} placeholder="Hoppy, Malt, Angry, New..."/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

export default Search;