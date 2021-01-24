import React, { useState, useEffect } from "react";
import CommentCard from "./components/commentCard";
import "./Comment.css";

function Comment() {
  const [commentList, updateCommentList] = useState([]);

  useEffect(() => {
    // 请求数据
    fetch("https://y1r2isxfb2.execute-api.us-east-1.amazonaws.com/comments")
      .then((res) => res.json())
      .then((res) => {
        updateCommentList(res.data);
      });
  }, []);
  // console.log(commentList);
  return (
    <div className="comment">
      {commentList.map((item) => (
        <CommentCard
          key={item.id}
          avatar={item.avatar}
          content={item.content}
          createTime={item.create_time}
          duration={item.duration}
          nickName={item.nickname}
          quote={item.quote}
        />
      ))}
    </div>
  );
}

export default Comment;
