import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartFooter from './CartFooter';
import './Cart.scss';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  //const token = localStorage.getItem('token');
  const token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjM3LCJleHAiOjE2NjEyOTE1MDQsImlhdCI6MTY2MTI1NTUwNH0.hMs9yhxOnyZBohpzIVqcG1T6Aej4ZU9MGCEieTUcYiQ';

  useEffect(() => {
    fetch('http://10.58.0.117:3000/user/cart/product', {
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
      fetch('http://10.58.0.117:3000/user/cart/product', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }).then(response => {
        if (response.status === 204) {
          setCartProducts([]);
        } else {
          alert('오류가 발생하였습니다.');
        }
      });
    }
  };

  const deleteThisProduct = id => {
    if (window.confirm('선택하신 상품을 삭제하시겠습니까?')) {
      fetch(`http://10.58.0.117:3000/user/cart/product/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }).then(response => {
        if (response.status === 204) {
          setCartProducts(cartProducts.filter(product => product.id !== id));
        } else {
          alert('오류가 발생하였습니다.');
        }
      });
    }
  };

  const cartProductsCopy = [...cartProducts];

  const handleMinusOne = id => {
    const selectedIndex = cartProducts.findIndex(product => product.id === id);
    cartProductsCopy[selectedIndex].quantity -= 1;

    fetch(`http://10.58.0.117:3000/user/cart/product/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        id: cartProductsCopy[selectedIndex].id,
        quantity: cartProductsCopy[selectedIndex].quantity,
      }),
    });
    setCartProducts(cartProductsCopy);
  };

  const handlePlusOne = id => {
    const selectedIndex = cartProducts.findIndex(el => el.id === id);
    cartProductsCopy[selectedIndex].quantity += 1;

    fetch(`http://10.58.0.117:3000/user/cart/product/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        id: cartProductsCopy[selectedIndex].id,
        quantity: cartProductsCopy[selectedIndex].quantity,
      }),
    });
    setCartProducts(cartProductsCopy);
  };

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let sum = 0;
    cartProducts.map(product => {
      return (sum += product.quantity * Math.floor(product.price));
    });
    setTotalPrice(sum);
  }, [cartProducts]);

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
                  const priceI = Math.floor(price);
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
                        <span>{priceI}원</span>
                      </td>
                      <td className="tdCountbox">
                        <div className="btnbox">
                          <div className="countBtnbox">
                            <button onClick={() => handleMinusOne(id)}>
                              -
                            </button>
                            <span>{quantity}</span>
                            <button onClick={() => handlePlusOne(id)}>+</button>
                          </div>
                        </div>
                      </td>
                      <td className="tdTotalPricebox">
                        <span>{quantity * priceI}원</span>
                      </td>
                      <td className="tdBtnsbox">
                        <button className="orderBtn">주문하기</button>
                        <button
                          className="deleteThisBtn"
                          onClick={() => {
                            deleteThisProduct(id);
                          }}
                        >
                          삭제
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
                    <span>{totalPrice}</span>원
                  </td>
                  <td>
                    <span>{totalPrice}</span>원
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <div className="bottomBtnBox">
          <button>전체상품주문</button>
          <Link to="/">
            <button className="goShoppingBtn">쇼핑계속하기</button>
          </Link>
        </div>
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;
