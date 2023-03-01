import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllProductsThunk } from '../../store/slices/products.slice'
import './styles/header.css'

const Header = ({ isCart, setIsCart }) => {

    const dispatch = useDispatch()
    const [isMenuMobile, setIsMenuMobile] = useState(false)

    const showMenuMobile = () => {
        isMenuMobile ? setIsMenuMobile(false) : setIsMenuMobile(true)
    }

    const hideMenuMobile = () => {
        setIsMenuMobile(false)
    }

    const handleClickBtnCart = () => {
        setIsMenuMobile(false)
        isCart ? setIsCart(false) : setIsCart(true)
    }

    const handleClickLogo = () => {
        dispatch(getAllProductsThunk())
    }

    return (
        <header className='headerPage'>
            <div className="content__headerPage">
                <Link onClick={handleClickLogo} to='/'><h1>e-commerce</h1></Link>

                <nav className={`${isMenuMobile && 'show__menuMobile'}`}>
                    <ul>
                        <li><Link onClick={hideMenuMobile} to='/user/login'><i className='bx bx-user' ></i> Login</Link></li>
                        <li><Link onClick={hideMenuMobile} to='/purchases'><i className='bx bx-box' ></i> Purchases</Link></li>
                        <li><Link onClick={handleClickBtnCart}><i className='bx bx-cart' ></i> Cart</Link></li>
                    </ul>

                </nav>
                <i onClick={showMenuMobile} className='bx bx-menu'></i>
            </div>

        </header>
    )
}

export default Header