import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import CartFooter from './CartFooter';
import './Cart.scss';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts.length);

  //const token = localStorage.getItem('token');

  const token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjM3LCJleHAiOjE2NjEyNTI4MjYsImlhdCI6MTY2MTIxNjgyNn0.D28GQdpcZ8MTOAXRu_T3vRxT9sGqB59hFnk9Xo0PFIY';

  useEffect(() => {
    fetch('http://10.58.0.117:3000/cart/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setCartProducts(result.data));
  }, []);

  const deleteAllProducts = () => {
    if (window.confirm('장바구니를 비우시겠습니까?')) {
      fetch('http://10.58.0.117:3000/cart/product', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }).then(response => {
        if (response.status === 204) {
          setCartProducts([]);
        }
      });
    }
  };

  const deleteThisProduct = id => {
    if (window.confirm('선택하신 상품을 삭제하시겠습니까?')) {
      fetch(`http://10.58.0.117:3000/cart/product/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }).then(response => {
        if (response.status === 204) {
          setCartProducts(cartProducts.filter(el => el.id !== id));
        }
      });
    }
  };

  return (
    <div className="cart">
      <div className="cartContents">
        <h1 className="cartTitle">장바구니</h1>
        {cartProducts.length === 0 ? (
          <div className="cartEmpty">
            <h3>장바구니가 비어 있습니다.</h3>
          </div>
        ) : (
          <div className="cartFull">
            <table className="cartProductArea">
              <thead>
                <tr>
                  <th>이미지</th>
                  <th>상품명</th>
                  <th>판매가</th>
                  <th>수량</th>
                  <th>합계</th>
                  <th>선택</th>
                </tr>
              </thead>
              <tbody className="cartProductBox">
                {cartProducts.map(product => {
                  const { id, name, price, quantity, thumbnail_image_url } =
                    product;
                  return (
                    <tr key={id}>
                      <td className="tdImgbox">
                        <div className="cartProductImg">
                          <img alt="상품" src={thumbnail_image_url} />
                        </div>
                      </td>
                      <td className="tdNamebox">
                        <span>{name}</span>
                      </td>
                      <td className="tdPricebox">
                        <span>{price}</span>
                      </td>
                      <td className="tdCountbox">
                        <div className="btnbox">
                          <div className="countBtnbox">
                            <button>-</button>
                            <span>{quantity}</span>
                            <button>+</button>
                          </div>
                          <button>수량 변경</button>
                        </div>
                      </td>
                      <td className="tdTotalPricebox">
                        <span>{price}</span>
                      </td>
                      <td className="tdBtnsbox">
                        <button>주문하기</button>
                        <button
                          className="deleteThisBtn"
                          onClick={() => {
                            deleteThisProduct(id);
                          }}
                        >
                          삭제하기
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="deleteBtnBox">
              <button className="deleteAllBtn" onClick={deleteAllProducts}>
                장바구니비우기
              </button>
            </div>
            <table className="cartTotalPrice">
              <thead>
                <tr>
                  <th>총 상품금액</th>
                  <th>결제예정금액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>{2000}</span>원
                  </td>
                  <td>
                    <span>{2000}</span>원
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <div className="bottomBtnBox">
          <button className="bottomBtn">전체상품주문</button>
          <button className="bottomBtn">쇼핑계속하기</button>
        </div>
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;
