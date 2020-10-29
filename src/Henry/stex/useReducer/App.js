import React,{useReducer} from 'react'
import reducer from './Reducer'
const initialState = {count:0}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        <div>
            {state.count}
            <button onClick={() => dispatch({type:'decrement'})}>-</button>
            <button onClick={() => dispatch({type:'increment'})}>+</button>
            <button onClick={() => dispatch({type:'add',number:10})}>add 10</button>
            <button onClick={() => dispatch({type:'reset'})}>0</button>

        </div>
        </>
    )
}
export default Counter
