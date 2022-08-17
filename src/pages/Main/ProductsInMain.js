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
  };

  const switchPage = page => {
    setCurrentPage(page);
  };

  return (
    <div className="productsInMain">
      <Pagination
        products={products}
        currentPage={currentPage}
        filterProduct={filterProducts}
        changeCurrentPage={switchPage}
      />
    </div>
  );
};

export default ProductsInMain;
