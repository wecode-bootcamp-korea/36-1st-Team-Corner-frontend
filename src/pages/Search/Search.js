import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedWord = searchParams.get('q');

  useEffect(() => {
    fetch(`http://10.58.0.117:3000/products/search?q=${searchedWord}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setSearchedProduct(result.data));
  }, [searchedWord]);

  return (
    <>
      <div className="search">
        <h1>검색</h1>
        <span>검색어 : {searchedWord}</span>
      </div>
      <ul className="searchedProductList">
        {searchedProduct.map((product, i) => {
          return <li key={product.id}>상품명:{product.name}</li>;
        })}
      </ul>
    </>
  );
};
//TODO : 위 리턴문은 데이터 응답을 확인하기 위한 임시 코드입니다. 메인 페이지 merge 후 상품 카드 컴포넌트를 활용할 예정입니다.

export default Search;
