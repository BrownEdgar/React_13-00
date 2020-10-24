import React from 'react'

export default function Users({ options, _onClick }) {
	return (
		<ul>
			{options.map(elem => <li key={elem.id} onClick={() => _onClick(elem.id)}>{elem.name}</li>)}
		</ul>
	)
}
