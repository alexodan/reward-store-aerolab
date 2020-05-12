import React, { useState, useEffect } from 'react';
import './App.css';

import Banner from './components/Banner';
import Products from './components/Products';
import ViewerMenu from './components/ViewerMenu';
import UserHeader from './components/UserHeader';

import { getProducts, getUser } from './API';

function sortFactory(sortOption) {
  switch (sortOption) {
    case 'most-recent':
      return (a, b) => (a['_id'] > b['_id'] ? 1 : -1);
    case 'lowest-price':
      return (a, b) => (a['cost'] > b['cost'] ? 1 : -1);
    case 'highest-price':
      return (a, b) => (a['cost'] > b['cost'] ? -1 : 1);
    default:
      return (a, b) => (a['name'] > b['name'] ? -1 : 1);
  }
}

function App() {
  const sortOptions = [ 'most-recent', 'lowest-price', 'highest-price' ];
  const [ user, setUser ] = useState({});
  const [ products, setProducts ] = useState([]);
  const [ sortCriteria, setSortCriteria ] = useState('most-recent');

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  const changeSort = (sortSelected) => {
    if (sortSelected === sortCriteria) return;
    setSortCriteria(sortSelected);
    setProducts(products.sort(sortFactory(sortSelected)));
  };

  const redeemProduct = (id) => {
    const prodRedeemed = products.find((prod) => prod._id === id);
    setUser({
      ...user,
      points: user.points - prodRedeemed.cost,
      redeemHistory: [
        ...user.redeemHistory,
        {
          name: prodRedeemed.name,
          category: prodRedeemed.category,
          price: prodRedeemed.cost,
          imageUrl: prodRedeemed.img.url
        }
      ]
    });
  };

  return (
    <div className="App">
      <UserHeader user={user.name} coins={user.points} historyProducts={user.redeemHistory} />
      <Banner title="Electronics" />
      <div className="container">
        <ViewerMenu sortBy={sortCriteria} sortOptions={sortOptions} changeSort={changeSort} />
        <Products availableCoins={user.points} products={products} redeemProduct={redeemProduct} />
      </div>
    </div>
  );
}

export default App;
