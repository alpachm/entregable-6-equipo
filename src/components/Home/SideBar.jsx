import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsByNameThunk } from '../../store/slices/products.slice'
import './styles/sideBar.css'

const SideBar = () => {

    const dispatch = useDispatch()
    const [categories, setCategories] = useState()

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/categories`

        axios.get(url)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleSubmitCategory = id => {
        dispatch(getProductsByNameThunk(id, true))
    }



    return (
        <div className='sideBar'>

            <header className='content__icon-sideBar'>
                <h3>Category</h3>
                <i className='bx bx-chevron-down'></i>
            </header>
            <hr />
            <ul>
                {
                    categories?.map(category => (
                        <li onClick={() => handleSubmitCategory(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideBar