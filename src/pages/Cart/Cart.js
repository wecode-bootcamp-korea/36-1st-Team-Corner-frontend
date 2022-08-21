import { check } from 'prettier';
import React, { useState, useEffect } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  console.log('상품리스트', cartProducts);

  const [checkedProducts, setCheckedProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/cartMockData.json', {
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
        <div className="cartGuide">
          <h2>이용안내</h2>
          <div className="guide">
            <h3>장바구니 이용안내</h3>
            <div>
              <span>
                선택하신 상품의 수량을 변경하시려면 수량변경 후 [변경] 버튼을
                누르시면 됩니다.
              </span>
              <span>
                [쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.
              </span>
              <span>
                장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나
                관심상품으로 등록하실 수 있습니다.
              </span>
              <span>
                파일첨부 옵션은 동일상품을 장바구니에 추가할 경우 마지막에
                업로드 한 파일로 교체됩니다.
              </span>
            </div>
          </div>
          <div className="guide">
            <h3>무이자할부 이용안내</h3>
            <div>
              <span>
                상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여
                [주문하기] 버튼을 눌러 주문/결제 하시면 됩니다.
              </span>
              <span>
                [전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든
                상품에 대한 주문/결제가 이루어집니다.
              </span>
              <span>
                단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을
                받으실 수 없습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
