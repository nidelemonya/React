import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Create.css';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            list:[],
            isInPut:false
        }
    }
    onBack() {
        window.history.back();
    }
    getText(e){
        // console.log(e.target.value)
        if (e.target.value === '') {
            this.setState({
                isInPut:false
            })
            return
        }
        else {
            this.setState({
                list:[{
                    title:e.target.value,
                    name:'顾中正',
                    image:'http://pic.netbian.com/uploads/allimg/200713/223214-159465073418c4.jpg',
                    state:1
                }],
                isInPut:true
            })
        }
    }
    onNext() {
        console.log(this.state)
        // 如果 没有输入东西 直接 return
        if (this.state.isInPut === false) return
        // 先取到 localStorage 中的数据
        let list = JSON.parse(localStorage.getItem('list')) || []; // || 运算的技巧
        // 将本地数据 push 到刚才的数组中
        list.push(...this.state.list)
        // 在将数据存入 localStorage
        localStorage.setItem('list',JSON.stringify(list))
        this.props.history.push('/');
    }
    render() {
        console.log(this.state)
        return ( 
            <div className='create-wrapper'>
                <div className="create-header">
                    <span className="cancel" onClick={this.onBack.bind(this)}>取消</span>
                    <div className="next" onClick={this.onNext.bind(this)}>下一步</div>
                </div>
                <div className="upload">
                    <div className="create-imgbox">
                        <img src="http://pic.netbian.com/uploads/allimg/200713/223214-159465073418c4.jpg" alt="star"></img>
                    </div>
                    <span className="iconfont camera"></span>
                </div>
                <div className='input-bar'>
                    <input type="text" placeholder='输入星球名称' onBlur={this.getText.bind(this)}/>
                </div>
            </div>
         );
    }
}
const Creates = withRouter(Create)
export default Creates;