import React from 'react';
import { ProductList } from '../components/ProductList';
import { Cart } from '../components/Cart';

const Home: React.FC = () => (
    <div>
      <h1>Simple E-Commerce Cart</h1>
      <ProductList />
      <Cart />
    </div>
);

export default Home;