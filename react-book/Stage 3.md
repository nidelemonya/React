## 第三阶段
### 1.高阶组件（Higher-Order Components）
#### 什么是高阶组件
高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。

高阶组件是一个函数（而不是组件），它接受一个组件作为参数，返回一个新的组件。这个新的组件会使用你传给它的组件作为子组件。

作用：**为了组件之间的代码复用。**组件可能有着某些相同的逻辑，把这些逻辑抽离出来，放到高阶组件中进行复用。**高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。**
#### 高阶组件的灵活性
设计模式里面的装饰者模式。它通过组合的方式达到很高的灵活程度。
#### 多层高阶组件（选读）
#### 总结
**高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。**新的组件使用传入的组件作为子组件。
高阶组件的作用是用于代码复用，可以把组件之间可复用的代码、逻辑抽离到高阶组件当中。新的组件和传入的组件通过 props 传递信息。
### 2.React.js 的 context
React.js 的 context 就是这么一个东西，某个组件只要往自己的 context 里面放了某些状态，这个组件之下的所有子组件都直接访问这个状态而不需要通过中间组件的传递。一个组件的 context 只有它的子组件能够访问，它的父组件是不能访问到的，你可以理解每个组件的 context 就是瀑布的源头，只能往下流不能往上飞。
```jsx
class Index extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }

  constructor () {
    super()
    this.state = { themeColor: 'red' }
  }

  getChildContext () {
    return { themeColor: this.state.themeColor }
  }

  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
```
getChildContext 这个方法就是设置 context 的过程，它返回的对象就是 context, 所有的子组件都可以访问到这个对象。我们用 this.state.themeColor 来设置了 context 里面的 themeColor。

childContextTypes，它的作用其实 propsType 验证组件 props 参数的作用类似。不过它是验证 getChildContext 返回的对象。

如果你要给组件设置 context，那么 childContextTypes 是必写的。

获取
```jsx
class Title extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.context.themeColor }}>React.js 小书标题</h1>
    )
  }
}
```
子组件要获取 context 里面的内容的话，就必须写 contextTypes 来声明和验证你需要获取的状态的类型，它也是必写的，如果你不写就无法获取 context 里面的状态。

#### 总结
一个组件可以通过 getChildContext 方法返回一个对象，这个对象就是子树的 context，提供 context 的组件必须提供 childContextTypes 作为 context 的声明和验证。

context 打破了组件和组件之间通过 props 传递数据的规范，极大地增强了组件之间的耦合性。而且，就如全局变量一样，context 里面的数据能被随意接触就能被随意修改，每个组件都能够改 context 里面的内容会导致程序的运行不可预料。
3. 使用真正的 Redux 和 React-redux