import React from 'react'
import SuperF from './SuperF'

export default SuperF( function B(props) {
	return (
		<div>
			<h1>B</h1>
			<button onClick={props.handlerChange}>click</button>
		</div>
	)
})
