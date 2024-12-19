// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import './Currency.css';

export default function Currency() {
    const { id } = useParams(); // Lấy tham số id từ URL

    const [coin, setCoin] = useState({
        name: "",
        symbol: "",
        price_btc: "",
        price_usd: "",
        volume24: 0,
    });

    useEffect(() => {
        let isMounted = true; // Cờ kiểm tra component còn mounted

        const fetchData = async () => {
            try {
                const response = await Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`);
                if (isMounted) {
                    setCoin({
                        name: response.data[0].name,
                        symbol: response.data[0].symbol,
                        price_btc: response.data[0].price_btc,
                        price_usd: response.data[0].price_usd,
                        volume24: response.data[0].volume24,
                    })
                }
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchData();

        // Cleanup khi component unmount
        return () => {
            isMounted = false;
        };
    }, [id]); // Thêm id vào dependency để đảm bảo chạy đúng khi id thay đổi

    return (
        <div>
            <h1>Name: {coin.name}</h1>
            <h1>Symbol: {coin.symbol}</h1>
            <h1>Price in BTC: {coin.price_btc}</h1>
            <h1>Price in USD: {coin.price_usd}</h1>
            <h1>Volume in the last 24 hours: {coin.volume24}</h1>
        </div>
    );
}
