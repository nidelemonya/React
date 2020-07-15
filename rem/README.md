em: 相对于自己的font-size, 并不是相对于父元素的font-size
rem: html 的font-size
1. 如何设置 font-size
2. 快速进行设计稿还原

DPR： device piex ratio 设备真实像素
css 1px 在不同设备上面 渲染出来的像素是不一样的 2px(ip6) 3px(ip6s plus)

想要 1px
1. meta init-scale:0.5 所有的元素缩小0.5倍
    我写元素宽高 按照扩大两倍之后的写
    一个元素本来 20px * 20px -> 40px * 40px
    - 干掉输入框默认样式
    outline: none;
    border: none;

2. 等比缩放
    屏幕划分 10等份
    750px  / 10 = 75
    1125px / 10 = 112.5
    一份就是 1rem， html：font-size 75px 或者是 112.5px