import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const ProductsInMain = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('/data/mockdata/mockproducts.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const filterProducts = () => {
    setProducts(() => {
      let targetKey = currentPage * 10;
      products.filter(x => x.key <= targetKey && x.key > targetKey - 10);
    });
  }; //나중에 백엔드에서 오프셋 리미트로 처리

  const changeCurrentPage = page => {
    setCurrentPage(page);
  };

  return (
    <div className="productsInMain">
      <Pagination
        products={products}
        currentPage={currentPage}
        filterProduct={filterProducts}
        changeCurrentPage={changeCurrentPage}
      />
    </div>
  );
};

export default ProductsInMain;
