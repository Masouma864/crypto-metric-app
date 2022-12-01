import './App.css';
import { Route, Routes } from 'react-router-dom';
import Coins from './components/Coins/Coins';
import Header from './components/Header/header';
import Coin from './components/Coins/Coin';

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
