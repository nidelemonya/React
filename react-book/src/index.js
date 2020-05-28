import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// class LikeButton extends Component {
//   static defaultProps = {
//     likedText: '取消',
//     unlikedText: '点赞'
//   }

//   constructor () {
//     super() // 父类构造函数先执行
//     this.state = { isLiked: false }
//   }

//   handleClickOnLikeButton () {
//     // console.log(this.state.isLiked)
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//     // console.log(this.state.isLiked)
//     // this.setState({ count: 0 }) // => this.state.count 还是 undefined
//     // this.setState({ count: this.state.count + 1}) // => undefined + 1 = NaN
//     // this.setState({ count: this.state.count + 2}) // => NaN + 2 = NaN
//     // this.setState((prevState) => {
//     //   return { count: 0 }
//     // })
//     // this.setState((prevState) => {
//     //   return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
//     // })
//     // this.setState((prevState) => {
//     //   return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
//     // })
//     // console.log(this.state.count);
//   }

//   render () {
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         {this.state.isLiked ? '取消' : '点赞'} 👍
//       </button>
//     )
//   }
// }

// class Index extends Component {
//   render () {
//     return (
//       <div>
//         <LikeButton />
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Index />,
//   document.getElementById('root')
// )

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


















const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

class User extends Component {
  render () {
    const { user } = this.props;
    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <hr />
      </div>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        {/* 通过 props 把 user 数据作为组件的配置参数传进去 */}
        {users.map((user,i) => <User key={i} user={user} />)}
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)