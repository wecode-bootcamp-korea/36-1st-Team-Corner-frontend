import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import CategoryProduct from './pages/CategoryProduct/CategoryProduct';
import Product from './pages/Product/Product';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/product/:id" element={<Product />} />;
        <Route path="/auth/signIn" element={<Login />} />
        <Route path="/auth/signUp" element={<Login />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/product/list" element={<CategoryProduct />} />
        <Route path="/product/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
