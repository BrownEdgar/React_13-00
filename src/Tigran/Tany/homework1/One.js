import React from 'react'

export default function One(props) {
  return (
    <div className="mian">
      <div className="box">
      <h1>{props._question}</h1>
				{props.show && <h4>{props._answer}</h4>}
        <button onClick={() => props._changeContent(props._id)}>Check the answer</button>
        </div>
    </div>
  )
}
