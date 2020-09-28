import React, { Component } from 'react'
import "./Style2.css"

export default class Das2 extends Component {
  state = {
    things: ["Aliquam Hendrit Mi Metus", "Marius Vulputate Cras Amet", "Suspendisse Nullam Sodales"],
    count: 0
  }
  counterPlus = () => {
    if (this.state.count < this.state.things.length - 1) {
      this.setState({
        count: this.state.count + 1
      })
    }
  }
  counterMinus = () => {
    if (this.state.count === 0) {
      return
    }
    this.setState({
      count: this.state.count - 1
    })
  }
  home = () => {
    this.setState({
      count: 0
    })
  }


  render() {
    return (
      <div className="main">
        <div className="box1">
          <h1 className="header">Our Blog</h1>
          <p>Axonvip | 01 AUG. 2019</p>
          <h1 className="content">{this.state.things[this.state.count]}</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis soluta placeat autem</p>
          <h1 className="page">Page: {this.state.count}</h1>
          <button onClick={this.counterPlus}>More</button>
          <button onClick={this.counterMinus}>Go back</button>
          <button onClick={this.home}>Home page</button>
        </div>
      </div>

    )
  }
}
