import React, { createContext } from 'react';
const context = createContext();

// context.Provider
class Provider extends React.Component {
    render() {
        console.log(this.props)
        const { store } = this.props
        return (
            <context.Provider value={store}>
                { this.props.children }
            </context.Provider>
        )
    }
}
function connect(mapState, mapDispatch) {
    return function(Com){
        return class Connected extends React.Component {
            render() {
                // 应当是 来自于 redux 里面 怎么拿到 redux 里面的状态
                // redux 在 provider 上面 怎么拿到 Provider -> 用 Consumer
                let reduxstate = { a:1, b:2 }
                let filterProps = {};
                // Object.assign 用于对象的合并
                if (mapState) {
                    filterProps = Object.assign(filterProps, mapState(reduxstate))
                }
                if (mapDispatch) {
                    filterProps = Object.assign(filterProps, mapDispatch())
                }
                return (
                    <Com {...filterProps}/>
                )
            }
        }
    }
}
export {
    context,
    Provider,
    connect
}