import React, { useState, useEffect } from 'react';
import './CountingBadge.scss';

const CountingBadge = () => {
  const [productCounting, setProductCounting] = useState('');

  //const token = localStorage.getItem('token');
  const token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsImV4cCI6MTY2MTQ0MzI2NSwiaWF0IjoxNjYxMDgzMjY1fQ.KmF-Jp46fdHKwxS01SJ8PtF5yD1SkQP8rwQFA6tU9rQ';

  useEffect(() => {
    fetch('http://10.58.2.193:3000/cart/counting', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setProductCounting(result.data));
  }, [productCounting]);

  return <div className="countingBadge">{productCounting}</div>;
};

export default CountingBadge;
