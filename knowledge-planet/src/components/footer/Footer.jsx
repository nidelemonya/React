import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export default function Footer(props) {
    const { tag } = props;
    console.log(props);
    return (
        <div className="tab-bar">
            <div className="tab">
                <div className="iconfont icon-iconset0456"></div>
                <div className="tag">{tag.tag1}</div>
            </div>
            <div className="tab">
                <div className="iconfont icon-xiaoxi-"></div>
                <div className="tag">{tag.tag2}</div>
            </div>
            <div className="tab">
                <div className="iconfont icon-danyehuaban"></div>
                <div className="tag">{tag.tag3}</div>
            </div>
            <div className="tab">
                <div className="iconfont icon-wo"></div>
                <div className="tag">{tag.tag4}</div>
            </div>
        </div>
    )
}

Footer.PropType = {
    tag: PropTypes.object.isRequired
}