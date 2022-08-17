import React from 'react';
import './Main.scss';

const Card = () => {
  return (
    <div className="card">
      <img src="url" alt="cardImage" />
      <h3 className=" productName">hello</h3>
      <span className="currentPrice" />
      <span className="price" />
      <p className="reviewCount">
        리뷰 <span className="reviewCounter">0</span>
      </p>
    </div>
  );
};

const ItemList = () => {
  return (
    <div className="itemList">
      <Card />
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="pagination">
      <ItemList />
      <button>이전</button>
      <span>1 2 3</span>
      <button>다음</button>
    </div>
  );
};

const Main = () => {
  return (
    <>
      <img className="carousel" src="" alt="carouselImage" />
      <div className="productsInMain">
        <Pagination />
      </div>
    </>
  );
};

export default Main;
