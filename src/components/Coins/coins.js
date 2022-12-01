import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchAssets } from '../../redux/Coins/coinsSlice';
import './Coins.css';

const Coins = () => {
  const dispatch = useDispatch;
  const assets = useSelector((state) => state.coins);
  useEffect(() => {
    if (!assets.length) {
      [
        dispatch(fetchAssets()),
      ];
    }
  });

  const [searchcoin, setSearchcoin] = useState('');
  const onSeach = (e) => {
    e.preventDefault();
    setSearchcoin(e.targer.value);
  };

  if (searchcoin.length > 0) {
    const searched = assets.filter(
      (filteredCoin) => filteredCoin.name.toLowerCase().includes(searchcoin.toLowerCase())
                || filteredCoin.symbol.toLowerCase().includes(searchcoin.toLowerCase()),
    );
  }

  return (

    <div className="container">
      <div className="search">
        <input
          type="text"
          value={searchcoin}
          onChange={onSearch}
        />
      </div>
      <div className="coins">
        {searched.map((asset) => (
          <div
            className="coll"
            key={`${asset.asset_id}${Math.random * 10}`}
          >
            <Link
              className="coin-card"
              Key={asset.asset_id}
              to={`/coin/${asset.id}`}
            >
              <div className="price">
                <p>{asset.price}</p>
              </div>
              <div>
                <div>
                  <img className="icon" src={asset.icon} alt={asset.name} />
                </div>
                <div className="asset-detail">
                  <span className="asset-code">{asset.symbol}</span>
                  <span className="asset-name">{asset.name}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Coins;
