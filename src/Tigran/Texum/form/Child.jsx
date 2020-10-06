import React from 'react'

export default function Child(props) {
  return (
    <div>
       <form onSubmit={props._handleSubmit}>
          <input type="text" value={props.value} onChange={(props._handleChange)}/>
          <input type="submit"/>
        </form>
    </div>
  )
}
