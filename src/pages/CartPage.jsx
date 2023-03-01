import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsCart from '../components/Cart/ProductsCart'
import { getProductsCartThunk } from '../store/slices/cart.slice'
import './styles/cartPage.css'
import config from '../utils/config'

const CartPage = ({ isCart, setIsCart }) => {

  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setTotalPrice(cart?.reduce((acc, cv) => acc + cv.quantity * Number(cv.product.price), 0))
  }, [cart])

  const hideCart = () => {
    setIsCart(false)
  }

  const handlePurchase = () => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`

    axios.post(url, {}, config)
      .then(res => {
        dispatch(getProductsCartThunk())
        console.log(res.data);
      })
      .catch()
  }

  return (
    <div className={`cart__page ${isCart && 'show__cart'}`}>
      <div className="products__cart">
        <header>
          <h2>Shopping cart</h2>
          <span onClick={hideCart}><p>Close</p> <i className='bx bx-x' ></i></span>
        </header>

        <div className="box__productsCart">
          {
            cart?.map(prod => (
              <ProductsCart
                key={prod.id}
                prod={prod}        
              />
            ))
          }
        </div>
      </div>
      <footer>
        <section>
          <h4>Total</h4>
          <h4 className='price'>{totalPrice}</h4>
        </section>
        <button onClick={handlePurchase}>Checkout</button>
      </footer>
    </div>
  )
}

export default CartPage