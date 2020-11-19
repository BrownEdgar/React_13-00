import React, { useState } from 'react'
import "./App.scss"

export default function App() {
    const [data, setdata] = useState(
        [
            {
                "id": 1,
                "header": "Free",
                "price": 0,
                "bandwidth": ":1Gb",
                "onlinespace": ":50MB",
                "support": ":NO",
                "domain": "-",
                "hidenfees": "-"
            },
            {
                "id": 2,
                "header": "Economy",
                "price": 19,
                "bandwidth": ":1Gb",
                "onlinespace": ":500MB",
                "support": ":YES",
                "domain": 5,
                "hidenfees": "-"

            },
            {
                "id": 3,
                "header": "Deluxe",
                "price": 29,
                "bandwidth": ":1Gb",
                "onlinespace": ":2000MB",
                "support": ":YES",
                "domain": 10,
                "hidenfees": "NO"
            }
        ]
    )
    return (
        <div className="main">
            <div className="header">
                <h1>Linexon</h1>
                <button>HOME</button>
                <button>features</button>
                <button>services</button>
                <button>client</button>
                <button>team</button>
                <button>pricing</button>
                <button>contact</button>
            </div>
            <div className="second">
                <div className="glxavor">
                    <h1>Our Pricing</h1>
                    <p><i class="fas fa-minus"></i><i class="fab fa-aws"></i><i class="fas fa-minus"></i></p>
                </div>
                <div className="box">
                    {data.map(elem => {
                        return <div key={elem.id}>
                            <div className="context">
                                <h1>{elem.header}</h1>
                                <div className="babl">
                                    <p>${elem.price}<span>/m</span></p>
                                </div>
                                <p>Bandwidth{elem.bandwidth}</p>
                                <p>Onlinespace{elem.onlinespace}</p>
                                <p>Support{elem.support}</p>
                                <p>Domain:{elem.domain}</p>
                                <p>Hidenfees:{elem.hidenfees}</p>
                                <button>Join Now</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
