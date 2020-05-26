# React.js 小书
## 第一阶段
### 1.使用 JSX 描述 UI 信息
只要你要写 React.js 组件，那么就必须要引入 React 和 React.js 的组件父类 Component。

即
```js
import React, { Component } from 'react'
```
ReactDOM 可以帮助我们把 React 组件渲染到页面上去。

一个组件继承 Component 类，有一个 render 方法，并且把这个组件的 HTML 结构返回；这里 return 的东西就比较奇怪了，它并不是一个字符串，看起来像是纯 HTML 代码写在 JavaScript 代码里面。这种看起来“在 JavaScript 写的标签的”语法叫 JSX。

#### JSX 原理
React.js编译的过程会把类似 HTML 的 JSX 结构转换成 JavaScript 的对象结构。

使用 React 和 JSX 的时候一定要经过编译的过程。

**所谓的 JSX 其实就是 JavaScript 对象**

ReactDOM.render 功能就是把组件渲染并且构造 DOM 树，然后插入到页面上某个特定的元素上（在这里是 id 为 root 的 div 元素）。根元素？

为什么不直接从 JSX 直接渲染构造 DOM 结构，而是要经过中间这么一层呢？

第一个原因是，当我们拿到一个表示 UI 的结构和信息的对象以后，不一定会把元素渲染到浏览器的普通页面上，我们有可能把这个结构渲染到 canvas 上，或者是手机 App 上。所以这也是为什么会要把 react-dom 单独抽离出来的原因，可以想象有一个叫 react-canvas 可以帮我们把 UI 渲染到 canvas 上，或者是有一个叫 react-app 可以帮我们把它转换成原生的 App（实际上这玩意叫 ReactNative）。

第二个原因是，有了这样一个对象。当数据变化，需要更新组件的时候，就可以用比较快的算法操作这个 JavaScript 对象，而不用直接操作页面上的 DOM，这样可以尽量少的减少浏览器重排，极大地优化性能。

#### 总结
- JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
- React.js 可以用 JSX 来描述你的组件长什么样的。
- JSX 在编译的时候会变成相应的 JavaScript 对象描述。
- react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。

### 2.组件的 render 方法
一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素。但这里要注意的是，**必须要用一个外层的 JSX 元素把所有内容包裹起来**。返回并列多个 JSX 元素是不合法的。可以用一个空的div包起来，或者
```jsx
<></>  
or
<React.Fragment></React.Fragment>
```
#### 表达式插入
在 JSX 当中你可以插入 JavaScript 的表达式，表达式返回的结果会相应地渲染到页面上。表达式用 {} 包裹。

简而言之，{} 内可以放任何 JavaScript 的代码，包括变量、表达式计算、函数执行等等。 render 会把这些代码返回的内容如实地渲染到页面上，非常的灵活。

表达式插入不仅仅可以用在标签内部，也可以用在标签的属性上。

注意，直接使用 class 在 React.js 的元素上添加类名如 <div class=“xxx”> 这种方式是不合法的。因为 class 是 JavaScript 的关键字，所以 React.js 中定义了一种新的方式：**className 来帮助我们给元素添加类名。**

还有一个特例就是 for 属性，例如 <label for='male'>Male</label>，因为 for 也是 JavaScript 的关键字，所以**在 JSX 用 htmlFor 替代**，即 <label htmlFor='male'>Male</label>。而其他的 HTML 属性例如 style 、data-* 等就可以像普通的 HTML 属性那样直接添加上去。
#### 条件返回
{} 上面说了，JSX 可以放置任何表达式内容。所以也可以放 JSX，实际上，我们可以在 render 函数内部根据不同条件返回不同的 JSX。

使用三元运算符
```jsx
{isGoodWord
    ? <strong> is good</strong>
    : <span> is not good</span>
}
```
如果你在表达式插入里面返回 null ，那么 React.js 会什么都不显示，相当于忽略了该表达式插入。结合条件返回的话，我们就做到显示或者隐藏某些元素
```jsx
{isGoodWord
          ? <strong> is good</strong>
          : null
        }
```
条件返回 JSX 的方式在 React.js 中很常见，组件的呈现方式随着数据的变化而不一样，你可以利用 JSX 这种灵活的方式随时组合构建不同的页面结构。
#### JSX 元素变量
JSX 元素其实可以像 JavaScript 对象那样自由地赋值给变量，或者作为函数参数传递、或者作为函数的返回值。
### 3.组件的组合、嵌套和组件树
## 第二阶段
## 第三阶段