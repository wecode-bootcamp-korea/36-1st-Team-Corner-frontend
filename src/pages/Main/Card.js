import React from 'react';
import './card.scss';

const Card = ({ product }) => {
  const { name, price, thumbnail_image_url } = product;

  return (
    <div className="card">
      <img
        className="thumbNailImage"
        src={thumbnail_image_url}
        alt="productImage"
      />
      <h3 className="productName">{name}</h3>
      <span className="currentPrice"> {price * 0.8} </span>
      <span className="price"> {price}</span>
      <p className="tagSpace" />
      <p className="reviewCount">
        리뷰 <span className="reviewCounter">100</span>
      </p>
    </div>
  );
};

export default Card;
