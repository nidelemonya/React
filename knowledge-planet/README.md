1. rem
    1rem = 16px
    750px iphone 6s 
    BEM
2. react-router
3. localStorage 来加星球

- 用 rem就给html设置font-size，用 em就给body设置font-size

1. 引入icnofont
- App.js 引入 import './assest/iconfont/iconfont.css';
- @font-face 加 ./
- 加对应类名 iconfont icon-icon-test

用 withRouter 包装，使其成为路由组件


iPhone 6使用的是Retina视网膜屏幕
使用2px x 2px的device pixel代表1px x 1px的css pixel ,
所以设备像素数为1334x750px。而CSS逻辑像素数为667x 375px


18.75px -> 7.5px
1rem -> 2.5 * 1rem