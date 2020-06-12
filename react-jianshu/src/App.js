import React from 'react';
import { fromJS } from 'immutable';
import ImmutableComponent from './components/common'
import logo from './logo.svg';
import Header from './components/Header'
import './App.css';

class App extends ImmutableComponent　{
    // 最外层数据 依然是个原生js 对象
    state = {
        title: fromJS([1,2,3,[2]]),
        content: fromJS('immutable'),
        value:fromJS( {
            a:1
        }) // '123' 本身就是不可变的
    }
    // 如果不能满足要求， 可以重写
    // shouldComponentUpdate() {

    // }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                title:fromJS([1,2,3,[2]]),
                content:fromJS('immutable'),
                value: fromJS({
                    a:1
                })
            })
        },3000)
    }
    render() {
        console.log('app render')
        return (
            <div>
                123456
                <Header title={this.state.title} />
            </div>
        )
    }
}

export default App;
