import React from 'react'
import {MyContext} from "../App"
export default function Component(props) {
    return (
        <div>
            <MyContext.Consumer>
                {value => {
                     return (   
                     <div>
                            <h1>{value.age}</h1>
                            <h1>{value.name}</h1>

                    </div> 
                     )
                }}
            </MyContext.Consumer>
            
        </div>
    )
}
