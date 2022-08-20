import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedWord = searchParams.get('q');

  useEffect(() => {
    fetch(`http://10.58.7.174:3000/products/search?q=${searchedWord}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setSearchedProduct(result.data));
  }, [searchedWord]);

  return (
    <>
      <div className="search">
        <h1>검색</h1>
        <span>쿼리 스트링 : {searchedWord}</span>
      </div>
      <ul className="searchedProductList">
        {searchedProduct.map((product, i) => {
          return <li key={product.id}>상품명:{product.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Search;
