import React, { Component } from 'react'
import Child from "./Child"

export default class App extends Component {
  state = {
    value: "",
    title:""
  }
  handleChange=(event) =>{
    this.setState({
      value:event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({title:this.state.value})
  }
  render() {
    return (
      <div>
        <Child
          _handleChange={this.handleChange}
          _handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
      </div>
    )
  }
}
