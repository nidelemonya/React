import App from './App'
import Home from './pages/Home/index'
import Login from './pages/Login/index'
import Detail from './pages/Detail/index'

export default [
    {
        path: '/',
        component:App,
        routes:[
            {
                path:'/',
                exact:true, // 精准匹配
                component:Home
            },
            {
                path:'/login',
                component:Login
            },
            {
                path:'/detail',
                component:Detail
            }
        ]
    }
]