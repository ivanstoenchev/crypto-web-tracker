const PORT = 8000;
const express = require("express");
const axios = require("axios");
const cors = require('cors')
require("dotenv").config();

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.json('hi');
})

const api = axios.create({
    method: 'GET',
    baseURL: 'https://pro-api.coinmarketcap.com',
    headers: {
        'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_COIN_API_KEY}`,
        'Accept': 'application/json',
        'Accept-Encoding': 'deflate, gzip',
    },
});
app.get('/cryptocurrency', (req, res) => {
    api('/v1/cryptocurrency/listings/latest')
        .then(response => response.data)
        .then(value => res.json(value.data))
        .catch(err => console.log(err));
});

app.get('/datalogo', (req, res) => {
    const getSymbol = req.query.symbol    
    const options = {
        method: 'GET',
        url: `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info`,
        params: { symbol:getSymbol },
        headers: {
            'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_COIN_API_KEY}`,
            'Accept': 'application/json',
            'Accept-Encoding': 'deflate, gzip',
        }
    }

    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error)
    })
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));

