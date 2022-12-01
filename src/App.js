import './App.css';
import { Route, Routes } from 'react-router-dom';
import Coins from './components/Coins/Coins';
import Header from './components/Header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Coins />
      <Routes>
        <Route path="/" element={<Coins />} />
      </Routes>

    </div>
  );
}

export default App;
