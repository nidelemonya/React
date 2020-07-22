// 路由 二级路由 嵌套
import React from 'react';
import { Redirect } from 'react-router-dom';
import Recommend from '../application/Recommend';
import BlankLayout from '../layouts/BlankLayout';

export default [
    {   
        component:BlankLayout, // 模块 空白布局
        routes: [
            {
                path:'/',
                exact:true,
                render:() => <Redirect to={"/recommend"}/>
            },
            {
                path:'/recommend',
                component: Recommend,
                // routes: [
                //     {
                //         path:'/recommend/:id',
                //         component:AlbumComponent
                //     }
                // ]
            }
        ]
    }
]