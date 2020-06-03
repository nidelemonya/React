## react beer 应用开发思路整理
beer 搜索, 列表 创建路由
/ RESTFUL
搜索跟列表合二为一? http://www.mety.com/search/:searchTerm?a=q&b=2&c=3     /search/all     /search/8   params
详情页 /beer/:beerID    detial
语义化设计URL

1. 搭建应用架构, 先做路由。
2. 组件化思维
3. list列表的编写流程
4. router this.props.match.params 
5. / -> Main.js -> loadBeers -> loading -> list
6. / -> /search/:searchTerm 路由， -> rule -> 显示 执行componentDidMount
-> /search/:newSearchTerm 路由没变, componentDidMount 不会发生