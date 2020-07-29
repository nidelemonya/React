// 路由 二级路由 嵌套
// React 自带路由懒加载 important
import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import HomeLayout from '../layouts/HomeLayout';
// import Recommend from '../application/Recommend';
// 懒加载 不会直接引入 ( 高阶组件 ) 性能优化
const RecommendComponent = lazy(() => import('../application/Recommend'));
const SingersComponent = lazy(() => import('../application/Singers'));
// const SingerComponent = lazy(() => import('../application/Singer/'));
const SearchComponent = lazy(() => import('../application/Search/'));
// Suspense 悬念 -> 提前释放资源 ( 资源解冻过程 )
const SuspenseComponent = Component => props => {
    return (
        // fallback 回滚事件
        <Suspense fallback={ null }>
            <Component {...props}>
            </Component>
        </Suspense>
    )
} 

export default [
    {   
        component:BlankLayout, // 模块 空白布局
        routes: [
            {
                path:'/',
                component: HomeLayout,
                routes:[
                    {
                        path:'/',
                        exact:true,
                        render: () => <Redirect to={"/recommend"}/>
                    },
                    {
                        path:'/recommend',
                        // component: Recommend
                        component:SuspenseComponent(RecommendComponent)
                    },
                    // {
                    //     path: "/singers",
                    //     component: SuspenseComponent(SingersComponent),
                    //     key: "singers",
                    //     routes: [
                    //       {
                    //         path: "/singers/:id",
                    //         component: SuspenseComponent(SingerComponent)
                    //       }
                    //     ]
                    // },
                    {
                        path: "/search",
                        exact: true,
                        key: "search",
                        component: SuspenseComponent(SearchComponent)
                      }
                    // {
                    //     path:'/rank',
                    //     component: RankComponent
                    // }
                ]
            }
        ]
    }
]