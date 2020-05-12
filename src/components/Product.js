import React from 'react';
import buyBlueIcon from '../assets/buy-blue.svg';
import coinIcon from '../assets/coin.svg';

import './Product.css';

const Product = ({ id, name, category, price, imageUrl, coins, selected, toggleSelected, onRedeemProduct }) => {
  const canRedeem = coins > price;

  const toggleRedeem = (productId) => {
    toggleSelected(productId);
  };

  const redeem = (e) => {
    e.stopPropagation();
    if (coins > price) {
      onRedeemProduct(id);
    }
  };

  return (
    <div className={`product ${selected ? 'selected' : ''}`} onClick={() => toggleRedeem(id)}>
      {canRedeem ? (
        <img className="buy-blue-icon" src={buyBlueIcon} alt="buy" />
      ) : (
        <div className="need-more-coins">
          <span>You need {price - coins}</span>
          <img src={coinIcon} alt="coin" />
        </div>
      )}
      <img className="product-image" src={imageUrl} alt={name} />
      <hr />
      <h4 className="product-category">{category}</h4>
      <p className="product-name">{name}</p>
      {selected ? (
        <div className="redeem">
          <div className="redeem-container">
            <div className="redeem-price">
              <span>{price}</span>
              <img src={coinIcon} alt="coin" />
            </div>
            <button className="redeem-btn" onClick={redeem} disabled={!canRedeem}>
              Redeem now
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
