import React from 'react'

export default function SuperF(Component) {
    return function SComponent(props){
        const handlerChange = () =>{
            console.log('its work')
        }
        return(
            <Component {...props} handlerChange={handlerChange}/>
        )
    }
}
