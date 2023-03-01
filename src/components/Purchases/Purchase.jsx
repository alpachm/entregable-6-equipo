import React from 'react'

const Purchase = ({ purchase }) => {
    return (
        <div className='purchase__card'>
            <header>
                <img src={purchase.product.images[0].url} alt="" />
            </header>
            <h3>{purchase.product.title}</h3>
            <p>{purchase.quantity}</p>
            <span className='price'>{purchase.product.price}/each</span>
        </div>
    )
}

export default Purchase