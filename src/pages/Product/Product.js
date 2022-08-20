import React from 'react';
import './Product.scss';

const Product = () => {
  return (
    <div className="product">
      <div className="productMargin">
        <div className="productPage">
          <img
            className="productImg"
            alt="productImg"
            src="https://images.unsplash.com/photo-1612800083273-24ea5c80313d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          />
          <form className="productForm">
            <div className="priceTitle"> 퓨어썸 바디솝 </div>
            <div className="price">
              <div className="priceTag"> 23,900 원 </div>
              <div className="salePrice"> 23,900 원 </div>
            </div>
            <div className="totalPrice">
              <span className="totalPriceText"> 총 상품 금액 </span>
              <span className="totalPriceNum"> 23,900 원 </span>
            </div>

            <div className="btn">
              <button className="buyBtn"> 바로 구매하기 </button>
              <button className="cart"> 장바구니 </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
