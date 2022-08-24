import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavCarousel from './NavCarousel';
import CategoryTab from './CategoryTab';
import CountingBadge from './CountingBadge';
import './Nav.scss';

const Nav = () => {
  const [userInput, setUserInput] = useState('');

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  const navigate = useNavigate();

  const onSubmitSearch = e => {
    if (e.key === 'Enter') {
      navigate(`/product/search?q=${userInput}`);
    }
  };

  if (
    window.location.pathname === '/auth/signIn' ||
    window.location.pathname === '/auth/signUp'
  )
    return null;
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
                  로그인
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
