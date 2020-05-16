- tabbar loading 过程在干什么?
    http 四个进程 loading 远程 TCP/IP dns
    im -> ip
    本地应用 ? 时间花在哪里?
    - react localhost
        编译html

        1. react react-dom 花时间加载 js执行
        2. MVVM能力组件化
        3. JSX 编译 -> js
        4. webpack

- 组件思想 把页面开发当成搭积木
    评论页面
    CommentApp
    CommentInput
    CommentList
        comment

- React 是新的前端开发框架, 还是新的思想
    - DOM API 过时了, 性能低下, 
    - CommentList.js  动态添加的评论, appendChild 实现
        1. component 组件树 父组件 子组件  props state
        2. props 传参
        3. state 自有状态, setState，用到相应状态的组件会自动刷新, 响应式开发
        
文章列表
组件 组合html, css, js 新的自定义标签<PostApp />
    PostsApp
        Tab
            TabItem
        PostsList
            Post

this.state = {
    title,
    id,
    type 1|2|3
}

TabItem onclick
this.props.onItemClick(1)
this.setState({
    fliter
})