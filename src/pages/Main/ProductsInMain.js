import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import './productsinmain.scss';

const ProductsInMain = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      'http://10.58.0.117:3000/product/list?page=1&pageSize=9&orderBy=price',
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => setProducts(data.data));
  }, []);

  return (
    <div className="productsInMain">
      <div className="titleMain">
        <h1 className="bigTitle">BEST SELLER</h1>
        <h2 className="description">
          "바디라이크의 베스트 아이템을 만나보세요!"
        </h2>
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsInMain;
