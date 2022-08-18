import React from 'react';
import ItemList from './ItemList';

const Pagination = ({ products, changeCurrentPage, currentPage }) => {
  console.log('pagination', currentPage);
  const pageNumber = Math.ceil(products.length / 9);
  const pageNumbers = [];
  for (let i = 0; i <= pageNumber; i++) {
    pageNumbers.push(i + 1);
  }

  const movePrev = () => {
    if (currentPage !== 1) changeCurrentPage(currentPage - 1);
  };

  const moveNext = () => {
    if (currentPage !== currentPage[currentPage.length - 1])
      changeCurrentPage(currentPage + 1);
  };

  const movePage = click => {
    if (currentPage !== click.target.value)
      changeCurrentPage(click.target.value);
  };

  return (
    <div className="pagination">
      <ItemList products={products} currentPage={currentPage} />
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
