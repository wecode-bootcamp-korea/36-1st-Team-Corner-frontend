import React from 'react';
import { Link } from 'react-router-dom';
import NavCarousel from './NavCarousel';
import CategoryTab from './CategoryTab';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <NavCarousel />
      <div className="navArea">
        <div className="content">
          <Link className="logo" to="/main">
            BODYLIKE
          </Link>
          <div className="menu">
            <ul className="menuList">
              <li>
                <Link className="link" to="/login">
                  로그인
                </Link>
              </li>
              <li>
                <Link className="link" to="/cart">
                  장바구니
                </Link>
                <div className="countBg">0</div>
              </li>
              <li>
                <div className="search">
                  <i class="fas fa-search" />
                  <input type="search" />
                </div>
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
