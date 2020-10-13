import React, { Component } from 'react'
import Developer from './Developer'

export default class App extends Component {
	state={
		developers:[
			{_id:1,name:"Tigran",skils:"Html,Css,JavaScript,React.js"},
			{_id:2,name:"Henry",skils:"Html,Css,JavaScript,React.js"},
			{_id:3,name:"Sona",skils:"Html,Css,JavaScript"},
			{_id:4,name:"Armen",skils:"Html,Css,JavaScript"}
		],
		hidden: false,
	}
	handlerChange=()=>{
		this.setState({ hidden:!this.state.hidden });
	}
	deleteDeveloper = (currentID) => {
		let dev = [...this.state.developers];
		dev = dev.filter(elem => elem._id !== currentID)
		this.setState({ developers : dev });
	}
	render() {
		const {hidden,developers} = this.state
		return (
			<div>
				<button onClick={this.handlerChange}>Hedden Content</button>
				{!hidden && (
					developers.map(elem => {
						return <Developer 
						name={elem.name}
						skils={elem.skils}
						key={elem._id}
						id={elem._id}
						_onClick={this.deleteDeveloper}
						/>
					})
				)}
			</div>
		)
	}
}
