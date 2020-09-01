import React, { Component } from 'react';
import Child from './Child';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			isDisabled: false,
			isShow: true
		};
	}
	static getDerivedStateFromProps(props, state) {
		if (state.count > 10) {
			return {
				isDisabled: true
			};
		}
		return null;
	}
	shouldComponentUpdate(nextState) {
		if (nextState.count > 10) {
			console.log('stop');
			return false;
		}
		console.log("it's ok");
		return true;
	}
	handleChange = () => {
		this.setState((prevState) => {
			return { count: prevState.count + 1 };
		});
	};
	deleteBtn = () => {
		this.setState((prevState) => {
			return {
				isShow: !prevState.isShow,
				isDisabled: !prevState.isDisabled
			};
		});
	};
	show = () => {
		return this.state.isShow && <Child count={this.state.count} />;
	};
	render() {
		return (
			<div className='App'>
				{this.show()}

				<button disabled={this.state.isDisabled} onClick={this.handleChange}>
					Up Count
				</button>
				<button onClick={this.deleteBtn}>X</button>
			</div>
		);
	}
}
