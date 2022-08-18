import React from 'react';
import Card from './Card';
import './itemlist.scss';

const ItemList = ({ products, currentPage }) => {
  let maxProduct = currentPage * 9;
  return (
    <div className="itemList">
      {products.slice(maxProduct - 9, maxProduct).map(product => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ItemList;
