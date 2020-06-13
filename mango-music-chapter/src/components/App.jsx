import React from 'react';
// router 是路由总管， 负责让我们的应用单业化
// Route 每个路由规则， path / component
// Switch 唯一
// NavLink a 标签的组件化， Link
// Redirect 从 / 跳转到 /recommend
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom'; // BrowserRouter as Router 便于其他人理解。
import Recommend from './recommend/Recommend';
import Ranking from './ranking/Ranking';
import Search from './search/Search';
import './App.styl'; // webpack
import logo from '../assets/imgs/logo.png';

// # 代表哈希 #代表我们要去的页面
// https:/ /music.163. com/#/my/　hashROuter　　兼容性更好
// https://y.music.163.com/m/ playlist?id=5010470270　historyRouter　url 更语义化

class App extends React.Component {
    render(){
        return (
            <Router>
                <div className="app">
                    {/* 不变的地方写一下 头部 导航 tabBar */}
                    <header className="app-header">
                        <img src={logo} alt="logo" className="app-logo"></img>
                        <h1 className="app-title">Mango Music</h1>
                    </header>
                    <div className="music-tab">
                        <div className="tab-item">
                            <NavLink className="nav-link" to="/recommend"><span>推荐</span></NavLink>
                        </div>
                        <div className="tab-item">
                            <NavLink className="nav-link" to="/ranking"><span>排行榜</span></NavLink>
                        </div>
                        <div className="tab-item">
                            <NavLink className="nav-link" to="/search"><span>搜索</span></NavLink>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/recommend" component={ Recommend }></Route>
                        <Route path="/ranking" component={ Ranking }></Route>
                        <Route path="/search" component={ Search }></Route>
                        <Redirect from="/" to="/recommend"></Redirect>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;