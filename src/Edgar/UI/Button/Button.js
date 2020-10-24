import React from 'react'
import "./Button.css"
export default function Button(props) {
	const cl = props.type
	return (
		<div>
			<button className={`btn btn-${cl}`}>{props.btnName || "Button"}</button>
		</div>
	)
}
