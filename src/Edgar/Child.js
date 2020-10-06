import React from 'react'
import PropTypes from 'prop-types';

export default function Child(props) {
  let options = Object.values(props.options)
	return (
		<div>
			{options.map((elem,index) => {
				return <li key={index}> {elem} </li>
			})}
		</div>
	)
}

Child.propTypes = {
	// check Here
	options: PropTypes.exact({
		name: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		phone: PropTypes.string.isRequired
	})
};