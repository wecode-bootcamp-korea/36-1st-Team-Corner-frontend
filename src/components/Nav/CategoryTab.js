import React from 'react';
import './CategoryTab.scss';

const CategoryTab = () => {
  return (
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
  );
};

export default CategoryTab;
