import React, { Component } from 'react'

export default class ChildErr extends Component {
    render() {
        if (this.props.count > 10) {
			throw new Error('New Error');
		}
    return <h1>{this.props.count}</h1>;
    }
}
