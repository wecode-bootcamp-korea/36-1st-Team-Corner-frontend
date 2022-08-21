import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';
import ItemList from './Itemlist';
import './productsinmain.scss';

const ProductsInMain = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetch(`http://10.58.7.174:3000/?page=1`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProducts(data.data));
  }, [page]);

  return (
    <div className="productsInMain">
      <div className="titleMain">
        <h1 className="bigTitle">BEST SELLER</h1>
        <h2 className="description">
          "바디라이크의 베스트 아이템을 만나보세요!"
        </h2>
      </div>
      <ItemList products={products} currentPage={currentPage} />
    </div>
  );
};

export default ProductsInMain;
