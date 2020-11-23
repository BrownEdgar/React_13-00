import React,{useState,useEffect} from 'react'
import "./App.scss"
import info from "./data.json"
import Manu from './Manu';
import Visual from "./Visual"
export default function App(props) {
    const [data, setdata] = useState([]);
    useEffect(() => {
        setdata(info.data)
    })
    return (
        <>
        <div className="app">
            {data.map(elem =>(
                <div key={elem.id}>
                    <i class="fas fa-exclamation"></i>
                    <p>{elem.description}</p>
                <div className="bottom">
                <p>{elem.name} / <span>AppName</span></p>
                </div>
                </div>
            ))}
        </div>
        <Visual cl="visual"/>
        <Manu/>
        </>
    )
}
