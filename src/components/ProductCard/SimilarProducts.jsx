import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Home/ProductCard'
import './styles/similarProducts.css'

const SimilarProducts = ({ productSelect }) => {

    const { products } = useSelector(state => state)
    const [filterProducts, setFilterProducts] = useState()

    useEffect(() => {
        setFilterProducts(products?.filter(product => product.category.id === productSelect?.category.id && product.id !== productSelect?.id))
    }, [productSelect])

    return (
        <div className='similar__products'>
            <h3>Discover similar products</h3>

            <div className="box__similarProducts">
                {
                    filterProducts?.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SimilarProducts