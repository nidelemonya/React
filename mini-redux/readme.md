```js
好像是 和 回流有关:
DomA.style.width = DomA.offsetWidth + 1 + 'px'
DomB.style.width = DomA.offsetWidth + 1 + 'px'
DomC.style.width = DomA.offsetWidth + 1 + 'px'
复制代码会触发几次回流 ?
// 3次
let el = document.getElementById('app');
el.style.width = (el.offsetWidth+1) + 'px';
el.style.width = 1 + 'px'
复制代码回引发几次回流?几次重绘?
// 1次
```