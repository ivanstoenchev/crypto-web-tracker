import React from "react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './cryptoStyles.css'

export default function CryptocurrenciesInfo() {

    const [coins, setCoins] = useState();

    async function fetchCryptoCurrencies() {
        try {
            const res = await fetch('http://localhost:8000/cryptocurrency');
            const data = await res.json();
            setCoins(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        try {
            fetchCryptoCurrencies();
        } catch (error) {
            console.log(error);
        };
    },[]);

    if (!coins) return null;

    // console.log(coins);



    return (
        <>
            <h1>This is Cryptocurrencies</h1>

            <table className="tableStyle">
                <thead>
                    <tr>
                        <td className="rank-style">Rank</td>
                        <td className="name-style">Name</td>
                        <td className="price-style">Price</td>
                        <td className="market-style">Market Cap</td>
                        <td className="volume-style">Volume(24hr)</td>
                    </tr>
                </thead>
                <tbody>

                    {coins?.map((coin) => (
                        <tr key={coin.id}>
                            <td className="rank-style">{coin.cmc_rank}</td>
                            <td className="name-symbol-style"> <Link to={`/cryptocurrency/${coin.id}`}><span className="text-name-style">{coin.name}</span>   <span className="symbol-style">{coin.symbol}</span></Link></td>
                            <td>{coin.quote.USD.price}</td>
                            <td>{coin.quote.USD.market_cap}</td>
                            <td>{coin.quote.USD.volume_24h}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}