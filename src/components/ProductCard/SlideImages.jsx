import React from 'react'

const SlideImages = ({ product }) => {
    return (
        <div>
            <img src={product?.images[0].url} alt="" />
        </div>
    )
}

export default SlideImages