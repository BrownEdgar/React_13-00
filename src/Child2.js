import React from 'react'
import SuperF from "./SuperF"

function Child2(props) {
     console.log('Child2.props',props);
    return (
            <div>
                <button onClick={()=>props.handleChange(5)}>Pass {props.count}</button>
            </div>
        
    )
}
export default SuperF(Child2);