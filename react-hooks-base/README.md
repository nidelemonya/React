# 生命周期的三个阶段
1. 初始化渲染 render componentDidMout
2. 更新阶段 shouldComponentUpdate render componentDidUpdate
3. 卸载阶段 componentWillUnMount

## useState
useState是可以多次调用的
1. useState 返回一对：current state(状态)值和一个允许你更新它的函数。 您可以从事件处理程序或其他位置调用此函数。 它类似于类中的 this.setState ，除了它不会将旧 state(状态) 和新 state(状态) 合并在一起。
## useEffect
## useMemo 
1. 缓存值
## useCallback 
2. 缓存函数