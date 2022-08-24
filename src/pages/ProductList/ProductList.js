import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('cate');
  const pageNumber = searchParams.get('page');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.0.117:3000/product/list?page=${pageNumber}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, [pageNumber]);

  useEffect(() => {
    fetch(`http://10.58.0.117:3000/product/list?cate=${categoryId}&page=1`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, [categoryId]);

  return (
    <ul className="productsList">
      {products.map((product, i) => {
        return <li key={product.id}>상품명:{product.name}</li>;
      })}
    </ul>
    //TODO : merge 후 상품 리스트 컴포넌트 추가 필요
  );
};

export default ProductsList;
