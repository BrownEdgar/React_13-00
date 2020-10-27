import React, { Component } from 'react'
import LifeComponent from './LifeComponent';


export default class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			prevCount:null

		}
	}
shouldComponentUpdate(nextProps, nextState) {
	if (nextState.count > 5){
		return false
	}
	return true
}
static getDerivedStateFromProps(props, state) {
	return { prevCount: state.count -1}
	
}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("getSnapshotBeforeUpdate");
	
		return "sadsa"
	}
	componentDidUpdate(prevProps, prevState,x) {
		
		console.log({ prevProps, prevState,x});
	}
	render() {
		return (
		<div>
				<h1>count:{this.state.count}</h1>
				<h1>prevCount:{this.state.prevCount}</h1>
			<button onClick={()=>this.setState({ count:this.state.count + 1  })}>Up count</button>
			<LifeComponent n={this.state.count}/>
		</div>
		)
	}
}

