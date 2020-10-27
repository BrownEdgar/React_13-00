import React, { useReducer } from 'react'
import reducer from "./useReducer"
const initalState = { count: 0 }

export default function App() {
    const [state, dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decriment' })}>-</button>
            <button onClick={() => dispatch({ type: 'add', number: 10 })}>add 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}
