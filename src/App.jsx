import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductInfo from './components/ProductCard/ProductInfo'
import Header from './components/shared/Header'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PurchasesPage from './pages/PurchasesPage'
import RegisterPage from './pages/RegisterPage'
import { getProductsCartThunk } from './store/slices/cart.slice'
import { getAllProductsThunk } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getProductsCartThunk())
  }, [])

  const [isCart, setIsCart] = useState(false)

  return (
    <div className="App">

      <Header isCart={isCart} setIsCart={setIsCart} />

      <CartPage isCart={isCart} setIsCart={setIsCart} />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/:id' element={<ProductInfo />} />

        <Route path='/user'>
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/purchases' element={<PurchasesPage />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
