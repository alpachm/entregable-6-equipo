import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Purchase from '../components/Purchases/Purchase'
import config from '../utils/config'

const PurchasesPage = () => {

    const [purshases, setPurshases] = useState()

    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`

        axios.get(url, config)
            .then(res => setPurshases(res.data))
            .catch(err => console.log())
    }, [])

    console.log(purshases);

    return (
        <div className='purchase__page padding__top'>
            <h1 className='tittle__purchase'>My purchases</h1>

            <div className="box__purchases">
                {
                    purshases?.map(purchase => (
                        <Purchase
                            key={purchase.id}
                            purchase={purchase}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PurchasesPage