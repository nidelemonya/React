import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Center.css'
class Center extends Component {
    constructor() {
        super();
        this.state = {
            list:[
            {
                title:'视界',
                name:'顾中正',
                image:'http://pic.netbian.com/uploads/allimg/200713/223214-159465073418c4.jpg',
                state:1,
            },
            {
                title:'畅聊科技教育',
                name:'刘凤飞(果果老师)',
                image:'http://pic.netbian.com/uploads/allimg/200713/223214-159465073418c4.jpg',
                state:1,
            },{
                title:'前端小课堂',
                name:'路佳',
                image:'http://pic.netbian.com/uploads/allimg/200713/223214-159465073418c4.jpg',
                state:0,
            },{
                title:'旅梦开发团',
                name:'喻顺武 旅梦开发团',
                image:'http://pic.netbian.com/uploads/allimg/200713/223214-159465073418c4.jpg',
                state:0,
            }
        ]}
    }
    createNewTab () {
        this.props.history.push('./create');
    }
    componentDidMount() {
        // console.log(...this.state.list);
        // 如果 localStorage 里面有数据了， 就不用存了， 直接返回
        if(localStorage.getItem('list')) return
        // 如果 localStorage 没有数据，初始化存一次
        localStorage.setItem('list',JSON.stringify(this.state.list));
    }
    render() {
        console.log('getItem',JSON.parse(localStorage.getItem('list')))
        // 判断本地 localStorage 有没有数据 有就用本地的 没有就用 this.state.list
        const  list  = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : this.state.list
        return ( 
            <div className="box-wrapper">
                {list.map((m,i)=>{
                    return (
                        <div key ={i} className="box">
                            <div className="img-box">
                                <img src={m.image} alt={m.name}></img>
                            </div>
                            <div className="box-title">{m.title}</div>
                            <div className="box-line"></div>
                            <span className="box-name">{m.name}</span>
                        </div>
                    )
                })}
                <div className="box box1">
                    <div className="img-box" onClick={this.createNewTab.bind(this)}>
                        <div className="plus-box iconfont icon-mui-icon-add"></div>
                        <div className="box-title">创建星球</div>
                    </div>
                </div>
            </div>
         );
    }
}

const Centers =  withRouter(Center)
export default Centers;