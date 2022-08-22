import React from 'react';
import './ProductDetail.scss';

const ProductDetail = ({ detail }) => {
  return (
    <div className="productDetail">
      <div className="productDetailTap">
        <span>상세정보</span>
        <span>리뷰</span>
      </div>
      <div className="productDetailImgPage">
        <div className="productDetailImg">
          <img src="https://web-bodyluv.imgblank.kr/product/event/2022_chuseok/chuseok_1.png" />
          <img src="https://web-bodyluv.imgblank.kr/product/event/2022_chuseok/chuseok_2.png" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
