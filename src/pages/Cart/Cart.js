import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cartContents">
        <h1 className="cartTitle">장바구니</h1>
        <div className="cartProductArea">
          <ul className="cartProductList">
            <li>
              <input type="checkbox" />
              <div className="cartProductCard">
                <div className="cartProductImg">
                  <img alt="상품" src="#" />
                </div>
                <span>상품명</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
