import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailInfo from './DetailInfo'
import SimilarProducts from './SimilarProducts'
import SlideImages from './SlideImages'
import './styles/productInfo.css'

const ProductInfo = () => {

    const { id } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`

        axios.get(url)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div className='product__info'>
            <div className="content__productInfo">
                <div className="top__productInfo">
                    <SlideImages product={product} />
                    <DetailInfo product={product} />
                </div>
                <SimilarProducts productSelect={product} />
            </div>
        </div>
    )
}

export default ProductInfo