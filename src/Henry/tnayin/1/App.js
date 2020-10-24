import React, { Component } from 'react'
import Child from './Child'

export default class App extends Component {
    state = {
        name: "Henry"
    }
    ifErr=()=>{
        this.setState({
            name:this.state.name = 'krkin porci'
        })
    }
    componentDidMount(){
        if (this.state.name === "error") {
           this.ifErr()
        }
    }
    render() {
        
        return (
            <div>
                <Child
                    name={this.state.name}
                />
            </div>
        )
    }
}

