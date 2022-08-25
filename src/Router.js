import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 
import CategoryProduct from './pages/CategoryProduct/CategoryProduct';
import Product from './pages/Product/Product';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/carts/product/:id" element={<Product />} />;
        <Route path="/auth/signIn" element={<Login />} />
        <Route path="/auth/signUp" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/product/list" element={<CategoryProduct />} />
        <Route path="/product/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
