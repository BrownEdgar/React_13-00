import React, {useState,useEffect} from 'react'
import Manu from './Manu'
import "./App.css"
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
        <p>Our <span>Prices</span></p>
        <div className="box">
        
        {data.map(elem =>(
                <div key={elem.id}>
                    <p>{elem.packet}</p>
                    <p>{elem.price}</p>
                    <p>{elem.bandwidth}</p>
                    <p>{elem.onlinespace}</p>
                    <p>{elem.suport}</p>
                    <button>JOIN NOW</button>
                </div>
            ))}
            </div>
        </>
    )
}
