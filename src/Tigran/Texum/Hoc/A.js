import React from 'react'
import SuperF from './SuperF'

export default SuperF(function A(props) {
  return (
    <div>
      <h1>A</h1>
      <button onClick={props.handlerChange}>Click</button>
    </div>
  )
})
