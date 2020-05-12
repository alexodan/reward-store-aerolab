import React, { useState } from 'react';
import Product from './Product';
import './Products.css';

const Products = ({ availableCoins, products, redeemProduct }) => {
  const [ productSelectedId, setProductSelectedId ] = useState(null);

  const onProductSelected = (id) => {
    setProductSelectedId(productSelectedId === null ? id : null);
  };

  const redeem = (id) => {
    redeemProduct(id);
  };

  return (
    <div className="products">
      {products.map(({ _id, name, cost, category, img }) => {
        return (
          <Product
            key={_id}
            id={_id}
            name={name}
            price={cost}
            category={category}
            imageUrl={img.url}
            coins={availableCoins}
            selected={_id === productSelectedId}
            toggleSelected={onProductSelected}
            onRedeemProduct={redeem}
          />
        );
      })}
    </div>
  );
};

export default Products;
