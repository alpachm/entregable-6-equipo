import axios from 'axios'
import React, { useState } from 'react'
import './styles/detailInfo.css'
import config from '../../utils/config'
import { useDispatch } from 'react-redux'
import { getProductsCartThunk } from '../../store/slices/cart.slice'

const DetailInfo = ({ product }) => {

    const dispatch = useDispatch()
    const [counter, setCounter] = useState(1)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if (counter > 1) setCounter(counter - 1)
    }

    const handleAddCart = () => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart`

        const data = {
            quantity: counter,
            productId: product.id
        }

        axios.post(url, data, config)
            .then(res => {
                dispatch(getProductsCartThunk())
                console.log(res.data)
            })
            .catch(err => console.log(err))

        setCounter(1)
    }

    return (
        <div className='detail__info'>
            <span>{product?.brand}</span>
            <h3>{product?.title}</h3>
            <p>{product?.description}</p>
            <section>
                <div>
                    <span>Price</span>
                    <h4 className='price'>{product?.price}</h4>
                </div>
                <div>
                    <span>Quantity</span>
                    <div>
                        <button onClick={handleMinus}>-</button>
                        <p>{counter}</p>
                        <button onClick={handleAdd}>+</button>
                    </div>
                </div>
            </section>
            <button onClick={handleAddCart}>Add to cart <i className='bx bxs-cart-alt' ></i></button>
        </div>
    )
}

export default DetailInfo