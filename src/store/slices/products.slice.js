import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setAllProducts: (state, action) => action.payload,
    }
})

export const { setAllProducts } = productSlice.actions
export default productSlice.reducer

export const getAllProductsThunk = () => dispatch => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products`

    axios.get(url)
        .then(res => dispatch(setAllProducts(res.data)))
        .catch(err => console.log(err))
}

export const getProductsByNameThunk = (text = '', isCategory = false) => dispatch => {

    let url

    if (isCategory) {
        url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${text}`
    } else {
        url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${text}`
    }

    axios.get(url)
        .then(res => dispatch(setAllProducts(res.data)))
        .catch(err => console.log(err))
}        
