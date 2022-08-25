import React, { useEffect, useState } from 'react';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const [reviewCount, setReviewCount] = useState('');

  const { id, name, price, thumbnail_image_url } = product;
  const priceI = Math.floor(price);

  useEffect(() => {
    fetch(`http://10.58.0.117:3000/review/product/${id}?page=1&pageSize=5`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setReviewCount(result.reviewCount[0].reviewCount));
  }, []);

  return (
    <div className="productCard">
      <img
        className="thumbNailImage"
        src={thumbnail_image_url}
        alt="productImage"
      />
      <h3 className="productName">{name}</h3>
      <span className="currentPrice"> {(priceI * 0.8).toLocaleString()} </span>
      <span className="price"> {priceI.toLocaleString()}</span>
      <p className="tagSpace" />
      <p className="reviewCount">
        리뷰 <span className="reviewCounter">{reviewCount}</span>
      </p>
    </div>
  );
};

export default ProductCard;
