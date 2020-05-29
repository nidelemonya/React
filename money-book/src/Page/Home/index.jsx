import React from 'react';
// 涉及到 跳转 切换 的 都可以用这个做
import {
  Route, Link, useParams,
  Switch,
  useRouteMatch
} from 'react-router-dom';
// Link 被特殊处理的a标签
import HomeHeader from './HomeHeader'
import List from './List';
import Chart from './Chart';

// 在根路径下 又分了
// / + /list
// / + /chart 

// hook: 也是一个方法
// <> 组件： React.fragment
function Index() {
  let { path, url } = useRouteMatch();
  console.log('path:',path, 'url:',url);
  console.log(url===path);
  return (
    <React.Fragment>
      <HomeHeader />
        <Link to={`${url}/list`}>列表模式</Link>
        <Link to={`${url}/chart`}>图表模式</Link>
      <Switch >
        <Route exact path={path} >
          <List />
        </Route>
        <Route path={`${path}/:chartId`}>
          <Chartid />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
function Chartid() {
  let { chartId } = useParams();
  console.log(chartId);
  if (chartId === "chart") {
    return (
      <React.Fragment>
        <Chart/>
      </React.Fragment>
    )
  }
  else if (chartId ==="list"){
    return (
      <React.Fragment>
        <List/>
      </React.Fragment>
    )
  }
}

export default Index;