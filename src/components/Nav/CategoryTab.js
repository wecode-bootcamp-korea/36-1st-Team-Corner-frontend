import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CategoryTab.scss';

const CategoryTab = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/data/categoryMock.json', {
      method: 'GET',
    })
      //TODO: 차후 서버 주소로 변경 필요
      .then(response => response.json())
      .then(data => {
        setCategory(data);
      });
  }, []);

  return (
    <div className="categoryTab">
      <div className="tabs">
        <ul className="tabList">
          <Link className="link" to="/products/list">
            <li>All</li>
          </Link>
          {category.map(({ id, name }, i) => {
            return (
              <Link className="link" key={id} to={`/products/list?cate=${id}`}>
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryTab;
