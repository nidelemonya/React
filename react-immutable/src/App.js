import React from 'react';
// lodash 集合 被封装进去了
// Map 转换的时候 只会对最外层的结构转换
import { Map, fromJS } from 'immutable'
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
// 原生的 js 结合 react 怎么写 不变的代码
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loginInfo: {
        userName: null
      },
      posts: [{content :1}],
      userInfo: fromJS({
        name:'xiaoming',
        skills: {
          excellent: ['react'],
          practice: ['vue']
        },
        age:18
      })
    }
  }
  componentDidMount() {
    setTimeout(() => {
    // const { posts } = this.state;
    // posts.push({ content: 2});
    // 浅拷贝出来一份， 不在原来的数据上进行增删改查
    const posts = this.state.posts.slice(0);
    // 这样可能会因为嵌套太复杂会出现 setState 更新数据了，但是页面不重新渲染 => 看它符不符合不可变的思想 是否保证了新数据和原始数据是两份不同的数据
    const newUserInfo = this.state.userInfo.set('name', 'xiaohua')
    posts.push({ content: 2 });
    const loginInfo = {
      ...this.state.loginInfo,
      userName: '小李'
    }
    console.log(this.state.userInfo.getIn(['skills','excellent'])); // -> 使用 fromjs 会变成 list 结构
    console.log(this.state.userInfo);
    let excellentSkills = this.state.userInfo.getIn(['skills','excellent']);
    // push 不是对原来这份数据进行更新
    // 这里是一份新的数据
    let newexcellentSkills = excellentSkills.push('js')
    const useInfo1= this.state.userInfo.setIn(['skills','excellent'],newexcellentSkills);// 对象上的路径
    console.log(this.state.userInfo
      .getIn(['skills', 'practice']) === useInfo1.getIn(['skills', 'practice']));
    this.setState( {
    posts,
    loginInfo,
    userInfo:  useInfo1
    // newUserInfo
    })
  },3000) }
  render() {
    const { loginInfo, posts, userInfo } = this.state;
    const skill = userInfo.getIn(['skills','excellent']);
    return (
      <React.Fragment>
        { loginInfo.userName + posts.length }
        name: { userInfo.get('skills') }
        { skill.map((s,i)=> {
          return (
          <li key={i}>{s}</li>
          )
        })}
      </React.Fragment>
    )
  }
}

export default App;
