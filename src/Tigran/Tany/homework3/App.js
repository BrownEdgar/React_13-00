import React, { Component } from 'react'
import Child from './Child'

export default class App extends Component {
    state = {
        name: "error"
    }
    checkError=()=>{
        this.setState({
            name:this.state.name = ""
        })
    }
    componentDidMount(){
        if (this.state.name === "error") {
           this.checkError()
        }
		}
		shouldComponentUpdate(nextProps, nextState, nextContext) {
			if (nextState.name === "error") {
				console.log("stop");
				return false;
			}
			return true;
		}
    render() {
        const { name } = this.state
        return (
            <div>
                <Child
                    name={name}
                />
            </div>
        )
    }
}
