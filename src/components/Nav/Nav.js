import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavCarousel from './NavCarousel';
import CategoryTab from './CategoryTab';
import CountingBadge from './CountingBadge';
import './Nav.scss';

const Nav = () => {
  const location = useLocation();

  const [userInput, setUserInput] = useState('');
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
  }, []);

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  const navigate = useNavigate();

  const onSubmitSearch = e => {
    e.preventDefault();
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/product/search?q=${userInput}`);
    }
  };

  if (
    location.pathname === '/auth/signIn' ||
    location.pathname === '/auth/signUp'
  )
    return;
  return (
    <nav className="nav">
      <NavCarousel />
      <div className="navArea">
        <div className="content">
          <Link className="logo" to="/">
            <img alt="로고" src="/images/logo.png" />
          </Link>
          <div className="menu">
            <ul className="menuList">
              <li>
                <Link className="link" to="/auth/signIn">
                  {isLogined ? <span>로그아웃</span> : <span>로그인</span>}
                </Link>
              </li>
              <li>
                <Link className="link" to="/carts">
                  장바구니
                </Link>
                <CountingBadge />
              </li>
              <li>
                <form className="search">
                  <i className="fas fa-search" />
                  <input
                    type="search"
                    onChange={handleChange}
                    onKeyPress={onSubmitSearch}
                  />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CategoryTab />
    </nav>
  );
};

export default Nav;
