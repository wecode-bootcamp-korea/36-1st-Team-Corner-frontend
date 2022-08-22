import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />;
        <Route path="/" element={<Main />} />;
        <Route path="/product/:id" element={<Product />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
