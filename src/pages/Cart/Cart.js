import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import CartFooter from './CartFooter';
import './Cart.scss';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]);

  //const token = localStorage.getItem('token');
  const token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjM3LCJleHAiOjE2NjEyMDQyODUsImlhdCI6MTY2MTE2ODI4NX0.-9_PKB_y2MLusZijYYi95Ch1mFzU8of_tdSwVTx6V7k';

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

  const isAllProductsChecked =
    cartProducts.length !== 0 && cartProducts.length === checkedProducts.length;

  const handleCheckAll = () => {
    setCheckedProducts(cartProducts.map(product => product.id));
    if (isAllProductsChecked) {
      setCheckedProducts([]);
    }
  };

  const handleCheck = e => {
    const { id, checked } = e.target;
    setCheckedProducts([...checkedProducts, Number(id)]);
    if (!checked) {
      setCheckedProducts(
        checkedProducts.filter(product => product !== Number(id))
      );
    }
  };

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
          setCheckedProducts('');
        }
      });
    }
  };

  return (
    <div className="cart">
      <div className="cartContents">
        <h1 className="cartTitle">장바구니</h1>
        <table className="cartProductArea">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={isAllProductsChecked}
                  onClick={handleCheckAll}
                />
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
            {cartProducts.map(product => {
              const { id, name, price } = product;
              checkedProducts.includes(product.id);
              return (
                <tr key={id}>
                  <td>
                    <input
                      key={product.id}
                      type="checkbox"
                      checked={checkedProducts.includes(product.id)}
                      id={product.id}
                      onClick={handleCheck}
                    />
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
                    <div>1</div>
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
        </table>
        <button>선택상품삭제</button>
        <button className="deleteBtn" onClick={deleteAllProducts}>
          장바구니비우기
        </button>
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
