import React from 'react';
import './DetailInfo.scss';

const DetailInfo = () => {
  return (
    <div className="detailInfo">
      <div classname="paymentInformation">상품결제정보</div>
      <div classname="delivery">배송정보</div>
      <div classname="ExchangeAndReturn ">교환 및 반품정보</div>
    </div>
  );
};

export default DetailInfo;
