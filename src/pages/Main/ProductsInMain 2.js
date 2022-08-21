import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import './productsinmain.scss';

const ProductsInMain = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('/data/mockdata/mockproducts.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="productsInMain">
      <div className="titleMain">
        <h1 className="bigTitle">BEST SELLER</h1>
        <h2 className="description">
          "바디라이크의 베스트 아이템을 만나보세요!"
        </h2>
      </div>
      <Pagination
        products={products}
        currentPage={currentPage}
        changeCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductsInMain;
