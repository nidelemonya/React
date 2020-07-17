import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './Header.css';

function Header(props) {
    function createNewTab () {
        props.history.push('./create');
    }
    const { title } = props;
    // console.log(props);
    return (
        <div className="header">
            <span className="title">{title}</span>
            <span className="plus_icon iconfont icon-jiahao" onClick={createNewTab}></span>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const Headers =  withRouter(Header)
export default Headers