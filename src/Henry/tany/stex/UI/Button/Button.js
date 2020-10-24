import React from 'react'
import './Button.css'
export default function Button(props) {
    let cl = props.type;
    return (
        <div>
            <button 
            onClick={props.onClick}
            className={`btn btn-${cl}`}>{props.btnName || 'Button'}</button>
        </div>
    )
}
