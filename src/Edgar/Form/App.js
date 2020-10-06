import React, { Component } from 'react'
import Child from './Child';

export default class App extends Component {
	state = {
		value1: "",
		value2: "",
		value3: "",
		value4: "",
		value5: "",
		title: "",
		valueForSelect: "Java_Script"
	}

	handleChangeForSelect=(event,options)=> {
		let name = event.target.name;
		if (options === 'input') {
			this.setState({ [name]: event.target.value });
		}else{
			this.setState({ valueForSelect: event.target.value });
		}

	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ title: this.state.value });
	}
	render() {
		return (
			<div>
				<Child
					_handlerChange={(e) => this.handleChangeForSelect(e,"input")}
					_handleSubmit={this.handleSubmit}
					value1={this.state.value1}
					value2={this.state.value2}
					value3={this.state.value3}
					value4={this.state.value4}
					value5={this.state.value5}
					 />

				<label>
					Ընտրեք Ձեր սիրած լեզուն:
          			<select value={this.state.valueForSelect} onChange={(e) => this.handleChangeForSelect(e,"select")}>
						<option value="React.js">React.js</option>
						<option value="Java_Script">Java Script</option>
						<option value="Html_Css">Html Css</option>
						<option value="Hayeren">Hayeren</option>
					</select>
				</label>
			</div>
		)
	}
}
