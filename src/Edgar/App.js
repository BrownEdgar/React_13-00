import React, { Component } from 'react'
import Child from './Child'

export default class App extends Component {
	state = {
			options:{
				name: "Edgar",
				age:56,
				phone: '+37477333696'
			}
	}
	changeName = () =>{
		let copy = this.state.options;
		copy.name = "jghashg"
		this.setState({ options: copy  });
	}
	render() {
		const options = this.state.options
		return (
			<div>
				<Child 
				options={options}
				/>
				<button onClick={this.changeName}>Change Name</button>
			</div>
		)
	}
}
