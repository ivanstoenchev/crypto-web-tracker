import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router";
import axios from "axios"
import "./coinsDetails.css"


export default function CoinDetails({ coins }) {

    const { id } = useParams();
    const navigate = useNavigate();
    const [coinLogo, setCoinLogo] = useState();


    useEffect(() => {
        const getId = () => {
            const options = {
                method: 'GET',
                url: 'http://localhost:8000/datalogo',
                params: { symbol: id },
            }

            axios.request(options).then((response) => {
                setCoinLogo(response.data)
            }).catch((error) => {
                console.error(error)
            })
        };
        getId();
    }, [id]);



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
    let picLogo;
    let picLogoName;

    picLogo = coinLogo?.data[id][0].logo;
    picLogoName = coinLogo?.data[id][0].slug;
    console.log(picLogoName);
    const goBack = () => {
        navigate("/cryptocurrency");
    };

    coins?.forEach(el => {
        if (el.symbol === id) {
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
            <button onClick={goBack}>Go back</button>
            <section className="wrap-section">

                <section className="main-name-section">
                    <img src={picLogo} alt={picLogoName} />
                    <h2><span>{cryptoName}</span>|<span>{cryptoSymbol}</span></h2>
                    <h4>${cryptoPrice?.toLocaleString('en')}</h4>
                </section>

                <section className="main-price-section">
                    <article className="price-article">
                        <div className="price-style-hours">
                            <p>${hoursPrice24?.toLocaleString('en')}</p>
                        </div>
                        <div className="style-volume-change">
                            <p>${volumeChange24?.toLocaleString('en')}</p>
                        </div>
                    </article>

                    <article className="article-change-price">
                        <div className="style-percent-hours">
                            <p>{percentChangeHour1?.toFixed(2)}%</p>
                        </div>
                        <div className="style-persent-twofour">
                            <p>{percentChangeHour24?.toFixed(2)}%</p>
                        </div>
                        <div className="style-persent-seven-days">
                            <p>{percentChangeDays7?.toFixed(2)}%</p>
                        </div>
                    </article>

                    <article className="article-change-days">
                        <div className="styrl-persen-thirty-days">
                            <p>{percentChangeDays30?.toFixed(2)}%</p>
                        </div>
                        <div className="style-change-sixty-days">
                            <p>{percentChangeDays60?.toFixed(2)}%</p>
                        </div>
                        <div className="style-change-ninety-days">
                            <p>{percentChangeDays90?.toFixed(2)}%</p>
                        </div>
                        <div className="style-market-cap">
                            <p>${marketCap?.toLocaleString('en')}</p>
                        </div>
                        <div className="style-market-cap-dominance">
                            <p>${marketCapDominance?.toLocaleString('en')}</p>
                        </div>
                    </article>
                </section>
            </section>
        </>
    )
}