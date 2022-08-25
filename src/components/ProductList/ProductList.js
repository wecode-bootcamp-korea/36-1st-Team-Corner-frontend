import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
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
