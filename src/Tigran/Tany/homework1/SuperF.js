import React from 'react'
// import {MyContext} from "./App"

export default function SuperF(Component) {
  return function questioner(props) {
    const questionAnswer = () => {
      console.log("keks")
    }
    return (
      <div>
        <Component {...props} questionAnswer={questionAnswer} />
      </div>
    )
  }
}
