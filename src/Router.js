import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ReviewWindow from './pages/Main/ReviewWindow';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/review/" element={<ReviewWindow />} />
        <Route path="/products/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
