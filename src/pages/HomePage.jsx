import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/Home/ProductCard'
import SideBar from '../components/Home/SideBar'
import { getProductsByNameThunk } from '../store/slices/products.slice'
import './styles/homePage.css'

const HomePage = () => {

  const { products } = useSelector(state => state)
  const dispatch = useDispatch()

  const [fromTo, setFromTo] = useState({
    from:0,
    to: Infinity})


  const handleSubmit = e => {
    e.preventDefault()

    const input = e.target.inputSearch.value.trim().toLowerCase();

    dispatch(getProductsByNameThunk(input))

    e.target.inputSearch.value = ''
  }

  const handleSubmitPrice = e => {
    e.preventDefault()
    const from = +e.target.from.value.trim()
    const to = +e.target.to.value.trim()
    
    if(from && to){
      setFromTo({from, to})
    } else if(from && !to){
      setFromTo({from, to: Infinity})
    }else if(!from && to){
      setFromTo({from: 0, to})
    }else {
      setFromTo({from: 0, to: Infinity})
    }
  }
  
  const filterProduct = product => +product.price >= fromTo.from && +product.price <= fromTo.to



  return (
    <div className='home__page'>

<article className='content__category'>
        <header className='header__category'>
          <h3>Price</h3>
          <i className='bx bx-chevron-down'></i>
        </header>
        <hr />
        <form onSubmit={handleSubmitPrice}>
          <div className='content__input-filter'>
          <label htmlFor="from">From</label>
          <input type="number" id='from' />
          </div>
          <div className='content__input-filter'>
          <label htmlFor="to">To</label>
          <input type="number" id='to' />
          </div>
          <button className='btn__filter-price'>Filter Price</button>
        </form>
        <div>
        <SideBar />
        </div>
        
      </article>


      

      <div className="content__homePage">

        <form onSubmit={handleSubmit}>
          <input className='input__home' id='inputSearch' type="text" placeholder='What are you looking for?' />
          <button className='btn__home'><i className='bx bx-search-alt-2'></i></button>
        </form>

        <div className='content__products-home'>
          {
            products?.length === 0 ?
            <h1>X This product does'n exist X</h1>
          :
            products?.filter(filterProduct).map(product => (
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