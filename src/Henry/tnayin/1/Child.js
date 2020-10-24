import React from 'react'

export default function Child(props) {
    return (
        <form onSubmit={props._handleSubmit}>
            <input type="text"
				value={props.value1}
				name={'value1'}
				onChange={props._handlerChange}
				/>
                <input type="text"
				value={props.value2}
				name={'value2'}
				onChange={props._handlerChange}
				/>
        </form>
    )
}
