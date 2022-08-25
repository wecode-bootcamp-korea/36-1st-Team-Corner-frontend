import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ReviewWindow from './pages/ReviewWindow/ReviewWindow';

import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';

import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/review/" element={<ReviewWindow />} />
        <Route path="/products/search" element={<Search />} />
        <Route path="/" element={<Main />} />;
        <Route path="/cart/product/:id" element={<Product />} />;
        <Route path="/auth/signIn" element={<Login />} />
        <Route path="/auth/signUp" element={<Login />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/product/list" element={<ProductList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
