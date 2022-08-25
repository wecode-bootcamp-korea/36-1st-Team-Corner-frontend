import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import './ProductList.scss';

const ProductList = ({ products }) => {
  return (
    <div className="productList">
      {products.map(product => {
        return (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard key={product.id} product={product} />;
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
