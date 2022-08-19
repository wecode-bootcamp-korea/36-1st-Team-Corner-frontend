import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavCarousel from './NavCarousel';
import CategoryTab from './CategoryTab';
import './Nav.scss';

const Nav = () => {
  const [userInput, setUserInput] = useState('');
  console.log('검색어', userInput);

  const handleChange = e => {
    setUserInput(e.target.value);
  };

  const navigate = useNavigate();

  const onSubmitSearch = e => {
    if (e.key === 'Enter') {
      navigate(`/products/search?keword=${userInput}`);
    }
  };

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
