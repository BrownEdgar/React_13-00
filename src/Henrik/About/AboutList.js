import React from 'react';
import { MyContext } from '../App';
export default function AboutList(props) {
	return (
		<div>
			<MyContext.Consumer>
				{(value) => {
					return (
						<div>
							<h1>{value.name}</h1>
							<p>{value.phone}</p>
							<p>{value.city}</p>
						</div>
					);
				}}
			</MyContext.Consumer>
		</div>
	);
}
