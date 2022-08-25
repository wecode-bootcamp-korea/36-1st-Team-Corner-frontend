import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.scss';

const ProductList = ({ products }) => {
  return (
    <div className="productList">
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
