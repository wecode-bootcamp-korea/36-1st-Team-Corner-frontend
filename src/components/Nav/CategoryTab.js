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
