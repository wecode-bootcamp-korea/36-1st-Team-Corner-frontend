import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Main/Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('cate');

  // useEffect(() => {
  //   fetch(`http://10.58.0.117:3000/product/list?page=${pageNumber}`, {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(result => setProducts(result.data));
  // }, [pageNumber]);

  // useEffect(() => {
  //   fetch(`http://10.58.0.117:3000/product/list?cate=${categoryId}&page=1`, {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(result => setProducts(result.data));
  // }, [categoryId]);

  // useEffect(() => {
  //   fetch(`http://10.58.0.117:3000/product/list?cate=${categoryId}&page=1`, {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(result => setProducts(result.data));
  // }, [pageNumber, categoryId]);

  const [currentPage, setCurrentPage] = useState(1);
  const page = searchParams.get('page');

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/products/list?cate=1&page==1`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProducts(data.data));
  }, []);

  useEffect(() => {
    fetch(`http://10.58.7.174:3000/?page=${page}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProducts(data.data));
  }, [page]);

  return (
    <>
      <Pagination
        products={products}
        currentPage={currentPage}
        changeCurrentPage={setCurrentPage}
        paramsSave={setSearchParams}
      />
      ;
    </>
    //TODO : merge 후 상품 리스트 컴포넌트 추가 필요
  );
};

export default ProductList;
