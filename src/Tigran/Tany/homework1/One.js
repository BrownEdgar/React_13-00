import React from 'react'

export default function One(props) {
  return (
    <div className="mian">
      <div>{props._question}</div>
      <button onClick={() => props._changeContent(props._id)}>ккк</button>
    </div>
  )
}
