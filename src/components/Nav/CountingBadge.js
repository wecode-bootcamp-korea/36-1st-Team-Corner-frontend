import React, { useState, useEffect } from 'react';
import './CountingBadge.scss';

const CountingBadge = () => {
  const [productCounting, setProductCounting] = useState(0);

  const token = localStorage.getItem('token');

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
