import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchedWord = searchParams.get('q');

  return (
    <div className="search">
      <h1>검색</h1>
      <span>쿼리 스트링 : {queryString}</span>
    </div>
  );
};

export default Search;
