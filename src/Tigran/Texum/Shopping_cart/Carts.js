import React from 'react'
import PropTypes from "prop-types"
import Cart from './Cart'

export default function Carts(props) {
    return (
        <>
            {props.data.map(elem => (
                <Cart
                    key={elem.id}
                    id={elem.id}
                    title={elem.title}
                    price={elem.price}
                    url={elem.url}
                    size={elem.size}
                    quantitiy={elem.quantitiy}
                ></Cart>
            ))}
        </>
    )
}
Carts.propTypes = {
    data: PropTypes.array.isRequired,
}
