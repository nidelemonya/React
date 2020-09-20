import React, { Component } from 'react'

class Study extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    componentDidMount() {
        this.setState({
            number : this.state.number + 1
        })
        console.log(this.state.number)
        this.setState({
            number : this.state.number + 1
        })
        this.setState({
            number : this.state.number + 1
        })
        console.log(this.state.number)
    }

    // componentDidMount() {
    //     this.setState((prevstate) => {
    //         return {
    //             number: prevstate.number + 1
    //         }
    //     })
    //     console.log(this.state.number)
    //     this.setState((prevstate) => {
    //         return {
    //             number: prevstate.number + 1
    //         }
    //     })
    //     console.log(this.state.number)
    //     this.setState((prevstate) => {
    //         return {
    //             number: prevstate.number + 1
    //         }
    //     })
    // }

    render() {
        const { number } = this.state
        return (
            <div>
                {number}
            </div>
        )
    }
}

export default Study