import React from 'react';

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

export default Card;
