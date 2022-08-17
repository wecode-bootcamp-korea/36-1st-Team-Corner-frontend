import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navCarousel">
        <span>안녕하세요 이것은</span>
        <span>매우매우 멋진</span>
        <span>캐러셀 입니다</span>
      </div>
      <div className="navArea">
        <h1 className="logo">BODYLIKE</h1>
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
              <i class="fas fa-search" />
              <input className="search" type="search" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
