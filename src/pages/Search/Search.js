import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import './Search.scss';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedWord = searchParams.get('q');

  useEffect(() => {
    fetch(`http://10.58.0.117:3000/product/search?q=${searchedWord}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, [searchedWord]);

  return (
    <div className="search">
      <div className="wrapper">
        {searchedWord == '' ? (
          <span className="pleaseSearch">검색어를 입력해 주세요.</span>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </div>
  );
};

export default Search;
