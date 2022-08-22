import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReviewWindow from './pages/Main/ReviewWindow';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/review/" element={<ReviewWindow />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
