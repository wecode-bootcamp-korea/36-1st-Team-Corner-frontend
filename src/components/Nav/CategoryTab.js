import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CategoryTab.scss';

const CategoryTab = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/data/categoryMock.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setCategory(data);
      });
  }, []);

  return (
    <div className="categoryTab">
      <div className="tabs">
        <ul className="tabList">
          {category.map(({ id, name }, i) => {
            return (
              //아래 주소는 차후 상품리스트 컴포넌트가 완성되면 라우터.js에 추가해야 합니다
              <Link className="link" key={id} to={`/products/list/${id}`}>
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
