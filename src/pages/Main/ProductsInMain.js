import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './productsinmain.scss';

const ProductsInMain = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://10.58.0.117:3000/', {
      method: 'GET',
    })
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
      <ItemList products={products} />
    </div>
  );
};

export default ProductsInMain;
