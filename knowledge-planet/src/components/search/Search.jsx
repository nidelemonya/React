import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="search">
                <div className="bn iconfont icon-icon-test"></div>
                <span className="inp">
                    <input text="text" placeholder="搜索用户、星球或内容"></input>
                </span>
            </div>
         );
    }
}
 
export default Search;