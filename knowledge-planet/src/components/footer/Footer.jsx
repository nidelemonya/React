import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export default function Footer(props) {
    const { tag } = props;
    console.log(props);
    return (
        <div className="tab-bar">
            <div className="tab icon1">
                <span className="icon iconfont icon-iconset0456"></span>
                <p className="tag">{tag.tag1}</p>
            </div>
            <div className="tab">
                <span className="icon iconfont icon-xiaoxi-"></span>
                <p className="tag">{tag.tag2}</p>
            </div>
            <div className="tab">
                <span className="icon iconfont icon-danyehuaban"></span>
                <p className="tag">{tag.tag3}</p>
            </div>
            <div className="tab">
                <span className="icon iconfont icon-wo"></span>
                <p className="tag">{tag.tag4}</p>
            </div>
        </div>
    )
}





  
Footer.PropType = {
    tag: PropTypes.object.isRequired
}