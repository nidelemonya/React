import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Create.css';
class Create extends Component {
    constructor() {
        super();
        this.state = {
            list:[
            {
                title:'视界',
                name:'顾中正',
                image:'http://pic.netbian.com/uploads/allimg/200713/223214-159465073418c4.jpg',
                state:1,
            }
        ]}
    }
    onBack() {
        window.history.back();
    }
    getText(e){
        // console.log(e.target.value)
        // this.setState({
        //     list[0]:title:[]
        // })
    }
    onNext() {
        localStorage.setItem('ab',JSON.stringify(this.state.list));
        this.props.history.push('/');
    }
    render() {
        console.log(this.state.list)
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