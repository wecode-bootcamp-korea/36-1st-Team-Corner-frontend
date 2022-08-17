import React, { useState, useEffect } from 'react';
import Card from './Card';

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
