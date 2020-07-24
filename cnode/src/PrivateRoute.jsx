import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authStore from './store/auth';
// 需要身份验证的路由界面
{/* <PrivateRoute path="/collect" component={Collect}></PrivateRoute> */}
function PrivateRoute (props) {
    const { path, component } = props;
    // auth
    const isLogin = authStore.isLogin;
    // react-router
    // 权限保护 比较简洁的用法
    // 登录了进去 没登录把它重定向出来
    if (!isLogin) {
        return <Redirect from={path} to="/login"/>
    }
    return (
        <Route path={path} component={component}></Route>
    )
}
export default PrivateRoute;