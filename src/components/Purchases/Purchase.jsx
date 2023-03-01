import React from 'react'
import "./styles/purchase.css"

const Purchase = ({ purchase }) => {
    return (
        <div className='purchase__card'>
            <header className='purchase__content-img'>
                <img className='purchase__img' src={purchase.product.images[0].url} alt="" />
            </header>
            <h3>{purchase.product.title}</h3>
            <p className='quantity__purchase'>{purchase.quantity}</p>
            <span className='price'>{purchase.product.price}/each</span>
        </div>
    )
}

export default Purchase