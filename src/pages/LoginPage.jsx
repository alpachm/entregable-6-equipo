import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import './styles/loginPage.css'
import defaultValues from '../utils/defaultValues'
import axios from 'axios'

const LoginPage = () => {

    const { register, handleSubmit, reset } = useForm()
    const [isLogin, setIsLogin] = useState()
    const navigate = useNavigate()

    const submit = data => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users/login`

        axios.post(url, data)
            .then(res => {
                setIsLogin(res.data.token)
                localStorage.setItem('name', `${res.data.user.firstName} ${res.data.user.lastName}`)
                localStorage.setItem('token', res.data.token)
                console.log(res.data)
            })
            .catch(err => {
                localStorage.clear()
                console.log(err)
            })

        reset(defaultValues)
    }

    const handleLogout = () => {
        localStorage.clear()
        setIsLogin()
        navigate('/user/login')
    }

    if (localStorage.getItem('token')) {
        return (
            <div className='card__userLogin padding__top'>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
                    <h2>Welcome {localStorage.getItem('name')}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='login__page padding__top'>
                <form onSubmit={handleSubmit(submit)}>
                    <h1>Welcome! Enter your email and password to continue</h1>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input {...register('email')} type="email" id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input {...register('password')} type="password" id='password' />
                    </div>
                    <button>Login</button>
                    <p>Don't have an account? <Link to='/user/register' >Sign up</Link></p>
                </form>
            </div>
        )
    }
}

export default LoginPage