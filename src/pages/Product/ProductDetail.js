import React from 'react';
import './ProductDetail.scss';
import { useRef } from 'react';
import DetailInfo from './DetailInfo';

const ProductDetail = ({ ProductDetails }) => {
  const homeRef = useRef();
  const onHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="productDetail">
      <ul className="productDetailTap">
        <li className="detailTap">상품 정보</li>
        <li className="reviewTap" value="btn" onClick={onHomeClick}>
          리뷰
        </li>
      </ul>
      <div className="productDetailImgPage">
        <div className="productDetailImg">
          <img
            alt="productDetailImg"
            src="https://web-bodyluv.imgblank.kr/product/event/2022_chuseok/chuseok_1.png"
          />
          <img alt="productDetailImg" src={ProductDetails} />
        </div>
      </div>
      <div ref={homeRef} />
      <div className="productInfo" />
      <DetailInfo />
    </div>
  );
};

export default ProductDetail;
