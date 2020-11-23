import React from 'react'
import "./Input.css"

function isInvalid({ valid, touched, shouldValidate }) {
    return !valid && shouldValidate && touched
}   
export default function Input(props) {
    const inputType = props.type || "text"
    const cls = ["Input"] || "text"
    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid(props)) {
        cls.push("Invald")
    }
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            {isInvalid(props)
                ? <span>{props.errorMassage || "ВВедите верное значение"}</span>
                : null}
        </div>
    )
}
