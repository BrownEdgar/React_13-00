import React from 'react'
import { addDollor } from './Helpers'

export default function Cart(props) {
	return (
		<div className="watch-wrapper-detail">
			<div className="W-image">
				<img src={props.url} alt={props.title} />
			</div>
			<div className="W-info">
				<h1>{props.title}</h1>
				<p>itemNo:{props.itemNo}</p>
				<p>size::{props.size}</p>
				<p>color:{props.color}</p>
				<p>QTY:{props.quaintity}</p>
				<h4 onClick>Remove | Edit</h4>

			</div>
			<div className="price">
				<p>{addDollor(props.price)}</p>
			</div>
			<div className="total">
				<p>{ addDollor(props.quaintity * props.price)}</p>
			</div>
		</div>
	)
}
