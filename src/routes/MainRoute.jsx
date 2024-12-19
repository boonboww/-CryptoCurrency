// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect } from 'react'
import '../App.css'
import Axios from 'axios'
import { useState } from 'react'

function MainRoute() {

    const [cryptoList, setCryptoList] = useState([])
    useEffect(() => {
        Axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=100').then((respone) => {
            setCryptoList(respone.data["data"])
            // console.log(respone.data["data"])
        })
    }, [])

    return (

        <><div id='header'>
            <h1>CryptoLand</h1>
        </div><div className='cryptoList'>
                {cryptoList.map((coin) => {
                    return (
                        <div key={coin.id}>
                            <h1>{coin.symbol}</h1>
                            <h1>{coin.price_usd}</h1>
                        </div>
                    )
                })}

            </div></>

    )
}

export default MainRoute
