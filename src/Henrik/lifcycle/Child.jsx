import React, { Component } from 'react';

export default class Child extends Component {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	if (nextProps.count > 10) {
	// 		console.log('stop');
	// 		return false;
	// 	}
	// 	console.log("it's ok");
	// 	return true;
	// }
	// componentDidUpdate(prevProps, prevState) {
	// 	console.log('componentDidUpdate');
	// }
	// componentWillUnmount() {
	// 	console.log('componentWillUnMount Die');
	// }
	render() {
        if(this.props.count >10){
            throw new Error(" Error")
        }
		return <h1>{this.props.count}</h1>;
	}
}
