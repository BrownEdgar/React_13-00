import React, { Component } from 'react'
import './App.css'
import Child1 from './Child1'
import ErrorHandler from './ErrorHandler'

export default class App extends Component {
  state={
      count:16
  }

  render() {
    return (
      <div className="App">
        <ErrorHandler>
          <Child1 count={this.state.count}/>
        </ErrorHandler>
      </div>
    )
  }
}
