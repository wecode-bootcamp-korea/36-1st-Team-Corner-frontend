import React from 'react';
import ProductsInMain from './ProductsInMain';
import './Main.scss';

const Main = () => {
  return (
    <>
      <img
        className="carousel"
        src="/images/soapmockimage.jpeg"
        alt="carouselImage"
      />
      <ProductsInMain />
    </>
  );
};

export default Main;
