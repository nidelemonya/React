import React, { Component } from 'react'; // 按需加载 es6 解构
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// react 面向对象
class CommentApp extends Component {
    constructor(){
        super(); // 表示父类的构造函数先执行
        this.state = {
            comments:[{
                username:'巧纯',
                content:'今天天气真好'
            },
            {
                username:'管管',
                content:'我们去逛街把'
            },
            {
                username:'某富婆',
                content:'咱们一起去'
            }]
        }
    }
    render() { // 接口
        const {comments} = this.state
        return (
            <div className="wrapper">
                {/* onSubmit 事件监听函数? */}
                {/* <a href=""onClick></a> 叫什么? state props*
                react 组件 render负责页面输出, state 内部数据 props 外部数据/}
                {/* onSubmit={this.handleSubmitComment.bind(this)} 叫做props, 外部传入的数据  传递给 CommentInput 之中*/}
                {/* <CommentInput a ="1" onSubmit={this.handleSubmitComment.bind(this)}/>   a="1" 也是 props */}
                <CommentInput  onSubmit={this.handleSubmitComment.bind(this)}/>
                {/* bind 生成一个新的函数  使this 指针指向当前的对象*/}

                {/* 用户新提交了评论怎么办 */}
                {/* 伸手向父组件要什么？ 1.静态页面 2.动态化的，state  props 显示评论列表 -> 评论内容 */}
                {/* json 数组 */}
                <CommentList comments={comments}/>
            </div>
        )
    }
    handleSubmitComment(comment){
        // console.log(comment);
        // let {comments} = this.state;    // 解构 oldstate
        // // 插入到首部
        // comments.unshift(comment);
        // this.setState({
        //     comments: comments
        // })
        // console.log(comments,'插入成功');
        this.setState({
            comments:[comment,...this.state.comments]   //展开运算符
        })
    }
}

export default CommentApp;