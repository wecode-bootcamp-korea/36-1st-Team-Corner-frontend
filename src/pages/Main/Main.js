import React from 'react';
import Carousel from './Carousel';
import ProductsInMain from './ProductsInMain';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="mainWrapper">
        <p />
        <Carousel />
        <ProductsInMain />
        <p />
      </div>
    </div>
  );
};

export default Main;
