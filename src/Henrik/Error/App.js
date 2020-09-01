import React, { Component } from 'react';
import ChildErr from './ChildErr';
import ErrHandler from './ErrHandler';

export default class App extends Component {
	state = {
		count: 2
	};
	render() {
		return (
			<div>
				<ErrHandler>
					<ChildErr count={this.state.count} />
				</ErrHandler>
			</div>
		);
	}
}
