import React, { Component } from 'react'

export default class Das1 extends Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0,
			titile: 12,

		}
		this.counterMinus = this.counterMinus.bind(this)

	}
  

  counterPlus = () =>{
    this.setState({
			count: this.state.count + 10,
		
    })
  }
  counterMinus () {

    this.setState({
			count: this.state.count <= 0 ? 0 : this.state.count-5,
		
    })
  }
  reset = () =>{
    this.setState({
			count: 0,
    })
  }
  render() {
    return (
      <div>
        <h1>Price:$ {this.state.titile * this.state.count}</h1>
        <h1>count:{this.state.count}</h1>
        <button onClick={this.counterPlus}>+</button>
				<button 
				onClick={this.counterMinus}
				disabled={this.state.count <= 0}
				>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}
