import React, { useState, useEffect } from 'react';
import CartFooter from './CartFooter';
import './Cart.scss';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/data/cartMockData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setCartProducts(data));
  }, []);
  // useEffect(() => {
  //   fetch('API주소/user/cart', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: localStorage.getItem('access_token'),
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => setCartProducts(result.data));
  // }, []);

  return (
    <div className="cart">
      <div className="cartContents">
        <h1 className="cartTitle">장바구니</h1>
        <table className="cartProductArea">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>이미지</th>
              <th>상품명</th>
              <th>판매가</th>
              <th>수량</th>
              <th>합계</th>
              <th>선택</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product, i) => {
              const { id, name, price } = product;
              return (
                <tr key={id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="cartProductImg">
                      <img alt="상품" src="#" />
                    </div>
                  </td>
                  <td>
                    <span>{name}</span>
                  </td>
                  <td>
                    <span>{price}</span>
                  </td>
                  <td>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </td>
                  <td>
                    <span>{price}</span>
                  </td>
                  <td>
                    <button>주문하기</button>
                    <button>삭제하기</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>합계 : 1000원</td>
            </tr>
          </tfoot>
        </table>
        <button>선택상품삭제</button>
        <button>장바구나비우기</button>
        <table className="cartTotalPrice">
          <thead>
            <tr>
              <th>총 상품금액</th>
              <th>결제예정금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2000원</td>
              <td>2000원</td>
            </tr>
          </tbody>
        </table>
        <button>전체상품주문</button>
        <button>선택상품주문</button>
        <button>쇼핑계속하기</button>
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;
