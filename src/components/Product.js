import React, { useState, forwardRef } from 'react';
import buyBlueIcon from '../assets/buy-blue.svg';
import coinIcon from '../assets/coin.svg';

import './Product.css';

const Product = forwardRef(({ name, category, price, imageSrc, coins }, ref) => {
  const [ redeemView, setRedeemView ] = useState(false);
  const canRedeem = coins > price;

  const toggleRedeem = () => {
    setRedeemView(!redeemView);
  };

  const redeemProduct = (e) => {
    e.stopPropagation();
    console.log('Redeeming(?');
  };

  return (
    <div className={`product ${redeemView ? 'selected' : ''}`} onClick={toggleRedeem} ref={ref}>
      {canRedeem ? (
        <img className="buy-blue-icon" src={buyBlueIcon} alt="buy" />
      ) : (
        <div className="need-more-coins">
          <span>You need {price - coins}</span>
          <img src={coinIcon} alt="coin" />
        </div>
      )}
      <img className="product-image" src={imageSrc} alt={name} />
      <hr />
      <h4 className="product-category">{category}</h4>
      <p className="product-name">{name}</p>
      {redeemView ? (
        <div className="redeem">
          <div className="redeem-container">
            <div className="redeem-price">
              <span>{price}</span>
              <img src={coinIcon} alt="coin" />
            </div>
            <button className="redeem-btn" onClick={redeemProduct} disabled={!canRedeem}>
              Redeem now
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
});

export default Product;
