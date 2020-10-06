import React, { Component } from 'react'
import Child1 from './Child1'

export default class App2 extends Component {
  state = {
    options: {
      name: "Tigran",
      age:19
    }
  }
  render() {
    return (
      <div>
        <Child1
          options={this.state.options}
          />
      </div>
    )
  }
}
