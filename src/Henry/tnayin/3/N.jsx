import React from 'react'
import {MyContext} from './App'
export default function N() {
	return (
		<div>
			<MyContext.Consumer>
				{function(value){
					return (
						<div>
							<h1>{value.name}</h1>
                            <h1>{value.surname}</h1>
							<h1>{value.age}</h1>
                            <h1>{value.email}</h1>
                            <h1>{value.phone}</h1>
						</div>
					)
				}}
			</MyContext.Consumer>
		</div>
	)
}