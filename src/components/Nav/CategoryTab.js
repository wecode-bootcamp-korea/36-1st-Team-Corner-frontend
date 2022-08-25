import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryTab.scss';

const CategoryTab = () => {
  return (
    <div className="categoryTab">
      <div className="tabs">
        <ul className="tabList">
          <Link className="link" to="/product/list?page=1&pageSize=9">
            <li className="all">All</li>
          </Link>
          {CATEGORY_LIST.map(({ id, name }) => {
            return (
              <Link
                className="link"
                key={id}
                to={`/product/list?page=1&pageSize=9&cate=${id}`}
              >
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
