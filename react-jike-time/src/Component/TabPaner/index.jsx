import React, { Component } from 'react';
import { Tabs } from 'antd';
import Tab from '../Tab'
import axios from 'axios';

const { TabPane } = Tabs;

class TabPaner extends Component {
    constructor() {
        super()
        this.state = {
            list: '',
        }
    }
    handleTagChange(key) {
        let tag
        switch (key) {
            case '1': tag = '所有形式'; break;
            case '2': tag = '专栏'; break;
            case '3': tag = '视频课'; break;
            case '4': tag = '微课'; break;
            case '5': tag = '每日一课'; break;
            case '6': tag = '其他'; break;
            default: tag = '所有形式'
        }
        if (tag === '所有形式') {
            this.setState({
                list: this.props.list
            })
        }
        else {
            let result = this.props.list.filter(e => (e.tag === tag))
            // console.log(result);
            this.setState({
                list: result
            })
        }
    }
    render() {
        // console.log(this.props);
        const props = {
            list: this.state.list === '' ? this.props.list : this.state.list
        }
        return (
            <Tabs onChange={this.handleTagChange.bind(this)} type="card" >
                <TabPane tab="所有形式" key="1">
                    <Tab {...props} />
                </TabPane>
                <TabPane tab="专栏" key="2">
                    <Tab {...props} />
                </TabPane>
                <TabPane tab="视频课" key="3">
                    <Tab {...props} />
                </TabPane>
                <TabPane tab="微课" key="4">
                    <Tab {...props} />
                </TabPane>
                <TabPane tab="每日一课" key="5">
                    <Tab {...props} />
                </TabPane>
                <TabPane tab="其他" key="6">
                    <Tab {...props} />
                </TabPane>
            </Tabs>
        );
    }
}

export default TabPaner;