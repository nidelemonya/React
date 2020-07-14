# 生命周期的三个阶段
1. 初始化渲染 render componentDidMout
2. 更新阶段 shouldComponentUpdate render componentDidUpdate
3. 卸载阶段 componentWillUnMount

# Hooks
- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）
## useState (可以多次调用)
1. useState 返回一对：current state(状态)值和一个允许你更新它的函数。 您可以从事件处理程序或其他位置调用此函数。 它类似于类中的 this.setState ，除了它不会将旧 state(状态) 和新 state(状态) 合并在一起。
2. useState 唯一的参数就是初始 state
3. 你可以在一个组件中多次使用 State Hook

## useEffect (可以多次使用)
1. useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。

## useMemo 
1. 缓存值

## useCallback 
1. 缓存函数

## useContext

## useRef

## use Reducer redux