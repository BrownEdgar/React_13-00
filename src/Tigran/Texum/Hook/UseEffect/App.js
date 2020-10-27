import React, { useState, useEffect } from 'react'

export default function App() {
    const [mousePosition, setmousePosition] = useState({
        x: null,
        y: null
    })
    useEffect(() => {
        window.addEventListener("mousemove", getMouseposition)
        return () => {
            window.removeEventListener("mousemove", getMouseposition)
        }
    }, [mousePosition]) //kaxvacutyuna grvuma storaketic heto zangvaci mej
    const getMouseposition = (event) => {
        setmousePosition({
            x: event.pageX,
            y: event.pageY
        })
    }
    return (
        <div>
            <h1>position x:{mousePosition.x}</h1>
            <h1>position y:{mousePosition.y}</h1>
        </div>
    )
}