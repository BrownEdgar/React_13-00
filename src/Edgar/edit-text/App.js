import React, { Component } from 'react'

export default class App extends Component {
	state= {
		title:"Change me!",
		showInput: false
	}

	changeHandler(){
		this.setState({ showInput :true  });
	}
	changeValue(e){
		this.setState({ title:e.target.value });
	}
	save = ()=>{
		this.setState({ showInput: false });
	}
	changeHandler
	render() {
		return (
			<div>
				{this.state.showInput 
					? <div>
						<input type="text" onChange={this.changeValue.bind(this)} style={{padding:"10px 20px"}} onBlur={this.save}/>

					</div> 
				: <h1 onDoubleClick={this.changeHandler.bind(this)}>{this.state.title}</h1>}

			</div>
		)
	}
}
