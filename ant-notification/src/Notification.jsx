import React from 'react';
import ReactDom from 'react-dom';
class Notification extends React.Component {
  // class 属性
  state = {
    visiable: true,
    title:null
  }
  open = ({ title }) => {
      this.setState({
          visiable:true,
          title
      })
  }
  close = () => {
    this.setState({
        visiable:false
    })
}
  render() {
    const { visiable, title } = this.state;
    // const { children } = this.props;
    return (
       <div className={visiable ? 'show': 'hidden'} >
           {/* { children } */}
           { title }
       </div>
    );
  }
}
// 类
// 也要 new Notification()
// 生成实例这一步 被 react 封装起来了
function createNotification() {
    const div = document.createElement('div');
    const ref = React.createRef();
    // ref = { current: }
    // ref 属性： 拿到 类上面的实例
    // 有了 实例 能调用它上面的方法
    // ref.current = new Notification(); 相当于 new 了一个新的实例
    // ref.current.open
    // ref.current.close
    // Notification 类内部 state 发生改变 页面重新渲染
    ReactDom.render(<Notification ref={ref}/>, div);
    document.body.appendChild(div);
    return {
        open: ref.current.open,
        close: ref.current.close
    }
}
let notification = null;
if (!notification){
    const { open,close } = createNotification();
    notification = {
        open,
        close
    }
}
export default notification;
/**
* class Person {
* state = { visiable: false}
* open = () => this.state.state = true;
*}
* Let ref = { current }
* ref.current = new Person( )
* ref.current.opne()
* 一但 调用setState这个函数 组件状态state就发生改变  页面就会重新渲染
*/
