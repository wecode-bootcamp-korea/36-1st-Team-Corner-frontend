import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = searchParams.get('cate');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`API주소/products/list?cate=${categoryId}`, {
      method: 'GET',
    })
      //TODO : 차후 서버 주소로 변경 필요
      .then(response => response.json())
      .then(result => setProducts(result));
  }, [categoryId]);

  return (
    <ul className="productsList">
      {products.map((product, i) => {
        return <li key={product.id}>상품명:{product.name}</li>;
      })}
    </ul>
    //서버에서 데이터가 제대로 들어오는지 확인하기 위한 임시 코드입니다
    //TODO : merge 후 pagination page 컴포넌트 추가 필요
  );
};

export default ProductsList;
