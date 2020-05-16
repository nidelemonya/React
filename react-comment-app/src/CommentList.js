import React, { Component } from 'react';
import Comment from './Comment'
class CommentList extends Component {
    render() {
        console.log(this.props,'+++');
        let { comments } = this.props;  // 在下面不用 this.props.comments
            /* {} 进入js 执行区域*/
            // key 性能要求
            // <div key ={i}>
            //     {comment.username}:{comment.content}
            // </div>
        return (
            <div>
                { comments.map((comment,i)=> <Comment comment={comment} key={i}/>)}
            </div>
        )          
    }
}

export default CommentList;