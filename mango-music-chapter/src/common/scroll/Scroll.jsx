import React from 'react';
// 常用的 好的包
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'
import BScroll from 'better-scroll';
import './scroll.styl';
// 容器, 父组件

class Scroll extends React.Component {
    componentDidMount() {
        this.scrollView = ReactDom.findDOMNode(this.refs.scrollView); //找一下 dom 节点
        // console.log(this.scrollView);
        if (!this.bScrpll) { // 防止多次渲染 单例
            this.bScrpll = new BScroll(this.scrollView, {
                probeType: 3,
                click: this.props.click
            })
            if(this.props.onScroll) {
                this.bScrpll.on('scroll',(scroll) =>{
                    this.props.onScroll(scroll);
                })
            }
        }
    }
    refresh() {
        if(this.bScrpll) {
            this.bScrpll.refresh();
        }
    }
    render() {
        console.log(this.props.children);
        return(
            <div className="scroll-view" ref="scrollView">
            {this.props.children}
        </div>
        )
    }
}

Scroll.defaultProps = {
    click: true,
    onScroll: null,
    refresh: false
}
Scroll.prototypes = {
    click: PropTypes.bool,
    onScroll:PropTypes.func,
    refresh: PropTypes.bool
}

export default Scroll;