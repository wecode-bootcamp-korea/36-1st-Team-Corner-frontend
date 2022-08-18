import React from 'react';
import Card from './Card';

const ItemList = ({ products, currentPage }) => {
  console.log(products);
  console.log('itemlist', currentPage);
  let maxProduct = currentPage * 10 - 1;
  return (
    <div className="itemList">
      {products.slice(maxProduct - 9, maxProduct).map(product => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ItemList;
