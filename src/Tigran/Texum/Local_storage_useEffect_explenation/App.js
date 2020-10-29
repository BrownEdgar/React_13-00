import React, { useEffect, useState } from 'react'

export default function App() {
    const [data, setdata] = useState(localStorage.getItem("data") === null ? []
        : JSON.parse(localStorage.getItem('data')))
    const addProduct = (product) => {
        localStorage.setItem("data", JSON.stringify(product))
    }
    let content = data.length > 0
        ? data.map((elem, index) => <li key={index}>{elem}</li>)
        : <h1>Spasum enq patasxani</h1>
    return (
        <div>
            {content}
            <button onClick={() => addProduct(["Майки", "S", "400 руб"])}>Добавить в корзину</button>
        </div>
    )
}
