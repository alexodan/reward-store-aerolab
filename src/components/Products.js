import React, { useState } from "react";
import Product from "./Product";
import "./Products.css";

const Products = ({ products }) => {
  const [productSelectedId, setProductSelectedId] = useState(null);

  const onProductSelected = (id) => {
    setProductSelectedId(productSelectedId === null ? id : null);
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
            imageSrc={img.url}
            coins={1000}
            selected={_id === productSelectedId}
            toggleSelected={onProductSelected}
          />
        );
      })}
    </div>
  );
};

export default Products;
