import React, { useState, useEffect } from 'react';
import Product from './Product';
import './Products.css';
import FlipMove from 'react-flip-move';

import { getProducts } from '../API';

const Products = ({ sortCallback }) => {
  const [ productSelected, setProductSelected ] = useState(null);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
    return () => {};
  }, []);

  return (
    <div className="products">
      <FlipMove staggerDurationBy="30" duration={500} typeName={null}>
        {products.sort(sortCallback).map(({ name, cost, category, img }) => {
          return <Product key={name} name={name} price={cost} category={category} imageSrc={img.url} coins={1000} />;
        })}
      </FlipMove>
    </div>
  );
};

export default Products;
