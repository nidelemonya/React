- react 小书
- react + react-router + redux
- 下周实战简单的react

react = 数据 + UI

效果： 数据不需要派发的方式来做, 父组件 -> 子组件
redux 任何组件可以随时跟 redux connect 连接起来

搭建的时候store -> Provier -> App
connect (mapStateToProps)()
reducer 可以有多个，
1. 状态收归redux管理，由reducer 函数提供
2. connect 借到组件中去
