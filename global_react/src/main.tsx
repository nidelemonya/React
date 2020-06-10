// console.log('hello');
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/login';
import './i18n';

ReactDom.render(
    <HashRouter>
        <Switch>
            {/* 国际化的登录页 login 登录 */}
            <Route exact={true} path="/" component={LoginPage}></Route>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
)