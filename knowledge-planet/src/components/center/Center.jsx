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
                image:'http://dmimg.5054399.com/allimg/pkm/pk/13.jpg',
                state:1,
            },
            {
                title:'畅聊科技教育',
                name:'刘凤飞(果果老师)',
                image:'http://dmimg.5054399.com/allimg/pkm/pk/13.jpg',
                state:1,
            },{
                title:'前端小课堂',
                name:'路佳',
                image:'http://dmimg.5054399.com/allimg/pkm/pk/13.jpg',
                state:0,
            },{
                title:'旅梦开发团',
                name:'喻顺武 旅梦开发团',
                image:'http://dmimg.5054399.com/allimg/pkm/pk/13.jpg',
                state:0,
            }
        ]}
    }
    createNewTab () {
        this.props.history.push('./create');
    }
    componentDidMount() {
        console.log(...this.state.list);
        localStorage.setItem('list',JSON.stringify(this.state.list));
    }
    render() {
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
                    </div>
                </div>
            </div>
         );
    }
}

const Centers =  withRouter(Center)
export default Centers;