import React, { useState } from 'react';
import Product from './Product';
import './Products.css';
import FlipMove from 'react-flip-move';

const Products = ({ products }) => {
  const [ productSelected, setProductSelected ] = useState(null);

  return (
    <div className="products">
      <FlipMove staggerDurationBy="30" duration={500} typeName={null}>
        {products.map(({ name, cost, category, img }) => {
          return <Product key={name} name={name} price={cost} category={category} imageSrc={img.url} coins={1000} />;
        })}
      </FlipMove>
    </div>
  );
};

export default Products;
