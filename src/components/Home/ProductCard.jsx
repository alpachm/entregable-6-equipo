import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/productCard.css'
import config from '../../utils/config'
import { useDispatch } from 'react-redux'
import { getProductsCartThunk } from '../../store/slices/cart.slice'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/products/${product.id}`)
    }

    const handleBtnClick = e => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart`

        const data = {
            quantity: 1,
            productId: product.id
        }

        axios.post(url, data, config)
            .then(res => {
                dispatch(getProductsCartThunk())
                console.log(res.data)
            })
            .catch(err => console.log(err))

        e.stopPropagation()
    }

    return (
        <article onClick={handleClick} className='product__card'>
            <header>
                <img src={product.images[0].url} alt="" />
            </header>
            <section>
                <div>
                    <h3>{product.brand}</h3>
                    <h2>{product.title}</h2>
                </div>
                <div>
                    <h3>Price</h3>
                    <h2 className='price'>{product.price}</h2>
                </div>
                <i onClick={handleBtnClick} className='bx bxs-cart-alt' ></i>
            </section>
        </article>
    )
}

export default ProductCard