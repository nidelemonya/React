import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentList from './CommentList';

export default class CommentApp extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="wrapper">
                    {/* CommentApp */}
                    {/* CommentInput*/}
                </div>
                <CommentList/>
            </React.Fragment>
        )
    }
}