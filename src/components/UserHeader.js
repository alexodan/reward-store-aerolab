import React, { useState } from 'react';
import './UserHeader.css';
import ProductHistory from './ProductHistory';

import coinIcon from '../assets/coin.svg';

const UserHeader = ({ user, coins, historyProducts } = {}) => {
  const [ showHistory, setShowHistory ] = useState(false);

  const toggleShowHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="UserHeader">
      <div className="header">
        <div className="logo">
          <img src="images/aerolab-logo.svg" alt="aerolab logo" />
        </div>
        <div className="user-data">
          <span className="user">{user}</span>
          <span className="show-history" onClick={() => toggleShowHistory()} role="img" aria-label="history">
            ⌛
          </span>
          <div className="wallet">
            <span>{coins}</span>
            <img src={coinIcon} alt="coins" />
          </div>
        </div>
      </div>
      <div className={`history ${showHistory ? 'active' : ''}`}>
        {historyProducts &&
          historyProducts.map(({ name, category, price, imageUrl }) => {
            return <ProductHistory key={name} name={name} category={category} price={price} imageUrl={imageUrl} />;
          })}
      </div>
    </div>
  );
};

export default UserHeader;
