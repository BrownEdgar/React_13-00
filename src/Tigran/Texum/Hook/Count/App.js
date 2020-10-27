import React, { useState } from 'react'

export default function App() {
    const [count, setcount] = useState(0)
    const addCount = () => {
        setcount(prevCount => prevCount + 1)//ete chgrem row functionov miajamank 2snel chen kgumaren u mek mek kbarcana ete angam krknem nuyn bany
        setcount(prevCount => prevCount + 1)// ete uxaki grem count + 1 amen angam uxaki mek klini kap chuni te qani angam em krkne nuyn kody
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addCount}>add</button>
        </div>
    )
}
