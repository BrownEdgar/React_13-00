import React, { Component } from 'react'

export default class Das1 extends Component {
  state = {
    count: 0,
    titile: 12
  }

  counterPlus = () => {
    this.setState({
      count: this.state.count + 10
    })
  }
  counterMinus = () => {
    this.setState({
      count: this.state.count - 5
    })
  }
  reset = () => {
    
    this.setState({
      count: 0
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.titile * this.state.count}</h1>
        <button onClick={this.counterPlus}>+</button>
        <button onClick={this.counterMinus}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}
