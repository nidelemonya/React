import React, { Component } from 'react';
import { Table, Button } from 'antd';
class Tab extends Component {
  render() {
    const { list } = this.props;
    // console.log(this.props);
    const columns = [
      {
        title: '',
        dataIndex: '',
        key: 'image',
        render: (e) => <img src={e.image}></img>,
      },
      {
        title: '',
        dataIndex: 'title',
        key: 'title',
        render: (e, res) =>
          <div>
            <h4>{e}</h4>
            <h5>共{res.total}讲 | 已学 {res.state !== '已学完' ? res.already : res.total}讲 | 学完 {res.state !== '已学完' ? Number((res.already / res.total) * 100).toFixed(0) : 100}%</h5>
          </div>,
      },
      { title: '', dataIndex: 'tag', key: 'tag' },
      {
        title: '',
        dataIndex: '',
        key: 'x',
        render: () => <Button className="btn" type="primary">开始学习</Button>,
      },
    ];
    return (
      <Table
        columns={columns}
        dataSource={list}
      />
    );
  }
}

export default Tab;