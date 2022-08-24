import React from 'react';
import Card from './Card';
import './itemlist.scss';

const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      {products.map(product => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ItemList;
