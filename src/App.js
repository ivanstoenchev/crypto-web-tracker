import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './Components/layout/Layout';
import CryptocurrenciesInfo from './Components/pages/CryptocurrenciesInfo';
import CryptocurrenciesNews from './Components/pages/CryptocurrenciesNews';
import CoinDetails from './Components/pages/CoinsDetail'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<AppLayout />}>
          <Route path='/cryptocurrency/:id' element={<CoinDetails />} />
          <Route path='/cryptocurrency'  element={<CryptocurrenciesInfo />} />
          <Route path='/crytonews' element={<CryptocurrenciesNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
