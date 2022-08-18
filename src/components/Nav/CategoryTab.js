import React, { useState, useEffect } from 'react';
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
          {category.map((el, i) => {
            const categoryTab = category[i];
            return <li key={categoryTab.id}>{categoryTab.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryTab;
