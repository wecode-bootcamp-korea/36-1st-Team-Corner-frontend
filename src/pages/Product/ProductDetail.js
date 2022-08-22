import React from 'react';
import './ProductDetail.scss';

const ProductDetail = ({ ProductDetails }) => {
  return (
    <div className="productDetail">
      <div className="productDetailTap">
        <div className="detailTap">상세정보</div>
        <div className="reviewTap">리뷰</div>
      </div>
      <div className="productDetailImgPage">
        <div className="productDetailImg">
          <img src="https://web-bodyluv.imgblank.kr/product/event/2022_chuseok/chuseok_1.png" />
          <img alt="productDetailImg" src={ProductDetails} />
        </div>
      </div>
      <div className="productInfo">
        배송정보 배송 방법 : 택배 배송 지역 : 전국지역 배송 비용 : 3,000원 배송
        기간 : 1일 ~ 3일 배송 안내 : - 산간벽지나 도서지방은 별도의 추가금액을
      </div>
    </div>
  );
};

export default ProductDetail;
