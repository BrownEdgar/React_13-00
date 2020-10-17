import React, { Component } from 'react'
import LifeComponent from './LifeComponent';


export default class Test extends Component {
	constructor(props) {
		console.log("constructor run");
		super(props);
		this.state = {
			count: 0,

		}
	}

static getDerivedStateFromProps(props, state) {
	console.log(state);
	return null
}
componentDidMount() {
	console.log("sax nkarvac en");
}
shouldComponentUpdate(nextProps, nextState) {
	if (nextState.count >=30){
		console.log("Stop");
		return false;
	}
	console.log("der jamanaky che!");
	return true
}

componentWillReceiveProps(nextProps) {
	console.log("nextProps", nextProps);
}
	render() {
		console.log("render run");
		return (
		<div>
			{this.state.count}
			<button onClick={()=>this.setState({ count:this.state.count + 1  })}>Up count</button>
			<LifeComponent n={this.state.count}/>
		</div>
		)
	}
}

