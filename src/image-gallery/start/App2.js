import React,{useState,useEffect} from 'react'
import {x} from "./Helpers"
export default function App2() {
	const [state, setState] = useState(x())
	console.log(state);
	return (
		<div>
			
		</div>
	)
}
