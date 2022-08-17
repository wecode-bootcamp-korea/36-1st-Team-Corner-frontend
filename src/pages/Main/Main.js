import React, { useState, useEffect } from 'react';
import './Main.scss';

const Card = ({ product }) => {
  const { image, name, price, discount, reviewCount } = product;
  return (
    <div className="card">
      <img src={image} alt="productImage" />
      <h3 className="productName">{name}</h3>
      <span className="currentPrice"> {discount} </span>
      <span className="price"> {price} </span>
      <p className="reviewCount">
        리뷰 <span className="reviewCounter">{reviewCount}</span>
      </p>
    </div>
  );
};

const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      {products.map(product => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};

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

const Main = () => {
  return (
    <>
      <img className="carousel" src="" alt="carouselImage" />
      <ProductsInMain />
    </>
  );
};

export default Main;
