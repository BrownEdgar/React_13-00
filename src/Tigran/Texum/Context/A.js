import React from 'react'
import { MyContext } from "./App"

export default function A() {
  return (
    <div>
      <MyContext.Consumer>
        {function (value) {
          return (
            <div>
              <h1>{value.name}</h1>
              <h1>{value.age}</h1>
            </div>
          )
        }}
      </MyContext.Consumer>
    </div>
  )
}
