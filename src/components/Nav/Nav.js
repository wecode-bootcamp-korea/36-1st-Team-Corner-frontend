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
      <div className="categoryTab">
        <div className="tabs">
          <ul className="tabList">
            <li className="first">
              <span>FIRST</span>
            </li>
            <li className="second">
              <span>SECOND</span>
            </li>
            <li className="third">
              <span>THIRD</span>
            </li>
            <li className="fourth">
              <span>FOURTH</span>
            </li>
            <li className="fifth">
              <span>FIFTH</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
