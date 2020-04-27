import React, { useState, useEffect } from 'react';
import './App.css';

import Banner from './components/Banner';
import Products from './components/Products';

import { getProducts, getUser } from './API';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWE2ZTAyMzBhZjljMzAwNmRhMTZiZTYiLCJpYXQiOjE1ODc5OTQ2NTl9.lhNb8ghtFFdSEcZldZf2GqiGsygtl1YluPVTezOKTT0';

function App() {
  const [ products, setProducts ] = useState([]);
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
    return () => {};
  }, []);

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

  return (
    <div className="App">
      {/* <UserHeader coins={user.points} history={user.history} /> */}
      <Banner title="Electronics" />
      <Products products={products} />
    </div>
  );
}

export default App;
