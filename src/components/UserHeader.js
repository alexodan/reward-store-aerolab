import React from 'react';
import './UserHeader.css';
import coinIcon from '../assets/coin.svg';

const UserHeader = ({ user, coins, history } = {}) => {
  return (
    <div className="UserHeader">
      <div className="logo">
        <img src="images/aerolab-logo.svg" />
      </div>
      <div className="user-data">
        <span className="user">{user}</span>
        <div className="wallet">
          <span>{coins}</span>
          <img src={coinIcon} alt="coins" />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
