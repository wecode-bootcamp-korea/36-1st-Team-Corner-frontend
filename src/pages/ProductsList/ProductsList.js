import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductsList = () => {
  const params = useParams();
  const categoryId = params.id;

  const [products, setProducts] = useState();

  useEffect(() => {
    fetch(`API주소/products/list/${categoryId}`)
      .then(response => response.json())
      .then(result => setProducts(result));
  }, [categoryId]);

  const { id, name } = products;

  return (
    <div className="productsList">
      <p>상품 id:{id}</p>
      <p>상품 name:{name}</p>
    </div>
  );
};

export default ProductsList;
