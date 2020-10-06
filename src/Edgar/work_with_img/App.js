import React, { Component } from 'react'
import Nkar from "./img/logo192.png"
export default class App extends Component {
	state ={
		nkar: "./logo192.png"
	}
	render() {
		return (
			<div>
				<img src={this.state.nkar} alt="nkar"/>
				<img src={Nkar} alt="nkar"/>
			</div>
		)
	}
}
