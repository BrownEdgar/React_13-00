import React, { useState, useEffect } from 'react'
import "./App.scss"
import info from "./data.json"
import Manu from './Manu.jsx'
import Visual from './Visual'

export default function App(props) {
    const [data, setdata] = useState([])
    useEffect(() => {
        setdata(info.data)
    }, [])
    return (
        <>
            <div className="app">
                {data.map(elem => {
                    return <div key={elem.id}>
                        <i class="fas fa-exclamation"></i>
                        <p>{elem.content}</p>
                        <div className="bottom"></div>
                        <p>{elem.name} / <span>AppName</span></p>
                    </div>
                })}
            </div>
            <Visual cl="visual" />
            <Manu />
        </>
    )
}
