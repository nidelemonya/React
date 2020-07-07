import React, {Component} from 'react';
import './App.css';
// 数据跟组件是分离的
import axios from 'axios';
import './mock/data.js';
import { Table } from 'antd';

// JSX UI State MVVM 行为 面向对象oo

// 函数的返回值是组件
// /posts/ axios api请求的 url
// Post 组件作为参数 高阶组件
// es6 写法
// 通用性的提供数据请求及更新的解决方案

class Post extends Component {
  render() { 

    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      { title: 'Address', dataIndex: 'address', key: 'address' },
      { title: 'title', dataIndex: 'title', key: 'title' },
      { title: 'email', dataIndex: 'email', key: 'email' },
      { title: 'id', dataIndex: 'id', key: 'id' },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
      },
    ];

    const data = this.props.list;

    return (
    <div>
     <p>{this.props.msg}</p>
     <p>{this.props.content}</p>
     <Table
          columns={columns}
          expandable={{
            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
            rowExpandable: record => record.name !== 'Not Expandable',
          }}
          dataSource={data}
        />
    </div>);
  }
}

class Comment extends Component {
  render() { 
    return (
    <div>
      comment
    </div>);
  }
}
 

const loadAndRefresh =  (url) => (WrappedComponent) =>{
  // 返回组件
  // react 可以定义没有类名的类
  return class extends Component {
    constructor(){
      super();
      this.state = {
        msg:'',
        content:'',
        list:''
      }
    }

    componentDidMount(){
      // axios 管住数据请求
      this._loadData();
    }

    async _loadData() {
      this.setState({
        msg:'数据加载中...'
      });
      axios.get(url).then(res=>{
        console.log(res.data);
        this.setState ({
          msg : res.data.title,
          content : res.data.content,
          list: res.data.list
        })
      })
    }

    render() { 
      const props = {
        msg:this.state.msg,
        content:this.state.content,
        list: this.state.list
      }

      return (
        <WrappedComponent {...props}>
        </WrappedComponent>
      );
    }
  }
}


const WrappedPost = loadAndRefresh('/posts')(Post);
const WrappedComment = loadAndRefresh('/comments')(Comment);

function App() {
  return (
    <div className="App">
      {/* message */}
      {/* <Post/> */}
      <WrappedPost />
      {/* <WrappedComment /> */}
    </div>
  );
}

export default App;
