import React, { useState, useEffect } from 'react';
import './Main.scss';

const Card = ({ product }) => {
  const { image, name, price, discount, reviewCount, tags } = product;
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

const Pagination = ({ products }) => {
  return (
    <div className="pagination">
      <ItemList products={products} />
      <button className="prevPage">이전</button>
      <span>1 2 3</span>
      <button className="nextPage">다음</button>
    </div>
  );
};

const ProductsInMain = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/mockdata/mockproducts.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="productsInMain">
      <Pagination products={products} />
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
