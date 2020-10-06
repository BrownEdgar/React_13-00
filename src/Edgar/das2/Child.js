import React from 'react'

export default function Child(props) {
	return (
		<div className="main">
			<p>Axonvip | 01 AUG. 2019</p>
			<h1 className="content">{props.title}</h1>
			<p>{props.body}</p>
			<button >Read more</button>
		</div>
	)
}
