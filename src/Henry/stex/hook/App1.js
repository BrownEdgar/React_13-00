import React, { useState, useEffect } from 'react'
export default function App() {
  const [mousePosition, setmousePosition] = useState({
    x: null,
    y: null
  })
  useEffect(() =>{
    console.log("useEffect run ");
    window.addEventListener('resize', getMouseposition);
    return () => {
      window.removeEventListener('resize', getMouseposition);
    }
  }, [mousePosition])
  const getMouseposition = (event) =>{
    setmousePosition({
      x:event.target.innerWidth,
      y:event.target.innerHeight,
    })
  }
  return (
    <div>
      <h1>position x: {mousePosition.x} </h1>
      <h1>position y: {mousePosition.y}</h1>
    </div>
  )
}
