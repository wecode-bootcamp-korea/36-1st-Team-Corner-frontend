import React, { useState } from 'react';
import ItemList from './ItemList';

const Pagination = (
  { products },
  { pageNumber },
  { movePrev },
  { moveNext },
  { movePage },
  { currentPage }
) => {
  const [productsFiltered, setProductsFiltered] = useState([]);
  const pageNumbers = [];

  for (let i = 0; i <= pageNumber; i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <div className="pagination">
      <ItemList products={products} />
      <button className="prevPage" onClick={movePrev}>
        이전
      </button>
      <p className="pageNumbers">
        {pageNumbers.map(page => {
          return (
            <span className="pageNumber" key={page} onClick={movePage}>
              {page}
            </span>
          );
        })}
      </p>
      <button className="nextPage" onClick={moveNext}>
        다음
      </button>
    </div>
  );
};

export default Pagination;
