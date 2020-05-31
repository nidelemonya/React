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
这样可复用性非常强，我们可以把组件的内容封装好，然后灵活在使用在任何组件内。

注意：**自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头。**

组件可以和组件组合在一起，组件内部可以使用别的组件。就像普通的 HTML 标签一样使用就可以。这样的组合嵌套，最后构成一个所谓的组件树。理解组件树的概念对后面理解数据是如何在组件树内自上往下流动过程很重要。
### 4.事件监听
在 React.js 里面监听事件是很容易的事情，你只需要给需要监听事件的元素加上属性类似于 onClick、onKeyDown 这样的属性。

在 React.js 不需要手动调用浏览器原生的 addEventListener 进行事件监听。React.js 帮我们封装好了一系列的 on* 的属性，当你需要为某个元素监听某个事件的时候，只需要简单地给它加上 on* 就可以了。而且你不需要考虑不同浏览器兼容性的问题，React.js 都帮我们封装好这些细节了。

注意：这些事件属性名都必须要用驼峰命名法。

没有经过特殊处理的话，这些 on* 的事件监听只能用在普通的 HTML 的标签上，而不能用在组件标签上。
#### event 对象
和普通浏览器一样，事件监听函数会被自动传入一个 event 对象，这个对象和普通的浏览器 event 对象所包含的方法和属性都基本一致。不同的是 React.js 中的 event 对象并不是浏览器提供的，而是它自己内部所构建的。React.js 将浏览器原生的 event 对象封装了一下，对外提供统一的 API 和属性，这样你就不用考虑不同浏览器的兼容性问题。

当用户点击 h1 的时候，把 h1 的 innerHTML 打印出来：
```jsx
class Title extends Component {
  handleClickOnTitle (e) {
    console.log(this) // => null or undefined
    console.log(e.target.innerHTML)
  }

  render () {
    return (
      <h1 onClick={this.handleClickOnTitle}>React 小书</h1>
    )
  }
}
```
#### 关于事件中的 this
一般在某个类的实例方法里面的 this 指的是这个实例本身。但是你在上面的 handleClickOnTitle 中把 this 打印出来，你会看到 this 是 null 或者 undefined。

这是因为 React.js 调用你所传给它的方法的时候，并不是通过对象方法的方式调用（this.handleClickOnTitle），而是直接通过函数调用 （handleClickOnTitle），所以事件监听函数内并不能通过 this 获取到实例。

**如果你想在事件函数当中使用当前的实例，就需要用到bind方法。**
```jsx
<h1 onClick={this.handleClickOnTitle.bind(this)}>React 小书</h1>
```
bind 会把实例方法绑定到当前实例上，然后我们再把绑定后的函数传给 React.js 的 onClick 事件监听。你也可以在 bind 的时候给事件监听函数传入一些参数。
#### 总结
为 React 的组件添加事件监听是很简单的事情，你只需要使用 React.js 提供了一系列的 on* 方法即可。

React.js 会给每个事件监听传入一个 event 对象，这个对象提供的功能和浏览器提供的功能一致，而且它是兼容所有浏览器的。

React.js 的事件监听方法需要手动 bind 到当前实例，这种模式在 React.js 中非常常用。
### 5.组件的 state 和 setState
#### state
React.js 的 state 就是用来存储这种可变化的状态的。isLiked 存放在实例的 state 对象当中，这个对象在构造函数里面初始化。
#### setState 接受对象参数
setState 方法由父类 Component 所提供。**当我们调用这个函数的时候，React.js 会更新组件的状态 state ，并且重新调用 render 方法，然后再把 render 方法所渲染的最新的内容显示到页面上。**

注意：当我们要改变组件的状态的时候，不能直接用 this.state = xxx 这种方式来修改，如果这样做 React.js 就没办法知道你修改了组件的状态，它也就没有办法更新页面。所以，一定要使用 React.js 提供的 setState 方法，**它接受一个对象或者函数作为参数。**

传入一个对象的时候，这个对象表示该组件的新状态。但你只需要传入需要更新的部分就可以了，而不需要传入整个对象。
#### setState 接受函数参数
这里还有要注意的是，当你调用 setState 的时候，React.js 并不会马上修改 state。而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新。

这是因为React.js 的 setState 把你的传进来的状态缓存起来，稍后才会帮你更新到 state 上，所以你获取到的还是原来的 isLiked。

所以如果你想在 setState 之后使用新的 state 来做后续运算就做不到了。

引出了 setState 的第二种使用方式，可以接受一个函数作为参数。React.js 会把上一个 setState 的结果传入这个函数，你就可以使用该结果进行运算、操作，然后返回一个对象作为更新 state 的对象：
#### setState 合并
在 React.js 内部会把 JavaScript 事件循环中的消息队列的同一个消息中的 setState 都进行合并以后再重新渲染组件。
### 6.配置组件的 props
组件是相互独立、可复用的单元，一个组件可能在不同地方被用到。

React.js 的 props 就可以帮助我们达到这个效果。每个组件都可以接受一个 props 参数，它是一个对象，包含了所有你对这个组件的配置。

从 render 函数可以看出来，组件内部是通过 this.props 的方式获取到组件的参数的，如果 this.props 里面有需要的属性我们就采用相应的属性，没有的话就用默认的属性。

**在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为 props 对象的键值**。其实可以把任何类型的数据作为组件的参数，包括字符串、数字、对象、数组、甚至是函数等等。

甚至可以往组件内部传入函数作为参数。这样可以通过 this.props.onClick 获取到这个传进去的函数。一个组件的行为、显示形态都可以用 props 来控制，就可以达到很好的可配置性。
#### 默认配置 defaultProps
上面的组件默认配置我们是通过 || 操作符来实现。 **React.js 也提供了一种方式 defaultProps，可以方便的做到默认配置。**

defaultProps 作为点赞按钮组件的类属性，里面是对 props 中各个属性的默认配置。这样我们就不需要判断配置属性是否传进来了：如果没有传进来，会直接使用 defaultProps 中的默认属性。 所以可以看到，在 render 函数中，我们会直接使用 this.props 而不需要再做判断。
#### props 不可变
props 一旦传入进来就不能改变。你不能改变一个组件被渲染的时候传进来的 props。React.js 希望一个组件在输入确定的 props 的时候，能够输出确定的 UI 显示形态。

组件的使用者可以**主动地通过重新渲染的方式**把新的 props 传入组件当中，这样这个组件中由 props 决定的显示形态也会得到相应的改变。

使用setState重新渲染，于是它的显示形态也会得到更新。
#### 总结
- 为了使得组件的可定制性更强，在使用组件的时候，可以在标签上加属性来传入配置参数。
- 组件可以在内部通过 this.props 获取到配置参数，组件可以根据 props 的不同来确定自己的显示形态，达到可配置的效果。
- 可以通过给组件添加类属性 defaultProps 来配置默认参数。
- props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。
### 7.state vs props
#### state 和 props 的总结
state 的主要作用是用于组件保存、控制、修改自己的可变状态。state 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。你可以认为 state 是一个局部的、只能被组件自身控制的数据源。state 中状态可以通过 this.setState 方法进行更新，setState 会导致组件的重新渲染。

props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。它是外部传进来的配置参数，组件内部无法控制也无法修改。除非外部组件主动传入新的 props，否则组件的 props 永远保持不变。

state 和 props 有着千丝万缕的关系。它们都可以决定组件的行为和显示形态。一个组件的 state 中的数据可以通过 props 传给子组件，一个组件可以使用外部传入的 props 来初始化自己的 state。但是它们的职责其实非常明晰分明：**state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。**

规则：尽量少地用 state，尽量多地用 props。

没有 state 的组件叫无状态组件（stateless component），设置了 state 的叫做有状态组件（stateful component）。因为状态会带来管理的复杂性，我们尽量多地写无状态组件，尽量少地写有状态的组件。这样会降低代码维护的难度，也会在一定程度上增强组件的可复用性。

React.js 非常鼓励无状态组件，在 0.14 版本引入了函数式组件——一种定义不能使用 state 组件。

以前一个组件是通过继承 Component 来构建，一个子类就是一个组件。而用函数式的组件编写方式是一个函数就是一个组件，你可以和以前一样通过 <HellWorld /> 使用该组件。不同的是，函数式组件只能接受 props 而无法像跟类组件一样可以在 constructor 里面初始化 state。你可以理解函数式组件就是一种只能接受 props 和提供 render 方法的类组件。
### 8.渲染列表数据
#### 渲染存放 JSX 元素的数组
**如果你往 {} 放一个数组，React.js 会帮你把数组里面一个个元素罗列并且渲染出来。**
#### 使用 map 渲染列表数据
循环上面用户数组里面的每一个用户，为每个用户数据构建一个 JSX，然后把 JSX 放到一个新的数组里面，再把新的数组插入 render 方法的 JSX 里面。
```jsx
class Index extends Component {
  render () {
    return (
      <div>
        {users.map((user) => {
          return (
            <div>
              <div>姓名：{user.username}</div>
              <div>年龄：{user.age}</div>
              <div>性别：{user.gender}</div>
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}
```
一般来说，在 React.js 处理列表就是用 map 来处理、渲染的。
#### key! key! key!
React.js 的是非常高效的，它高效依赖于所谓的 Virtual-DOM 策略。简单来说，能复用的话 React.js 就会尽量复用，没有必要的话绝对不碰 DOM。

规则：对于用表达式套数组罗列到页面上的元素，都要为每个元素加上 key 属性，这个 key 必须是每个元素唯一的标识。

记住一点：在实际项目当中，如果你的数据顺序可能发生变化，标准做法是最好是后台数据返回的 id 作为列表元素的 key。