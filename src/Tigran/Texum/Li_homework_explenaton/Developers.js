import React from 'react'

export default function Developers(props) {
  return (
    <div style={{border:"1px solid #000",margin:"25px",width:"450px"}}>

        <h1>{props.name}</h1>
      <p>{props.skils}</p>
      <button onClick={()=>props._onClick(props.id)}>X</button>
      </div>
  )
}
