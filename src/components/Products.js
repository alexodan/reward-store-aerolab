import React, { useState } from 'react';
import Product from './Product';
import './Products.css';

const Products = ({ products }) => {
  const [ productSelected, setProductSelected ] = useState(null);

  return (
    <div className="products">
      {products.map(({ name, cost, category, img }) => {
        return <Product name={name} price={cost} category={category} imageSrc={img.url} coins={1000} />;
      })}
    </div>
  );
};

export default Products;
