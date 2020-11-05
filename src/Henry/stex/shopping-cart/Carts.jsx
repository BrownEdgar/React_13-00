import React from 'react'
import PropTypes from 'prop-types'
import Cart from './Cart'

export default function Carts(props) {
    return (
        <>
           {props.data.map((elem,index) =>(
               <Cart/>
           ))} 
        </>
    )
}
Carts.propTypes ={
    data:PropTypes.array.isRequired,
}
