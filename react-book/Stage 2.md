## 第二阶段
### 1.前端应用状态管理 —— 状态提升
将这种组件之间共享的状态交给组件最近的公共父节点保管。

总结：当某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，用 props 传递数据或者函数来管理这种依赖或着影响的行为。

你会发现这种无限制的提升不是一个好的解决方案。一旦发生了提升，你就需要修改原来保存这个状态的组件的代码，也要把整个数据传递路径经过的组件都修改一遍，好让数据能够一层层地传递下去。这样对代码的组织管理维护带来很大的问题。

在实际项目当中状态提升并不是一个好的解决方案，所以我们后续会引入 **Redux** 这样的状态管理工具来帮助我们来管理这种共享状态。
### 2.挂载阶段的组件生命周期（一）
我们把 **React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载。**

初始化组件 -> 挂载到页面上。

**过程如下：**
- -> constructor()
- -> componentWillMount()
- -> render()
- // 然后构造 DOM 元素插入页面
- -> componentDidMount()
- // ...
- // 从页面中删除
- -> componentWillUnmount()
- // 从页面中删除

componentWillMount 和 componentDidMount 都是可以像 render 方法一样自定义在组件的内部。挂载的时候，React.js 会在组件的 render 之前调用 componentWillMount，在 DOM 元素塞入页面以后调用 componentDidMount。
#### 总结
React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载。
- componentWillMount：组件挂载开始之前，也就是在组件调用 render 方法之前调用。
- componentDidMount：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
- componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。
### 3.挂载阶段的组件生命周期（二）
一般来说，所有关于组件自身的状态的初始化工作都会放在 constructor 里面去做。

一些组件启动的动作，包括像 Ajax 数据的拉取操作、一些定时器的启动等，就可以放在 componentWillMount 里面进行.

当时钟隐藏的时候，我们并没有清除定时器。时钟隐藏的时候，定时器的回调函数还在不停地尝试 setState，由于 setState 只能在已经挂载或者正在挂载的组件上调用，所以 React.js 开始疯狂报错。

componentWillUnmount 就可以派上用场了，它的作用就是在组件销毁的时候，做这种清场的工作。例如清除该组件的定时器和其他的数据清理工作。

#### 总结
我们一般会把组件的 state 的初始化工作放在 constructor 里面去做；在 componentWillMount 进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动；组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 componentWillUnmount 里面去做。

说一下本节没有提到的 componentDidMount 。一般来说，有些组件的启动工作是依赖 DOM 的，例如动画的启动，而 componentWillMount 的时候组件还没挂载完成，所以没法进行这些启动工作，这时候就可以把这些操作放在 componentDidMount 当中。
### 4.更新阶段的组件生命周期
从之前的章节我们了解到，组件的挂载指的是将组件渲染并且构造 DOM 元素然后插入页面的过程。**这是一个从无到有的过程**，React.js 提供一些生命周期函数可以给我们在这个过程中做一些操作。

更新阶段：就是 setState 导致 React.js 重新渲染组件并且把组件的变化应用到 DOM 元素上的过程，这是一个组件的变化过程。

更新阶段的组件生命周期：
- shouldComponentUpdate(nextProps, nextState)：你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。
- componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。
- componentWillUpdate()：组件开始重新渲染之前调用。
- componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用。
### 5.ref 和 React.js 中的 DOM 操作
在 React.js 当中可以直接通过 setState 的方式重新渲染组件，渲染的时候可以把新的 props 传递给子组件，从而达到页面更新的效果。

但是 React.js 并不能完全满足所有 DOM 操作需求，有些时候我们还是需要和 DOM 打交道。

React.js 当中提供了 ref 属性来帮助我们获取已经挂载的元素的 DOM 节点，你可以给某个 JSX 元素加上 ref属性。
```jsx
class AutoFocusInput extends Component {
  componentDidMount () {
    this.input.focus()
  }

  render () {
    return (
      <input ref={(input) => this.input = input} />
    )
  }
}

ReactDOM.render(
  <AutoFocusInput />,
  document.getElementById('root')
)
```
ref 属性，这个属性值是一个函数。当元素在页面上挂载完成以后，React.js 就会调用这个函数，并且把这个挂载以后的 DOM 节点传给这个函数。在函数中我们把这个 DOM 元素设置为组件实例的一个属性，这样以后我们就可以通过 this.input 获取到这个 DOM 元素。

然后我们就可以在 componentDidMount 中使用这个 DOM 元素，并且调用 this.input.focus() 的 DOM API。

原则：**能不用 ref 就不用。**特别是要避免用 ref 来做 React.js 本来就可以帮助你做到的页面自动更新的操作和事件监听。多余的 DOM 操作其实是代码里面的“噪音”，不利于我们理解和维护。
### 6.props.children 和容器类组件
React.js 中所有嵌套在组件中的 JSX 结构都可以在组件内部通过 props.children 获取到。

React.js 就是把我们嵌套的 JSX 元素一个个都放到数组当中，然后通过 props.children 进去。
#### 总结
使用自定义组件的时候，可以在其中嵌套 JSX 结构。嵌套的结构在组件内部都可以通过 props.children 获取到，这种组件编写方式在编写容器类型的组件当中非常有用。而在实际的 React.js 项目当中，我们几乎每天都需要用这种方式来编写组件。
### 7.dangerouslySetHTML 和 style 属性
#### dangerouslySetHTML
出于安全考虑的原因（XSS 攻击），在 React.js 当中所有的表达式插入的内容都会被自动转义。

React.js 提供了一个属性 dangerouslySetInnerHTML，可以让我们设置动态设置元素的 innerHTML：
```jsx
dangerouslySetInnerHTML={{__html: this.state.content}}
```
需要给 dangerouslySetInnerHTML 传入一个对象，这个对象的 __html 属性值就相当于元素的 innerHTML，这样我们就可以动态渲染元素的 innerHTML 结构了。
#### style
在 React.js 中你需要把 CSS 属性变成一个对象再传给元素

style 接受一个对象，这个对象里面是这个元素的 CSS 属性键值对，原来 CSS 属性中带 - 的元素都必须要去掉 - 换成驼峰命名。

用对象作为 style 方便我们动态设置元素的样式。我们可以用 props 或者 state 中的数据生成样式对象再传给元素，然后用 setState 就可以修改样式，非常灵活：
### 8.PropTypes 和组件参数验证
React.js 就提供了一种机制，让你可以给组件的配置参数加上类型验证。

第三方库 prop-types: npm install --save prop-types

用法：
```jsx
import PropTypes from 'prop-types';
class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object   // 传入的 comment 类型必须为 object（对象）
  }
    ...
}
```
可选参数我们可以通过配置 defaultProps，让它在不传入的时候有默认值。如果没有配置 defaultProps， 默认就会是 undefined， 就会报错。
```jsx
static propTypes = {
  comment: PropTypes.object.isRequired
}
```
isRequired 关键字来强制组件某个参数必须传入

组件参数验证在构建大型的组件库的时候相当有用，可以帮助我们迅速定位这种类型错误，让我们组件开发更加规范。
#### 总结
通过 PropTypes 给组件的参数做类型限制，可以在帮助我们迅速定位错误，这在构建大型应用程序的时候特别有用；另外，给组件加上 propTypes，也让组件的开发、使用更加规范清晰。