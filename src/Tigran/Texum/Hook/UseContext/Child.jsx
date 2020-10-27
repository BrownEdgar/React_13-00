import React,{useContext} from 'react'
import { MyContext, AnotherContext} from "./App"

export default function Child() {
    const context1 = useContext(MyContext)
    const context2 = useContext(AnotherContext)
    return (
        <div className={context2}>
            <h1>{context1}</h1>
        </div>
    )
}
