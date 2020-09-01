import React from 'react';
import {MyContext} from "../App"

export default function Component(props){
    return( 
    <div>
        <MyContext.Consumer>
            {value => <h1>{value}</h1>}
        </MyContext.Consumer>
        
    </div>
    )
}
