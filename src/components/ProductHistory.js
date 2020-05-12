import React from 'react';

import coinIcon from '../assets/coin.svg';
import './ProductHistory.css';

const ProductHistory = ({ name, category, price, imageUrl }) => {
  return (
    <div className="ProductHistory">
      <div className="left">
        <img src={imageUrl} alt={name} />
        <div className="product-details">
          <h4 className="category">{category}</h4>
          <p className="name">{name}</p>
        </div>
      </div>
      <div className="right">
        <span>{price}</span>
        <img src={coinIcon} alt="coins" />
      </div>
    </div>
  );
};

export default ProductHistory;
