mobile first 95后 互联网的原住民 
2007年 移动互联网时代, 2010年 微信 朋友圈
流量 mobile 70% pc 30%

- 竖屏浏览 媒体查询
    - PC 不可以竖着
    - 手机, 竖着浏览这个页面更适合 @media screen and (min-aspect-ratio: 13/9) 最小屏幕宽高比 13:9
    - 确保浏览体验
    1. 通用做法 确保竖屏, 以后把相应的代码拷贝过去就行了
    2. base64 格式图片, chrome 更小的体积, 内置在css 内部, 不用发送 http 请求

- 添加路由组件 yarn add react-router-dom
    -  BrowserRouter 统管路由页面
    -  exact 首页唯一