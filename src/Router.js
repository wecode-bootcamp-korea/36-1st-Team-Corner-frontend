import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import ProductsList from './pages/ProductsList/ProductsList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/products/list" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
