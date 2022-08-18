import React, { useState, useEffect } from 'react';
import './CategoryTab.scss';

const CategoryTab = () => {
  const [category, setCategory] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch('/data/categoryMock.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setCategory(data);
      });
  }, []);

  const clickHandler = id => {
    setActiveTab(id);
  };

  return (
    <div className="categoryTab">
      <div className="tabs">
        <ul className="tabList">
          {category.map((el, i) => {
            const categoryTab = category[i];
            return (
              <li key={categoryTab.id} onClick={() => clickHandler(i)}>
                {categoryTab.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryTab;
