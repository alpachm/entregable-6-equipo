import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import './styles/registerPage.css'
import defaultValues from '../utils/defaultValues'
import axios from 'axios'

const RegisterPage = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users`

        axios.post(url, data)
            .then(res => {
                navigate('/')
                console.log(res.data)
            })
            .catch(err => console.log(err))

        reset(defaultValues)
    }

    return (
        <div className='register__page padding__top'>
            <form onSubmit={handleSubmit(submit)}>
                <h1>Sign up</h1>

                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input {...register('firstName')} type="text" id='firstName' />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input {...register('lastName')} type="text" id='lastName' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} type="email" id='email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} type="password" id='password' />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input {...register('phone')} type="number" id='phone' />
                </div>
                <button>Sign up</button>
                <p>Already have an account? <Link>Log in</Link></p>
            </form>
        </div>
    )
}

export default RegisterPage