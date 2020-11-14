import React, { Component } from 'react'

import data from './data.json'
import "./App.css"
export default class App extends Component {
	state ={
		tvyal: data.images
	}
	render() {
		console.log(this.state.tvyal);
		return (
			<div className="imgBox">
				{/* <img src={this.state.nkar} alt="nkar"/> */}
				{/* <img src={Nkar} alt="nkar"/> */}
				<img src={this.state.tvyal.url} alt="nkar"/>
			</div>
		)
	}
}
