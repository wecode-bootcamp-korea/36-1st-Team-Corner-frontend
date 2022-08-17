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
};
const SIGNUP_DATA = {
  title: '회원가입',
  btnText: '회원가입하기',
};

export default Login;
