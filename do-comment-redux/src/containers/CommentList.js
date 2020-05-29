//  向仓库申请 使用 数据 comments
import React, { Component } from 'react';
// 申请连接
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';

class CommentListContainer extends Component{
    render(){
        // console.log(this.props.comments);
        return (
            <CommentList
                comments={this.props.comments}
            />
        )
    }
}

// state 是 redux 给你的 状态
// 将状态映射到 props 中
const mapStateToProps = (state) =>{
    return{
        comments:state.comments
    }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleteComment: (commentIndex) => {
//       dispatch(deleteComment(commentIndex))
//     }
//   }
// }
  
export default connect(
    mapStateToProps,
    // mapDispatchToProps
)( CommentListContainer)