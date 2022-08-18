import React from 'react';
import { useLocation } from 'react-router-dom';
import User from './User';
import './Login.scss';

const Login = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  const isSelectLogin = currentURL === '/login' && true;

  return (
    <div className="Login">
      <User content={isSelectLogin ? LOGIN_DATA : SIGNUP_DATA} />
    </div>
  );
};

const LOGIN_DATA = {
  title: '로그인',
  btnText: '로그인하기',
  img: 'https://images.unsplash.com/photo-1611489704164-6f73c62bd810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  fetch: 'toLogin',
};
const SIGNUP_DATA = {
  title: '회원가입',
  btnText: '회원가입하기',
  img: 'https://images.unsplash.com/photo-1605265058749-78af14a1be2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  fetch: 'toSignUp',
};

export default Login;
