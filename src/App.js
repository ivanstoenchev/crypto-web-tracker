import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './Components/layout/Layout';
import CryptocurrenciesInfo from './Components/pages/CryptocurrenciesInfo';
import CryptocurrenciesNews from './Components/pages/CryptocurrenciesNews';
import CoinDetails from './Components/pages/CoinsDetail';
import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [coins, setCoins] = useState();

  async function fetchCryptoCurrencies() {
    try {
      const res = await fetch('http://localhost:8000/cryptocurrency');
      const data = await res.json();
      setCoins(data);
    } catch (err) {
      console.log(err);
    }
  }; 

  useEffect(() => {
    try {
      fetchCryptoCurrencies();
      
    } catch (error) {
      console.log(error);
    };
  }, []);

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<AppLayout />}>
          <Route path='/cryptocurrency/:id' element={<CoinDetails coins={coins} />} />
          <Route path='/cryptocurrency' element={<CryptocurrenciesInfo coins={coins} />} />
          <Route path='/crytonews' element={<CryptocurrenciesNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
