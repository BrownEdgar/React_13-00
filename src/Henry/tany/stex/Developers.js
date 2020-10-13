import React from 'react'

export default function Developers(props) {
    return (
        <div style={{border:'1px solid #000',margin:'25px',width:"450px"}}>
            <h1>{props.name}</h1>
            <pre style={{fontSize:'24px'}}>{props.skils}</pre>
            <button onClick={()=>props._onCklick(props.id)}>X</button>
        </div>
    )
}
