import React from 'react'
import Child from './Child'
export const MyContext = React.createContext('my Context value')
export const AnotherContext = React.createContext('box')


export default function App() {
    return (
        <div>
            <Child></Child>
        </div>
    )
}
