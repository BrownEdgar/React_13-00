import React, {useState,useEffect} from 'react'
import Manu from './Manu'
import "./App.scss"
import info from "./data.json"

export default function App(props) {
    const [data, setdata] = useState([]);
    useEffect(() => {
        setdata(info.data)
    })
    return (
        <>
        <div className="app">
            <h1>linexon</h1>
            <Manu/>
            
        </div>
        <p className="p">Our <span>Prices</span></p>
        <div className="box">
        {data.map(elem =>(
                <div key={elem.id}>
                    <h1>{elem.packet}</h1>
                    <h2>{elem.price}</h2>
                    <p id="first">{elem.bandwidth}</p>
                    <p>{elem.onlinespace}</p>
                    <p>{elem.suport}</p>
                    <button>JOIN NOW</button>
                </div>
            ))}
            </div>
        </>
    )
}
