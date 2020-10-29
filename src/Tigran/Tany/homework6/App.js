import React, { useState } from 'react'

export default function App() {
	const [pizza, setpizza] = useState([
		{ id: 0, name: "Peperoni" },
		{ id: 1, name: "Margarita" },
		{ id: 2, name: "Diablo" },
		{ id: 3, name: "Altono" },

	])
	const [count, setcount] = useState(0)
	const counter = () => {
		setcount(count + 1)
	}
	return (
		<div>
			{pizza.map((elem, index) => {
				return <div key={index} id={index} className={`class-${index}`}>
					{`Pizza name:${elem.name}`} 
					{`you have ${count} pizzas`}
					<button key={index} id={index} onClick={counter}>+</button></div>
			})}
		</div>
		//chi stacvum sax counternery miajamanak en avelanum
	)
}
