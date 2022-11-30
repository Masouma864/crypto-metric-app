import './App.css';
import Coins from './components/Coins/Coins';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

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
