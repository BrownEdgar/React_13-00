import React from 'react'
import { useContext } from 'react'
import { MyContext } from "./App"

export default function Child() {
		const context = useContext(MyContext)
	console.log(context);
    return (
        <div>
				{Object.values(context).map((elem,index)=>{
					return <h1>{elem}</h1>
            })}
        </div>
    )
}
