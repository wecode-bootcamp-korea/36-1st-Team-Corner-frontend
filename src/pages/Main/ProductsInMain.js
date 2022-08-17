import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const ProductsInMain = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = Math.ceil(products.length / 9); //문제 있을 듯;;

  useEffect(() => {
    fetch('/data/mockdata/mockproducts.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const movePrev = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const moveNext = () => {
    if (currentPage !== currentPage[currentPage.length - 1])
      setCurrentPage(currentPage + 1);
  };

  const movePage = click => {
    if (currentPage !== click.target.value) setCurrentPage(click.target.value);
  };

  return (
    <div className="productsInMain">
      <Pagination
        products={products}
        pageNumber={pageNumber}
        movePrev={movePrev}
        moveNext={moveNext}
        movePage={movePage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductsInMain;
