import React from 'react'
import Car from './Car'

export default function Cars(props) {
    const main={
        
            "width": "100%",
            "height": "auto",
            "background-color": "#ccc",
            "display": "flex",
            "justify-content": "space-around",
           " align-items": "center",
           " flex-direction": "row",
            "flex-wrap": "nowrap";
        
    }
    return (
        <div style={main}>
            {props.carOptions.map(elem=>{
                return <Car
                key={elem.id}
                name={elem.name}
                model={elem.model}
                year={elem.year}
                price={elem.price}
                img={elem.img}
                />
            })}
        </div>
    )
}
