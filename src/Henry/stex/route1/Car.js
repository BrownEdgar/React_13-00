import React from 'react'
import { withRouter } from 'react-router-dom'
 function Car(props) {
	 console.log('car props', props)
	return (
		<div className="car_item" onClick={() => props.history.push({ pathname: `/cars/${props.name}` })}>
			<div>

				<img src={props.image} alt="nkar" />
			</div>
			
			<div>
				<p><strong> name: </strong>  {props.name}</p>
				<p><strong> year: </strong>  {props.year}</p>
				<p><strong> model:</strong>  {props.model}</p>
				<p><strong> price:</strong>  {props.price}</p>

			</div>
		</div>
	)
}

export default withRouter(Car)