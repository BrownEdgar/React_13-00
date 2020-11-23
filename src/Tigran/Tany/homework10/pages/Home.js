import React from 'react'
import { NavLink } from 'react-router-dom'
import data from "./data.json"
import page1 from "./page1.module.scss"

export default function Home(props) {
    return (
        <div>
            <div className={page1.header}>
                    <h1>Complete eCommerce Solution</h1>
                <div className={page1.box1}>
                    {data.data.map(elem => {
                        return <div className="divik" key={elem.id}>
                            <img src={elem.photo} alt="Something Went wrong"/>
                            <h4>{elem.title}</h4>
                            <p>{elem.context}</p>
                        </div>
                    })}
                </div>
                <div className={page1.knopka}>
                    <button> <NavLink to="/register" className={page1.NavLink}>Start Selling Now</NavLink></button>
                </div>
                <div className={page1.box2}>
                    <h1>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis, nulla quaerat perferendis autem vitae."</h1>
                    <div>
                    <p>RanD Pitts</p>
                    <p>Owner<a href="">Evolve Clothing Gallary</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
