import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductsList = () => {
  const params = useParams();
  const categoryId = params.id;

  const [products, setProducts] = useState();

  useEffect(() => {
    fetch(`API주소/products/list/${categoryId}`, {
      method: 'GET',
    })
      //TODO : 차후 서버 주소로 변경 필요
      .then(response => response.json())
      .then(result => setProducts(result));
  }, [categoryId]);

  const { name } = products;

  return (
    <div className="productsList">
      <p>상품 name:{name}</p>
    </div>
    //TODO : merge 후 pagination page 컴포넌트 추가 필요
  );
};

export default ProductsList;
