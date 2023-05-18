import React from "react"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./coinsDetails.css"


export default function CoinDetails() {

    const { id } = useParams();    
    const [dCoins, setdCoins] = useState();
       
    
    let cryptoName;
    let cryptoSymbol;
    let cryptoPrice;
    let hoursPrice24;
    let volumeChange24;
    let percentChangeHour1;
    let percentChangeHour24;
    let percentChangeDays7;
    let percentChangeDays30;
    let percentChangeDays60;
    let percentChangeDays90;
    let marketCap;
    let marketCapDominance;


    const fetchCoinDetails = async () => {
        try {
            const res = await fetch(`http://localhost:8000/cryptocurrency`);
            const coinData = await res.json();
            setdCoins(coinData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        try {
            fetchCoinDetails();
        } catch (error) {
            console.log(error);
        };
    }, []);    
    
    dCoins?.forEach(el => {
        if(el.id === Number(id)) {
            cryptoName = el.name;
            cryptoSymbol = el.symbol;
            cryptoPrice = el.quote.USD.price;
            hoursPrice24 = el.quote.USD.volume_24h;
            volumeChange24 = el.quote.USD.volume_change_24h;
            percentChangeHour1 = el.quote.USD.percent_change_1h;
            percentChangeHour24 = el.quote.USD.percent_change_24h;
            percentChangeDays7 = el.quote.USD.percent_change_7d;
            percentChangeDays30 = el.quote.USD.percent_change_30d;
            percentChangeDays60 = el.quote.USD.percent_change_60d;
            percentChangeDays90 = el.quote.USD.percent_change_90d;
            marketCap = el.quote.USD.market_cap;
            marketCapDominance = el.quote.USD.market_cap_dominance;
        }
    });

    
     
    return (
        <>
            <button>Go back</button>
            <section className="wrap-section">

                <section className="main-name-section">
                    <img src="" alt="logo" />
                    <h2><span>{cryptoName}</span> | <span>{cryptoSymbol}</span></h2>
                    <h4>${cryptoPrice?.toLocaleString('en')}</h4>
                </section>

                <section className="main-price-section">
                    <article className="price-article">
                        <div>${hoursPrice24?.toLocaleString('en')}</div>
                        <div>${volumeChange24?.toLocaleString('en')}</div>
                    </article>

                    <article className="article-change-price">
                        <div>{percentChangeHour1?.toFixed(2)}%</div>
                        <div>{percentChangeHour24?.toFixed(2)}%</div>
                        <div>{percentChangeDays7?.toFixed(2)}%</div>
                    </article>

                    <article className="article-change-days">
                        <div>{percentChangeDays30?.toFixed(2)}%</div>
                        <div>{percentChangeDays60?.toFixed(2)}%</div>
                        <div>{percentChangeDays90?.toFixed(2)}%</div>
                        <div>${marketCap?.toLocaleString('en')}</div>
                        <div>${marketCapDominance?.toLocaleString('en')}</div>
                    </article>
                </section>

            </section>
        </>
    )
}