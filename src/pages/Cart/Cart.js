import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import CartFooter from './CartFooter';
import './Cart.scss';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]);

  console.log('선택상품', checkedProducts);

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

  //const onChange = e => {};

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
  //       Authorization: localStorage.getItem('토큰이름'),
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
                <input
                  type="checkbox"
                  checked={isAllProductsChecked}
                  onClick={handleCheckAll}
                  //onChange={onChange}
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
                      //onChange={onChange}
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
