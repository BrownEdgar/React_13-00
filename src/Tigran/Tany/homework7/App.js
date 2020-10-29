import React from 'react'
import Child from './Child'
export const MyContext = React.createContext([{ id: 0, name: "keks", age: 18 }])

export default function App() {
    return (
        <div>
            <Child></Child>
        </div>
    )
}
