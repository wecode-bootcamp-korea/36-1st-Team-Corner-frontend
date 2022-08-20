import React from 'react';
import ItemList from './ItemList';
import './pagination.scss';

const Pagination = ({
  products,
  changeCurrentPage,
  currentPage,
  paramsSave,
}) => {
  const pageNumber = Math.ceil(31 / 9);
  const pageNumbers = [];
  for (let i = 0; i < pageNumber; i++) {
    pageNumbers.push(i + 1);
  }

  const movePrev = pageNum => {
    if (currentPage !== 1) {
      changeCurrentPage(currentPage - 1);
      paramsSave(pageNum - 1);
    }
  };

  const moveNext = pageNum => {
    if (currentPage < pageNumbers.length) {
      changeCurrentPage(currentPage + 1);
      paramsSave(pageNum + 1);
    }
  };

  const movePage = click => {
    if (currentPage !== Number(click.target.value)) {
      changeCurrentPage(Number(click.target.value));
      paramsSave(click.target.value);
    }
  };

  return (
    <div className="pagination">
      <ItemList products={products} currentPage={currentPage} />
      <div className="paginationGroup">
        <button className="prevPage" onClick={movePrev}>
          이전
        </button>
        <p className="pageNumbers">
          {pageNumbers.map(page => {
            return (
              <button
                className={
                  !(currentPage === page) ? 'pageNumber' : 'clickedPageNumber'
                }
                key={page}
                onClick={() => movePage(page)}
                value={page}
              >
                {page}
              </button>
            );
          })}
        </p>
        <button className="nextPage" onClick={moveNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Pagination;
