import React, { Component } from 'react'
import { createElement } from 'react'

export default class App extends Component {
    state = {
        name1: "",
        name2: ""
    }
    submiter = (event) => {
        event.preventDefault()
    }
    changContent1 = (event) => {
        this.setState({
            [event.target.name1]: event.target.value
        })
    } 
    changContent2 = (event) => {
        this.setState({
            [event.target.name2]: event.target.value
        })
    }
    checkEquality=(event)=>{
        if (event.target.name1 === event.target.name2){
           console.log('equal')
        }
        //chi linu hamematel 2 inputnery
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Type something" name={this.state.name1} />
                <input type="text" placeholder="Type something" name={this.state.name2} />
                <input type="submit" value="Compare" onClick={this.checkEquality}/>
            </div>
        )
    }
}
