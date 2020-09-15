REACT 中 key 的作用
key = {id}
```html
<li key={0}>0</li>
<li key={1}>1</li>
<li key={2}>2</li>
<!-- 再次渲染的时候生成的两次 dom 的 key 还是 0 1 2 -->
<li key={0}>0</li>
<li key={1}>1</li>
<li key={2}>2</li>
<!-- 所以说 排序的时候 会出错 -->
```
react 性能优化
自身所在的优化 使用唯一的id作为key来区分

宏任务 微任务 同步任务 异步任务的区别是啥