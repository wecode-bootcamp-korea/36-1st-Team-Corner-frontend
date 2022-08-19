import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavCarousel from './NavCarousel';
import CategoryTab from './CategoryTab';
import './Nav.scss';

const Nav = () => {
  const [products, setProducts] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  const searchedProduct = products.filter(product => {
    return product.name.includes(userInput);
  });

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
                  <i className="fas fa-search" />
                  <input type="search" onChange={handleChange} />
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
