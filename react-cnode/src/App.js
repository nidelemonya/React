import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

// 页面
// 列表：/?tab=all
// 详情: /topic/
// 之前 let tab = 
// mv-vm
// view 视图
// model 数据 
// vm 是绑定的 model 变了 view 会自动更新
class App extends React.Component{
  constructor(){
    super();  // 表示父类的构造函数先执行
    this.state={
      value:"搜索",
      tabs:[
        {content:'全部', param:'all'},
        {content:'招聘', param:'job'},
        {content:'精华', param:'good'},
        {content:'分享', param:'share'},
        {content:'问答', param:'ask'}
      ],
      tab:'all',
      isLoading:true,
      lists:[] // 文章列表
    }
  }
  // 生命周期
  // App 被 reactDom 渲染到 pc 上
  // 渲染： 有一套流程 (生命周期)
  handleGetPost = ()=>{
    const { tab } = this.state; //解构
    // 总的条数 / 40 = 页数
    axios({
      url:'https://cnodejs.org/api/v1/topics',
      params:{
        tab:tab,
        page:1,
        limit:40,
      }
    })
    .then(res =>{
      // console.log(res.data)
      // 修改状态
      this.setState({
        lists: res.data.data,
        isLoading:false
      })
    })
    .catch(err =>{
      this.setState({
        isLoading:false
      })
    })
  }
  componentDidMount(){
    this.handleGetPost();
  }
  handleTabChange = (event) =>{
    // 箭头函数 this 定义的时候的位置决定的
    // 如何知道点了哪一项? 埋入 data-tab
    // 点了谁 谁就是event.target
    // console.log(event.target);
    const tab = event.target.getAttribute('data-tab');
    // 发个请求
    this.setState({
      tab,
      isLoading:true
    },() =>{
      // setState 异步
      this.handleGetPost();
    })
  }
  handleTextchange = (event)=>{
    console.log(event.target.value);
    this.setState({
      value:event.target.value
    })
  }
  render(){
    const { value,lists, tabs,tab,isLoading} = this.state;
    // view
    //js 表达式 都用 {} 包起来
    // 受控组件 value+ onChange， 输入框里面的内容受本组件里面的state 控制
    // 假如用户输入了什么？ this.state.value
    // 非受控组件
    // 假如取到用户输入了什么？ 取到我们 input 真实的 dom 节点, dom.value
    // 非受控 涉及到 dom 操作, 在现代前端框架不提倡 操作 DOM 了
    return(
      <div>
        {/* 受控组件 */}
        <input type="text" placeholder="搜索" value={value} onChange={this.handleTextchange}/>
        {/*  */}
        <input type="text" placeholder="搜索" defalutvalue="搜索" />
        {/* 加了 value 不能自由修改内容 */}
        {/* 加了 defaultvalue 可以自由修改内容 */}
        {/* react 不渲染 那些值为 false undefined null 的内容 */}
        {false}
        {undefined}
        {null}
        {/* 都不会加载上面的内容 */}
        {isLoading && '正在加载中...'}
        { lists.length === 0 && '暂无文章请重试'}
        { 
          tabs.map((tabObj,i)=>{
            return(
                <div key={i} data-tab={tabObj.param}
                className={tabObj.param === tab ? 'hight-light' :''}
                onClick={this.handleTabChange}>
                  {tabObj.content}
              </div>
            )
        })}
        {
          // map 返回一个数组, react 如果 jsx(html+js) 存在数组, react 会自己展开数组里面的每一项
          // 不建议用map循环 用forEach
          lists.map((list,i) =>{
            return (
              <div key={i}>
                {/* 凡是 js 表达式 都用 {} 包起来 */}
                {list.title}
              </div>
            )
          })}
      </div>
    )
  }
}
// 默认导出
export default App;
// 命名导出

// export const name = 'lilei';
