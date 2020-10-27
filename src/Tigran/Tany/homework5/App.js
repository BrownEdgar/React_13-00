import React, { useState, useEffect } from 'react'
import "./App.css"

export default function App() {
    const [color, setcolor] = useState(null)
    const stylechanger = {
        background: color
    }
    return (
        <header>
            <div
                style={stylechanger}
                className="main"
            >
                <input type="color" value={color} onChange={e => setcolor(e.target.value)} />
            </div>
        </header>
    )
}
