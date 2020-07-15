1. css reset
    normalize.css 保留有用的默认值，CSS 的重置
    index.css css 移动业务的设置
2. 无状态组件的创建流程刻意练习
    - 组件插入父级组件中 思考好 props
    - 组件的类型如果是无状态组件 
        prop-types css propTypes
        形参props写好
        return (<div></div>)
    - props 结构出来我们要的 prop
    - svg
        polyline 折线
        stroke 描边
    - 功能函数建议由父函数打理，
        纯粹的负责render
        函数可以复用
3. 年轻的 react hooks 全新开发方式
    class Component -> function
    函数式编程
    class + constructor + 生命周期 + render 
    -> function + react + hooks 魔法函数
    - useCallback 缓存一个函数
    - useMemo

4. 状态组件的编写顺序
    - 数据

5. redux
    - 简单的 redux 项目结构
        store.js createStore reducers
            中间件 axios redux-thunk 支持异步
        reducers.js combineReducers
        action.js 数据请求 状态改变的触发都由 actions 来负责
            ActionTypes 可读性
    - redux API -> 设计状态 (reducer + action)
        初始值 from to 两个reducer 函数
        函数 初始值 action return 初始值
        状态会怎么改变 动作的声明 SET_FROM
        - switch case
        - {type, payload} action
        - actionTypes
    - 数据组件化
        1. connect 高阶返回原组件
            connect({
                mapState,
                mapDispatch
            })(Component)
    - reducer