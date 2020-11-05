import React from 'react'

export default function Cart(props) {
    return (
        <div className="shoppingBag-detail">
            <div className="w-image">
                <img src={props.url} alt={props.title}/>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
