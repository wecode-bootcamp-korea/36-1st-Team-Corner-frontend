import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartProductTable from './CartProductTable';
import CartFooter from './CartFooter';
import './Cart.scss';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const discount = 0.8;

  useEffect(() => {
    let totalPrice = 0;
    cartProducts.map(product => {
      return (totalPrice +=
        product.quantity * Math.floor(product.price * discount));
    });
    setTotalPrice(totalPrice);
  }, [cartProducts]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://10.58.0.117:3000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(result => setCartProducts(result.data));
  }, []);

  const deleteAllProducts = () => {
    if (window.confirm('장바구니를 비우시겠습니까?')) {
      fetch('http://10.58.0.117:3000/carts', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
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
      fetch(`http://10.58.0.117:3000/carts/${id}`, {
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
    if (cartProductsCopy[selectedIndex].quantity !== 1) {
      cartProductsCopy[selectedIndex].quantity -= 1;
    }
    if (cartProductsCopy[selectedIndex].quantity === 1) {
      alert('최소 주문 수량은 1개입니다.');
    }

    fetch(`http://10.58.0.117:3000/carts/${id}`, {
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
    const selectedIndex = cartProducts.findIndex(product => product.id === id);
    cartProductsCopy[selectedIndex].quantity += 1;

    fetch(`http://10.58.0.117:3000/carts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        id: cartProductsCopy[selectedIndex].id,
        quantity: cartProductsCopy[selectedIndex].quantity,
      }),
    }).then(response => {
      if (response.status === 401) {
        alert('재고 수량이 부족합니다.');
      } else {
        setCartProducts(cartProductsCopy);
      }
    });
  };

  const handleOrderThis = id => {
    if (window.confirm('해당 상품을 주문하시겠습니까?')) {
      alert('주문이 완료되었습니다.');
    }
  };

  const handleOrderAll = () => {
    if (window.confirm('전체 상품을 주문하시겠습니까?')) {
      alert('주문이 완료되었습니다.');
    }
  };

  return (
    <div className="cart">
      <div className="cartContents">
        <h1 className="cartTitle">장바구니</h1>
        {cartProducts.length === 0 ? (
          <div className="cartEmpty">
            <h3 className="emptyAlert">장바구니가 비어 있습니다.</h3>
          </div>
        ) : (
          <div className="cartFull">
            <CartProductTable
              cartProducts={cartProducts}
              handleMinusOne={handleMinusOne}
              handlePlusOne={handlePlusOne}
              handleOrderThis={handleOrderThis}
              deleteThisProduct={deleteThisProduct}
            />

            <div className="deleteBtnBox">
              <button className="deleteAllBtn" onClick={deleteAllProducts}>
                장바구니비우기
              </button>
            </div>

            <table className="cartPrice">
              <thead>
                <tr>
                  <th>총 상품금액</th>
                  <th>결제예정금액</th>
                </tr>
              </thead>
              <tbody className="cartTotalPrice">
                <tr>
                  <td className="totalPrice">
                    <span>{totalPrice.toLocaleString()}</span>원
                  </td>
                  <td className="payPrice">
                    <span>{totalPrice.toLocaleString()}</span>원
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <div className="bottomBtnBox">
          <button className="orderAllBtn" onClick={handleOrderAll}>
            전체상품주문
          </button>
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
