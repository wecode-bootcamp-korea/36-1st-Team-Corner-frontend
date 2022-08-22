import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CategoryTab.scss';

const CategoryTab = () => {
  // const [category, setCategory] = useState([]);

  // useEffect(() => {
  //   fetch('/data/categoryMock.json', {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setCategory(data);
  //     });
  // }, []);
  //TODO : 서버에서 카테고리 테이블 받아오는 방법 구상 중

  return (
    <div className="categoryTab">
      <div className="tabs">
        <ul className="tabList">
          <Link className="link" to="/products/list?page=1">
            <li>All</li>
          </Link>
          {CATEGORY_LIST.map(({ id, name }, i) => {
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

const CATEGORY_LIST = [
  { id: 1, name: '샤워기' },
  { id: 2, name: '샤워호스' },
  { id: 3, name: '배스밤' },
  { id: 4, name: '비누' },
];
