import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('cate');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.7.174:3000/products/list?cate=${categoryId}`, {
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
    //TODO : merge 후 pagination page 컴포넌트 추가 필요
  );
};

export default ProductsList;
