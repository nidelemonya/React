import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

// indect 注入
// 想要哪个页面的数据就注入谁
@inject('articleStore')
@observer
class Home extends Component {
    state = {  }
    render() { 
        return (
            <div>
                { this.props.articleStore.all.length}
            </div>
        );
    }
}
 
export default Home;