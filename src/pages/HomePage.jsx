import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/Home/ProductCard'
import SideBar from '../components/Home/SideBar'
import { getProductsByNameThunk } from '../store/slices/products.slice'
import './styles/homePage.css'

const HomePage = () => {

  const { products } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    const input = e.target.inputSearch.value.trim().toLowerCase();

    dispatch(getProductsByNameThunk(input))

    e.target.inputSearch.value = ''
  }

  return (
    <div className='home__page'>

      <SideBar />

      <div className="content__homePage">

        <form onSubmit={handleSubmit}>
          <input id='inputSearch' type="text" placeholder='What are you looking for?' />
          <button><i className='bx bx-search-alt-2'></i></button>
        </form>

        <div className="box__products">
          {
            products?.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage