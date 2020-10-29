import React from 'react'
import { useContext } from 'react'
import { MyContext } from "./App"

export default function Child() {
    const context = useContext(MyContext)
    return (
        <div>
            {context.map((elem,index)=>{
                return <h1 key={index}>{elem.name}{console.log()}</h1>
            })}
        </div>
    )
}
