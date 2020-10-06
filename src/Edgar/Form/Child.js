import React from 'react'

export default function Child(props) {
	return (

		<form onSubmit={props._handleSubmit}>
				<input type="text"
				value={props.value1}
				name={'value1'}
				onChange={props._handlerChange}
				/>
			<input type="password"
				value={props.value2}
				name={'value2'}
				onChange={props._handlerChange}
			/>
			<input type="email"
				value={props.value3}
				name={'value3'}
				onChange={props._handlerChange}
			/>
			<input type="text"
				value={props.value4}
				name={'value4'}
				onChange={props._handlerChange}
			/>
			<input type="text"
				value={props.value5}
				name={'value5'}
				onChange={props._handlerChange}
			/>
				<input type="submit" />
				
			</form>

	)
}
