import React, { useState, useEffect } from 'react';
import './App.css';

import Banner from './components/Banner';
import Products from './components/Products';
import ViewerMenu from './components/ViewerMenu';
import UserHeader from './components/UserHeader';

import { getProducts, getUser } from './API';

// https://aerolab.co/coding-challenge-instructions?utm_campaign=Coding%20Challenge
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWE2ZTAyMzBhZjljMzAwNmRhMTZiZTYiLCJpYXQiOjE1ODc5OTQ2NTl9.lhNb8ghtFFdSEcZldZf2GqiGsygtl1YluPVTezOKTT0';

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
  // TODO: move this to another file with constants: MOST_RECENT, LOWEST_PRICE, HIGHEST_PRICE
  const sortOptions = [ 'most-recent', 'lowest-price', 'highest-price' ];
  const [ user, setUser ] = useState({});
  const [ products, setProducts ] = useState([]);
  const [ sortCriteria, setSortCriteria ] = useState('most-recent');

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
    return () => {};
  }, []);

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

  const changeSort = (sortSelected) => {
    if (sortSelected === sortCriteria) return;
    setSortCriteria(sortSelected);
    setProducts(products.sort(sortFactory(sortSelected)));
  };

  return (
    <div className="App">
      <UserHeader user={user.name} coins={user.points} history={user.history} />
      <Banner title="Electronics" />
      <div className="container">
        <ViewerMenu sortBy={sortCriteria} sortOptions={sortOptions} changeSort={changeSort} />
        <Products products={products} />
      </div>
    </div>
  );
}

export default App;
