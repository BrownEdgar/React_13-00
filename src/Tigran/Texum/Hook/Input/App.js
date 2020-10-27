import React, {useState}from 'react'

export default function App() {
    const [name, setname] = useState("")

    const changeContent = (e) => {
        setname(e.target.value)
    }
    return (
        <div>
            <input type="text" value={name} onChange={changeContent} />
            <button>Submit</button>
        </div>
    )
}


