import React from "react";
import PropTypes from "prop-types";

import "./index.css";

function CommentCard(props) {
  // create_time 创建时间
  // duration 持续时间
  // 我认为文档中两个是给反了， 所以调换了位置
  const { avatar, content, createTime, duration, nickName, quote } = props;

  // 在真实项目中一般用 moment.js 这里我直接用自己写的方法了
  const timeFormat = (str) => {
    const time = new Date(str);
    const h = time.getHours();
    const mm = time.getMinutes();
    const s = time.getSeconds();

    const fillZero = (m) => {
      return m < 10 ? `0${m}` : m;
    };
    return fillZero(h) + ":" + fillZero(mm) + ":" + fillZero(s);
  };
  return (
    <div className="cardWrap">
      <div className="topWrap">
        <span className="duartionBox">{timeFormat(createTime)}</span>
        <span className="sprateLine"></span>
        <span className="quoteBox">{quote}</span>
      </div>
      <div className="centerWrap">
        <div className="imgWrap">
          <img className="img" src={avatar} alt={nickName} />
        </div>
        <div className="nameWrap">
          <div className="nickName">{nickName}</div>
          <div className="createTime">{Math.floor(duration / 60)} mins ago</div>
        </div>
      </div>
      <div className="bottomWrap">
        <span>{content}</span>
      </div>
    </div>
  );
}

CommentCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  nickName: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default CommentCard;
