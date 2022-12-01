import './App.css';
import { Route, Routes } from 'react-router-dom';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
import Coin from './components/Coins/coin';


function App() {
  return (
    <div className="App">
      <Header />
      <Coins />
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/coin/:id/" element={<Coin />} />
      </Routes>

    </div>
  );
}

export default App;
