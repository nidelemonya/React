import React, { Component } from 'react';
import './App.css';
import { Tabs, Table } from 'antd'
import axios from 'axios'
import './mock/data.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tabs1: [],
      tabs2: [],
      lesson: [],
      allLesson: [],
      overValue: 0,
      tabValue: 0
    }
  }
  componentDidMount() {
    this._loadData();
  }
  async _loadData() {
    axios.get('/allLessons/').then(res => {
      console.log(res.data);
      this.setState({
        tabs1: res.data.tab1,
        tabs2: res.data.tab2,
        allLesson: res.data.list,
        lesson: res.data.list,
        lesson1: res.data.list
      });
      // console.log('------------',this.state.allLesson);
    })
  }
  callback1 = (e) => {
    this.setValue1(e);
  }
  setValue1 = (e) => {
    console.log(e);
    console.log(this.state.tabs1[e].value);
    // this.setState({
    //   overValue: this.state.tabs1[e].value
    // })
    this.reRender(this.state.tabs1[e].value);
  }
  reRender = (a) => {
    // 默认数据
    if(a === 0) {
      this.setState({
        lesson: this.state.allLesson,
        // 返回所有数据
      })
    } 
    if(a === 1 || a===2){
      this.setState({
        lesson: this.state.allLesson.filter(item => // item.over 是 全部 已完成 未完成
              (item.over === a )),
        lesson1: this.state.allLesson.filter(item => // item.over 是 全部 已完成 未完成
                (item.over === a ))
      })
    }
  }
  reRender1 = (b) => {
    // 默认数据
    if(b === 0) {
      this.setState({
        lesson: this.state.lesson1
        // 返回所有数据
      })
    } 
    if(b === 1 || b===2|| b===3|| b===4|| b===5){
      this.setState({
        lesson: this.state.lesson1.filter(item => // item.over 是 全部 已完成 未完成
              (item.tab === b ))
      })
    }
  }
  callback2 = (e) => {
    this.setValue2(e)
  }
  setValue2 = (e) => {
    this.reRender1(this.state.tabs2[e].value);
  }

  render() {
    console.log(this.state.overValue, this.state.tabValue)
    // console.log(this.state.allLesson)
    const columns = [
      {
        title: 'Image',
        dataIndex: 'avatar',
        key: 'image',
        render: src => <img src={src} />,
      }, {
        title: 'Name',
        dataIndex: 'title',
        key: 'Name'
      },
      {
        title: 'Name',
        dataIndex: 'over',
        key: 'over'
      }, 
      {
        title: 'Name',
        dataIndex: 'tab',
        key: 'tab'
      }, {
        render: () => <button>开始学习</button>
      }
    ];
    const { TabPane } = Tabs;
    // console.log(this.state)
    // console.log(this.state.lesson, '+++++++++++++++')
    return (
      <div className="App">
        <header>我的课程</header>
        <Tabs defaultActiveKey="1" 
        // 
        // 修改之处 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        onChange={this.callback1.bind(this)}>
        {/*  */}
        {/*  */}
          {
            this.state.tabs1.map((item, index) => {
              return (
                <TabPane tab={item.name} key={index}>
                </TabPane>
              )
            }
            )
          }

        </Tabs>
        <Tabs defaultActiveKey="1" type="card" onChange={this.callback2}>
          {
            this.state.tabs2.map((item, index) => {
              return (
                <TabPane tab={item.name} key={index} value={item.value} >
                </TabPane>
              )
            })
          }
        </Tabs>
        <Table columns={columns}
               dataSource={this.state.lesson}
               showHeader={false}
        /> 
      </div>
    );
  }
}

export default App;
