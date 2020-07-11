import React, { Component } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import TabPaner from '../TabPaner'

const { TabPane } = Tabs;

class TabPan extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      list: [],
      list1: []
    }
  }
  componentDidMount() {
    axios.get('/all').then(res => {
      // console.log(res.data);
      this.setState({
        title: res.data.title,
        list: res.data.list,
        list1: res.data.list
      })
    })
  }

  handleTabChang(key) {
    // console.log(typeof key,key);
    let state
    switch (key) {
      case '1': state = 'all'; break;
      case '2': state = '未学完'; break;
      case '3': state = '已学完'; break;
      default: state = 'all'
    }
    if (state === 'all') {
      this.setState({
        list1: this.state.list
      })
    }
    else {
      let lists = this.state.list.filter(e => (e.state === state))
      this.setState({
        list1: lists
      })
    }
  }

  render() {
    const props = {
      list: this.state.list1
    }
    // console.log(props)
    return (
      <Tabs defaultActiveKey="1" onChange={this.handleTabChang.bind(this)}>
        <TabPane tab={`全部  (${this.state.list.length})`} key="1">
          <TabPaner  {...props} />
        </TabPane>
        <TabPane tab="未学完" key="2">
          <TabPaner {...props} />
        </TabPane>
        <TabPane tab="已学完" key="3">
          <TabPaner {...props} />
        </TabPane>
      </Tabs>
    );
  }
}

export default TabPan;