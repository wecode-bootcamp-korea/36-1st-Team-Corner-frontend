import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Search from './pages/Search/Search';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/auth/signIn" element={<Login />} />
        <Route path="/auth/signUp" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/products/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
