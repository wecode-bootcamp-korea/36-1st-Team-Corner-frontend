import React from 'react';
import Carousel from './Carousel';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ProductsInMain from './ProductsInMain';
import './Main.scss';

const Main = () => {
  return (
    <>
      <Nav />
      <div className="main">
        <div className="mainWrapper">
          <p />
          <Carousel />
          <ProductsInMain />
          <p />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
