import React from 'react'

export default function Bomb(props) {
	if(props.bomb > 10){
		throw new Error("Buuuum")
	}
	return (
		<div>
			<h1>{props.bomb}</h1>
		</div>
	)
}
