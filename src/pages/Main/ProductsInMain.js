import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';
import './productsinmain.scss';

const ProductsInMain = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams(`?page=1&pageSize=9`);
  const page = searchParams.get('page');
  console.log('main', searchParams);

  useEffect(() => {
    fetch(`http://10.58.7.174:3000/?page=${page}&pageSize=9`, {
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
      <Pagination
        products={products}
        currentPage={currentPage}
        changeCurrentPage={setCurrentPage}
        paramsSave={setSearchParams}
      />
    </div>
  );
};

export default ProductsInMain;
