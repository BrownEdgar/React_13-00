import React from 'react'
import Car from "./Car"

export default function Cars(props) {
	console.log('props', props)
	const gotoPage = () =>{
		console.log("sdas");
		props.props.history.push({pathname:"/"})	
	}
	return (
		<>
		<div className='car_box'>
			{props.options.map(elem=>{
				return (
					<Car
						key={elem.id}
						name={elem.name}
						model={elem.model}
						year={elem.year}
						image={elem.image}
						price={elem.price}
					/>
				)
			})}
		</div>
		<button onClick={gotoPage}> Home page</button>
		</>
	)
}
