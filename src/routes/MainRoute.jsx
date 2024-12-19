// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../App.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate từ react-router-dom

function MainRoute() {
    const [cryptoList, setCryptoList] = useState([]); // State lưu danh sách tiền điện tử
    const navigate = useNavigate(); // Hook điều hướng mới trong React Router v6

    // Gọi API để lấy danh sách tiền điện tử
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=100');
                setCryptoList(response.data.data); // Lưu dữ liệu vào state
            } catch (error) {
                console.error("Error fetching crypto data:", error); // Xử lý lỗi nếu có
            }
        };
        fetchData(); // Gọi hàm fetchData khi component được mount
    }, []); // useEffect chạy 1 lần khi component render lần đầu tiên

    return (
        <>
            <div id="header">
                <h1>CryptoLand</h1>
            </div>
            <div className="cryptoList">
                {cryptoList.map((coin) => {
                    return (
                        <div
                            key={coin.id}
                            onClick={() => {
                                navigate(`/currency/${coin.id}`); // Điều hướng đến chi tiết tiền điện tử
                            }}
                            className="crypto-item"
                        >
                            <h1>{coin.symbol}</h1>
                            <h1>{coin.price_usd}</h1>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default MainRoute;
