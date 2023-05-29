import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import './cryptoStyles.css'

export default function CryptocurrenciesInfo({ coins }) {

    const [cSearch, setCSearch] = useState("");

    if (!coins) return null;
    
    return (
        <>
            <section className="section-style">
                <h1>This is Cryptocurrencies</h1>
                <div className="search-bar-style">
                    <input type="text" placeholder="Search for crypto..." className="search-bar" onChange={(e) => setCSearch(e.target.value)} />
                </div>
                <table className="tableStyle">
                    <thead>
                        <tr className="tr-style-header">
                            <td className="rank-style">Rank</td>
                            <td className="name-style">Name</td>
                            <td className="price-style">Price</td>
                            <td className="market-style">Market Cap</td>
                            <td className="volume-style">Volume(24hr)</td>
                        </tr>
                    </thead>
                    <tbody>

                        {coins?.filter((item) => item.name.toLowerCase().includes(cSearch.toLowerCase())).map((coin) => (
                            <tr key={coin.id}>
                                <td className="rank-style">{coin.cmc_rank}</td>
                                <td className="name-style"> <Link to={`/cryptocurrency/${coin.symbol}`}><span className="text-name-style">{coin.name}</span><span className="symbol-style">{coin.symbol}</span></Link></td>
                                <td className="price-style">${coin.quote.USD.price.toLocaleString('en')}</td>
                                <td className="market-style">${coin.quote.USD.market_cap.toLocaleString('en')}</td>
                                <td className="volume-style">${coin.quote.USD.volume_24h.toLocaleString('en')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}