import React, { useState, useEffect } from 'react';
import './CountingBadge.scss';

const CountingBadge = () => {
  const [productCounting, setProductCounting] = useState(0);

  //const token = localStorage.getItem('token');
  const token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjM3LCJleHAiOjE2NjEzODYzNzgsImlhdCI6MTY2MTM1MDM3OH0.iO1N-QxxuiitviIRrS5WI8dzg-gS8HsRSRrUNfyxD9s';

  useEffect(() => {
    fetch('http://10.58.0.117:3000/cart/counting', {
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
