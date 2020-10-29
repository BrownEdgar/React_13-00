import React from 'react'
import { withRouter } from 'react-router-dom'
 function CarDetals(props) {
	return (
		<div>
			<h1>{props.match.params.name}</h1>
		</div>
	)
}

export default withRouter(CarDetals)

