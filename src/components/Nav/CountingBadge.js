import React, { useState, useEffect } from 'react';
import './CountingBadge.scss';

const CountingBadge = () => {
  const [productCounting, setProductCounting] = useState('');

  useEffect(() => {
    fetch('http://10.58.0.117:3001/cart/counting', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => console.log(result.data));
  }, [productCounting]);

  return <div className="countingBadge">{1}</div>;
};

export default CountingBadge;
