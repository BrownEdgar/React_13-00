import React, { Component } from 'react'
import Child from './Child'

state={
    value1:"",
    value2:""
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Child
                value1={this.state.value1}
                value2={this.state.value2}
                />
            </div>
        )
    }
}
