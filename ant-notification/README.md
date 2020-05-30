## ref
- 常用：把Notification、 Progress 对应的html jsI 引入到当前组件里面(这样会嵌套)
    - 因为弹窗必须和 app 主体 同级， 保证不会被覆盖
    - 所以要用一个原生js 创建一个 新的div 这个div 和 root 同级
